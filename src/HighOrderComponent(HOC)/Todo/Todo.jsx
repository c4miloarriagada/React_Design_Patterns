import { useState } from "react";

export const Todo = ({ title, completed }) => {
  const [checked, setChecked] = useState(completed)
  const handleChange = () => {
    setChecked(!checked)
  };
  return (
    <div>
      <div>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {title} 
      </div>
    </div>
  );
};
