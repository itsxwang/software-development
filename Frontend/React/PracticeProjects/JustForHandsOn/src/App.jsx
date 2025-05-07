import { useImperativeHandle,useRef} from "react";

function MyComponent() {
  const myRef = useRef();
  return (
    <>
      <ChildComponent ref={myRef} />
      <button onClick={() => myRef.current.focusInput()}>Toggle</button>
    </>
  );
  
}

const  ChildComponent = ({ref}) => {
  const tempRef = useRef();
  
  useImperativeHandle(
    ref,
    () => ({
      focusInput() {
        tempRef.current.focus();
      },
    }),
    []
  )

  return <input ref={tempRef} />;
}

export default MyComponent;
