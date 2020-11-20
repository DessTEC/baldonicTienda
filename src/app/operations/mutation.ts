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

export const addProductToCart = gql`
mutation addProductToCart($product: cartProduct!) {
    addProductToCart(product: $product)
} 
`;

export const updateUserName = gql`
mutation updateUserName($new_name: String!) {
    updateUserName(new_name: $new_name)
} 
`;

export const updateUserPassword = gql`
mutation updateUserPassword($password: passwordPair!) {
    updateUserPassword(password: $password)
} 
`;

export const addAddress = gql`
mutation addAddress($address: Address!) {
    addAddress(address: $address)
} 
`;

export const deleteItem = gql`
mutation deleteItem($id_item: Int!) {
    deleteItem(id_item: $id_item)
} 
`;