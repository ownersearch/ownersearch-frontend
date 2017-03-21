import React from 'react';
import styles from '../css/components/dashboard';
import Header from '../components/Header';

console.log(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Dashboard = () => (
  <div>
    <Header style={{height: '100vh'}}>
      <input className={styles.input} type="text"/>
    </Header>
    <p>Welcome to the Dasboard. Stay tuned...</p>
    <p>Welcome to the Dasboard. Stay tuned...</p>
    <p>Welcome to the Dasboard. Stay tuned...</p>
    <p>Welcome to the Dasboard. Stay tuned...</p>
    <p>Welcome to the Dasboard. Stay tuned...</p>

  </div>
);

export default Dashboard;
