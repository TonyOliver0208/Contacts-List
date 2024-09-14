import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import DrawerNavigator from './routes'; // Ensure this path is correct

import TabNavigator from './routes'; // Ensure this path is correct

import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Option';
import Store from './store';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <TabNavigator />
    </Provider>
  );
}

export default App;

// import React from 'react';
// import {Provider} from 'react-redux';
// import DrawerNavigator from './routes'; // Adjust the path as needed
// import store from './store';

// function App() {
//   return (
//     <Provider store={store}>
//       <DrawerNavigator />
//     </Provider>
//   );
// }

// export default App;
