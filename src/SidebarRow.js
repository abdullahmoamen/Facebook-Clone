import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';
// import img from '../src/assests/images/avatar.jpg'
import {useStateValue} from './StateProvider'

function SidebarRow({src,Icon,title}) {
    const [{user},] =useStateValue();
    return (
        <div className="sidebarRow">
            {src && <Avatar src={user.photoURL} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
