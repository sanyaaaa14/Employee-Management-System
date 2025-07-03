import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
const [userData,setUserData]=useContext(AuthContext)

  return (
    <div className='bg-gray-800 text-white rounded p-5 mt-5 '>
        <div className='bg-white text-black mb-2 py-2 px-4 flex justify-between items-center text-center border-2 border-black rounded-lg'>
            <h2 className='w-1/5'>ID No.</h2>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
        </div>
    <div id='tasklist' className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='bg-black mb-2 py-2 px-4 flex justify-between border-1 border-gray-400 items-center text-center rounded-lg'>
                <h2 className='w-1/5 text-white'>{elem.id}</h2>
            <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-pink-600'>{elem.taskStatus.newTask}</h3>
            <h5 className='w-1/5 text-blue-600'>{elem.taskStatus.active}</h5>
            <h5 className='w-1/5 text-green-600'>{elem.taskStatus.completed}</h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskStatus.failed}</h5>
        </div>
        })}
    </div>
    </div>
  )
}

export default AllTask