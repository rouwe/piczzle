import React from "react";

function PageNotFound() {
  return (
    <main
      style={{
        alignItems: "center",
        display: "flex",
        fontSize: "1.5rem",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <p style={{ color: "var(--dark-75)" }}>
        <strong>This Page Isn't Available</strong>
      </p>
    </main>
  );
}

export default PageNotFound;
