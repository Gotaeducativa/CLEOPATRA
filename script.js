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
        badgeName.className = 'text-sm font-bold leading-tight';
        badgeName.textContent = badge.name;
        badgeName.style.color = '#4a3a2a'; // Ensure text color is consistent

        badgeItem.appendChild(badgeImage);
        badgeItem.appendChild(badgeName);
        allBadgesDisplay.appendChild(badgeItem);
    }
}

function unlockBadge(badgeId) {
    if (allBadges[badgeId] && !allBadges[badgeId].unlocked) {
        allBadges[badgeId].unlocked = true;
        showModal('¡Insignia Desbloqueada!', `¡Has ganado la "${allBadges[badgeId].name}"! ${allBadges[badgeId].description}`);
        updateBadgeDisplay(); // Update display to show the new unlocked badge
    }
}

function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    genericModal.classList.remove('hidden');
}

function closeModal() {
    genericModal.classList.add('hidden');
}

// --- GAME FLOW FUNCTIONS ---

function handleNameSubmission() {
    studentName = studentNameInput.value.trim();
    if (studentName.length >= 2) {
        showFeedback(startFeedbackArea, `¡Bienvenido, ${studentName}!`, false);
        setTimeout(() => {
            startScreen.classList.add('hidden');
            activitySelectionScreen.classList.remove('hidden');
            displayStudentName.textContent = studentName;
            updateBadgeDisplay(); // Initialize badge display on selection screen
        }, 1500);
    } else {
        showFeedback(startFeedbackArea, 'Por favor, introduce al menos 2 caracteres para tu nombre.', true);
    }
}

function startSelectedActivity() {
    if (currentPath) {
        activitySelectionScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        // Set initial step index based on the chosen path
        if (currentPath === 'reading') {
            currentStepIndex = 0; // Start of reading path
        } else if (currentPath === 'chat') {
            currentStepIndex = 6; // Chat activity
        } else if (currentPath === 'grammar') {
            currentStepIndex = 7; // Start of grammar path
        } else if (currentPath === 'reading-speed') {
            currentStepIndex = 9; // Reading speed activity
        } else if (currentPath === 'comparison-table') {
            currentStepIndex = 10; // Comparison table activity
        } else if (currentPath === 'nile-runner') {
            currentStepIndex = 11; // Nile Runner game
        }
        loadCurrentStep();
    } else {
        showFeedback(activitySelectionFeedback, 'Por favor, selecciona una actividad para comenzar.', true);
    }
}

