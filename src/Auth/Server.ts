import express, { type Request, type Response } from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const SECRET: string = process.env.SECRET!;

// dont get the line below
const users: any[] = [];

app.post("/", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email !== "demo" || password !== "1234") {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ user: email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.post("/signin", async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name)
    return res.status(400).json({ message: "All fields are Required" });

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).json({ message: "User Exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    email,
    name,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User has been created",
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    },
  });
});

app.get("/dashboard", (req: Request, res: Response) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: "No Token" });
  }

  const token = auth.split(" ")[1];

  jwt.verify(token, SECRET, (err: any) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ message: "Access granted", user: "user" });
  });
});

app.listen(5000, () => console.log("Server Running on 5000"));
