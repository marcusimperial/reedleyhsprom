import Navbar from './Navbar';
import Post from './Post';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useApp } from './Context';
import { useEffect, useState } from 'react';

const Home = () => {

    const { posts } = useApp();
    const [post, setPost] = useState({});

    useEffect(() => {

        if (!posts.length) return;
        const post = posts.reduce((a, b) => new Date(a['Post Date']) > new Date(b['Post Date']) ? a : b);
        setPost(post);

    }, [posts])

    return (
        <div className="grid">
            <Navbar />
            <div className="grid items-center justify-items-center p-10 gap-10 bg-gradient">
                <div className="grid items-center justify-items-center">
                    <h1 className="text-9xl text-center leading-none text-cream font-['Elegante']">Lumiere Nights</h1>
                    <h1 className="text-7xl text-center text-cream font-['Kalivo']">An Evening Amidst the Stars</h1>
                </div>
                <h1 className="text-7xl text-center text-cream font-['Kalivo'] md:block hidden">THE SENIOR HIGH SCHOOL PROM</h1>
            </div>

            <Post post={post} />

            <div className="grid w-full p-6 gap-2 bg-blue gap-5">
                <div className="grid items-center justify-items-center">
                    <h1 className="text-9xl text-center text-cream font-['Elegante']">Meet the Prom Team</h1>
                </div>

                <div className="grid justify-items-center items-center border-b-4 border-cream">
                    <div className="border-b-4 border-cream">
                        <h1 className="text-6xl text-center text-cream font-['Kalivo']">The Committee Heads</h1>
                    </div>
                    <div className="grid items-center justify-items-center p-5">
                        <h1 className="text-5xl text-center text-cream font-['Kalivo']">Marcus Imperial</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Prom Head</h1>
                    </div>

                    <div className="grid justify-items-center items-center md:grid-cols-3">
                        <div className="grid items-center justify-items-center p-5">
                            <h1 className="text-5xl text-center text-cream font-['Kalivo']">Kimly Etolle</h1>
                            <h1 className="text-6xl text-center text-cream font-['Elegante']">Program Senior Head</h1>
                        </div>
                        <div className="grid items-center justify-items-center p-5">
                            <h1 className="text-5xl text-center text-cream font-['Kalivo']">Hannah Dela Cruz</h1>
                            <h1 className="text-6xl text-center text-cream font-['Elegante']">Operations Senior Head</h1>
                        </div>
                        <div className="grid items-center justify-items-center p-5">
                            <h1 className="text-5xl text-center text-cream font-['Kalivo']">Sophie Yau Lim</h1>
                            <h1 className="text-6xl text-center text-cream font-['Elegante']">Design Senior Head</h1>
                        </div>
                        <div className="grid items-center justify-items-center p-5">
                            <h1 className="text-5xl text-center text-cream font-['Kalivo']">Aine Uy</h1>
                            <h1 className="text-6xl text-center text-cream font-['Elegante']">Program Junior Head</h1>
                        </div>
                        <div className="grid items-center justify-items-center p-5">
                            <h1 className="text-5xl text-center text-cream font-['Kalivo']">Netra Sangani</h1>
                            <h1 className="text-6xl text-center text-cream font-['Elegante']">Operations Junior Head</h1>
                        </div>
                        <div className="grid items-center justify-items-center p-5">
                            <h1 className="text-5xl text-center text-cream font-['Kalivo']">Atasha Santos</h1>
                            <h1 className="text-6xl text-center text-cream font-['Elegante']">Design Junior Head</h1>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 justify-items-center items-center gap-2">
                    <div className="grid justify-items-center items-center">
                        <div className="border-b-4 border-cream">
                            <h1 className="text-6xl text-center text-cream font-['Kalivo']">Program Committee</h1>
                        </div>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Sandro Mapa</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Bianco Mariazeta</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Bell Betana</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Brent Dela Cruz</h1>
                    </div>
                    <div className="grid justify-items-center items-center">
                    <div className="border-b-4 border-cream">
                            <h1 className="text-6xl text-center text-cream font-['Kalivo']">Operations Committee</h1>
                        </div>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Maggie Pittard</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Luisa San Gabriel</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Hannah Balili</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Yanna Velasco</h1>
                    </div>
                    <div className="grid justify-items-center items-center">
                        <div className="border-b-4 border-cream">
                            <h1 className="text-6xl text-center text-cream font-['Kalivo']">Design Committee</h1>
                        </div>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Harper Antonio</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Yunseo Choi</h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Nicci Ong </h1>
                        <h1 className="text-6xl text-center text-cream font-['Elegante']">Gab Clavines</h1>
                    </div>
                </div>
            </div>        

            <div className="grid p-6 bg-lightgreen items-center justify-items-center shadow-black">
                <h1 className="text-6xl text-center text-cream font-['Kalivo']">Stay Posted! Follow the Student Council Accounts</h1>
                <div className="grid gap-2 md:grid-cols-3 w-full">
                    <div onClick={() => window.open('https://sites.google.com/risfamily.com/risstudentcouncil/home?authuser=0', '_blank')} className="grid items-center justify-items-center border border-cream rounded-lg p-4 gap-3 select-none">
                        <FaGoogle className="text-cream" size="150px" />
                        <h1 className="text-5xl text-center text-cream font-['Kalivo']">Student Council Google Site</h1>
                    </div>
                    <div onClick={() => window.open('https://www.facebook.com/ReedleySC', '_blank')} className="grid items-center justify-items-center border border-cream rounded-lg p-4 gap-3 select-none">
                        <FaFacebook className="text-cream" size="150px" />
                        <h1 className="text-5xl text-center text-cream font-['Kalivo']">Student Counci Page</h1>
                    </div>
                    <div onClick={() => window.open('https://www.instagram.com/riscouncil', '_blank')} className="grid items-center justify-items-center border border-cream rounded-lg p-4 gap-3 select-none">
                        <FaInstagram className="text-cream" size="150px" />
                        <h1 className="text-5xl text-center text-cream font-['Kalivo']">riscouncil</h1>
                    </div>
                </div>
            </div>   

        </div>
    )
};

export default Home;