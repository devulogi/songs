import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  return (
    <div>
      <p>{props.song.title}</p>
      <p>{props.song.artist}</p>
      <p>{props.song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.songSelected };
};

export default connect(mapStateToProps)(SongDetail);
