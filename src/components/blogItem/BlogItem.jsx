import { CircleX } from 'akar-icons';
import './blogItem.css';

const BlogItem = ({ id, title, text, src, date, setBposts }) => {
    const onDelete = (id) => {
        setBposts((prev) => {
            const newArr = prev.filter((post) => post.id !== id);
            localStorage.setItem('posts', JSON.stringify(newArr));
            return newArr;
        });
    };

    return (
        <div className='blog_item'>
            <CircleX color='gray' onClick={() => onDelete(id)} />
            <div className='blog_text'>
                <p className='blog_text__date'>{date}</p>
                <h3>{title}</h3>
                <p className='blog_text__content'>{text}</p>
            </div>
            <div className='blog_img'>
                <img src={src} alt='' />
            </div>
        </div>
    );
};

export default BlogItem;
