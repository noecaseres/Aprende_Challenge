import { Logo } from "../../assets"
import { Form } from "../form/Form"

export const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="header">
          <div className="header_bgimg"></div>
          <div className="header-content px-global">
            <h1>Diplomado en</h1>
            <h1 className="bg-pink">Repostería profesional</h1>
            <p>Aprende todo sobre este maravilloso mundo, desde el uso adecuado de harinas, hasta la preparación de cremas y natillas.</p>
            <Form/>
        </div>
      </div>
    </div>
  )
}
