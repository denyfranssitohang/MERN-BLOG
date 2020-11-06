import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'
import { Button } from '../../atoms'
import { useHistory } from 'react-router-dom'

const BlogItem = () => {
    const history = useHistory()
    
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum.</p>
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>            
        </div>
    )
}

export default BlogItem
