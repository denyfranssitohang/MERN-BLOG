import React from 'react'
import './blogitem.scss'
import { Button } from '../../atoms'
import { useHistory } from 'react-router-dom'

const BlogItem = (props) => {
    const history = useHistory()
    const {image, title, name, body, date} = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                
            </div>
            <p className="buttonReview">
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </p>
        </div>
    )
}

export default BlogItem
