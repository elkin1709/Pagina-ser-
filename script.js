// Mostrar modal de nombre al hacer click en 'Iniciar'
const btnIniciar = document.getElementById('boton-iniciar');
if (btnIniciar) {
    btnIniciar.addEventListener('click', function() {
        const modalNombre = document.getElementById('modal-nombre');
        if (modalNombre) modalNombre.classList.remove('oculto');
    });
}

// Al dar 'Siguiente' en el modal de nombre, mostrar el de edad
const btnSiguienteNombre = document.getElementById('boton-siguiente-nombre');
if (btnSiguienteNombre) {
    btnSiguienteNombre.addEventListener('click', function() {
        const inputNombre = document.getElementById('input-nombre');
        if (inputNombre && inputNombre.value.trim() !== '') {
            localStorage.setItem('nombreUsuario', inputNombre.value.trim());
        }
        const modalNombre = document.getElementById('modal-nombre');
        const modalEdad = document.getElementById('modal-edad');
        if (modalNombre) modalNombre.classList.add('oculto');
        if (modalEdad) modalEdad.classList.remove('oculto');
    });
}

// Al seleccionar una opción de edad, mostrar el modal de signo zodiacal
const opcionesEdad = document.querySelectorAll('.opcion-edad');
if (opcionesEdad.length) {
    opcionesEdad.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modalEdad = document.getElementById('modal-edad');
            const modalSigno = document.getElementById('modal-signo');
            if (modalEdad) modalEdad.classList.add('oculto');
            if (modalSigno) modalSigno.classList.remove('oculto');
        });
    });
}

// Al seleccionar un signo zodiacal, mostrar el modal de religión
const opcionesSigno = document.querySelectorAll('.opcion-signo');
if (opcionesSigno.length) {
    opcionesSigno.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modalSigno = document.getElementById('modal-signo');
            const modalReligion = document.getElementById('modal-religion');
            if (modalSigno) modalSigno.classList.add('oculto');
            if (modalReligion) modalReligion.classList.remove('oculto');
        });
    });
}

// Al seleccionar una opción de religión, mostrar el modal de creencias
const opcionesReligion = document.querySelectorAll('.opcion-religion');
if (opcionesReligion.length) {
    opcionesReligion.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modalReligion = document.getElementById('modal-religion');
            const modalCreencias = document.getElementById('modal-creencias');
            const modalRacha = document.getElementById('modal-racha');
            if (modalReligion) modalReligion.classList.add('oculto');
            if (btn.dataset.religion === 'no') {
                // Saltar creencias y mostrar racha directamente
                let racha = parseInt(localStorage.getItem('rachaDias') || '0', 10);
                racha++;
                localStorage.setItem('rachaDias', racha);
                const frasesRacha = [
                    '¡Sigue así, cada día cuenta!',
                    'Tu constancia te acerca a tus sueños.',
                    'Hoy es un gran día para crecer.',
                    '¡Un paso más, un logro más!',
                    'La motivación se construye día a día.',
                    '¡Eres capaz de todo lo que te propones!',
                    'Cada día suma en tu camino.',
                    '¡No te detengas, vas muy bien!',
                    'La disciplina es tu superpoder.',
                    '¡Hoy también elegiste avanzar!'
                ];
                const frase = frasesRacha[Math.floor(Math.random() * frasesRacha.length)];
                const rachaNumero = document.getElementById('racha-numero');
                const rachaFrase = document.getElementById('racha-frase');
                if (rachaNumero) rachaNumero.textContent = racha;
                if (rachaFrase) rachaFrase.textContent = frase;
                if (modalRacha) modalRacha.classList.remove('oculto');
            } else {
                if (modalCreencias) modalCreencias.classList.remove('oculto');
            }
        });
    });
}

