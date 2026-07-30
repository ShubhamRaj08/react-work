import React from 'react'
// import Bookmark from 'lucide-reactnpm'
import './Mycards.css'
const Mycards = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-inner">
                    {/* <Bookmark /> */}
                    <h1>{props.username}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </>
    )
}

export default Mycards