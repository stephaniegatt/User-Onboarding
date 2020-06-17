import React, { useEffect, useState } from "react";
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
const initialUser = [];
const initialDisabled = true; // boolean for onSubmit

export default function App() {
  // app state
  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUser = () => {
    axios.get("https://reqres.in/api/users")
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {

      })
  }
  const postNewUser = newUser => {
   
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUser([ ...user, res.data ])
      })
      .catch(error => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  // create onChange event handler
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
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
 useEffect(() => {
  getUser()
 }, [])


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
       {/* {
        user.map(oneUser => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      } */}
    </div>
  );
}


