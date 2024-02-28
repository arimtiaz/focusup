import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import '../Popup/Popup.css'
const Popup = () => {
  return (
    <div className="App bg-slate-500">
      <header className="App-header">
      <h1 className='text-2xl underline font-semibold text-blue-200'>Hello World</h1>
      <p>Na Na</p>
      </header>
      <div className=' bg-violet-700'></div>
    </div>
  );
};

export default Popup;
