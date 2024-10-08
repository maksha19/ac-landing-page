import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

interface JsonRecord {
    [key: string]: any;
    preview: string; // Added preview field
    isSend: boolean;
}

const WhatsApp: React.FC = () => {
    const [editorValue, setEditorValue] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const [expandAll, setExpandAll] = useState<boolean>(false);


    // Function to apply markdown formatting
    const applyFormatting = (format: string) => {
        const textarea = document.getElementById("editor") as HTMLTextAreaElement;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start !== end) {
            const selectedText = editorValue.substring(start, end);

            // Apply formatting based on the format type
            let formattedText = "";
            if (format === "bold") {
                formattedText = `*${selectedText}*`;
            } else if (format === "italic") {
                formattedText = `_${selectedText}_`;
            } else if (format === "strike") {
                formattedText = `~${selectedText}~`;
            }

            const newValue =
                editorValue.substring(0, start) +
                formattedText +
                editorValue.substring(end);

            setEditorValue(newValue);
            updatePreview(newValue);
        }
    };

    // Function to render the formatted text in the preview (simple markdown logic)
    const renderPreview = (text: string) => {
        const boldPattern = /\*([^\*]+)\*/g; // Find *text*
        const italicPattern = /_([^_]+)_/g; // Find _text_
        const strikePattern = /~([^~]+)~/g; // Find ~text~

        // Replace markdown with HTML tags
        let formattedText = text
            .replace(boldPattern, "<strong>$1</strong>") // Replace *text* with <strong>
            .replace(italicPattern, "<em>$1</em>") // Replace _text_ with <em>
            .replace(strikePattern, "<del>$1</del>"); // Replace ~text~ with <del>

        return { __html: formattedText }; // Return as HTML safe string
    };

    // Function to send editor content to the backend
    const handleSend = async () => {
        console.log("JSON Data:", jsonData);
        try {
            for (const json of jsonData) {
                const response = await axios.post("https://30dc-2400-79e0-9070-28e8-907-43a0-d-ea76.ngrok-free.app/send-whatsapp-notification", {
                    text: json.preview,
                    senderList: [
                        {
                            name: json.name,
                            number: json.number
                        }
                    ]
                });
                console.log("Message sent:", response.data);
                json.isSend = true;
                setJsonData([...jsonData]); // Update the state with the new isSend value
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const [jsonData, setJsonData] = useState<JsonRecord[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Handle file drop
    const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const fileType = file.name.split('.').pop();
            setFileName(file.name);
            if (fileType === 'csv' || fileType === 'xlsx') {
                parseFile(file);
            } else {
                setErrorMessage('Only CSV and Excel files are allowed.');
            }
        }
    };

    // Parse file based on file type
    const parseFile = (file: File) => {
        const reader = new FileReader();
        const fileType = file.name.split('.').pop();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            const data = e.target?.result;

            if (fileType === 'xlsx' && typeof data === 'string') {
                parseExcelFile(data);
            } else if (fileType === 'csv' && typeof data === 'string') {
                parseCSVFile(data);
            }
        };

        if (fileType === 'xlsx') {
            reader.readAsBinaryString(file);
        } else if (fileType === 'csv') {
            reader.readAsText(file);
        }
    };

    // Parse Excel File
    const parseExcelFile = (binaryStr: string) => {
        setJsonData([]);
        try {
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const rows: any = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            handleParsedData(rows);
        } catch (error) {
            setErrorMessage('Error reading Excel file.');
        }
    };

    // Parse CSV File
    const parseCSVFile = (csvText: string) => {
        setJsonData([]);
        const rows = csvText.split('\n').map((row) => row.split(',').map((cell) => cell.trim()));
        handleParsedData(rows);
    };

    // Handle parsed data from file
    const handleParsedData = (rows: any[][]) => {
        if (rows.length === 0) {
            setErrorMessage('The file is empty or invalid.');
            return;
        }

        const headers = rows[0].map((header) => header.trim());
        const dataRows = rows.slice(1);

        // Check if headers are valid
        if (!headers.includes('isSend')) {
            const data = dataRows.map((row) => {
                const json: JsonRecord = row.reduce((acc, value, index) => {
                    acc[headers[index]] = value;
                    return acc;
                }, {} as JsonRecord);

                // Add default isSend value

                json.preview = ""; // Initialize preview field
                json.isSend = false;
                console.log("json", json);
                return json;

            });

            setJsonData(data);
            setErrorMessage(null);
        } else {
            setErrorMessage('Missing required headers.');
        }
    };

    // Update preview based on editor value and replace placeholders
    const updatePreview = (editorValue: string) => {
        console.log('Editor Value:', editorValue);
        console.log('JSON Data:', jsonData);

        const updatedData = jsonData.map((row) => {
            // Replace each placeholder with the corresponding value from the row
            let preview = editorValue.replace(/{(.*?)}/g, (_, key) => {
                const trimmedKey = key.trim();
                if (row[trimmedKey] !== undefined) {
                    console.log(`Replacing {${trimmedKey}} with ${row[trimmedKey]}`); // Log replacements
                    return row[trimmedKey]; // Replace with the actual value
                }
                console.warn(`Placeholder {${trimmedKey}} not found in row`); // Warn for missing keys
                return `{${trimmedKey}}`; // Return placeholder if key is not found
            });
            return { ...row, preview };
        });
        setJsonData(updatedData);
    };

    // Handle editor value change
    const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setEditorValue(newValue);
        updatePreview(newValue);
    };

    return (
        <div className="flex flex-row justify-center items-center h-screen bg-gray-100">
            <div className="bg-white w-1/2 m-4 p-6 h-5/6 rounded-lg shadow-md ">
                <h1 className="text-2xl font-bold mb-4">Custom Markdown Editor</h1>
                {/* Formatting buttons */}
                <>
                    <div className="mb-4 space-x-2">
                        <button
                            onClick={() => applyFormatting("bold")}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                        >
                            Bold
                        </button>
                        <button
                            onClick={() => applyFormatting("italic")}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                        >
                            Italic
                        </button>
                        <button
                            onClick={() => applyFormatting("strike")}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                        >
                            Strikethrough
                        </button>
                    </div>
                    {/* Flex container to show editor and preview side by side */}
                    <div className=" w-full ">
                        {/* Textarea for editor input */}
                        <textarea
                            id="editor"
                            className="w-full h-80 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={editorValue}
                            onChange={handleEditorChange}
                            placeholder="Select text and click buttons to format..."
                            onScroll={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                const previewElement = document.querySelector<HTMLDivElement>('.preview');
                                if (previewElement) {
                                    previewElement.scrollTop = target.scrollTop;
                                }
                            }}
                        />
                        {/* Preview */}
                        <div
                            className="w-full mt-4 h-80 p-2 overflow-auto whitespace-pre-wrap bg-gray-100 border rounded-lg preview"
                            dangerouslySetInnerHTML={renderPreview(editorValue)}>
                        </div>
                    </div>
                </>
            </div>

            {/* File upload card */}
            <div
                className="m-4 bg-white p-6 rounded-lg shadow-md h-5/6 w-1/2"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
            >
                <h1 className="text-2xl font-bold mb-4">Upload File</h1>

                <div className="border-dashed border-2 border-gray-400 h-24 flex justify-center items-center">
                    {fileName ? <p className="text-gray-600">{fileName}</p> : <p className="text-gray-600">Drag and drop an Excel or CSV file here</p>}
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <p className="mt-4 text-red-500">{errorMessage}</p>
                )}

                {/* Render Table if data is present */}
                {jsonData.length > 0 && (
                    <div className="mt-4 h-3/5 overflow-x-auto">

                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200 sticky  top-0">
                                    {Object.keys(jsonData[0]).map((header) => (
                                        <th key={header} className="px-4 py-2 border">{header}</th>
                                    ))}

                                </tr>
                            </thead>
                            <tbody>
                                {jsonData.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.values(row).map((value, colIndex) => (
                                            colIndex === 2 ? <td className="px-4 py-2 border">
                                                <div
                                                    className="w-full h-full overflow-auto whitespace-pre-wrap bg-gray-100 p-2 border rounded-lg"
                                                    dangerouslySetInnerHTML={renderPreview(value.toString())} // Use dangerouslySetInnerHTML to render the markdown
                                                ></div>
                                            </td> : <td key={colIndex} className="px-4 py-2 border">{value.toString()}</td>

                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {/* Display total count */}
                {jsonData.length > 0 && (
                    <div className="mt-4 flex justify-between items-center">
                        <p className="text-gray-600">
                            Total: {jsonData.length}
                        </p>
                        <div className="flex space-x-1 items-center">
                            <span style={{ color: expandAll ? "red" : "green" }}>{expandAll ? "Collapse All Preview" : "Expand All Preview"}</span>
                            <button
                                onClick={() => setExpandAll(!expandAll)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >

                                {expandAll ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>}
                            </button>
                        </div>
                    </div>
                )}

                {/* Send button */}
                <div className="bottom-0 left-0 right-0 p-4 bg-white">
                    <button
                        onClick={handleSend}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatsApp;
