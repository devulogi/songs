import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  return (
    <div>
      <p>
        Title: <span>{props.song.title}</span>
      </p>
      <p>
        Artist: <span>{props.song.artist}</span>
      </p>
      <p>
        Duration: <span>{props.song.duration}</span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.songSelected };
};

export default connect(mapStateToProps)(SongDetail);
