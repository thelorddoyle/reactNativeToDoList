import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem (props) {
  return(
    <Pressable onPress={props.deleteItem.bind(this, props.goalObject.item.id)} style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>
          {props.goalObject.item.text}
        </Text>
      </View>
    </Pressable>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  listItemContainer: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: '#b180f0',
    borderRadius: 15
  },
  pressedItem: {
    opacity: 0.5
  },
  listItem: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18
  }
});