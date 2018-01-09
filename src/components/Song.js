import React from 'react';

class Song extends React.Component {
  render(){
    const song = this.props.details;
    return (
      <article className="song-article">
        <h5 className="song-chart-position">{this.props.position}</h5>
        <div className="song-details">
          <h5 className="song-title">{song.title.label}</h5>
          <h5 className="song-price">{song["im:price"].label}</h5>
        </div>
      </article>
    );
  }
}

export default Song;
