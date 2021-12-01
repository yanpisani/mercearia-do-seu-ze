import React from 'react';
import Routes from './routes/';

import './App.scss';

export default function App() {
  return (
    <div>
      <div className="background"></div>
      <div className={`app`}>
        <Routes />
      </div>
    </div>
  );
}
