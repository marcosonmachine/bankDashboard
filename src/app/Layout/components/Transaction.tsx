import { CiBank, CiCreditCard1 } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa6";

export enum TransactionTypes {
    paypal,
    card,
    bank
}
const getTransactionIcon = (tranType: TransactionTypes) => {
    switch (tranType) {
        case TransactionTypes.paypal:
            return (<FaPaypal />)
        case TransactionTypes.card:
            return (<CiCreditCard1 />)
        case TransactionTypes.bank:
            return (<CiBank />)
    }
}
const getTransactionString = (tranType: TransactionTypes) => {
    switch (tranType) {
        case TransactionTypes.paypal:
            return "Paypal transaction";

        case TransactionTypes.card:
            return "Transaction via card";

        case TransactionTypes.bank:
            return "Bank Transaction";
    }
}
const Transaction = ({ transactionType, amount, date }: { transactionType: TransactionTypes, amount: number, date: Date }) => {
    return (
        <div className='flex flex-row p-3 space-x-3 items-center'>
            <div className="p-2 rounded-full bg-gray-400">
                {
                    getTransactionIcon(transactionType)
                }
            </div>
            <div className="flex flex-col text-black">
                <span>
                    {getTransactionString(transactionType)}
                </span>
                <span className="text-gray-500">
                    {date.toUTCString()}
                </span>
            </div>
            <span
                className={`
                    ${amount > 0 ? 'text-green-500' : 'text-red-500'}
                    `}>
                ${amount}
            </span>

        </div>
    );
};



export default Transaction;