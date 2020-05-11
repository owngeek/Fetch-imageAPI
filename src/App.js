import React,{Component} from "react"
import './App.css'
import FetchComponent from "./component/FetchComponent"
import FetchComponentTwo from"./component/FetchComponentTwo"
import FetchComponentThree from "./component/FetchComponentThree"
class App extends Component{


    render(){
        return(
            <div>
             <FetchComponent/>
             <FetchComponentTwo/>
             <FetchComponentThree/>
            </div>
        )
    }
}
export default App