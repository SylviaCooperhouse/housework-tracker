import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('housework.db');

// Initialize the database
export const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, lastDone TEXT);',
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.log('Error creating table:', error)
    );
  });
};

// Insert a new task
export const addTaskToDB = (name) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tasks (name, lastDone) VALUES (?, ?);',
      [name, 'Not yet done'],
      (_, result) => console.log('Task added:', result),
      (_, error) => console.log('Error adding task:', error)
    );
  });
};

// Fetch all tasks
export const getTasksFromDB = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM tasks;',
      [],
      (_, { rows: { _array } }) => callback(_array),
      (_, error) => console.log('Error fetching tasks:', error)
    );
  });
};
