import React, { useState, useEffect } from "react";
import "./Form.css";
import { ResultForm } from "./ResultForm";

export interface IFormData {
  input: number;
  textarea: number;
  checkbox: number;
}

export const Form = () => {
  const [formData, setFormData] = useState<IFormData>({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });

  const [formBuild, setFormBuild] = useState(false);

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) || 0} );
  };

  const build = () => {
    setFormBuild(true);
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
      {formBuild && <div className="BuiltForm"><ResultForm formData={formData}/></div>}
    </div>
  );
};
