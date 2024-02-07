import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './aside.css';

const Aside = ({ setBposts, bPosts }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmit = () => {
        updatePosts();
    };

    const getWallpapper = async () => {
        const responce = await fetch(
            'https://source.unsplash.com/random/?funny',
        );
        return responce.url;
    };

    const updatePosts = async () => {
        const image = await getWallpapper();
        addPost(image);
    };

    const getCurrentDate = () => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        const monts = {
            1: 'January',
            2: 'February',
            3: 'Mart',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December',
        };
        return `${monts[month]} ${date},   ${year}`;
    };

    const addPost = (image) => {
        const newPost = {
            date: getCurrentDate(),
            id: uuidv4(),
            title,
            text,
            src: image,
        };

        let newPosts = [...bPosts, newPost];

        setBposts(newPosts);

        localStorage.setItem('posts', JSON.stringify(newPosts));

        setText('');
        setTitle('');
    };
    return (
        <div className='aside_content'>
            <form className='blog_form' action=''>
                <label htmlFor='title'>Insert Title:</label>
                <input
                    onChange={(event) => setTitle(event.target.value)}
                    name='title'
                    type='text'
                    value={title}
                    className='input_title'
                />
                <label htmlFor='title'>Write a main content: </label>
                <textarea
                    onChange={(event) => setText(event.target.value)}
                    type='textarea'
                    value={text}
                    className='input_text'
                />
            </form>
            <button onClick={onSubmit} type='submit'>
                Add blog
            </button>
        </div>
    );
};

export default Aside;
