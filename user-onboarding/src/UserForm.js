import React from "react";

export default function UserForm(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
      } = props

      return(
          <form>
              <div>
                  <h1>New User</h1>
              </div>
              <div>
                  <h3>Info</h3>
                  <label>Enter Name:&nbsp;
                      <input 
                        value={values.name}
                        type="text"
                        name="name"
                        onChange={onInputChange}
                      />
                  </label>
              </div>
          </form>
      )
}