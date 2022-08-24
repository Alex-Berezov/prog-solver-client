import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation registration($input: RegistrationInput) {
    registration(input: $input) {
      id, email, password, token
    }
  }
`

export const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      id, email, password, token, approved
    }
  }
`

export const AUTH = gql`
  mutation auth($input: AuthInput) {
    auth(input: $input) {
      approved
    }
  }
`