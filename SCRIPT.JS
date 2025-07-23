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
        badgeId: 'escarabajo' // Badge for solving this puzzle
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
        // The badge for reading speed is unlocked internally by the game logic
        // We just need to ensure the game has finished or allow moving on.
        // For simplicity, let's allow moving on if 'Next Pista' is clicked.
        stopReadingSpeedTest(); // Ensure test stops if still running
        if (!allBadges['velocidad-lectora'].unlocked) { // If badge not unlocked, prompt to try again
            showFeedback(feedbackArea, 'Practica un poco más para ganar la insignia de velocidad lectora.', false);
        }
        // Allow progression regardless, but show message if badge not unlocked
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
            endCurrentActivity();
            showFeedback(activitySelectionFeedback, `¡Has completado la aventura de lectura, ${studentName}!`, false);
            return;
        }
    } else if (currentPath === 'grammar') {
        // Grammar path currently only has the intro and millionaire game
        if (currentStepIndex === 7) { // From intro to millionaire game
            currentStepIndex = 8;
        } else if (currentStepIndex === 8) { // After millionaire game
            endCurrentActivity();
            showFeedback(activitySelectionFeedback, `¡Has completado el camino de la gramática, ${studentName}!`, false);
            return;
        }
    } else if (currentPath === 'reading-speed') {
        // After reading speed, go back to activity selection
        endCurrentActivity();
        showFeedback(activitySelectionFeedback, `¡Has practicado tu velocidad lectora, ${studentName}!`, false);
        return;
    } else if (currentPath === 'chat') {
        // After chat, go back to activity selection
        endCurrentActivity();
        showFeedback(activitySelectionFeedback, `¡Tu conversación con Cleopatra ha terminado, ${studentName}!`, false);
        return;
    } else if (currentPath === 'comparison-table') {
        // After comparison table, go back to activity selection
        endCurrentActivity();
        showFeedback(activitySelectionFeedback, `¡Has demostrado ser un gran historiador, ${studentName}!`, false);
        return;
    } else if (currentPath === 'nile-runner') {
        // After Nile Runner, go back to activity selection
        endCurrentActivity();
        showFeedback(activitySelectionFeedback, `¡Tu aventura en el Nilo ha concluido, ${studentName}!`, false);
        return;
    }
    loadCurrentStep();
}

function endCurrentActivity() {
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
        nextBtn.textContent = 'Volver al Menú de Actividades'; // Change button text for reading speed
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
    contentArea.appendChild(inputElement);
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
    inputElement.className = 'w-full max-w-xs p-3 rounded-md border-2 border-[#c0a16b] bg-[#fffbf0] text-[#4a3a2a] text-lg text-center focus:outline-none focus:ring-2 focus:ring-[#4a3a2a]';
    inputElement.placeholder = 'Ingresa el número';
    contentArea.appendChild(inputElement);
}

function renderFillInBlanks(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.innerHTML = `${step.question}`;
    contentArea.appendChild(questionElement);

    const blankContainer = document.createElement('div');
    blankContainer.className = 'flex items-center justify-center flex-wrap gap-2 text-lg';

    const prefixSpan = document.createElement('span');
    prefixSpan.textContent = step.blankPrefix;
    blankContainer.appendChild(prefixSpan);

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'fill-in-blank-input';
    inputElement.className = 'p-2 rounded-md border-2 border-[#c0a16b] bg-[#fffbf0] text-[#4a3a2a] text-lg text-center focus:outline-none focus:ring-2 focus:ring-[#4a3a2a] w-48 uppercase';
    inputElement.placeholder = 'Completa';
    blankContainer.appendChild(inputElement);

    const suffixSpan = document.createElement('span');
    suffixSpan.textContent = step.blankSuffix;
    blankContainer.appendChild(suffixSpan);

    contentArea.appendChild(blankContainer);
}

