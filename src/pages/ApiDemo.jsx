import React, { useState, useMemo } from 'react';
import useApi from '../hooks/useApi';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ApiDemo = () => {
  const { data: posts, loading, error, loadMore, refresh } = useApi('https://jsonplaceholder.typicode.com/posts');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="text-center py-12">
          <div className="text-red-600 text-xl mb-4">Error: {error}</div>
          <Button onClick={refresh} variant="primary">
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          API Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fetching and displaying data from JSONPlaceholder API
        </p>
      </div>

      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Button onClick={refresh} variant="secondary" disabled={loading}>
            Refresh
          </Button>
        </div>
      </Card>

      {loading && posts.length === 0 && (
        <Card className="text-center py-12">
          <div className="animate-pulse">
            <div className="text-xl text-gray-600 dark:text-gray-400">Loading posts...</div>
          </div>
        </Card>
      )}

      <div className="grid gap-6 mb-8">
        {filteredPosts.map((post, index) => (
          <Card 
            key={post.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.body}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Post ID: {post.id}</span>
              <span>User ID: {post.userId}</span>
            </div>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && !loading && (
        <Card className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No posts found matching your search.
          </p>
        </Card>
      )}

      {posts.length > 0 && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            variant="primary"
          >
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApiDemo;