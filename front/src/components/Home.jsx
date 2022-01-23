import React from "react";
import FeedProvider from "../context/FeedProvider";
import CreatePost from "./HomePage/CreatePost";
import Feed from "./HomePage/Feed";
import ProfileInfo from "./HomePage/ProfileInfo";

export default function Home() {
  return (
    <FeedProvider>
      <div className="content">
        <CreatePost />
        <Feed />
        <ProfileInfo />
      </div>
    </FeedProvider>
  );
}
