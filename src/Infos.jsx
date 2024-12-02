import html from "./Images/html.png";
import css from "./Images/css.png";
import js from "./Images/js.png";
import react from "./Images/react.png";
import vite from "./Images/vite.png";
import figma from "./Images/figma.png";
export default function Infos() {
    return (<>
        <div className="divbottom">
            <h2 className="textbottom">
            <img className="iconsbottom" src={html}></img>
            HTML
            </h2 >
            <h2 className="textbottom">
            <img className="iconsbottom" src={css}></img>
            CSS
            </h2>
            <h2 className="textbottom">
            <img className="iconsbottom" src={js}></img>
            JAVASCRIPT
            </h2>
            <h2 className="textbottom">
            <img className="iconsbottom" src={react}></img>
            REACT
            </h2>
            <h2 className="textbottom">
            <img className="iconsbottom" src={vite}></img>
            VITE
            </h2>
            <h2 className="textbottom">
            <img className="iconsbottom" src={figma}></img>
            FIGMA
            </h2>
           
        </div></>)
}