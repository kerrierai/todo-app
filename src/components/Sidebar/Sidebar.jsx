import React from 'react';
import './Sidebar.css';
import {GoInbox} from 'react-icons/go';
import {IoTodayOutline} from 'react-icons/io5';
import {BsCalendar2Date, BsGrid} from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <nav>
            <ul className='side-menu'>
                {/* <li>
                    <Link to="/inbox">
                        <div className="flex align-center gap-10">
                            <GoInbox className='icon' />
                            <span>Inbox</span>
                        </div>
                        <span className='count'></span>
                    </Link>
                </li> */}
                <li>
                    <Link to="/today">
                        <div className="flex align-center gap-10">
                            <IoTodayOutline className='icon' />
                            <span>Today</span>
                        </div>
                        <span className='count'></span>
                    </Link>
                </li>
                <li>
                    <Link to="/upcoming">
                        <div className="flex align-center gap-10">
                            <BsCalendar2Date className='icon' />
                            <span>Upcoming</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar