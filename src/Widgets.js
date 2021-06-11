import React from 'react';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>You might like!</h2>

                <TwitterTweetEmbed tweetId={"1385666924256899075"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="sharjeelyunus"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={'https://twitterbysharjeel.web.app/'}
                    options={{ text: '#reactjs is awesome', via: 'sharjeelyunus' }}
                />
            </div>
        </div>
    )
}

export default Widgets;
