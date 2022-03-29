import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Router from 'next/router';
import { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '@atoms/Counter';

const Header = styled.header`
  display: flex;
  height: 6.5rem;
  padding: 16px 48px;
  background: #000;
  color: #fff;
`;

const SearchBar = styled.div`
  display: flex;
  width: 15%;
  border-bottom: solid 1px;
`;

interface SearchButtonProps {
  img: string;
}

const SearchButton = styled.button<SearchButtonProps>`
  cursor: pointer;
  align-self: center;
  border: none;
  outline: none;
  width: 42px;
  height: 42px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
`;

const Nav = styled.nav`
  width: 80%;
  padding: 0 40px;
  font-size: 24px;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
`;

const MenuItem = styled.li`
  margin: 0 0 0 0;
  padding: 16px;
  border: 0;
  cursor: pointer;
`;

const Search = styled.input`
  background: #000;
  width: 100%;
  border: none;
  font-size: 24px;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

const DropDown = styled.div`
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
`;

const DropDownContent = styled.div`
   {
    top: 60px;
    flex-direction: column;
    display: none;
    position: absolute;
    background-color: #000;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    & > a {
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
  }
`;

function HeaderWrapper(): ReactElement {
  const [count, setCount] = useRecoilState(countState);
  return (
    <Header>
      <SearchBar>
        <Search />
        <SearchButton img={'/img/search.svg'} />
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
        <Image src="/img/avatar.svg" width="50" height="50" />
        <DropDownContent>
          <a
            onClick={() => {
              setCount(count + 1);
            }}
          >
            프로필 설정
          </a>
          <a>계정</a>
          <a
            onClick={async () => {
              localStorage.removeItem('token');
              await Router.push('/member/login');
            }}
          >
            로그아웃
          </a>
          <a>{count}</a>
        </DropDownContent>
      </DropDown>
    </Header>
  );
}

export default HeaderWrapper;
