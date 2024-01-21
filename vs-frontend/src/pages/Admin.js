import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ManVoters from "./ManVoters";
import voters from "../admin-images/voters.png";
import candidates from "../admin-images/candidates.png";

const Admin = () => {
  return (
    <div>
        <div>
            <header className="header1">
                <nav className="navbar">
                    <a href="/manage-candidates">Manage Candidates</a>
                    <a href="/manage-voters">Manage Voters</a>
                    <a className="logout-but" href="/">Logout</a>
                </nav>
            </header>
        </div>
        
        <div className="background"></div>

        <div className="container1">
            <div className="content1">
                <div className="card1">
                    <img src={candidates}></img>
                    <div className="intro">
                        <div className="inner-card">
                            <h4>Manage Candidates</h4>
                            <p>Add, Delete and Update Candidates</p>
                            <button><NavLink className="link" to="/manage-candidates">Go<i class='bx bxs-right-arrow' ></i></NavLink></button>
                        </div>
                    </div>
                </div>
                <div className="card1">
                    <img src={voters}></img>
                    <div className="intro">
                        <div className="inner-card">
                            <h4>Manage Voters</h4>
                            <p>Add, Delete and Update Voters</p>
                            <button><NavLink className="link" to="/manage-voters">Go<i class='bx bxs-right-arrow' ></i></NavLink></button>
                        </div>
                    </div>
                </div>
                <div className="elec-buttons">
                    <button className="open-button">Open Elections</button>
                    <button className="close-button">Close Elections</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Admin;
