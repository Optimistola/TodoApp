import React from "react";
import {useState} from "react"
function FormTodo({ addTodo }) {
  const [value, setValue] =useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
return (
    <form onSubmit={handleSubmit}> 
    
      <label><b>Add Todo</b></label>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo..." />
   
    <button type="submit" className="btnlg">
      Submit
    </button>
  </form>
  );
}
export default FormTodo