import React from "react";

const ErrorPage = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#111",
      color: "#fff",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "80px", margin: "0" }}>404</h1>
      <p style={{ fontSize: "18px", margin: "10px 0 20px" }}>
        Page not found
      </p>
      <a
        href="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;

/*
Use in router:
{
  path: "*",
  element: <ErrorPage />
}
*/