function renderChatInterface(step) {
    const chatContainer = document.createElement('div');
    chatContainer.className = 'w-full max-w-md mx-auto h-96 bg-[#fffbf0] rounded-lg p-4 flex flex-col border border-[#c0a16b]';
    chatContainer.id = 'chat-interface';

    const chatDisplay = document.createElement('div');
    chatDisplay.className = 'flex-grow overflow-y-auto mb-4 p-2 border-b-2 border-[#c0a16b] text-left';
    chatDisplay.id = 'chat-display';
    chatContainer.appendChild(chatDisplay);

    const chatInputContainer = document.createElement('div');
    chatInputContainer.className = 'flex';

    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.id = 'chat-input';
    chatInput.placeholder = 'Pregunta a Cleopatra...';
    chatInput.className = 'flex-grow p-2 rounded-l-md border-2 border-[#c0a16b] bg-white text-[#4a3a2a] focus:outline-none focus:ring-2 focus:ring-[#4a3a2a]';
    chatInputContainer.appendChild(chatInput);

    const sendButton = document.createElement('button');
    sendButton.textContent = 'Enviar';
    sendButton.className = 'detective-btn font-cinzel font-bold py-2 px-4 rounded-r-lg text-lg';
    sendButton.addEventListener('click', () => handleChatInput(chatInput, chatDisplay));
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleChatInput(chatInput, chatDisplay);
        }
    });
    chatInputContainer.appendChild(sendButton);

    chatContainer.appendChild(chatInputContainer);
    contentArea.appendChild(chatContainer);

    // Initial message from Cleopatra
    addChatMessage(chatDisplay, 'Cleopatra', step.text);
}

async function handleChatInput(inputElement, displayElement) {
    const userMessage = inputElement.value.trim();
    if (userMessage) {
        addChatMessage(displayElement, studentName, userMessage);
        inputElement.value = ''; // Clear input

        // Simulate typing for Cleopatra's response
        addChatMessage(displayElement, 'Cleopatra', 'Pensando...', true); // 'true' indicates temporary message

        try {
            const response = await getCleopatraResponse(userMessage);
            // Replace 'Pensando...' message with actual response
            const thinkingMessage = displayElement.querySelector('.thinking-message');
            if (thinkingMessage) {
                thinkingMessage.remove();
            }
            addChatMessage(displayElement, 'Cleopatra', response);
        } catch (error) {
            console.error('Error getting Cleopatra response:', error);
            const thinkingMessage = displayElement.querySelector('.thinking-message');
            if (thinkingMessage) {
                thinkingMessage.remove();
            }
            addChatMessage(displayElement, 'Cleopatra', 'Mis disculpas, detective. Parece que mis escribas están ocupados. No puedo responder ahora mismo.');
        }
    }
}

function addChatMessage(displayElement, sender, message, isThinking = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `p-2 my-1 rounded-lg ${sender === studentName ? 'bg-[#c0a16b] text-white self-end text-right' : 'bg-[#fffbf0] text-[#4a3a2a] self-start text-left'} ${isThinking ? 'thinking-message' : ''}`;
    messageDiv.style.maxWidth = '80%';
    messageDiv.style.wordBreak = 'break-word';

    const senderSpan = document.createElement('span');
    senderSpan.className = 'font-bold block text-sm';
    senderSpan.textContent = sender === studentName ? studentName : 'Cleopatra';
    messageDiv.appendChild(senderSpan);

    const textSpan = document.createElement('span');
    textSpan.textContent = message;
    messageDiv.appendChild(textSpan);

    displayElement.appendChild(messageDiv);
    displayElement.scrollTop = displayElement.scrollHeight; // Scroll to bottom
}

// Placeholder for actual AI response (e.g., Gemini API call)
async function getCleopatraResponse(question) {
    // In a real scenario, you'd make an API call here.
    // For this example, we'll return a static or simple dynamic response.
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('nombre')) {
        return `Mi nombre es Cleopatra VII Thea Filopátor, la última Faraona de Egipto.`;
    } else if (lowerQuestion.includes('nilo')) {
        return `El Nilo es el corazón de Egipto, la fuente de toda vida y prosperidad. Sin él, mi reino no existiría.`;
    } else if (lowerQuestion.includes('pirámides')) {
        return `Las pirámides son monumentos eternos, tumbas de faraones y maravillas de la ingeniería. Guardan muchos secretos.`;
    } else if (lowerQuestion.includes('jeroglíficos')) {
        return `Los jeroglíficos son nuestra escritura sagrada, un lenguaje de imágenes y símbolos que cuenta la historia de Egipto.`;
    } else if (lowerQuestion.includes('julio césar') || lowerQuestion.includes('marco antonio')) {
        return `Julio César y Marco Antonio fueron figuras importantes en mi vida, grandes líderes romanos con los que forjé alianzas.`;
    } else if (lowerQuestion.includes('esfinge')) {
        return `La Gran Esfinge de Giza es una guardiana silenciosa, un misterio que ha observado el paso de milenios.`;
    } else if (lowerQuestion.includes('gracias')) {
        return `De nada, joven detective. Siempre es un placer compartir la sabiduría de Egipto.`;
    } else if (lowerQuestion.includes('adiós') || lowerQuestion.includes('despedida')) {
        return `Que los dioses te acompañen, joven detective. Vuelve cuando quieras.`;
    } else {
        return `Es una pregunta interesante, joven detective. Los misterios de Egipto son profundos. ¿Hay algo más específico que te gustaría saber?`;
    }
}

