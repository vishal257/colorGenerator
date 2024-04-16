import style from '@/styles/style.module.css';
import { useState } from 'react';

const Button = ({label, color, change}) => {

    const [visible, setVisible] = useState(false);

    const rgbToHex = (r, g, b) => {
        return (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
      }

    const colorSelect = () => {
        const rr = Math.floor(Math.random()*255)+1;
        const gg = Math.floor(Math.random()*255)+1;
        const bb = Math.floor(Math.random()*255)+1;
        return [rr,gg,bb];
    }

    const buttonClick = (e) => {
        const value = e.target.innerText;
        switch (value){
            case 'Randomize':
                const [r,g,b] = colorSelect();
                change(rgbToHex(r,g,b));
                break;
            case 'Copy Hex Code':
                navigator.clipboard.writeText(color);
                setVisible(true);
                console.log('show');
                setTimeout(()=>{
                    setVisible(false);
                },3000);
                break;
        }
    }

    return (
        <div className='lg:text-3xl mt-12 md:text-2xl xxsm:text-lg text-sm relative'>
            <div className={visible ?  `${style.copyButton} ${style.show} `:`${style.copyButton}`} style={{color: 'white'}}>Copied</div>
            <button className={`sm:px-20 sm:py-2 px-10 py-3 ${style.buttonColor}`} style={{color: 'white'}} onClick={buttonClick}>{label}</button>
        </div>
    )
}

export default Button;