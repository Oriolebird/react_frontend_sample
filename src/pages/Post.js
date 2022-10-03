import React, {Component, useEffect, useState} from "react";
import './Post.css'

const authorNames = ['Duke Hill', 'Stuart Mackenzie', 'Ambrose Kenny-Smith', 'Josh Homme', 'Sarah Bonito', 'John Dwyer', 'Abby Hill', 'Jackson Oleyar', 'Zabrina Lewis', 'Ben Goddard', 'Sam Harkness', 'Yasmin Momenian'];
const id = window.location.href.split('/')[4]

export default function Post() {
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
            {blogPosts.map((cardItem) => (
                cardItem.id === (parseInt(id))
                    ? (
                        <div key={cardItem.id}>
                            <h1>{cardItem.title}</h1>
                            <span className="by-text">By </span><a className="author-text" href={"/Blog/"+(cardItem.userId-1)}>{authorNames[cardItem.userId-1]}</a>
                            <p className="card-text">{cardItem.body}</p>
                        </div>
                    )
                    : null
            ))}
        </div>
    );
}
