// @flow
import * as React from "react";
import styles from "styled-components";

const Main = styles.main`{

}`

const VideoWrapper = styles.section`{
    padding: 40px 96px;
}`

const VideoRow = styles.div`{
    display: flex;
}`

const VideoItemWrapper = styles.div`{
    margin-right: 24px;
    &:nth-child(1):hover {
        transform-origin: 0 100%;
        transform: scale(1.5);
    }
    &:nth-child(n+2):hover {
        transform-origin: 50% 100%;
        transform: scale(1.5);
    }
}`

const VideoItem = styles.video`{
    object-fit: cover;
}`

const VideoTitle = styles.div`{
    font-size: 28px;
    color: #000;
}`

const MainSlider = styles.section`{
    
}`

const MainWrapper = (): React.Node => {

    const videoIn = (e) => {
        e.target.volume = 0
        e.target.play()
    }

    const videoOut = (e) => {
        e.target.currentTime = 0
        e.target.pause()
    }

    return (
        <Main>
            <VideoWrapper>
                <VideoTitle>*** 님이 시청 중인 콘텐츠</VideoTitle>
                <VideoRow>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                </VideoRow>
            </VideoWrapper>
            <VideoWrapper>
                <VideoTitle>인기 프로그램</VideoTitle>
                <VideoRow>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                </VideoRow>
            </VideoWrapper>
            <VideoWrapper>
                <VideoTitle>*** 님이 좋아할만한 콘텐츠</VideoTitle>
                <VideoRow>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                </VideoRow>
            </VideoWrapper>
            <VideoWrapper>
                <VideoTitle>인기 급상승 콘텐츠</VideoTitle>
                <VideoRow>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                    <VideoItemWrapper>
                        <VideoItem src="/video/video1.mp4"
                                   onMouseEnter={videoIn}
                                   onMouseLeave={videoOut}/>
                    </VideoItemWrapper>
                </VideoRow>
            </VideoWrapper>
        </Main>
    )
}

export default MainWrapper