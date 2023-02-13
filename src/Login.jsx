import { useEffect, useState } from "react";
import { useApp } from "./Context";
import { GoogleAuthProvider, signInWithRedirect, getAuth } from "firebase/auth";
import { ColorRing } from "react-loader-spinner";

const Login = () => {
    const { auth } = useApp();
    const [transit] = useState(localStorage.getItem('transit'));
    useEffect(() => {
        if (transit || auth) return;
        signInWithRedirect(getAuth(), new GoogleAuthProvider());
        localStorage.setItem('transit', 'transit');
    }, [auth]);

    return (
        <div className="flex h-screen items-center place-content-center">
            <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
        </div>
    )
};

export default Login;