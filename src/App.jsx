import React, { useEffect, useState  } from 'react'
import {useNavigate} from 'react-router-dom'
import { EmployeeData } from './EmployeeData';


function App() {

   const[data,setdata]=useState([]);
   const[firstName,setfirstName]=useState('');
   const[lastName,setlastName]=useState('');
   const[Age,setAge]=useState();
   const[Id,setId]=useState(0);
   const navigate = useNavigate();
   
   useEffect(()=>{
    setdata(EmployeeData)
   })


   const handleEdit=(id)=>{
    const dt = data.filter(item=>item.id === id);
    if(dt!==undefined){
      setId(id);
      setfirstName(dt[0].firstName)
      setlastName(dt[0].lastName)
      setAge(dt[0].Age)
    }
   }


   const handleSave=()=>{
    e.preventDefault();
    const dt = [...data];
    const newObject={
      id:'EmployeeData.length + 1',
      firstName:'firstName',
      lastName:'lastName',
      Age:'Age'
    }
    dt.push(newObject);
    setdata(dt);
   }

   const handleClear=(id)=>{
    setId('');
    firstName('');
    lastName('');
    Age('')

   }
   const handleDelete=(Id)=>{
    
    if(Id>0)
     {
       const dt = data.filter(item => item.id !== Id)   
        setdata(dt)
         }

    
   }

    
  return (
    
    <>
    <div className="app">
    <div style={{display:'flex',justifyContent:'center'}}>
      <div>
        <label>First Name:
         <input type="text"  placeholder='first Name' onChange={(e)=>setfirstName(e.target.value)} value={firstName}/>
        </label>
      </div>
      <div>
        <label>last Name:
         <input type="text"  placeholder='last Name' onChange={(e)=>setlastName(e.target.value)} value={lastName}/>
        </label>
      </div>
      <div      >
        <label>Age:
         <input type="text"  placeholder='Age' onChange={(e)=>setAge(e.target.value)} value={Age}/>
        </label>
      </div>
      <div>
      <button onClick={(e)=>handleSave()} >Save</button>
      <button onClick={(e)=>handleClear()}>Clear</button>
      </div>
    </div>
      <table>
        <thead>
          <tr>
            <td>sr.no</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>
              Action
            </td>
          </tr>
        </thead>
        <tbody>
            {
              data.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td> {item.id}</td>
                    <td>{item.firstName}</td>
                    <td> {item.lastName}</td>
                    <td>{item.Age}</td>
                    <td>
                      <button onClick={(e)=>handleEdit(item.id)}>Edit</button>
                      <button onClick={(e)=>handleDelete(Id)}>Delete</button>
                      {/* <button onClick={()=>navigate(-1)}>Update</button> */}
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>

    </div>
    </>
  )
  }
     
          
   

export default App
