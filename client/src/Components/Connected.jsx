import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Connected = (props) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="relative min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8 overflow-hidden">
        {/* Particle Background */}
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 -z-10"
            options={{
            background: {
                color: {
                value: "#0f172a",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
                },
                modes: {
                repulse: { distance: 100, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#38bdf8" },
                links: {
                color: "#38bdf8",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
                },
                collisions: { enable: true },
                move: {
                direction: "none",
                enable: true,
                outModes: "bounce",
                random: false,
                speed: 1,
                straight: false,
                },
                number: { density: { enable: true, area: 800 }, value: 60 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
            }}
        />

        {/* Main UI */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-3xl z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            ✅ Connected to <span className="text-orange-400">MetaMask</span>
            </h1>

            <p className="text-sm md:text-base text-gray-300 mb-4 text-center">
            <span className="font-medium text-white">Account:</span> {props.account}
            </p>

            {props.showButton ? (
            <p className="text-center text-red-400 font-semibold text-lg mb-6">
                🗳️ You have already voted!
            </p>
            ) : (
            <div className="flex flex-col items-center gap-4 mb-8">
                <input
                type="number"
                placeholder="Enter Candidate Index"
                value={props.number}
                onChange={props.handleNumberChange}
                className="w-full md:w-2/3 px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                onClick={props.voteFunction}
                className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition transform hover:scale-105 duration-300"
                >
                Vote
                </button>
            </div>
            )}

            <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-700 bg-white/5 text-white rounded-xl shadow-md">
                <thead className="bg-gray-800 text-blue-400">
                <tr>
                    <th className="px-4 py-3 border-b border-gray-700">Index</th>
                    <th className="px-4 py-3 border-b border-gray-700">Candidate Name</th>
                    <th className="px-4 py-3 border-b border-gray-700">Vote Count</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index} className="text-center hover:bg-gray-700/30 transition">
                    <td className="px-4 py-3 border-b border-gray-700">{candidate.index}</td>
                    <td className="px-4 py-3 border-b border-gray-700">{candidate.name}</td>
                    <td className="px-4 py-3 border-b border-gray-700">{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};

export default Connected;
