import React from 'react';
import styled from 'styled-components';
import { MouseEventHandler, useState } from 'react';

const Slider = styled.article`
  padding: 40px 0 0;
`;

const SliderArrow = styled.div`
  display: inline-flex;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  left: 96%;
  height: 163px;
  bottom: 163px;
  z-index: 2;
`;

const SliderTitle = styled.article`
  padding: 0 60px;
  font-size: 28px;
  color: #363636;
`;

interface RowProps {
  page: number;
  itemCount?: number;
  lastPage?: number;
  transition?: string;
  left?: string;
}

const Row = styled.div<RowProps>`
  display: flex;
  height: 163px;
  margin-top: 16px;
  transition: ${(props) => props.transition};
  transform: translateX(
    ${(props) => {
      if (props.left) return props.left;
      return props.page * -100 - props.page * 116.66666666666667 + '%';
    }}
  );
`;

const SlideRow = styled.div`
  padding: 0 60px;
`;

const RowItem = styled.video<RowProps>`
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
    transform-origin: 50% 100%;
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

const RightArrow = styled.img`
  align-self: center;
  width: 50px;
  height: 50px;
`;

function createRowItem(
  page: number,
  transition: string,
  left: string,
  props: SliderWrapperProps,
) {
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
    <Row page={page} lastPage={lastPage} transition={transition} left={left}>
      {renderList.map((src, idx) => (
        <RowItem
          page={page}
          key={idx}
          src={src}
          itemCount={6}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
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

function SliderWrapper(props: SliderWrapperProps): React.ReactElement {
  const [page, setPage] = useState(0);
  const [transition, setTransition] = useState('0.5s');
  const [left, setLeft] = useState('');

  return (
    <Slider>
      {props.title && <SliderTitle>{props.title}</SliderTitle>}
      <SlideRow>{createRowItem(page, transition, left, props)}</SlideRow>
      <SliderArrow
        onClick={() => {
          const lastPage =
            props.data.length % 7 > 0
              ? props.data.length / 7
              : props.data.length / 7 - 1;
          if (lastPage === page + 1)
            setTimeout(() => {
              setTransition('0s');
              setLeft('-116.66666666666667%');
              setPage(0);
            }, 500);
          if (lastPage === page) {
            setPage(0);
          } else {
            setPage(page + 1);
            setTransition('0.5s');
            setLeft('');
          }
        }}
      >
        <RightArrow src={'/img/arrow.svg'} />
      </SliderArrow>
    </Slider>
  );
}

export default SliderWrapper;
