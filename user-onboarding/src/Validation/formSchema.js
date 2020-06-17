import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required(),
    email: Yup
        .string()
        .email("Please enter valid email.")
        .required(),
    password: Yup
        .string()
        .min(6, "Password must be at least 6 characters long.")
        .required("Numbers are required."),
    // terms: Yup
        
    //     .required("Please accept the Terms of Service."),
    role: Yup
        .string()
        .oneOf(["Prospective Studen", "Student", "Instructor", "Section Lead", "Team Lead", "Please select role"]),
})

export default formSchema