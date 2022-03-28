import styled from 'styled-components';
import { ReactElement } from 'react';

const Main = styled.main`
  width: 100%;
`;

const VideoWrapper = styled.section`
  padding: 40px 96px;
`;

const VideoRow = styled.div`
  display: flex;
  overflow: hidden;
`;

const VideoItemWrapper = styled.div`
  margin-right: 24px;
  &:nth-child(1):hover {
    transform-origin: 0 100%;
    transform: scale(1.5);
  }
  &:nth-child(n + 2):hover {
    transform-origin: 50% 100%;
    transform: scale(1.5);
  }
`;

const VideoItem = styled.video`
  object-fit: cover;
`;

const VideoTitle = styled.div`
  font-size: 28px;
  color: #000;
`;

const MainSlider = styled.section``;

function videoIn(e) {
  e.target.volume = 0;
  e.target.play();
}

function videoOut(e) {
  e.target.currentTime = 0;
  e.target.pause();
}

function createVideoRow() {
  const rowList = Array.from(Array(4), () => '/video/video1.mp4');
  return (
    <VideoRow>
      {rowList.map((src, idx) => (
        <VideoWrapper key={idx}>
          <VideoItem
            src={src}
            onMouseEnter={videoIn}
            onMouseLeave={videoOut}
          ></VideoItem>
        </VideoWrapper>
      ))}
    </VideoRow>
  );
}

function MainWrapper(): ReactElement {
  return (
    <Main>
      <VideoWrapper>
        <VideoTitle>*** 님이 시청 중인 콘텐츠</VideoTitle>
        {createVideoRow()}
      </VideoWrapper>
      <VideoWrapper>
        <VideoTitle>인기 프로그램</VideoTitle>
        {createVideoRow()}
      </VideoWrapper>
      <VideoWrapper>
        <VideoTitle>*** 님이 좋아할만한 콘텐츠</VideoTitle>
        {createVideoRow()}
      </VideoWrapper>
      <VideoWrapper>
        <VideoTitle>인기 급상승 콘텐츠</VideoTitle>
        {createVideoRow()}
      </VideoWrapper>
    </Main>
  );
}

export default MainWrapper;
