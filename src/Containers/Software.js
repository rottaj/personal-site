import React from 'react'
import Repos from '../Components/Repos'
import Navbar from '../Components/Navbar'
import SStack from '../Components/SStack'

export default class Software extends React.Component {

    styles = {
        container: {
            margin: '60px',
        },
        repos: {
            'margin-left': '60px'
        }
    }

    render() {
        return (
            <div>
            <Navbar/>
            <div style={this.styles.container}><SStack/></div>
            <h2 style={this.styles.repos}>Github repositories</h2>
            <Repos/>
            </div>
        )
    }
}