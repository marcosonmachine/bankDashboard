import Image from 'next/image'

const WeeklyActivity = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between py-2'>
                <span className='text-blue-800 text-xl font-semibold'>
                   Weekly Transactions 
                </span>
            </div>
            <div className='flex bg-white rounded-lg flex-col py-3 space-y-4 h-fit'>
                <Image 
                src="/dayChart.png"
                width={600}
                height={400}
                alt='DayChart'
                />
            </div>
        </div>
    );
};



export default WeeklyActivity;