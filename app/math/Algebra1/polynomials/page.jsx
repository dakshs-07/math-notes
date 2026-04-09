import React from "react";

function page() {
  return (
    <div className="mx-4 math-content">
      <div className="my-5">
        <h1 className="text-4xl text-center">Polynomials</h1>
      </div>
      <div>
        <h2>Identities worth memorizing:</h2>
        <p>
          You really need to keep these in mind to factor polynomials faster
        </p>
        <ul>
          <li>diff of squares </li>
          <li>sum and diff of cubes (though mostlyu covered in alg 2 but still worth knowing)</li>
        </ul>
        <p>Have the first 15 square numbers memorized</p>
      </div>
    </div>
  );
}

export default page;
