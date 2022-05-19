import React, { useState } from 'react';
import "./styles/ManagerInput.css";

function ManagerInput(props){

    const [currentText, setCurrentText] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setCurrentText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentText.length)
            return;
        setCurrentText("");
        props.updateList(currentText);
    }

    const getInputForm = () => {
        return (
            <div className='manager-input-form-wrapper'>
                <form className='manager-input-form' onSubmit={handleSubmit}>
                    <input placeholder='Add by name or email' onChange={handleChange} type="text" value={currentText} />
                    <button>Add CSM</button>
                </form>
            </div>
        )
    }

        return (
            <div className="Manager-input-wrapper">
                {getInputForm()}
            </div>
        )
}

export default ManagerInput;
