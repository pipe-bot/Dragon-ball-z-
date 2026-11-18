// ===== Menú móvil =====
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

// ===== Sagas =====
const sagas = [
  {
    titulo: "Saga Saiyajin",
    meta: "Primeros episodios · Enemigos: Raditz, Nappa y Vegeta",
    texto: "Goku descubre que no es humano: es un Saiyajin enviado a la Tierra de niño. Su hermano Raditz llega a buscarlo, y tras su derrota se anuncia la llegada de dos guerreros aún más fuertes. Los Guerreros Z entrenan durante un año para enfrentarlos, mientras Goku entrena en el otro mundo con Kaiosama."
  },
  {
    titulo: "Saga de Freezer",
    meta: "Planeta Namek · Enemigo: Freezer",
    texto: "Gohan, Krilin y Bulma viajan a Namek en busca de las esferas del dragón namekianas. Allí chocan con Freezer, un tirano galáctico, y con sus fuerzas especiales. La batalla final, con el planeta a punto de estallar, desemboca en el despertar del legendario Super Saiyajin."
  },
  {
    titulo: "Saga de los Androides y Cell",
    meta: "Viajes en el tiempo · Enemigos: Androides y Cell",
    texto: "Un joven misterioso del futuro, Trunks, advierte sobre unos androides creados por el Dr. Gero. La amenaza crece con Cell, un ser bio-artificial que busca absorberlos para alcanzar su forma perfecta y organiza su propio torneo: los Juegos de Cell."
  },
  {
    titulo: "Saga de Majin Buu",
    meta: "Torneo de Artes Marciales y más allá · Enemigos: Babidi y Majin Buu",
    texto: "Años después, el hechicero Babidi revive a Majin Buu, una criatura casi imposible de destruir. Llegan las fusiones, el Super Saiyajin 3 y una batalla final en la que todo el universo presta su energía para una última Genkidama."
  }
];

const sagaDetail = document.getElementById("saga-detail");
function renderSaga(i) {
  const s = sagas[i];
  sagaDetail.innerHTML = `<h3>${s.titulo}</h3><p class="meta">${s.meta}</p><p>${s.texto}</p>`;
  sagaDetail.style.animation = "none";
  sagaDetail.offsetHeight; // reinicia la animación
  sagaDetail.style.animation = "";
}
document.querySelectorAll(".saga").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".saga").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderSaga(btn.dataset.saga);
  });
});
renderSaga(0);

