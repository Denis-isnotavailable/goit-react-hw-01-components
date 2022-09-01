import { Profile } from 'components/taskOne/Profile/Profile';
import { Statistics } from './taskTwo/Statistics/Statistics';
import user from 'data/user.json';
import data from 'data/data'


export const App = () => {
  return (
    <>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />
      </>        
  );
};
