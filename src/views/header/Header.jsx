import { Form } from "../../components/Form"

export const Header = () => {
  return (
    <div className="header-container bg-black">
          <div className="header-content px-global">
            <div className="header-content_container">
              <div className="header-content_title">
                <h1>Diplomado en</h1>
                <h1 className="bg-pink">Repostería profesional</h1>
              </div>
              <p>Aprende todo sobre este maravilloso mundo, desde el uso adecuado de harinas, hasta la preparación de cremas y natillas.</p>
            </div>
            <Form/>
        </div>
      </div>
  )
}
