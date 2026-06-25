import React from "react";

class UserListChild extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name + "-" + "Constructor Called");

    }
    componentDidMount() {
        console.log(this.props.name + "-" + "ComponentDidMount Called");
    }
    render() {
        console.log(this.props.name + "-" + "Render Called");
    }
}

export default UserListChild;