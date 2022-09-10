import { Divider } from '@chakra-ui/react'
import React from 'react'
import Features from '../components/Features'

import Hero from '../components/Hero'
import Pricing from '../components/Pricing'

function Home() {
    return (
        <>           
            <Hero />

            <Features />
            
            <Divider />
            
            <Pricing />
        </>

    )
}

export default Home