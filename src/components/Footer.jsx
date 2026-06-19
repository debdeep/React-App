import React from "react";
import { FOOTER } from "./../utils/constants";
const Footer = () => (
    <React.Fragment>
        <div><p> &copy; <i> {FOOTER.COPYRIGHT_MESSAGE}</i> </p></div>
        <div><a href="#top">{FOOTER.GOTO_TOP}</a></div>
    </React.Fragment>

)
export default Footer;