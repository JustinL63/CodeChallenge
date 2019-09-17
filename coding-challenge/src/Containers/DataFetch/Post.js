import React from 'react';


const post = (props) => (
    <article className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;