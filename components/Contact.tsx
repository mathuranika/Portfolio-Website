import React from 'react'
import MagicButton from './ui/MagicButton'
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact" className="bg-black-100 text-white py-20">
      <div className="container mx-auto">
        <h2 className="heading text-purple-300 hover:text-purple-400 hover:animate-bounce py-5">Contact Me</h2>
        <div className="flex justify-center items-center">
          <a href="mailto: an.mathur17.com" className="text-xl font-bold">
            <MagicButton title="Send an email" icon= <MdEmail/>/>
          </a>
        </div>
     </div>
    </section>
  )
}

export default Contact