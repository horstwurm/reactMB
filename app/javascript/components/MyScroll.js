import React, { Component } from "react";

const ScrollPage = () => {
  return (
      <div>
        <div class="main" id="section1">
          <h2>Section 1</h2>
          <p>Click on the link to see the "smooth" scrolling effect.</p>
          <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
          <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
        </div>
        
        <div class="main" id="section2">
          <h2>Section 2</h2>
          <p>Click on the link to see the "smooth" scrolling effect.</p>
          <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
        </div>
      </div>
      );
  }

export default ScrollPage;