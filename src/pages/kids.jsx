const Kids = () => {

    const homeData = [
        {title:'NEW ARRIVALS',image:'https://img3.junaroad.com/uiproducts/18680230/zoom_0-1668766416.jpg'},
        {title:'FRESH PRINTS IN THE HOUSE',image:"https://img1.junaroad.com/stories/story_p_63b52c70cc8b5e0828cd7608-1672818308.jpeg"},
        {title:'UP YOUR FASHION GAME',image:"https://img3.junaroad.com/uiproducts/18226228/zoom_0-1642778056.jpg"},
        {title:'#WINTERWORTHY CELEB LOOK',image:"https://img3.junaroad.com/uiproducts/18531887/zoom_0-1663755583.jpg"},
        {title:'TRENDING THIS YEAR',image:"https://img1.junaroad.com/stories/story_p_63b2844fb388b0080e46973f-1672645483.jpeg"},
        {title:'DO IT LIKE ARJUN KAPOOR',image:"https://img3.junaroad.com/uiproducts/15756106/zoom_0-1543326245.jpg"},
        {title:'CASUAL. COOL. COMFY',image:"https://img3.junaroad.com/uiproducts/17913985/zoom_0-1628950755.jpg"},
        {title:'STAY HIGH ON TRENDS',image:"https://img3.junaroad.com/uiproducts/14444081/zoom_0-1510657167.jpg"},
        {title:'TRENDS WHILE SHOES FTW',image:"https://img3.junaroad.com/uiproducts/18910048/zoom_0-1671542963.jpg"},
        {title:'CELEB #OOTD TO RECREATE',image:"https://img1.junaroad.com/stories/story_p_63b7f759cc8b5e081af9a0c7-1673001488.jpeg"},
        {title:'SNAG SHIRTS, CHINOS AND SHINE',image:"https://img3.junaroad.com/uiproducts/18910057/zoom_0-1671542964.jpg"},
        {title:'ALL NEW AND TOTALLY YOU',image:"https://img1.junaroad.com/stories/story_p_63c7be79cc8b5e0828f4b26f-1674036313.jpeg"},
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

export default Kids;