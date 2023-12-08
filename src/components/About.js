import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h3 style={{textAlign:'center'}}>This is about us page which is having my GitHub information </h3>
            <User />
            <UserClass />
        </div>
    )
}

export default About;
