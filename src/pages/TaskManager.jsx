import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently
        </p>
      </div>

      <Card className="mb-6">
        <form onSubmit={addTask} className="flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </form>
      </Card>

      <Card className="mb-6">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            {['all', 'active', 'completed'].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? 'primary' : 'secondary'}
                onClick={() => setFilter(filterType)}
                className="capitalize"
              >
                {filterType}
              </Button>
            ))}
          </div>
          
          {tasks.some(task => task.completed) && (
            <Button variant="danger" onClick={clearCompleted}>
              Clear Completed
            </Button>
          )}
        </div>
      </Card>

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {tasks.length === 0 ? 'No tasks yet. Add your first task!' : 'No tasks match the current filter.'}
            </p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card 
              key={task.id} 
              className={`flex items-center justify-between p-4 animate-fade-in ${
                task.completed ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`text-lg ${
                  task.completed 
                    ? 'line-through text-gray-500 dark:text-gray-400' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {task.text}
                </span>
              </div>
              
              <Button
                variant="danger"
                onClick={() => deleteTask(task.id)}
                className="!p-2"
              >
                🗑️
              </Button>
            </Card>
          ))
        )}
      </div>

      {tasks.length > 0 && (
        <Card className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {tasks.filter(t => !t.completed).length} tasks remaining
          </p>
        </Card>
      )}
    </div>
  );
};

export default TaskManager;