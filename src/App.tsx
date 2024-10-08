import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen  min-w-screen bg-gray-100">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
