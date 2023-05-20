export const Todo = ({ title, completed }) => {
  const handleChange = () => {};
  return (
    <div>
      <div>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        {title} 
      </div>
    </div>
  );
};
