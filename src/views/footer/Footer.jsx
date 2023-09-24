import { AppStore, FacebookIcon, GooglePlay, InstagramIcon, LinkedInIcon, TikTokIcon } from "../../assets"

export const Footer = () => {
  return (
    <div className="footer bg-black font-white">
        <div className="footer-grid">
            <div className="footer-layout-items">
                <p className="p1-semibold">Acerca de Aprende</p>
                <ul className="footer-grid-item_flex">
                    <li>Sobre nosotros</li>
                    <li>Empresas</li>
                    <li>Prensa</li>
                    <li>Sé parte del equipo</li>
                </ul>
            </div>          
            <div className="footer-layout-items">
                <p className="p1-semibold">Explorar</p>
                <ul className="footer-grid-item_flex">
                    <li>Historias de exito</li>
                    <li>Docentes</li>
                    <li>Blog</li>
                    <li>Pagos</li>
                </ul>
            </div>
            <div className="footer-layout-items">
                <p className="p1-semibold">Sedes</p>
                <ul>
                    <li>US | 95 Merrick Way, Suite 300, Coral Gables</li>
                    <li>MX | Río Sena 63, Piso 1, Cuauhtémoc</li>
                    <li>CO | Calle 127a 53a 45 Torre 2 piso 7 OF 145-147</li>
                </ul>
            </div>
            <div className="footer-layout-items">
                <p className="p1-semibold">Categorías</p>
                <ul>
                    <li>Gastronomía</li>
                    <li>Emprendimiento</li>
                    <li>Hospitalidad y eventos</li>
                    <li>Bienestar</li>
                    <li>Oficios</li>
                    <li>Belleza</li>
                </ul>
            </div>
        </div>
        <div className="footer-media">
            <div className="footer-media_stores cursor-pointer">
                <img src={AppStore}/>
                <img src={GooglePlay}/>
            </div>
            <div className="footer-media_redes dflex-row">
                <div className="dflex-row align-items-center cursor-pointer">
                    <img src={FacebookIcon}/><p className="p2">Facebook</p>
                </div>
                <div className="dflex-row align-items-center cursor-pointer">
                    <img src={InstagramIcon}/><p className="p2">Instagram</p>
                </div>
                <div className="dflex-row align-items-center cursor-pointer">
                    <img src={LinkedInIcon}/><p className="p2">LinkedIn</p>
                </div>
                <div className="dflex-row align-items-center cursor-pointer">
                    <img src={TikTokIcon}/><p className="p2">TikTok</p>
                </div>
            </div>
            <div className="footer-media_legal">
                <ul className="footer-media_legal_ul">
                    <li className="p2">Política de Privacidad</li>
                    <li className="p2">Términos y Condiciones</li>
                    <li className="p2">© 2022 Aprende Institute</li>
                </ul>
                
            </div> 
        </div>
    </div>
  )
}
