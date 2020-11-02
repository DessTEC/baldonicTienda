import gql from 'graphql-tag';

export const registerData = gql`
mutation signUp($user: newUser!) {
    register(user: $user) {
        message
    }
} 
`;

export const contactData = gql`
mutation contactData($contact: contactInput!) {
    email(contact: $contact)
} 
`;