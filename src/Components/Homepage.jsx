
import { Link } from "react-router-dom"
import style from "./home.module.css"
const Homepage=()=>{
    return(
        <div>
            <section id={style.nav}>
            <Link to='/new'>Contacts</Link>
            {/* <Link to='/users'>USERS</Link>             */}
        </section>        
        </div>
    )
}
export default Homepage