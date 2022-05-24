import React from 'react'
import './style.css'
import heroImg from '../../assets/hero.png'
import pattern1 from '../../assets/boxbg.png'
import { BsFillPlayFill } from "react-icons/bs";
import Button from '../button';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h3>We provide a much comprehensive  debt collection service for our customers</h3>
                <p>Our professionals have a combined 85 years in debt recovery efforts that have seen the recovery of more than N19Billion in debt from very unwilling debtors.
                    We use the most advanced techniques to trace debtors and recover money owed. We also offer an alternative method for loan recoveries by allowing debtors provide value worth the amount they are unable to pay.</p>
                <div className="hero-left-btns">
                    <Button text='Hire Us' />
                    <a href='#video' className='btn2'><BsFillPlayFill className='play-icon'/><span>Watch a Video</span></a>
                </div>
            </div>
            <div className="hero-right">
                <img src={heroImg} alt="hero-right-pic"/>
            </div>
            <div className="pattern1">
                <img src={pattern1} alt="" />
            </div>
        </div>
    )
}

export default Hero
