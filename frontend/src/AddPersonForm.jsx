import React, { useState, useRef } from "react";
import axios from "axios";
import { useConditionContext } from "./store/ConditionContext";

const AddPerson = () => {
  const [formData, setFormData] = useState({ first_name: "", last_name: "" });
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const {AlterFetchStatus} = useConditionContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      AlterFetchStatus(true);
      const newFormData = {
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
      };
      const response = await axios.post(
        "http://localhost:8000/api/add/",
        newFormData
      );
      console.log("New record added successfully:", response.data);
      setFormData(newFormData);
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      AlterFetchStatus(false);
    } catch (error) {
      console.error("Error adding new record:", error);
    }
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            ref={firstNameRef}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            ref={lastNameRef}
            required
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default AddPerson;