function handleNext() {
    currentChallengeAttempted = false; // Reset for the next step
    const currentActivity = gameData[currentStepIndex];

    // Specific logic for checking answers before moving to next step
    let isAnswerCorrect = true; // Assume correct, then check challenges

    if (currentActivity.type === 'multiple-choice') {
        const selectedOption = document.querySelector('.choice-option.selected');
        if (!selectedOption || selectedOption.textContent.trim() !== currentActivity.correctAnswer) {
            isAnswerCorrect = false;
        }
    } else if (currentActivity.type === 'numerical-sequence') {
        const currentOrder = Array.from(document.querySelectorAll('.numerical-sequence-item .number-display')).map(el => parseInt(el.textContent));
        // Check if all numbers are unique and in correct sequence
        const uniqueNumbers = new Set(currentOrder);
        if (uniqueNumbers.size !== currentActivity.items.length || !currentOrder.every((num, i) => num === currentActivity.items[i].correctNum)) {
            isAnswerCorrect = false;
        }
    } else if (currentActivity.type === 'hieroglyph') {
        const inputElement = document.getElementById('hieroglyph-input');
        if (!inputElement || inputElement.value.trim().toUpperCase() !== currentActivity.answer) {
            isAnswerCorrect = false;
        }
    } else if (currentActivity.type === 'riddle') {
        const inputElement = document.getElementById('riddle-input');
        if (!inputElement || inputElement.value.trim() !== currentActivity.answer) {
            isAnswerCorrect = false;
        }
    } else if (currentActivity.type === 'fill-in-blanks') {
        const inputElement = document.getElementById('fill-in-blank-input');
        if (!inputElement || inputElement.value.trim().toUpperCase() !== currentActivity.answer) {
            isAnswerCorrect = false;
        }
    } else if (currentActivity.type === 'millionaire-grammar') {
        if (!currentChallengeAttempted) { // Only allow next if a question was answered
            showFeedback(feedbackArea, 'Debes responder una pregunta antes de avanzar.', true);
            return;
        }
        // If they just finished the millionaire game, unlock the badge
        if (millionaireCurrentQuestionIndex >= currentActivity.questions.length) {
            unlockBadge(currentActivity.badgeId);
        } else {
            showFeedback(feedbackArea, 'Completa el juego "Quién Quiere Ser Gramático" para avanzar.', true);
            return;
        }
    } else if (currentActivity.type === 'reading-speed') {
        stopReadingSpeedTest(); // Ensure test stops if still running
        // No specific answer check here, progress is based on time/words read.
        // We'll just allow progression.
    } else if (currentActivity.type === 'comparison-table') {
        if (!checkComparisonTable()) {
            isAnswerCorrect = false;
            showFeedback(feedbackArea, '¡No es del todo correcto! Revisa tu orden y vuelve a intentarlo.', true);
            return; // Don't advance if incorrect
        } else {
            unlockBadge(currentActivity.badgeId);
        }
    } else if (currentActivity.type === 'nile-runner-game') {
        // For Nile Runner, we allow proceeding even if the game hasn't been played
        // or a badge hasn't been earned, but we can give a nudge.
        if (nileRunnerScore < 50 && !allBadges['nile-runner'].unlocked) {
            showFeedback(feedbackArea, '¡Navega un poco más! Intenta conseguir más puntos para ganar la insignia de navegante.', false);
        }
        // Stop the game if it's running
        if (nileRunnerGame) {
            nileRunnerGame.stopGame();
        }
        // Allow progression to next step
    }

    if (!isAnswerCorrect) {
        showFeedback(feedbackArea, '¡Respuesta incorrecta! Intenta de nuevo.', true);
        return;
    }

    // Unlock badge if there's one for this step
    if (currentActivity.badgeId && currentActivity.type !== 'millionaire-grammar' && currentActivity.type !== 'reading-speed' && currentActivity.type !== 'nile-runner-game') {
        unlockBadge(currentActivity.badgeId);
    }

    // Determine the next step based on the current path
    if (currentPath === 'reading') {
        if (currentStepIndex < 5) { // Reading path goes from index 0 to 5
            currentStepIndex++;
        } else {
            // End of reading path, go back to activity selection
            endCurrentActivityAndShowSummary('Aventura de Lectura', `<p class="text-lg text-center mt-4">¡Has completado la aventura de lectura, ${studentName}!</p>`, null, 'Resumen_Aventura_Lectura');
            return;
        }
    } else if (currentPath === 'grammar') {
        // Grammar path currently only has the intro and millionaire game
        if (currentStepIndex === 7) { // From intro to millionaire game
            currentStepIndex = 8;
        } else if (currentStepIndex === 8) { // After millionaire game
            endCurrentActivityAndShowSummary('Desafío Gramatical', `<p class="text-lg text-center mt-4">¡Has completado el camino de la gramática, ${studentName}!</p>`, null, 'Resumen_Gramatica');
            return;
        }
    } else if (currentPath === 'reading-speed') {
        // After reading speed, go back to activity selection
        endCurrentActivityAndShowSummary('Test de Velocidad Lectora', `<p class="text-lg text-center mt-4">¡Has practicado tu velocidad lectora, ${studentName}! Tu velocidad fue de ${wordsReadCount} PPM.</p>`, null, 'Resumen_Velocidad_Lectora');
        return;
    } else if (currentPath === 'chat') {
        // After chat, generate PDF and go back to activity selection
        const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        const summaryHtml = `<h3 class="text-xl font-bold mb-2">Registro de Conversación con Cleopatra</h3>`;
        const pdfContent = [
            { text: 'Historial de Chat con Cleopatra', style: 'header' },
            ...chatHistory.map(msg => ({ text: `${msg.role === 'user' ? 'Tú' : 'Cleopatra'}: ${msg.parts[0].text}`, margin: [0, 5] }))
        ];
        endCurrentActivityAndShowSummary('Chat con Cleopatra', summaryHtml, pdfContent, 'Registro_Chat_Cleopatra');
        return;
    } else if (currentPath === 'comparison-table') {
        endCurrentActivityAndShowSummary('Tabla de Comparación', `<p class="text-lg text-center mt-4">¡Has demostrado ser un gran historiador, ${studentName}!</p>`, null, 'Resumen_Tabla_Comparacion');
        return;
    } else if (currentPath === 'nile-runner') {
        endCurrentActivityAndShowSummary('Nile Runner', `<p class="text-lg text-center mt-4">¡Tu aventura en el Nilo ha concluido, ${studentName}! Tu puntuación final fue: ${nileRunnerScore}</p>`, null, 'Resumen_Nile_Runner');
        return;
    }
    loadCurrentStep();
}

