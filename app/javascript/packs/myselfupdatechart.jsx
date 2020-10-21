import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ChartsPageUp from 'components/MyChartSelfUpdate'

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ChartsPageUp />,
    document.body.appendChild(document.createElement("div"))
  );
});