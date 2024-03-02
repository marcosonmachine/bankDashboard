import Link from 'next/link';
import React from 'react';
import { CiCreditCard1, CiCreditCard2 } from "react-icons/ci";
import { FaChartBar, FaMoneyBillTransfer, FaScrewdriverWrench, FaUser } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import { VscLightbulbAutofix } from 'react-icons/vsc';


const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-100 p-4 min-h-max shadow-md shadow-gray-800 z-50">

            <Link href="/" className='flex p-2 text-gray-500'>
                <CiCreditCard2 size={30} />
                <h2 className="text-xl font-bold mb-4 text-blue-900">BankDash.</h2>
            </Link>
            <nav>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-blue-500">
                    <IoHome />
                    <span className="font-medium">Dashboard</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <FaMoneyBillTransfer />
                    <span className="font-medium">Transactions</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <FaUser />
                    <span className="font-medium">Accounts</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <FaChartBar />
                    <span className="font-medium">Investments</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <CiCreditCard1 />
                    <span className="font-medium">Credit Cards</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <GiReceiveMoney />
                    <span className="font-medium">Loans</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <FaScrewdriverWrench />
                    <span className="font-medium">Services</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <VscLightbulbAutofix />
                    <span className="font-medium">My Privileges</span>
                </Link>
                <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-gray-500">
                    <IoMdSettings />
                    <span className="font-medium">Settings</span>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;