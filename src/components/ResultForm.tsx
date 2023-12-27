import React from "react";
import { IFormData } from "./Form";

export const ResultForm = ({formData}:{formData:IFormData}) => {
    const formCheckbox: JSX.Element[] = [];
    const formInputs: JSX.Element[] = [];
    const formTextArea: JSX.Element[] = [];
    for (let i = 0; i < formData.input; i++) {
      formInputs.push(<input  key={`input_${i}`} placeholder="input"></input>);
    }
    for (let i = 0; i < formData.textarea; i++) {
      formTextArea.push(<textarea key={`input_${i}`} placeholder="enter text"></textarea>);
    }
    for (let i = 0; i < formData.checkbox; i++) {
      formCheckbox.push(
          <>checkbox<input key={`input_${i}`} type="checkbox"></input></>
      );
    }

    return (
      <form className="Form">
        <div className="formInputs">
          {formInputs.map((element, index) => (
            <div key={`formInputs_${index}`} className="formInputsElement">{element}</div>
          ))}
        </div>
        <div className="formTextArea">
          {formTextArea.map((element, index) => (
            <div key={`formTextArea_${index}`} className="formInputsElement">{element}</div>
          ))}
        </div>
        <div className="formCheckbox">
          {formCheckbox.map((element, index) => (
            <div key={`formCheckbox_${index}`} className="formInputsElement">{element}</div>
          ))}
        </div>
      </form>
    );
  };