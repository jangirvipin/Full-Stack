"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const body_parser_1 = __importDefault(require("body-parser"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const JWT_SECRET = "MY_SECRET_KEY";
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello World');
});
/*async function create() {
   prisma.$connect();
   const book = await prisma.book.create({
      data: {
         "name": "Book 6",
        "price": 600,
        "title":"SOme random title even i dont know",
        "category":"dwhoifhweiol",
        "image": "https://img.freepik.com/premium-photo/stack-colorful-books_1207614-22471.jpg?w=740"
      }
   });
   console.log(book);
}*/
app.post("/signup", async (req, res) => {
    prisma.$connect();
    const { name, password, email } = req.body;
    console.log(name);
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const findUser = await prisma.user.findUnique({
        where: {
            name: name
        }
    });
    if (findUser) {
        res.json({ message: "User already exists" });
    }
    else {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            }
        });
        res.json({ message: "User created successfully" });
    }
});
app.post("/login", async (req, res) => {
    prisma.$connect();
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({
            where: {
                name: username
            }
        });
        console.log(user);
        const pass = "";
        if (!user) {
            res.status(500).json({ message: "Invalid username or password" });
        }
        else {
            const pass = await bcryptjs_1.default.compare(password, user.password);
        }
        console.log("check1");
        if (user && pass) {
            const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.name }, JWT_SECRET, {
                expiresIn: '1h', // Token will expire in 1 hour
            });
            res.status(200).cookie('token', token, {});
            // res.status(200).json({ message: "Login successful" });
        }
        else {
            res.status(500).json({ message: "Invalid username or password" });
        }
    }
    catch (e) {
        res.json({ msg: "Internal server error" });
    }
});
app.post("/logout", (req, res) => {
    res.clearCookie('token');
    res.json({ message: "Logged out" });
});
app.get("/book", async (req, res) => {
    prisma.$connect();
    const books = await prisma.book.findMany();
    console.log(books);
    res.json(books);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
