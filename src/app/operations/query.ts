import gql from 'graphql-tag';

export const signIn=gql`
    query signIn($user: logUser!) {
        logIn(user: $user)
    } 
`;

export const getAllProducts=gql`
    query getAllProducts {
        getAllProducts{
            sku,
            name,
            price,
            description,
            img
        }
    }
`;

export const showCart=gql`
    query showCart {
        showCart{
            sku,
            name,
            price,
            description,
            quantity,
            design,
            size,
            image
        }
    }
`;

export const getProductInfo=gql`
    query getProductInfo {
        getProductInfo{
            sku,
            name,
            price,
            description,
            img
        }
    }
`;