// New: Function to end activity and show summary
function endCurrentActivityAndShowSummary(activityTitle, summaryHtml, pdfContent = null, pdfFileName = 'Resumen_Actividad') {
    gameContainer.classList.add('hidden');
    activitySelectionScreen.classList.remove('hidden');
    nextBtn.textContent = 'Siguiente Pista'; // Reset button text
    nextBtn.disabled = false; // Enable for next activity selection
    currentPath = null; // Clear selected path
    startSelectedActivityBtn.disabled = true; // Disable until new selection
    activityOptions.forEach(opt => opt.classList.remove('selected')); // Deselect all options

    // Reset game-specific states if needed when returning to activity selection
    if (nileRunnerGame) {
        nileRunnerGame.resetGame();
        nileRunnerGame = null; // Clear the instance
    }
    // Reset millionaire game state
    millionaireCurrentQuestionIndex = 0;
    millionaireLifelines = {
        '50-50': true,
        'audience': true,
        'call': true
    };
    // Reset reading speed state
    stopReadingSpeedTest();
    currentReadingSpeedWordIndex = 0;
    readingSpeedWords = [];
    wordsReadCount = 0; // Reset words read count

    // Show summary modal
    showModal(`Actividad Finalizada: ${activityTitle}`, summaryHtml);

    // If PDF content is provided, generate PDF
    if (pdfContent) {
        generatePdf(pdfContent, pdfFileName);
    }
}

function generatePdf(docContent, fileName) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text(fileName.replace(/_/g, ' '), 10, 10); // Title for the PDF

    doc.autoTable({
        startY: 20,
        head: [['Element', 'Value']], // Example header, adjust as needed
        body: docContent.map(item => [item.text, '']), // Simplified for chat history
        theme: 'striped',
        styles: { font: 'Roboto', fontSize: 10, cellPadding: 2, overflow: 'linebreak' },
        headStyles: { fillColor: [71, 58, 42] }, // Darker brown for header
        bodyStyles: { textColor: [74, 58, 42] } // Brown text for body
    });

    doc.save(`${fileName}.pdf`);
}

function loadCurrentStep() {
    contentArea.innerHTML = ''; // Clear previous content
    feedbackArea.textContent = ''; // Clear previous feedback

    const step = gameData[currentStepIndex];

    const titleElement = document.createElement('h2');
    titleElement.className = 'font-cinzel text-2xl md:text-3xl font-bold mb-4';
    titleElement.textContent = step.title;
    contentArea.appendChild(titleElement);

    const textElement = document.createElement('p');
    textElement.className = 'text-lg leading-relaxed mb-6';
    textElement.innerHTML = step.text;
    contentArea.appendChild(textElement);

    nextBtn.textContent = 'Siguiente Pista'; // Default button text
    nextBtn.disabled = false; // Enable next button by default

    if (step.type === 'multiple-choice') {
        renderMultipleChoice(step);
    } else if (step.type === 'numerical-sequence') {
        renderNumericalSequence(step);
    } else if (step.type === 'hieroglyph') {
        renderHieroglyphPuzzle(step);
    } else if (step.type === 'riddle') {
        renderRiddle(step);
    } else if (step.type === 'fill-in-blanks') {
        renderFillInBlanks(step);
    } else if (step.type === 'chat') {
        renderChatInterface(step);
        nextBtn.textContent = 'Terminar Conversación'; // Change button text for chat
    } else if (step.type === 'grammar-intro') {
        // No specific interaction needed, just text. Next button continues.
    } else if (step.type === 'millionaire-grammar') {
        renderMillionaireGrammarGame(step);
        nextBtn.textContent = 'Volver al Menú de Actividades'; // Change button text for millionaire game
        nextBtn.disabled = true; // Disable until game is completed
    } else if (step.type === 'reading-speed') {
        renderReadingSpeedTest(step);
        nextBtn.textContent = 'Terminar Prueba'; // Change button text for reading speed
        nextBtn.disabled = true; // Disable until timer starts/finishes or words are shown
    } else if (step.type === 'comparison-table') {
        renderComparisonTable(step);
        nextBtn.textContent = 'Comprobar y Continuar';
    } else if (step.type === 'nile-runner-game') {
        renderNileRunnerGame(step);
        nextBtn.textContent = 'Volver al Menú de Actividades';
    }
}

// --- RENDER FUNCTIONS FOR EACH GAME TYPE ---

function renderMultipleChoice(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
    step.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'choice-option papyrus-bg-light p-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-[#c0a16b] hover:text-white';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => {
            document.querySelectorAll('.choice-option').forEach(opt => opt.classList.remove('selected'));
            optionDiv.classList.add('selected');
        });
        optionsContainer.appendChild(optionDiv);
    });
    contentArea.appendChild(optionsContainer);
}

