import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Button extends Component {
    render() {
        return (
            <div style={{float:'left'}}>
                <Link to='/reps'><button style={{width:'6rem',height:'2rem',borderRadius:'15px',backgroundColor:'#36D1DC',outline:'none'}}>Show reps</button> </Link>
                
            </div>
        )
    }
}
