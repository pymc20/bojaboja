// @flow
import * as React from "react";
import styles from "styled-components";

export type FooterValue = {
    copyright: string,
    address: string
}

const Footer = styles.footer`{
    background: #000;
    color: #fff;
}`

const FooterWraaper = ({props}: { props: FooterValue }): React.Node => {

    return (
        <Footer>
            <p>{props.copyright}</p>
            <address>{props.address}</address>
        </Footer>
    )
}

export default FooterWraaper