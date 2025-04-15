import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'Why Tech Empowers Youth',
      author: 'Salome C. V.',
      excerpt: 'Tech isn’t just coding — it’s problem-solving, storytelling, and community building...',
      content: 'Full article goes here. This part scrolls independently. You can fill it with any amount of content you want. It talks about how tech can empower youth by solving problems, creating opportunities, and learning new skills...'
    },
    {
      id: 2,
      title: 'The Future of Coding Education',
      author: 'Anya B.',
      excerpt: 'Coding is more than just syntax. It’s about creativity and the future of education...',
      content: 'Full article goes here. The future of coding education is exciting, as new methods and tools are being developed to teach coding in creative and effective ways...'
    }
    // Add more blogs as necessary
  ];

  const openBlog = (id) => {
    setActiveBlog(blogs.find(blog => blog.id === id));
  };

  const closeBlog = () => {
    setActiveBlog(null);
  };

  return (
    <div>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card" onClick={() => openBlog(blog.id)}>
            <div className="blog-card-title">{blog.title}</div>
            <div className="blog-card-author">{blog.author}</div>
            <div className="blog-card-excerpt">{blog.excerpt}</div>
          </div>
        ))}
      </div>

      {activeBlog && (
        <div id="blog-modal" className="blog-modal active">
          <div className="blog-modal-content">
            <button className="blog-modal-close" onClick={closeBlog}>
              &times;
            </button>
            <h2>{activeBlog.title}</h2>
            <div className="blog-content">
              <p>{activeBlog.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
