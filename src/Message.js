import React from 'react';
import './Message.css';


function Message(props) {
  return (
    <div style={{display:props.visible?"block":"none"}}>
      <p className='box'></p>
     

</div>
  )
}

export default Message
