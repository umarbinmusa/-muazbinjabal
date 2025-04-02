import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AuthenticationError, ForbiddenError } from 'apollo-server-express';


dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const resolvers = {
  Query: {
    getUsers: async (_, __, { models, user }) => {
      if (!user || user.role !== 'ADMIN') {
        throw new ForbiddenError('Access denied. Admins only.');
      }
      return await models.User.find();
    },
    


    

   
  },
  
  Mutation: {
    signup: async (_, { first_name, email, last_name, regno, dob, address, password, role }, { models }) => {
      if (!email || !password || !role) {
        throw new AuthenticationError("All fields are required");
      }
      const existingUser = await models.User.findOne({ regno });
      if (existingUser) throw new AuthenticationError("regno already taken");
      const hashedPassword = await argon2.hash(password);
      const user = await models.User.create({ first_name, email, last_name, dob, address, regno, password: hashedPassword, role });
      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET_KEY, { expiresIn: "7d" });
      return { token, user };
    },
    
    login: async (_, { username, password }, { models }) => {
      const user = await models.User.findOne({ regno });
      if (!user || !(await argon2.verify(user.password, password))) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET_KEY, { expiresIn: "7d" });
      return { token, user };
    },
    
    
     
    
    
  }
    
};

export default resolvers;
