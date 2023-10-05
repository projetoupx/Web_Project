import React from 'react';

export default function Card(props){
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    );
}