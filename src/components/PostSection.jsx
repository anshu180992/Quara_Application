import { useState } from 'react';
import Avatar from "react-avatar";
import close from '../assets/close.png'; // Ensure this is the correct path
import share from '../assets/share.png';
import comment from '../assets/comment.png';

const PostSection = () => {
  const [posts, setPosts] = useState([
    //  posts data 
    {
      id: 1,
      name: 'Pratik Joshi',
      profileImage: 'https://media.istockphoto.com/id/2202723836/vector/man-portrait.jpg?s=1024x1024&w=is&k=20&c=wxYwUDzYwXSVqP-mtTCAqR6X5tkZj-zpJBsxeXYWkLM=', // You can provide profile image here
      title: 'Movie Night Review',
      content: 'Just watched the latest movie and it was amazing!',
      upvotes: 45100,
      downvotes: 31,
      comments: 300,
      shares: 14,
      Qualifications: 'Web Devloper',
      timeAgo: '5d',
      image: "https://images-cdn.ubuy.co.in/67ccbb6bfe123c67447a6df0-ant-man-movie-poster-antman-and-the.jpg" // Dynamic image URL for each post
    },
    
  {
    id: 2,
    name: 'Amazon Web Services (AWS)',
    profileImage: 'https://www.eu-startups.com/wp-content/uploads/2021/06/1611785470095.jpeg', // You can provide profile image here
    title: 'AWS is how.',
    content: 'AWS removes the complexity of building, training, and deploying machine learning models at any scale.',
    upvotes: 4200,
    downvotes:52 ,
    comments: 451,
    shares: 897,
    Qualifications: 'Sponsored',
    timeAgo: '2y',
    image: 'https://www.fiesttech.com/images/blog/1684151471.jpeg' // Dynamic image URL for each post
  },
  {
    id: 3,
    name: 'Darius Grigorjevas',
    profileImage: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1673453535.jpg?resize=1200:*', // You can provide profile image here
    title: 'https://www.quora.com/Whats-the-easiest-way-to-make-money-online',
    content: `There is a countless number of simple ways you can make money online. They don't involve any heavy lifting, extreme conditions, or even leaving your house for that matter. The only thing is that when it comes to the internet, there are so many options to choose from, it's impossible to choose just one! Let me help you out a little by presenting a few of the easiest ways to earn money that don't involve any significant investments, but still can have quite a big profit margin.`,
    upvotes:612 ,
    downvotes:21 ,
    comments: 126,
    shares: 12,
    Qualifications:   `Head of Customer Success at Hostinger.com  `,
    timeAgo: 'Jun 30',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-6f85081cddef80f7dda90d9aa0934bf9-lq' // Dynamic image URL for each post
  },
  {
    id:4 ,
    name: 'Mansoor Azam',
    profileImage: 'https://pbs.twimg.com/profile_images/470091447887077376/ZL5stHAG_400x400.jpeg', // You can provide profile image here
    title: "What is full stack developer examples?",
    content: "A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)",
    upvotes: 448,
    downvotes: 24,
    comments: 452,
    shares: 2433,
    Qualifications: 'Bachelors Of Science in Computer Science & C++ (C plus plus), Abasyn University Islamabad Campus (Graduated 2023)',
    timeAgo: 'Sep 18',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-f8ad2206b6dbffa556703babcdd7c353' // Dynamic image URL for each post
  },
  ]);

  const handleUpvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already downvoted, reverse downvote and upvote it
        if (post.dvoted) {
          post.dvoted = false;
          post.downvotes -= 1;
        }
        // Toggle upvote
        post.upvotes = post.upvoted ? post.upvotes - 1 : post.upvotes + 1;
        post.upvoted = !post.upvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  
  const handleDownvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already upvoted, reverse upvote and downvote it
        if (post.upvoted) {
          post.upvoted = false;
          post.upvotes -= 1;
        }
        // Toggle downvote
        post.downvotes = post.dvoted ? post.downvotes - 1 : post.downvotes + 1;
        post.dvoted = !post.dvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  

  const toggleContent = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.expanded = !post.expanded;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-gray-100 m-3 h-fit border-spacing-1 rounded-lg relative text-gray-600 text-sm z-0">
      {posts.map(post => (
        <div key={post.id} className="card bg-white p-4 mb-3 border rounded-lg shadow-lg relative">
          {/* Header */}
          <div className="flex w-fit">
            <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" src={post.profileImage} name={post.name} />
            <h1 className="ml-3 mt-0.5 font-semibold">{post.name}</h1>
            <button className="font-semibold ml-2 cursor-pointer relative left-2 text-blue-500 h-6 w-6 hover:underline rounded-full flex items-center justify-center">·Follow</button>

            {/* Close Button */}
            <button className="absolute top-2 right-2 h-6 w-6 hover:bg-gray-200 rounded-full flex items-center justify-center">
              <img src={close} alt="Close" className="h-5 w-5" />
            </button>
          </div>
          <div className="relative -top-2 left-11 text-xs font-semibold text-gray-500">
            <span>{post.Qualifications}</span> · <span>{post.timeAgo}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold mt-3">{post.title}</h1>

          {/* Content */}
          <div className="mt-2">
  {post.content.length > 150 ? (
    <>
      {post.expanded ? post.content : `${post.content.slice(0, 150)}...`}
      <button
        onClick={() => toggleContent(post.id)}
        className="ml-2 text-blue-500 hover:underline"
      >
        {post.expanded ? "Show Less" : "Show More"}
      </button>
    </>
  ) : (
    post.content
  )}
</div>


          {/* Image */}
          <img src={post.image} alt={post.title} className="mt-3 w-full h-auto rounded-md" />

          {/* Interaction Section */}
          <div className="flex items-center text-gray-600 text-sm mt-2 relative">
            {/* Upvote Button */}
            <div className="flex items-center space-x-1 border rounded-full rounded-r-none px-3 py-1 mr-0 hover:bg-gray-100 cursor-pointer">
              <button onClick={() => handleUpvote(post.id)} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-lg ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z" />
                </svg>
                <span className={`ml-1 font-semibold ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}>
                  Upvote·{post.upvotes.toLocaleString()}
                </span>
              </button>
            </div>

            {/* Downvote Button */}
            <div
              onClick={() => handleDownvote(post.id)}
              className="flex items-center border rounded-full rounded-l-none pr-1 py-1 ml-0 hover:bg-gray-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 ${post.dvoted ? "text-red-500" : "text-gray-500"}`}
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z"
                  transform="rotate(180 8 8)"
                />
              </svg>
              <span className={`ml-1 font-semibold ${post.dvoted ? "text-red-500" : "text-gray-500"}`}>
                ·{post.downvotes.toLocaleString()}
              </span>
            </div>

            {/* Comment Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={comment} className="h-5 w-5 ml-1 text-gray-600" />
              <span className="font-semibold">{post.comments}</span>
            </div>

            {/* Share Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={share} className="h-5 w-7 text-lg" />
              <span className="font-semibold">{post.shares}</span>
            </div>

            {/* More Options */}
            <div className="flex absolute right-0 items-center hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <span className="text-2xl text-gray-600">⋯</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
