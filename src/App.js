import "./App.css";
import FormInput from "./Components/FormInput";
import { useState, useRef } from "react";
// import { useState } from "react";
function App() {
  // const [username, setUsername] = useState("");
  // console.log(username);

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    ConfirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      erroerMessage: "Username Not valied",
      // pattern: "^[a-zA-Z0-9]{3,16}$ ",
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      erroerMessage: "Email Not valied",
      required: true,
      // pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      // erroerMessage: "",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      erroerMessage: "Password Not valied",
      required: true,
      // pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
    },
    {
      id: 5,
      name: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      erroerMessage: "Confirm Password Not valied",
      required: true,
      // pattern: values.password,
    },
  ];

  // const FromInputs = input.map((input) => (
  //   <FromInput
  //     key={input.id}
  //     {...input}
  //     value={values[input.name]}
  //     onChange={onChange}
  //   />
  // ));

  const usernameRef = useRef();
  // console.log(usernameRef);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {/* <FromInput placeholder="Username" setUsername={setUsername} /> */}
        {/* <FromInput name="username" placeholder="Username" refer={usernameRef} />
        <FromInput name="Email" placeholder="Email" />
        <FromInput name="FullName" placeholder="Full Name" />
        <FromInput name="Something" placeholder="Something Else" /> */}
        {/* {FromInputs} */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
