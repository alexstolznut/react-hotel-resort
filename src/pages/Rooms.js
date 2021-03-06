import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import { Link } from "react-router-dom";

import RoomsContainer from "../components/RoomContainer"




export default function Rooms() {
    
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="rooms">
                    <Link to="/">
                        <button className="btn-primary">
                            Return Home
                        </button>
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer></RoomsContainer>
            
        </div>
    )
}
