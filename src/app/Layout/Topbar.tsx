import React from 'react';
import { FaSearch, FaCog, FaBell, FaUser } from 'react-icons/fa';

const TopBar: React.FC = () => {
    return (
        <div className="flex justify-between bg-white p-4 shadow-md shadow-gray-200">
            <div className="text-2xl font-semibold text-blue-800">Overview</div>
            <div className="flex space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for something"
                        className="p-2 rounded-full bg-gray-400 pl-8 placeholder-white"
                    />
                    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                </div>
                <div className="p-2 rounded-full bg-gray-400">
                    <FaCog size={24} />
                </div>
                <div className="p-2 rounded-full bg-gray-400">
                    <FaBell size={24} />
                </div>
                <div className="p-2 rounded-full bg-gray-400">
                    <FaUser size={24} />
                </div>
            </div>
        </div>

    );
};

export default TopBar;
