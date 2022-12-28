import React from "react";
import "../../Styles/Signup.css";
import NavItem from "../Nav";

import { Card, Form, Alert } from "react-bootstrap";
import { useRef } from "react";
import { UseAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { Input } from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const { Login } = UseAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await Login(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <>
      <NavItem />
      <div className="main-container container-fluid">
        <div className="">
          <div className="form-holder shadow-lg">
            <div className="form-item shadow-lg  ">
              <div className="sideImage">
                <div className="sideImageOverlay ">
                  <div className="innerSideImageOverlay">
                    <h1 className="text-center">Login</h1>
                    <div className="signUpLine"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-item form row p-5">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit} >
                <Form.Group id="email">
                  <div class="col-12">
                    <TextField
                      type="email"
                      ref={emailRef}
                      className="form-control"
                      required
                      id="standard"
                      label="Mobile number or Email"
                    />
                  </div>
                </Form.Group>
                <Form.Group id="password" className="mt-2">
                  <div class="col-12">
                    <TextField
                      type="password"
                      ref={passwordRef}
                      className="form-control"
                      required
                      id="standard"
                      label="Password"
                    />
                  </div>
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center mt-2 w-100 row">
                  <Button
                  type="submit"
                    disabled={loading}
                    variant="contained"
                    className="c-btn col-sm-6"
                  >
                    Signup
                  </Button>
                </div>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot password ?</Link>
              </div>

              <div className="w-100 text-center mt-2">
                Dont have an account ? <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
