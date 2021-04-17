import React ,{useState} from 'react';
import './MessageSender.css';
import { Avatar}from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase';


function MessageSender() {
    const [{user},] =useStateValue();
    const [input,setInput]=useState('');
    const [imgUrl,setImgUrl] = useState('')

    const handleSubmit=(e) =>{
        e.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imgUrl,
        })

        setInput('');
        setImgUrl('');
    }

    return (
        <div className='messageSender'>

            <div className="messageSender__top">
                <Avatar 
                src={user.photoURL}
                />
                <form>
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder={`what's in your mind  ${user.displayName} ?`}
                    className="messageSender__input"
                    />
                    <input
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)} 
                    placeholder={`put image url (optional)`}
                    />
                    <button 
                    className='submit'
                    type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                
                <div className="messageSender__option">
                    <VideoCamIcon 
                    style={{color: 'red'}}
                    />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon 
                    style={{color: 'darkBlue'}}
                    />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmotIcon 
                    style={{color: 'orange'}}
                    />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
