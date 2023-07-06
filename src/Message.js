import React from 'react';
import './Message.css';


function Message(props) {
  return (
    <div style={{display:props.visible?"block":"none"}}>
      <p className='box'>
      </p>
      <div class="card" style="width: 18rem;">
  
  
  <div class="card-body" style={{display:props.visible?"block":"none"}}>
    <h5 class="card-title">{props.message}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Next joke</a>
  </div>

</div>
    </div>
  )
}

export default Message
