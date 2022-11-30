import React from 'react'
import {BsTwitter, BsInstagram , BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className='app__social'>
           <div>
            <a href="https://leetcode.com/itsaslowball_leetcode/">
            <SiLeetcode />
            </a>
        </div>
        <div>
            <a href="https://auth.geeksforgeeks.org/user/itsaslowball/practice">
            <SiGeeksforgeeks />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/itsaslowball/">
            <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://github.com/itsaslowball">
            <AiFillGithub />
            </a>
        </div>
        <div>
            <a>
            <BsInstagram />
            </a>
        </div>
       
        
     
    </div>
  )
}

export default SocialMedia