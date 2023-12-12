import React, { useState, useEffect } from "react";
import "./Form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });

  const [formBuild, setFormBuild] = useState(false);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const build = () => {
    setFormBuild(true);
  };

  const handleBuildForm = () => {
    const formCheckbox = [];
    const formInputs = [];
    const formTextArea = [];
    for (let i = 0; i < formData.input; i++) {
      formInputs.push(<input placeholder="input"></input>);
    }
    for (let i = 0; i < formData.textarea; i++) {
      formTextArea.push(<textarea placeholder="enter text"></textarea>);
    }
    for (let i = 0; i < formData.checkbox; i++) {
      formCheckbox.push(
        <div>
          checkbox<input type="checkbox"></input>
        </div>
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

  useEffect(() => {
    if (formBuild) {
      setFormBuild(false);
    }
  }, [formData]);

  return (
    <div className="FormValues">
      <h1 className="FormTitle">Create your form</h1>
      <div className="FormInputs">
        <label>
          input:
          <input
            type="number"
            name="input"
            value={formData.input}
            onChange={hanldeChange}
          ></input>
        </label>
        <label>
          textarea:
          <input
            type="number"
            name="textarea"
            value={formData.textarea}
            onChange={hanldeChange}
          ></input>
        </label>
        <label>
          checkbox:
          <input
            type="number"
            name="checkbox"
            value={formData.checkbox}
            onChange={hanldeChange}
          ></input>
        </label>
      </div>
      <div className="FormBuildButton">
        <button className="ButtonBuild" onClick={build}>
          Build
        </button>
      </div>
      {formBuild && <div className="BuiltForm">{handleBuildForm()}</div>}
    </div>
  );
};
