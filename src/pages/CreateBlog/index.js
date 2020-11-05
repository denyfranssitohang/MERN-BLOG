import React from 'react'
import { Button, Input, TextArea, Upload, Gap } from '../../component'
import './createBlog.scss'

const CreateBlog = () => {
    return (
        <div className="blog-post">
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" />
            </div>
            <Gap height={50} />
        </div>
    )
}

export default CreateBlog
