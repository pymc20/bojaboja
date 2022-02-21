import * as React from "react";
import Link from "next/link"
import styles from "styled-components"


const Header = styles.header`{
    height: 100px
}`


// @flow
const HeaderWrapper = (): React.ReactElement => {
    return (
        <Header>
            <nav>
              <Link href="/">
                  <span>로고</span>
              </Link>
              <Link href="/">
                  <span>홈</span>
              </Link>
              <Link href="">
                  <span>내가 본 콘텐츠</span>
              </Link>
              <Link href="">
                  <span>내가 찜한 콘텐츠</span>
              </Link>
              <Link href="">
                  <span>추천 콘텐츠</span>
              </Link>
          </nav>
          <Link href="">
              <span>검색</span>
          </Link>
          <Link href="">
              <span>프로필</span>
          </Link>
        </Header>
    )
}

export default HeaderWrapper