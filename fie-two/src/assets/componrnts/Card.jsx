import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-inner">
                    <h1 >{props.name}</h1>
                    <p >{props.head}</p>
                </div>
            </div>
            <h1>error test</h1>
        </>
    )
}

export default Card