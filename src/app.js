const express = require('express') 

import cors from 'cors';
import morgan from 'morgan';
import productRoute from '../routes/product';
const PORT = 3002;

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use(productRoute);
// const check = (req, res,next) =>{
//     const status = true;
//     if (status) {
//         console.log("Chào sếp")
//         next();

//     } else {
//         console.log("Anh không có quyền truy cập")
//     }
// }
// app.get('api/products', check, (req, res) =>{
//     const products = [
//         {id: 1, name:"Product A"},
//         {id: 2, name:"Product B"},]
//         res.json(products);
        
    
// })
// app.use((req, res,next) =>{
//     console.log('Bước 1');
//     next();
// })
// app.use((req, res,next) =>{
//     console.log('Bước 2');
   
// })

// const server = http.createServer((req, res) =>{
//     console.log('url',req.url);
//     if (req.url === "/") {
//         res.setHeader('Content-type', "text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>")
//         res.end();
       
//     } else if(req.url === "/api/products"){
//         const products = [
//             {id: 1, name:"Product A"},
//             {id: 2, name:"Product B"},
//         ];
//         res.end(JSON.stringify(products))
        
//     }else {
//         console.log("Chịu không biết")
//     }
// });

app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})