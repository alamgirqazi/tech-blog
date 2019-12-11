// Import typefaces

import 'typeface-montserrat'
import 'typeface-merriweather'

import React from 'react'
import profilePic from './alam01.jpg'
import { rhythm } from '../utils/typography'

// import profilePic from './alamgir-img.png'



class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Alamgir Qazi`}
          style={{
            borderRadius:'50%',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Hey there, I'm Alamgir Qazi. I work as a full-stack JavaScript Developer. I'll be sharing what I've learned about Angular, Node, Docker, Kubernetes and other cool things.
        </p>
      </div>
    )
  }
}

export default Bio
