import * as React from 'react';
import './Blogs.css';
import AuthorPreview from "../AuthorPreview";

const authorNames = ['Duke Hill', 'Stuart Mackenzie', 'Ambrose Kenny-Smith', 'Josh Homme', 'Sarah Bonito', 'John Dwyer', 'Abby Hill', 'Jackson Oleyar', 'Zabrina Lewis', 'Ben Goddard', 'Sam Harkness'];

export default function Blogs() {
    return (
        <div style={{marginLeft: 30}}>
            <h1>Browse Blog Posts By</h1>
            {authorNames.map((name, index) => (
                (
                    <li>
                        <a href={"/Blog/"+(index)}>
                            {name}
                        </a>
                    </li>
                )
            ))}
        </div>
    );
}
