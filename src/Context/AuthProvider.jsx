import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { auth } from '../Firebase/FirebaseConfig';

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const {displayName, email, uid, photoURL} = user;
                setUser({displayName, email, uid, photoURL});
                setIsLoading(false);
                navigate('/')
                return;
            }
            else{
                setUser({});
                setIsLoading(false);
                if (window.location.pathname !== '/signup') {
                    navigate('/login'); 
                }
            }
        })

        return () => {
            unsubscribe();
        };
    }, [navigate]);

  return (
    <AuthContext.Provider value={{user}}>
        {isLoading ? <CircularProgress style={{ position: 'fixed', inset: 0 }}/> : children} 
    </AuthContext.Provider >
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // 'children' là một node và là bắt buộc
};

