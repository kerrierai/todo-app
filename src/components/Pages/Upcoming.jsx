import React from 'react';
import inbox from '../../assets/inbox.svg'
import Todo from '../Todo/Todo';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const Upcoming = () => {
  return (
    <div className="index">
    <Navbar></Navbar>
    <div className="main-body">
      <Splitter>
        <SplitterPanel className='left-index' size={23} minSize={10}>
          <Sidebar/>
        </SplitterPanel>
        <SplitterPanel className='right-index'  size={77}>
          <div className="right-body">
            <div>
                <div className="tite-card">
                    <div className="fixed flex align-center space-between">
                    <div className='flex gap-10 align-end'>
                        <h1>Upcoming</h1>
                    </div>
                </div>
                </div>
                
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
  )
}

export default Upcoming