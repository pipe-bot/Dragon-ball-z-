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
const personajes = [
  { nombre: "Goku", tipo: "heroe", color: "#ff8a00", desc: "Saiyajin criado en la Tierra. Alegre, ingenuo y obsesionado con hacerse más fuerte. Su técnica estrella es el Kamehameha." },
  { nombre: "Vegeta", tipo: "heroe", color: "#3fa9ff", desc: "El orgulloso príncipe de los Saiyajin. Empieza como enemigo y termina siendo un aliado, siempre compitiendo con Goku." },
  { nombre: "Gohan", tipo: "heroe", color: "#8f6bff", desc: "Hijo de Goku. Tranquilo y estudioso, pero con un potencial oculto enorme que despierta cuando más se necesita." },
  { nombre: "Piccolo", tipo: "heroe", color: "#3ddc84", desc: "Namekiano que pasó de rival a mentor de Gohan. Estratega, serio y uno de los pilares de los Guerreros Z." },
  { nombre: "Trunks", tipo: "heroe", color: "#b18cff", desc: "Hijo de Vegeta y Bulma que viaja desde un futuro devastado para advertir a los héroes." },
  { nombre: "Freezer", tipo: "villano", color: "#ff4dc4", desc: "Emperador del universo, frío y cruel. Responsable de la destrucción del planeta de los Saiyajin." },
  { nombre: "Cell", tipo: "villano", color: "#2fbf71", desc: "Creación del Dr. Gero hecha con células de grandes guerreros. Busca la perfección absorbiendo a los androides." },
  { nombre: "Majin Buu", tipo: "villano", color: "#ff7ab8", desc: "Ser mágico de poder caótico, capaz de regenerarse casi de cualquier cosa. Tiene varias formas, cada una más peligrosa." }
];

const cards = document.getElementById("cards");
function renderCards(filtro = "todos") {
  cards.innerHTML = personajes
    .filter(p => filtro === "todos" || p.tipo === filtro)
    .map(p => `
      <article class="card" style="--c:${p.color}">
        <div class="avatar">${p.nombre[0]}</div>
        <span class="tag ${p.tipo}">${p.tipo === "heroe" ? "Héroe" : "Villano"}</span>
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
      </article>`).join("");
}
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
