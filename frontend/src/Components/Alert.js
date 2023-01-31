import * as React from "react";
import Alert from "@mui/material/Alert";

export default function ColorAlerts() {
  return (
    <Alert
      severity="success"
      color="success"
      style={{
        width: "30%",
        marginLeft: "35%",
        marginTop: "1%",
        backgroundColor: "lightgreen",
      }}
    >
      Post uploaded successfully!
    </Alert>
  );
}
