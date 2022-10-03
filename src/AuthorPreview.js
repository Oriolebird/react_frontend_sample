import React, { Component } from "react";
import './AuthorPreview.css'

const authorNames = ['Duke Hill', 'Stuart Mackenzie', 'Ambrose Kenny-Smith', 'Josh Homme', 'Sarah Bonito', 'John Dwyer', 'Abby Hill', 'Jackson Oleyar', 'Zabrina Lewis', 'Ben Goddard', 'Sam Harkness', 'Yasmin Momenian'];

export default class AuthorPreview extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <a className="title-text" href={"/post/"+this.props.data.id}>'{this.props.data.title}'</a><br/>
                    <span className="by-text">By </span><a className="author-text" href={"/Blog/"+(this.props.data.userId-1)}>{authorNames[this.props.data.userId-1]}</a>
                    <p className="card-text">{this.props.data.body}</p>
                </div>
            </div>
        );
    }
}