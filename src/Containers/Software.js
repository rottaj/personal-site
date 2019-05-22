import React from 'react'
import Repos from '../Components/Repos'
import Navbar from '../Components/Navbar'
import SStack from '../Components/SStack'

export default class Software extends React.Component {
    render() {
        return (
            <div>
            <Navbar/>
            <SStack/>
            <Repos/>
            </div>
        )
    }
}