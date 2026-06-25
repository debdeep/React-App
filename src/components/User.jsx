const User = ({ userData }) => {
    console.log("userData:", userData);
    const { name, bio, html_url, location, email, company, followers, public_repos } = userData;
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <span>{bio}</span>
            <ul>
                <li><a href={html_url} target="__blank">Open Git Profile</a></li>
                <li>Location: {location? location: '-'}</li>
                <li>Contact: {email? email: '-'} </li>
                <li>Company: {company? company: 'NA'}</li>
                <li>Followers: {followers? followers: 0}</li>
                <li>No of Repos: {public_repos? public_repos: 0}</li>
            </ul>

            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default User;