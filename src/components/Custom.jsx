import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router';

const Custom = () => {
    const{someWord,firstColor,secondColor} =useParams();
  return (
    <div style={{backgroundColor:firstColor, color:secondColor}}>The word is:{someWord}</div>
  )
}

export default Custom;