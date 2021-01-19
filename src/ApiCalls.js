import React,{useEffect, useState} from "react";
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom'

const ApiCalls=()=>{
    
    const [customer, setCustomer]= useState([]);

useEffect(()=>{
getAllCustomers();
},[])

    const getAllCustomers=async()=>{
         await axios.get("http://localhost:8000/spring-crm-rest/api/customer").then((response)=>{
             console.log(response)
             setCustomer(response.data)
         })

    }

const deleteCustomer=async(id)=>{
await axios.delete(`http://localhost:8000/spring-crm-rest/api/customer/${id}`).then((response)=>{
    console.log("deleted successfully");
    getAllCustomers();
})

}

return (
<>
<div className="container">
                <div className="py-4">
                    <h1>Home Pages</h1>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">SR NO</th>
      <th scope="col">PERSONID</th>
      <th scope="col">FIRSTNAME</th>
      <th scope="col">COSTOFITEM</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
   {
       customer.map((value, index)=>(
<tr key={value.id}>
       <th scope="row">{index+1}</th>
       <td> {value.id}</td>
       <td> {value.firstName}</td>
       <td> {value.lastName}</td>
       <td> {value.email}</td>

        <td>
           {/* <Link id="view" className="btn btn-primary mr-2">View</Link>
           <Link id="update" 
           className="btn btn-warning mr-2" 
            to={`/user/update/${value.personID}`}>Update</Link> */}
           <Link id="delete" className="btn btn-danger " 
           onClick={()=>{deleteCustomer(value.id)}}
           >Delete</Link>

       </td> 
</tr>


       ))
   }
  </tbody>
</table>


                </div>
            </div>
 

</>
)


}

export default ApiCalls;