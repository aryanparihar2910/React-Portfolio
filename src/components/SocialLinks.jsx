import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

  const links =[
    {
        id: 1,
        child: (
            <>LinkedIn <FaLinkedin size={30}/></>
        ), href: 'https://www.linkedin.com/in/aryan-parihar-436206252/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>Github <FaGithub size={30}/></>
        ), href: 'https://github.com/aryanparihar2910'
    },
    {
        id: 3,
        child: (
            <>Mail <HiOutlineMail size={30}/></>
        ), href: 'mailto: aryanparihar879@gmail.com'
    },
    {
        id: 4,
        child: (
            <>Resume <BsFillPersonLinesFill size={30}/></>
        ), href: '/resume.pdf',
        download: true,
        style: 'rounded-br-md'
    }
  ] 

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, style, href, download})=>(
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"+" " + style}>
            <a href={href} download={download} target="_blank" rel="noreferrer" className="flex justify-between items-center w-full">
                {child}
            </a>
        </li>
        ))}
        
      </ul>
    </div>
  )
}

export default SocialLinks