// ===== Personajes =====
// Imágenes: static/img/personajes/. Para usar tu propia imagen, ponla ahí y cambia el campo "img" (p. ej. "goku.png").
const IMG_DIR = "/static/img/personajes/";
const personajes = [
  { nombre: 'Goku', img: 'goku.svg', tipo: 'heroe', color: '#ff8a00',
    desc: 'Saiyajin criado en la Tierra. Alegre, ingenuo y obsesionado con hacerse más fuerte.',
    poderes: ['Kamehameha', 'Genkidama', 'Teletransportación instantánea', 'Kaioken', 'Super Saiyajin 1, 2 y 3'],
    historia: 'Enviado de bebé a la Tierra con el nombre Kakarotto, fue criado por el abuelo Gohan. Entrena con el Maestro Roshi y Kaiosama, derrota a Freezer en Namek y es clave en las sagas de Cell y Majin Buu.' },
  { nombre: 'Vegeta', img: 'vegeta.svg', tipo: 'heroe', color: '#3fa9ff',
    desc: 'El orgulloso príncipe de los Saiyajin. Empieza como enemigo y termina siendo un aliado.',
    poderes: ['Final Flash', 'Galick Ho', 'Big Bang Attack', 'Super Saiyajin 1 y 2'],
    historia: 'Llega a la Tierra con Nappa para conseguir las esferas. Tras ser derrotado se une a los héroes de forma intermitente, forma una familia con Bulma y se convierte en el eterno rival de Goku.' },
  { nombre: 'Gohan', img: 'gohan.svg', tipo: 'heroe', color: '#8f6bff',
    desc: 'Hijo de Goku. Tranquilo y estudioso, con un potencial oculto enorme.',
    poderes: ['Masenko', 'Kamehameha', 'Super Saiyajin 2', 'Potencial desbloqueado'],
    historia: 'Secuestrado por Raditz de niño, entrena con Piccolo y sobrevive en Namek. En los Juegos de Cell libera su poder y vence a Cell con un Kamehameha junto a su padre desde el más allá.' },
  { nombre: 'Piccolo', img: 'piccolo.svg', tipo: 'heroe', color: '#3ddc84',
    desc: 'Namekiano que pasó de rival a mentor de Gohan. Estratega y serio.',
    poderes: ['Makankosappo', 'Regeneración', 'Brazos extensibles', 'Fusión con otros namekianos'],
    historia: 'Nace del Rey Piccolo justo antes de que este muriera. Se enfrenta a Goku en el Torneo, luego entrena a Gohan y se convierte en uno de los pilares de los Guerreros Z.' },
  { nombre: 'Trunks', img: 'trunks.svg', tipo: 'heroe', color: '#b18cff',
    desc: 'Hijo de Vegeta y Bulma que viaja desde un futuro devastado.',
    poderes: ['Ataque con espada', 'Super Saiyajin', 'Ráfagas de ki'],
    historia: 'Viaja en una máquina del tiempo para avisar a los héroes sobre los androides. Derrota a Freezer a su llegada y lucha por cambiar su futuro.' },
  { nombre: 'Krilin', img: 'krilin.svg', tipo: 'heroe', color: '#ffb347',
    desc: 'El mejor amigo de Goku y el humano más fuerte de la Tierra.',
    poderes: ['Kienzan (Disco Destructor)', 'Kamehameha', 'Gran control del ki'],
    historia: 'Compañero de entrenamiento de Goku con el Maestro Roshi. Muere varias veces y es revivido, se casa con la Androide 18 y tiene una hija, Marron.' },
  { nombre: 'Bulma', img: 'bulma.svg', tipo: 'heroe', color: '#29c7c9',
    desc: 'Genio científica y heredera de la Corporación Cápsula.',
    poderes: ['Radar del Dragón', 'Máquina del tiempo', 'Ingenio e inventos'],
    historia: 'Conoce a Goku buscando las esferas del dragón. Con su inteligencia ayuda a localizarlas, viaja a Namek y construye la tecnología que sostiene a los héroes.' },
  { nombre: 'Maestro Roshi', img: 'roshi.svg', tipo: 'heroe', color: '#2fbf71',
    desc: 'Ermitaño legendario de las artes marciales y creador del Kamehameha.',
    poderes: ['Kamehameha', 'Mafuba', 'Gran técnica marcial'],
    historia: 'Vive en la isla Kame House y es maestro de Goku y Krilin. En el torneo participa disfrazado como Jackie Chun y ayuda en peleas decisivas.' },
  { nombre: 'Tenshinhan', img: 'tenshinhan.svg', tipo: 'heroe', color: '#3ddc84',
    desc: 'Guerrero de tres ojos que pasó de rival a aliado leal.',
    poderes: ['Kikoho', 'Taiyoken (destello solar)', 'Tercer ojo'],
    historia: 'Empieza como rival de Goku, entrenado en la Escuela de la Grulla. Después se une a los Guerreros Z junto a su amigo Chaoz.' },
  { nombre: 'Freezer', img: 'freezer.svg', tipo: 'villano', color: '#ff4dc4',
    desc: 'Emperador del universo, frío y cruel.',
    poderes: ['Rayo mortal', 'Supernova', 'Varias transformaciones'],
    historia: 'Destruye el planeta de los Saiyajin y gobierna con terror. En Namek lo enfrentan Goku y sus amigos, y su derrota marca el despertar del Super Saiyajin.' },
  { nombre: 'Cell', img: 'cell.svg', tipo: 'villano', color: '#2fbf71',
    desc: 'Creación del Dr. Gero hecha con células de grandes guerreros.',
    poderes: ['Regeneración', 'Absorción', 'Kamehameha'],
    historia: 'Un ser bio-artificial que absorbe a los androides para alcanzar su forma perfecta. Organiza los Juegos de Cell y es derrotado por Gohan.' },
  { nombre: 'Majin Buu', img: 'majin-buu.svg', tipo: 'villano', color: '#ff7ab8',
    desc: 'Ser mágico de poder caótico, capaz de regenerarse casi de cualquier cosa.',
    poderes: ['Regeneración', 'Magia', 'Varias formas'],
    historia: 'Despertado por Babidi, siembra el caos en la Tierra. Solo una Genkidama alimentada por todo el universo logra acabar con él.' },
  { nombre: 'Raditz', img: 'raditz.svg', tipo: 'villano', color: '#6b6bd6',
    desc: 'Hermano de Goku y primer enemigo Saiyajin de la serie.',
    poderes: ['Doble Sundae', 'Fuerza Saiyajin'],
    historia: 'Llega a la Tierra para reclutar a Goku, pero este se niega. Secuestra a Gohan y es derrotado cuando Goku y Piccolo unen fuerzas.' },
  { nombre: 'Dr. Gero', img: 'gero.svg', tipo: 'villano', color: '#9aa0b5',
    desc: 'Científico del Ejército de la Cinta Roja y creador de los androides.',
    poderes: ['Androides y ciencia avanzada', 'Absorción de energía'],
    historia: 'Obsesionado con vengarse de Goku, crea a los Androides 17 y 18 y desarrolla a Cell. Su proyecto termina volviéndose contra él.' },
];

