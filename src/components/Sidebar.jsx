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

function Sidebar({ openSidebarToggle, OpenSidebar }) {
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

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/">
            <BsGrid1X2Fill className="icon" /> ផ្ទាំងគ្រប់គ្រង
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/product">
            <BsFillArchiveFill className="icon" /> ផលិតផល
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/category">
            <BsFillGrid3X3GapFill className="icon" /> ប្រភេទផលិតផល
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/customer">
            <BsPeopleFill className="icon" /> អតិថិជន
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/list">
            <BsListCheck className="icon" /> បញ្ជី
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/report">
            <BsMenuButtonWideFill className="icon" /> របាយការណ៍
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="setting">
            <BsFillGearFill className="icon" /> ការកំណត់
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
