import React from 'react'
import ReactDOM from 'react-dom'

const HomePage =  () => {
  return (
    <h1>HomePage</h1>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomePage />,
    document.getElementById('test'))
})

export default HomePage;