import React from 'react'
import Repos from '../Components/Repos'
import Navbar from '../Components/Navbar'
import SocialMediaNav from '../Components/SocialNav'
import PopRepos from './PopRepos'
import BottomSocilNav from '../Components/bSocialNav'
//import socketIO from 'socket.io-client'
import '../Home.css'
//import {Link} from 'react-router-dom'
 
//const io = socketIO('localhost:3000')


export default class Home extends React.Component {
    render() {
      return(
          <div class="mainContainer">
          <Navbar/>
            <div class="first-pic">
              <div class="ptext">
                  Jack Rotta

                  <p>Software Developer.</p>
                  <SocialMediaNav/>
              </div>
            </div>

            <section class="section section-dark">
              <p className = "section-text">
                  About


                <p>Currently Enrolled In Flatiron's immersive full-stack web development bootcamp</p>
              </p>
            </section>

            <div class="pimg2">
              <div class="ptext2">
                <h2>Pinned Projects</h2>
              </div>
              <div class="popRepos">
              <PopRepos/>
              </div>
            </div>
 
            <div class="first-pic">
              <div class="ptext">
                  coming soon!
              </div>
            </div>
            <BottomSocilNav/>
          </div>



      )
    }
}