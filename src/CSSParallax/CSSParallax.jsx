import React, {Component} from 'react'

import './CSSParallax.css'

function CSSParallax () {
        return (
            <div className="CSSParallax">

                {/* our container elements are what show the images for our parallax effect */}
                <div className="container">
                    {/* The video tag can't use the parallax effect in the same way, as you can see with this example. This is because the container needs a background image, not a video tag as a child. */}

                    {/* <video autoplay="true" loop >
                        <source src='https://www.videvo.net/videvo_files/converted/2014_08/preview/Rain_Fire.mov57604.webm' type="video/mp4"/>
                    </video> */}
                </div>

                    {/* the separator elements will contain all of our information about our page, including buttons, CTAs, etc */}
                    <div className="separator">
                        <h1>NEVER</h1>
                    </div>

                <div className="container"></div>

                    <div className="separator">
                        <h1>GONNA</h1>
                    </div>

                <div className="container"></div>

                    <div className="separator">
                        <h1>GIVE YOU UP</h1>
                    </div>

                <div className="container"></div>

                    <div className="separator">
                        {/* #sorrynotsorry #hadtobedone */}
                        <h1>NEVER GONNA LET YOU DOWN!!!</h1>
                        <h2>Never gonna run around and desert you...</h2>
                        <h2>#rickroll #rickastley #TBT #gg #nevergonnagiveyouup #nevergonnaletyoudown</h2>
                    </div>
                
            </div>
        )
}

export default CSSParallax