import React from 'react'

const Navbar = () => {

    const menus = [
      {id :1, title :"Home", path :"/home"},
      {id :2, title :"News", path :"/news"},
      {id :3, title :"About", path :"/about"},
      {id :4, title :"Contact", path :"/path"}
     ]

  return (
    <>
     <ul>
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