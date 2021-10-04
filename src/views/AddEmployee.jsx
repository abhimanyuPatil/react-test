import React, { useState } from "react";
import { FormInput } from "../component/FormInput";
export const AddEmployee = (props) => {
  const [image, setImage] = useState("");
  return (
    <div>
      <h2 className="text-center">Add employee</h2>
      <form>
        <FormInput
          label="Enter first name"
          placeholder="Enter first name"
          fieldName="firstName"
        />
        <FormInput
          label="Enter last name"
          placeholder="Enter last name"
          fieldName="lastName"
        />
        <FormInput
          label="Select DOB"
          placeholder="Select DOB"
          fieldName="dob"
          type="date"
        />
        <FormInput
          label="Enter designation"
          placeholder="Enter designation"
          fieldName="designation"
        />
        <div className="form-group">
          <label htmlFor="photo">Select Photo</label>
          <input
            onChange={(e) => setImage(e.currentTarget.value)}
            className="form-control"
            placeholder="Enter Photo URL"
          />
          {image.length > 0 ? (
            <img
              className="my-3"
              style={{ width: 200, height: 200, marginTop: 20 }}
              src={image}
            />
          ) : null}
        </div>
        <FormInput
          label="Enter experience"
          placeholder="Enter experience"
          fieldName="experience"
        />
        <button
          onClick={() => props.history.push("/")}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
