import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const User=()=>{
    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/content")
        .then((response)=>{
            setData(response.data)            
        })
        .catch(()=>{
            setData("Error")            
        })
    },[])

    let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/content/${id}`)
        window.location.assign("/users")
    }
    return(
        <section id={style.user}>
           {data.map((x)=>{
                return(
                    <div id={style.cards}>
                        <table>
                            <tr>
                                <th><h3>sr no {x.id}</h3></th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>: {x.name}</td>
                            </tr>
                            <tr>
                                <td>PHONE</td>
                                <td>: {x.phone}</td>
                            </tr>
                            <tr>
                                <th><Link to={`/edit/${x.id}`}><button>Edit</button></Link></th>
                                <th><button onClick={()=>{deleteData(x.id)}} >Delete</button></th>
                            </tr>
                        </table>
                    </div>
                )
           })}
        </section>
    )
}
export default User