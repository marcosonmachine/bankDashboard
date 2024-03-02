import CreditCard from './CreditCard';

const Card = () => {
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <span className='text-blue-800 text-xl font-semibold'>
                    My Cards
                </span>
                <span className='text-blue-800 font-semibold'>See All</span>
            </div>
            <div className='flex min-w-max py-3 space-x-4 h-fit'>
                <CreditCard focused={true} />
                <CreditCard focused={false} />
            </div>
        </div>
    );
};



export default Card;