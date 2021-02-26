import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from 'react-router-dom';


function PostButton({ user }) {
  console.log(user);
  const history = useHistory()
  const onClick = useCallback(() => {
        const to = `/post`;
        history.push(to)
    },[history])

  return (
    <>
      <button onClick={onClick}>POST
      </button>
    </>
  );
}

export default PostButton;