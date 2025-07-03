import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex screen mt-10 justify-between items-center gap-5 p-5 bg-gray-800  text-white'>
        <div className='py-6 px-9 w-[45%] bg-pink-400 rounded-xl'>
            <h2 className='text-3xl font-semibold '>{data.taskStatus.newTask}</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>  
        <div className='py-6 px-9 w-[45%] bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold '>{data.taskStatus.active}</h2>
            <h3 className='text-xl font-medium'>Active Tasks</h3>
        </div>  
        <div className='py-6 px-9 w-[45%] bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-semibold '>{data.taskStatus.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Tasks</h3>
        </div>  
        <div className='py-6 px-9 w-[45%] bg-red-400 rounded-xl'>
            <h2 className='text-3xl font-semibold '>{data.taskStatus.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Tasks</h3>
        </div>  
    </div>
  )
}

export default TaskListNumbers