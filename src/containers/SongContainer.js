import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", () => {
      if (xhr.status === 200){
        const jsonString = xhr.responseText;
        const apiData = JSON.parse(jsonString);
        console.log(apiData);
        this.setState({ data: apiData.feed.entry });
      }
    });
    xhr.send();
  }

  render(){
    return (
      <div>
        <h1>iTunes Top 20 Songs</h1>
        <SongList data={this.state.data}/>
      </div>
    );
  }
}

export default SongContainer;