// Al seleccionar una creencia, mostrar el modal de racha y actualizar la racha
const opcionesCreencia = document.querySelectorAll('.opcion-creencia');
if (opcionesCreencia.length) {
    opcionesCreencia.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modalCreencias = document.getElementById('modal-creencias');
            if (modalCreencias) modalCreencias.classList.add('oculto');
            // Actualizar racha en localStorage
            let racha = parseInt(localStorage.getItem('rachaDias') || '0', 10);
            racha++;
            localStorage.setItem('rachaDias', racha);
            // Frases motivacionales para la racha
            const frasesRacha = [
                '¡Sigue así, cada día cuenta!',
                'Tu constancia te acerca a tus sueños.',
                'Hoy es un gran día para crecer.',
                '¡Un paso más, un logro más!',
                'La motivación se construye día a día.',
                '¡Eres capaz de todo lo que te propones!',
                'Cada día suma en tu camino.',
                '¡No te detengas, vas muy bien!',
                'La disciplina es tu superpoder.',
                '¡Hoy también elegiste avanzar!'
            ];
            const frase = frasesRacha[Math.floor(Math.random() * frasesRacha.length)];
            const rachaNumero = document.getElementById('racha-numero');
            const rachaFrase = document.getElementById('racha-frase');
            const modalRacha = document.getElementById('modal-racha');
            if (rachaNumero) rachaNumero.textContent = racha;
            if (rachaFrase) rachaFrase.textContent = frase;
            if (modalRacha) modalRacha.classList.remove('oculto');
        });
    });
}

// Cerrar modal de racha y redirigir
const btnCerrarRacha = document.getElementById('cerrar-racha');
if (btnCerrarRacha) {
    btnCerrarRacha.addEventListener('click', function() {
        const modalRacha = document.getElementById('modal-racha');
        if (modalRacha) modalRacha.classList.add('oculto');
        window.location.href = 'frases.html';
    });
}

// Modal emociones (esto siempre debe funcionar en frases.html)
const btnSentimiento = document.getElementById('boton-sentimiento');
if (btnSentimiento) {
    const nombre = localStorage.getItem('nombreUsuario');
    if (nombre && nombre.length > 0) {
        btnSentimiento.textContent = `Hola ${nombre}, ¿Cómo te sientes hoy?`;
    }
    btnSentimiento.onclick = function() {
        const modal = document.getElementById('modal-emocion');
        if (modal) {
            modal.classList.remove('oculto');
        }
    };
}

// Frases motivacionales
const frasesFortuna = [
    "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
    "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
    "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
    "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
    "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
    "¿Qué es el dinero para mí... y de quién aprendí eso?",
    "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
    "¿Qué me impide reconocer que ya soy una energía de riqueza?",
    "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
    "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
    "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
    "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
    "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
    "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
    "¿Qué pasaría si dejara de rechazar ser rica?",
    "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
    "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
    "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
    "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
    "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
    "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
    "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
    "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
    "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
    "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
    "¿Qué me impide ser el imán que realmente soy para el dinero?",
    "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
    "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
    "¿Qué riqueza energética está disponible para mí ahora mismo?",
    "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?"
];

let fraseActual = 0;

// Función para obtener la fecha actual en formato YYYY-MM-DD
function obtenerFechaActual() {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
}

// Función para verificar si ya se mostró una frase hoy
function yaSeMostroFraseHoy() {
    const fechaActual = obtenerFechaActual();
    const ultimaFecha = localStorage.getItem('ultimaFechaFrase');
    return ultimaFecha === fechaActual;
}

// Función para guardar la frase del día
function guardarFraseDelDia(fraseIndex) {
    const fechaActual = obtenerFechaActual();
    localStorage.setItem('ultimaFechaFrase', fechaActual);
    localStorage.setItem('fraseDelDia', fraseIndex);
}

// Función para obtener la frase del día guardada
function obtenerFraseDelDia() {
    const fraseIndex = localStorage.getItem('fraseDelDia');
    return fraseIndex ? parseInt(fraseIndex) : null;
}

