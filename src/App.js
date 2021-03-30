
import './App.css';
import React, { Component } from 'react'

 class App extends Component {
   constructor(props){
     super(props)
     this.state={

      fullName:'Aya Rjiba',
      bio:'Thank God it’s Friday',
      profession:'Financier',
      imgSrc:<img src="/img.PNG" alt="myimage" />,
      show:false,
     count:0
     }
   }
   componentDidMount=()=>{
     setInterval ( ()=>{
       this.setState({count:this.state.count+1})
     },1000)

     }
     componentWillUnmount=()=>{

     }
   
   showName=()=>{

    this.setState({show:!this.state.show})
   }
  render() {
    return (
      <div>
        { this.state.show ? <h2 className='img'>{this.state.imgSrc}</h2>:null}
       { this.state.show ? <h1 className='a'> {this.state.fullName}</h1> :null}
       { this.state.show ? <h2 className='bio'>{ this.state.bio}</h2> :null}
       { this.state.show ? <h2 className='prof'>   {this.state.profession}</h2>:null}
        
       <button className='btn' onClick={this.showName}>Show Me</button>
       <h3 className='count'> {this.state.count} </h3>
      </div>
    )
  }
}

export default App

