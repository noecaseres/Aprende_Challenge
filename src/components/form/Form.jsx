import { useState } from "react";



export const Form = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
      setIsChecked(!isChecked);
    };

  return (
    <div className="form-container bg-white">
        <div className="form-container_content">
            <h4>¡Recibe información de precios y becas!</h4>
            <p>Al recibir tu información, uno de nuestros asesores académicos se comunicará contigo</p>
        </div>
        <form>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Apellido"/>
            <input type="email" placeholder="Correo electrónico"/>
            <div className="checkbox-container">
                <div
                    className={`checkbox ${isChecked ? "checked" : ""}`}
                    onClick={handleCheckboxClick}
                >
                    <div className="checkbox">
                        {isChecked && <div className="check-icon"></div>}
                    </div>
                </div>
                <p>Recibe mensajes vía WhatsApp y Sms sobre nuestros diplomados.</p>
            </div>
        </form>
    </div>
  )
}