// --- MILLIONAIRE GAME LOGIC ---

function renderMillionaireGrammarGame(step) {
    contentArea.innerHTML = `
        <div id="millionaire-game-container" class="w-full bg-[#fffbf0] rounded-lg p-6 border border-[#c0a16b]">
            <h3 class="font-cinzel text-xl md:text-2xl font-bold mb-4 text-center">QUIÉN QUIERE SER GRAMÁTICO</h3>
            <div id="millionaire-question-area" class="mb-6">
                <p id="millionaire-sentence" class="text-lg mb-4 text-center"></p>
                <div id="millionaire-options" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
            </div>
            <div id="millionaire-lifelines" class="flex justify-around mb-6">
                <button id="lifeline-50-50" class="detective-btn-small ${millionaireLifelines['50-50'] ? '' : 'opacity-50 cursor-not-allowed'}" ${millionaireLifelines['50-50'] ? '' : 'disabled'}>50:50</button>
                <button id="lifeline-audience" class="detective-btn-small ${millionaireLifelines['audience'] ? '' : 'opacity-50 cursor-not-allowed'}" ${millionaireLifelines['audience'] ? '' : 'disabled'}>Público</button>
                <button id="lifeline-call" class="detective-btn-small ${millionaireLifelines['call'] ? '' : 'opacity-50 cursor-not-allowed'}" ${millionaireLifelines['call'] ? '' : 'disabled'}>Llamada</button>
            </div>
            <div id="millionaire-feedback" class="text-center font-bold text-lg h-8 feedback opacity-0"></div>
            <div id="millionaire-progress" class="text-center text-md mt-4">Pregunta <span id="current-q-num"></span> de <span id="total-q-num"></span></div>
        </div>
    `;

    document.getElementById('lifeline-50-50').addEventListener('click', apply5050Lifeline);
    document.getElementById('lifeline-audience').addEventListener('click', applyAudienceLifeline);
    document.getElementById('lifeline-call').addEventListener('click', applyCallLifeline);

    millionaireCurrentQuestionIndex = 0; // Reset for a new game
    loadMillionaireQuestion(step);
    nextBtn.disabled = true; // Keep next button disabled until game complete
}

function loadMillionaireQuestion(step) {
    const questionData = step.questions[millionaireCurrentQuestionIndex];
    if (!questionData) {
        showMillionaireGameEnd(step);
        return;
    }

    document.getElementById('millionaire-sentence').innerHTML = questionData.sentence;
    const optionsContainer = document.getElementById('millionaire-options');
    optionsContainer.innerHTML = '';
    
    // Reset lifeline button states
    document.getElementById('lifeline-50-50').disabled = !millionaireLifelines['50-50'];
    document.getElementById('lifeline-50-50').classList.toggle('opacity-50', !millionaireLifelines['50-50']);
    document.getElementById('lifeline-audience').disabled = !millionaireLifelines['audience'];
    document.getElementById('lifeline-audience').classList.toggle('opacity-50', !millionaireLifelines['audience']);
    document.getElementById('lifeline-call').disabled = !millionaireLifelines['call'];
    document.getElementById('lifeline-call').classList.toggle('opacity-50', !millionaireLifelines['call']);

    for (const key in questionData.options) {
        const optionButton = document.createElement('button');
        optionButton.className = 'millionaire-option-btn detective-btn-small py-3 px-4 rounded-lg text-lg';
        optionButton.textContent = `${key}: ${questionData.options[key]}`;
        optionButton.dataset.key = key;
        optionButton.addEventListener('click', () => checkMillionaireAnswer(optionButton, questionData, step));
        optionsContainer.appendChild(optionButton);
    }
    document.getElementById('current-q-num').textContent = millionaireCurrentQuestionIndex + 1;
    document.getElementById('total-q-num').textContent = step.questions.length;
    showFeedback(document.getElementById('millionaire-feedback'), '', false); // Clear feedback
}

