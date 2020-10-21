import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import NavbarPage from 'components/MyNav'



document.addEventListener("DOMContentLoaded", () => {
  {/* ReactDOM.render(
    <NavbarPage />,
    document.body.appendChild(document.createElement("div"))
  ); */}

  ReactDOM.render(
    <NavbarPage />,
    document.getElementById('root'))
  
});