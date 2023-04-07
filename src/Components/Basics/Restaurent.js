import React, { useState } from 'react'
import './style.css'
import Menu from './menuAPI'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList =[
  ...new Set (
  Menu.map((currElem)=>{
     return currElem.category
  })
),
, "All"
]
console.log(uniqueList)
const Restaurent = () => {
const [menuData, setMenuData] = useState(Menu)
const [menuList, setMenuList] = useState(uniqueList)
// console.log(menuData)
const filterItem = (category)=>{
      if(category==='All'){
        setMenuData(Menu)
      }
       
      const updatedList = Menu.filter((currElem)=>{
         return currElem.category === category
      })
      setMenuData(updatedList)
}

  return (
    
    <>
    <Navbar filterItem = {filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurent
