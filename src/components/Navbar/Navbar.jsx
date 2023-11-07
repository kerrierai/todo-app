import React, { useState } from 'react';
import './Navbar.css';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiHomeAlt, BiSearch, BiBell } from 'react-icons/bi';
import { BsBell, BsCheck2Square } from 'react-icons/bs';
import user from '../../assets/user.png'
import { Link } from 'react-router-dom';
import settings from '../../assets/settings.svg';
import logout from '../../assets/logout.svg';

        

const Navbar = () => {
    const [dpactive, setDpactive] = useState(false);


  return (

    <>
        <div className="nav-main">
            <div>
                <Splitter className='spliter-nav nav-wrap'>
                    <SplitterPanel className="left-split left-wrap" size={23} minSize={10}>
                        {/* <div className="ham icon-wrap">
                            <GiHamburgerMenu className='icon'/>
                        </div> */}
                        <div className="home icon-wrap">
                            <Link to="/today">
                                <BiHomeAlt className='icon'/>
                            </Link>
                        </div>
                        <button className="search-box">
                            <BiSearch className='icon'/>
                            <input type="text" placeholder='Search' />
                        </button>
                    </SplitterPanel>
                    <SplitterPanel className="right-split right-wrap" size={77}>
                        {/* <div className="compl-btn">
                            <a href="#">
                                <BsCheck2Square className="icon"/>
                            </a>
                        </div> */}
                        <div className="notification">
                            <BsBell className='icon'/>
                        </div>
                        <div className="user dp-btn">
                            <div className="dp-click" onClick={dpactive === false ? ()=>setDpactive(true) : ()=>setDpactive(false)}>
                                <img src={user} alt="" className='img'/>
                            </div>
                            {
                                dpactive === true ? 
                                <div className="dropdown">
                                    <Link to="/today" className='link'>
                                        <img src={settings} alt="" />
                                        <span>View Profile</span>
                                    </Link>
                                    <Link to="/" className='link'>
                                        <img src={logout} alt="" />
                                        <span>Log Out</span>
                                    </Link>
                                </div>
                                :
                                <div></div>
                            }
                            
                        </div>
                    </SplitterPanel>
                </Splitter>
            </div>
        </div>
    </>
  )
}

export default Navbar