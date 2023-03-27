import { GlobalStyle } from './Globalstyles';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from '../Data/Data';
import friends from '../Data/Friends';
import transactions from '../Data/Transactions';
import user from '../Data/User';


export const App = () => {
  return (
    <div>
      
<div>
  <GlobalStyle />
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}        
  />
  </div>

      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>

<div>
  <FriendList friends={friends} />
      </div>
      
<div>
  <TransactionHistory items={transactions} />
      </div>
      
</div>
  );
}
