import { createContext,useState } from "react";
import React from "react";
import Comp from "./Comp";


export const Data = createContext();
export const Data1 = createContext();


const App = () => {
  const [val,setval] = useState('s'); 
  return (
    <div>
      <Data.Provider value={val}>
        <Data1.Provider value="SomeValue1">
        <Comp />
        </Data1.Provider>
      </Data.Provider>
    </div>
  )
}


export default App
