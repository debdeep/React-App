import { HEADER } from "./../utils/constants";
import logo from "../assets/logo.webp";

import { Link } from "react-router-dom";

/* 
    <React.Fragment></React.Fragment> VS <></.>
    Both are similar while nesting  multiple JSX elements without adding extra DOM nodes but
    Explicit fragment - can accept key as props
    Shorthand fragment - can't accept key as props
*/
// Parcel (or other bundlers) may return an object for imported assets
// (e.g. { default: '/path/to/asset' }) or a string URL. Normalise it.
// Robustly resolve an imported asset to a usable URL string.
function getLogoUrl(mod) {
    if (!mod) return "";
    // If bundler returned a plain string
    if (typeof mod === "string") return mod;

    // If bundler returned a module-like object, try common locations
    try {
        if (typeof mod.default === "string") return mod.default;
    } catch (e) { }

    // Some bundlers attach the URL as a non-enumerable property or under other keys
    try {
        const names = Object.getOwnPropertyNames(mod || {});
        for (const k of names) {
            const v = mod[k];
            if (typeof v === 'string' && /\.(webp|png|jpe?g|svg)$/i.test(v)) return v;
        }
    } catch (e) { }

    // import.meta fallback
    try {
        return new URL('../assets/logo.webp', import.meta.url).href;
    } catch (e) { }

    // importmap lookup on the page (dev server like Parcel exposes importmap)
    try {
        if (typeof document !== 'undefined') {
            const maps = Array.from(document.querySelectorAll('script[type="importmap"]'))
                .map(s => {
                    try { return JSON.parse(s.textContent || s.innerText).imports; } catch (e) { return null; }
                })
                .filter(Boolean);
            for (const m of maps) {
                for (const k of Object.keys(m)) {
                    const v = m[k];
                    if (typeof v === 'string' && /logo\.[a-z0-9]+\.(webp|png|jpe?g|svg)$/i.test(v)) return v;
                }
            }
        }
    } catch (e) { }

    return "";
}

const logoUrl = getLogoUrl(logo);
// Debug: show what was resolved for the logo (remove after verification)
console.log('Header logo import ->', logo, 'resolved logoUrl ->', logoUrl);

const Header = ({ name }) => (
    <div className="header-content">
        <img src={logoUrl} alt="Logo of the Food Camper App" className="app-logo" loading="lazy" />
        <h1>{name}</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    </div>
);

// Assign default prop in case no header passed
// Header.defaultProps = {
//     name: HEADER.DEFAULT_NAME
// };

export default Header;