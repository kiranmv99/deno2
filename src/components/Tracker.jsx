import { useState } from "react";
function Tracker()
{
    let styles={
        bgcolor:"red"
    }
    let[tasklist,setTasklist]=useState
    ([
      {employeeid:"",employee:"akash",task:"design layout",start:"1/2/2023",end:"25/4/2023"},
      {employeeid:"",employee:"kiran",task:"design layout",start:"1/2/2023",end:"25/4/2023"},
      {employeeid:"",employee:"rudresh",task:"design layout",start:"1/2/2023",end:"25/4/2023"},
      {employeeid:"",employee:"raju",task:"design layout",start:"1/2/2023",end:"25/4/2023"},
      {employeeid:"",employee:"prajwal",task:"design layout",start:"1/2/2023",end:"25/4/2023"},
    ]
    )
    let addNewTask=(e)=>{
        e.preventDefault();
        let newTask={
            employeeid:document.getElementById("empid").value,
            employee:document.getElementById("emp").value,
            task:document.getElementById("task").value,
            start:new Date().toLocaleTimeString(),
            end:document.getElementById("end").value
        }
        let result=tasklist.some((t,i,a)=>{return t.employee==newTask.employee && t.task==newTask.task});
        if(result)
        {
            alert("task already present")
        }
        else
        {
            let temp=[...tasklist];
            temp.push(newTask);
            setTasklist(temp);
            alert("new task added")
        }
    }
    let deleteTask=(task)=>{
         let temp=tasklist.filter((t,i,a)=>{return t.employee !=task.employee && t.task != task.employee})
        //let temp=tasklist.filter((t,i,a)=>{return t.employeeid!=task.employeeid})

        setTasklist(temp);
        alert("task deleted")
    }
    return(
        <div className="tracker" >
            <h1>Employee Task time Tracker</h1>
            <hr />
            <form onSubmit={addNewTask}>
            <input type="text" placeholder="employee id" id="empid" required />
              <input type="text" placeholder="employee name" id="emp" required />
              <input type="text" placeholder="Task name" id="task" required />
              <input type="date" id="end" />
              <input type="submit" />
            </form>
            <table border="3px" cellPadding="5px" >
                <thead style={styles}>
                <th>SL</th>
                <th>employeeid</th>
                <th>Employee name</th>
                <th>Task</th>
                <th>start</th>
                <th>end</th>
                <th>Action</th>
                </thead>
                <tbody>
                    {
                        tasklist.map((t,i)=>{return(
                            <tr key={t.task+i}>
                                <td>{(i+1)*2}</td>
                                <td>{t.employeeid}</td>
                                <td>{t.employee}</td>
                                <td>{t.task}</td>
                                <td>{t.start}</td>
                                <td>{t.end}</td>
                                <td><button onClick={()=>{deleteTask(t)}}>delete</button></td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Tracker;