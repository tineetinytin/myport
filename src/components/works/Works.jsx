import React from 'react';
import "./works.scss";
import PortList from "../portfolioList/PortfolioList";
import {GitHub} from '@material-ui/icons';
import { products } from "../../data";

export default function Works() {

    
    return (
        <div className="works" id="works">
            <div className="text">
            <h1>Portfolio</h1>
            </div>
            <div className="port-list">
            {products.map((item) => (
                <PortList key={item.id} img={item.img} link={item.link} />
            ))}
            </div>
        
        </div>
    )
}
