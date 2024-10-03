import React from 'react';
import gomez from '../../../images/gomez.png';
import wilson from '../../../images/wilson.png';
import aliza from '../../../images/aliza.png';
import BlogPost from '../BlogPost/BlogPost';

const blogsData = [
    {
        id: 0,
        title: 'Check at least a doctor in a year for good teath.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A blanditiis ratione fugit, est praesentium quod libero similique debitis voluptatibus iure suscipit vel at, consectetur reprehenderit voluptatem! Quidem ex deserunt itaque?',
        author: 'Dr. Cudi',
        authorImg: gomez,
        date: '23 April 2019'
    },
    {
        id: 1,
        title: 'Check at least a doctor in a year for good teath.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A blanditiis ratione fugit, est praesentium quod libero similique debitis voluptatibus iure suscipit vel at, consectetur reprehenderit voluptatem! Quidem ex deserunt itaque?',
        author: 'Dr. Cudi',
        authorImg: aliza,
        date: '23 April 2019'
    }
    ,
    {
        id: 2,
        title: 'Check at least a doctor in a year for good teath.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A blanditiis ratione fugit, est praesentium quod libero similique debitis voluptatibus iure suscipit vel at, consectetur reprehenderit voluptatem! Quidem ex deserunt itaque?',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    }
]

const Blogs = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="section-header text-center my-5 py-5">
                    <h5 style={{ color: '#0FCFEC' }}>OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck row">
                    {
                        blogsData.map(blog => <BlogPost key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;