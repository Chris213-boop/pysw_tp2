# Documentación Técnica - Proyecto Turismo ARG

## 1. Información General del Proyecto

| Campo | Valor |
|-------|-------|
| **Nombre** | pysw_tp2 |
| **Versión** | 1.0.0 |
| **Descripción** | Sitio web de turismo para destinos argentinos |
| **Licencia** | ISC |
| **Tecnologías** | HTML5, CSS3, JavaScript, jQuery, Bootstrap 5.3.8 |

---

## 2. Estructura del Proyecto

```
pysw_tp2/
├── index.html              # Página principal
├── package.json            # Configuración de dependencias
├── assets/
│   ├── css/                # Estilos CSS
│   │   ├── hero.css        # Estilos sección hero
│   │   ├── card.css        # Estilos tarjetas destinos
│   │   ├── carrusel.css    # Estilos carrusel
│   │   ├── destinos.css    # Estilos página destinos
│   │   ├── agencias.css    # Estilos página agencias
│   │   ├── layout.css      # Estilos generales layout
│   │   ├── precios.css     # Estilos página precios
│   │   └── sprite.css      # Sprites CSS
│   ├── js/                 # Scripts JavaScript
│   │   ├── include.js      # Carga dinámica de componentes
│   │   ├── hero.js         # Animaciones hero
│   │   ├── filtro.js       # Sistema de filtros
│   │   ├── agencia.js      # Funcionalidad agencias
│   │   ├── contacto.js     # Formulario contacto
│   │   ├── contador.js     # Contador visitas
│   │   ├── hoverDestino.js # Efectos hover destinos
│   │   ├── layout.js       # Funcionalidad layout
│   │   ├── phishing.js     # Seguridad anti-phishing
│   │   └── precios.js      # Funcionalidad precios
│   ├── img/                # Imágenes
│   └── video/              # Videos
├── components/             # Componentes reutilizables
│   ├── header.html         # Encabezado
│   └── footer.html         # Pie de página
└── pages/                  # Páginas del sitio
    ├── destinos.html       # Listado de destinos
    ├── agencias.html       # Listado de agencias
    ├── blog.html           # Blog de destinos
    ├── contacto.html       # Formulario contacto
    ├── precios.html        # Tabla de precios
    └── phishing.html       # Información phishing
```

---

## 3. Dependencias

### 3.1 Dependencias de Producción

| Paquete | Versión | Descripción |
|---------|---------|-------------|
| bootstrap | ^5.3.8 | Framework CSS responsivo |
| jquery | ^4.0.0 | Biblioteca JavaScript |

### 3.2 Recursos Externos (CDN)

