import React from 'react'
import Repos from '../Components/Repos'
import Navbar from '../Components/Navbar'
import '../Home.css'
//import {Link} from 'react-router-dom'
 


export default class Home extends React.Component {
    render() {
      return(
        <body>
          <div class="first-pic">
          <Navbar/>
            <div class="ptext">
                Jack Rotta

                <p>Self Learning Software Developer</p>
            </div>
          </div>

          <section class="section section-dark">
            <p className = "section-text">
                <h2>Show me the code!</h2>
                <Repos/>
            </p>
          </section>

          <div class="pimg2">
            <div class="ptext">
                About

                <p>Currently Enrolled In Flatiron's immersive full-stack web development bootcamp</p>
            </div>
          </div>

          <section class="section section-dark">
            <p className = "section-text">
                Solution Stack:
                <p> Coming Soon! </p>
            </p>
          </section>


          <div class="first-pic">
            <div class="ptext">
                Projects?
            </div>
          </div>
        </body>



      )
    }
}