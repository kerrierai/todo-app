import React, {useState} from 'react';
import inbox from '../../assets/inbox.svg'
import Todo from '../Todo/Todo';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Splitter, SplitterPanel } from 'primereact/splitter';


const Today = () => {
  const [dpactive, setDpactive] = useState(false);
  const [activeButton, setActiveButton] = useState(1);

  const [viewMode, setViewMode] = useState('list');

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };


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
                            <h1>Today</h1>
                            <span className='grey font-12'>Fri 27 Oct</span>
                        </div>
                        <div className='dp-btn'>
                          <button className='tgl-btn dp-click' onClick={dpactive === false ? ()=>setDpactive(true) : ()=>setDpactive(false)}>
                            <img src={inbox} alt="" className='icon'/>
                            <span>View</span>
                          </button>
                          {
                            dpactive === true ? 
                            <div className="dropdown shape-dp">
                              <button
                                onClick={() => toggleViewMode('list')}
                                className={viewMode === 'list' ? 'active' : ''}
                              >
                                List
                              </button>
                              <button
                                onClick={() => toggleViewMode('grid')}
                                className={viewMode === 'grid' ? 'active' : ''}
                              >
                                Grid
                              </button>         
                            </div>
                            :
                            <div></div>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="main-card">
                        <div>
                          <div className={`item-list ${viewMode === 'grid' ? 'grid' : 'list'}`}>
                            <Todo/>
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

export default Today