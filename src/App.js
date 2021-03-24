import React, {useState} from 'react';
import './App.css';

import AppContext from './AppContext';

import StatusHistory from './components/StatusHistory';
import StatusUpdate from './components/StatusUpdate';

function App() {
  const context = useState([]);

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <div className="container">
          <StatusUpdate />
          <StatusHistory />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
