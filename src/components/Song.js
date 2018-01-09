import React from 'react';

class Song extends React.Component {
  render(){
    const song = this.props.details;
    return (
      <article className="song-article">
        <h5 className="song-position">{this.props.position}</h5>
        <div className="song-details">
          <a href={song.id.label} target="_blank"><h5 className="song-title">{song.title.label}</h5></a>
          <h5 className="song-price">{song["im:price"].label}</h5>
        </div>
        <audio className="song-preview" controls src={song.link[1].attributes.href} type={song.link[1].attributes.type}></audio>
      </article>
    );
  }
}

export default Song;