function renderNumericalSequence(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const sequenceContainer = document.createElement('div');
    sequenceContainer.className = 'flex flex-col gap-4';
    step.items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'numerical-sequence-item flex items-center bg-[#fffbf0] p-3 rounded-lg border border-[#c0a16b]';

        const numberDisplay = document.createElement('span');
        numberDisplay.className = 'number-display font-bold text-xl w-10 h-10 flex items-center justify-center bg-[#c0a16b] text-white rounded-full mr-4 cursor-pointer';
        numberDisplay.textContent = step.initialOrder[index];
        numberDisplay.addEventListener('click', () => {
            let currentNum = parseInt(numberDisplay.textContent);
            currentNum = (currentNum % step.items.length) + 1; // Cycle 1, 2, 3, 4
            numberDisplay.textContent = currentNum;
        });

        const itemText = document.createElement('p');
        itemText.className = 'text-lg flex-grow';
        itemText.textContent = item.text;

        itemDiv.appendChild(numberDisplay);
        itemDiv.appendChild(itemText);
        sequenceContainer.appendChild(itemDiv);
    });
    contentArea.appendChild(sequenceContainer);
}

function renderHieroglyphPuzzle(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    // New: Display the clue image
    if (step.clueImageSrc) {
        const clueImage = document.createElement('img');
        clueImage.src = step.clueImageSrc;
        clueImage.alt = 'Hieroglyph Clue';
        clueImage.className = 'w-1/2 md:w-1/3 mx-auto mb-6 border-2 border-[#c0a16b] rounded-lg'; // Responsive image
        contentArea.appendChild(clueImage);
    }

    const decoderContainer = document.createElement('div');
    decoderContainer.className = 'grid grid-cols-4 md:grid-cols-6 gap-2 mb-4 p-4 border border-[#c0a16b] rounded-lg bg-[#fffbf0] text-center';
    for (const char in step.decoder) {
        const charDiv = document.createElement('div');
        charDiv.className = 'flex flex-col items-center justify-center p-2 border border-[#eee] rounded';
        charDiv.innerHTML = `<span class="font-bold text-lg">${char}</span><span class="text-3xl">${step.decoder[char]}</span>`;
        decoderContainer.appendChild(charDiv);
    }
    contentArea.appendChild(decoderContainer);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex flex-col items-center mt-4';

    const inputLabel = document.createElement('label');
    inputLabel.htmlFor = 'hieroglyph-input';
    inputLabel.className = 'text-lg mb-2';
    inputLabel.textContent = 'Tu respuesta (solo letras):';
    inputContainer.appendChild(inputLabel);

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'hieroglyph-input';
    inputElement.className = 'w-full max-w-sm p-3 rounded-md border-2 border-[#c0a16b] bg-[#fffbf0] text-[#4a3a2a] text-lg text-center focus:outline-none focus:ring-2 focus:ring-[#4a3a2a] uppercase';
    inputElement.placeholder = 'Escribe aquí tu respuesta';

    inputContainer.appendChild(inputElement);
    contentArea.appendChild(inputContainer);
}

function renderRiddle(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex flex-col items-center mt-4';

    const inputLabel = document.createElement('label');
    inputLabel.htmlFor = 'riddle-input';
    inputLabel.className = 'text-lg mb-2';
    inputLabel.textContent = 'Tu respuesta numérica:';
    inputContainer.appendChild(inputLabel);

    const inputElement = document.createElement('input');
    inputElement.type = 'number'; // Allow only numbers
    inputElement.id = 'riddle-input';
    inputElement.className = 'w-full max-w-sm p-3 rounded-md border-2 border-[#c0a16b] bg-[#fffbf0] text-[#4a3a2a] text-lg text-center focus:outline-none focus:ring-2 focus:ring-[#4a3a2a]';
    inputElement.placeholder = 'Escribe aquí tu respuesta';

    inputContainer.appendChild(inputElement);
    contentArea.appendChild(inputContainer);
}

function renderFillInBlanks(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const blankContainer = document.createElement('div');
    blankContainer.className = 'flex items-center justify-center flex-wrap gap-2 text-lg mb-4';

    const prefixSpan = document.createElement('span');
    prefixSpan.textContent = step.blankPrefix;
    blankContainer.appendChild(prefixSpan);

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'fill-in-blank-input';
    inputElement.className = 'p-2 rounded-md border-2 border-[#c0a16b] bg-[#fffbf0] text-[#4a3a2a] text-lg text-center focus:outline-none focus:ring-2 focus:ring-[#4a3a2a] uppercase min-w-[150px]';
    inputElement.placeholder = '______';
    blankContainer.appendChild(inputElement);

    const suffixSpan = document.createElement('span');
    suffixSpan.textContent = step.blankSuffix;
    blankContainer.appendChild(suffixSpan);

    contentArea.appendChild(blankContainer);
}

