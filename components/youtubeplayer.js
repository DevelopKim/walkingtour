import React from "react";
import YouTube from "react-youtube";

export default class YouTubePlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedVideo: ''
        }
    }
  _onReady = (event) => {
    event.target.playVideo(100);
  };
  render() {
    const videoOption = {
      playerVars: {
        autoplay: 0,
        controls: 0,
        mute: 1,
      },
    };

    return (
      <div className="video-background">
        <div className="video-foreground">
          <YouTube
            videoId={this.state.selectedVideo}
            opts={videoOption}
            className="video-iframe"
            onReady={this._onReady}
          />
        </div>
      </div>
    );
  }
}
