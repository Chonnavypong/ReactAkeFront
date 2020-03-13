import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("กรุณากรอกชื่อด้วย"),
  email: Yup.string()
    .email("รูปแบบ Email ไม่ถูกต้อง")
    .required("Required"),
  password: Yup.string()
    .min(3, "รหัสผ่านต้องไม่น้อยกว่า 3 ตัวอักษร")
    .required("กรุณากรอกรหัสผ่านด้วย")
});

export default class RegisterPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1> Register Page</h1>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: ""
            }}
            validationSchema={RegisterSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label>ชื่อ-สกุล</label>
                  <Field
                    name="name"
                    className={`form-control ${
                      errors.name && touched.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    name="email"
                    type="email"
                    className={`form-control ${
                      errors.email && touched.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={`form-control ${
                      errors.password && touched.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
