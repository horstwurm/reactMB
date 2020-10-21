import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {
  render() {
    return (
      <MDBNotification
        show
        fade
        iconClassName="text-primary"
        title="Bootstrap"
        message="Hello, world! This is a toast message."
        text="11 mins ago"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999
        }}
      />
    );
  }
}

export default Notification;