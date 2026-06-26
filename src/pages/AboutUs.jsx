import User from "../components/User";
import UserClass from "../components/UserClass";
import useGitInfo from "../utils/hooks/useGitInfo";

const AboutUs = () => {
    const userApiData = useGitInfo("debdeep");

    return (
        <>
            <h1>Welcome to About us Page</h1>
            <User userData={userApiData} />
            {/* <UserClass name="Debdeep(class based)" location="Pune" contact="debdeepm89@gmail.com" /> */}
        </>
    );
};

export default AboutUs;