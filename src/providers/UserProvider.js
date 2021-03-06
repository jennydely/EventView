import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async userAuth => {
            //const user = await generateUserDocument(userAuth);
            if (userAuth)
                setUser({
                    name: userAuth.displayName,
                    email: userAuth.email,
                    photoURL: userAuth.photoURL,
                    uid: userAuth.uid
                });
        });
    }, []);
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
