import React, { Suspense } from "react";

let userResource = createProfileResource();

function createProfileResource() {
  let status = "pending";
  let result;
  const suspender = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  }).then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}

if (!userResource.read) {
  userResource = createProfileResource();
}

export default function Profile() {
  const profile = userResource.read();
  return (
    <>
      <div>{profile.name}</div>
      <div>{profile.age}</div>
    </>
  );
}
