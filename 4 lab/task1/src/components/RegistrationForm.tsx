import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

// Validation functions — каждая возвращает строку ошибки или пустую строку
function validateName(name: string): string {
  if (!name) return "Name is required";
  if (name.length < 2) return "Name must be at least 2 characters";
  return "";
}

function validateEmail(email: string): string {
  if (!email) return "Email is required";
  // Simple email regex — Ch. 4 pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) return "Email format is invalid";
  return "";
}

function validateAge(age: string): string {
  if (!age) return "Age is required";
  const ageNum = Number(age);
  if (Number.isNaN(ageNum)) return "Age must be a number";
  if (ageNum < 18) return "Age must be 18 or older";
  return "";
}

// Task 1: Basic Form Structure with Event Handlers
function RegistrationForm() {
  // State for form fields — controlled components (Ch. 4)
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");

  // State for error messages
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [ageError, setAgeError] = useState<string>("");

  // State for success message
  const [success, setSuccess] = useState<boolean>(false);

  // Task 2: Validation on input change
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value)); // Validate immediately
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setAge(value);
    setAgeError(validateAge(value));
  };

  // Task 3: Form Submission with preventDefault
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    // Prevent default browser form submission (Ch. 4, "Using synthetic event objects")
    e.preventDefault();

    // Validate all fields on submit
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const ageErr = validateAge(age);

    setNameError(nameErr);
    setEmailError(emailErr);
    setAgeError(ageErr);

    // If any errors exist, stop submission
    if (nameErr || emailErr || ageErr) {
      setSuccess(false);
      return;
    }

    // All valid — show success message and clear form
    setSuccess(true);
    setName("");
    setEmail("");
    setAge("");
    setNameError("");
    setEmailError("");
    setAgeError("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px" }}>
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>
        {/* Name input — controlled component */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
          {/* Display validation error conditionally */}
          {nameError && <p style={{ color: "red", margin: "5px 0" }}>{nameError}</p>}
        </div>

        {/* Email input */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
          {emailError && <p style={{ color: "red", margin: "5px 0" }}>{emailError}</p>}
        </div>

        {/* Age input */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
          {ageError && <p style={{ color: "red", margin: "5px 0" }}>{ageError}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* Success message — shown when form valid and submitted */}
      {success && (
        <p style={{ color: "green", marginTop: "20px", fontWeight: "bold" }}>
          Registration successful!
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;
