// --- GAME DATA ---
const gameData = [
    // --- Reading Path (Indices 0-5) ---
    {
        type: 'intro',
        title: 'Caso: El Corazón del Nilo Desaparecido',
        text: `¡Saludos, joven detective! Soy Cleopatra, la Faraona de Egipto, y un misterio oscuro amenaza mi reino. El 'Corazón del Nilo', una joya ancestral que asegura la prosperidad de mi tierra, ha desaparecido de mi tesoro real. Mis guardias están perplejos, pero sé que se necesita una mente aguda y un ojo de detective como el tuyo para desvelar este enigma. ¿Aceptas ser mi joven investigador y ayudarme a recuperar el tesoro más importante de Egipto? Tu primera pista te espera... <br><br><b>Haz clic en "Siguiente Pista" para continuar.</b>`
    },
    {
        type: 'multiple-choice',
        title: 'Pista 1: La Identidad de la Faraona',
        text: 'La primera pista, joven investigador, está en la base de mi propio poder. Algunos susurran que soy solo una reina, pero mi verdadero título, el que me conecta con los dioses y me da la autoridad para proteger Egipto, es el de Faraona. Incluso el gran Julio César, mi astuto aliado romano, lo reconoció al llegar a Alejandría. Dime, ¿cuál es mi verdadero y poderoso título?',
        question: '¿Qué título me otorga el poder supremo en Egipto?',
        options: ['Princesa', 'Emperatriz', 'Faraona', 'Duquesa'],
        correctAnswer: 'Faraona',
        badgeId: 'faraona' // Badge for solving this puzzle
    },
    {
        type: 'numerical-sequence',
        title: 'Pista 2: El Mensaje Cifrado del Nilo',
        text: '¡Excelente! Eres digno de esta misión. Ahora, dirígete a las orillas del Nilo. Allí, Marco Antonio y yo observábamos con preocupación cómo el río crecía, amenazando con cubrir nuestros campos. Pero un anciano y sabio campesino, llamado Hori, se acercó con una sonrisa. "No temáis, Faraona," dijo. "El Nilo nos da un regalo. Primero, el río se desborda, inundando las orillas con agua y barro. Luego, el agua se retira lentamente, dejando atrás el limo fértil. Después, nosotros, los campesinos, siembran nuestras semillas en esta tierra rica. Y finalmente, con el sol y el agua restante, las cosechas crecen fuertes y son recogidas, alimentando a todo Egipto." Hori nos entregó un papiro con estos pasos desordenados, ¡ quizás una clave para el paradero del \'Corazón del Nilo\'! Asigna un número del 1 al 4 a cada paso para ordenar el "regalo" del Nilo según Hori.',
        question: 'Asigna un número (1 al 4) a cada paso para ordenar el "regalo" del Nilo según Hori:',
        items: [
            { text: 'El río se desborda', correctNum: 1 },
            { text: 'El limo fértil queda', correctNum: 2 },
            { text: 'Se siembran las semillas', correctNum: 3 },
            { text: 'Las cosechas crecen fuertes', correctNum: 4 }
        ],
        initialOrder: [0, 0, 0, 0],
        badgeId: 'nilo' // Badge for solving this puzzle
    },
    {
        type: 'hieroglyph',
        title: 'Pista 3: La Marca del Escarabajo Sagrado',
        text: '¡Magnífico! El mensaje del Nilo te ha guiado a un antiguo templo olvidado. Allí, mi fiel sirvienta Charmion, que siempre tiene un ojo para los detalles, descubrió un escarabajo de oro con un extraño jeroglífico grabado en su caparazón. El sacerdote Imhotep, antes de su misteriosa desaparición, solía estudiar estos símbolos sagrados. Creo que el jeroglífico es una pista sobre el lugar donde podría estar el \'Corazón del Nilo\', un lugar que es el corazón de mi propio reino. ¿Qué ciudad se esconde detrás de estos símbolos?',
        question: 'Descifra el jeroglífico del escarabajo para revelar el nombre de la ciudad clave:',
        decoder: { 
            'A': '𓂝', 'B': '𓃀', 'C': '𓎡', 'D': '𓂧', 'E': '𓇋', 'F': '𓆑', 'G': '𓎼', 'H': '𓉔', 'I': '𓇋', 
            'J': '𓏲', 'K': '𓎡', 'L': '𓃭', 'M': '𓅓', 'N': '𓈖', 'O': '𓍯', 'P': '𓊪', 'Q': '𓎡', 
            'R': '𓂋', 'S': '𓋴', 'T': '𓏏', 'U': '𓅱', 'V': '𓅷', 'W': '𓅷', 'X': '𓎡', 'Y': '𓇋', 'Z': '𓋴' 
        }, 
        answer: 'ALEJANDRIA',
        badgeId: 'escarabajo', // Badge for solving this puzzle
        clueImageSrc: 'imagen grande.png' // New: Image for hieroglyph puzzle
    },
    {
        type: 'riddle',
        title: 'Pista 4: El Acertijo de la Pirámide Oculta',
        text: 'La palabra "ALEJANDRIA" nos lleva a las grandes pirámides, donde se rumorea que el ladrón se esconde en las profundidades. Dentro de una cámara secreta, mi hijo, el pequeño Cesarión, que siempre fue muy curioso, encontró un antiguo acertijo grabado en la pared. Parece ser una clave numérica para un pasadizo oculto. El acertijo dice: "Soy el número de lados de la base de una pirámide, multiplicado por el número de ojos de un escarabajo. ¿Qué número soy?" Resuelve este enigma para abrir el camino.',
        question: "Resuelve el acertijo para encontrar el número clave:",
        answer: "8", // 4 lados * 2 ojos = 8
        badgeId: 'piramide' // Badge for solving this puzzle
    },
    {
        type: 'fill-in-blanks',
        title: 'Pista 5: La Confesión del Protector',
        text: '¡Has abierto el pasadizo, detective! Dentro, encontramos el \'Corazón del Nilo\' y un pergamino. En él, mi consejero, Ptolomeo, había dejado una nota: "Tomé el Corazón del Nilo para protegerlo. Esta joya es vital porque asegura la prosperidad de Egipto." Él creyó que así salvaba mi reino de una amenaza mayor. Para entender su motivo y cerrar el caso, debes recordar qué es lo que esta joya asegura para mi tierra.',
        question: "Completa la palabra que describe lo que el 'Corazón del Nilo' asegura:",
        blankPrefix: "Esta joya asegura la ",
        blankSuffix: " de Egipto.",
        answer: "PROSPERIDAD",
        badgeId: 'corazon-nilo' // Badge for solving this puzzle
    },
    // --- Standalone Chat (Index 6) ---
    {
        type: 'chat', 
        title: 'Audiencia con la Faraona',
        text: '¡Bienvenido, joven detective! Estoy a tu disposición para responder a tus preguntas sobre mi reino, los misterios que has descubierto, o cualquier curiosidad que tengas sobre el antiguo Egipto. ¡Pregunta con confianza!'
    },
    // --- Grammar Path (Indices 7-9) ---
    {
        type: 'grammar-intro', // Index 7
        title: 'Actividades Gramaticales: El Idioma de los Dioses',
        text: `¡Ah, joven detective! Has elegido el camino del conocimiento del lenguaje. El idioma de mi reino es tan rico como las tierras del Nilo. Aquí exploraremos las reglas que rigen nuestras palabras y frases. <br><br><b>Haz clic en "Siguiente Pista" para comenzar tu entrenamiento gramatical.</b>`
    },
    {
        type: 'millionaire-grammar', // Index 8: The "Who Wants to Be a Millionaire" style game
        title: 'QUIÉN QUIERE SER GRAMÁTICO: El Tesoro de las Palabras',
        text: '¡Bienvenido al gran desafío gramatical, joven escriba! Responde correctamente para avanzar y usa tus comodines sabiamente. ¿Estás listo para la gloria gramatical?',
        questions: [
            {
                sentence: 'El <b>faraón</b> gobernaba con sabiduría.',
                highlightedWord: 'faraón',
                options: { A: 'Verbo', B: 'Adjetivo', C: 'Sustantivo', D: 'Adverbio' },
                correctAnswer: 'C',
                correctCategory: 'Sustantivo',
                hint: 'Es una persona o un cargo. Nombra algo o alguien.'
            },
            {
                sentence: 'Los escribas <b>escribían</b> en papiros.',
                highlightedWord: 'escribían',
                options: { A: 'Adjetivo', B: 'Verbo', C: 'Pronombre', D: 'Preposición' },
                correctAnswer: 'B',
                correctCategory: 'Verbo',
                hint: 'Indica una acción que se realiza.'
            },
            {
                sentence: 'Cleopatra era una reina <b>hermosa</b>.',
                highlightedWord: 'hermosa',
                options: { A: 'Adverbio', B: 'Sustantivo', C: 'Adjetivo', D: 'Determinante' },
                correctAnswer: 'C',
                correctCategory: 'Adjetivo',
                hint: 'Describe una cualidad o característica del sustantivo.'
            },
            {
                sentence: '<b>Ella</b> visitó Roma con Julio César.',
                highlightedWord: 'Ella',
                options: { A: 'Sustantivo', B: 'Verbo', C: 'Adjetivo', D: 'Pronombre Personal' },
                correctAnswer: 'D',
                correctCategory: 'Pronombre Personal',
                hint: 'Sustituye a un nombre para evitar repetirlo.'
            },
            {
                sentence: 'Los egipcios adoraban <b>muchos</b> dioses.',
                highlightedWord: 'muchos',
                options: { A: 'Adverbio', B: 'Sustantivo', C: 'Determinante', D: 'Conjunción' },
                correctAnswer: 'C',
                correctCategory: 'Determinante',
                hint: 'Acompaña al sustantivo para especificarlo o cuantificarlo.'
            },
            {
                sentence: 'Construyeron templos <b>rápidamente</b>.',
                highlightedWord: 'rápidamente',
                options: { A: 'Adjetivo', B: 'Sustantivo', C: 'Adverbio', D: 'Verbo' },
                correctAnswer: 'C',
                correctCategory: 'Adverbio',
                hint: 'Modifica al verbo indicando cómo se realiza la acción.'
            },
            {
                sentence: 'La esfinge estaba <b>en</b> el desierto.',
                highlightedWord: 'en',
                options: { A: 'Verbo', B: 'Preposición', C: 'Adjetivo', D: 'Sustantivo' },
                correctAnswer: 'B',
                correctCategory: 'Preposición',
                hint: 'Conecta palabras y expresa relaciones.'
            }
        ],
        badgeId: 'gramatica' // Badge for completing the grammar game
    },
    // --- Reading Speed Path (Index 9) ---
    {
        type: 'reading-speed', // Index 9
        title: 'Agilidad Visual: Los Jeroglíficos Fugaces',
        text: '¡Prepárate para un desafío de velocidad, joven detective! Aquí verás palabras clave relacionadas con Egipto aparecer y desaparecer rápidamente. Tu misión es leerlas lo más rápido posible y luego recordarlas. Esto agudizará tu visión y tu mente. ¡Que Anubis te guíe!',
        words: ['PAPIRO', 'NILO', 'FARAÓN', 'ESFINGE', 'PIRÁMIDE', 'CLEOPATRA', 'JEROGLÍFICO', 'SARCOFAGO', 'TUMBA', 'MOMIA', 'OBELISCO', 'TEMPLO', 'ISIS', 'OSIRIS', 'HORUS', 'ANUBIS', 'ALEJANDRÍA', 'TESORO', 'ESCRIBA', 'JEROGLÍFICOS'],
        difficultyLevels: {
            easy: 1000, // 1 second per word
            medium: 700, // 0.7 seconds per word
            hard: 400 // 0.4 seconds per word
        },
        timeLimitSeconds: 60, // Total time for the test
        badgeId: 'velocidad-lectora' // Badge for completing a reading speed challenge
    },
    // --- Comparison Table (Index 10) ---
    {
        type: 'comparison-table', // Index 10
        title: 'Análisis de Evidencia: La Cronología de los Faraones',
        text: '¡Joven historiador, es hora de analizar! Para entender completamente la historia del "Corazón del Nilo", debemos ordenar los eventos y personajes clave. Completa la tabla con el orden correcto de reinado de estos líderes egipcios y romanos.',
        question: 'Ordena la cronología de los siguientes líderes:',
        items: [
            { text: 'Ramsés II', type: 'Pharaoh', period: 'Nuevo Reino', initialOrder: 0, correctOrder: 1 },
            { text: 'Akenatón', type: 'Pharaoh', period: 'Nuevo Reino', initialOrder: 0, correctOrder: 2 },
            { text: 'Tutankamón', type: 'Pharaoh', period: 'Nuevo Reino', initialOrder: 0, correctOrder: 3 },
            { text: 'Julio César', type: 'Roman Leader', period: 'República Romana', initialOrder: 0, correctOrder: 4 },
            { text: 'Cleopatra VII', type: 'Pharaoh', period: 'Período Ptolemaico', initialOrder: 0, correctOrder: 5 },
            { text: 'Augusto', type: 'Roman Emperor', period: 'Imperio Romano', initialOrder: 0, correctOrder: 6 }
        ],
        columns: ['Líder', 'Tipo', 'Período', 'Orden Correcto'],
        badgeId: 'cronologia'
    },
    // --- Nile Runner Game (Index 11) ---
    {
        type: 'nile-runner-game', // Index 11
        title: 'Nile Runner: Esquiva los Peligros del Nilo',
        text: '¡La aventura continúa! Para llegar al siguiente punto, deberás navegar por las peligrosas aguas del Nilo. Ayuda a tu balsa a esquivar los obstáculos y a recoger los papiros que contienen las próximas pistas. ¡Mucha suerte, valiente navegante!',
        instructions: 'Usa las **flechas izquierda y derecha** para mover tu balsa y **esquivar los cocodrilos**. Recoge los **papiros** para ganar puntos. ¡Cada 100 puntos desbloqueas una insignia!',
        badgeId: 'nile-runner' // Badge for playing the game and getting a good score
    }
];

