import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import ButtonAppBar from "./ButtonAppBar";
import Blog from "./Blog";
import Post from "./pages/Post";

export default function App() {
    return (
        <BrowserRouter>
            <ButtonAppBar/>
            <div key="centerPane" style={{
                display: 'flex',
                width: '80%',
                margin: 'auto',
                backgroundColor: 'whitesmoke',
                boxShadow: '3px 5px 3px #888888, -3px 5px 3px #888888',
            }}>
                <div key="centerContent"
                    style={{
                        margin: 10
                    }}
                >
                    <Routes>
                            <Route index element={<Home />} />
                            <Route path="blogs" element={<Blogs />} />
                            <Route path="blog/:id" element={<Blog />} />
                            <Route path="post/:id" element={<Post />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

