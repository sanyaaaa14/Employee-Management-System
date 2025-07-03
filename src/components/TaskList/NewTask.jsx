import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-white rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-pink-600 px-3 text-sm py-1 rounded'>New Task</h3>
                <h4 className='text-black text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-black'>{data.title}</h2>
            <h3 className='bg-gray-700 px-3 text-sm mt-3 mb-3 py-1 rounded '>Category : {data.category}</h3>
            <p className='text-sm mt-2 text-black'>
                {data.description}</p>
            <div className=' mt-4 text-center '>
                <button className='bg-green-500 py-1 px-2 text-sm rounded w-full '>Accept Task</button>
            </div>   
    </div>
  )
}

export default NewTask