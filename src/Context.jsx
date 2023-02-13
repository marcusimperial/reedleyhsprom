import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const AppValues = createContext();
export const useApp = () => useContext(AppValues);

const AppContext = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem('auth'));
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        const split = pathname.split('/')[1];
        if (split === 'login' && auth === 'auth') return navigate('/');
        if (split !== 'login' && auth !== 'auth') return navigate('/login');
    }, [pathname, auth]);

    useEffect(() => onAuthStateChanged(getAuth(), user => {
        if (user) if (!user?.email?.endsWith('risfamily.com')) {
            signOut(getAuth());
            window.alert('Please sign in using an risfamily account!');
        };
        setUser(user);
        const auth = user?.uid ? 'auth' : '';
        setAuth(auth);
        localStorage.setItem('auth', auth);
        localStorage.removeItem('transit');
    }), []);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            let posts = [];
            const { docs } = await getDocs(collection(getFirestore(), "posts"));
            for (const doc of docs) posts.push(doc.data());
            setPosts(posts); 
        })();
    }, []);

    const values = { auth, user, posts };
    return ( <AppValues.Provider value={values}>{children}</AppValues.Provider> );
};

export default AppContext;