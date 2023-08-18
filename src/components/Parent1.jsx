// import { Component,PureComponent } from "react";
// import Child from "./Child";

import { useCallback, useState } from "react";
import Child from "./Child";


// class Parent1 extends PureComponent
// {
//     constructor()
//     {
//         super()
//         this.state={count1:10}
//     }
//     render()
//     {
//         console.log("component rerendered");
//         return(
//             <div>
//                 <h1>This is a class comp</h1>
//                 <h2>COUNT:{this.state.count1}</h2>
//                 <button onClick={()=>{this.setState({count1:this.state.count1+0.5})}}>
//                     increase c1
//                 </button>
//                 <hr />
//                 <Child />
//             </div>
//         )
//     }
// }
// export default Parent1

function Parent1 () 
{
    let[count1,setCount1]=useState(10)
    let[count2 ,setCount2]=useState(100);

    console.log("parent renderd");

    let changeCount1=()=>{setCount1(count1+100);}

    let changeCount2=()=>{setCount2(count2+100);}
    return ( 
        <div>
             <h1>PARENT COMP</h1>
             <h1>COUNT:{count1}</h1>
             <h1>COUNT:{count1}</h1>

             <button onClick={changeCount1}>c1</button>
             <button onClick={changeCount2}>c2</button>
             <hr />

             <Child count1={count1}/>
             <Child count1={count2}/>

           
        </div>
     );
}
 
export default Parent1;