// @flow
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "styled-components";
import RootStore from "@mobx/store/Root"
import {observer} from "mobx-react";

const Header = styles.header`{
    display: flex;
    height: 6.5rem;
    padding: 16px 48px;
    background: #000;
    color: #fff;
}`;

const SearchBar = styles.div`{
    display: flex;
    width: 15%;
    border-bottom: solid 1px;
}`

const SearchButton = styles.button`{
    cursor: pointer;
    align-self: center;
    border: none;
    outline: none;
    width: 42px;
    height: 42px;
    background-image: url('/img/search.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
}`

const Nav = styles.nav`{
    width: 80%;
    padding: 0 40px;
    font-size: 24px;
}`

const Menu = styles.ul`{
    list-style:none;
    margin:0;
    padding:0;
    display: flex;
    height: 100%;
    align-items: center;
}`

const MenuItem = styles.li`{
    margin: 0 0 0 0;
    padding: 16px;
    border : 0;
    cursor: pointer;
}`

const Search = styles.input`{
    background: #000;
    width: 100%;
    border: none;
    font-size: 24px;
    color: #fff;
    &:focus {
        outline: none;
    }
}`

const DropDown = styles.div`{
    position: relative;
    display: flex;
    cursor: pointer;
    color: #fff;
    height: 100%;
    align-items: center;
    justify-content: center;
    &:hover > div {
        display: flex;
    }
}`

const DropDownContent = styles.div`{
    top: 60px;
    flex-direction: column;
    display: none;
    position: absolute;
    background-color: #000;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    & > a {
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
}`

const HeaderWrapper = observer(() => {
    return (
        <Header>
            <SearchBar>
                <Search />
                <SearchButton />
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
            <DropDown>
                <Image src="/img/avatar.svg" width="50" height="50"/>
                <DropDownContent>
                    <a onClick={() => {
                        RootStore.increment()
                    }}>프로필 설정</a>
                    <a>계정</a>
                    <a>로그아웃</a>
                    <a>{RootStore.test}</a>
                </DropDownContent>
            </DropDown>
        </Header>
    );
});

export default HeaderWrapper;
