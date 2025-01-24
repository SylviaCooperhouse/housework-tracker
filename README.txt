# Housework Tracker App

## Overview
The **Housework Tracker App** is designed to help users log and track their household tasks in a simple and intuitive way. Inspired by the Baby Tracker app, this tool aims to organize chores, track task completion frequency, and provide useful insights into how often tasks are performed. It is a minimalist app focusing on utility and ease of use.

## Goals
- Provide a straightforward way to log housework tasks.
- Allow users to track when tasks were last completed.
- Offer optional insights (e.g., weekly or monthly patterns).
- Keep the interface simple and easy to navigate.

## Features (MVP)
1. **Add Tasks**: Users can add household tasks with a title (e.g., "Clean Bathroom").
2. **Log Completion**: Users can mark when a task was last completed.
3. **View Task List**: Users can view all tasks and see the last completion date.
4. **Basic Insights**: Display how many days have passed since each task was last done.
5. **Persistent Storage**: Tasks and logs are stored locally on the device.

## Expanded Features (Future Development)
1. **Customizable Frequency**: Allow users to set ideal task intervals (e.g., "Clean Bathroom every 7 days").
2. **Charts and Trends**: Visualize task frequency with weekly/monthly charts.
3. **Task Categories**: Group tasks by categories (e.g., Cleaning, Cooking, Shopping).
4. **Timers**: Track time spent on specific tasks (e.g., "Spent 2 hours cooking").
5. **Cloud Sync**: Sync tasks and logs across multiple devices.

## Technology Stack
1. **Frontend**: React Native (for cross-platform support on iOS and Android).
2. **Local Storage**: SQLite (via Expo) for persistent data storage.
3. **Backend (Optional)**: Firebase for syncing (if future cloud sync is implemented).

## Development Plan
### Phase 1: Basic MVP
- Set up the environment (Node.js, Expo CLI, VS Code).
- Create the task list UI and add task functionality.
- Implement task logging (manually updating "last done" field).
- Add local storage using SQLite.

### Phase 2: Enhanced Features
- Add optional charts and task frequency tracking.
- Allow customization of task intervals.
- Implement timers for tracking time spent.

### Phase 3: Polish and Publish
- Refine UI design (icons, animations, colors).
- Thoroughly test the app on iOS and Android devices.
- Prepare the app for submission to the App Store and Google Play.

## Timeline
1. **Week 1**: Set up project, build basic task list UI, and implement task logging.
2. **Week 2**: Integrate SQLite for persistent storage and polish the core functionality.
3. **Week 3**: Test, refine, and prepare for initial release.
4. **Week 4+**: Develop expanded features based on feedback and usage.

## How to Contribute
1. Fork the repository and clone it locally.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   expo start
   ```
4. Submit pull requests for new features or bug fixes.

## Future Vision
The Housework Tracker App aims to grow into a comprehensive tool for tracking personal productivity in the home. With simple yet effective features, the app will help families and individuals stay organized without overwhelming them with notifications or overly complex functionality.

