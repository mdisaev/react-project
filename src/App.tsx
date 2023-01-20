import React from 'react';
import { Timer } from './components/Timer';
import { Input } from './components/Input';

function App() {

  return <div style={{'display': 'flex', flexDirection: 'column'}}>
    <div style={{'display': 'flex', justifyContent: 'space-around'}}>
      <div>
    <Input inputId={'input-1'} inputProcess={processInput} />
    </div>
        <Timer inputId={'input-1'}></Timer>
        <Timer cityOrCountry={'Moldova'}></Timer>
     </div>
     <div style={{'display': 'flex', justifyContent: 'space-around'}}>
        <Timer cityOrCountry={'Montenegro'}></Timer>
        <Timer cityOrCountry={'Paris'}></Timer>
      </div>
     
   </div>

}

function processInput(value: string): string {
      let res: string = '';
      if(value.toLowerCase().includes("hello")) {
          res = "get tired from HELLO. It's forbidden word";
      }
      return res;
    }


// function App() {
//   function processInput(value: string): string {
//     let res: string = '';
//     if(value.toLowerCase().includes("hello")) {
//         res = "get tired from HELLO. It's forbidden word";
//     }
//     return res;
    
//   }
//   return <Input inputId={'input-1'} inputProcess={processInput} />

// }

export default App;


// function App() {
//   function processInput(value: string): string {
//     let res: string = '';
//     if(value.toLowerCase().includes("hello")) {
//         res = "get tired from HELLO. It's forbidden word";
//     }
//     return res;
    
//   }
//   return <Input inputId={'input-1'} inputProcess={processInput} />

// }

