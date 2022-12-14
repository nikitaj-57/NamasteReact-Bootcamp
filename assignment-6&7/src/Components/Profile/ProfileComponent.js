import React, { useState } from "react";

/*
const ProfileComponent = () => {
    const [ name, setName ] = useState("Nikita");
    const [ location, setLocation ] = useState("India");

    return (
        <div className="profile-container">
            <h1>User Profile Page</h1>
            <h3>Name : {name}</h3>
            <h3>location : {location}</h3>
        </div>
    )
}
*/

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {
        //     name:"Nikita",
        //     location: "India",
        // }

        this.state = {
            userInfo : {},
        }
        console.log("Profile Constructor");
    }

    async componentDidMount() {
        console.log("Profile - ComponentDidMount");
        const data = await fetch("https://api.github.com/users/nikitaj-57");
        const json = await data.json();
        // console.log(json);
        
        this.setState({
            userInfo : json,
        })

        
    }

    render() {

        console.log("Profile Render");
        const { login, name, location } = this.state.userInfo;

        return (
            <div className="profile-container">
                <h1>User Profile Page</h1>
                <h3>Name : {name}</h3>
                <h3>location : {location}</h3>
            </div>
        )
    }
}
export default ProfileComponent;