import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';
import { useStateValue } from './StateProvider';
import './Feed.css';

function Feed() {
    const [{ user }] = useStateValue();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox name={user.displayName} avatar={user.photoURL} email={user.email} />
            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
