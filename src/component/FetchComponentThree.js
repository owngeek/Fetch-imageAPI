import React from "react"
class FetchComponentThree extends React.Component{
   
constructor(){
    super()
    this.state={
        text:'cc'
    }
    this.inputtext=this.inputtext.bind(this)
}

inputtext(e){
    this.setState({
        text:e.target.value
    })
}

    render(){
        return(
            <div>
    <h3>{this.state.text}</h3>
<input type="text" onChange={this.inputtext}></input>

            </div>
        )
    }
}
export default FetchComponentThree