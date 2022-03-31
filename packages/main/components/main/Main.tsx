import styled from 'styled-components';
import { ReactElement, useState } from 'react';
import SliderWrapper from '@main/Slider';

const Main = styled.main`
  width: 100%;
  overflow: hidden;
`;

const VideoWrapper = styled.section`
  padding: 40px 96px;
`;

const VideoRow = styled.div<VideoItemProps>`
  display: flex;
  margin-top: 16px;
  position: relative;
  transition: 0.5s;
  left: ${(props) => props.page * -1736 + 'px'};
`;

interface VideoItemProps {
  page: number;
}

const VideoItem = styled.video<VideoItemProps>`
  object-fit: cover;
  margin-right: 8px;
  width: 240px;
  &:nth-child(${(props) => props.page * 7 + 1}):hover {
    transform-origin: 0 100%;
    transform: scale(1.5);
  }
  &:nth-child(${(props) => 'n + ' + (2 + props.page * 7)}):nth-child(${(
        props,
      ) => '-n + ' + (6 + 7 * props.page)}):hover {
    transform-origin: 50% 100%;
    transform: scale(1.5);
  }
  &:nth-child(${(props) => props.page * 7 + 7}):hover {
    transform-origin: 100% 100%;
    transform: scale(1.5);
  }
  &:nth-child(7n + 2):nth-child(-7n + 13):hover {
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

const VideoTitle = styled.div`
  font-size: 28px;
  color: #363636;
`;

const MainSlider = styled.div`
  display: flex;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  justify-content: flex-end;
  position: relative;
  left: 66px;
  bottom: 90px;
  z-index: 2;
`;

function videoIn(e) {
  e.target.volume = 0;
  e.target.play();
}

function videoOut(e) {
  e.target.currentTime = 0;
  e.target.pause();
}

function createVideoRow(page) {
  const rowList = Array.from(Array(15), () => '/video/video1.mp4');
  return (
    <VideoRow page={page}>
      {rowList.map((src, idx) => (
        <VideoItem
          page={page}
          key={idx}
          src={src}
          onMouseEnter={videoIn}
          onMouseLeave={videoOut}
        ></VideoItem>
      ))}
    </VideoRow>
  );
}

function MainWrapper(): ReactElement {
  const [page, setPage] = useState(0);
  return (
    <Main>
      <SliderWrapper props={{ title: '*** 님이 시청 중인 콘텐츠' }} />
      <VideoWrapper>
        <VideoTitle>인기 프로그램</VideoTitle>
        {createVideoRow(page)}
      </VideoWrapper>
      <VideoWrapper>
        <VideoTitle>*** 님이 좋아할만한 콘텐츠</VideoTitle>
        {createVideoRow(page)}
      </VideoWrapper>
      <VideoWrapper>
        <VideoTitle>인기 급상승 콘텐츠</VideoTitle>
        {createVideoRow(page)}
      </VideoWrapper>
    </Main>
  );
}

export default MainWrapper;
