import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

export const QUERY_THERAPISTS = gql`
  query allTherapists {
    therapists {
      _id
      first
      middle
      last
      specialty
      location
    }
  }
`

export const QUERY_THERAPIST = gql`
query therapist($therapistId: ID!){
    therapist(therapistId: $therapistId){
      first 
      middle
      last
      specialty
      location
      takeInsurance
      privatePay
    }
  }
`