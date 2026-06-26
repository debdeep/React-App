const User = ({ userData }) => {
    console.log("userData:", userData);
    const {
        avatar_url = "",
        name = "",
        bio = "",
        html_url = "#",
        location,
        email,
        company,
        followers = 0,
        public_repos = 0,
    } = userData || {};

    return (
        <div className="user-card">
            <h2>Name: {name || "Loading..."}</h2>
            <span>{bio}</span>
            <ul>
                <li style={{ listStyleType: "none" }}>
                    <img src={avatar_url} alt="profile-image" />
                </li>
                <li>
                    <strong>
                        <a href={html_url} target="__blank" rel="noreferrer">
                            Open Git Profile
                        </a>
                    </strong>
                </li>
                <li>
                    <strong>Location:</strong> {location ? location : "-"}
                </li>
                <li>
                    <strong>Contact:</strong> {email ? email : "-"}
                </li>
                <li>
                    <strong>Company:</strong> {company ? company : "NA"}
                </li>
                <li>
                    <strong>Followers: </strong>
                    {followers}
                </li>
                <li>
                    <strong>No of Repos:</strong>
                    {public_repos}
                </li>
            </ul>

            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default User;