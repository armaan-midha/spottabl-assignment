import React, { Component } from 'react';
import ManagerListCard from "./ManagerListCard";
import "./styles/ManagerList.css";

function ManagerList(props){
    return (
    <div className={"manager-list-wrapper "}>
        {
            props.managers.map((element,index)=><ManagerListCard  key={index} text={element.text}  />)
        }
    </div>
    )
  }

export default ManagerList;

