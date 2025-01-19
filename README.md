# React Project Setup with Vite

Este repositorio contiene un proyecto en React configurado con Vite. Sigue los pasos a continuación para configurar e iniciar el proyecto.

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos:

- **Node.js**: Versión 18.15.0 o superior.
- **npm** o **yarn**: Gestor de paquetes de Node.js.
- **Editor de Código**: Se recomienda [Visual Studio Code](https://code.visualstudio.com/).

## Instrucciones para Iniciar el Proyecto

### 1. Clonar el Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/maik10000/galeria-app.git
cd tu-proyecto-react
```

### 2. Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

O si usas Yarn:

```bash
yarn install
```

Configura las variables necesarias en el archivo `.env`.

### 3. Iniciar el Servidor de Desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

O si usas Yarn:

```bash
yarn dev
```

Por defecto, la aplicación estará disponible en `http://localhost:5173`.

### 4. Crear una Build para Producción (Opcional)

Si deseas crear una versión optimizada para producción, ejecuta:

```bash
npm run build
```

O si usas Yarn:

```bash
yarn build
```

Esto generará una carpeta `dist` con los archivos estáticos optimizados.

### 5. Previsualizar la Build (Opcional)

Para probar la versión de producción localmente, ejecuta:

```bash
npm run preview
```

O si usas Yarn:

```bash
yarn preview
```

Esto iniciará un servidor para previsualizar los archivos generados en la carpeta `dist`.

## Comandos útiles

- **Ejecutar pruebas**:
  ```bash
  npm test
  ```
  O con Yarn:
  ```bash
  yarn test
  ```

- **Linter** (si está configurado):
  ```bash
  npm run lint
  ```
  O con Yarn:
  ```bash
  yarn lint
  ```

- **Formatear código** (si usas Prettier):
  ```bash
  npm run format
  ```
  O con Yarn:
  ```bash
  yarn format
  ```

## Muchas Gracias!
