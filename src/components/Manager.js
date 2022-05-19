import React, { useEffect ,useState } from 'react';
import ManagerInput from "./ManagerInput";
import ManagerList from "./ManagerList";
import "./styles/Manager.css";
import icon from "../Resources/Images/icon.png"
import ManagerListCard from './ManagerListCard';

function Manager() {
    const [managers, setManagers] = useState(() => {
        const savedManagers = localStorage.getItem("managers");
        if (savedManagers) {
          return JSON.parse(savedManagers);
        } else {
          return [];
        }
      });
    useEffect(() => {
        localStorage.setItem("managers", JSON.stringify(managers));
      }, [managers]);
    const updateList = (text,id) => {
        let newObj = {
            text: text,
            id:id,
        }
        setManagers([...managers,newObj]);
    }
    const getChildComponents = () => {
        return (
            <div className='manager-child-components-wrapper'>
                <h3>Customer Success Managers</h3>
                <ManagerInput updateList={updateList} />
                <ManagerList managers={managers} setManagers={setManagers} />
            </div>
        )
    }

        return (
            <div className="manager-container">
                <div className='heading-image-container'>
                <img src={icon} />
                <div className='heading-container'>
                <h1>YOUR SPOTTABL TEAM</h1>
                <h6>Spottabl supports you all throughout</h6>
                </div>
                </div>
                {getChildComponents()}
            </div>
        )
}

export default Manager;
