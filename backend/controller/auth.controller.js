import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    
    
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
 
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};


export const login = async (req, res) => {
  try {
    
    const { email, password } = req.body || {};
    
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }


    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found in DB.");
      return res.status(400).json({ message: "Invalid credentials." });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match.");
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    
    return res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully." });
};


