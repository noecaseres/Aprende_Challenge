import { useEffect } from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export const Form = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [showSecondStep, setshowSecondStep] = useState(false);
    const [phoneValue, setPhoneValue] = useState("");
    const [areaDeInteres, setAreaDeInteres] = useState("");

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
    });

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setshowSecondStep(true)
    }

    const handleSecondSubmit = (e) => {
        e.preventDefault();
            const fullFormData = {
        ...formData,
        telefono: phoneValue, 
        areaDeInteres: areaDeInteres,
        checked: isChecked
        };
    
        console.log("Datos del formulario completo:", fullFormData);
    };
    

    useEffect(() => {
        if(!phoneValue ){
            setPhoneValue("+54");
        } 
    }, []);

    useEffect(() => {
        setIsChecked(isChecked)
    }, [isChecked])
    

    const handleFirstStepChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };


return (
    <div className="form-container bg-white">
        <div className="form-container_content">
            <h4>¡Recibe información de precios y becas!</h4>
            <p>Al recibir tu información, uno de nuestros asesores académicos se comunicará contigo</p>
        </div>
        {!showSecondStep ? 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleFirstStepChange}
                value={formData.nombre}/>
            <input 
                type="text"
                name="apellido"
                placeholder="Apellido"
                onChange={handleFirstStepChange}
                value={formData.apellido}/>
            <input 
                type="text"
                name="email"
                placeholder="Correo electrónico"
                onChange={handleFirstStepChange}
                value={formData.email}/>
            <div className="checkbox-container">
                <input
                    className="checkbox-input"
                    type="checkbox"
                    onChange={handleCheckboxClick}
                    checked={isChecked}
                />
                <p>Recibe mensajes vía <FaWhatsapp fill="#25D366"/> WhatsApp y Sms sobre nuestros diplomados.</p>             
            </div>
            <button className="btn-large">Continuar</button>
        </form>:
        <form className="form-secondary" onSubmit={handleSecondSubmit}>
            <PhoneInput
                placeholder="+54 11 1234 1234" 
                value={phoneValue}
                onChange={(value) => setPhoneValue(value)}
                className="phone-input"
            />
            <input
                type="text"
                name="areaDeInteres"
                placeholder="Área de interés"
                onChange={(value) => setAreaDeInteres(value)}
                value={formData.areaDeInteres}/>
            <div className="checkbox-container">
                <input
                    className="checkbox-input"
                    type="checkbox"
                    onChange={handleCheckboxClick}
                    checked={isChecked}
                />
                <p>Recibe mensajes vía <FaWhatsapp fill="#25D366"/> WhatsApp y Sms sobre nuestros diplomados.</p>             
            </div>
            <button className="btn-large">Quiero hablar con un asesor</button>
        </form>
        }
        <p className="p2 align-left">Al hacer clic arriba, nos autoriza a contactarlo/a mediante un sistema automatizado de llamadas al teléfono indicado arriba con el fin de recibir información relevante sobre Aprende Institute, y usted acepta nuestros Términos de servicio y Política de privacidad. Su consentimiento no constituye una condición de compra.</p>
    
    </div>
)
}
