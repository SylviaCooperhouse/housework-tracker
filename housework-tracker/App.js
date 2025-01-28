import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Clean Bathroom', lastDone: '3 days ago' },
    { id: '2', name: 'Vacuum Living Room', lastDone: '1 week ago' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), name: newTask, lastDone: 'Not yet done' }]);
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Housework Tracker</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskName}>{item.name}</Text>
            <Text style={styles.lastDone}>Last Done: {item.lastDone}</Text>
          </View>
        )}
      />
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  task: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  taskName: { fontSize: 18 },
  lastDone: { fontSize: 14, color: '#555' },
  addTaskContainer: { flexDirection: 'row', marginTop: 20, alignItems: 'center' },
  input: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#ccc', marginRight: 10, padding: 5 },
});