// --- Chat Interface ---
let chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');

async function renderChatInterface(step) {
    contentArea.innerHTML = `
        <div class="chat-container bg-[#fffbf0] p-4 rounded-lg flex flex-col h-[500px] max-h-[500px]">
            <div class="chat-messages flex-grow overflow-y-auto p-2 mb-4 border border-[#c0a16b] rounded-lg" id="chat-messages">
                </div>
            <div class="chat-input-area flex">
                <input type="text" id="chat-input" placeholder="Pregunta a Cleopatra..." class="flex-grow p-3 rounded-l-lg border-2 border-[#c0a16b] bg-[#fef9e7] text-[#4a3a2a] focus:outline-none focus:ring-2 focus:ring-[#4a3a2a]">
                <button id="send-chat-btn" class="detective-btn font-cinzel font-bold py-3 px-6 rounded-r-lg text-lg ml-0">Enviar</button>
            </div>
        </div>
    `;

    const chatMessagesDiv = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');

    // Display existing chat history
    chatHistory.forEach(msg => displayChatMessage(msg.parts[0].text, msg.role, chatMessagesDiv));

    sendChatBtn.addEventListener('click', () => sendChatMessage(chatInput, chatMessagesDiv));
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage(chatInput, chatMessagesDiv);
        }
    });

    nextBtn.textContent = 'Terminar Conversación'; // Ensure button text is correct
}

function displayChatMessage(message, role, chatMessagesDiv) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `p-2 my-1 rounded-lg max-w-[80%] ${role === 'user' ? 'bg-[#c0a16b] text-white ml-auto' : 'bg-[#e0e0e0] text-[#4a3a2a] mr-auto'}`;
    msgDiv.textContent = message;
    chatMessagesDiv.appendChild(msgDiv);
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight; // Scroll to bottom
}

async function sendChatMessage(chatInput, chatMessagesDiv) {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        displayChatMessage(userMessage, 'user', chatMessagesDiv);
        chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        chatInput.value = ''; // Clear input

        // Simulate Cleopatra's response
        displayChatMessage('Pensando...', 'model', chatMessagesDiv); // Placeholder for thinking
        
        // This is where you would integrate with an actual LLM if available
        // For now, a simple placeholder response
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
        const cleopatraResponse = "Esa es una pregunta fascinante, joven detective. El antiguo Egipto guarda muchos secretos. ¿Qué más te gustaría saber?";
        
        // Replace "Thinking..." with actual response
        chatMessagesDiv.lastChild.textContent = cleopatraResponse;
        chatMessagesDiv.lastChild.classList.remove('bg-[#e0e0e0]'); // Remove thinking background
        chatHistory[chatHistory.length - 1] = { role: 'model', parts: [{ text: cleopatraResponse }] }; // Update history with actual response
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
    }
}

// --- Millionaire Grammar Game ---
let currentMillionaireGameData;

function renderMillionaireGrammarGame(step) {
    currentMillionaireGameData = { ...step, currentQuestionIndex: 0, lifelines: { '50-50': true, 'audience': true, 'call': true } };
    millionaireCurrentQuestionIndex = 0; // Reset global index

    contentArea.innerHTML = `
        <div class="millionaire-game-container bg-[#fffbf0] p-4 rounded-lg">
            <div class="question-display text-center mb-4 p-4 border border-[#c0a16b] rounded-lg">
                <p class="text-xl mb-2"><b>Pregunta <span id="millionaire-q-num">1</span>:</b></p>
                <p class="text-2xl font-bold" id="millionaire-question-sentence"></p>
                <p class="text-lg mt-2" id="millionaire-highlighted-word"></p>
            </div>
            <div class="options-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" id="millionaire-options">
                </div>
            <div class="lifelines-container flex justify-center gap-4 mb-4">
                <button class="detective-btn text-sm py-2 px-4" id="lifeline-50-50" data-lifeline="50-50">50:50</button>
                <button class="detective-btn text-sm py-2 px-4" id="lifeline-audience" data-lifeline="audience">Ayuda del Público</button>
                <button class="detective-btn text-sm py-2 px-4" id="lifeline-call" data-lifeline="call">Llamar a un Amigo</button>
            </div>
            <p id="millionaire-feedback" class="text-center font-bold text-lg h-8 feedback opacity-0"></p>
        </div>
    `;

    document.getElementById('lifeline-50-50').addEventListener('click', useLifeline);
    document.getElementById('lifeline-audience').addEventListener('click', useLifeline);
    document.getElementById('lifeline-call').addEventListener('click', useLifeline);

    loadMillionaireQuestion();
    nextBtn.disabled = true; // Disable next button initially
}

