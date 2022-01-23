import React from "react";
import { useContext } from "react";
import userImg from "../../images/profileImg.png";
import userContext from "../../context/userContext";
import { useState } from "react";
export default function CreatePost() {
  const { logUser } = useContext(userContext);
  const [createPost, setCreatePost] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    //add server request to add post
  };
  return (
    <div className="CreatePostDiv">
      {/* in future possibly add userImg */}
      <img
        className="CreatePostImg"
        src={userImg}
        alt={logUser}
        width={50}
        height={50}
      ></img>
      <button className="createPostBtn" onClick={() => setCreatePost(true)}>
        Create Post
      </button>
      {createPost ? (
        <form
          className="popUpForm"
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <h3>Create Post</h3>
          <textarea autoFocus className="postInputText"></textarea>
          <div className="postBtns">
            <button className="postSubmitBtn" type="submit">
              Post
            </button>
            <button
              className="postCancelBtn"
              onClick={() => setCreatePost(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
