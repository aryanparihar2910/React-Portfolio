import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import nextjs from '../assets/nextjs.png'
import react from '../assets/react.png'

const Experience = () => {
  
  const techs =[
      {
        id:1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
      },
      {
        id:2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
      },
      {
        id:3,
        src: github,
        title: 'Github',
        style: 'shadow-gray-400'
      },
      {
        id:4,
        src: javascript,
        title: 'Javascript',
        style: 'shadow-yellow-500'
      },
      {
        id:5,
        src: react,
        title: 'React',
        style: 'shadow-blue-600'
      },
      {
        id:6,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'
      },
      {
        id:7,
        src: nextjs,
        title: 'Next JS',
        style: 'shadow-white'
      },
      {
        id:8,
        src: node,
        title: 'Node JS',
        style: 'shadow-green-300'
      }
  ]
  return (
    
    <div name='experience'className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</p>
          <p className="py-6">These are the technologies I have worked on.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0">

        {
          techs.map(({id, src, title, style}) =>(
            <div key={id} className={`shadow hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className="w-20 mx-auto" src={src} alt="" />
            <p className="mt-4">{title}</p>
          </div>
          ))
        }

          
        </div>

      </div>

    </div>
  )
}

export default Experience
