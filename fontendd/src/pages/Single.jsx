import React from "react";
import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";
import "./single.css";
export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
