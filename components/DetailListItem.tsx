import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../utils/colors.ts'; // Adjust path as needed

const DetailListItem = ({icon, title, subtitle}) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={24}
              style={[{color: colors.black}, {marginRight: 28}]}
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

DetailListItem.defaultProps = {
  icon: null,
  subtitle: '',
};

const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});

export default DetailListItem;
