import React from 'react'

export default class SocialMediaNav extends React.Component {

    styles = {
        gh: {
            
        },
        ig: {

        },
        sc: {

        },
        lk: {

        }
    }

    render() {
        return (
            <div className="navBar">
                <ul>
                    <li className="gh" id="snav"><a href="https://www.github.com/rottaj">Github</a></li>
                    <li className="ig" id="snav"><a href="https://www.instagram.com/jackrotta">Instagram</a></li>
                    <li className="twitter" id="snav"><a href="https://twitter.com/rottaj1">Twitter</a></li>
                    <li className="sc" id="snav"><a href="https://www.snapchat.com/add/jackrotta2">Snapchat</a></li>
                    <li className ="linkedin" id="snav"><a href="https://www.linkedin.com/in/jack-rotta-656861186/">Linkedin</a></li>
                </ul>
            </div>
        )
    }
}