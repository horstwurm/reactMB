import React from "react"
import PropTypes from "prop-types"

class DynamicPage extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      value: props.name,
    };
  }    
  render () {
    return (
      <React.Fragment>
        <h1>Greeting: {this.props.name}</h1>
      </React.Fragment>
    );
  }
}

export default DynamicPage
