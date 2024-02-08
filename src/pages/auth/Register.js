import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0 d-flex p-4 justify-content-center bg-danger">
          <div className="col-md-6 form-container bg-light pt-5 pb-5 rounded">
            <Form
              formTitle={"Đăng Kí"}
              submitBtn={"Đăng Kí"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
