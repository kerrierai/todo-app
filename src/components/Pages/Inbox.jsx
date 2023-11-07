import React from 'react';
import inbox from '../../assets/inbox.svg'
import Todo from '../Todo/Todo';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const Inbox = () => {
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
                            <h1>Inbox</h1>
                            <span className='grey font-12'>Fri 27 Oct</span>
                        </div>
                        <button className='tgl-btn'>
                            <img src={inbox} alt="" className='icon'/>
                            <span>View</span>
                        </button>
                    </div>
                    </div>
                    <div className="main-card">
                        <Todo/>
                    </div>
                </div>
              </div>
            </SplitterPanel>
          </Splitter>
        </div>
      </div>
  )
}

export default Inbox