import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorObj = useRouteError();
    console.log(errorObj);
    return (
        <div className="route-error">
            <h1> Ooops..</h1>
            <h2>Something Went Wrong</h2>
            <p>{errorObj?.status}:{errorObj?.statusText}</p>
            <p>{errorObj?.error?.message}</p>
        </div>
    )
}

export default Error;