function loadMillionaireQuestion() {
    const questions = currentMillionaireGameData.questions;
    if (millionaireCurrentQuestionIndex >= questions.length) {
        showFeedback(document.getElementById('millionaire-feedback'), '¡Has completado el juego! ¡Felicidades!', false);
        document.getElementById('millionaire-options').innerHTML = ''; // Clear options
        nextBtn.disabled = false; // Enable next button to return to menu
        unlockBadge(currentMillionaireGameData.badgeId); // Unlock badge
        currentChallengeAttempted = true; // Indicate game completion for handleNext
        return;
    }

    const question = questions[millionaireCurrentQuestionIndex];
    document.getElementById('millionaire-q-num').textContent = millionaireCurrentQuestionIndex + 1;
    document.getElementById('millionaire-question-sentence').innerHTML = question.sentence;
    document.getElementById('millionaire-highlighted-word').textContent = `Palabra destacada: "${question.highlightedWord}"`;

    const optionsDiv = document.getElementById('millionaire-options');
    optionsDiv.innerHTML = ''; // Clear previous options

    ['A', 'B', 'C', 'D'].forEach(key => {
        const optionText = question.options[key];
        const optionButton = document.createElement('button');
        optionButton.className = 'millionaire-option-btn detective-btn py-3 px-4 text-lg w-full text-left';
        optionButton.innerHTML = `<b>${key}:</b> ${optionText}`;
        optionButton.dataset.key = key;
        optionButton.addEventListener('click', () => checkMillionaireAnswer(key, question.correctAnswer));
        optionsDiv.appendChild(optionButton);
    });

    // Re-enable all lifeline buttons for the new question
    for (const lifeline in currentMillionaireGameData.lifelines) {
        const btn = document.getElementById(`lifeline-${lifeline}`);
        if (btn) {
            btn.disabled = !currentMillionaireGameData.lifelines[lifeline];
            btn.classList.remove('used');
        }
    }
}

function checkMillionaireAnswer(selectedKey, correctAnswer) {
    const feedbackElement = document.getElementById('millionaire-feedback');
    currentChallengeAttempted = true; // Mark that an attempt was made

    if (selectedKey === correctAnswer) {
        showFeedback(feedbackElement, '¡Correcto! Avanzando...', false);
        millionaireCurrentQuestionIndex++;
        setTimeout(loadMillionaireQuestion, 1500);
    } else {
        showFeedback(feedbackElement, `Incorrecto. La respuesta correcta era ${correctAnswer}: ${currentMillionaireGameData.questions[millionaireCurrentQuestionIndex].options[correctAnswer]}. Intenta la siguiente.`, true);
        // Optionally, reset game or just move to next question
        millionaireCurrentQuestionIndex++;
        setTimeout(loadMillionaireQuestion, 3000);
    }
}

function useLifeline(event) {
    const lifelineType = event.target.dataset.lifeline;
    const feedbackElement = document.getElementById('millionaire-feedback');
    const question = currentMillionaireGameData.questions[millionaireCurrentQuestionIndex];
    const optionsButtons = document.querySelectorAll('.millionaire-option-btn');

    if (!currentMillionaireGameData.lifelines[lifelineType]) {
        showFeedback(feedbackElement, `Ya usaste el comodín de ${lifelineType}.`, true);
        return;
    }

    currentMillionaireGameData.lifelines[lifelineType] = false;
    event.target.disabled = true;
    event.target.classList.add('used');

    if (lifelineType === '50-50') {
        const incorrectOptions = Object.keys(question.options).filter(key => key !== question.correctAnswer);
        const optionsToRemove = [];
        while (optionsToRemove.length < 2) {
            const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
            const option = incorrectOptions[randomIndex];
            if (!optionsToRemove.includes(option)) {
                optionsToRemove.push(option);
            }
        }
        optionsButtons.forEach(button => {
            if (optionsToRemove.includes(button.dataset.key)) {
                button.disabled = true;
                button.style.opacity = '0.5';
            }
        });
        showFeedback(feedbackElement, 'Se han eliminado dos opciones incorrectas.', false);
    } else if (lifelineType === 'audience') {
        const correctOption = question.correctAnswer;
        const message = `El público cree que la respuesta correcta es la opción ${correctOption} (${question.options[correctOption]})`;
        showModal('Ayuda del Público', message);
    } else if (lifelineType === 'call') {
        const correctOption = question.correctAnswer;
        const friendName = "Imhotep (el sabio sacerdote)";
        const message = `${friendName} dice: "Mi joven aprendiz, después de meditar, creo que la respuesta es la opción ${correctOption} (${question.options[correctOption]})."`;
        showModal('Llamada a un Amigo', message);
    }
}

