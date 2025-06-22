- [Express Js](https://youtu.be/J-QgmSzyA_A?si=xbWPy_KmfgnO1AAZ)

- [What is express js](https://youtu.be/J-QgmSzyA_A?si=B4SIoWqcAzz1wQir&t=87) 

- [Middleware in express js](https://youtu.be/J-QgmSzyA_A?si=GJ4HDdipT_LqNsZz&t=277)

- [Creating express app](https://youtu.be/J-QgmSzyA_A?si=GQIlwnixlb9M0_eG&t=887)

- [Adding middleware](https://youtu.be/J-QgmSzyA_A?si=mwoy1s4sj7QFoL7E)
    - basically we use `app.use(req,res,next)` to add middleware

- [Creating server using express without http module](https://youtu.be/J-QgmSzyA_A?si=7zJE9QJLW6Hc9TlN&t=1787)

- [Handling routes](https://youtu.be/J-QgmSzyA_A?si=tbRkWNbRTS2Cb3yc&t=1857)
    - basically using `app.use` , we can also handle routes
    - example:
    ```js
    // will match all routes start with /  
    app.use("/",(req,res)=>{
        res.send("/ page") 
    })
    app.use("/post",(req,res)=>{
        res.send("post page")
    })
    app.listen(3000,()=>console.log("server started"))
    ```

- [Handling routes based on method of request](https://youtu.be/J-QgmSzyA_A?si=pwYUfbWxpLxl5-6S&t=2317)

- One more thing if we give path in ```app.use``` then it will used as wildcard, i.e. it will match all routes start with that path.  But if we give path in ```app.get``` or any other method then it will only match that path exactly.