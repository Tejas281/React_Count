import React from 'react';
import './App.css';
import Props from './Props';
//import  Counter  from './Counter';
function App() {

//this method are defined of the destructuring method
  const employeInformation =[
    {
      firstname :"Rathod",
      lastname :"Tejas",
      age :"21",
      employeeId : "1" 
    },
    {
      firstname :"Chuhan" ,
      lastname :"Akash" ,
      age :"21",
      employeeId : "2"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
    {//<h2>Welcome to My Counter :</h2>      
      //<Counter/>
    }
    <h1> Company Directory</h1>

  {
    employeInformation.map((props)=>{
     //this are used to distructuring
      // const {firstname,lastname,age} =props;
  
    return<Props key={props.employeeId} {...props}/>;
          // this are use to destructuring <Props firstname={firstname} lastname={lastname} age={age}/>

})}
  {/*
  //this are defined of props method.... 
     <Props firstname="Rathod" lastname="Tejas" age="21"/>
    <Props firstname="Chuhan" lastname="Akash" age="21"/>
  
  */}
    </header> 
    </div>
  );
}

export default App;
