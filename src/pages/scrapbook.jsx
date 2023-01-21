import { background, Input } from '@chakra-ui/react'

import { useState } from 'react'
const ScerapBook = () => {

    const [mobile,setMobile] = useState("")

    const mobileSet = (e) => {
        setMobile(e.target.value);
    }
    console.log(mobile);
    return <>
       <div style={{width:'30%',margin:'auto' ,marginTop:'20px'}}>
           <div style={{display:'flex',justifyContent:'space-around',gap:'10px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <img style={{width:'20%',borderRadius:'50%'}} src="https://as1.ftcdn.net/v2/jpg/05/17/79/88/1000_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" alt="user image" />
            <div style={{width:'60%'}}>
                <p>SIGN IN</p>
                <hr/>
                <h4>SIGN IN TO PROCCED FURTHER</h4>
            </div>
           </div><br/>
          
               <Input style={{width:'97%',padding:'5px'}} value={mobile} onChange={mobileSet} variant='Flushed' placeholder='Enter Your Mobile Number' /><br/>
           <br />
           <button style={{width:'100%',padding:'10px' ,border:'none',background:'red',}}>NEXT</button>
       </div>
    </>
}

export default ScerapBook;