import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function SubMenuContainer({name}) {
  return  <div className='subMenuContainer'>
    <h3>{name}</h3>
   <div className="viewAll">
    <p>View All</p>
    <i><ChevronRightIcon/></i>
   </div>
  </div>
  
}

export default SubMenuContainer