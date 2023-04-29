import React from 'react'
import '../styles/about.css'
import Marvel from '../assets/MARVELimg.png'

const About = () => {
  return (
    <div className='contenedor-about'>
        <p className='parrafo-about'>
        Este proyecto es una página web que muestra información sobre los cómics de Marvel. Está construido utilizando React, una librería de JavaScript para construir interfaces de usuario, React Router para manejar la navegación entre páginas, y React Icons para agregar iconos a la interfaz. <br />

La página utiliza la API de Marvel para obtener información sobre los cómics, como su título, descripción, imagen y fecha de lanzamiento. La API proporciona una gran cantidad de datos sobre los cómics de Marvel, por lo que se puede buscar por título, personaje, evento o incluso por fecha de lanzamiento. <br />

Además, se utilizó CSS puro para dar estilo a la página. Se implementaron estilos responsivos para que la página se vea bien en diferentes tamaños de pantalla, desde móviles hasta pantallas de escritorio. Los estilos se aplican a cada componente de la página, desde la barra de navegación hasta la lista de cómics. <br />

En resumen, este proyecto es una página web que muestra información detallada sobre los cómics de Marvel, construida con tecnologías como React, React Router y CSS puro. Es fácil de usar y permite a los usuarios explorar la vasta colección de cómics de Marvel.
        </p>

       <img src={Marvel} alt="" className='container-img' />
    </div>
  )
}

export default About