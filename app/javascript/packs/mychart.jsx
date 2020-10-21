import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ChartsPage from 'components/MyChart'

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ChartsPage />,
    document.body.appendChild(document.createElement("div"))
  );
});