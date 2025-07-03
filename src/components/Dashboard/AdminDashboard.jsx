import React from 'react'
import Headers from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='p-5 rounded '>
        <Headers changeUser={props.changeUser} />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard