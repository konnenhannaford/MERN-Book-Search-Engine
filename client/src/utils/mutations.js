import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;


// login(username: String!, password: String!): Auth
// addUser(username: String!, password: String!, email:String!): Auth
// saveBook(authors: String, description: String, title: String!, bookId: String, image: String, link: String): User
// removeBook(bookId: String!): User
// }
// `;