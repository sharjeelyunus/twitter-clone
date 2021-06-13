import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
import './TweetBox.css';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Sharjeel",
            username: "sharjeel",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: ""
        });

        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar />
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
