import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="d-flex justify-content-center align-items-center p-4 row g-0 bg-danger">
          <div className="col-sm-6 d-inline-block pt-5 justify-content-center rounded form-container bg-light px-5">
            <Form
              formTitle={"Đăng Nhập"}
              submitBtn={"Đăng Nhập"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
