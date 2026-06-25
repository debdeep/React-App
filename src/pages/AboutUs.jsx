import User from "../components/User";
import UserClass from "../components/UserClass";
import { useState, useEffect } from "react";

const AboutUs = () => {
    const [userApiData, setUserApiData] = useState([]);
    useEffect(() => {
        getProfileData();
    }, []);
    const getProfileData = async () => {
        const response = await ((await fetch("https://api.github.com/users/debdeep")).json());
        setUserApiData(response);
    }
    return (
        <>
            <h1>Welcome to About us Page</h1>
            <User userData={userApiData} />
            {/* <UserClass name="Debdeep(class based)" location="Pune" contact="debdeepm89@gmail.com" /> */}
        </>
    );
}

export default AboutUs;