import React, { useEffect, useState } from 'react'



const Main = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const getUser = () => {
            fetch("https://zwvqkv-3333.preview.csb.app/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
        if (user) {
            localStorage.setItem('token', user.token);
        }
    }, []);
    return (
        <div>Dashboard</div>
    )
}

export default Main;