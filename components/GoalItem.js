import { StyleSheet, View, Text } from 'react-native';

function GoalItem (prop) {
  return(
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>
        {prop.goalObject.item}
      </Text>
    </View>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  listItemContainer: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: 'purple',
    borderRadius: 15
  },
  listItem: {
    color: 'white',
    fontWeight: '700',
  }
});