import React from 'react'
import Item from './Item'

const Category = () => {
  return (
     <>
       <ul>
          <Item  isShow={true}  name="Makara1"/>
          <Item  isShow={false} name="Makara2"/>
          <Item  isShow={true}  name="Makara2"/>
          <Item  isShow={false}  name="Makara4"/>
          <Item  isShow={true}  name="Makara5"/>
          <Item  isShow={true} name="Makara6"/>
       </ul>
     </>
  )
}

export default Category