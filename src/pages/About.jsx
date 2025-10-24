import React from 'react';
import Card from '../components/ui/Card';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          About TaskMaster
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn more about this React application
        </p>
      </div>

      <Card className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Project Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          TaskMaster is a comprehensive React application designed to demonstrate modern 
          front-end development practices using React.js, JSX, and Tailwind CSS.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          This project showcases component architecture, state management, hooks usage, 
          API integration, and responsive design principles.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Features Implemented
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>✅ Component-based architecture</li>
            <li>✅ State management with hooks</li>
            <li>✅ Custom hooks (useLocalStorage)</li>
            <li>✅ Context API for theme management</li>
            <li>✅ API integration with JSONPlaceholder</li>
            <li>✅ Responsive design with Tailwind CSS</li>
            <li>✅ Dark/light mode toggle</li>
            <li>✅ React Router for navigation</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Technologies Used
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>⚛️ React 18</li>
            <li>🎨 Tailwind CSS</li>
            <li>⚡ Vite</li>
            <li>🔄 React Router DOM</li>
            <li>💾 Local Storage API</li>
            <li>🌐 JSONPlaceholder API</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About; 