// --- BADGE DATA ---
const allBadges = {
    'faraona': { name: 'Insignia Faraona', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2822/2822453.png', description: 'Has identificado a la Faraona.', unlocked: false },
    'nilo': { name: 'Maestro del Nilo', imageUrl: 'https://cdn-icons-png.flaticon.com/512/3067/3067825.png', description: 'Has descifrado el ciclo del Nilo.', unlocked: false },
    'escarabajo': { name: 'Ojo de Escarabajo', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2361/2361660.png', description: 'Has decodificado el jeroglífico del escarabajo.', unlocked: false },
    'piramide': { name: 'Caminante de Pirámides', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2953/2953508.png', description: 'Has resuelto el acertijo de la pirámide.', unlocked: false },
    'corazon-nilo': { name: 'Protector del Nilo', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1057/1057007.png', description: 'Has recuperado el Corazón del Nilo.', unlocked: false },
    'gramatica': { name: 'Escriba Real', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2908/2908182.png', description: 'Has completado el desafío de gramática.', unlocked: false },
    'velocidad-lectora': { name: 'Relámpago de Luxor', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2908/2908182.png', description: 'Has dominado la velocidad lectora.', unlocked: false },
    'cronologia': { name: 'Historiador Egipcio', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921501.png', description: 'Has ordenado la cronología de los líderes.', unlocked: false },
    'nile-runner': { name: 'Navegante del Nilo', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2704/2704043.png', description: 'Has navegado el Nilo con destreza.', unlocked: false },
    'nile-runner-expert': { name: 'Navegante Experto', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2704/2704043.png', description: '¡Has demostrado ser un experto navegante del Nilo con 100 puntos!', unlocked: false },
    'nile-runner-master': { name: 'Maestro del Nilo', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2704/2704043.png', description: '¡Has alcanzado la maestría con 200 puntos en Nile Runner!', unlocked: false }
};

// --- GLOBAL GAME STATE ---
let currentPath = 'reading'; // 'reading', 'grammar', 'reading-speed', 'chat', 'nile-runner', 'comparison-table'
let currentStepIndex = 0;
let studentName = '';
let currentChallengeAttempted = false; // To track if the current challenge has been attempted for badge logic

// Game state for Millionaire Game
let millionaireCurrentQuestionIndex = 0;
let millionaireLifelines = {
    '50-50': true,
    'audience': true,
    'call': true
};

// Game state for Reading Speed
let readingSpeedInterval;
let currentReadingSpeedWordIndex = 0;
let readingSpeedWords = [];
let readingSpeedDifficulty = 'easy'; // Default difficulty
let wordsReadCount = 0; // New: Counter for words read
let readingSpeedTimer; // New: Timer for reading speed test

// Game state for Nile Runner
let nileRunnerGame; // Will hold the NileRunnerGame instance
let nileRunnerScore = 0;
let nileRunnerBadgesAwarded = {
    'nile-runner-expert': false,
    'nile-runner-master': false
};

// --- DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const studentNameInput = document.getElementById('student-name-input');
const submitNameBtn = document.getElementById('submit-name-btn');
const startFeedbackArea = document.getElementById('start-feedback-area');

const activitySelectionScreen = document.getElementById('activity-selection-screen');
const displayStudentName = document.getElementById('display-student-name');
const activityOptions = document.querySelectorAll('.activity-option');
const startSelectedActivityBtn = document.getElementById('start-selected-activity-btn');
const activitySelectionFeedback = document.getElementById('activity-selection-feedback');

const gameContainer = document.getElementById('game-container');
const contentArea = document.getElementById('content-area');
const feedbackArea = document.getElementById('feedback-area');
const nextBtn = document.getElementById('next-btn');
const allBadgesDisplay = document.getElementById('all-badges-display');

const genericModal = document.getElementById('generic-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');

// --- EVENT LISTENERS (Modificado para incluir el cierre del modal) ---
submitNameBtn.addEventListener('click', handleNameSubmission);
studentNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleNameSubmission();
    }
});

activityOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove 'selected' from all options
        activityOptions.forEach(opt => opt.classList.remove('selected'));
        // Add 'selected' to the clicked option
        option.classList.add('selected');
        currentPath = option.dataset.pathType;
        startSelectedActivityBtn.disabled = false; // Enable the start button
        showFeedback(activitySelectionFeedback, '', false); // Clear feedback
    });
});

startSelectedActivityBtn.addEventListener('click', () => {
    startSelectedActivity();
});

nextBtn.addEventListener('click', handleNext);

// Listener para el botón de cerrar modal
// Es importante que este código se ejecute DESPUÉS de que el DOM esté disponible
// Por eso, se envuelve en un 'DOMContentLoaded' si no es la única manera,
// o se coloca al final del script si se carga como 'module' al final del body.
// En este caso, al estar en un módulo, se ejecuta una vez cargado el script.
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.modal-close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    // Si quisieras cerrar el modal al hacer clic fuera de su contenido:
    if (genericModal) {
        genericModal.addEventListener('click', (event) => {
            if (event.target === genericModal) {
                closeModal();
            }
        });
    }
});


// --- HELPER FUNCTIONS ---
function showFeedback(element, message, isError = false) {
    element.textContent = message;
    element.classList.remove('opacity-0');
    element.classList.remove('text-green-600', 'text-red-600');
    element.classList.add(isError ? 'text-red-600' : 'text-green-600');
    setTimeout(() => {
        element.classList.add('opacity-0');
    }, 3000);
}

function updateBadgeDisplay() {
    allBadgesDisplay.innerHTML = ''; // Clear existing badges
    for (const badgeId in allBadges) {
        const badge = allBadges[badgeId];
        const badgeItem = document.createElement('div');
        badgeItem.className = `badge-item flex flex-col items-center text-center w-24 transition-all duration-300 ease-in-out ${badge.unlocked ? 'unlocked' : ''}`;
        badgeItem.title = badge.description; // Tooltip for description

        const badgeImage = document.createElement('img');
        badgeImage.src = badge.imageUrl;
        badgeImage.alt = badge.name;
        badgeImage.className = 'w-16 h-16 rounded-full border-3 mb-1';
        badgeImage.style.borderColor = badge.unlocked ? '#FACC15' : '#c0a16b'; // Brighter gold for unlocked

        const badgeName = document.createElement('span');
        badgeName.className = 'text-xs font-bold text-[#4a3a2a]';
        badgeName.textContent = badge.name;

        badgeItem.appendChild(badgeImage);
        badgeItem.appendChild(badgeName);
        allBadgesDisplay.appendChild(badgeItem);
    }
}

function unlockBadge(badgeId) {
    if (allBadges[badgeId] && !allBadges[badgeId].unlocked) {
        allBadges[badgeId].unlocked = true;
        showModal('¡Insignia Desbloqueada!', `¡Has ganado la insignia "${allBadges[badgeId].name}"!`, allBadges[badgeId].imageUrl);
        updateBadgeDisplay();
    }
}

function showModal(title, message, imageUrl = '') {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    // Clear previous images if any
    const existingImage = modalMessage.querySelector('img');
    if (existingImage) {
        existingImage.remove();
    }

    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = title;
        img.className = 'mx-auto mt-4 mb-4 w-24 h-24 object-contain'; // Tailwind classes for styling
        modalMessage.prepend(img); // Add image before the message text
    }

    genericModal.classList.remove('hidden');
}

