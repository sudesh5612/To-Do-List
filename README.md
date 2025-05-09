# To-Do List Application
![Screenshot 2025-05-09 160758](https://github.com/user-attachments/assets/5c9b4807-aa00-4279-a1a3-09be4f999900)


A web-based to-do list that saves your tasks locally in the browser.

## Features

 **Add tasks** - Type in "Add a new task..." and press Enter  
 **Mark complete** - Click on tasks to toggle completion status  
 **Filter views** - Switch between [Active] and [Completed] tasks  
 **Persistent storage** - Tasks saved automatically to localStorage  
 **Delete tasks** - Remove unwanted tasks permanently  
 **Clean UI** - Simple, distraction-free design  

## Current Task List (Example)
- HTML
- CSS
- JAVASCRIPT

## How to Use

1. **Add Task**: Type in the input box and press Enter
2. **Complete Task**: Click on any task to mark it complete
3. **Filter Tasks**: 
   - Click [Active] to see pending tasks
   - Click [Completed] to see finished tasks
4. **Delete Task**: Hover over a task and click the delete icon (X)
5. **Your tasks automatically save** between sessions

## Technical Details

**Storage**:  
All tasks are saved to `localStorage` in your browser. No data is sent to any server.

**Data Structure**:
```json
{
  "tasks": [
    {"id": 1, "text": "HTML", "completed": false},
    {"id": 2, "text": "CSS", "completed": true}
  ]
}
