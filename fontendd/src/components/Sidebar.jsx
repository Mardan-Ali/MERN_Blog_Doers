import React from "react";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About ME</span>
        <img
          src="https://media.istockphoto.com/id/1020408818/photo/city-map-with-pin-pointers-3d-rendering-image.jpg?s=1024x1024&w=is&k=20&c=Hqqp0PzVDV8pQqVNJ-0w__42MP7HrNq1wrMf4K8os2Q="
          alt=""
        />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebar-icons fa-brands fa-square-facebook"></i>
          <i className="sidebar-icons fa-brands fa-square-twitter"></i>
          <i className="sidebar-icons fa-brands fa-square-pinterest"></i>
          <i className="sidebar-icons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
