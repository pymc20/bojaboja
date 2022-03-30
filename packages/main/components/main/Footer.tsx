import * as React from 'react';
import styled from 'styled-components';

export type FooterValue = {
  copyright: string;
  address: string;
};

const Footer = styled.footer`
  background: #363636;
  color: #fff;
  height: 6.5rem;
  padding: 16px 48px;
  & > p {
    margin: 16px 0;
  }
`;

function FooterWrapper({ props }: { props: FooterValue }): React.ReactElement {
  return (
    <Footer>
      <p>{props.copyright}</p>
      <address>{props.address}</address>
    </Footer>
  );
}

export default FooterWrapper;
