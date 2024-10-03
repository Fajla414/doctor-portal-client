import React from 'react';

const BlogPost = ({ blog }) => {
    return (
        <div className='col-md-4'>
            <div className='px-4'>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <img src={blog.authorImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-8">
                        <h6 style={{ color: '#0FCFEC' }}>{blog.author}</h6>
                        <p>{blog.date}</p>
                    </div>
                </div>
                <p>{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;