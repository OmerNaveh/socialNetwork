import React from "react";
import CreatePost from "./HomePage/CreatePost";
import Feed from "./HomePage/Feed";
import ProfileInfo from "./HomePage/ProfileInfo";

export default function Home() {
  return (
    <div className="content">
      <CreatePost />
      <Feed />
      <ProfileInfo />
    </div>
  );
}
