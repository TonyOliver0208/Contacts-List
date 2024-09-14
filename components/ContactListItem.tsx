import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../utils/colors.ts';

const ContactListItem = ({name, avatar, phone, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.grey}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.contactInfo}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   onPress: PropTypes.func.isRequired,
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: colors.greyLight,
//   },
//   contactInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   details: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: colors.greyDark,
//   },
// });

ContactListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24, // Corrected paddingleft to paddingLeft
  },

  contactInfo: {
    flex: 1,
    flexDirection: 'row', // Corrected ‘row’ to 'row'
    alignItems: 'center', // Corrected ‘center’ to 'center'
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44,
  },

  details: {
    justifyContent: 'center', // Corrected ‘center’ to 'center'
    flex: 1,
    marginLeft: 20, // Corrected marginleft to marginLeft
  },

  title: {
    color: colors.black,
    fontWeight: 'bold', // Corrected ‘bold’ to 'bold'
    fontSize: 16,
  },

  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});

export default ContactListItem;
