import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import './TweetBox.css';

function TweetBox({ name, email, avatar }) {
    const str = `${email}`;
    const nameParts = str.split("@");
    const username = nameParts.length === 2 ? nameParts[0] : null;
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            displayName: name,
            username: username,
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: avatar
        });

        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={avatar} />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image Url"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
