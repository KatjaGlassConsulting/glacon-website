import React from 'react';

class YouTubeDisplay extends React.Component {

    render() {
        const opts = {
            height: '270',
            width: '480',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                showinfo: 0,
                rel: 0
            }
        };

        return (
            <iframe
                title={this.props.title}
                width={opts.width}
                height={opts.height}
                src={"https://www.youtube-nocookie.com/embed/" + this.props.id}
                loading="lazy"
                style={{ border: "0" }}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default YouTubeDisplay;