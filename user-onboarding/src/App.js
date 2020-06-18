import React, { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";
import axios from "axios";
import * as Yup from "yup";
import formSchema from "./Validation/formSchema";


// setting up initial state

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
  role: "",
  languages: {
    html: false,
    css: false,
    javascript: false,
    java: false,
    python: false,
  }
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
  role: "",
}

export default function App() {
  // app state
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(false)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(response => {
        console.log(response.data)
        setUsers([ ...users, response.data ])
      })
      .catch(error => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  // create onChange event handler
  // const onInputChange = event => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   setFormValues({
  //     ...formValues,
  //     [name]: value
  //   })
  // }

  const onInputChange = event => {
    const { name, value } = event.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  // create checkbox event handler
  const onCheckboxChangeTerms = event => {
    const { checked } = event.target
    setFormValues({
      ...formValues,
      terms: checked,
    })
  }
  const onCheckboxChangeLanguages = event => {
    const { name, checked } = event.target
    setFormValues({
      ...formValues,
      languages: {
        ...formValues.languages,
        [name]: checked,
      }
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
      role: formValues.role,
      languages: Object.keys(formValues.languages).filter(language => formValues.languages[language] === true)
    }
    postNewUser(newUser)
  }

  return (
    <div className="App">
      <header><h1>Please Enter Your User Infomation</h1></header>
      <UserForm 
        values={formValues}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        onCheckboxChangeTerms={onCheckboxChangeTerms}
        onCheckboxChangeLanguages={onCheckboxChangeLanguages}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.role}</p>
              <p>{user.languages.join(", ")}</p>
            </div>
          )
        })
      }
    </div>
  );
}


