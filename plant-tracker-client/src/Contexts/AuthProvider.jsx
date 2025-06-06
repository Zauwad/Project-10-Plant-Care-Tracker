import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({ children }) => {
    const [plantData, setPlantData] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://plant-tracker-server-phi.vercel.app/allplants')
            .then(res => res.json())
            .then(data => {
                setPlantData(data)
                setLoading(false)
            })
    }, [])


    // FIREBASE
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('user ->', currentUser)
            setUser(currentUser)
        }
        else {
            console.log('user?', currentUser)
        }
    })

    const LogOut = () => {
        signOut(auth)
            .then(() => {
                console.log('user LoggedOut')
                window.location.reload();
            })
    }

    const provider = new GoogleAuthProvider();
    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }




    const userinfo = {
        plantData,
        createUser,
        logIn,
        user,
        LogOut,
        googleLogIn,
        loading
    }
    return (
        <AuthContext value={userinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;