const cards = document.getElementById("cards");
function renderCards(filtro = "todos") {
  cards.innerHTML = personajes
    .filter(p => filtro === "todos" || p.tipo === filtro)
    .map((p, i) => `
      <article class="card" style="--c:${p.color}">
            <img class="foto" src="${IMG_DIR}${p.img.replace(/\.\w+$/, '.jpg')}" alt="${p.nombre}" loading="lazy"
            onerror="this.onerror=null; this.src='${IMG_DIR}${p.img.replace(/\.\w+$/, '.svg')}'">
        <span class="tag ${p.tipo}">${p.tipo === "heroe" ? "Héroe" : "Villano"}</span>
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
        <button class="more" aria-expanded="false" aria-controls="det-${i}">Ver más ▾</button>
        <div class="detalle" id="det-${i}">
          <div class="detalle-inner">
            <h4>Poderes</h4>
            <ul>${p.poderes.map(x => `<li>${x}</li>`).join("")}</ul>
            <h4>Historia</h4>
            <p>${p.historia}</p>
          </div>
        </div>
      </article>`).join("");
}
cards.addEventListener("click", e => {
  const btn = e.target.closest(".more");
  if (!btn) return;
  const abierto = btn.nextElementSibling.classList.toggle("open");
  btn.setAttribute("aria-expanded", abierto);
  btn.textContent = abierto ? "Ver menos ▴" : "Ver más ▾";
});
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.filter);
  });
});
renderCards();

// ===== Cargar ki =====
const kiBox = document.querySelector(".ki-box");
const kiOrb = document.getElementById("ki-orb");
const kiFill = document.getElementById("ki-fill");
const kiLevel = document.getElementById("ki-level");
const kiMsg = document.getElementById("ki-msg");
const kiBtn = document.getElementById("ki-btn");
let ki = 0, charging = false, timer = null;

const mensajes = [
  [0, "Concéntrate…"],
  [20, "Sientes la energía fluir."],
  [45, "¡El suelo empieza a temblar!"],
  [70, "¡Tu aura brilla con fuerza!"],
  [90, "¡Casi al límite!"],
  [100, "¡¡Es más de 9000!!"]
];

