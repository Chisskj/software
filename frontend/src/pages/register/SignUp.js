import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftRegister from "../../components/register/LeftRegister";
import RightRegister from "../../components/register/RightRegister";
import cinemaGr07_white from "../../assets/images/cinemaGr07-white.svg";
import "./styles.css";
import { connect } from "react-redux";
import { register } from "../../redux/actions/auth";
import { Formik } from "formik";
import * as Yup from "yup";

const ValidatorSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
class SignUp extends Component {
  state = {
    show: false,
    message: "",
    isLoading: false,
  };
  submitData = async (values) => {
    this.setState({ isLoading: true });
    await this.props.register(values.email, values.password);
    this.setState({ show: true, isLoading: false });
  };
  render() {
    const { show } = this.state;
    return (
      <Row className="container-fluid">
        <LeftRegister>
          <Container>
            <Image src={cinemaGr07_white} width={250} />
            <p className="text-display-md-bold m-0 text-white pt-5">
              Lets build your account
            </p>
            <p className="text-lg text-white pb-3 opacity-70 ">
              To be a loyal moviegoer and access all of features, your details
              are required.
            </p>
            <ListGroup>
              <li>
                <Button
                  variant="outline-light"
                  className="btn-sm rounded-circle"
                  active
                >
                  1<div className="vertical-line"></div>
                </Button>
                <label className="form-check-label text-white pb-3">
                  <p className="pl-3">Fill your additional details</p>
                </label>
              </li>
              <li>
                <Button
                  variant="outline-light"
                  className="btn-sm rounded-circle"
                >
                  2<div className="vertical-line"></div>
                </Button>
                <label className="form-check-label text-label-non-active text-white pb-3">
                  <p className="pl-3 text-color-placeholder">
                    Activate your account
                  </p>
                </label>
              </li>
              <li>
                <Button
                  variant="outline-light"
                  className="btn-sm rounded-circle"
                >
                  3
                </Button>
                <label className="form-check-label text-label-non-active text-white pb-3">
                  <p className="pl-3 text-color-placeholder">Done</p>
                </label>
              </li>
            </ListGroup>
          </Container>
        </LeftRegister>
        <RightRegister>
          <p class="text-link-lg-26 pb-3 pt-5">Fill your additional details</p>
          {show === true && (
            <Alert
              className="pb-0"
              variant={this.props.auth.message !== "" ? "success" : "danger"}
              onClose={() => this.setState({ show: false })}
              dismissible
            >
              <p>
                {this.props.auth.message !== ""
                  ? this.props.auth.message + ", now you can login"
                  : this.props.auth.errorMsg}
              </p>
            </Alert>
          )}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={ValidatorSchema}
            onSubmit={(values) => {
              this.submitData(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Write your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Write your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to terms & conditions"
                  />
                </Form.Group>
                {this.state.isLoading === false ? (
                  <Button
                    variant="primary"
                    type="submit"
                    block
                    onClick={handleSubmit}
                  >
                    Join for free now
                  </Button>
                ) : (
                  <Spinner animation="border" variant="primary" />
                )}
                <p className="text-center pt-3">
                  Do you already have an account?
                  <Link to="/login"> Log in</Link>
                </p>
                <div className="d-flex py-2">
                  <hr className="my-auto flex-grow-1" />
                  <div className="px-3 opacity-70">or</div>
                  <hr className="my-auto flex-grow-1" />
                </div>
                <Row className="d-flex justify-content-between">
                  <Col xs={6}>
                    <Button
                      className="shadow"
                      variant="light"
                      type="submit"
                      block
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path
                          d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.0011 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                          fill="#1976D2"
                        />
                      </svg>
                      Google
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      className="shadow"
                      variant="light"
                      type="submit"
                      block
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path
                          d="M12.001 2.00201C6.47901 2.00201 2.00201 6.47901 2.00201 12.001C2.00201 16.991 5.65801 21.127 10.439 21.88V14.892H7.89901V12.001H10.439V9.79801C10.439 7.29001 11.932 5.90701 14.215 5.90701C15.309 5.90701 16.455 6.10201 16.455 6.10201V8.56101H15.191C13.951 8.56101 13.563 9.33301 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47901 17.523 2.00201 12.001 2.00201Z"
                          fill="#395185"
                        />
                      </svg>
                      Facebook
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </RightRegister>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
