import { useState,useImperativeHandle,useRef,forwardRef } from "react";

function MyComponent() {
  const myRef = useRef();
  return (
    <>
      <ChildComponent ref={myRef} />
      <button onClick={() => myRef.current.focusInput()}></button>
    </>
  );
  
}

const  ChildComponent = forwardRef( (props,ref) => {
  useImperativeHandle(
    ref,
    () => ({
      focusInput() {
        myRef.current.focus();
      },
    }),
    []
  )

  return <div>Child Component</div>;
})

export default MyComponent;
