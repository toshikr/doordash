import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Default data in constructor",
                location: "Default data in constructor",
                avatar_url: "",
                login: "",
            },
        };
    }

    async componentDidMount(){
        //used to make API calls after rendering out jsx
        const data = await fetch("https://api.github.com/users/toshikr");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo:json,
        });
    }
    render(){
        console.log(this.state.userInfo)
        const { name, location, avatar_url, login } = this.state.userInfo;
        return(
            <div className="about-us-user-card">
                <h2>Name: Toshik</h2>
                <img src={avatar_url} style={{height:'100px'}}/>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Github username: {login}</h3>
                <h3>Contact: @toshikr</h3>
                <h4>Implemented using class based component</h4>
            </div>
        );
    }
}

export default UserClass;