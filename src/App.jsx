import Homepage from "./Components/Homepage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import User from "./Components/User"
import Create from "./Components/Create"
import Edituser from "./Components/Edituser"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homepage/>
            <Routes>
                <Route path='/new' element={<Create/>} />
                <Route path='/users' element={<User/>} />
                <Route path='/edit/:index' element={<Edituser/>} />
            </Routes>
            </BrowserRouter>            
        </div>
    )
}
export default App

