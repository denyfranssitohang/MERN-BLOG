import React from 'react'
import { ICgithub } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <p className="logo-app">MERN-BLOG</p>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICgithub} />
                </div>                
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
