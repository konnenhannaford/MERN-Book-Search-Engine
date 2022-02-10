import { gql } from '@apollo/client';

// * `me`: Which returns a `User` type.
    // _id
    // username
    // email
    // bookCount
    // savedBooks {

// * `then returns book type
    // bookId
    // authors
    // description
    // title
    // link
    // image

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                link
                image
            }
        }
    }
`;