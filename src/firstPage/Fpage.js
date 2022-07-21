import React from 'react';
import { Link } from 'react-router-dom';
import './Fpage.css';
import { AiOutlineSearch,AiOutlineMenu,AiFillCaretUp } from "react-icons/ai";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import '../title/Main.css';
import Slider from "react-slick";
import '../title/Main.css';
import { useState } from 'react';


const Fpage = () => {
  
  const listyle = {
    backgroundColor : 'mintcream',
    color: '#31302e',
    border : '0px',
    fontSize : '17px',
  }
  const dkstyle = {
    backgroundColor : '#1e1e22',
    color: '#ccc',
    border : '0px',
    fontSize : '17px',
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const [color,setColor] = useState(true);
  const [bStyle,setBstlye] = useState();
  const [isOpen,setMenu]= useState(false);
  const [pisOpen,setPmenu] = useState(false);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
    if(isOpen === true && pisOpen === true){
      setPmenu(false);
    }
  }
  const tgMenuProp = () => {
    setPmenu(pisOpen => !pisOpen); 
  }

  const toggleColor = () => {
    if(color === true){
      setColor(false);
      setBstlye(dkstyle);
      console.log(color)
    }
    else {
      setColor(true);
      setBstlye(listyle);
      console.log(color)
    }
  }
  const handleScroll = (e) => {
    if(!window.scrollY) return;
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div style={bStyle}>
        <Link to='/'><button className='mib'><img src='https://o.remove.bg/downloads/1ca912a2-f1a2-4164-82e5-7a15a19d51a1/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-removebg-preview.png' alt=''/></button></Link>
        <div className='menu'>
          <button onClick={()=>toggleMenu()} style={bStyle} className='menubutton'><AiOutlineMenu /></button>
          <Link to='/search'><button style={bStyle} className='menubutton'><AiOutlineSearch /></button></Link>
          <button onClick={toggleColor} style={bStyle} className='light'>{color === true ? <BsFillMoonFill /> : <BsFillSunFill/>}</button>    
        </div>
        <div className={isOpen ? "show-menu" : "hide-menu"}>
            <button onClick={()=>{tgMenuProp();}} className='menusidebutton-h'>Models</button><br />
            <Link to='/calender'><button className={pisOpen ? "menusidebutton-o" : "menusidebutton-h"}>Notes</button></Link><br />
            <button onClick={()=>window.open('https://github.com/SSKyun')} className='menusidebutton-h'>Github</button><br />
            <Link to='/login'><button className='msloginbutton'>Login</button></Link>
            <Link to='/register'><button className='msloginbutton'>Sign up</button></Link><br />
        </div>
          <div className={pisOpen ? "pshow-menu" : "phide-menu"}>
            <button className='pmbutton hover1' >AVENTADOR</button><br />
            <button className='pmbutton hover2' >URUS</button><br />
            <button className='pmbutton hover3' >HURACAN</button>
          </div>
          <div className='slick-slider'>
              <Slider {...settings}>
                <div>
                  <h3><img width={'100%'} height={'280px'} src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80" alt="" /></h3>
                </div>
                <div>
                  <h3><img width={'100%'} height={'100%'}src="https://images.alphacoders.com/109/1096498.jpg" alt="" /></h3>
                </div>
                <div>
                  <h3><img width={'100%'} height={'280px%'}src="https://wallpaperaccess.com/full/2529320.jpg" alt="" /></h3>
                </div>
                <div>
                  <h3><img width={'100%'} height={'280px%'}src="https://live.staticflickr.com/4349/36735421673_7d2e84d353_b.jpg" alt="" /></h3>
                </div>
              </Slider>
          </div>
            <button onClick={handleScroll} className='fixedbutton'>
              <AiFillCaretUp />
            </button>
            <div className='wrapper' >
              hi
            </div>
        <div className='backimage'>
            <h1>{/* <img width={'100%'} src='https://wallpaperaccess.com/full/703927.jpg' alt=''/> */}</h1>
        </div>
      <div className='lastmenu'>
        © 2022 DevSungsters Corp. All Rights Reserved.
      </div>
      </div>
    </>
  );
};

export default Fpage;