import React from "react";
import { useState, useEffect } from "react";
import { Web3Button } from '@thirdweb-dev/react'
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import addvoter from "../admin-images/addvoter.png";
import removevoter from "../admin-images/removevoter.avif";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ManVoters = () => {
    return (
        <div className="admin-page">
            <div>
                <header className="header1">
                    <nav className="navbar">
                        <a href="/admin" style={{background:"gray", borderRadius:"10px", padding:"5px"}}>Home</a>
                        <a href="/manage-candidates">Manage Candidates</a>
                    </nav>
                </header>
            </div>
        
            <div className="background"></div>

            <div className="container2">
                <div className="content2">
                    <div className="card20">
                        <img className="add-img" src={addvoter}></img>
                        <div className="intro">
                            <div className="inner-card">
                                <h4>Register Voter</h4>
                                <br/>
                                <div className="add-patient-details">
                                    <div>
                                        <input
                                            type='text'
                                            placeholder='Wallet Address'
                                            // value={addPatientAddress}
                                            // onChange={(e) => setAddPatientAddress(e.target.value)}
                                        />
                                        <br/>
                                        <br/>
                                        <input
                                            type='text'
                                            placeholder='Full Name'
                                            // value={patientName}
                                            // onChange={(e) => setPatientName(e.target.value)}
                                        />
                                        <br/><br/>
                                        <input
                                            type='number'
                                            placeholder='Age'
                                            // value={patientAge}
                                            // onChange={(e) => setPatientAge(e.target.value)}
                                        />
                                        <br/>
                                        <br/>
                                        <input
                                            type="text"
                                            placeholder="ID Number"
                                            // value={diseaseName}
                                            // onChange={(e) => setDiseaseName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <br/>
                                <Web3Button
                                    className="submit-button1 submit-add"
                                    // contractAddress={CONTRACT_ADDRESS}
                                    // action={(contract) => contract.call(
                                    //     "addPatient",
                                    //     [
                                    //         addPatientAddress,
                                    //         patientName,
                                    //         patientAge,
                                    //         diseaseName,
                                    //         medicationName,
                                    //         dosage,
                                    //         instructions,
                                    //         sampleCollected,
                                    //         testType,
                                    //         observations
                                    //     ]
                                    // )}
                                    // onSuccess={() => {
                                    //     resetForm()
                                    //     alertToast("Voter Registered Successfully!")
                                    // }}
                                >
                                    Register Voter
                                </Web3Button>
                            </div>
                        </div>
                    </div>
                    <div className="card2">
                        <img src={removevoter}/>
                        <div className="intro">
                            <div className="inner-card">
                                <h4>Remove Voter</h4>
                                <br/>
                                <input
                                    type="text"
                                    placeholder="Wallet Address"
                                    // value={removePatientAddress}
                                    // onChange={(e) => setRemovePatientAddress(e.target.value)}
                                />
                                <br/>
                                <Web3Button
                                    className="submit-button submit-remove"
                                    // contractAddress={CONTRACT_ADDRESS}
                                    // action={handleRemovePatient}
                                    // disabled={removePatientLoading}
                                    // onSuccess={()=>{
                                    //     resetForm()
                                    //     alertToast("Voter Removed Successfully!")
                                    // }}
                                >
                                    Remove Voter
                                </Web3Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* {patients.map((patient) => (
                        <div className="list-content" key={patient.address}>
                            <div>
                                <h3 style={{ color: "#222222" }}>{patient.name}</h3>
                            </div>
                            <div>
                                <p style={{ color: "#666666" }}>Address: {patient.address}</p>
                                <p style={{ color: "#666666" }}>Age: {patient.age}</p>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ManVoters;