import React from "react";
import UserListChild from "./class-lifecycle/UserListChild"
/*
    LifeCycle Order: Class Based Components:
    constructor() -> render() -> componentDidMount() ( If nested then first 2 Methods of Parent -> then Child 3 Methods then parent componentDidMount will be called)
*/
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        /* 
            super(props) is reqired here if props state needs to be modified else
            this.props will be undefined here but when render() gets called this.props values from parents class will be inherited
        */
        console.log("Parent Constructor called");
        this.state = {
            //state variables needs to be created here instead of hooks in this class based approach
            date: new Date().toLocaleString(),
            count: 0
        }
    }
    componentDidMount() {
        console.log("Parent ComponentDidMount called"); // space used to call API calls
    }

    render() {
        console.log("Parent Render called");
        const { name, location, contact } = this.props;
        let { date, count } = this.state;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
                <h5>Today Date: {date}</h5>
                <h6>Count: {count}</h6>
                <button onClick={() => {
                    this.setState({ count: count + 1 }); // never update state variables directly, use setState({}) fun to update
                }}>Increase Count</button>
                <button disabled={count < 1} onClick={() => {
                    this.setState({ count: count - 1 });
                }}>Decrease Count</button>
                <UserListChild name="Child 1" />
                <UserListChild name="Child 2" />
            </div>
        )
    }
}

export default UserClass