import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';
// import { motion } from 'framer-motion';

function Story({image,avatar,title}) {
    return (
        <div className="story" style={{backgroundImage:`url(${image})`}}>
            <Avatar src={avatar} className="story__avatar"/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
