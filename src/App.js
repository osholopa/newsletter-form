import React, { useEffect, useState } from "react";
import "./App.scss";
import { useForm } from "react-hook-form";
import TextField from "./components/TextField";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import Snackbar from "./components/Snackbar";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const [notification, setNotification] = useState({
    type: "info",
    message: "Please fill all fields and submit the form",
  });

  const topics = ["General newsletter", "Our products", "Partner products"];

  const onSubmit = (data, _event) => {
    console.log(data);
    setNotification({ type: "success", message: "Thank you for submitting!" });
    setTimeout(() => {
      setNotification(null);
    }, 6000);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setNotification({
        type: "error",
        message: "Please fill in all the required fields.",
      });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, [errors]);

  return (
    <div className="container">
      <h1>Sign up for newsletter</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="wrap-container">
          <TextField
            required
            placeholder="First name"
            id="fname"
            name="fname"
            label="First name"
            inputRef={register({
              required: "This field is required",
            })}
            error={errors["fname"]}
          />
          <TextField
            required
            placeholder="Last name"
            id="lname"
            name="lname"
            label="Last name"
            inputRef={register({
              required: "This field is required",
            })}
            error={errors["lname"]}
          />
          <TextField
            required
            placeholder="Email"
            id="email"
            name="email"
            label="Email"
            inputRef={register({
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Your email address is invalid",
              },
            })}
            error={errors["email"]}
          />
          <TextField
            disabled
            placeholder="Disabled input"      
            label="Disabled input"  
          />
        </div>
        <div className="topics">
          <p>Select topics</p>
          <div className="wrap-container">
            {topics.map((topic, index) => (
              <Checkbox
                key={index}
                id={`topic${index}`}
                name={`topic${index}`}
                label={topic}
                inputRef={register}
                disabled={topic === "General newsletter" ? true : false}
                checked={topic === "General newsletter" ? true : undefined}
              />
            ))}
          </div>
        </div>

        <Checkbox
          required
          id="acceptTerms"
          name="acceptTerms"
          label="Accept terms of use"
          inputRef={register({
            required: "You have to accept terms of use",
          })}
          error={errors["acceptTerms"]}
        />
        <Checkbox
          required
          id="acceptPrivacy"
          name="acceptPrivacy"
          label="Accept privacy policy"
          inputRef={register({
            required: "You have to accept privacy policy",
          })}
          error={errors["acceptPrivacy"]}
        />
        <div className="form-actions">
          <Button type="submit" disabled text="Disabled" />
          <Button type="submit" text="Submit" />
        </div>
      </form>
      {notification && (
        <Snackbar
          type={notification.type}
          message={notification.message}
          setNotification={setNotification}
        />
      )}
    </div>
  );
}

export default App;
