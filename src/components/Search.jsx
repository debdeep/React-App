import { SEARCH } from "./../utils/constants";

const Search = ({ resListdata, setFilteredList, originalList }) => {
    return (
        <>
            <h2>{SEARCH.LABEL}</h2>
            <input
                className="input-search"
                id="search"
                type="text"
                placeholder={SEARCH.PLACEHOLDER}
                onChange={(e) => {
                    const queryString = e?.target?.value || "";
                    console.log("User Typed:", queryString);

                    if (queryString.trim().length > 2) {
                        const lower = queryString.trim().toLowerCase();
                        const data = originalList?.filter((restaurant) =>
                            restaurant?.info?.name?.toLowerCase().includes(lower)
                        );
                        setFilteredList(data);
                    } else {
                        // restore original list when query is too short or cleared
                        setFilteredList(originalList);
                    }
                }}
            />
        </>
    )
};

export default Search;