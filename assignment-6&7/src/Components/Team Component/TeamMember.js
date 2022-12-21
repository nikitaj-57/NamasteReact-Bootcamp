import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import TeamContainer from "./CardContainer";
import './style.css';

const TeamMember = () => {
    let { login } = useParams();
    // console.log(login);

    const [ member, setMember ] = useState({});
    const { name, avatar_url, followers, following, bio, public_repos } = member;
    // console.log(member);

    const fetchTeamMember = async () => {
        const response = await fetch(`https://api.github.com/users/${login}`);
        const data = await response.json();
        console.log(data);
        setMember(data);
    }

    useEffect(() => {
        fetchTeamMember();
    }, []);

    return (
        <div className='team-row'>
            {/* <h1>Team Details</h1> */}
            <div className="img-column">
                <img src={avatar_url}></img>
            </div>

            <div className="details-column">
                <h1 id="name">{name}</h1>
                <p>@{login}</p>
                <p>{bio}</p>
                <p>Followers : {followers}</p>
                <p>Following : {following}</p>
                <p>Public Repos : {public_repos}</p>
            </div>
        </div>
    )
}

export default TeamMember;
