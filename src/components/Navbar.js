import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {

  //create array objects 
    const menus = [
      {id :1, title :"Home", path :"/home"},
      {id :2, title :"News", path :"/news"},
      {id :3, title :"About", path :"/about"},
      {id :4, title :"Contact", path :"/path"}
     ]

   const MyStyle = {
      backgroundColor : 'red',
      color : 'white',
      fontWeight :'bold',
      listStyleType : 'none'
   }

  return (
    <>
     <ul className={style.nav}>
         {menus.map((items)=>(
          <li key={items.id}>
              <a href={items.path}>{items.title}</a>
          </li>
         ))}
     </ul>
    </>
  )
}

export default Navbar