function checkMillionaireAnswer(selectedButton, questionData, step) {
    currentChallengeAttempted = true;
    const allOptionButtons = document.querySelectorAll('.millionaire-option-btn');
    allOptionButtons.forEach(btn => btn.disabled = true); // Disable all options after selection

    if (selectedButton.dataset.key === questionData.correctAnswer) {
        selectedButton.classList.remove('detective-btn-small');
        selectedButton.classList.add('bg-green-600', 'text-white');
        showFeedback(document.getElementById('millionaire-feedback'), '¡Correcto! Siguiente pregunta...', false);
        setTimeout(() => {
            millionaireCurrentQuestionIndex++;
            loadMillionaireQuestion(step);
        }, 1500);
    } else {
        selectedButton.classList.remove('detective-btn-small');
        selectedButton.classList.add('bg-red-600', 'text-white');
        // Highlight correct answer
        document.querySelector(`.millionaire-option-btn[data-key="${questionData.correctAnswer}"]`).classList.add('bg-green-600', 'text-white');
        showFeedback(document.getElementById('millionaire-feedback'), `Incorrecto. La respuesta correcta era ${questionData.correctAnswer}: ${questionData.options[questionData.correctAnswer]}. Juego terminado.`, true);
        nextBtn.disabled = false; // Enable next button to return to menu
        millionaireCurrentQuestionIndex = step.questions.length; // Mark game as finished
    }
}

function showMillionaireGameEnd(step) {
    document.getElementById('millionaire-question-area').innerHTML = `
        <p class="text-xl font-bold text-center mb-4">¡Has completado el QUIÉN QUIERE SER GRAMÁTICO!</p>
        <p class="text-lg text-center">¡Has demostrado un gran dominio del idioma egipcio!</p>
    `;
    document.getElementById('millionaire-options').innerHTML = ''; // Clear options
    document.getElementById('millionaire-lifelines').innerHTML = ''; // Clear lifelines
    document.getElementById('millionaire-progress').innerHTML = ''; // Clear progress
    nextBtn.disabled = false; // Enable next button to return to menu
    unlockBadge(step.badgeId); // Unlock the badge for completing the game
}


function apply5050Lifeline() {
    if (!millionaireLifelines['50-50']) return;
    millionaireLifelines['50-50'] = false;
    document.getElementById('lifeline-50-50').disabled = true;
    document.getElementById('lifeline-50-50').classList.add('opacity-50');

    const currentQuestion = gameData[currentStepIndex].questions[millionaireCurrentQuestionIndex];
    const correctAnswerKey = currentQuestion.correctAnswer;
    const incorrectOptions = Object.keys(currentQuestion.options).filter(key => key !== correctAnswerKey);

    // Randomly select two incorrect options to hide
    const optionsToHide = [];
    while (optionsToHide.length < 2) {
        const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
        const option = incorrectOptions[randomIndex];
        if (!optionsToHide.includes(option)) {
            optionsToHide.push(option);
        }
    }

    optionsToHide.forEach(key => {
        document.querySelector(`.millionaire-option-btn[data-key="${key}"]`).classList.add('hidden');
    });
    showFeedback(document.getElementById('millionaire-feedback'), 'Se han eliminado dos respuestas incorrectas.', false);
}

function applyAudienceLifeline() {
    if (!millionaireLifelines['audience']) return;
    millionaireLifelines['audience'] = false;
    document.getElementById('lifeline-audience').disabled = true;
    document.getElementById('lifeline-audience').classList.add('opacity-50');

    const currentQuestion = gameData[currentStepIndex].questions[millionaireCurrentQuestionIndex];
    const options = currentQuestion.options;
    const correctAnswerKey = currentQuestion.correctAnswer;

    // Simulate audience votes
    const votes = {};
    let totalVotes = 100;
    // Give majority to correct answer
    votes[correctAnswerKey] = Math.floor(Math.random() * 30) + 40; // 40-70% for correct
    totalVotes -= votes[correctAnswerKey];

    // Distribute remaining votes among others
    const otherOptions = Object.keys(options).filter(key => key !== correctAnswerKey);
    let remainingOptions = otherOptions.length;
    while (totalVotes > 0 && remainingOptions > 0) {
        const randomOptionIndex = Math.floor(Math.random() * otherOptions.length);
        const optionKey = otherOptions[randomOptionIndex];
        if (!votes[optionKey]) votes[optionKey] = 0;
        const vote = Math.min(totalVotes, Math.floor(Math.random() * (totalVotes / remainingOptions * 1.5)) + 1);
        votes[optionKey] += vote;
        totalVotes -= vote;
        remainingOptions--;
    }

    let audienceMessage = 'El público cree que la respuesta es: <br>';
    for (const key in votes) {
        audienceMessage += `${key}: ${votes[key]}% `;
    }
    showModal('Voto del Público', audienceMessage);
    showFeedback(document.getElementById('millionaire-feedback'), 'Has usado el comodín del público.', false);
}


