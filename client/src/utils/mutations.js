import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const ADD_THERAPIST = gql`
  mutation addTherapist($first: String!, $middle: String, $last: String!, $speciality: String, $time: Int, $location: String, $takeInsurance: Boolean, $privatePay: Boolean) {
    addTherapist(first: $first, middle: $middle, last: $last, speciality: $speciality, time:  $time, location: $location, takeInsurance: $takeInsurance, privatePay: $privatePay){
      _id 
      first 
      middle
      last
      speciality
      time
      location
      takeInsurance
    } 
  }
`