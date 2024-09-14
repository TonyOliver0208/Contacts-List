// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import DetailListItem from '../components/DetailListItem.tsx'; // Ensure correct component name

// const Options = () => {
//   return (
//     <View style={styles.container}>
//       <DetailListItem title="Update Profile" />
//       <DetailListItem title="Change Language" />
//       <DetailListItem title="Sign Out" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white', // Fixed quote style
//   },
// });

// export default Options;

// Options.js
import React from 'react';
import {View, Text} from 'react-native';
import DetailListItem from '../components/DetailListItem';

const Options = () => {
  return (
    <View>
      <DetailListItem title="Update Profile" />
      <DetailListItem title="Change Language" />
      <DetailListItem title="Sign Out" />
    </View>
  );
};

export default Options;
