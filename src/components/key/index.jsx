import React from "react";
import './style.css';

const Key = ({ keyVal, bigKey, callback }) => {
  return (
    <div className="key" id={bigKey && 'big'} onClick={() => callback(keyVal)}>{keyVal}</div>
  )
}

export default Key;