import React from 'react'
import ReactDOM from 'react-dom'

const ContactPage =  () => {
  return (
    <div>
      <h1>ContactPage</h1>
      <p>dshg g hfdgjfdkjg hfkjgh k fdgd</p>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ContactPage />,
    document.body.getElementById('test'))
})

export default ContactPage;