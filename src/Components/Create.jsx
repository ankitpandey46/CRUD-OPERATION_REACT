import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"
const Create=()=>{

    let [name,setName]=useState("")
    let [phone,setPhone]=useState("")
    let navigate=useNavigate()
    
    let formhandle=(e)=>{
        e.preventDefault()
        let payload={name,phone}
        axios.post("http://localhost:3000/content",payload)
        .then(()=>{
            console.log("Data has been added");
        })
        .catch(()=>{
            console.log("Error");
        })
        navigate("/users")
    }
    return(
        <section id={style.create}>
            <table>
                <tr>
                    <th colSpan="2"><h1>ADD CONTACTS</h1></th>
                </tr><br />
                <tr>
                    <td><label htmlFor="">NAME</label></td>
                    <td>:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">PHONE</label></td>
                    <td>:<input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} /></td>
                </tr>                
                <tr>
                    <th colSpan="2"><button onClick={formhandle}>Submit</button></th>                    
                </tr>
            </table>
        </section>
    )
}
export default Create