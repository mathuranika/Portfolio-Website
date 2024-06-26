import React from 'react'
import {projects} from '@/data/index'

const Projects = () => {
  return (
    <div className='py-0'>
      <h1 className='heading text-purple-300 hover:text-purple-400 hover:animate-bounce'>
        My Projects
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map((project) => (
          <div key={project.id} className='max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{project.title}</div>
              <p className='text-gray-700 text-base'>{project.des}</p>
            </div>
            <div className='px-6 py-4'>
              <a href={project.link} target='_blank' rel='noreferrer noopener' className='bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full'>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects