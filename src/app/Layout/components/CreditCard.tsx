"use client";
import React, { useState } from 'react';

const CreditCard = ({ focused }: { focused: boolean }) => {

    const [selected, setSelected] = useState(focused);
    return (
        <div className={`
                cursor-pointer transition 
                flex flex-col
                min-w-max
                ${selected ?
                'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                : 'bg-white text-black'
            }
                rounded-3xl shadow-lg`}
            onClick={() => setSelected(!selected)}
        >

            <div className='p-6'>
                <div className="flex justify-between">
                    <div>
                        <p className="text-sm text-gray-300">Balance</p>
                        <p className="text-xl font-bold">$5,756</p>
                    </div>
                    <img src="/chip.png" alt="Chip" className="w-8 h-8" />
                </div>

                <div className="flex mt-5 space-x-4">
                    <div>
                        <p className="text-xs text-gray-300">CARD HOLDER</p>
                        <p>Eddy Cusuma</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-300">VALID THRU</p>
                        <p>12/22</p>
                    </div>

                </div>
            </div>
            <div className={`flex p-2 justify-between 
            ${selected? 'bg-gradient-to-r from-blue-700 to-blue-500'
            :  'bg-slate-200'}
            rounded-b-3xl`}>
                <p>3778 **** **** 1234</p>
            </div>
        </div>
    );
};

export default CreditCard;
