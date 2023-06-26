import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
    query Users {
        users {
        _id
        username
        email
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
            }
        }
    } 
`;

export const QUERY_USER = gql`
    query User($username: String!) {
        user(username: $username) {
        _id
        username
        email
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
            }
        }
    }
`;