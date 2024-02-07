import { useEffect, useState } from 'react';
import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Title from './components/title/Title';
import posts from './db';

function App() {
    const [bPosts, setBposts] = useState(posts);

    // const setLocalStorage = (posts) => {
    //     localStorage.setItem('posts', JSON.stringify(posts));
    // };

    const getLocalPosts = () => {
        const localPosts = JSON.parse(localStorage.getItem('posts'));

        if (!localPosts) return [];

        return localPosts;
    };

    useEffect(() => {
        // setLocalStorage(bPosts);
        setBposts(getLocalPosts());
    }, []);

    console.log(bPosts, 'App');

    return (
        <div className='App'>
            <Header />
            <Title />
            <div className='main_content'>
                <Main setBposts={setBposts} bPosts={bPosts} />
                <Aside setBposts={setBposts} bPosts={bPosts} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
