import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            }
        }
    }
`;

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation SaveBook($userEmail: String!, $title: String, $authors: [String], $description: String, $bookId: String, $image: String, $link: String) {
        saveBook(userEmail: $userEmail, title: $title, authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link) {
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

export const DELETE_BOOK = gql`
    mutation DeleteBook($userEmail: String!, $bookId: String!) {
        deleteBook(userEmail: $userEmail, bookId: $bookId) {
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