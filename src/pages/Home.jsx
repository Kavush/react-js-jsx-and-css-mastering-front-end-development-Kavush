import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data fetching with JSONPlaceholder API.',
      icon: '🌐',
      path: '/api-demo'
    },
    {
      title: 'Responsive Design',
      description: 'Works perfectly on all devices and screen sizes.',
      icon: '📱',
      path: '/about'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">TaskMaster</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A modern, responsive React application built with Tailwind CSS. 
          Manage your tasks efficiently and explore API integration features.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/tasks">
            <Button variant="primary" className="text-lg px-6 py-3">
              Get Started
            </Button>
          </Link>
          <Link to="/api-demo">
            <Button variant="secondary" className="text-lg px-6 py-3">
              Explore API
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card 
            key={feature.title} 
            className="text-center p-8 hover:shadow-lg transition-shadow duration-300 animate-slide-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {feature.description}
            </p>
            <Link to={feature.path}>
              <Button variant="primary">
                Learn More
              </Button>
            </Link>
          </Card>
        ))}
      </section>

      {/* Stats Section */}
      <section className="text-center">
        <Card className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Tailwind CSS', 'Vite', 'React Router'].map((tech) => (
              <div key={tech} className="text-center">
                <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {tech}
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  {tech === 'React' && 'Component-based UI'}
                  {tech === 'Tailwind CSS' && 'Utility-first CSS'}
                  {tech === 'Vite' && 'Fast Build Tool'}
                  {tech === 'React Router' && 'Client-side Routing'}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;