import React from "react";
import { principal_Member, team_btech, team_jrf, team_mbtech, team_msr, team_mtech, team_phd, team_postdoc, team_s, teams } from "../utils/constants";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";

const Team = () => {
//   const principalMember=principal_Member;
//   console.log(principalMember)
    return (
        <div className="teams-wrapper">
            <div className="container">
                <div className="teams">
                    <header>
                        <h3>TEAMS</h3>
                    </header>
                    <div className="teams-content-wrapper">
                        <div className="teams-content">
                            <div className="top-heading">
                                Principal Investigator
                            </div>
                            <div className="content">
                            <ul>
                                {principal_Member.map((team, index) => (
                                    <li key={index} className="teams-img">
                                    <img
                                        src={team.imgpath}
                                        alt="research"
                                    />
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {principal_Member.map((item, index) => (  
                                <li className="teams-content">
                                    <h5><Link to={`/team/${item.link}`}>{item.name}</Link></h5>
                                    
                                    <p>{item.designation}</p>
                                    <p>Email:  {item.email}</p>
                                    <p>Office:  {item.office}</p>
                                    <p>Office Phone: {item.mobile}</p>
                                    <p>Specialization: {item.specialization}</p>
                                    <p>Research Interest: {item.research_interest}</p>
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        <div className="info-about-heading">
                            Current Ph.D. students
                        </div>
                        <div className="cards-wrapper">
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Undergraduate & Master Student Researchers
                        </div>
                        <div className="cards-wrapper">
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Visiting Students and Scholars
                        </div>
                        <div className="cards-wrapper">
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">Supervision/ Advising</div>
                        <div className="cards-wrapper">
                            <div className="aluminis-card">
                                <h4>Ph.D</h4>
                                <ul>
                                    {team_phd.map((team, index) => (
                                        <li key={index}>
                                            {team.name},{team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>MSR</h4>
                                <ul>
                                    {team_msr.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>MTech</h4>
                                <ul>
                                    {team_mtech.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>MTech-BTech</h4>
                                <ul>
                                    {team_mbtech.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>BTech</h4>
                                <ul>
                                    {team_btech.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>Postdoc</h4>
                                <ul>
                                    {team_postdoc.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>JRF</h4>
                                <ul>
                                    {team_jrf.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>S. Project Associate</h4>
                                <ul>
                                    {team_s.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.timeline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
