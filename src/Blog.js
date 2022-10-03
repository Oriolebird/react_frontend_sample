import React, {Component, useEffect, useState} from "react";
import AuthorPreview from "./AuthorPreview";

const authorNames = ['Duke Hill', 'Stuart Mackenzie', 'Ambrose Kenny-Smith', 'Josh Homme', 'Sarah Bonito', 'John Dwyer', 'Abby Hill', 'Jackson Oleyar', 'Zabrina Lewis', 'Ben Goddard', 'Sam Harkness', 'Yasmin Momenian'];
const id = window.location.href.split('/')[4]

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
            <h1>Browse Posts by {authorNames[id]}</h1>
            {blogPosts.map((cardItem) => (
                cardItem.userId === (parseInt(id)+1)
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
