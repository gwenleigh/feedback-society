import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, ChevronDown, MessageSquare } from 'lucide-react';
import forumData from '../data/forumData';

const ForumCategory = ({ category, isExpanded, onToggle }) => {
  return (
    <div className="forum-category bg-white rounded-lg shadow-md mb-4" id={`category-${category.id}`}>
      <div className="bg-gray-100 rounded-t-lg padding-forum-title">
        <h2 className="text-xl font-bold">{category.name}</h2>
      </div>
      {category.forums.map((forum) => (
        <div id={`forum-${forum.id}`} key={forum.id}>
          <ForumItem forum={forum} />
        </div>
      ))}
    </div>
  );
};

const ForumItem = ({ forum }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="forum-card border-t border-gray-200 padding-forum-sub forum-item-color">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
        </div>
        <div className="flex-grow">
          <h3 className="forum-title text-lg text-blue-600">{forum.title}</h3>
          <p className="text-sm text-gray-600">{forum.description}</p>
          <img
            src={forum.image}
            alt="Forum related"
            className="mt-4 w-full object-cover fit-image"
            />
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <span className="mr-4">Recent Topics</span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 focus:outline-none"
            >
              {isExpanded ? (<ChevronUp size={16} />) : (<ChevronDown size={16} />)}
            </button>
          </div>
        </div>
        <div className="text-right flex-column">
          <div>{forum.posts} posts</div>
          <div>{forum.topics} topics</div>
        </div>
      </div>
      {isExpanded && forum.recentTopics && forum.recentTopics.length > 0 && (
        <div className="post mt-4 pl-8">
          <ul className="space-y-2">
            {forum.recentTopics.map((topic) => (
              <li key={topic.id} className="flex items-center transition-post-font">
                <MessageSquare className="text-gray-400 mr-2" size={16} />
                <Link
                  to={`/post/${topic.id}`}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {topic.title}
                </Link>

                <span className="ml-auto text-sm text-gray-500">
                  {topic.author}, {topic.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ForumStructure = ({ categories }) => {
    const [showTopics, setShowTopics] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        const updatePadding = () => {
            const header = document.querySelector('.navbar');
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        updatePadding(); // initial padding
        window.addEventListener('resize', updatePadding); //update padding on resize
        return () => {
            window.removeEventListener('resize', updatePadding);
        };
    }, []);

    const handleToggle = () => {
        setShowTopics(!showTopics);
    };
  
    const ScrollToForum = ({ targetId, label }) => {
      const handleScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      return (
        <button 
          onClick={handleScroll} className="btn scroll-to-forum-btn">
          {label}
        </button>
      );
    };

  return (
    <div className="max-w-4xl mx-auto margin-side theme-border" style={{ paddingTop: `${headerHeight * 1.5}px` }} ref={contentRef}>
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Community Safety Forum</h1>
        <p>Voice for safety, make the world a safer place to live</p>
        <div className="space-x-4">
          <div>
                <button 
                    className="text-blue-600 hover:underline bg-theme-color"
                    onClick={() => handleToggle(showTopics)}
                >Topics</button>
                    {showTopics && (
                        <div>
                            {categories.map((category) => (
                                <div key={category.id} className="m-2">
                                    <ScrollToForum 
                                      targetId={`category-${category.id}`} 
                                      label={<h6 className="font-semibold text-blue-600">{category.name}</h6>}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
          </div>
        </div>

        {categories.map((category) => (
                        <ForumCategory key={category.id} category={category} />
                ))}

      </div>
    </div>
  );
};

export default ForumStructure;