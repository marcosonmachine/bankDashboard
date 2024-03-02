import Image from "next/image";
const BalanceHistory = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <span className='text-blue-800 text-xl font-semibold'>
                   Balance History 
                </span>
            </div>
            <div className='flex bg-white rounded-xl flex-col py-3 space-y-4'>
                <Image
                    src='/historyChart.png'
                    width={600}
                    height={200}
                    alt="Expense"
                />

            </div>
        </div>
    );
};
export default BalanceHistory;