// --- Reading Speed Test ---
function renderReadingSpeedTest(step) {
    readingSpeedWords = [...step.words]; // Copy array to avoid modifying original
    currentReadingSpeedWordIndex = 0;
    wordsReadCount = 0; // Reset counter
    const wordDisplayInterval = step.difficultyLevels[readingSpeedDifficulty];
    const timeLimit = step.timeLimitSeconds;

    contentArea.innerHTML = `
        <div class="reading-speed-container bg-[#fffbf0] p-4 rounded-lg text-center">
            <p class="text-xl font-bold mb-4">Palabra actual:</p>
            <div id="word-display" class="text-5xl font-cinzel font-bold mb-6 min-h-[60px] flex items-center justify-center">
                </div>
            <p class="text-lg">Palabras leídas: <span id="words-read-count">0</span></p>
            <p class="text-lg">Tiempo restante: <span id="time-remaining">${timeLimit}</span> segundos</p>
            <button id="start-reading-test-btn" class="detective-btn font-cinzel font-bold py-3 px-6 rounded-lg text-lg mt-4">Comenzar Prueba</button>
        </div>
    `;

    document.getElementById('start-reading-test-btn').addEventListener('click', () => {
        startReadingSpeedTimer(timeLimit, wordDisplayInterval);
        document.getElementById('start-reading-test-btn').disabled = true;
        nextBtn.disabled = false; // Enable 'Terminar Prueba' button
    });

    nextBtn.textContent = 'Terminar Prueba'; // Change button text
    nextBtn.disabled = true; // Initially disable 'Terminar Prueba' button
}

function startReadingSpeedTimer(timeLimit, wordDisplayInterval) {
    const timeRemainingSpan = document.getElementById('time-remaining');
    let timeLeft = timeLimit;

    // Start showing words
    showNextWord(wordDisplayInterval);

    // Start countdown timer
    readingSpeedTimer = setInterval(() => {
        timeLeft--;
        timeRemainingSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            stopReadingSpeedTest();
            showModal('¡Prueba de Velocidad Lectora Finalizada!', `Has leído ${wordsReadCount} palabras en ${timeLimit} segundos.`);
            // You can add logic here to check if wordsReadCount is enough for a badge
            if (wordsReadCount >= 30) { // Example threshold
                unlockBadge('velocidad-lectora');
            }
            nextBtn.disabled = false; // Enable 'Terminar Prueba'
        }
    }, 1000);
}

function showNextWord(interval) {
    const wordDisplay = document.getElementById('word-display');
    if (currentReadingSpeedWordIndex < readingSpeedWords.length) {
        wordDisplay.textContent = readingSpeedWords[currentReadingSpeedWordIndex];
        wordsReadCount++;
        document.getElementById('words-read-count').textContent = wordsReadCount;
        currentReadingSpeedWordIndex++;
        // Cycle words if we run out
        if (currentReadingSpeedWordIndex === readingSpeedWords.length) {
            currentReadingSpeedWordIndex = 0;
        }
        readingSpeedInterval = setTimeout(() => showNextWord(interval), interval);
    } else {
        wordDisplay.textContent = ''; // Clear display if no words
    }
}

function stopReadingSpeedTest() {
    clearTimeout(readingSpeedInterval);
    clearInterval(readingSpeedTimer);
    document.getElementById('word-display').textContent = '';
    // nextBtn.disabled = false; // Enable "Terminar Prueba" after test ends
}

// --- Comparison Table ---
function renderComparisonTable(step) {
    contentArea.innerHTML = `
        <div class="comparison-table-container bg-[#fffbf0] p-4 rounded-lg">
            <p class="text-xl font-bold mb-4">${step.question}</p>
            <div class="table-responsive overflow-x-auto">
                <table class="min-w-full bg-[#fef9e7] border border-[#c0a16b] rounded-lg">
                    <thead>
                        <tr class="bg-[#c0a16b] text-white">
                            ${step.columns.map(col => `<th class="py-2 px-4 border-b border-[#a18152]">${col}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody id="comparison-table-body">
                        </tbody>
                </table>
            </div>
            <div class="flex justify-center mt-4">
                <button id="reset-table-btn" class="detective-btn py-2 px-4 text-sm">Reiniciar Tabla</button>
            </div>
        </div>
    `;

    const tableBody = document.getElementById('comparison-table-body');
    step.items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-[#f5eadb]';
        row.innerHTML = `
            <td class="py-2 px-4 border-b border-[#ddd]">${item.text}</td>
            <td class="py-2 px-4 border-b border-[#ddd]">${item.type}</td>
            <td class="py-2 px-4 border-b border-[#ddd]">${item.period}</td>
            <td class="py-2 px-4 border-b border-[#ddd]">
                <input type="number" class="order-input w-20 p-1 text-center border rounded" data-index="${index}" value="${item.initialOrder}" min="1" max="${step.items.length}">
            </td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('reset-table-btn').addEventListener('click', () => {
        document.querySelectorAll('.order-input').forEach(input => {
            input.value = 0;
        });
        showFeedback(feedbackArea, 'Tabla reiniciada. Vuelve a ordenar.', false);
    });
}

