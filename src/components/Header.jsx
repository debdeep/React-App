/* 
    <React.Fragment></React.Fragment> VS <></.>
    Both are similar while nesting  multiple JSX elements without adding extra DOM nodes but
    Explicit fragment - can accept key as props
    Shorthand fragment - can't accept key as props
*/
const Header = ({ name }) => (
    <>
        {/* <img src="./src/assets/logo.webp" alt="Food Camper Logo" /> */}
        <h1> {name} </h1>
    </>
);

// Assign default prop in case no header passed
Header.defaultProps = {
    name: 'Food truck App'
};

export default Header;