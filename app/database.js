import * as SQLite from 'expo-sqlite';

// Open or create the database
const db = SQLite.openDatabase('housework.db');

// Initialize the database (create tables if they don’t exist)
export const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT, 
        lastDone TEXT
      );`,
      [],
      () => console.log('✅ Database initialized'),
      (_, error) => console.error('❌ Database error:', error)
    );
  });
};

// Insert a new task
export const addTaskToDB = (name) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tasks (name, lastDone) VALUES (?, ?);',
      [name, 'Not yet done'],
      (_, result) => console.log('✅ Task added:', result),
      (_, error) => console.error('❌ Error adding task:', error)
    );
  });
};

// Fetch all tasks
export const getTasksFromDB = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM tasks;',
      [],
      (_, { rows: { _array } }) => {
        console.log('📂 Tasks loaded:', _array);
        callback(_array);
      },
      (_, error) => console.error('❌ Error fetching tasks:', error)
    );
  });
};
