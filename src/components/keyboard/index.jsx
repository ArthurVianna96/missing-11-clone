import React, { useCallback, useEffect } from "react";
import Key from "../key";

import './keyboard.css';

const Keyboard = ({ callback, onEnter, onSelectLetter, onDelete }) => {
  const keys1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keys2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const keys3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  const receiveSelectedLetter = (receivedKey) => {
    callback(receivedKey);
  };

  const handleKeyboard = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key) {
          onSelectLetter(key);
      }})
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key) {
          onSelectLetter(key);
      }})
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key) {
          onSelectLetter(key);
      }})
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, [handleKeyboard])

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => (<Key key={key} keyVal={key} callback={receiveSelectedLetter}/>))}
      </div>
      <div className="line2">
        {keys2.map((key) => (<Key key={key} keyVal={key} callback={receiveSelectedLetter}/>))}
      </div>
      <div className="line3">
        <Key keyVal={"enter"} bigKey key={'enter'} callback={receiveSelectedLetter}/>
        {keys3.map((key) => (<Key key={key} keyVal={key} callback={receiveSelectedLetter}/>))}
        <Key keyVal={'delete'} bigKey key={'delete'} callback={receiveSelectedLetter}/>
      </div>
    </div>
  )
}

export default Keyboard;