- **Bootstrap CSS**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css`
- **Bootstrap Icons**: `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css`
- **jQuery**: `https://code.jquery.com/jquery-3.7.1.min.js`
- **Bootstrap JS**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js`

---

## 4. Componentes

### 4.1 Header (components/header.html)

Encabezado del sitio con navegación.

**Funcionalidades:**
- Menú de navegación responsive
- Links a: Inicio, Destinos, Agencias, Blog, Precios, Contacto

### 4.2 Footer (components/footer.html)

Pie de página con información de contacto y enlaces.

---

## 5. Funcionalidades JavaScript

### 5.1 include.js - Carga Dinámica de Componentes

```javascript
// Carga header y footer dinámicamente
// Detecta si está en /pages/ para ajustar rutas
```

**Lógica:**
- Verifica la ruta actual (`window.location.pathname`)
- Ajusta la ruta relativa según corresponda
- Carga componentes via Fetch API

### 5.2 hero.js - Animaciones del Hero

```javascript
// Animación de entrada del título y subtítulo
// Título: desliza hacia abajo y aparece
// Subtítulo: aparece con retraso de 800ms
```

**Efectos:**
- Deslizamiento vertical del título
- Fade-in con animación de opacidad

### 5.3 filtro.js - Sistema de Filtros

```javascript
// Filtra destinos por categoría
// Categorías: todos, norte, centro, sur, etc.
```

**Uso:**
```html
<button data-filtro="norte">Norte</button>
<div class="destino norte">...</div>
```

### 5.4 agencia.js - Funcionalidad Agencias

```javascript
// Efecto flip en tarjetas de agencias
// Sistema de rating con estrellas
```

**Características:**
- Flip card al hacer click
- Alerta de confirmación al calificar

### 5.5 contacto.js - Formulario de Contacto

Manejo del formulario de contacto con validación.

### 5.6 contador.js - Contador de Visitas

Sistema de conteo de visitas a la página.

### 5.7 hoverDestino.js - Efectos Hover

Efectos visuales al pasar el mouse sobre destinos.

### 5.8 phishing.js - Seguridad

Información sobre prevención de phishing.

---

## 6. Estilos CSS

### 6.1 hero.css

```css
.hero-section {
    height: 100vh;
    min-height: 500px;
}
```

- Sección hero a pantalla completa
- Video de fondo con overlay
- Animaciones de entrada

### 6.2 card.css

```css
.card-destino {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-destino:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
```

- Tarjetas de destinos con efecto hover
- Elevación y sombra al pasar el mouse

### 6.3 Otros Estilos

| Archivo | Descripción |
|---------|-------------|
| carrusel.css | Estilos del carrusel de imágenes |
| destinos.css | Estilos específicos de destinos |
| agencias.css | Estilos de tarjetas de agencias |
| precios.css | Estilos de la tabla de precios |
| layout.css | Estilos generales del layout |
| sprite.css | Sprites e iconos |

---

## 7. Páginas del Sitio

### 7.1 index.html - Página Principal

- Sección hero con video de fondo
- Carrusel de destinos populares
- Cards de destinos con información

### 7.2 destinos.html

- Listado de destinos turísticos
- Sistema de filtros por región
- Cards con imágenes y descripciones

### 7.3 agencias.html

- Flip cards con información de agencias
- Sistema de rating

### 7.4 precios.html

- Tabla de precios por destino
- Imágenes de destinos
- Tooltips con información adicional

### 7.5 contacto.html

- Formulario de contacto
- Validación de campos

### 7.6 blog.html

- Artículos sobre destinos

### 7.7 phishing.html

- Información sobre seguridad

---

## 8. Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| HTML5 | - | Estructura del sitio |
| CSS3 | - | Estilos y diseño responsivo |
| JavaScript (ES6+) | - | Funcionalidad del cliente |
| jQuery | 4.0.0 | Manipulación del DOM |
| Bootstrap | 5.3.8 | Framework UI |
| Fetch API | - | Carga de componentes |

---

## 9. Patrones de Diseño

### 9.1 Carga Dinámica de Componentes
- Uso de Fetch API para cargar header/footer
- Ajuste automático de rutas

### 9.2 Sistema de Filtros
- Selectores jQuery para filtrado
- Clases CSS para categorización

### 9.3 Animaciones
- Transiciones CSS para hover effects
- Animaciones jQuery para entrada de contenido

---

## 10. Configuración de Rutas

El proyecto maneja dos contextos de rutas:

1. **Raíz** (`/pysw_tp2/`): rutas directas
2. **Páginas** (`/pysw_tp2/pages/`): rutas con `../`

```javascript
if (window.location.pathname.includes("/pages/")) {
    ruta = "../";
}
```

---

## 11. Ejecución del Proyecto

### 11.1 Instalación de Dependencias

```bash
npm install
```

### 11.2 Estructura de Archivos Estáticos

El proyecto puede servirse con cualquier servidor web estático:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server
```

### 11.3 Requisitos

- Navegador moderno con soporte ES6
- Conexión a internet para CDN
- Servidor web para evitar problemas CORS con Fetch

---

## 12. Buenas Prácticas Implementadas

- ✅ Uso de semantic HTML
- ✅ Diseño responsivo con Bootstrap
- ✅ Carga diferida de imágenes (`loading="lazy"`)
- ✅ Separación de concerns (HTML/CSS/JS)
- ✅ Componentes reutilizables
- ✅ Animaciones optimizadas
- ✅ Tooltips informativos

---

## 13. Posibles Mejoras

- Implementar un build system (Vite/Webpack)
- Migrar a React/Vue para mejor escalabilidad
- Añadir testing automatizado
- Implementar PWA
- Optimizar imágenes
- Añadir internacionalización (i18n)
- Implementar SEO

---

*Documentación generada automáticamente*
*Fecha: 28 de abril de 2026*