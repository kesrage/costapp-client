import { useStore } from "effector-react";
import React from "react"
import { Link } from "react-router-dom";
import { $username } from "../../context/auth";
import { useTheme } from "../../hooks";

const Header = ({ costs }: any) => {
    const { switchTheme, theme } = useTheme()
    const username = useStore($username)

    return (
        <header className={`navbar navbar-dark bg-${theme === 'dark' ? 'dark' : 'primary'}`}>
            <div className="container">
                <h1 style={{ color: 'white' }}>Costs App</h1>
                {username.length ? <h2 style={{ color: 'white' }}>{username}</h2> : ''}
               

                    <button className='btn'>
                    Выход
                    </button> 
            </div>
        </header>
    )
};

export default Header;
