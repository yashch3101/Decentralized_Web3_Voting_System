const contractAddress = "0x2bbC58F50b27DB79Be8e27AF5414E376DA4B7052";

const contractAbi = [
    {
        "inputs": [
            {
            "internalType": "string[]",
            "name": "_candidateNames",
            "type": "string[]"
            },
            {
            "internalType": "uint256",
            "name": "_durationInMinutes",
            "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "inputs": [
            {
            "internalType": "string",
            "name": "_name",
            "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
            "internalType": "string",
            "name": "name",
            "type": "string"
            },
            {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "getAllVotesOfCandiates",
        "outputs": [
            {
            "components": [
                {
                "internalType": "string",
                "name": "name",
                "type": "string"
                },
                {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
                }
            ],
            "internalType": "struct Voting.Candidate[]",
            "name": "",
            "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "getRemainingTime",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "getVotingStatus",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "_candidateIndex",
            "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "votingEnd",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "votingStart",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        }
    ];

export { contractAddress, contractAbi };