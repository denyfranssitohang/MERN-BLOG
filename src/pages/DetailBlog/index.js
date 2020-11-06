import React from 'react'
import { RegisterBg } from '../../assets'
import { Link } from '../../component/atoms'
import './detailBlog.scss'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </p>
            <Link title="Kembali ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
