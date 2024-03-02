import Transaction, {TransactionTypes} from "./Transaction";

const RecentTransactions = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between py-2'>
                <span className='text-blue-800 text-xl font-semibold'>
                   Recent Transactions 
                </span>
            </div>
            <div className='flex bg-white rounded-lg flex-col py-3 space-y-4 h-fit'>
                <Transaction transactionType={TransactionTypes.paypal} amount={100} date={new Date()}/>
                <Transaction transactionType={TransactionTypes.bank} amount={-23} date={new Date()}/>
            </div>
        </div>
    );
};



export default RecentTransactions;