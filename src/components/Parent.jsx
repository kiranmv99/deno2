import { useState } from "react";
import Child from "./Child";

const Parent = () => {
   let[user,setUser]= useState("gunda")
    return (  
        <div>
           <h1>This is app component</h1>
           <h2>{user}</h2>
           <hr />
           <Child user={user}/>
        </div>
    );
}
 
export default Parent;