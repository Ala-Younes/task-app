# Task App - React + TypeScript + Tailwind

## Overview

This task management app is built with React, TypeScript, and Tailwind CSS. It leverages various React concepts and custom hooks to create a seamless user experience.
![Arch](/src/assets/taskAppArch.png)

## Features

### Theme Modes

The app supports both Light and Dark modes, providing users with a personalized visual experience. Users can easily toggle between these modes to suit their preferences.

### - Light

![Light Mode](/src/assets/lightMode.png)

### - Dark

![Dark Mode](/src/assets/darkMode.png)

### Task hook

The `useTask` hook encapsulates task-related functionality, making it easy to manage task lists within your app.

```javascript
const useTask = () => {
  // ... Task-related logic ...

  return {
    taskList,
    addTask,
    deleteTask,
    editTask,
    clearTasks,
  };
};
```

### LocalStorage hook

![localStorage](/src/assets/localStorage.png)
The `useLocalStorage` hook enables seamless data persistence by interacting with the browser's localStorage.

```javascript
  type localStorageProps<T> = {
  key: string;
  initialValue: T;
};

export function useLocalStorage<T>({
  key,
  initialValue,
}: localStorageProps<T>) {
   // ... LocalStorage logic ...

return [storedValue, setStoredValue] as const;
}
```

### Toggle Theme hook

The `useTheme` hook manages the application's theme, allowing users to switch between themes effortlessly.

```javascript
const useTheme = (initialTheme: string) => {
  // ... Theme-related logic ...

  return { activeTheme, handleThemeChange };
};
```
