import { gql } from "@apollo/client";

export const REGISTER = gql`
mutation Register($email:String!, $mobile:String!, $username:String!, $password1:String!, $password2:String!, $first_name:String!, $last_name:String!) {
 register(
    email: $email
    mobile: $mobile
    username: $username
    password1: $password1
    password2: $password2
    first_name:$first_name
    last_name:$last_name
  ) {
    success
    message
  }
}
`;
