import React from 'react'
import AddClientModal from '../components/addClientModel'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import AddProjectModel from '../components/addProjectModal'

export default function Home() {
  return (
    <>
        <div className='d-flex gap-3 mb-4'>
            <AddClientModal />
            <AddProjectModel />
        </div>
        <Projects />
        <hr />
        <Clients />
    </>
  )
}
