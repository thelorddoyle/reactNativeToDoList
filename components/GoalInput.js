import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

function GoalItem (props) {

  const [goal, setGoal] = useState('');

  function goalHandler (input) {
    setGoal(input)
    console.log(goal)
  }

  function addGoalHandlerEvent () {
    props.onAddGoal(goal)
    setGoal('');
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} onChangeText={goalHandler} value={goal}/>
      <Button title="Add goal" onPress={addGoalHandlerEvent} />
    </View>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8,
  }
});