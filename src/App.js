
// function App() {
//   return ( <div>
//     <h1>This is App compomnemt</h1>
//     <hr/>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum voluptatem nobis voluptate iusto, qui veniam nostrum repellat, impedit, quam ut facere ab veritatis ratione itaque blanditiis obcaecati laboriosam? Vero.</p>


// import Navbar from "../public/components/Navbar";

  
//   </div>
//   );
// }
// import {Component, useState} from 'react'
// import Navbar from '../public/components/Navbar'
// class App extends Component
// {
//    render()
//    {
//     return(
//       // <div>
//       //   <h1>this is class component</h1>
//       //   <hr />
//       //   {console.log("hi")}
//       //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, tenetur. Aliquam nisi neque omnis perspiciatis a asperiores nemo odio id sunt, iusto sequi temporibus explicabo, ea nesciunt accusamus magni libero.</p>
//       // </div>
//       // console.log("hi")
//       <h1> hii</h1>
//       // console.log("hello");
//     )
//    }
// }
// function App(){
// let styles={
//   backgroundColor:"red",
//   color:"white",
//   margin:"20px",
//   textAlign:"center",
//   textDecorationLine:"underline",
//   textDecorationColor:"black"
// }
//   return(
//     <div style={styles}>
//       <h1 style={{fontSize:"30px"}} >header text</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?</p>
//     </div>
//   )
// }
// function App(){
//   return(
//     <div >
//       <h1>header text</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?</p>
//     </div>
//   )
// }
// function App(){
//   return(
//     <div className="input-box">
//       <input type="text" /><br />
//       <span>Username</span>
//     </div>
//   )
// }
// export default App;


// 0 arguments and argumented function
// function App(){

//     let x=()=>{
//       console.log("this is zero argument constructor ");
//     }
//     let y=(a,b)=>{
//       console.log("this is argumented function" +a,b);
//       console.log(a,b);
//     }
//     return(
//       <div className="input-box">
//         <h1>Event listeners</h1>
//         <hr />
//         <button onClick={x()}>click to execute x</button>
//         <button onClick={()=>{y(10,20)}}> click to execute y</button>
//       </div>
//   )
// }
// export default App;


//counter
// import { useState } from 'react';
// function App(){
//   let [count , setCount]=useState(0);
//   let increaseValue=()=>{
//     setCount(count+10);
//   }
//   return(
//  <div className="input-box">
//   <h1>{count}</h1>
//   <button onClick={ increaseValue}>Increase</button>
//  </div>
//   );
// }
// export default App;
// import {useState} from 'react'
// function App(){
//   let [period ,setperiod]= useState("evening");
//   return(
//     <div className="input-box">
//       {period=="evening"&& <h1>🌻  </h1> }
//       {period=="morning" ? <h1>good morning******</h1>: 
//                      <h1>good evening*****</h1> }
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, doloremque.</p>
//     </div>
//   );
// }
// export default App;
import {useState} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navbar1 from './styles/Navbar1';
import Tracker from './components/Tracker';
import Parent from './components/Parent';
import Flag from './styles/Flag';
import Translate from './components/Translate';
import Translate1 from './components/Translate1';
import Parent1 from './components/Parent1';

// function App(){
//   let [count,setCount]=useState(0);
//   let color1={color:"blue"}
//   let color2={color:"red"}

//   return(
//     <div className="input-box">
//       <h1 style={count%2==0 ? color1 : color2 } > {count} </h1>
//       {count%2==1 ? <h1>odd</h1>: <h1>even</h1> }
//                       <button onClick={()=>{setCount(count+1)}}> increment</button>
//                       <button onClick={()=>{setCount(count-1)}}> decrement</button>
//     </div>
//   );
// }
// export default App;

// function App(){
//   let [LightTheme,setLightTheme]=useState(true)
//   let light={color:"gold",backgroundcolor:"white"}
//   let dark={color:"red",backgroundcolor:"gold"}
//   return(
//     <>
//     <div className="input-box" style={LightTheme ?light:dark}>
//       <button onClick={()=>{setLightTheme(true)}}>light theme</button>
//       <button onClick={()=>{setLightTheme(false)}}>dark theme</button>
//       <h1>sample text data</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquam.</p>
//     </div>
//     </>
//   )
// }
// export default App;

function App(){

  return(
    <>
     <Translate1/>
     <Parent1/>
    
    </>
  )
}
export default App;