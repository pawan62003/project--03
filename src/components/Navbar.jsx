
import { NavLink } from "react-router-dom";

import { Search2Icon, EditIcon, StarIcon,ViewIcon } from '@chakra-ui/icons'

const Navbar = () => {

   

    const Links1 = [
       {path:'/women',title:'WOMEN'},
       {path:'/men',title:'MEN'},
       {path:'/kids',title:'KIDS'},
       {path:'/',title:'HOME'},
       {path:'/offers',title:'OFFERS'},
    ];

    const Links2 = [
        {path:'/scrapbook',title:'SCRAPBOOK',icon:'PhoneIcon'},
        {path:'/search',title:'SEARCH'},
        {path:'/cart',title:'CART'},
        {path:'/profile',title:'PROFILE'},
    ]

    const Active = () =>{ 
      return  {color:"orange",textDecoration:"none"}

    }
    const Normal = () => {
       return {color:"white",textDecoration:"none"}
    }
    return <div style={{
        display:'flex',
        justifyContent:'space-around',
        background:'white',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
        }}>


       <div style={{width:'50%',display:'flex',justifyContent:'space-around'}}>
           <h1>LimeRoad</h1>
          <NavLink style={{color:'black',fontSize:'24px',textDecoration:'none',marginTop:'24px'}}  to='/women'>WOMEN</NavLink>
          <NavLink style={{color:'black',fontSize:'24px',textDecoration:'none',marginTop:'24px'}}  to='/men'>MEN</NavLink>
          <NavLink style={{color:'black',fontSize:'24px',textDecoration:'none',marginTop:'24px'}}  to='/kids'>KIDS</NavLink>
          <NavLink style={{color:'black',fontSize:'24px',textDecoration:'none',marginTop:'24px'}}  to='/'>HOME</NavLink>
          <NavLink style={{color:'red',fontSize:'24px',textDecoration:'none',marginTop:'24px'}}  to='/offers'>OFFERS</NavLink>
           
       </div>


       <div style={{display:'flex',justifyContent:'space-around',width:'30%'}}>
          <NavLink style={{color:'black',fontSize:'20px',textDecoration:'none',marginTop:'11px'}}  to='/scrapbook'>
                <EditIcon /><br/>
                SCRAPBOOK
          </NavLink>









          {/* <EditIcon /><br/> SCRAPBOOK */}



          <NavLink style={{color:'black',fontSize:'20px',textDecoration:'none',marginTop:'11px'}}  to='/search'><Search2Icon /><br/> SEARCH</NavLink>
          <NavLink style={{color:'black',fontSize:'20px',textDecoration:'none',marginTop:'11px'}}  to='/cart'><ViewIcon /><br/> CART</NavLink>
          <NavLink style={{color:'black',fontSize:'20px',textDecoration:'none',marginTop:'11px'}}  to='/profile'><StarIcon/><br/> PROFILE</NavLink>
          
       </div>

       
    </div>
}
export default Navbar;