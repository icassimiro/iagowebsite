import react from "./Images/react.png";
import figma from "./Images/figma.png";
import iago from "./Images/iago.png";
import logo from "./Images/logo.png";
import vhtml from "./Images/vhtml.png";
import vcss from "./Images/vcss.png";
import vjs from "./Images/vjs.png";
import vreact from "./Images/vreact.png";
import vvite from "./Images/vvite.png";
import vfigma from "./Images/vfigma.png";


export default function Section() {
    return (<>
        <div className="divsection">
            <div>
                <img className="logo" src={logo}></img>
                <h2 className="name">IAGO CASSIMIRO</h2>
                <h3 className="description">Desenvolvedor <strong className="strong">Front-End</strong> e designer de <strong className="strong">Interface</strong>. Combinando tecnologia
                    e design em <strong className="strong">ReactJS</strong> e <strong className="strong">Figma</strong>, desenvolvo soluções <strong className="strong">web</strong> que equilibram estética e performance, proporcionando eficiência e resultados para
                    cada projeto.</h3>
                <div><img className="reactjs" src={react}></img>
                    <h3 className="textreact"><strong className="strong">ReactJS</strong  > é uma biblioteca <strong className="strong">JavaScript</strong>, desenvolvida pelo <strong className="strong">Facebook</strong>, que permite criar interfaces de usuário (<strong className="strong">página web</strong>) altamente performáticas e escaláveis.</h3></div>
                <div><img className="figmaicon" src={figma}></img>
                    <h3 className="textreact"><strong className="strong">Figma</strong> é uma plataforma de <strong className="strong">design</strong>, que permite criar protótipos (<strong className="strong">modelos</strong>) de interfaces de usuário (<strong className="strong">página web</strong>), altamente personalizados em tempo real.</h3>
                </div>
            </div>
            <div><img className="iago" src={iago}></img></div>
            <div className="divitens">
                <img className="vitens" src={vfigma}></img>
                <img className="vitens"  src={vvite}></img>
                <img className="vitens"  src={vreact}></img>
                <img className="vitens"  src={vjs}></img>
                <img className="vitens"  src={vcss}></img>
                <img className="vitens"  src={vhtml}></img>
            </div>
        </div>
    </>

    )
}