import Image from "next/image";
const QuickTransfer = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <span className='text-blue-800 text-xl font-semibold'>
                   Quick Transfer 
                </span>
                <span className='text-blue-800 font-semibold'>See All</span>
            </div>
            <div className='flex bg-white rounded-xl flex-col py-3 space-y-4 h-fit'>
                <Image
                    src='/transferModule.png'
                    width={600}
                    height={400}
                    alt="Expense"
                />

            </div>
        </div>
    );
};

export default QuickTransfer;