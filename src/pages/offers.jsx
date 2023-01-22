const Offers = () => {
    const Top = [
        {image:"https://img3.junaroad.com/catalogues/2389792/63c7b2b70856e.jpg",title:"REPUBLIC DAY"},
        {image:"https://img3.junaroad.com/catalogues/2389792/63a1fe4eb763d.jpg",title:"B2G1 FREE"},
        {image:"https://img3.junaroad.com/catalogues/2389792/62de83c8740bb.jpg",title:"ETHNIC"},
        {image:"https://img3.junaroad.com/catalogues/2389792/62de83d097aaf.jpg",title:"WESTERN"},
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
    const Images = [
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9cb30ccae.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9d2b473bd.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9d45bcd46.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9d939ad3c.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9db38509f.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9dcdc0ca3.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9e471c4a5.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9eca5a851.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9f25d7677.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9f895944a.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9f9dc4f65.jpg'},
        {image:'https://img3.junaroad.com/catalogues/2389792/63ca9fb0d0c15.jpg'},
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
       <div style={{display:'flex',width:'60%',margin:'auto',justifyContent:"space-around"}}>
           {
            Top.map(item => 
                <div>
                    <img style={{width:'100%'}} src={item.image} alt={item.title} />
                    
                </div>
                )
           }
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
       <div style={{ width:"60%",margin:'auto', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
       <img style={{width:'100%',margin:'auto'}} src="https://img3.junaroad.com/catalogues/2389792/63ca9c8f4740a.jpg" alt="nothing" />
       <div style={{display:'grid',justifyContent:'space-around',gridTemplateColumns:'repeat(3,1fr)' }}>
           {
            Images.map(item => <div>
                <img src={item.image} alt="nothing" />
            </div>)
           }
       </div>
       </div>
    </>
}

export default Offers;