function updateKi() {
  kiFill.style.width = ki + "%";
  kiOrb.style.setProperty("--p", ki);
  kiLevel.textContent = Math.round(ki * 92).toLocaleString("es");
  kiMsg.textContent = mensajes.filter(([min]) => ki >= min).pop()[1];
  kiBox.classList.toggle("max", ki >= 100);
}
function startCharge() {
  if (charging) return;
  charging = true;
  clearInterval(timer);
  timer = setInterval(() => { ki = Math.min(100, ki + 1.5); updateKi(); }, 40);
}
function stopCharge() {
  if (!charging) return;
  charging = false;
  clearInterval(timer);
  timer = setInterval(() => {
    if (ki >= 100) return clearInterval(timer); // al máximo se queda cargado
    ki = Math.max(0, ki - 0.6); updateKi();
    if (ki === 0) clearInterval(timer);
  }, 40);
}
kiBtn.addEventListener("pointerdown", startCharge);
["pointerup", "pointerleave"].forEach(e => kiBtn.addEventListener(e, stopCharge));
document.addEventListener("keydown", e => {
  if (e.code === "Space" && e.target === document.body) { e.preventDefault(); startCharge(); }
});
document.addEventListener("keyup", e => { if (e.code === "Space") stopCharge(); });
document.getElementById("ki-reset").addEventListener("click", () => {
  clearInterval(timer); charging = false; ki = 0; updateKi();
});
updateKi();

// ===== Trivia =====
const preguntas = [
  { q: "¿Cuántas esferas del dragón hay que reunir para invocar a Shenlong?", ops: ["5", "7", "9", "12"], ok: 1 },
  { q: "¿De qué raza es Goku?", ops: ["Namekiano", "Humano", "Saiyajin", "Androide"], ok: 2 },
  { q: "¿En qué planeta se enfrentan a Freezer?", ops: ["Vegeta", "Namek", "Tierra", "Yardrat"], ok: 1 },
  { q: "¿Quién crea a Cell?", ops: ["Babidi", "Dr. Gero", "Bulma", "Kaiosama"], ok: 1 },
  { q: "¿Cómo se llama la técnica que reúne energía de todos los seres vivos?", ops: ["Kamehameha", "Final Flash", "Genkidama", "Makankosappo"], ok: 2 }
];
const quiz = document.getElementById("quiz");
let actual = 0, puntos = 0;

function renderPregunta() {
  if (actual >= preguntas.length) {
    quiz.innerHTML = `
      <div class="result">
        <p>Tu puntaje</p>
        <div class="score">${puntos}/${preguntas.length}</div>
        <p>${puntos === preguntas.length ? "¡Eres un verdadero Guerrero Z!" : puntos >= 3 ? "¡Muy bien! Sigue entrenando." : "Te falta entrenar en la Habitación del Tiempo."}</p>
        <br><button class="btn btn-primary" id="reiniciar">Jugar otra vez</button>
      </div>`;
    document.getElementById("reiniciar").onclick = () => { actual = 0; puntos = 0; renderPregunta(); };
    return;
  }
  const p = preguntas[actual];
  quiz.innerHTML = `
    <p class="progress">Pregunta ${actual + 1} de ${preguntas.length}</p>
    <h3>${p.q}</h3>
    ${p.ops.map((o, i) => `<button class="option" data-i="${i}">${o}</button>`).join("")}`;
  quiz.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.i);
      quiz.querySelectorAll(".option").forEach(b => (b.disabled = true));
      quiz.querySelectorAll(".option")[p.ok].classList.add("correct");
      if (i === p.ok) puntos++; else btn.classList.add("wrong");
      setTimeout(() => { actual++; renderPregunta(); }, 1100);
    });
  });
}
renderPregunta();
