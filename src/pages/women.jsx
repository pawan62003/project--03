const Women = () => {
    const homeData = [
        {title:'NEW ARRIVALS',image:'https://img1.junaroad.com/stories/story_p_63bfe02ff47b700819353f81-1673521293.jpeg'},
        {title:'FRESH PRINTS IN THE HOUSE',image:"https://img3.junaroad.com/uiproducts/18234704/zoom_0-1643615198.jpg"},
        {title:'UP YOUR FASHION GAME',image:"https://img3.junaroad.com/uiproducts/17520421/zoom_0-1611570850.jpg"},
        {title:'#WINTERWORTHY CELEB LOOK',image:"https://img3.junaroad.com/uiproducts/18214674/zoom_0-1642007279.jpg"},
        {title:'TRENDING THIS YEAR',image:"https://img3.junaroad.com/uiproducts/13055969/zoom_0-1489587997.jpg"},
        {title:'DO IT LIKE ARJUN KAPOOR',image:"https://img3.junaroad.com/uiproducts/15367596/zoom_0-1533214611.jpg"},
        {title:'CASUAL. COOL. COMFY',image:"https://img3.junaroad.com/uiproducts/16709984/zoom_0-1573561491.jpg"},
        {title:'STAY HIGH ON TRENDS',image:"https://img3.junaroad.com/uiproducts/16981161/zoom_0-1583325523.jpg"},
        {title:'TRENDS WHILE SHOES FTW',image:"https://img1.junaroad.com/stories/story_p_63bfac84adb8b86e86a6d0bc-1674014732.jpeg"},
        {title:'CELEB #OOTD TO RECREATE',image:"https://img3.junaroad.com/uiproducts/15019566/zoom_0-1523097650.jpg"},
        {title:'SNAG SHIRTS, CHINOS AND SHINE',image:"https://img3.junaroad.com/uiproducts/17906757/zoom_0-1629545081.jpg"},
        {title:'ALL NEW AND TOTALLY YOU',image:"https://img3.junaroad.com/uiproducts/15046750/zoom_0-1523875440.jpg"},
    ]

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


export default Women;