import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavPerfil = () => {

  const user = useSelector((state)=>state.user)
  

  return (
    <header className={`flex w-[100%] items-center overflow-hidden`}>
   
        <div className="relative w-screen border-2 flex items-center justify-around">
          <div className="min-w-[200px] px-10">
            <h1 className="logo-name text-[50px]">
                <span className="font-bold text-amber-500">Gallery</span>
                <span>.Ec</span>
            </h1>
          </div>
          <div className="flex w-[50%]  items-center justify-between px-4">
            <div>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent    `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink={"/perfil/galeria/"+user.name.replace(' ','-')}>Galeria</ListItem>
                  <ListItem NavLink={"/perfil/"+user.name.replace(' ','-')}>Perfil</ListItem>
                </ul>
              </nav>
            </div>
            <div className=" w-[50%] justify-end pr-16 sm:flex lg:pr-0">
              <button  
                className="w-[30%] bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 px-2.5 rounded-lg transition-colors"
              >
                Cerrar Sesion
              </button>
            </div>
          </div>
        </div>
     
    </header>
  );
};

export default NavPerfil;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <Link
          to={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 hover:text-amber-700 lg:ml-12 lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};
