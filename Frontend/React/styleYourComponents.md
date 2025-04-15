[Styling a components, inside `{{propertyN:valueN,...,}}`](https://youtu.be/M9O5AjEFzKw?si=vqq3tBCrfzFCrGzl&t=5397)

[How to apply global styles](https://youtu.be/lAFbKzO-fss?si=dSV2wIT5mBG5ihTD&t=4917)

[Component Level Css](https://youtu.be/lAFbKzO-fss?si=TLMPdD_E7RcX0ZVE&t=5047)

[Note: global styles(that you define in `main.jsx/tsx`) override the styles that you define for specific components(***unless you increase the specificity***)](https://youtu.be/lAFbKzO-fss?si=jEsMheETXE1FYyzI&t=5387)

[Styles your componets with css modules(***styles.module.css***) to avoid styles conflicts because of classes](https://youtu.be/i63WQrzrKag?si=YF98Hl3j4fhShKMj&t=7)

Example Code:
```jsx
import defaultName from '../styles/style1.module.css'

const App = () => {
  console.log(defaultName); // `{clsName: '_ody_18qc9_1(randomString)',...otherClassesNames that your css/sass/scss file contains}`

  return (
    <div className={defaultName.clsName}>
      Hello this is styling
    </div>
  );
}
```


Example code:
```js
const App = () => {
  return <div style={{ marginInline: "auto", width: "50%",
  background: "#880808",textAlign: "center",fontFamily:
  "cursive",color:'#e6e6e6',fontSize: "4rem",fontWeight: "bold" }}>
      Hello this is styling
    </div>
};
```
Its a most basic and simple way of adding styles to a component 

[2nd way of stylign a components is using object reference(of styles) in `{}`](https://youtu.be/M9O5AjEFzKw?si=qh6jKhLilbS-1K9h&t=5551)

[3rd way is to use spearate css file, and link it to corresponding component that you wanna style](https://youtu.be/M9O5AjEFzKw?si=Ejw3OkNA_8cxZtL8&t=5607)