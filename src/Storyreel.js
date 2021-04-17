import React from 'react';
import './Storyreel.css';
import Story from './Story';

import img1 from './assests/images/4.jpg';
import img2 from './assests/images/2.jpg';
import img3 from './assests/images/3.jpg';
import img4 from './assests/images/avatar.jpg';
import img5 from './assests/images/1.png';
import img6 from './assests/images/6.JPG';
import img7 from './assests/images/7.JPG';
import img8 from './assests/images/8.JPG';
import img9 from './assests/images/9.JPG';
import img10 from './assests/images/10.JPG';


function Storyreel() {
    return (
        <div className='storyreel'>
            <Story 
            image={img4}
            avatar={img4}
            title='Abdullah Moamen'
            />
            <Story 
            image={img6}
            avatar={img5}
            title='عبدالله مؤمن'
            />
            <Story 
            className='storyreel__story'
            image={img5}
            avatar={img1}
            title='Ahmed Eid'
            />
            <Story 
            image={img8}
            avatar={img2}
            title='Ali eldabaay'
            />
            <Story 
            image={img9}
            avatar={img3}
            title='Omar Kassem'
            />
            <Story 
            image={img10}
            avatar={img7}
            title='Moamen'
            />
        </div>
    )
}

export default Storyreel
