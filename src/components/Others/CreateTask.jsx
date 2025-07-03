import React, { useContext, useState } from 'react'
import AuthProvider, { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler=(e)=>{
        e.preventDefault()
        setNewTask({title,description,date,category,active:false,newTask:true,failed:false,completed:false})
        const data=userData
        
        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskStatus.newTask=elem.taskStatus.newTask+1
            }
        })
        setUserData(data)
        

        setTitle('')
        setDescription('')
        setDate('')
        setAssignTo('')
        setCategory('')
    }

  return (
    <div className='p-5 bg-gray-800  rounded mt-10'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-lg text-white mb-0.3'>Task Title :</h3>
                        <input 
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                        
                        className='text-gray-300 mt-1.5 text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4' type="text" placeholder ='Give a task Title' />
                    </div>
                
                    <div>
                        <h3 className='text-lg text-white mb-0.3'>Date :</h3>
                        <input
                        value={date}
                        onChange={(e)=>{
                            setDate(e.target.value)
                            }}
                            className='text-gray-300 mt-1.5 text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4'
                            type="date"
                        />

                    </div>
                    <div>
                        <h3 className='text-lg text-white mb-0.3'>Assign to :</h3>
                        <input
                        value={assignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                            }}
                        className='text-gray-300 mt-1.5 text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4' type="text" placeholder ='Employee Mail' />
                    </div>
                    <div>
                        <h3 className='text-lg text-white mb-0.3'>Category :</h3>
                        <input
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                            }}
                        
                        className='text-gray-300 mt-1.5 text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4' type="text" placeholder ='design, dev, etc.' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-lg text-white mb-0.5'>Task Description :</h3>
                    <textarea 
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                        }}
                     className='w-full h-44 text-sm py-2 px-4 rounded outline-none text-white bg-transparent border-[2px] border-gray-400 mt-1.5' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-lg font-semibold mt-6 w-full'>Create Task</button>
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask