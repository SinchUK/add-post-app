import BlogItem from '../blogItem/BlogItem';

import './main.css';

const Main = ({ setBposts, bPosts }) => {
    console.log(typeof bPosts, 'bposts main');

    const postsItems = bPosts.map((item) => {
        return (
            <BlogItem
                setBposts={setBposts}
                key={item.id}
                date={item.date}
                title={item.title}
                text={item.text}
                src={item.src}
                id={item.id}
            />
        );
    });

    return (
        <div className='blog'>
            <div className='blog_items'>{bPosts && postsItems}</div>
        </div>
    );
};

export default Main;
