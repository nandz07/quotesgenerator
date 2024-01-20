
import { useEffect, useState } from 'react';
import './App.css';
import NewComp from './NewComp';
import NewComp2 from './NewComp2';

function App() {
  
  const [state,setState]=useState(1000)
  useEffect(()=>{
    let s=true
    if(s){
      setState(123123)
    }else{
      setState(10000)
    }
  },[state])
  return (
    <>
    <NewComp>
      <div>
      <NewComp2></NewComp2>
      </div>
    </NewComp>
    
    </>
  );
}

export default App;
