import React, { useState } from 'react';
import "./styles/ManagerListCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ManagerListCard(props){
  const [text, setText] = useState(props.text);


  const handleClickDelete = () => {
    setText(text.filter(element=>element.index !== text.index));
  }


    let  iconFont="30px";
    if(window.innerWidth<661) {
      iconFont="20px";
    }
    return (
      <div className="manager-list-card-wrapper">
        <p className={"manager-card-text " }>{text}</p>
        <FontAwesomeIcon icon="fa-solid fa-trash" style={{ fontSize:{iconFont}}} onClick={handleClickDelete} />
        </div>        
    )
}

export default ManagerListCard;
