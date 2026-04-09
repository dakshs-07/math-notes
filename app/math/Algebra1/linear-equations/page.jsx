import React from "react";

function page() {
  return (
    <div className="mx-4 math-content">
      <div className="my-5">
        <h1 className="text-4xl text-center">Linear Equations</h1>
      </div>
      <div>
        <h2>Word problems tricks:</h2>
        <p>Finding total cost with some fixed rate and base price?</p>
        <ul>
          <li>
            base rate: <b>y-intercept</b>
          </li>
          <li>
            fixed rate per hour: <b>slope</b>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default page;
