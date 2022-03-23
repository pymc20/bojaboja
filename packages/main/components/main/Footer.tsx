import * as React from 'react';
import styles from 'styled-components';

export type FooterValue = {
  copyright: string;
  address: string;
};

const Footer = styles.footer`{
    background: #000;
    color: #fff;
    height: 6.5rem;
    padding: 16px 48px;
    & > p {
        margin: 16px 0;
    }
}`;

const FooterWraaper = ({ props }: { props: FooterValue }): React.Node => {
  return (
    <Footer>
      <p>{props.copyright}</p>
      <address>{props.address}</address>
    </Footer>
  );
};

export default FooterWraaper;
