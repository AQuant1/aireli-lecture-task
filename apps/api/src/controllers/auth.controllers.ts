import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const newUser: PlatformUser = {
    id: null,
    email,
    password
  };

  try{
    await createUser(newUser);
    res.status(201).json({message: "User created successfully"});
  }catch(error){
    res.status(500).json({message: "Error creating user!"});
  }
  
};