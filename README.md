# 🗳️ Decentralized Voting Application

Welcome to the **Decentralized Voting DApp** built with **React.js** and **Solidity**! This application allows users to cast votes in a secure, transparent, and tamper-proof manner using the power of the **Ethereum blockchain**.

In this project:
- Write and deploy a smart contract using Solidity
- Interact with Ethereum via Web3.js or Ethers.js
- Build a responsive front-end using React.js
- Connect your DApp to MetaMask
- Host a fully-functional decentralized voting system

---

## 🚀 Tech Stack

| Technology | Description |
|------------|-------------|
| **Solidity** | Smart contract language for Ethereum |
| **React.js** | Frontend framework for building the UI |
| **Ethereum** | Blockchain platform for decentralized apps |
| **Hardhat** | Ethereum development environment |
| **Ethers.js / Web3.js** | Library to interact with Ethereum blockchain |
| **MetaMask** | Wallet to interact with the DApp |
| **Tailwind CSS / CSS3** | Styling the frontend interface |

---

## 📦 Features

- 🔐 Secure and immutable voting with blockchain
- 🗳️ Voter registration and unique vote casting
- 📊 Real-time vote count updates
- 🔗 MetaMask wallet integration
- ✉️ Transparent election process
- 💻 Fully responsive frontend

---

## 🧠 How It Works

1. **Smart Contract in Solidity**
   - Create a contract that handles:
     - Voter registration
     - Voting logic
     - Vote tallying
     - Access control

2. **Setting Up Ethereum Network**
   - Use Hardhat or Ganache to simulate a local Ethereum blockchain
   - Deploy the smart contract locally or to testnet (e.g., Goerli)

3. **Building the Frontend**
   - Use React.js to build an intuitive UI
   - Connect the UI with MetaMask using Ethers.js or Web3.js
   - Display real-time vote count and election status

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yashch3101/Decentralized_Web3_Voting_System
cd Decentralized_Web3_Voting_System
```

### 2. Install Dependencies
```bash
# For backend/smart contract
cd web3
npm install

#Create the .env file

API_URL="Your_Network_API_URL"
PRIVATE_KEY="Your_Metamask_Private_Key"
CONTRACT_ADDRESS="Your_Contract_Address"

# For frontend
cd ../frontend
npm install
```

### 3. Compile & Deploy Smart Contract
```bash
cd smart-contract
npx hardhat compile
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### 4. Run the Frontend
```bash
cd ../frontend
npm run dev
```

## 🌐 Connect Wallet

Make sure you have [MetaMask](https://metamask.io/) installed in your browser. Connect your wallet to the local network or a testnet like sepolia.

---

## 📁 Directory Structure

```
decentralized-voting-app/
│
├── web3/
│   ├── contracts/
│   │   └── Voting.sol
│   ├── scripts/
│   │   └── deploy.js
│   ├── hardhat.config.js
│   └── ...
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── index.js
    │   └── ...
    ├── tailwind.config.js
    └── package.json
```

---

## 📚 Resources

- [Solidity Docs](https://docs.soliditylang.org/)
- [Ethers.js Docs](https://docs.ethers.org/)
- [Hardhat Docs](https://hardhat.org/)
- [React.js Docs](https://reactjs.org/)
- [MetaMask Docs](https://docs.metamask.io/)

---

## 🙌 Acknowledgments

This project was inspired by the potential of **Web3** to bring transparency and trust to voting systems. Thanks to the open-source community for tools and guidance!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

**Developer:** [Yash Chaurasia]
**Twitter:** [@Yash3129]
**GitHub:** [https://github.com/yashch3101]
**Email:** chaurasiayash2910@gmail.com
