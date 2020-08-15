import React from 'react';
import './App.css';
import { initNotification } from './services/firebaseService';


function App() {
  return (
    <div className="App">
      <h1>Hello Progressive Web App</h1>
      <button onClick={initNotification}>
        Configure Notifications
    </button>
    </div>
  );
}

export default App;
