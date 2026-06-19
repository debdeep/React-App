import { SEARCH } from "./../utils/constants";

const Search = () => (
    <>
        <h2>{SEARCH.LABEL}</h2>
        <input className="input-search" id="search" type="text" placeholder={SEARCH.PLACEHOLDER} />
    </>
);

export default Search;