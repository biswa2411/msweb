import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($email:String!, $mobile:String!, $username:String!, $password1:String!, $password2:String!, $firstName:String!, $lastName:String!) {
  register(
      email: $email
      mobile: $mobile
      username: $username
      password1: $password1
      password2: $password2
      firstName:$firstName
      lastName:$lastName
    ) {
      success
      message
      errors
    }
  }
`;


export const VERIFY_ACCOUNT = gql`
  mutation verifyAccount($token:String!){
    verifyAccount(token:$token){
      success
      message
    }
  }
`

export const LOGIN = gql`
  mutation SignIn($password:String!, $email:String, $username:String){
  tokenAuth(password:$password, email:$email, username:$username){
    refreshExpiresIn
    token
    refreshToken
    user{
      id
      lastLogin
      username
      firstName
      lastName
      email
      mobileNo
      dateJoined
      cartitemSet{
        quantity
      }
    }
  }
}
`