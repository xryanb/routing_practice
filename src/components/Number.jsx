import React from 'react';
import {useParams} from 'react-router-dom';



const Number = (props) => {
    const{numbId}= useParams();
    // <p>The number is: {numbId}</p>
    if(isNaN(+`${numbId}`)){
        return(
            <p>The word is: {numbId}</p>
        )
    } else{
        return (
            <p>The number is: {numbId}</p>
        )
    }
   
}


export default Number;
