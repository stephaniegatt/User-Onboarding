import React from "react";

export default function UserForm(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChangeTerms,
        onCheckboxChangeLanguages,
        disabled,
        errors,
      } = props

      return(
        <form onSubmit={onSubmit}>
            {/* <div>errors.name</div>
            <div>errors.email</div>
            <div>errors.password</div>
            <div>errors.role</div> */}
            <div>
                <h1>New User</h1>
            </div>
            <div>
                <label>Enter Name:&nbsp;
                    <input 
                    value={values.name}
                    type="text"
                    name="name"
                    onChange={onInputChange}
                    />
                </label>
                <label>Enter Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Enter Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                        autoComplete="off"
                    />
                </label>
                <label>Terms of Service:&nbsp;
                    <input
                        checked={values.terms}
                        value='checked'
                        onChange={onCheckboxChangeTerms}
                        name="terms"
                        type="radio"
                    />
                </label>
                <label>Role:
                    <select
                        onChange={onInputChange}
                        value={values.role}
                        name='role'
                    >
                        <option value=''>- Select an option -</option>
                        <option value="Prospective Student">Prospective Student</option>
                        <option value="Student">Student</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='SL'>Section Lead</option>
                        <option value='TL'>Team Lead</option>
                    </select>
                </label>
                </div>
                <div className='form-group checkboxes'>
                    <p>Favorite Languages</p> 
                    <label>HTML
                        <input
                            name='html'
                            type="checkbox"
                            onChange={onCheckboxChangeLanguages}
                            checked={values.languages.html}
                        />
                    </label>
                    <label>CSS
                        <input
                            name='css'
                            type="checkbox"
                            onChange={onCheckboxChangeLanguages}
                            checked={values.languages.css}
                        />
                    </label>
                    <label>JavaScript
                        <input
                            name='javascript'
                            type="checkbox"
                            onChange={onCheckboxChangeLanguages}
                            checked={values.languages.javascript}
                        />
                    </label>
                    <label>Java
                        <input
                            name='java'
                            type="checkbox"
                            onChange={onCheckboxChangeLanguages}
                            checked={values.languages.javas}
                        />
                    </label>
                     <label>Python
                        <input
                            name='python'
                            type="checkbox"
                            onChange={onCheckboxChangeLanguages}
                            checked={values.languages.python}
                        />
                    </label>
                    <button disabled={disabled}>submit</button>
                </div>
            </form>
        )
    }