function applyCallLifeline() {
    if (!millionaireLifelines['call']) return;
    millionaireLifelines['call'] = false;
    document.getElementById('lifeline-call').disabled = true;
    document.getElementById('lifeline-call').classList.add('opacity-50');

    const currentQuestion = gameData[currentStepIndex].questions[millionaireCurrentQuestionIndex];
    const correctAnswerCategory = currentQuestion.correctCategory;
    const hint = currentQuestion.hint;

    const callMessage = `Un sabio te dice: "La palabra es un ${correctAnswerCategory}. ${hint}"`;
    showModal('Llamada a un Sabio', callMessage);
    showFeedback(document.getElementById('millionaire-feedback'), 'Has usado el comodín de la llamada.', false);
}


// --- READING SPEED TEST LOGIC ---

function renderReadingSpeedTest(step) {
    readingSpeedWords = [...step.words]; // Copy words to avoid modifying original array
    // Shuffle words for random order each time
    for (let i = readingSpeedWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [readingSpeedWords[i], readingSpeedWords[j]] = [readingSpeedWords[j], readingSpeedWords[i]];
    }

    contentArea.innerHTML = `
        <div id="reading-speed-container" class="w-full bg-[#fffbf0] rounded-lg p-6 border border-[#c0a16b] text-center">
            <h3 class="font-cinzel text-xl md:text-2xl font-bold mb-4">Agilidad Visual</h3>
            <div class="mb-4">
                <label for="difficulty-select" class="text-lg">Dificultad:</label>
                <select id="difficulty-select" class="p-2 rounded-md border-2 border-[#c0a16b] bg-white text-[#4a3a2a] focus:outline-none focus:ring-2 focus:ring-[#4a3a2a]">
                    <option value="easy">Fácil (1s)</option>
                    <option value="medium">Medio (0.7s)</option>
                    <option value="hard">Difícil (0.4s)</option>
                </select>
            </div>
            <div id="word-display-area" class="text-6xl font-cinzel font-bold h-24 flex items-center justify-center text-[#4a3a2a] mb-6">
                Listo...
            </div>
            <button id="start-reading-speed-btn" class="detective-btn font-cinzel font-bold py-3 px-10 rounded-lg text-xl">Comenzar</button>
            <div id="reading-speed-feedback" class="mt-4 text-center font-bold text-lg h-8 feedback opacity-0"></div>
        </div>
    `;

    document.getElementById('difficulty-select').addEventListener('change', (e) => {
        readingSpeedDifficulty = e.target.value;
        stopReadingSpeedTest(); // Stop any running test if difficulty changes
        document.getElementById('word-display-area').textContent = 'Listo...';
        document.getElementById('start-reading-speed-btn').textContent = 'Comenzar';
        document.getElementById('start-reading-speed-btn').disabled = false;
        showFeedback(document.getElementById('reading-speed-feedback'), '', false);
        currentReadingSpeedWordIndex = 0; // Reset word index
    });

    document.getElementById('start-reading-speed-btn').addEventListener('click', () => {
        startReadingSpeedTest(step);
    });

    nextBtn.textContent = 'Volver al Menú de Actividades';
}

