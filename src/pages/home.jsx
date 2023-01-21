import {Button} from '@chakra-ui/react'
// import {BiLike,BiChat,BiShare} from '@chakra-ui/icons'
const Home = () => {
    
    
   
    const images = [
        {image:'https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0',alt:'slider'},
        {image:'https://img1.junaroad.com//assets/images/mobileNotif/img-1652694665568.jpg?crsl_pos=0',alt:'slider'},
        {image:'https://img1.junaroad.com//assets/images/mobileNotif/img-1658918101342.jpg?crsl_pos=0',alt:'slider'},
        {image:'https://img1.junaroad.com//assets/images/mobileNotif/img-1661924796571.jpg?crsl_pos=0',alt:'slider'},
        {image:'https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0',alt:'slider'},
        {image:'https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0',alt:'slider'},
        {image:'https://img1.junaroad.com//assets/images/mobileNotif/img-1672290419954.jpg?crsl_pos=0',alt:'slider'},
        {image:'https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0',alt:'slider'}

    ]


    const homeData = [
        {title:'NEW ARRIVALS',image:'https://img0.junaroad.com/stories/story_p_63bbc7a7cc8b5e082d248dcc-1673860725.jpeg'},
        {title:'FRESH PRINTS IN THE HOUSE',image:"https://img2.junaroad.com/stories/story_p_63b6830ffd1d3c18522ec047-1673860871.jpeg"},
        {title:'UP YOUR FASHION GAME',image:"https://img0.junaroad.com/stories/story_p_63c50384f38057081856f28a-1673860919.jpeg"},
        {title:'#WINTERWORTHY CELEB LOOK',image:"https://img0.junaroad.com/stories/story_p_63c50384f38057081856f28a-1673860919.jpeg"},
        {title:'TRENDING THIS YEAR',image:"https://img2.junaroad.com/stories/story_p_63ad51d0f380570823be15db-1672997394.jpeg"},
        {title:'DO IT LIKE ARJUN KAPOOR',image:"https://img3.junaroad.com/stories/story_p_63ae6641adb8b84ef73d4c15-1672907338.jpeg"},
        {title:'CASUAL. COOL. COMFY',image:"https://img0.junaroad.com/stories/story_p_63b68bd7fd1d3c18522ecb48-1673333935.jpeg"},
        {title:'STAY HIGH ON TRENDS',image:"https://img2.junaroad.com/stories/story_p_63a390baadb8b82d0e0f299b-1671673435.jpeg"},
        {title:'TRENDS WHILE SHOES FTW',image:"https://img3.junaroad.com/stories/story_p_63a3b451adb8b82d0e0f4675-1672181755.jpeg"},
        {title:'CELEB #OOTD TO RECREATE',image:"https://img0.junaroad.com/stories/story_p_63a2dcb5f38057082211c050-1671625641.jpeg"},
        {title:'SNAG SHIRTS, CHINOS AND SHINE',image:"https://img2.junaroad.com/stories/story_p_63b683d013cb38081c3a1a68-1673860769.jpeg"},
        {title:'ALL NEW AND TOTALLY YOU',image:"https://img2.junaroad.com/stories/story_p_63b683d013cb38081c3a1a68-1673860769.jpeg"},
    ]



     
    let slide = 0
    setInterval(()=>{
        console.log(images[slide].image)
       let slider1 = document.getElementById('first_slider')
       slider1.innerHTML = "";
       let first = document.createElement('img');
       first.setAttribute('src',images[slide].image)
       first.setAttribute('width','100%')
       slider1.append(first)

       let slider2 = document.getElementById('second_slider')
       slider2.innerHTML = "";
       let second = document.createElement('img');
       second.setAttribute('src',images[slide+1].image)
       second.setAttribute('width','100%')
       slider2.append(second);
       slide++
       if(slide===6){
          slide=0;
       }
    },4000)



    return <>
       <div style={{width:'60%',margin:'auto', marginTop:'10px', display:'flex',justifyContent:'space-around',gap:'20px'}}>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/winter.png" alt="Winter" />
            <p>WINTER</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/tshirts.png" alt="Winter" />
            <p>T-SHIRTS</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/shirts.png" alt="Winter" />
            <p>SHIRTS</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/jeans.png" alt="Winter" />
            <p>JEANS</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/trousers.png" alt="Winter" />
            <p>TROUSERS</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/ethnicsets.png" alt="Winter" />
            <p>ETHNIC SETS</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/footwear.png" alt="Winter" />
            <p>FOOTWERE</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/kids.png" alt="Winter" />
            <p>KIDS</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/women/home.png" alt="Winter" />
            <p>HOME</p>
        </div>
        <div>
            <img style={{width:'100%'}} src="https://img0.junaroad.com/images/icons/men/accessory.png" alt="Winter" />
            <p>ACESSORY</p>
        </div>
       </div>
       <div style={{border:'2px solid #2593b8',width:'60%' ,margin:'auto'}}></div>
       <div style={{display:'flex',justifyContent:'space-around',width:'60%',margin:'auto',marginTop:'6px',background:'#c6e9f5'}}>
        <img style={{width:'60px'}} src="https://img0.junaroad.com/assets/images/blue_annoucement.png" alt="announcement" />
        <p >Get FLAT 10% OFF on your purchase on payment via Paytm/ GPay/ PhonePe/ Net Banking/ Any Credit or Debit Card</p>
       </div>

       <div style={{display:'flex',justifyContent:'space-around',width:'60%',margin:'auto'}}>
        <div id="first_slider">
            <img style={{width:'100%'}} src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0" alt="slider" />
        </div>
        <div id="second_slider">
            <img style={{width:'100%'}} src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674044135107.jpg?crsl_pos=0" alt="slider" />
        </div>
       </div>

       <div id='home_card' style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)' ,gap:'20px',width:'60%',margin:'auto',marginTop:'20px'}}>
           {
            homeData.map(item => <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <p>{item.title}</p>
                <img style={{width:'100%'}} src={item.image} alt={item.title} />
                
            </div>)
           }
       </div>
    </>
}

export default Home;