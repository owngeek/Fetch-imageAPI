import React from"react"
class FetchComponentTwo extends React.Component{
constructor(){
    super()
    this.state={
        loadimage:"../slide/slide-1.jpg"
    }
    this.myFetchtwo=this.myFetchtwo.bind(this)
}

myFetchtwo(){
fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=>{
    return res.json()
})
.then((result)=>{
    
    this.setState({
        loadimage: result.message 
    })
})





}
    render(){


        return(
            <div>
<img style={{width:500}}src={this.state.loadimage}/>
<button onClick={this.myFetchtwo}>imagemore</button>


            </div>
        )
    }
}
export default FetchComponentTwo