import React from 'react'
import ActiveTask from './ActiveTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


const TaskList = ({data}) => {
  return (
    <div id='tasklist' className=' h-[55%] overflow-x-auto w-full mt-10 flex items-center flex-nowrap gap-5 justify-start  py-5  text-white'>
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <ActiveTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
        })}
    </div>
  )
}

export default TaskList