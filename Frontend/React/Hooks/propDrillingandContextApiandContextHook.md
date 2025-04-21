- [What is propdrilling, why should care about that](https://youtu.be/M9O5AjEFzKw?si=Qj9mnjsAtxUqof8B&t=11147)
 - [PropDrilling in action](https://youtu.be/M9O5AjEFzKw?si=fQnJAEWMgJZyfqvd&t=11237)

- [What is Context API, and how to use it](https://youtu.be/lAFbKzO-fss?si=-Qmop0JUIfl2UcR0&t=21047)

- [Context API in action](https://youtu.be/M9O5AjEFzKw?si=_B6f0uOiGmHboktH&t=11397)

- Example code

```js
    './App.jsx'
    import {createContext} from 'react';
    const App = () => {
      export const Data = createContext();

        return (
            <div>
            <Data.Provider value= {name}>
                <ComponentA />
            </Data.Provider>
            </div>
        )
    }
    export default App;
    
    './ComponentA.jsx'
    import {Data} from './App.jsx';
    const ComponentA = () => {
        const name = useContext(Data);
        return (
            <div>
                <h1>{Data}</h1>
            </div>
        )
    }
```
- So the components you provide inside ```<Context.Provider> </Context.Provider>```, those components and its nested components will have access to the context value.


- [Problem with this approach and `useContext` Hook, btw you can just write ```<h1>{Data}</h1>``` , so not need of `useContext` Hook but recommended](https://youtu.be/M9O5AjEFzKw?si=k5FNR1MmyNyYWF0z&t=11737)
  - [`useContext` Example](https://youtu.be/M9O5AjEFzKw?si=-E3-0XxNGAd5MJ7K&t=11777)