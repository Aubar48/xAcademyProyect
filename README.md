## Landing Page XAcademyProject
Descripción
Este proyecto es una landing page moderna diseñada para presentar servicios, destacar características y facilitar la suscripción por correo electrónico. La página está desarrollada utilizando Angular para el frontend y sigue buenas prácticas de desarrollo web, incluyendo la optimización del rendimiento y la accesibilidad.

Web Online in netlify.app: https://sweet-semifreddo-c4a0aa.netlify.app/
<figure><img src="./public/landing_page.png" alt="logo" style="height: 400px;"></figure>

<br>
Tecnologías Utilizadas:
- Angular: Framework para construir la interfaz de usuario.<br>
- CSS/SCSS: Para el estilo y diseño de la página.<br>
- Material Icons: Para íconos de la interfaz.<br>
- Google Fonts: Fuentes utilizadas para mejorar la apariencia del texto.<br>

La estructura del proyecto incluye los siguientes componentes:<br>
- header.component.html: Contiene el encabezado de la página con el logo, el menú de navegación y los botones.<br>
- main.component.html: La sección principal que presenta el servicio, las características y los elementos visuales.<br>
- footer.component.html: El pie de página con la información de derechos reservados y la fecha y hora actual.<br>
- app.component.html: Contiene los componentes Header, Main, y Footer dentro de un contenedor principal.<br>
- theme.service.ts: Servicio para manejar el modo oscuro/claro y el almacenamiento en localStorage.
<br>

Para configurar Angular CLI version 18.1.0. y ejecutar el proyecto localmente, sigue estos pasos:<br>

- Clona el Repositorio:
bash
Copiar código
git clone <https://github.com/Aubar48/xAcademyProyect>
Instala las Dependencias<br>

- Dirigite a la carpeta del repositorio:
bash
Copiar código
cd <xAcademyProyect>
npm install
Ejecuta el Proyecto<br>

- Levanta el servidor del repositorio:
bash
Copiar código
ng serve
Accede a la Aplicación Abre tu navegador y ve a http://localhost:4200.<br>
