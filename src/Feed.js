import React,{useState,useEffect} from 'react';
import './Feed.css';
import Storyreel from './Storyreel';
import MessageSender from './MessageSender';
import Post from './Post';
// import img from './assests/images/1.png'
// import img1 from './assests/images/avatar.jpg'
import db from './firebase'


function Feed() {

    const [posts,setPosts] = useState([])

    useEffect(() =>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc)=>({id:doc.id , data:doc.data()})))
        )
    },[])

    return (
        <div className='feed'>
            <Storyreel />
            <MessageSender />

            {posts.map((post)=>(
                <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
