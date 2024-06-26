import React from 'react'
import {profiles} from '@/data/index'
import { PinContainer } from "./ui/3Dpin";

const Profiles = () => {
  return (
    <div className='py-20'>
        <h1 className='heading text-purple-300 hover:text-purple-400 hover:animate-bounce'>
            My Profiles
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {profiles.map((profile) => (
                <div key={profile.id} className='max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{profile.title}</div>
                        <div className='flex justify-center'>
                            <PinContainer
                            title={profile.title}
                            href={profile.link} >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        {profile.title}
                                    </h3>
                                    <div className="flex flex-1 w-full rounded-lg mt-4">
                                        <img src={profile.img} alt={profile.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Profiles