# Zona Z · Página fan de Dragon Ball Z

Página de práctica (sin fines comerciales) para aprender HTML, CSS, JavaScript, Flask y Git.

## Qué incluye
- Sagas con resumen interactivo
- Tarjetas de personajes con filtro (héroes / villanos)
- Línea de tiempo de transformaciones
- Medidor de ki (mantén presionado el botón o la barra espaciadora)
- Trivia de 5 preguntas
- Diseño responsive con menú móvil

## Estructura
```
dbz-fan-page/
├── app.py               # Servidor Flask
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    ├── css/styles.css
    └── js/main.js
```

## Correrla en el servidor (entorno virtual)
```bash
git clone https://github.com/TU_USUARIO/dbz-fan-page.git
cd dbz-fan-page
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py                       # modo desarrollo, puerto 5000
# o en producción:
gunicorn -w 2 -b 0.0.0.0:5000 app:app
```
Luego abre `http://IP_DEL_SERVIDOR:5000`.

## Verla sin Python
También funciona abriendo `templates/index.html`… pero las rutas apuntan a `static/`,
así que lo más fácil es copiar `index.html` a la raíz del proyecto y abrirlo en el navegador.

## Subirla a GitHub
```bash
git init
git add .
git commit -m "Primera versión de la página fan de DBZ"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/dbz-fan-page.git
git push -u origin main
```

## Ideas para practicar cambios
- Agregar más personajes en el arreglo `personajes` de `static/js/main.js`
- Añadir preguntas a la trivia
- Cambiar los colores en las variables de `:root` en `styles.css`
- Crear una rama (`git checkout -b nueva-seccion`) y abrir un Pull Request

---
Dragon Ball Z y sus personajes pertenecen a sus respectivos dueños.
