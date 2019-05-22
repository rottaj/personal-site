import React from 'react'

export default class SocialMediaNav extends React.Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li className="gh" id="snav"><a href="https://www.github.com/rottaj">Github</a></li>
                    <li className="ig" id="snav"><a href="https://www.instagram.com/jackrotta">Instagram</a></li>
                    <li className="twitter" id="snav"><a href="#">Twitter</a></li>
                    <li className="sc" id="snav"><a href="https://www.snapchat.com/add/jackrotta2">Snapchat</a></li>
                    <li className ="linkedin" id="snav"><a href="#">Linkedin</a></li>
                </ul>
            </div>
        )
    }
}