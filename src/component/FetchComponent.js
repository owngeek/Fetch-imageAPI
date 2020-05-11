import React from "react"
class FetchComponent extends React.Component{
constructor(){
    super()
    this.state={
        dogimage:''
    }
    this.myFetch=this.myFetch.bind(this)
}
myFetch(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res)=>{
        return res.json()
    })
.then((result)=>{
        this.setState({
dogimage:result.message
        })
    })
}

    render(){
        return(
            <div>
             <img src={this.state.dogimage}/>  
             <button onClick={this.myFetch}>loadmre</button>
            </div>
        )
    }
}
export default FetchComponent