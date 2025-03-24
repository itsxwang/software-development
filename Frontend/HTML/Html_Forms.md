- [What are forms, Form Elements, Form Structure](https://youtu.be/zutb5Clb_0Y?si=sJxc7bDo_OpKIzOS&t=9187)

- [Important attributes of the form element](https://youtu.be/zutb5Clb_0Y?si=4IbSmgqqrIF5EOKh&t=9451)

- [Different form elements](https://youtu.be/zutb5Clb_0Y?si=wBTkEY-q8neVdvd1&t=10127)

     - [Input Types and its Attributes](https://youtu.be/zutb5Clb_0Y?si=-sCC40x9AewGzwNC&t=10419)

     - [Form labels](https://youtu.be/zutb5Clb_0Y?si=dGvWKm3pcvBWO7wG&t=11211)

     - [Text Area](https://youtu.be/zutb5Clb_0Y?si=xIIFDAHkdF_APzEH&t=11647)

     - [Important thing about forms](https://youtu.be/zutb5Clb_0Y?si=deMdJ8b7gIKHIj9s&t=12247)

  - Forms
       - [A detail explanation of Form Submission](https://youtu.be/zutb5Clb_0Y?si=tnDMG6TFzvaTXZi6&t=13087)

       -  [Get request in forms](https://youtu.be/zutb5Clb_0Y?si=FB-75RP44ABYr9my&t=14100)
          
       - [Form Validation](https://youtu.be/zutb5Clb_0Y?si=jokuhy1w4g3wWJUw&t=14274)

 -  ***Js code of sending form data to server:***
```js
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Form submitted successfully.");
      console.log("Server response:", data.form);
    })
    .catch(console.error);
});
``` 
