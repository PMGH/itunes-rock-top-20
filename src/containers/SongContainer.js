import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
  render(){
    return (
      <div>
        <h1>iTunes Top 20 Rock Songs</h1>
        <SongList />
      </div>
    );
  }
}

export default SongContainer;
