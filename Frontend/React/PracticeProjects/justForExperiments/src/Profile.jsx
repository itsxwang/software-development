import React from "react";

let userPromise;

function fetchProfile() {
  console.log("🔄 Fetching profile...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Profile loaded");
      resolve({ name: "John Doe", age: 30 });
    }, 2000); // simulate 2 sec network delay
  });
}

// This creates a resource that throws the promise when not ready (simulating a Suspense-based loader)
function createProfileResource() {
  let status = "pending";
  let result;
  const suspender = fetchProfile().then(
    res => {
      status = "success";
      result = res;
    },
    err => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {throw suspender};
      if (status === "error") throw result;
      return result;
    },
  };
}

// if (!userPromise) {
//   userPromise = createProfileResource();
// }

export default function Profile() {
   throw new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 2000);
});// ⛔ Suspends here until data is loaded
  const user = {name: "John Doe", age: 30};
  return (
    <div>
      <h2>👤 Profile Component</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
