import { Form } from "../../components/Form"

export const Header = () => {
  return (
    <div className="header-container bg-black">
      <div className="header-content px-global">
            <div className="header-content_container dflex-col just-content-end">
              <div className="header-content_title">
                <h1>Diplomado en</h1>
                <h1 className="bg-pink">Repostería profesional</h1>
              </div>
              <h4>Aprende todo sobre este maravilloso mundo, desde el uso adecuado de harinas, hasta la preparación de cremas y natillas.</h4>
            </div>
            <Form/>
        </div>
      </div>
  )
}
