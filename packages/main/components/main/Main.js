// @flow
import * as React from "react";
import styles from "styled-components";

const Main = styles.main`{
    background: #000;
}`

const VideoWrapper = styles.section`{
    padding: 40px 96px;
}`

const VideoRow = styles.div`{
    display: flex;
    overflow: hidden;
}`

const VideoItem = styles.video`{
    margin: 24px;
    &:hover {
        width: 800px;
    }
}`

const VideoTitle = styles.div`{
    font-size: 28px;
    color: #fff;
}`

const MainSlider = styles.section`{
    
}`

const MainWrapper = (): React.Node => {

    const videoIn = (e) => {
        e.target.volume = 0
        e.target.play()
    }

    const videoOut = (e) => {
        e.target.load()
        e.target.pause()
    }

    return (
        <Main>
            <VideoWrapper>
                <VideoTitle>*** 님이 시청 중인 콘텐츠</VideoTitle>
                <VideoRow>
                    <VideoItem src="/video/video1.mp4" width="300" height="400"
                               onMouseEnter={videoIn}
                               onMouseLeave={videoOut}/>
                </VideoRow>
            </VideoWrapper>
            <VideoWrapper>
                <VideoTitle>인기 프로그램</VideoTitle>
                <VideoRow>
                    <VideoItem src="/video/video1.mp4" width="300" height="400"
                               onMouseEnter={videoIn}
                               onMouseLeave={videoOut}/>
                </VideoRow>
            </VideoWrapper>
            <VideoWrapper>
                <VideoTitle>*** 님이 좋아할만한 콘텐츠</VideoTitle>
                <VideoRow>
                    <VideoItem src="/video/video1.mp4" width="300" height="400"
                               onMouseEnter={videoIn}
                               onMouseLeave={videoOut}/>
                </VideoRow>
            </VideoWrapper>
            <VideoWrapper>
                <VideoTitle>인기 급상승 콘텐츠</VideoTitle>
                <VideoRow>
                    <VideoItem src="/video/video1.mp4" width="300" height="400"
                               onMouseEnter={videoIn}
                               onMouseLeave={videoOut}/>
                </VideoRow>
            </VideoWrapper>
        </Main>
    )
}

export default MainWrapper