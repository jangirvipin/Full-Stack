import express from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { Request,Response } from 'express';
import bcryptjs from "bcryptjs"
import cookieParser from 'cookie-parser';
import jwt from "jsonwebtoken"
import bodyparser from "body-parser"


const prisma = new PrismaClient();
const app = express();
const JWT_SECRET ="MY_SECRET_KEY"

app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post("/create",async  (req:Request, res:Response) => {
   prisma.$connect();
   const book = await prisma.book.create({
      data: {
         "name": "Book 6",
        "price": 600,
        "title":"SOme random title even i dont know",
        "category":"dwhoifhweiol",
        "image": "https://img.freepik.com/premium-photo/stack-colorful-books_1207614-22471.jpg?w=740",
        "user": {
          connect: { id: 1 }
        }
      }
   });
   console.log(book);
}
)

app.post("/signup", async(req:Request, res:Response) => {
   prisma.$connect();
   const {name, password,email} = req.body;
   console.log(name);

   const hashedPassword = await bcryptjs.hash(password, 10);

   const findUser = await prisma.user.findUnique({
      where: {
         name: name
      }});

   if(findUser) {
      res.json({message: "User already exists"});
   }
   else {
      const user = await prisma.user.create({
         data: {
            name: name,
            email: email,
            password: hashedPassword,
         }
      });
      res.json({message: "User created successfully"});
   }

});

app.post("/login",async(req:Request,res:Response)=>{
   prisma.$connect();
   try{
      const {username,password}=req.body;
      const user = await prisma.user.findUnique({
         where: {
            name: username
         }
      });
      console.log(user);
      const pass="";
      if (!user) {
         res.status(500).json({ message: "Invalid username or password" });
      }else{
         const pass= await bcryptjs.compare(password, user.password)
      }
     console.log("check1")

      if (user && pass) {
         const token = jwt.sign({ id: user.id, username: user.name }, JWT_SECRET, {
            expiresIn: '1h', // Token will expire in 1 hour
        });

        res.status(200).cookie('token', token, {});
     // res.status(200).json({ message: "Login successful" });

      }
      else {
         res.status(500).json({ message: "Invalid username or password" });
      }
   }catch(e){
      res.json({msg:"Internal server error"})
   }}
)

app.post("/logout", (req:Request, res:Response) => {
   res.clearCookie('token');
   res.json({message: "Logged out"});
});


app.get("/book", async(req:Request, res:Response) => {

      prisma.$connect();
      const books = await prisma.book.findMany();
      console.log(books);

      res.json(books);
}
);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
