import { AgentIcon, AlarmIcon, EditIcon, EduIcon, GroupsIcon, PlayIcon } from "../../assets"

export const Objetivos = () => {

    const objetivosList = [
        {
            id: 1,
            title: "Estudia a tu Ritmo",
            description: "Tú decides cuándo y dónde. Estudia desde tu casa como si estuvieras en el salón de clases sin perderte de nada.",
            icon: AlarmIcon 
        },
        {
            id: 2,
            title: "Crece junto a los mejores expertos",
            description: "Aprende de nuestros expertos disponibles en todo momento para asesorarte y resolver tus dudas.",
            icon: AgentIcon 
        },
        {
            id: 3,
            title: "Obtén tu certificado",
            description: "Al finalizar tus estudios, recibirás un certificado digital que avala tus habilidades y te destaca en el mercado laboral.",
            icon: EduIcon 
        },
        {
            id: 4,
            title: "Forma parte de nuestra comunidad",
            description: "Conéctate con otros estudiantes y comparte ideas y conocimientos en nuestros exclusivos grupos de Facebook.",
            icon: GroupsIcon 
        },
        {
            id: 5,
            title: "Practica lo aprendido",
            description: "Refuerza tus habilidades con proyectos prácticos aplicados a casos reales en cada curso.",
            icon: EditIcon
        },
        {
            id: 6,
            title: "Acceso ilimitado a clases en vivo",
            description: "Complementa tu aprendizaje con clases interactivas dirigidas por expertos cualquier día de la semana.",
            icon: PlayIcon 
        }
    ]

  return (
    <div className="objetivos font-dark">
        <h2>Alcanza tus objetivos en un mercado en crecimiento</h2>
        <div className="objetivos-grid">
            {objetivosList.map((obj, index)=>(
                <div key={index} className="objetivos-container">
                    <div className="objetivos_image">
                        <img src={obj.icon} alt="icon"/>
                    </div>
                    <div className="objetivos_content">
                        <h4>{obj.title}</h4>
                        <p>{obj.description}</p>
                    </div>
                </div>
                
            ))}
        </div>


    </div>
  )
}
