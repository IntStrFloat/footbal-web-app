import React from "react";
import PropTypes from "prop-types";
import style from './style.module.css'
interface Props {
    embedId: string;
}

const YoutubeEmbed = (children: Props) => (
  <div className= {style.video_responsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${children.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;