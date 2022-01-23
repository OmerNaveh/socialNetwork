import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import feedContext from "../../context/feedContext";
import userContext from "../../context/userContext";
import Post from "./Post";

export default function Feed() {
  const { state, dispatch } = useContext(feedContext);
  const { logUser } = useContext(userContext);
  useEffect(() => {
    dispatch({ type: "UpdateFeed", activeUser: logUser });
  }, []);
  const renderpPosts = () => {
    return state.map((post) => <Post content={post} />);
  };
  return <div className="feed">{renderpPosts}</div>;
}