// Función para mostrar una frase aleatoria (solo una por día)
function mostrarFraseAleatoria() {
    const fraseFortunaElement = document.getElementById('frase-fortuna');
    
    if (yaSeMostroFraseHoy()) {
        // Si ya se mostró una frase hoy, mostrar la misma con contador
        const fraseIndex = obtenerFraseDelDia();
        if (fraseIndex !== null) {
            fraseActual = fraseIndex;
            const tiempo = calcularTiempoRestante();
            fraseFortunaElement.innerHTML = `
                <div style="margin-bottom: 20px;">
                    <div style="font-size: 1.1rem; margin-bottom: 15px; color: var(--accent);">✨ Tu frase del día:</div>
                    <div style="font-size: 1rem; line-height: 1.6; margin-bottom: 20px;">${frasesFortuna[fraseActual]}</div>
                    <div style="text-align: center; border-top: 1px solid var(--border); padding-top: 15px;">
                        <div style="font-size: 0.9rem; color: var(--accent); margin-bottom: 10px;">Próxima frase en:</div>
                        <div id="contador-frase" style="font-size: 1.3rem; font-weight: bold; color: var(--accent); font-family: monospace; background: rgba(162, 89, 255, 0.1); padding: 8px 12px; border-radius: 6px; display: inline-block;">
                            ${formatearTiempo(tiempo.horas, tiempo.minutos, tiempo.segundos)}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Fallback: mostrar una frase aleatoria
            fraseActual = Math.floor(Math.random() * frasesFortuna.length);
            fraseFortunaElement.textContent = frasesFortuna[fraseActual];
        }
        
        // Iniciar el contador
        setTimeout(() => {
            actualizarContador();
            setInterval(actualizarContador, 1000);
        }, 100);
    } else {
        // Si es un nuevo día, mostrar una nueva frase aleatoria
        fraseActual = Math.floor(Math.random() * frasesFortuna.length);
        fraseFortunaElement.textContent = frasesFortuna[fraseActual];
        guardarFraseDelDia(fraseActual);
    }
}

// Función para calcular el tiempo restante hasta la próxima frase
function calcularTiempoRestante() {
    const ahora = new Date();
    const manana = new Date(ahora);
    manana.setDate(manana.getDate() + 1);
    manana.setHours(0, 0, 0, 0); // Inicio del día siguiente
    
    const tiempoRestante = manana - ahora;
    const horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
    
    return { horas, minutos, segundos };
}

// Función para formatear el tiempo
function formatearTiempo(horas, minutos, segundos) {
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

// Función para actualizar el contador
function actualizarContador() {
    const contadorElement = document.getElementById('contador-frase');
    if (contadorElement && yaSeMostroFraseHoy()) {
        const tiempo = calcularTiempoRestante();
        contadorElement.textContent = formatearTiempo(tiempo.horas, tiempo.minutos, tiempo.segundos);
    }
}

// Función para mostrar la siguiente frase (solo si es un nuevo día)
function mostrarSiguienteFrase() {
    const fraseFortunaElement = document.getElementById('frase-fortuna');
    
    if (yaSeMostroFraseHoy()) {
        // Si ya se mostró una frase hoy, mostrar mensaje con contador
        const tiempo = calcularTiempoRestante();
        fraseFortunaElement.innerHTML = `
            <div style="text-align: center; margin-bottom: 15px;">
                <div style="font-size: 1.1rem; margin-bottom: 10px;">Ya has visto tu frase del día ✨</div>
                <div style="font-size: 0.9rem; color: var(--accent); margin-bottom: 15px;">Próxima frase en:</div>
                <div id="contador-frase" style="font-size: 1.5rem; font-weight: bold; color: var(--accent); font-family: monospace; background: rgba(162, 89, 255, 0.1); padding: 10px; border-radius: 8px; display: inline-block;">
                    ${formatearTiempo(tiempo.horas, tiempo.minutos, tiempo.segundos)}
                </div>
            </div>
        `;
        fraseFortunaElement.style.fontStyle = 'normal';
        fraseFortunaElement.style.color = 'var(--text-secondary)';
        
        // Iniciar el contador
        actualizarContador();
        setInterval(actualizarContador, 1000);
    } else {
        // Si es un nuevo día, mostrar la siguiente frase
        fraseActual = (fraseActual + 1) % frasesFortuna.length;
        fraseFortunaElement.textContent = frasesFortuna[fraseActual];
        fraseFortunaElement.style.fontStyle = 'normal';
        fraseFortunaElement.style.color = 'var(--text-secondary)';
        guardarFraseDelDia(fraseActual);
    }
}

// Al seleccionar una emoción, mostrar el modal de la galleta
const opcionesEmocion = document.querySelectorAll('.opcion-emocion');
if (opcionesEmocion.length) {
    opcionesEmocion.forEach(function(btn) {
        btn.onclick = function() {
            const modalEmocion = document.getElementById('modal-emocion');
            if (modalEmocion) {
                modalEmocion.classList.add('oculto');
            }
            
            // Mostrar modal de galleta
            const modalGalleta = document.getElementById('modal-galleta');
            if (modalGalleta) {
                modalGalleta.classList.remove('oculto');
            }
            
            // Animar la galleta rompiéndose
            setTimeout(function() {
                const galleta = document.getElementById('galleta');
                if (galleta) {
                    galleta.classList.add('rompida');
                }
            }, 500);
            
            // Mostrar frase después de que se rompa la galleta
            setTimeout(function() {
                mostrarFraseAleatoria();
                
                // Si ya se mostró una frase hoy, agregar un indicador visual
                if (yaSeMostroFraseHoy()) {
                    const fraseFortunaElement = document.getElementById('frase-fortuna');
                    fraseFortunaElement.style.borderLeft = '4px solid #FFD700'; // Borde dorado
                    fraseFortunaElement.style.position = 'relative';
                    
                    // Agregar un pequeño indicador de "ya visto"
                    if (!fraseFortunaElement.querySelector('.indicador-visto')) {
                        const indicador = document.createElement('div');
                        indicador.className = 'indicador-visto';
                        indicador.innerHTML = '✨ Frase del día';
                        indicador.style.cssText = `
                            position: absolute;
                            top: -10px;
                            right: 10px;
                            background: var(--accent);
                            color: var(--bg-card);
                            padding: 4px 8px;
                            border-radius: 12px;
                            font-size: 0.8rem;
                            font-weight: bold;
                        `;
                        fraseFortunaElement.appendChild(indicador);
                    }
                }
            }, 1300);
        };
    });
}

// Botón para nueva frase
const btnNuevaFrase = document.getElementById('boton-nueva-frase');
if (btnNuevaFrase) {
    btnNuevaFrase.onclick = function() {
        if (yaSeMostroFraseHoy()) {
            // Cambiar el texto del botón temporalmente
            const textoOriginal = btnNuevaFrase.textContent;
            btnNuevaFrase.textContent = "¡Mañana más! ✨";
            btnNuevaFrase.style.opacity = "0.7";
            
            // Restaurar después de 2 segundos
            setTimeout(() => {
                btnNuevaFrase.textContent = textoOriginal;
                btnNuevaFrase.style.opacity = "1";
            }, 2000);
        }
        mostrarSiguienteFrase();
    };
}

// Efecto máquina de escribir para la frase central en frases.html con frase aleatoria
if (document.getElementById('frase-typing')) {
  const frasesTyping = [
    "Cree en ti, cada día es una nueva oportunidad.",
    "Hoy es un gran día para avanzar.",
    "Tu constancia te acerca a tus sueños.",
    "La motivación se construye paso a paso.",
    "Eres capaz de lograr cosas increíbles.",
    "Confía en tu proceso, todo suma.",
    "Un pequeño paso hoy, un gran logro mañana.",
    "La disciplina es tu mejor aliada.",
    "Sigue adelante, tu esfuerzo vale la pena.",
    "Cada día cuenta en tu camino de crecimiento."
  ];
  const texto = frasesTyping[Math.floor(Math.random() * frasesTyping.length)];
  const el = document.getElementById('frase-typing');
  let i = 0;
  function escribir() {
    if (i <= texto.length) {
      el.textContent = texto.slice(0, i) + '|';
      i++;
      setTimeout(escribir, 45);
    } else {
      el.textContent = texto; // Deja la frase completa al terminar
    }
  }
  escribir();
}

// Partículas flotantes suaves en el fondo (canvas)
(function() {
  const canvas = document.getElementById('particulas-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  const colors = ['rgba(168,155,201,0.18)','rgba(210,124,235,0.15)','rgba(255,255,255,0.10)','rgba(162,89,255,0.13)'];
  const particles = [];
  const num = Math.floor((w * h) / 3500); // ajusta densidad

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  for (let i = 0; i < num; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: randomBetween(8, 22),
      color: colors[Math.floor(Math.random() * colors.length)],
      dx: randomBetween(-0.08, 0.08),
      dy: randomBetween(-0.06, 0.06),
      alpha: randomBetween(0.5, 1)
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      // movimiento
      p.x += p.dx;
      p.y += p.dy;
      // rebote suave
      if (p.x < -30) p.x = w + 30;
      if (p.x > w + 30) p.x = -30;
      if (p.y < -30) p.y = h + 30;
      if (p.y > h + 30) p.y = -30;
    }
    requestAnimationFrame(draw);
  }

  draw();
  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });
})();

// Función para verificar si es un nuevo día y reiniciar si es necesario
function verificarNuevoDia() {
    const fechaActual = obtenerFechaActual();
    const ultimaFecha = localStorage.getItem('ultimaFechaFrase');
    
    if (ultimaFecha && ultimaFecha !== fechaActual) {
        // Es un nuevo día, limpiar el localStorage de la frase anterior
        localStorage.removeItem('ultimaFechaFrase');
        localStorage.removeItem('fraseDelDia');
        console.log('¡Nuevo día! Sistema de frases reiniciado.');
    }
}

// Mostrar frase motivacional al cargar frases.html
if (document.getElementById('frase-fortuna')) {
    verificarNuevoDia(); // Verificar si es un nuevo día
    mostrarFraseAleatoria();
}

// Cambiar tema claro/oscuro
document.addEventListener('DOMContentLoaded', function() {
  const btnTema = document.getElementById('boton-tema');
  const iconoTema = document.getElementById('icono-tema');
  // Función para aplicar el tema
  function aplicarTema(tema) {
    document.body.classList.remove('tema-claro', 'tema-oscuro');
    document.body.classList.add(tema);
    if (iconoTema) {
      iconoTema.textContent = tema === 'tema-claro' ? '☀️' : '🌙';
    }
  }
  // Leer preferencia guardada
  let tema = localStorage.getItem('temaColor');
  if (!tema) {
    tema = 'tema-oscuro';
    localStorage.setItem('temaColor', tema);
  }
  aplicarTema(tema);
  // Cambiar tema al hacer click
  if (btnTema) {
    btnTema.onclick = function() {
      let temaActual = document.body.classList.contains('tema-claro') ? 'tema-claro' : 'tema-oscuro';
      let nuevoTema = temaActual === 'tema-claro' ? 'tema-oscuro' : 'tema-claro';
      aplicarTema(nuevoTema);
      localStorage.setItem('temaColor', nuevoTema);
    };
  }
});

// Fondo de puntitos brillantes y estrellas fugaces (también para frases.html)
(function() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  let dpr = window.devicePixelRatio || 1;
  let stars = [];
  let shootingStars = [];
  const STAR_COUNT = Math.floor((w * h) / 1800);
  const SHOOTING_STAR_FREQ = 0.012;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  function randomStar() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.1 + 0.3,
      alpha: Math.random() * 0.5 + 0.5,
      twinkle: Math.random() * 0.05 + 0.01,
      phase: Math.random() * Math.PI * 2
    };
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(randomStar());
    }
  }

  function drawStars() {
    for (let s of stars) {
      s.phase += s.twinkle;
      let a = s.alpha + Math.sin(s.phase) * 0.3;
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, a));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }
  }

  function randomShootingStar() {
    const y = Math.random() * h * 0.7;
    const x = Math.random() < 0.5 ? -80 : w + 80;
    const dx = x < 0 ? (Math.random() * 4 + 7) : -(Math.random() * 4 + 7);
    const dy = Math.random() * 1.5 + 0.5;
    return {
      x, y,
      dx, dy,
      len: Math.random() * 80 + 120,
      life: 0,
      maxLife: Math.random() * 0.5 + 0.8
    };
  }

  function drawShootingStars() {
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      let s = shootingStars[i];
      s.x += s.dx;
      s.y += s.dy;
      s.life += 0.016;
      ctx.save();
      ctx.globalAlpha = 1 - s.life / s.maxLife;
      let grad = ctx.createLinearGradient(s.x, s.y, s.x - s.dx * s.len, s.y - s.dy * s.len);
      grad.addColorStop(0, '#fff');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.dx * s.len, s.y - s.dy * s.len);
      ctx.stroke();
      ctx.restore();
      if (s.life > s.maxLife) shootingStars.splice(i, 1);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    drawStars();
    drawShootingStars();
    if (Math.random() < SHOOTING_STAR_FREQ) {
      shootingStars.push(randomShootingStar());
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    createStars();
  });

  resize();
  createStars();
  animate();
})();


