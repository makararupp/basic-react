import React from 'react'

const Item = ({name, isShow}) => {
  
  return(
    <li>
      {isShow ? name+ '✔️' : name}
    </li>
  )

}

export default Item