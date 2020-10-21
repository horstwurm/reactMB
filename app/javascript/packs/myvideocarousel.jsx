import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import CarouselPage from 'components/MyVideoCarousel'

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <CarouselPage />,
    document.body.appendChild(document.createElement("div"))
  );
});