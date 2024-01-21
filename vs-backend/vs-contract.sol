// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Voting {
    address public contractOwner;
    address[] public candidatesList;
    mapping(address => uint) public votesReceived; 
    address public winner;
    uint public winnerVotes;

    enum VotingStatus { NotStarted, Running, Completed }
    VotingStatus public status;

    mapping(address => bool) public registeredVoters; 
    mapping(address => bool) public hasVoted; 
    struct Candidate {
        string name;
        uint age;
        string symbol;
        address candidateAddress;
    }

    mapping(address => Candidate) public candidateInfo;
    struct Voter {
        string name;
        uint age;
        bool hasValidVoterPass; 
        bool hasVoted;
        address voterAddress;
    }

    mapping(address => Voter) public voterInfo; 

    constructor() {
        contractOwner = msg.sender;
    }

    modifier OnlyOwner { 
        require(msg.sender == contractOwner, "You ain't the owner, dude");
        _;
    }
    function setStatus() OnlyOwner public {
    if (status == VotingStatus.Running) {
        status = VotingStatus.Completed;
    } else {
        status = VotingStatus.Running;
    }
}
    function registerCandidates(string memory _name, uint _age, string memory _symbol, address _candidate) OnlyOwner public {
        candidatesList.push(_candidate);
        candidateInfo[_candidate] = Candidate(_name, _age, _symbol, _candidate);
    }
    function registerVoter(string memory _name, uint _age, address _voter) OnlyOwner public {
        require(!registeredVoters[_voter], "Voter is already registered");
        // assume the voter has a valid pass when registering
        registeredVoters[_voter] = true;
        voterInfo[_voter] = Voter(_name, _age, true, false, _voter);
    }
    function hasValidVoterPass(address _voter) view public returns(bool) {
        return voterInfo[_voter].hasValidVoterPass;
    }
    function vote(address _candidate) public {
        require(validateCandidate(_candidate), "Not a valid Candidate");
        require(status == VotingStatus.Running, "Voting is not started");
        require(registeredVoters[msg.sender], "You are not a registered voter");
        require(!hasVoted[msg.sender], "You have already voted");
        votesReceived[_candidate] = votesReceived[_candidate] + 1;
        hasVoted[msg.sender] = true;
        voterInfo[msg.sender].hasVoted = true;
    }
    function validateCandidate(address _candidate) view public returns(bool) {
        for (uint i = 0; i < candidatesList.length; i++ ) {
            if (candidatesList[i] == _candidate) {
                return true;
            }
        }
        return false;
    }
    function voteCounts(address _candidate) public view returns(uint){
        require(validateCandidate(_candidate), "Not a valid Candidate");
        assert(status == VotingStatus.Running);
        return votesReceived[_candidate];
    }
    function result() public {
        require(status == VotingStatus.Completed, "Voting isn't completed yet!");
        for(uint i= 0; i < candidatesList.length;i++) {
            if (votesReceived[candidatesList[i]] > winnerVotes) {
                winnerVotes = votesReceived[candidatesList[i]];
                winner = candidatesList[i];
            }
        }
    }
}