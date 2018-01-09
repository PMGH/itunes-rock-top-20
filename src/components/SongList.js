import React from 'react';
import Song from './Song';

class SongList extends React.Component {
  render(){
    return (
      <section>
        <h3>SongList</h3>
        <Song />
      </section>
    );
  }
}

export default SongList;
