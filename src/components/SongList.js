import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songList };
};

export default connect(mapStateToProps)(SongList);
