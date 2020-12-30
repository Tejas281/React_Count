import React from 'react';
import './App.css';
import Props from './Props';
//import  Counter  from './Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
    {//<h2>Welcome to My Counter :</h2>      
      //<Counter/>
    }
    <h1> Company Directory</h1>

    <Props firstname="Rathod" lastname="Tejas" age="21"/>
    <Props firstname="Chuhan" lastname="Akash" age="21"/>
    </header> 
    </div>
  );
}

export default App;
