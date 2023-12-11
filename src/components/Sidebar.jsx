/* eslint-disable react/prop-types */
// import { NavLink } from 'react-router-dom';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import { useEffect, useState } from 'react';


function Sidebar({ openSidebarToggle, OpenSidebar }) {

  const [pathname, setPathname] = useState('')

  useEffect(
    () => {
      const currentUrl = window.location.pathname;
      setPathname(currentUrl)
    }, []
  )

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> ហាង
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <div className="sidebar-list">
        <a href="/" className='sidebar-list-item'>
          <BsGrid1X2Fill className="icon" /> ផ្ទាំងគ្រប់គ្រង
        </a>
        <a href="/product" className={"sidebar-list-item " + (pathname === '/product' ? 'active' : '')}>
          <BsFillArchiveFill className="icon" /> ផលិតផល
        </a>

        <a href="/category" className={"sidebar-list-item " + (pathname === '/category' ? 'active' : '')}>
          <BsFillGrid3X3GapFill className="icon" /> ប្រភេទផលិតផល
        </a>


        <a href="/customer" className={"sidebar-list-item " + (pathname === '/customer' ? 'active' : '')}>
          <BsPeopleFill className="icon" /> អតិថិជន
        </a>


        <a href="/list" className={"sidebar-list-item " + (pathname === '/list' ? 'active' : '')}>
          <BsListCheck className="icon" /> បញ្ជី
        </a>

        <a href="/report" className={"sidebar-list-item " + (pathname === '/report' ? 'active' : '')}>
          <BsMenuButtonWideFill className="icon" /> របាយការណ៍
        </a>


        <a href="setting" className={"sidebar-list-item " + (pathname === '/setting' ? 'active' : '')}>
          <BsFillGearFill className="icon" /> ការកំណត់
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