function closeModal() {
    genericModal.classList.add('hidden');
    modalTitle.textContent = '';
    modalMessage.textContent = '';
}

function saveGameState() {
    const gameState = {
        studentName: studentName,
        allBadges: allBadges,
        currentPath: currentPath,
        currentStepIndex: currentStepIndex,
        millionaireCurrentQuestionIndex: millionaireCurrentQuestionIndex,
        millionaireLifelines: millionaireLifelines,
        nileRunnerScore: nileRunnerScore,
        nileRunnerBadgesAwarded: nileRunnerBadgesAwarded
    };
    localStorage.setItem('cleopatraGameSave', JSON.stringify(gameState));
    showFeedback(startFeedbackArea, 'Partida guardada automáticamente.', false);
}

function loadGameState() {
    const savedState = localStorage.getItem('cleopatraGameSave');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        studentName = gameState.studentName || '';
        Object.assign(allBadges, gameState.allBadges); // Merge unlocked status
        currentPath = gameState.currentPath || 'reading';
        currentStepIndex = gameState.currentStepIndex || 0;
        millionaireCurrentQuestionIndex = gameState.millionaireCurrentQuestionIndex || 0;
        millionaireLifelines = gameState.millionaireLifelines || { '50-50': true, 'audience': true, 'call': true };
        nileRunnerScore = gameState.nileRunnerScore || 0;
        nileRunnerBadgesAwarded = gameState.nileRunnerBadgesAwarded || { 'nile-runner-expert': false, 'nile-runner-master': false };

        if (studentName) {
            startScreen.classList.add('hidden');
            activitySelectionScreen.classList.remove('hidden');
            displayStudentName.textContent = studentName;
            updateBadgeDisplay();
        }
        showFeedback(startFeedbackArea, 'Partida cargada automáticamente.', false);
    }
}

function resetGame() {
    if (confirm('¿Estás seguro de que quieres reiniciar la partida? Se borrará todo tu progreso.')) {
        localStorage.removeItem('cleopatraGameSave');
        studentName = '';
        currentPath = 'reading';
        currentStepIndex = 0;
        millionaireCurrentQuestionIndex = 0;
        millionaireLifelines = { '50-50': true, 'audience': true, 'call': true };
        nileRunnerScore = 0;
        nileRunnerBadgesAwarded = { 'nile-runner-expert': false, 'nile-runner-master': false };
        for (const badgeId in allBadges) {
            allBadges[badgeId].unlocked = false;
        }
        // Reset game elements to initial state
        startScreen.classList.remove('hidden');
        activitySelectionScreen.classList.add('hidden');
        gameContainer.classList.add('hidden');
        contentArea.innerHTML = '';
        updateBadgeDisplay(); // Clear badges from display
        studentNameInput.value = ''; // Clear name input
        submitNameBtn.disabled = true; // Disable start button
        showFeedback(startFeedbackArea, 'Partida reiniciada.', false);
    }
}


// --- CORE GAME LOGIC ---

function handleNameSubmission() {
    const name = studentNameInput.value.trim();
    if (name) {
        studentName = name;
        displayStudentName.textContent = studentName;
        startScreen.classList.add('hidden');
        activitySelectionScreen.classList.remove('hidden');
        saveGameState();
    } else {
        showFeedback(startFeedbackArea, 'Por favor, introduce tu nombre.', true);
    }
}

function startSelectedActivity() {
    activitySelectionScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    currentStepIndex = 0; // Always start new activity path from index 0 for that path
    
    // Adjust currentStepIndex based on selected path
    if (currentPath === 'reading') {
        // 'reading' path starts at index 0 of gameData
        currentStepIndex = 0;
    } else if (currentPath === 'chat') {
        // 'chat' is at index 6
        currentStepIndex = 6;
    } else if (currentPath === 'grammar') {
        // 'grammar' path starts at index 7
        currentStepIndex = 7;
    } else if (currentPath === 'reading-speed') {
        // 'reading-speed' path starts at index 9
        currentStepIndex = 9;
    } else if (currentPath === 'comparison-table') {
        // 'comparison-table' path starts at index 10
        currentStepIndex = 10;
    } else if (currentPath === 'nile-runner-game') {
        // 'nile-runner-game' path starts at index 11
        currentStepIndex = 11;
    }

    renderPage(currentStepIndex);
    updateBadgeDisplay();
}

