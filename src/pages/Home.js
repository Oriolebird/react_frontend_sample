import * as React from 'react';
import './Home.css';
import {useEffect, useState} from "react";
import AuthorPreview from "../AuthorPreview";

export default function Home() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        function getBlogPostApi() {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => res.json())
                .then((res) => {
                    setBlogPosts(res);
                })
                .catch((error) => alert("Error " + error));
        }
        getBlogPostApi();
    }, []);

    return (
        <div>
            <p className="app-text1">Welcome to the Levvel food blog! Browse some of the blogs from our top authors for simple, delicious recipes.</p>
            {blogPosts.map((cardItem) => (
                cardItem.id%10 === 1 //Only show the first post from each user (api provides 10 each)
                ? (
                    <div key={cardItem.id}>
                        <AuthorPreview data={cardItem} />
                    </div>
                )
                : null
            ))}
        </div>
    );
}
