import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';
import Navbar from './Navbar';
import { useApp } from "./Context";


const Pages = () => {

    const location = useLocation();
    const { posts } = useApp();
    const [filteredPosts, setFilteredPosts] = useState([]);

    const labelIndex = {
        '/announcements': 'Important Info!',
        '/documents': 'Must-Read Docs!',
        '/promotions': 'Latest from Prom!'
    };

    useEffect(() => {

        const index = {
            '/announcements': 'Announcement',
            '/documents': 'Document Release',
            '/promotions': 'Promotion'
        };

        const match = index[location.pathname];

        if (!match || !posts.length) return;

        const filteredPosts = posts.filter((post) => {
            const tags = post['Post Tags']?.split(',');
            return tags?.includes(match);
        });

        setFilteredPosts(filteredPosts);

    }, [location.pathname, posts]);


    return (
        <div className="grid">
            <Navbar />
            <div className="grid items-center justify-items-center p-10 bg-gradient">
                <div className="grid items-center justify-items-center">
                    <h1 className="text-8xl text-center leading-none text-cream font-['Elegante']">{labelIndex[location.pathname]}</h1>
                </div>
            </div>
            {filteredPosts.map((post, i) => (<Post post={post} i={i} key={`p${i}`} />))}
        </div>
    )
};

export default Pages;