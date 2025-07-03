import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-white rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-green-600 px-3 text-sm py-1 rounded'>Completed</h3>
                <h4 className='text-black text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-black'>{data.title}</h2>
            <h3 className='bg-gray-700 px-3 text-sm mt-3 mb-3 py-1 rounded '>Category : {data.category}</h3>
            <p className='text-sm mt-2 text-black'>
                {data.description}</p> 
               
        </div>
  )
}

export default CompleteTask