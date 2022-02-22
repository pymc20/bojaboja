// @flow
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "styled-components";

const Header = styles.header`{
    display: flex;
    height: 100px;
    padding: 16px;
}`;

const SearchBar = styles.div`{
    display: flex;
    width: 15%;
}`

const Logo = styles.div`{
    width: 68px;
    padding: 8px;
}`

const Nav = styles.nav`{
    width: 80%;
}`

const Menu = styles.ul`{
    list-style:none;
    margin:0;
    padding:0;
}`

const MenuItem = styles.li`{
    margin: 0 0 0 0;
    padding: 16px;
    border : 0;
    float: left;
}`

const Search = styles.input`{
    background-image: url('/img/search.png');
    background-size: contain;
    background-repeat:no-repeat;
    padding: 0 0 0 40px;
    width: 100%;
    border: none;
    border-bottom: solid 1px;
    font-size: 24px;
    &:focus {
        outline: none;
        border-bottom: solid 1px;
    }
}`

const HeaderWrapper = (): React.Node => {
    return (
        <Header>
            <SearchBar>
                <Search />
            </SearchBar>
            <Nav>
                <Menu>
                    <Link href="/">
                        <MenuItem>홈</MenuItem>
                    </Link>
                    <Link href="">
                        <MenuItem>내가 본 콘텐츠</MenuItem>
                    </Link>
                    <Link href="">
                        <MenuItem>내가 찜한 콘텐츠</MenuItem>
                    </Link>
                    <Link href="">
                        <MenuItem>추천 콘텐츠</MenuItem>
                    </Link>
                </Menu>
            </Nav>

            <Link href="">
                <span>프로필</span>
            </Link>
        </Header>
    );
};

export default HeaderWrapper;
