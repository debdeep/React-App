import { useEffect, useState } from "react";
import { APPLICATION_APIS } from "./../constants";

const useGitInfo = (username) => {
    const [gitInfo, setGitInfo] = useState(null);

    useEffect(() => {
        if (!username) {
            setGitInfo(null);
            return;
        }

        const getUserData = async () => {
            try {
                const response = await fetch(
                    APPLICATION_APIS.GIT_USER_API + username
                );
                const data = await response.json();
                console.log("Git Profile Info:", data);
                setGitInfo(data);
            } catch (error) {
                console.error("Error fetching Git user info:", error);
                setGitInfo(null);
            }
        };

        getUserData();
    }, [username]);

    return gitInfo;
};

export default useGitInfo;