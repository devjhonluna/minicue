
<div align="center">
   <img src="https://github.com/user-attachments/assets/1cdefd97-9cf8-4c67-ad04-414c9739ca2e" width="512" alt="MiniCue"/>
</div>

# Mini Cue : generador de guiones

MiniCue es un generador de guiones de video para formatos cortos, impulsado por inteligencia artificial. Si necesitas crear guiones para tus videos de TikTok u otras plataformas similares, MiniCue está aquí para ayudarte.

https://github.com/user-attachments/assets/f285a71d-c913-4481-aca7-d2c194a92a6d

## Desarrollo

__Frontend__: MiniCue utiliza SvelteKit como su framework de frontend. Además, hemos implementado Tailwind CSS para el diseño y la interfaz de usuario.

__Backend__: El backend de MiniCue utiliza en el SDK de inteligencia artificial de Vercel. Para Conectar el proveedor de Groq con el modelo de lenguaje Llama de Meta AI para generar los guiones.

## Ejecución Local

Si deseas ejecutar MiniCue en tu entorno local:

1. Asegúrate de tener una cuenta en Groq de lo contrario crea una cuenta en groq.
2. Clona el Repositorio desde Github abre la terminal usa el siguiente comando

```terminal
git clone https://github.com/devjhonluna/minicue.git
```

3. Genera tu api key en tu cuenta de groq
4. Crea un archivo .env en la raiz del Proyecto y agrega la api key que generaste en el paso anterior para garantizar que la aplicación funcione correctamente. como se ve en el ejemplo.
```env
GROQ_API_KEY=tu api de GROQ
```
5. Inicia el Servidor de desarrollo:
   ```npm run dev -- --open```
6. Abre tu navegador y ve a  ``` http://localhost:5173/ ``` 
 
## Notas

- El modelo de lenguaje Llama AI, que utilizamos a través de Groq, tiene una limitación de 8000 tokens por día. Tenlo en cuenta al generar guiones.

- Actualmente, MiniCue es un prototipo con funcionalidad básica para guiones de TikTok.

- En un futuro no tan lejando, planeamos convertirlo en un servicio completo (SAAS) y agregar más características.

## Contacto

Autor: Jhon Alexander Luna  
Github: [devjhonluna](https://github.com/devjhonluna)  
LinkedIn: [Jhon Alexander Luna](https://www.linkedin.com/in/jhon-alexander-luna-gonzalez-ab30a017a/)  
Web: https://portafolio-devjl.netlify.app/ 