function checkComparisonTable() {
    const inputs = document.querySelectorAll('.order-input');
    const userOrder = Array.from(inputs).map(input => ({
        index: parseInt(input.dataset.index),
        order: parseInt(input.value)
    }));

    // Sort by user's assigned order to check correctness
    userOrder.sort((a, b) => a.order - b.order);

    let isCorrect = true;
    for (let i = 0; i < userOrder.length; i++) {
        const originalIndex = userOrder[i].index;
        if (gameData[currentStepIndex].items[originalIndex].correctOrder !== (i + 1)) {
            isCorrect = false;
            break;
        }
    }
    return isCorrect;
}

// --- Nile Runner Game ---
// Placeholder for Nile Runner Game. The actual game logic (canvas, sprites, game loop)
// would be much more extensive and typically in its own dedicated JS file/class.
// This function would initialize and manage that game.
function renderNileRunnerGame(step) {
    contentArea.innerHTML = `
        <div class="nile-runner-container bg-[#fffbf0] p-4 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-2">${step.title}</h3>
            <p class="text-lg mb-4">${step.instructions}</p>
            <div id="game-canvas-placeholder" class="bg-[#a0d2eb] w-full h-80 border-2 border-[#c0a16b] rounded-lg mx-auto flex items-center justify-center text-[#4a3a2a] text-xl font-bold">
                <p>El juego 'Nile Runner' se integraría aquí.</p>
            </div>
            <p class="text-xl mt-4">Puntuación: <span id="nile-runner-score">0</span></p>
            <button id="start-nile-runner-btn" class="detective-btn font-cinzel font-bold py-3 px-6 rounded-lg text-lg mt-4">Comenzar Juego</button>
            <button id="stop-nile-runner-btn" class="detective-btn font-cinzel font-bold py-3 px-6 rounded-lg text-lg mt-4 hidden">Detener Juego</button>
        </div>
    `;

    const scoreDisplay = document.getElementById('nile-runner-score');
    const startButton = document.getElementById('start-nile-runner-btn');
    const stopButton = document.getElementById('stop-nile-runner-btn');

    startButton.addEventListener('click', () => {
        // This is where you'd initialize and start the actual game.
        // For demonstration, we'll just simulate score update.
        showFeedback(feedbackArea, '¡Juego Nile Runner comenzado!', false);
        startButton.disabled = true;
        stopButton.classList.remove('hidden');

        // Simulate game play and score update
        let score = 0;
        const gameSimulationInterval = setInterval(() => {
            score += Math.floor(Math.random() * 10) + 1; // Increase score randomly
            scoreDisplay.textContent = score;
            if (score >= 200 && !nileRunnerBadgesAwarded['nile-runner-master']) {
                unlockBadge('nile-runner-master');
                nileRunnerBadgesAwarded['nile-runner-master'] = true;
            } else if (score >= 100 && !nileRunnerBadgesAwarded['nile-runner-expert']) {
                unlockBadge('nile-runner-expert');
                nileRunnerBadgesAwarded['nile-runner-expert'] = true;
            }
        }, 1000); // Update score every second

        nileRunnerGame = { // Simple object to simulate game control
            stopGame: () => {
                clearInterval(gameSimulationInterval);
                showFeedback(feedbackArea, 'Juego Nile Runner detenido.', false);
                startButton.disabled = false;
                stopButton.classList.add('hidden');
                nileRunnerScore = score; // Save final score
                unlockBadge('nile-runner'); // Unlock base badge just for playing
            },
            resetGame: () => {
                clearInterval(gameSimulationInterval);
                score = 0;
                scoreDisplay.textContent = score;
                nileRunnerScore = 0;
                nileRunnerBadgesAwarded = {
                    'nile-runner-expert': false,
                    'nile-runner-master': false
                };
            }
        };
        nextBtn.textContent = 'Volver al Menú de Actividades'; // Ensure text is correct
    });

    stopButton.addEventListener('click', () => {
        if (nileRunnerGame) {
            nileRunnerGame.stopGame();
        }
    });

    nextBtn.textContent = 'Volver al Menú de Actividades';
}
