import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation registration($input: RegistrationInput) {
    registration(input: $input) {
      id, email, password, token
    }
  }
`