import { useState } from "react";

export default function App() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          middleName: formState.middleName,
          email: formState.email,
        }),
      });
      if (!response.ok) {
        throw new Error("Error submitting form");
      }
      setFormState({
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formState.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formState.middleName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
        />
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}
