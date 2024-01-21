import React from "react";
// import Model from "react-modal"
import { useState, useEffect } from "react";
import { Web3Button } from '@thirdweb-dev/react'
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import addcandidate from "../admin-images/add-candidate.png";
import removecandidate from "../admin-images/remove-candidate.png";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ManCandidates = () => {
    return(
        <div className="admin-page">

            <div>
                <header className="header1">
                    <nav className="navbar">
                        <a href="/admin" style={{background:"gray", borderRadius:"10px", padding:"5px"}}>Home</a>
                        <a href="/manage-voters">Manage Voters</a>
                    </nav>
                </header>
            </div>
        
            <div className="background"></div>

            <div className="container2">
                <div className="content2">
                    <div className="card2">
                        <img src={addcandidate}></img>
                        <div className="intro">
                            <div className="inner-card">
                                <h4>Add Candidate</h4>
                                <input
                                    type='text'
                                    placeholder='Wallet Address'
                                />
                                <br/>
                                <input
                                    type='text'
                                    placeholder='Name'
                                />
                                <br/>
                                <input
                                    type='text'
                                    placeholder='Party Name'
                                />
                                <br/>
                                <input
                                    type='text'
                                    placeholder='Party Symbol'
                                />
                                <br/>
                                <Web3Button
                                    className="submit-button submit-add"
                                    // contractAddress={CONTRACT_ADDRESS}
                                    // action={(contract) => contract.call(
                                    //     "addDoctor",
                                    //     [
                                    //         addCandidateAddress,
                                    //         candidateName,
                                    //         candidateAge
                                    //     ]
                                    // )}
                                    // onSuccess={() => {
                                    //     resetForm()
                                    //     // setAddDoctor(false)
                                    //     alertToast("Added Doctor Successfully!")
                                    // }}
                                >
                                    Add Candidate
                                </Web3Button>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <img src={removecandidate}></img>
                        <div className="intro">
                            <div className="inner-card">
                                <h4>Remove Candidate</h4>
                                <input
                                    type="text"
                                    placeholder="Wallet Address"
                                />
                                <br/>
                                <Web3Button
                                    className="submit-button submit-remove"
                                    // contractAddress={CONTRACT_ADDRESS}
                                    // action={handleRemoveDoctor}
                                    // disabled={removeDoctorLoading}
                                    // onSuccess={()=>{
                                    //     resetForm()
                                    //     alertToast("Removed Doctor Successfully!")
                                    // }}
                                >
                                    Remove Candidate
                                </Web3Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* {doctors.map((doctor) => (
                        <div className="list-content" key={doctor.address}>
                            <div>
                                <h3 style={{ color: "#222222" }}>Dr. {doctor.name}</h3>
                            </div>
                            <div>
                                <p style={{ color: "#666666" }}>Address: {doctor.address}</p>
                                <p style={{ color: "#666666" }}>Age: {doctor.age}</p>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ManCandidates;