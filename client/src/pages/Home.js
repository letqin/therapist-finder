import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_THERAPISTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THERAPISTS);
  const therapists = data?.therapists || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            therapists.map(therapist => {
              console.log(therapist)
              return(
                <div>
                  {therapist.first}
                  {therapist.last}
                </div>
              )
            })
            // <ProfileList
            //   profiles={profiles}
            //   title="Here's the current roster of friends..."
            // />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
