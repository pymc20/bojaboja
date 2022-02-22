// @flow
import * as React from "react";

export type FooterValue = {
    copyright: string,
    address: string
}

const Footer = ({props}: { props: FooterValue } ): React.Node => {

    return (
        <footer>
            <p>{props.copyright}</p>
            <address>{props.address}</address>
        </footer>
    )
}

export default Footer