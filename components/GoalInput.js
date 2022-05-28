import { StyleSheet, View, TextInput, Button, Modal, Image, Text } from 'react-native';
import { useState } from 'react';

function GoalItem (props) {

  const [goal, setGoal] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  function goalHandler (input) {
    if (errorMessage !== '') {
      setErrorMessage('')
    }
    setGoal(input)
  }

  function addGoalHandlerEvent () {
    if (goal !== '') {
      props.onAddGoal(goal)
      setGoal('');
      props.closeModal();
    } else {
      setErrorMessage('ERROR: Cannot insert an empty goal.')
    }
  }

  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.goalImage}/>
        <TextInput placeholder='Input goal' style={styles.textInput} onChangeText={goalHandler} value={goal}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Close" onPress={props.closeModal} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandlerEvent} color="#b180f0" />
          </View>
        </View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    </Modal>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '80%',
    padding: 16,
    color: '#120438'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
    marginTop: 16
  },
  goalImage: {
    width: 100,
    height: 100,
    margin: 20
  },
  errorMessage: {
    marginTop: 40,
    color: '#f31282',
    fontSize: 18
  }
});