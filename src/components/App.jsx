import { Profile } from 'components/taskOne/Profile/Profile';
import { Statistics } from './taskTwo/Statistics/Statistics';
import { FriendList } from './taskThree/FriendList/FriendList'
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';


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
      
      <FriendList friends={friends} />
      </>        
  );
};
