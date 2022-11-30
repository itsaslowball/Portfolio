import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';


function Navbar() {

    const [toggle, setToggle] = useState(false);

    //Handle Click
    function handleClik(){
        setToggle(function(prevToggle){
            return !prevToggle;
        })
    }


    // To create list in normal view
    var lists = ['home', 'about', 'work', 'skills', 'contact'];

    var navList = lists.map(function (listItem) {
        return (
            <li className="app__flex p-text" key={listItem}>
                <div />
                <a href={`#${listItem}`}>{listItem}</a>
            </li>
        );
    });


    // To create list in mobile view
    var mobileNavList = lists.map(function (listItem) {
        return (
            <li key={listItem}>
                <a href={`#${listItem}`} onClick={handleClik}>
                    {listItem}
                </a>
            </li>

        )
    })

    return (


        <nav className='app__navbar'>
            {/* logo */}
            <div className='app__navbar--logo'>
                <img src={images.logo} alt="logo" />
            </div>

            {/* List in the navbar like contacts, about , skills. */}
            <ul className="app__navbar-links">
                {navList}
            </ul>


            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={handleClik} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={handleClik} />

                        {/* List in the navbar like contacts, about , skills in mobile view. */}
                        <ul>
                            {mobileNavList}
                        </ul>
                    </motion.div>
                )}
            </div>

        </nav>
    )
}

export default Navbar