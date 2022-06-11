import React from 'react';

const Blog = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/gTg475S/SL-070720-32260-36.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='Coming Soon' />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to My Blogs!</h1>
                    <p className="py-6">I have a lot of thoughts about the blog. I will start with a lot of things very soon. Stay tuned until then.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;