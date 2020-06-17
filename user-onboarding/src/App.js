import React from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";
import * as Yup from "yup";
import formSchema from "./Validation/formSchema";


// setting up initial state

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: "",
  role: "",
  language: {
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

  const getUser = () => {
    axiox.get("https://reqres.in/api/users")
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {

      })
  }
  return (
    <div className="App">
      <Form />
    </div>
  );
}


