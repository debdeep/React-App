import React from "react";
import StarRating from "./StarRating";
import { FOOTER } from "./../utils/constants";
const Footer = () => (
    <footer className="app-footer">
        <div>
            <p>
                <span dangerouslySetInnerHTML={{ __html: FOOTER.COPYRIGHT_MESSAGE }} />
            </p>
        </div>
        <div>
            <a href="#top">{FOOTER.GOTO_TOP}</a>
        </div>
        <div>
            <StarRating />
        </div>
    </footer>
)
export default Footer;