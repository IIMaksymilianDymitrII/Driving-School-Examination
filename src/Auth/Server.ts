import express, { type Request, type Response } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

const SECRET =  import.meta.env.VITE_SECRET

app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email !== "demo" || password !== "1234") {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ user: email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.get("/dashboard", (req: Request, res: Response) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: "No Token" });
  }

  const token = auth.split(" ")[1];

  jwt.verify(token, SECRET, (err: any, decoded: any) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ message: "Access granted", user: decoded.user });
  });
});

app.listen(5000, () => console.log("Server Running on 5000"));