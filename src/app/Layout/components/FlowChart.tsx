import Image from "next/image";
const ExpenseStatics = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <span className='text-blue-800 text-xl font-semibold'>
                    Expense Statistics
                </span>
            </div>
            <div className='flex bg-white rounded-xl flex-col p-6 space-y-4 h-fit'>
                <Image
                    src='/flowChart.png'
                    width={300}
                    height={200}
                    alt="Expense"
                />

            </div>
        </div>
    );
};

export default ExpenseStatics;