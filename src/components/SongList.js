import React from 'react';
import Song from './Song';

class SongList extends React.Component {
  render(){
    if (!this.props.data) return null;
    console.log('songs', this.props.data);

    const songs = this.props.data.map((song, index) => {
      return (
        <Song key={index} position={index+1} details={song} />
      );
    });

    return (
      <section>
        {songs}
      </section>
    );
  }
}

export default SongList;
