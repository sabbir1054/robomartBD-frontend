import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleAuthLink = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  console.log(location.search);

  const postLoginData = () => {
    fetch(
      `https://api.robomartbd.com/api/auth/o/google-oauth2/${location.search}/`,
      {
        method: "POST",
        // headers: {
        //   "content-type": "application/json",
        // },
        // body: JSON.stringify({}),
      }
    )
        .then((res) => {
            console.log(res.json());
            res.json()
        })
      .then((result) => {
        console.log(result);
        if (result.detail) {
          customError(result.detail);
        }

        if (result.refresh && result.access) {
          localStorage.setItem("user", JSON.stringify(result.access));

          //   reset();
          navigate("/");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  useEffect(() => {
    postLoginData();
  }, []);

  return (
    <div style={{ minHeight: "80vh" }}>
      <h1>Loading !!! </h1>
    </div>
  );
};

export default GoogleAuthLink;
