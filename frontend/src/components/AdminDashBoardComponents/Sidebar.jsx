import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {links} from '../../data/dummy'
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../../context/AdminContext';

export default function Sidebar() {
  const {activeMenu, setActiveMenu} = useStateContext()
  const activeLink = 'flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen lg:overflow-hidden overflow-auto lg:hover:overflow-auto pb-10'>
         {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={()=>{setActiveMenu(false)}} className="   mt-4  text-xl font-extrabold  dark:text-white text-slate-900">
            <img alt="logo" src="/images/Logo.svg" />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}}
                className="text-xl rounded-full p-2 hover:bg-light-gray mt-4 block "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={()=>{}}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
