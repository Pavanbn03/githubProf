import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class Reps extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            profile:{}
        }
    }
    componentDidMount(){
        axios.get('https://api.github.com/users/anilbg189/repos')
        .then(res=>{
            this.setState({data:res.data})
            //console.log(this.state.data);
            
        })
        .then(()=>{
            axios.get('https://api.github.com/users/anilbg189').then(resp=>{
                this.setState({profile:resp.data})
            })
        }
        )
        .catch(err=>{
            console.log("Error",err);
            
        })
       
    }
    render() {
       
        let displayData = this.state.data.map(response=>{
       return <h5 key={response.id} style={{textAlign:'center'}}>{response.name}</h5>})
        return (
            <div>
                <div  style={{float:'left'}}>
                    <Link to='/' ><button style={{width:'6rem',height:'2rem',borderRadius:'15px',backgroundColor:'#36D1DC',outline:'none'}}>GoBack</button></Link>
                </div>
                 
                <img src={this.state.profile.avatar_url} alt='avatar'></img> 
                <h3>Profile Name: {this.state.profile.login} </h3><hr></hr>
                <div style={{textAlign:'left'}}>{displayData}</div>
               
                
                
                
            </div>
        )
    }
}