function startReadingSpeedTest(step) {
    const wordDisplayArea = document.getElementById('word-display-area');
    const startButton = document.getElementById('start-reading-speed-btn');
    const feedbackElement = document.getElementById('reading-speed-feedback');

    startButton.disabled = true;
    startButton.textContent = 'En progreso...';
    showFeedback(feedbackElement, '¡Concéntrate!', false);

    currentReadingSpeedWordIndex = 0;
    const displayInterval = step.difficultyLevels[readingSpeedDifficulty];

    readingSpeedInterval = setInterval(() => {
        if (currentReadingSpeedWordIndex < readingSpeedWords.length) {
            wordDisplayArea.textContent = readingSpeedWords[currentReadingSpeedWordIndex];
            currentReadingSpeedWordIndex++;
        } else {
            stopReadingSpeedTest();
            wordDisplayArea.textContent = '¡Terminado!';
            showFeedback(feedbackElement, '¡Buen trabajo! Has completado el desafío.', false);
            unlockBadge('velocidad-lectora'); // Unlock badge upon completion
            startButton.textContent = 'Reintentar';
            startButton.disabled = false; // Allow reattempt
        }
    }, displayInterval);
}

function stopReadingSpeedTest() {
    if (readingSpeedInterval) {
        clearInterval(readingSpeedInterval);
        readingSpeedInterval = null;
    }
}


// --- COMPARISON TABLE LOGIC ---

