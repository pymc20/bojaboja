import * as React from 'react';
import styled from 'styled-components';
import { MouseEventHandler, useState } from 'react';

const Slider = styled.article`
  padding: 40px 0px;
`;

const SliderArrow = styled.div`
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

const SliderTitle = styled.article`
  padding: 0px 60px;
  font-size: 28px;
  color: #363636;
`;

interface RowProps {
  page: number;
  itemCount?: number;
  lastPage?: number;
}

const Row = styled.div<RowProps>`
  display: flex;
  margin-top: 16px;
  transition: 0.5s;
  transform: translateX(
    ${(props) => {
      return props.page * -100 - 116.66666666666667 + '%';
    }}
  );
`;

const SlideRow = styled.div`
  padding: 0px 60px;
`;

const RowItem = styled.video<RowProps>`
  object-fit: cover;
  margin-right: 8px;
  width: 16.2%;
  &:nth-child(${(props) => props.page * props.itemCount + 1}):hover {
    transform-origin: 0 100%;
    transform: scale(1.5);
  }
  &:nth-child(${(props) =>
        'n + ' + (2 + props.page * props.itemCount)}):nth-child(${(props) =>
        '-n + ' + (6 + props.itemCount * props.page)}):hover {
    transform-origin: 50% 100%;
    transform: scale(1.5);
  }
  &:nth-child(${(props) =>
        props.page * props.itemCount + props.itemCount}):hover {
    transform-origin: 100% 100%;
    transform: scale(1.5);
  }
  &:nth-child(${(props) => props.itemCount + 'n' + ' + 2'}):nth-child(${(
        props,
      ) => -props.itemCount + 'n' + ' + 13'}):hover {
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

function createRowItem(page: number, props: SliderWrapperProps) {
  const { onMouseEnter, onMouseLeave, data } = props;
  const lastPage = data.length % 7 > 0 ? data.length / 7 : data.length / 7 - 1;
  const renderList = data.slice(page * 7, (page + 1) * 7);

  if (page == lastPage) {
    renderList.unshift(...data.slice((page - 1) * 7, page * 7));
    renderList.push(...data.slice(0, 7));
  } else if (page == 0) {
    renderList.unshift(...data.slice(lastPage * 7, (lastPage + 1) * 7));
    renderList.push(...data.slice((page + 1) * 7, (page + 2) * 7));
  } else {
    renderList.unshift(...data.slice((page - 1) * 7, page * 7));
    renderList.push(...data.slice((page + 1) * 7, (page + 2) * 7));
  }
  return (
    <Row page={page} lastPage={lastPage}>
      {renderList.map((src, idx) => (
        <RowItem
          page={page}
          key={idx}
          src={src}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        ></RowItem>
      ))}
    </Row>
  );
}

interface SliderEventList {
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onClick?: MouseEventHandler;
}

interface SliderWrapperProps extends SliderEventList {
  title?: string;
  data?: Array<string>;
}

function SliderWrapper({
  props,
}: {
  props: SliderWrapperProps;
}): React.ReactElement {
  const [page, setPage] = useState(0);
  props.data = Array.from(Array(14), () => '/video/video1.mp4');

  return (
    <Slider>
      {props.title && <SliderTitle>{props.title}</SliderTitle>}
      <SlideRow>{createRowItem(page, props)}</SlideRow>
      <SliderArrow
        onClick={() => {
          const lastPage =
            props.data.length % 7 > 0
              ? props.data.length / 7
              : props.data.length / 7 - 1;
          if (lastPage === page) setPage(0);
          else setPage(page + 1);
        }}
      >
        <img src={'/img/arrow.svg'} width={50} height={50} />
      </SliderArrow>
    </Slider>
  );
}

export default SliderWrapper;