function renderPage(index) {
    const pageData = gameData[index];
    contentArea.innerHTML = ''; // Clear previous content
    feedbackArea.textContent = ''; // Clear previous feedback
    nextBtn.style.display = 'block'; // Show next button by default
    nextBtn.textContent = 'Siguiente Pista'; // Default text
    nextBtn.disabled = false; // Enable next button by default
    currentChallengeAttempted = false; // Reset challenge attempt status

    // Ensure navigation area is visible for all game pages except start/activity selection
    document.getElementById('navigation-area').style.display = 'flex';

    switch (pageData.type) {
        case 'intro':
        case 'grammar-intro':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-3xl font-bold text-center mb-4">${pageData.title}</h2>
                <p class="text-lg mb-6">${pageData.text}</p>
            `;
            break;

        case 'multiple-choice':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4">${pageData.title}</h2>
                <p class="text-lg mb-6">${pageData.text}</p>
                <p class="text-xl font-bold mb-4">${pageData.question}</p>
                <div id="options-container" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${pageData.options.map((option, i) => `
                        <button class="choice-option p-4 rounded-lg text-lg text-left" data-answer="${option}">
                            ${String.fromCharCode(65 + i)}. ${option}
                        </button>
                    `).join('')}
                </div>
            `;
            document.querySelectorAll('.choice-option').forEach(button => {
                button.addEventListener('click', (e) => {
                    currentChallengeAttempted = true;
                    const selectedAnswer = e.target.dataset.answer;
                    if (selectedAnswer === pageData.correctAnswer) {
                        showFeedback(feedbackArea, '¡Correcto, joven detective!', false);
                        unlockBadge(pageData.badgeId);
                        nextBtn.disabled = false;
                    } else {
                        showFeedback(feedbackArea, 'Respuesta incorrecta. Inténtalo de nuevo.', true);
                        nextBtn.disabled = true;
                    }
                });
            });
            nextBtn.disabled = true; // Disable until correct answer is chosen
            break;

        case 'numerical-sequence':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4">${pageData.title}</h2>
                <p class="text-lg mb-6">${pageData.text}</p>
                <p class="text-xl font-bold mb-4">${pageData.question}</p>
                <div id="sequence-items-container" class="space-y-3">
                    ${pageData.items.map((item, i) => `
                        <div class="numerical-sequence-item p-3 border rounded-lg flex justify-between items-center bg-white" data-index="${i}">
                            <span>${item.text}</span>
                            <div class="number-control flex items-center gap-2">
                                <button class="num-btn decrease-num-btn" data-target-index="${i}">-</button>
                                <span class="number-display" data-current-num="${pageData.initialOrder[i]}">${pageData.initialOrder[i]}</span>
                                <button class="num-btn increase-num-btn" data-target-index="${i}">+</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button id="check-sequence-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-6">Verificar Orden</button>
            `;
            nextBtn.disabled = true;

            document.querySelectorAll('.increase-num-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const targetIndex = parseInt(e.target.dataset.targetIndex);
                    const display = e.target.previousElementSibling;
                    let currentNum = parseInt(display.dataset.currentNum);
                    if (currentNum < pageData.items.length) { // Limit to max possible order number
                        currentNum++;
                        display.textContent = currentNum;
                        display.dataset.currentNum = currentNum;
                        pageData.initialOrder[targetIndex] = currentNum;
                    }
                });
            });

            document.querySelectorAll('.decrease-num-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const targetIndex = parseInt(e.target.dataset.targetIndex);
                    const display = e.target.nextElementSibling;
                    let currentNum = parseInt(display.dataset.currentNum);
                    if (currentNum > 0) { // Ensure it doesn't go below 0
                        currentNum--;
                        display.textContent = currentNum;
                        display.dataset.currentNum = currentNum;
                        pageData.initialOrder[targetIndex] = currentNum;
                    }
                });
            });


            document.getElementById('check-sequence-btn').addEventListener('click', () => {
                currentChallengeAttempted = true;
                const userOrder = pageData.initialOrder;
                const correctOrder = pageData.items.map(item => item.correctNum);

                // Simple check: create a map of correct order for easy lookup
                const isCorrect = userOrder.every((num, idx) => num === correctOrder[idx]);

                if (isCorrect && !userOrder.includes(0)) { // Ensure all numbers are assigned and correct
                    showFeedback(feedbackArea, '¡Orden correcto! Has descifrado el mensaje del Nilo.', false);
                    unlockBadge(pageData.badgeId);
                    nextBtn.disabled = false;
                } else {
                    showFeedback(feedbackArea, 'Orden incorrecto o números incompletos. Revisa tu secuencia.', true);
                    nextBtn.disabled = true;
                }
            });
            break;

        case 'hieroglyph':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4">${pageData.title}</h2>
                <p class="text-lg mb-6">${pageData.text}</p>
                ${pageData.clueImageSrc ? `<div class="flex justify-center mb-6"><img src="${pageData.clueImageSrc}" alt="Clue Image" class="max-w-xs md:max-w-sm rounded-lg shadow-lg"></div>` : ''}
                <p class="text-xl font-bold mb-4">${pageData.question}</p>
                <div class="flex flex-wrap justify-center gap-2 mb-6" id="hieroglyph-display">
                    ${pageData.answer.split('').map(char => `<span class="inline-block border-b-2 border-[#c0a16b] text-3xl mx-1 w-10 text-center font-cinzel">${pageData.decoder[char] || '?'}</span>`).join('')}
                </div>
                <input type="text" id="hieroglyph-answer-input" class="hieroglyph-input p-3 rounded-md border-2 border-[#c0a16b] bg-[#fef9e7] text-[#4a3a2a] text-lg focus:outline-none focus:ring-2 focus:ring-[#4a3a2a] block mx-auto uppercase" placeholder="Tu Respuesta">
                <button id="check-hieroglyph-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-6 block mx-auto">Decifrar</button>
            `;
            nextBtn.disabled = true;

            document.getElementById('check-hieroglyph-btn').addEventListener('click', () => {
                currentChallengeAttempted = true;
                const userAnswer = document.getElementById('hieroglyph-answer-input').value.trim().toUpperCase();
                if (userAnswer === pageData.answer) {
                    showFeedback(feedbackArea, '¡Jeroglífico decifrado! ¡Excelente trabajo!', false);
                    unlockBadge(pageData.badgeId);
                    nextBtn.disabled = false;
                } else {
                    showFeedback(feedbackArea, 'Respuesta incorrecta. Sigue intentándolo.', true);
                    nextBtn.disabled = true;
                }
            });
            break;

        case 'riddle':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4">${pageData.title}</h2>
                <p class="text-lg mb-6">${pageData.text}</p>
                <p class="text-xl font-bold mb-4">${pageData.question}</p>
                <input type="number" id="riddle-answer-input" class="riddle-input p-3 rounded-md border-2 border-[#c0a16b] bg-[#fef9e7] text-[#4a3a2a] text-lg focus:outline-none focus:ring-2 focus:ring-[#4a3a2a] block mx-auto" placeholder="Número">
                <button id="check-riddle-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-6 block mx-auto">Resolver</button>
            `;
            nextBtn.disabled = true;

            document.getElementById('check-riddle-btn').addEventListener('click', () => {
                currentChallengeAttempted = true;
                const userAnswer = document.getElementById('riddle-answer-input').value.trim();
                if (userAnswer === pageData.answer) {
                    showFeedback(feedbackArea, '¡Acertijo resuelto! El camino se abre.', false);
                    unlockBadge(pageData.badgeId);
                    nextBtn.disabled = false;
                } else {
                    showFeedback(feedbackArea, 'Número incorrecto. Piensa bien.', true);
                    nextBtn.disabled = true;
                }
            });
            break;

        case 'fill-in-blanks':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4">${pageData.title}</h2>
                <p class="text-lg mb-6">${pageData.text}</p>
                <p class="text-xl font-bold mb-4">${pageData.question}</p>
                <div class="flex justify-center items-center flex-wrap gap-2">
                    <span class="text-lg">${pageData.blankPrefix}</span>
                    <input type="text" id="blank-answer-input" class="fill-in-blank-input p-3 rounded-md border-2 border-[#c0a16b] bg-[#fef9e7] text-[#4a3a2a] text-lg focus:outline-none focus:ring-2 focus:ring-[#4a3a2a] uppercase" placeholder="Palabra">
                    <span class="text-lg">${pageData.blankSuffix}</span>
                </div>
                <button id="check-blank-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-6 block mx-auto">Comprobar</button>
            `;
            nextBtn.disabled = true;

            document.getElementById('check-blank-btn').addEventListener('click', () => {
                currentChallengeAttempted = true;
                const userAnswer = document.getElementById('blank-answer-input').value.trim().toUpperCase();
                if (userAnswer === pageData.answer) {
                    showFeedback(feedbackArea, '¡Felicidades! Has cerrado el caso del Corazón del Nilo.', false);
                    unlockBadge(pageData.badgeId);
                    nextBtn.disabled = false;
                } else {
                    showFeedback(feedbackArea, 'Palabra incorrecta. Revisa tu conocimiento.', true);
                    nextBtn.disabled = true;
                }
            });
            break;

        case 'chat':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4 text-center">${pageData.title}</h2>
                <p class="text-lg mb-6 text-center">${pageData.text}</p>
                <div class="chat-window" id="chat-messages">
                    </div>
                <div class="chat-input-container flex">
                    <input type="text" id="chat-input" class="flex-grow p-3 rounded-md border-2 border-[#c0a16b] bg-[#fef9e7] text-[#4a3a2a] text-lg focus:outline-none focus:ring-2 focus:ring-[#4a3a2a]" placeholder="Escribe tu pregunta a Cleopatra...">
                    <button id="send-chat-btn" class="detective-btn font-cinzel font-bold py-2 px-6 rounded-lg text-lg">Enviar</button>
                </div>
            `;
            nextBtn.style.display = 'none'; // Hide next button for chat
            const chatMessages = document.getElementById('chat-messages');
            const chatInput = document.getElementById('chat-input');
            const sendChatBtn = document.getElementById('send-chat-btn');
            
            let chatHistory = []; // Stores messages for PDF export

            sendChatBtn.addEventListener('click', () => sendChatMessage());
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendChatMessage();
                }
            });

            async function sendChatMessage() {
                const userMessage = chatInput.value.trim();
                if (userMessage) {
                    appendMessage('user', userMessage);
                    chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
                    chatInput.value = '';
                    sendChatBtn.disabled = true; // Disable while thinking

                    const thinkingMessage = appendMessage('cleo', 'Cleopatra está pensando...');
                    thinkingMessage.classList.add('thinking'); // Add thinking animation


                    try {
                        const response = await fetch('YOUR_GEMINI_API_ENDPOINT', { // Placeholder API endpoint
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ message: userMessage })
                        });
                        const data = await response.json();
                        chatMessages.removeChild(thinkingMessage); // Remove thinking message
                        appendMessage('cleo', data.reply);
                        chatHistory.push({ role: 'cleo', parts: [{ text: data.reply }] });

                    } catch (error) {
                        console.error('Error fetching chat response:', error);
                        chatMessages.removeChild(thinkingMessage); // Remove thinking message
                        appendMessage('cleo', 'Lo siento, no puedo responder en este momento. Inténtalo más tarde.');
                    } finally {
                        sendChatBtn.disabled = false; // Re-enable button
                        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
                    }
                }
            }

            function appendMessage(role, text) {
                const messageRow = document.createElement('div');
                messageRow.className = `chat-message-row ${role}`;

                const avatar = document.createElement('img');
                avatar.className = 'chat-avatar';
                avatar.src = role === 'user' ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' : 'https://cdn-icons-png.flaticon.com/512/162/162737.png'; // User / Cleopatra
                avatar.alt = role === 'user' ? 'Tú' : 'Cleopatra';

                const bubble = document.createElement('div');
                bubble.className = `chat-bubble chat-bubble-${role}`;
                bubble.textContent = text;

                messageRow.appendChild(avatar);
                messageRow.appendChild(bubble);
                chatMessages.appendChild(messageRow);
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
                return messageRow; // Return the message element to modify it (e.g., remove thinking class)
            }

            // Function to generate PDF summary of chat
            function exportChatToPdf(chatHistory) {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                
                doc.setFontSize(22);
                doc.text("Registro de Conversación con Cleopatra", 105, 20, null, null, "center");
                
                doc.setFontSize(12);
                doc.setTextColor(100);

                let y = 30;
                chatHistory.forEach(msg => {
                    const prefix = msg.role === 'user' ? 'Tú: ' : 'Cleopatra: ';
                    const text = prefix + msg.parts[0].text;
                    const lines = doc.splitTextToSize(text, 180); // Max width 180mm
                    doc.text(lines, 10, y);
                    y += (lines.length * 7) + 2; // Line height + small margin
                    if (y > 280) { // Check for new page
                        doc.addPage();
                        y = 20;
                    }
                });

                doc.save('Chat_Cleopatra.pdf');
            }

            // Add an 'End Chat' button and corresponding logic
            const endChatBtn = document.createElement('button');
            endChatBtn.id = 'end-chat-btn';
            endChatBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4 block mx-auto';
            endChatBtn.textContent = 'Terminar Conversación y Exportar PDF';
            contentArea.appendChild(endChatBtn);

            endChatBtn.addEventListener('click', () => {
                exportChatToPdf(chatHistory);
                // Optionally, navigate back to activity selection or end screen
                showFeedback(feedbackArea, 'Conversación finalizada y exportada a PDF.', false);
                nextBtn.textContent = 'Volver al Menú de Actividades';
                nextBtn.style.display = 'block';
                nextBtn.disabled = false;
                currentStepIndex = -1; // Indicate a return to main menu or end state
                // To avoid immediate re-rendering of chat if handleNext is called right after
                nextBtn.removeEventListener('click', handleNext);
                nextBtn.addEventListener('click', () => {
                    activitySelectionScreen.classList.remove('hidden');
                    gameContainer.classList.add('hidden');
                    updateBadgeDisplay();
                });
            });

            break;

        case 'millionaire-grammar':
            let currentQuestion = pageData.questions[millionaireCurrentQuestionIndex];
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4 text-center">${pageData.title}</h2>
                <p class="text-lg mb-6 text-center">${pageData.text}</p>

                <div id="millionaire-game-area" class="bg-white rounded-lg p-6 shadow-md">
                    <div class="mb-4 text-center">
                        <p class="text-xl font-bold">Pregunta ${millionaireCurrentQuestionIndex + 1}:</p>
                        <p class="text-lg mt-2">${currentQuestion.sentence}</p>
                        <p class="text-lg font-bold mt-2">¿Qué tipo de palabra es "<span class="text-[#c0a16b]">${currentQuestion.highlightedWord}</span>"?</p>
                    </div>

                    <div id="options-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        ${Object.keys(currentQuestion.options).map(key => `
                            <button class="millionaire-option-btn choice-option p-4 rounded-lg text-lg text-left" data-key="${key}">
                                <b>${key}.</b> ${currentQuestion.options[key]}
                            </button>
                        `).join('')}
                    </div>

                    <div id="lifelines-area" class="flex justify-center gap-4 mb-4">
                        <button id="fifty-fifty-btn" class="detective-btn py-2 px-4 rounded-lg ${millionaireLifelines['50-50'] ? '' : 'disabled-btn'}" ${millionaireLifelines['50-50'] ? '' : 'disabled'}>
                            50:50
                        </button>
                        <button id="hint-btn" class="detective-btn py-2 px-4 rounded-lg ${millionaireLifelines['audience'] ? '' : 'disabled-btn'}" ${millionaireLifelines['audience'] ? '' : 'disabled'}>
                            Pista
                        </button>
                    </div>
                    <div id="millionaire-feedback" class="text-center font-bold text-lg h-8 feedback opacity-0"></div>
                </div>
            `;
            nextBtn.style.display = 'none'; // Hide next button for this game

            const optionButtons = document.querySelectorAll('.millionaire-option-btn');
            const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
            const hintBtn = document.getElementById('hint-btn');
            const millionaireFeedback = document.getElementById('millionaire-feedback');

            optionButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    currentChallengeAttempted = true;
                    const selectedKey = e.target.dataset.key;
                    if (selectedKey === currentQuestion.correctAnswer) {
                        showFeedback(millionaireFeedback, '¡Correcto! Avanzas al siguiente nivel.', false);
                        millionaireCurrentQuestionIndex++;
                        if (millionaireCurrentQuestionIndex < pageData.questions.length) {
                            setTimeout(() => { renderPage(index); }, 1500); // Load next question
                        } else {
                            unlockBadge(pageData.badgeId);
                            showFeedback(millionaireFeedback, '¡Felicidades! Has completado el desafío gramatical.', false);
                            // Transition to end of activity
                            nextBtn.style.display = 'block';
                            nextBtn.textContent = 'Volver al Menú de Actividades';
                            nextBtn.disabled = false;
                        }
                    } else {
                        showFeedback(millionaireFeedback, 'Incorrecto. Intenta de nuevo.', true);
                        // Optionally, reset game or allow retry for current question
                    }
                });
            });

            fiftyFiftyBtn.addEventListener('click', () => {
                if (millionaireLifelines['50-50']) {
                    millionaireLifelines['50-50'] = false;
                    fiftyFiftyBtn.disabled = true;
                    fiftyFiftyBtn.classList.add('disabled-btn');

                    const incorrectOptions = Object.keys(currentQuestion.options).filter(key => key !== currentQuestion.correctAnswer);
                    const optionsToRemove = getRandomElements(incorrectOptions, 2); // Remove two incorrect options

                    optionsToRemove.forEach(key => {
                        document.querySelector(`.millionaire-option-btn[data-key="${key}"]`).style.visibility = 'hidden';
                    });
                    showFeedback(millionaireFeedback, 'Comodín 50:50 usado.', false);
                }
            });

            hintBtn.addEventListener('click', () => {
                if (millionaireLifelines['audience']) { // Renamed from audience to hint for clarity
                    millionaireLifelines['audience'] = false;
                    hintBtn.disabled = true;
                    hintBtn.classList.add('disabled-btn');
                    showModal('Pista de Cleopatra', currentQuestion.hint);
                    showFeedback(millionaireFeedback, 'Pista usada.', false);
                }
            });

            function getRandomElements(arr, num) {
                const shuffled = [...arr].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, num);
            }

            break;

        case 'reading-speed':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4 text-center">${pageData.title}</h2>
                <p class="text-lg mb-6 text-center">${pageData.text}</p>
                
                <div class="flex justify-center items-center gap-4 mb-6">
                    <label for="difficulty-select" class="text-lg font-bold">Dificultad:</label>
                    <select id="difficulty-select" class="p-2 rounded-md border-2 border-[#c0a16b] bg-[#fef9e7] text-[#4a3a2a]">
                        <option value="easy">Fácil</option>
                        <option value="medium">Medio</option>
                        <option value="hard">Difícil</option>
                    </select>
                </div>

                <div id="word-display" class="text-5xl font-bold text-center h-20 flex items-center justify-center mb-6 text-[#c0a16b]">
                    </div>
                <div class="text-center text-xl font-bold mb-4">Palabras leídas: <span id="words-read-count">0</span></div>
                <div class="text-center text-xl font-bold mb-6">Tiempo restante: <span id="time-remaining">60</span> segundos</div>

                <div class="flex justify-center gap-4">
                    <button id="start-reading-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Iniciar Prueba</button>
                    <button id="stop-reading-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl hidden">Detener Prueba</button>
                </div>
            `;
            nextBtn.style.display = 'none';

            const wordDisplay = document.getElementById('word-display');
            const wordsReadCountSpan = document.getElementById('words-read-count');
            const timeRemainingSpan = document.getElementById('time-remaining');
            const startReadingBtn = document.getElementById('start-reading-btn');
            const stopReadingBtn = document.getElementById('stop-reading-btn');
            const difficultySelect = document.getElementById('difficulty-select');

            let timerSeconds = pageData.timeLimitSeconds;
            wordsReadCount = 0; // Reset count
            
            function startReadingSpeedTest() {
                startReadingBtn.classList.add('hidden');
                stopReadingBtn.classList.remove('hidden');
                difficultySelect.disabled = true;
                wordsReadCount = 0;
                wordsReadCountSpan.textContent = wordsReadCount;
                timerSeconds = pageData.timeLimitSeconds;
                timeRemainingSpan.textContent = timerSeconds;

                readingSpeedWords = shuffleArray([...pageData.words]); // Shuffle words for each test
                currentReadingSpeedWordIndex = 0;

                displayNextWord();

                readingSpeedTimer = setInterval(() => {
                    timerSeconds--;
                    timeRemainingSpan.textContent = timerSeconds;
                    if (timerSeconds <= 0) {
                        stopReadingSpeedTest();
                    }
                }, 1000);
            }

            function stopReadingSpeedTest() {
                clearInterval(readingSpeedInterval);
                clearInterval(readingSpeedTimer);
                wordDisplay.textContent = '¡Tiempo fuera!';
                startReadingBtn.classList.remove('hidden');
                stopReadingBtn.classList.add('hidden');
                difficultySelect.disabled = false;
                showModal('Prueba de Velocidad Finalizada', `Leíste ${wordsReadCount} palabras en ${pageData.timeLimitSeconds - timerSeconds} segundos.`, '');
                unlockBadge(pageData.badgeId); // Unlock badge just for completing
                nextBtn.style.display = 'block';
                nextBtn.textContent = 'Volver al Menú de Actividades';
                nextBtn.disabled = false;
            }

            function displayNextWord() {
                clearInterval(readingSpeedInterval);
                if (currentReadingSpeedWordIndex < readingSpeedWords.length) {
                    const word = readingSpeedWords[currentReadingSpeedWordIndex];
                    wordDisplay.textContent = word;
                    wordsReadCount++;
                    wordsReadCountSpan.textContent = wordsReadCount;
                    currentReadingSpeedWordIndex++;
                    readingSpeedInterval = setTimeout(displayNextWord, pageData.difficultyLevels[readingSpeedDifficulty]);
                } else {
                    wordDisplay.textContent = 'Palabras agotadas. ¡Bien hecho!';
                    stopReadingSpeedTest();
                }
            }

            startReadingBtn.addEventListener('click', startReadingSpeedTest);
            stopReadingBtn.addEventListener('click', stopReadingSpeedTest);
            difficultySelect.addEventListener('change', (e) => {
                readingSpeedDifficulty = e.target.value;
            });

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
            break;

        case 'comparison-table':
            // Initialize userOrder for table items if not already set
            pageData.items.forEach(item => {
                if (typeof item.userOrder === 'undefined') {
                    item.userOrder = 0;
                }
            });

            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4 text-center">${pageData.title}</h2>
                <p class="text-lg mb-6 text-center">${pageData.text}</p>
                <p class="text-xl font-bold mb-4 text-center">${pageData.question}</p>
                
                <div class="overflow-x-auto">
                    <table class="comparison-table w-full border-collapse">
                        <thead>
                            <tr>
                                ${pageData.columns.map(col => `<th class="px-4 py-2">${col}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody id="comparison-table-body">
                            ${pageData.items.map((item, i) => `
                                <tr data-index="${i}" class="transition-all duration-200">
                                    <td class="px-4 py-2">${item.text}</td>
                                    <td class="px-4 py-2">${item.type}</td>
                                    <td class="px-4 py-2">${item.period}</td>
                                    <td class="px-4 py-2">
                                        <div class="number-control flex items-center gap-2">
                                            <button class="num-btn decrease-order-btn" data-item-index="${i}">-</button>
                                            <span class="number-display" data-current-order="${item.userOrder}">${item.userOrder}</span>
                                            <button class="num-btn increase-order-btn" data-item-index="${i}">+</button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <button id="check-table-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-6 block mx-auto">Verificar Tabla</button>
            `;
            nextBtn.disabled = true;

            document.querySelectorAll('.increase-order-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemIndex = parseInt(e.target.dataset.itemIndex);
                    const display = e.target.previousElementSibling;
                    let currentNum = parseInt(display.dataset.currentOrder);
                    if (currentNum < pageData.items.length) {
                        currentNum++;
                        display.textContent = currentNum;
                        display.dataset.currentOrder = currentNum;
                        pageData.items[itemIndex].userOrder = currentNum;
                    }
                });
            });

            document.querySelectorAll('.decrease-order-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemIndex = parseInt(e.target.dataset.itemIndex);
                    const display = e.target.nextElementSibling;
                    let currentNum = parseInt(display.dataset.currentOrder);
                    if (currentNum > 0) {
                        currentNum--;
                        display.textContent = currentNum;
                        display.dataset.currentOrder = currentNum;
                        pageData.items[itemIndex].userOrder = currentNum;
                    }
                });
            });

            document.getElementById('check-table-btn').addEventListener('click', () => {
                currentChallengeAttempted = true;
                const allAssigned = pageData.items.every(item => item.userOrder > 0);
                const uniqueNumbers = new Set(pageData.items.filter(item => item.userOrder > 0).map(item => item.userOrder));
                const correct = pageData.items.every(item => item.userOrder === item.correctOrder);

                if (allAssigned && uniqueNumbers.size === pageData.items.length && correct) {
                    showFeedback(feedbackArea, '¡Tabla correcta! Has dominado la cronología.', false);
                    unlockBadge(pageData.badgeId);
                    nextBtn.disabled = false;
                } else {
                    showFeedback(feedbackArea, 'La tabla es incorrecta o incompleta. Revisa el orden y asegúrate de usar todos los números del 1 al ' + pageData.items.length + ' exactamente una vez.', true);
                    nextBtn.disabled = true;
                }
            });
            break;

        case 'nile-runner-game':
            contentArea.innerHTML = `
                <h2 class="font-cinzel text-2xl font-bold mb-4 text-center">${pageData.title}</h2>
                <p class="text-lg mb-6 text-center">${pageData.text}</p>
                <p class="text-md mb-4 text-center"><b>Instrucciones:</b> ${pageData.instructions}</p>
                
                <div id="nile-runner-game-area" class="relative">
                    <canvas id="nile-runner-canvas" class="block mx-auto border-2 border-[#4a3a2a] bg-[#87CEEB]"></canvas>
                    <div id="game-overlay" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold hidden">
                        <button id="overlay-start-btn" class="detective-btn font-cinzel font-bold py-3 px-8 rounded-lg text-xl">
                            Comenzar Nile Runner
                        </button>
                    </div>
                    <div id="game-score" class="absolute top-2 left-2 bg-white text-[#4a3a2a] p-2 rounded-md font-bold">Puntaje: <span id="score-display">0</span></div>
                </div>
                
                <div class="flex justify-center gap-4 mt-6">
                    <button id="game-start-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Iniciar Juego</button>
                    <button id="game-stop-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl hidden">Detener Juego</button>
                </div>
            `;
            nextBtn.style.display = 'none'; // Hide next button during game

            const canvas = document.getElementById('nile-runner-canvas');
            const ctx = canvas.getContext('2d');
            const scoreDisplay = document.getElementById('score-display');
            const startButton = document.getElementById('game-start-btn');
            const stopButton = document.getElementById('game-stop-btn');
            const gameOverlay = document.getElementById('game-overlay');
            const overlayStartBtn = document.getElementById('overlay-start-btn');

            canvas.width = 600; // Define a fixed width
            canvas.height = 300; // Define a fixed height

            let player = { x: canvas.width / 2, y: canvas.height - 50, width: 40, height: 40, speed: 5 };
            let obstacles = [];
            let collectibles = [];
            let score = 0;
            let gameFrame = 0;
            let gameOver = false;
            let gameSimulationInterval; // To control the game loop

            const OBSTACLE_INTERVAL = 90; // Frames between new obstacles
            const COLLECTIBLE_INTERVAL = 150; // Frames between new collectibles

            // Obstacle image (placeholder - replace with actual images)
            const crocodileImg = new Image();
            crocodileImg.src = 'https://cdn-icons-png.flaticon.com/512/3067/3067883.png'; // Example crocodile icon

            // Collectible image (placeholder)
            const papyrusImg = new Image();
            papyrusImg.src = 'https://cdn-icons-png.flaticon.com/512/3067/3067868.png'; // Example papyrus icon

            function drawPlayer() {
                ctx.fillStyle = 'brown';
                ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);
                // ctx.drawImage(playerImg, player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);
            }

            function createObstacle() {
                const size = 30 + Math.random() * 20;
                const x = Math.random() * (canvas.width - size);
                obstacles.push({ x: x, y: -size, width: size, height: size, speed: 2 + Math.random() * 2 });
            }

            function drawObstacles() {
                obstacles.forEach(obs => {
                    // ctx.fillStyle = 'darkgreen';
                    // ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
                    ctx.drawImage(crocodileImg, obs.x, obs.y, obs.width, obs.height);
                });
            }

            function updateObstacles() {
                for (let i = 0; i < obstacles.length; i++) {
                    obstacles[i].y += obstacles[i].speed;
                    if (obstacles[i].y > canvas.height) {
                        obstacles.splice(i, 1);
                        i--;
                    }
                }
            }

            function createCollectible() {
                const size = 25;
                const x = Math.random() * (canvas.width - size);
                collectibles.push({ x: x, y: -size, width: size, height: size, speed: 3 + Math.random() * 1 });
            }

            function drawCollectibles() {
                collectibles.forEach(col => {
                    // ctx.fillStyle = 'gold';
                    // ctx.fillRect(col.x, col.y, col.width, col.height);
                    ctx.drawImage(papyrusImg, col.x, col.y, col.width, col.height);
                });
            }

            function updateCollectibles() {
                for (let i = 0; i < collectibles.length; i++) {
                    collectibles[i].y += collectibles[i].speed;
                    if (collectibles[i].y > canvas.height) {
                        collectibles.splice(i, 1);
                        i--;
                    }
                }
            }

            function checkCollision() {
                for (let i = 0; i < obstacles.length; i++) {
                    const obs = obstacles[i];
                    if (player.x < obs.x + obs.width &&
                        player.x + player.width > obs.x &&
                        player.y < obs.y + obs.height &&
                        player.y + player.height > obs.y) {
                        // Collision detected
                        gameOver = true;
                        break;
                    }
                }

                for (let i = 0; i < collectibles.length; i++) {
                    const col = collectibles[i];
                    if (player.x < col.x + col.width &&
                        player.x + player.width > col.x &&
                        player.y < col.y + col.height &&
                        player.y + player.height > col.y) {
                        // Collectible picked up
                        score += 10;
                        scoreDisplay.textContent = score;
                        collectibles.splice(i, 1);
                        i--;
                        // Badge logic
                        if (score >= 200 && !nileRunnerBadgesAwarded['nile-runner-master']) {
                            unlockBadge('nile-runner-master');
                            nileRunnerBadgesAwarded['nile-runner-master'] = true;
                        } else if (score >= 100 && !nileRunnerBadgesAwarded['nile-runner-expert']) {
                            unlockBadge('nile-runner-expert');
                            nileRunnerBadgesAwarded['nile-runner-expert'] = true;
                        }
                    }
                }
            }

            function gameLoop() {
                if (gameOver) {
                    endGame();
                    return;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

                gameFrame++;

                if (gameFrame % OBSTACLE_INTERVAL === 0) {
                    createObstacle();
                }
                if (gameFrame % COLLECTIBLE_INTERVAL === 0) {
                    createCollectible();
                }

                updateObstacles();
                drawObstacles();
                updateCollectibles();
                drawCollectibles();
                drawPlayer();
                checkCollision();

                // requestAnimationFrame(gameLoop); // Use this for smoother animation
            }

            function startGame() {
                player.x = canvas.width / 2;
                player.y = canvas.height - 50;
                obstacles = [];
                collectibles = [];
                score = 0;
                scoreDisplay.textContent = score;
                gameFrame = 0;
                gameOver = false;
                startButton.classList.add('hidden');
                stopButton.classList.remove('hidden');
                gameOverlay.classList.add('hidden'); // Hide overlay

                gameSimulationInterval = setInterval(gameLoop, 1000 / 60); // 60 FPS simulation
            }

            function endGame() {
                clearInterval(gameSimulationInterval);
                showModal('Juego Terminado', `Tu puntaje final es: ${score}. ¡Sigue practicando!`, '');
                unlockBadge('nile-runner'); // Unlock base badge just for playing
                nextBtn.style.display = 'block';
                nextBtn.textContent = 'Volver al Menú de Actividades';
                nextBtn.disabled = false;
                startButton.classList.remove('hidden');
                stopButton.classList.add('hidden');
            }

            startButton.addEventListener('click', startGame);
            overlayStartBtn.addEventListener('click', startGame); // Also start from overlay button

            stopButton.addEventListener('click', () => {
                clearInterval(gameSimulationInterval);
                gameOverlay.classList.remove('hidden'); // Show overlay when stopped manually
                overlayStartBtn.textContent = 'Reanudar Juego';
                stopButton.classList.add('hidden');
            });


            document.addEventListener('keydown', (e) => {
                if (!gameOver) {
                    if (e.key === 'ArrowLeft' && player.x > player.width / 2) {
                        player.x -= player.speed * 5; // Move faster
                    } else if (e.key === 'ArrowRight' && player.x < canvas.width - player.width / 2) {
                        player.x += player.speed * 5; // Move faster
                    }
                }
            });

            // Initial state: show overlay
            gameOverlay.classList.remove('hidden');
            overlayStartBtn.textContent = 'Comenzar Nile Runner'; // Initial text for overlay button


            nextBtn.textContent = 'Volver al Menú de Actividades';
            break; // End of nile-runner-game case

        // --- End Activity and Summary Logic ---
        case 'end-activity': // A generic end page for an activity path
            const activityType = pageData.activityType; // e.g., 'reading', 'grammar'
            const summaryTitle = pageData.summaryTitle;
            const summaryMessage = pageData.summaryMessage;
            const summaryDetails = pageData.summaryDetails; // Array of {label, value} for table
            const pdfFilename = pageData.pdfFilename;

            contentArea.innerHTML = `
                <h2 class="font-cinzel text-3xl font-bold text-center mb-4">${summaryTitle}</h2>
                <p class="text-lg mb-6 text-center">${summaryMessage}</p>
                
                <div class="bg-white rounded-lg p-6 shadow-md mb-6">
                    <h3 class="font-cinzel text-xl font-bold mb-4">Detalles de la Actividad</h3>
                    <table class="w-full text-left">
                        <tbody>
                            ${summaryDetails.map(detail => `
                                <tr>
                                    <td class="font-bold pr-4 py-1">${detail.label}:</td>
                                    <td class="py-1">${detail.value}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="flex justify-center gap-4">
                    <button id="export-summary-pdf-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Exportar Resumen a PDF</button>
                    <button id="back-to-activities-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Volver al Menú de Actividades</button>
                </div>
            `;
            nextBtn.style.display = 'none'; // Hide default next button

            document.getElementById('export-summary-pdf-btn').addEventListener('click', () => {
                exportSummaryToPdf(summaryTitle, summaryDetails, pdfFilename);
                showFeedback(feedbackArea, 'Resumen exportado a PDF.', false);
            });

            document.getElementById('back-to-activities-btn').addEventListener('click', () => {
                activitySelectionScreen.classList.remove('hidden');
                gameContainer.classList.add('hidden');
                updateBadgeDisplay();
            });

            function exportSummaryToPdf(title, details, filename) {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();

                doc.setFontSize(22);
                doc.text(title, 105, 20, null, null, "center");

                let y = 40;
                doc.setFontSize(14);
                details.forEach(detail => {
                    doc.text(`${detail.label}: ${detail.value}`, 20, y);
                    y += 10;
                });

                doc.save(`${filename}.pdf`);
            }
            break;

        default:
            contentArea.innerHTML = `<h2 class="font-cinzel text-3xl font-bold text-center">Contenido no encontrado</h2><p class="text-lg text-center mt-4">Ha ocurrido un error o la página no está definida.</p>`;
            nextBtn.style.display = 'block';
            nextBtn.textContent = 'Volver al Menú de Actividades';
            nextBtn.disabled = false;
            break;
    }
    saveGameState(); // Save game state after rendering each page
}

function handleNext() {
    const currentPageType = gameData[currentStepIndex].type;

    // Specific logic for paths that need validation before proceeding
    if (currentPageType === 'multiple-choice' || 
        currentPageType === 'numerical-sequence' ||
        currentPageType === 'hieroglyph' ||
        currentPageType === 'riddle' ||
        currentPageType === 'fill-in-blanks' ||
        currentPageType === 'millionaire-grammar' ||
        currentPageType === 'reading-speed' ||
        currentPageType === 'comparison-table' ||
        currentPageType === 'nile-runner-game') {
        
        if (!nextBtn.disabled) { // Proceed only if the next button is enabled by successful completion
            
            // Special handling for end of a path
            if (currentPath === 'reading' && currentStepIndex === 5) { // End of Reading Path (index 5)
                endActivityAndShowSummary('Misterio del Corazón del Nilo', 'Has completado la aventura principal.', [
                    { label: 'Detective', value: studentName },
                    { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked).map(b => b.name).join(', ') || 'Ninguna' }
                ], 'Resumen_Misterio_Nilo');
                return;
            } else if (currentPath === 'grammar' && currentStepIndex === 8) { // End of Grammar Path (index 8)
                endActivityAndShowSummary('Desafío Gramatical', 'Has completado el entrenamiento de escriba.', [
                    { label: 'Detective', value: studentName },
                    { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name === 'Escriba Real')).map(b => b.name).join(', ') || 'Ninguna' }
                ], 'Resumen_Gramatica');
                 return;
            } else if (currentPath === 'reading-speed' && currentStepIndex === 9) { // End of Reading Speed Path (index 9)
                endActivityAndShowSummary('Agilidad Visual', 'Has puesto a prueba tu velocidad lectora.', [
                    { label: 'Detective', value: studentName },
                    { label: 'Palabras Leídas', value: wordsReadCount },
                    { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name === 'Relámpago de Luxor')).map(b => b.name).join(', ') || 'Ninguna' }
                ], 'Resumen_Velocidad_Lectora');
                return;
            } else if (currentPath === 'comparison-table' && currentStepIndex === 10) { // End of Comparison Table Path (index 10)
                endActivityAndShowSummary('Análisis de Evidencia', 'Has completado el análisis de la cronología.', [
                    { label: 'Detective', value: studentName },
                    { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name === 'Historiador Egipcio')).map(b => b.name).join(', ') || 'Ninguna' }
                ], 'Resumen_Analisis_Evidencia');
                return;
            } else if (currentPath === 'nile-runner-game' && currentStepIndex === 11) { // End of Nile Runner Game (index 11)
                 endActivityAndShowSummary('Nile Runner', 'Has navegado las aguas del Nilo.', [
                    { label: 'Detective', value: studentName },
                    { label: 'Puntaje Final', value: nileRunnerScore },
                    { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name.includes('Navegante') || b.name.includes('Maestro'))).map(b => b.name).join(', ') || 'Ninguna' }
                ], 'Resumen_Nile_Runner');
                return;
            }
        } else {
            // If button is disabled, it means challenge not completed, do nothing.
            return;
        }
    }

    // Special handling for returning from chat or other activities to main menu
    if (currentStepIndex === -1) { // Indicates a return to activity selection
        activitySelectionScreen.classList.remove('hidden');
        gameContainer.classList.add('hidden');
        updateBadgeDisplay();
        return;
    }

    currentPageIndex++;
    // Normal progression for any path that hasn't ended
    if (currentPageIndex < gameData.length) { // Ensure we don't go out of bounds for the reading path
        // For branched paths, ensure we stay within the path's defined range
        if (currentPath === 'reading' && currentPageIndex >= 6) { // End of reading path
            endActivityAndShowSummary('Misterio del Corazón del Nilo', 'Has completado la aventura principal.', [
                { label: 'Detective', value: studentName },
                { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked).map(b => b.name).join(', ') || 'Ninguna' }
            ], 'Resumen_Misterio_Nilo');
            return;
        } else if (currentPath === 'grammar' && currentPageIndex >= 9) { // End of grammar path
             endActivityAndShowSummary('Desafío Gramatical', 'Has completado el entrenamiento de escriba.', [
                { label: 'Detective', value: studentName },
                { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name === 'Escriba Real')).map(b => b.name).join(', ') || 'Ninguna' }
            ], 'Resumen_Gramatica');
            return;
        } else if (currentPath === 'reading-speed' && currentPageIndex >= 10) { // End of reading-speed path
            endActivityAndShowSummary('Agilidad Visual', 'Has puesto a prueba tu velocidad lectora.', [
                { label: 'Detective', value: studentName },
                { label: 'Palabras Leídas', value: wordsReadCount },
                { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name === 'Relámpago de Luxor')).map(b => b.name).join(', ') || 'Ninguna' }
            ], 'Resumen_Velocidad_Lectora');
            return;
        } else if (currentPath === 'comparison-table' && currentPageIndex >= 11) { // End of comparison table path
            endActivityAndShowSummary('Análisis de Evidencia', 'Has completado el análisis de la cronología.', [
                { label: 'Detective', value: studentName },
                { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name === 'Historiador Egipcio')).map(b => b.name).join(', ') || 'Ninguna' }
            ], 'Resumen_Analisis_Evidencia');
            return;
        } else if (currentPath === 'nile-runner-game' && currentPageIndex >= 12) { // End of Nile Runner path
             endActivityAndShowSummary('Nile Runner', 'Has navegado las aguas del Nilo.', [
                { label: 'Detective', value: studentName },
                { label: 'Puntaje Final', value: nileRunnerScore },
                { label: 'Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked && (b.name.includes('Navegante') || b.name.includes('Maestro'))).map(b => b.name).join(', ') || 'Ninguna' }
            ], 'Resumen_Nile_Runner');
            return;
        }

        renderPage(currentPageIndex);
    } else {
        // This 'else' block will only be reached if currentPath is 'reading' and all challenges are done
        // Or if an unknown path is somehow chosen.
        console.log('Reached end of gameData array or unhandled path end for currentPath:', currentPath);
        endActivityAndShowSummary('Aventura Finalizada', '¡Has completado todos los desafíos!', [
            { label: 'Detective', value: studentName },
            { label: 'Todas las Insignias Obtenidas', value: Object.values(allBadges).filter(b => b.unlocked).map(b => b.name).join(', ') || 'Ninguna' }
        ], 'Resumen_Aventura_Finalizada');
    }
}

// Function to handle showing an activity summary and optionally generating a PDF
function endActivityAndShowSummary(title, message, details, pdfFilename) {
    gameContainer.classList.add('hidden');
    // Hide navigation and badges for summary screen
    document.getElementById('navigation-area').style.display = 'none';
    allBadgesDisplay.innerHTML = ''; 

    contentArea.innerHTML = ''; // Clear previous content
    contentArea.className = 'w-full max-w-4xl mx-auto papyrus-bg rounded-lg p-6 md:p-10 text-[#4a3a2a]'; // Reset styling

    contentArea.innerHTML = `
        <h2 class="font-cinzel text-3xl font-bold text-center mb-4">${title}</h2>
        <p class="text-lg mb-6 text-center">${message}</p>
        
        <div class="bg-white rounded-lg p-6 shadow-md mb-6">
            <h3 class="font-cinzel text-xl font-bold mb-4">Detalles del Progreso</h3>
            <table class="w-full text-left">
                <tbody>
                    ${details.map(detail => `
                        <tr>
                            <td class="font-bold pr-4 py-1">${detail.label}:</td>
                            <td class="py-1">${detail.value}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="flex justify-center gap-4 mt-6">
            <button id="export-final-summary-pdf-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Exportar Resumen a PDF</button>
            <button id="return-to-main-menu-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Volver al Menú Principal</button>
        </div>
    `;

    // Make gameContainer visible to show the summary within its structure
    gameContainer.classList.remove('hidden');

    document.getElementById('export-final-summary-pdf-btn').addEventListener('click', () => {
        exportSummaryToPdf(title, details, pdfFilename);
        showFeedback(feedbackArea, 'Resumen exportado a PDF.', false);
    });

    document.getElementById('return-to-main-menu-btn').addEventListener('click', () => {
        activitySelectionScreen.classList.remove('hidden');
        gameContainer.classList.add('hidden');
        updateBadgeDisplay();
        // Reset specific game states if needed when returning to main menu
        millionaireCurrentQuestionIndex = 0;
        millionaireLifelines = { '50-50': true, 'audience': true, 'call': true };
        readingSpeedInterval = undefined;
        currentReadingSpeedWordIndex = 0;
        readingSpeedWords = [];
        wordsReadCount = 0;
        readingSpeedTimer = undefined;
        nileRunnerScore = 0;
        nileRunnerGame = undefined;
        // The game loop interval might still be running if Nile Runner was interrupted
        if (typeof gameSimulationInterval !== 'undefined') {
            clearInterval(gameSimulationInterval);
        }
    });

    // Helper for PDF export
    function exportSummaryToPdf(title, details, filename) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text(title, 105, 20, null, null, "center");

        let y = 40;
        doc.setFontSize(14);
        details.forEach(detail => {
            doc.text(`${detail.label}: ${detail.value}`, 20, y);
            y += 10;
        });

        doc.save(`${filename}.pdf`);
    }
}


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadGameState(); // Attempt to load saved game on startup

    // Disable start button initially if no name entered
    studentNameInput.addEventListener('input', () => {
        submitNameBtn.disabled = studentNameInput.value.trim() === '';
    });
    // Set initial state for submit button based on current input value
    submitNameBtn.disabled = studentNameInput.value.trim() === '';


    // Initial display setup: ensure start screen is visible and other containers are hidden
    if (!studentName) { // Only show start screen if no name loaded
        startScreen.classList.remove('hidden');
        activitySelectionScreen.classList.add('hidden');
        gameContainer.classList.add('hidden');
    } else { // If name loaded, go straight to activity selection
        startScreen.classList.add('hidden');
        activitySelectionScreen.classList.remove('hidden');
        gameContainer.classList.add('hidden');
        displayStudentName.textContent = studentName;
        updateBadgeDisplay();
    }
});
