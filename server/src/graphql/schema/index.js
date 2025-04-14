import { gql } from "apollo-server-express";

export default gql`
schema {
  query: Query
  mutation: Mutation
}

type User {
  id: ID!
  first_name: String!
  last_name: String!
  dob: String!
  address: String!
  regno: String!
  email: String!
  role: String! 
}
  type Class {
  name: String!
  teacher: String!
  }
  
type AuthPayload {
  token: String!
  user: User!
}

 



type Query {
  getUsers: [User!]! 
}

type Mutation {
  signup(first_name: String!, regno: String! email: String!, last_name: String!, dob: String!, address: String! password: String!, role: String!): AuthPayload!
  login(regno: String!, password: String!): AuthPayload!
  addclass(name: String!, teacher: String!): Class
  }


   

`;
