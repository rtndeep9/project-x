import React from "react";
import styled from "styled-components";

const IFrame = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`;

function VideoHomepage() {
  return (
    <IFrame>
      <iframe
        width="80%"
        height="400px"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      />
    </IFrame>
  );
}

export default VideoHomepage;
