import React,{useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { AppWrap, MotionWrap } from '../../Wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => { 

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type =="abouts"]';
    
    client.fetch(query)
      .then((data) =>setAbouts(data))
  }, [])
  

  const about = abouts.map(function(edu, index){
    return (
      <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type:'tween'}}
        className="app__profile-item"
        key={index}
      >
        <img src={urlFor(edu.imgUrl)} alt={edu.title} />
        <h2 className='bold-text' style={{marginTop:20}} >{edu.title}</h2>
        <p className='p-text' style={{marginTop:10}} >{edu.school}</p>
        <p className='p-text' style={{marginTop:10}} >{edu.year}</p>
        <p className='p-text' style={{marginTop:10}} >{edu.marks}</p>
      </motion.div>
    )
  })

  return (
    <>
      
      <h2 className="head-text">Young And Motivated Individual  <br /> <span>Aspiring </span>To Be <span>FullStack Developer</span></h2>

      <div className='app__profiles'>
        {about}
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);