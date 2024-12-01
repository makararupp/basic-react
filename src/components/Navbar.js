import React from 'react'

const Navbar = (props) => {
  return (
    <>
      <a href={props.path}>
        {props.title}
      </a>
    </>
  )
}

export default Navbar