import React from "react";
import metamaskLogo from "../assets/metamaskLogo.png";

const Login = ({ connectWallet }) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
            <div className="flex justify-center mb-6">
            <img
                src={metamaskLogo}
                alt="MetaMask"
                className="h-16 w-28 animate-pulse"
            />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Welcome to <span className="text-blue-400">Decentralized Voting</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-6">
            Secure, Transparent & Blockchain Powered
            </p>
            <button
            onClick={connectWallet}
            className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition transform hover:scale-105 duration-300"
            >
            Connect with MetaMask
            </button>
        </div>
        </div>
    );
};

export default Login;
