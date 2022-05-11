import React from 'react'
import { useParams } from 'react-router';

const Hello = (props) => {
    const{someWord}=useParams();
  return (
    <div>The word is{someWord}</div>
  )
    

  
  }


export default Hello;