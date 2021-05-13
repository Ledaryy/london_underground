import React, { Component } from 'react'
import { MenuItems } from "./FooterMenuItems";
import './Footer.css'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
  


    render() {
        return (
            <div>
                <div className="footer-style">
                <ul className='nav-menu-bottom'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a 
                                    className={item.cName} 
                                    href={item.url} 
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                </div>
            </div>
        )
    }
}

export default Footer;