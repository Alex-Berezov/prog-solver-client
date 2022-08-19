import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation registration($input: RegistrationInput) {
    registration(input: $input) {
      id, email, password, token
    }
  }
`

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id, email, password, token, approved
    }
  }
`