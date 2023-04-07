import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <div>
      <nav className='navbar'>
      <div className='btn-group'>
        {
            menuList.map((currElem)=>{
                return  <button className='btn-group_item' onClick={()=> filterItem(currElem)}>{currElem}</button>
            })
        }
       
         </div>
    </nav>
    </div>
  )
}

export default Navbar
