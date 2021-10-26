import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from "../store";

const Loader = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state.loading);
  return (
    <>
      {state.loading ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            opacity: "0.4",
            zIndex: "1000"
          }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : null}
    </>
  );
};

export default Loader;
