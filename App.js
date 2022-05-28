import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

  function openModal () {
    setModalVisible(true)
  }

  function closeModal () {
    setModalVisible(false)
  }

  function addGoalHandler (goal) {
    setGoalList(currentGoalList => [
      ...currentGoalList, 
      {text: goal, id: Math.random().toString()}
    ]);
  }

  function deleteItem (id) {
    setGoalList(currentGoalList => {
      return currentGoalList.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
    <StatusBar style='light' />

    <View style={styles.appContainer}>

      <Button 
        title="Add New Goal" 
        color="#b180f0"
        onPress={openModal} 
      />

      <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} closeModal={closeModal}/>

      <View style={styles.goalsContainer}>
        {
          goalList.length > 0 ?
        <FlatList data={goalList} renderItem={(goalObject) => {
          return (
            <GoalItem goalObject={goalObject} deleteItem={deleteItem} />
          )}}
          />
          :
          <View style={styles.noGoalTextContainer}>
            <Text style={styles.noGoalText}>Add some goals! Click the 'Add New Goal' button to get started.</Text>
            <Text style={styles.plusSign}>+</Text>
          </View>
        }
      </View>

    </View>

    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },
  goalsContainer: {
    marginTop: 10,
    flex: 5,
  },
  noGoalTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noGoalText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 40
  },
  plusSign: {
    fontSize: 30,
    paddingTop: 30,
    color: 'white'
  }
});