function renderComparisonTable(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'overflow-x-auto';
    const table = document.createElement('table');
    table.className = 'min-w-full bg-[#fffbf0] border border-[#c0a16b] rounded-lg shadow-md';
    table.id = 'comparison-table';

    // Table Header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    step.columns.forEach(colText => {
        const th = document.createElement('th');
        th.className = 'py-2 px-4 border-b-2 border-[#c0a16b] text-left font-bold text-lg text-[#4a3a2a]';
        th.textContent = colText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table Body
    const tbody = document.createElement('tbody');
    // Shuffle items for initial display, but keep track of correct order
    const shuffledItems = [...step.items].sort(() => Math.random() - 0.5);

    shuffledItems.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-[#f5f5e5]';

        const tdLeader = document.createElement('td');
        tdLeader.className = 'py-2 px-4 border-b border-[#c0a16b]';
        tdLeader.textContent = item.text;
        tr.appendChild(tdLeader);

        const tdType = document.createElement('td');
        tdType.className = 'py-2 px-4 border-b border-[#c0a16b]';
        tdType.textContent = item.type;
        tr.appendChild(tdType);

        const tdPeriod = document.createElement('td');
        tdPeriod.className = 'py-2 px-4 border-b border-[#c0a16b]';
        tdPeriod.textContent = item.period;
        tr.appendChild(tdPeriod);

        const tdOrder = document.createElement('td');
        tdOrder.className = 'py-2 px-4 border-b border-[#c0a16b]';
        const selectOrder = document.createElement('select');
        selectOrder.className = 'p-1 rounded border border-[#c0a16b] bg-white text-[#4a3a2a]';
        selectOrder.dataset.correctOrder = item.correctOrder; // Store correct answer
        selectOrder.id = `order-select-${index}`; // Unique ID for each select

        // Populate options from 1 to number of items
        for (let i = 1; i <= step.items.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectOrder.appendChild(option);
        }
        selectOrder.value = item.initialOrder[index] === 0 ? '' : item.initialOrder[index]; // Set initial (can be blank)
        tdOrder.appendChild(selectOrder);
        tr.appendChild(tdOrder);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    contentArea.appendChild(tableContainer);
}

function checkComparisonTable() {
    const selects = document.querySelectorAll('#comparison-table select');
    const selectedOrders = {};
    let isCorrect = true;

    selects.forEach(select => {
        const selectedValue = parseInt(select.value);
        const correctValue = parseInt(select.dataset.correctOrder);

        if (selectedValue === 0 || isNaN(selectedValue)) { // Check if not selected
            isCorrect = false;
            select.classList.add('border-red-500'); // Highlight empty/invalid
            return;
        }

        if (selectedOrders[selectedValue]) { // Check for duplicates
            isCorrect = false;
            select.classList.add('border-red-500'); // Highlight duplicate
            selectedOrders[selectedValue].classList.add('border-red-500'); // Highlight other duplicate
            return;
        }
        
        selectedOrders[selectedValue] = select; // Store select element for duplicate highlighting

        if (selectedValue !== correctValue) {
            isCorrect = false;
            select.classList.add('border-red-500'); // Highlight incorrect
        } else {
            select.classList.remove('border-red-500');
            select.classList.add('border-green-500'); // Highlight correct
        }
    });

    if (Object.keys(selectedOrders).length !== selects.length) { // Ensure all were selected uniquely
        isCorrect = false;
    }

    return isCorrect;
}


// --- NILE RUNNER GAME LOGIC (Placeholder) ---
// This would typically involve a separate canvas or complex DOM manipulation
// For now, it's a placeholder. The actual game logic needs to be added here.
function renderNileRunnerGame(step) {
    contentArea.innerHTML = `
        <div id="nile-runner-game-area" class="w-full h-96 bg-[#005f73] rounded-lg border border-[#c0a16b] flex flex-col items-center justify-center text-white relative overflow-hidden">
            <h3 class="font-cinzel text-2xl md:text-3xl font-bold mb-4">${step.title}</h3>
            <p class="text-lg text-center mb-6">${step.instructions}</p>
            <div id="game-canvas-placeholder" class="bg-gray-800 w-full h-64 flex items-center justify-center text-gray-400">
                [Aquí iría el lienzo del juego Nile Runner. Necesita lógica adicional de juego.]
            </div>
            <p class="text-xl font-bold mt-4">Puntuación: <span id="nile-runner-score">0</span></p>
            <button id="start-nile-runner-btn" class="detective-btn font-cinzel font-bold py-3 px-10 rounded-lg text-xl mt-4">Iniciar Juego</button>
            <div id="nile-runner-feedback" class="mt-4 text-center font-bold text-lg h-8 feedback opacity-0"></div>
        </div>
    `;

    const scoreDisplay = document.getElementById('nile-runner-score');
    const startButton = document.getElementById('start-nile-runner-btn');
    const feedbackElement = document.getElementById('nile-runner-feedback');

    // This is where you would instantiate and manage your actual game logic
    // For demonstration, we'll simulate score and badge unlocking
    nileRunnerScore = 0; // Reset score for a new game
    scoreDisplay.textContent = nileRunnerScore;

    startButton.addEventListener('click', () => {
        showFeedback(feedbackElement, '¡Juego iniciado! (Simulado)', false);
        startButton.disabled = true;
        // Simulate game play and score
        let currentSimulatedScore = 0;
        const gameSimulationInterval = setInterval(() => {
            currentSimulatedScore += 10;
            scoreDisplay.textContent = currentSimulatedScore;
            if (currentSimulatedScore >= 100 && !nileRunnerBadgesAwarded['nile-runner-expert']) {
                unlockBadge('nile-runner-expert');
                nileRunnerBadgesAwarded['nile-runner-expert'] = true;
            }
            if (currentSimulatedScore >= 200 && !nileRunnerBadgesAwarded['nile-runner-master']) {
                unlockBadge('nile-runner-master');
                nileRunnerBadgesAwarded['nile-runner-master'] = true;
            }
            if (currentSimulatedScore >= 250) { // End game
                clearInterval(gameSimulationInterval);
                showFeedback(feedbackElement, 'Juego simulado terminado.', false);
                startButton.textContent = 'Volver a Jugar';
                startButton.disabled = false;
                unlockBadge('nile-runner'); // Basic badge for playing
                nileRunnerScore = currentSimulatedScore; // Save final score
            }
        }, 500); // Simulate score increase every 0.5 seconds

        // In a real game, nileRunnerGame would be an object with start/stop/reset methods
        // nileRunnerGame = new NileRunnerGame('game-canvas-placeholder', {
        //     onScoreUpdate: (score) => {
        //         nileRunnerScore = score;
        //         scoreDisplay.textContent = score;
        //         if (score >= 100 && !nileRunnerBadgesAwarded['nile-runner-expert']) {
        //             unlockBadge('nile-runner-expert');
        //             nileRunnerBadgesAwarded['nile-runner-expert'] = true;
        //         }
        //         // ... more badge logic
        //     },
        //     onGameEnd: (finalScore) => {
        //         startButton.textContent = 'Volver a Jugar';
        //         startButton.disabled = false;
        //         unlockBadge('nile-runner');
        //         nileRunnerScore = finalScore;
        //     }
        // });
        // nileRunnerGame.startGame();
    });

    nextBtn.textContent = 'Volver al Menú de Actividades';
}

// Placeholder for actual Nile Runner Game class/logic
// class NileRunnerGame {
//     constructor(canvasId, options) {
//         this.canvas = document.getElementById(canvasId);
//         // ... game setup
//         this.onScoreUpdate = options.onScoreUpdate || (() => {});
//         this.onGameEnd = options.onGameEnd || (() => {});
//     }
//     startGame() { /* ... game loop ... */ }
//     stopGame() { /* ... stop loop ... */ }
//     resetGame() { /* ... reset variables ... */ }
// }