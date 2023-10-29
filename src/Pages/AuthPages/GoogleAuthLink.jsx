import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleAuthLink = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  console.log(
    ` Full URL of post : \n  https://api.robomartbd.com/api/auth/o/google-oauth2/${location.search}`
  );

  const postLoginData = () => {
    fetch(
      `https://api.robomartbd.com/api/auth/o/google-oauth2/${location.search}`,
      {
        method: "POST",
      }
    )
      .then((res) => {
        console.log("This is post response :", res);
        res.json();
      })
      .then((result) => {
        console.log("Here i get token :", result);
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
      <h1>

        Registration loading !!!

      </h1>
    </div>
  );
};

export default GoogleAuthLink;
