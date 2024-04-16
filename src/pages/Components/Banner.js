import { useState } from "react";
import Button from "./Button";

const Banner = () => {

    const [color, setColor] = useState('ffffff');


    return (
        <div className='h-96' style={color === 'ffffff' ? {backgroundColor: `#${color}`, color: 'black'} : {backgroundColor: `#${color}`, color: 'white'}}>
            <div className="lg:text-9xl lg:ml-48 md:text-8xl md:ml-36 sm:text-7xl sm:ml-24 xsm:text-6xl xxsm:text-5xl ml-12 pt-12 text-5xl" style={color.slice(0,2)==='ff' ? {color: 'black'}: {color: 'white'}} >
                <span className="font-mono">#</span>{color}
                <div className="flex flex-wrap">
                    <div className="mr-8">
                        <Button label="Randomize" color={color} change={setColor}/>
                    </div>
                    <div>
                        <Button label="Copy Hex Code" color={color}/>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Banner;