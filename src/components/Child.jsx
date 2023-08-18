// import { memo } from "react";
// import { Component } from "react";

// class Child extends Component
// {
    
//     render()
//     {
//         console.log("child comp rendered");
//         return(
//             <div>
//                 <h1>this is child class</h1>
//                 <h1>{this.props.count1}</h1>
//             </div>
//         )
//     }
// }
 
// export default memo(Child);

const Child = () => {
    return (  
        <div>
                 <h1>this is child class</h1>
               {/* <h1>{this.props.count1}</h1> */}
             </div>
    );
}
 
export default Child;