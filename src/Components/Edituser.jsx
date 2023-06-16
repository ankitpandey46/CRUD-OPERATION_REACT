import React from 'react'
import  { useEffect } from "react"
import style from "./home.module.css"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"


const Edituser = (e) => {
    
    let [name,setName]=useState("")
    let [phone,setPhone]=useState("")
    let navigate=useNavigate()
    let {index}=useParams()
    console.log(index);
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((res)=>{
            console.log(res.data)
            setName(res.data.name)
            setPhone(res.data.phone)                       
        })        
    },[])    

    let update=(e)=>{
        e.preventDefault()
        let payload={name,phone}
        axios.put(`http://localhost:3000/content/${index}`,payload)
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
                    <th colSpan="2"><h1>Update-User</h1></th>
                </tr><br />
                <tr>
                    <td><label htmlFor="">NAME</label></td>
                    <td>:<input type="text" value={name} onChange={(e)=>{e.preventDefault() ; setName(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">PHONE</label></td>
                    <td>:<input type="text" value={phone} onChange={(e)=>{e.preventDefault() ; setPhone(e.target.value)}} /></td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={update}>Upadte</button></th>                    
                </tr>
            </table>
        </section>
    )
}

export default Edituser