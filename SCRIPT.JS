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

// --- EVENT LISTENERS ---
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
        const optionBtn = document.createElement('button');
        optionBtn.className = 'choice-option p-3 rounded-md text-lg text-left bg-[#fffbf0] hover:bg-[#fdf2d0] transition-colors duration-200';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => {
            document.querySelectorAll('.choice-option').forEach(btn => btn.classList.remove('selected'));
            optionBtn.classList.add('selected');
            currentChallengeAttempted = true; // Mark challenge as attempted
        });
        optionsContainer.appendChild(optionBtn);
    });
    contentArea.appendChild(optionsContainer);
}

function renderNumericalSequence(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const sequenceContainer = document.createElement('div');
    sequenceContainer.className = 'flex flex-col gap-3';

    step.items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'numerical-sequence-item';
        itemDiv.setAttribute('data-index', index); // Store original index

        const itemText = document.createElement('span');
        itemText.textContent = item.text;
        itemDiv.appendChild(itemText);

        const numberControl = document.createElement('div');
        numberControl.className = 'number-control';

        const decrementBtn = document.createElement('button');
        decrementBtn.className = 'num-btn';
        decrementBtn.textContent = '-';
        decrementBtn.addEventListener('click', () => updateNumber(itemDiv, -1));
        numberControl.appendChild(decrementBtn);

        const numberDisplay = document.createElement('span');
        numberDisplay.className = 'number-display';
        numberDisplay.textContent = step.initialOrder[index]; // Display initial number
        numberControl.appendChild(numberDisplay);

        const incrementBtn = document.createElement('button');
        incrementBtn.className = 'num-btn';
        incrementBtn.textContent = '+';
        incrementBtn.addEventListener('click', () => updateNumber(itemDiv, 1));
        numberControl.appendChild(incrementBtn);

        itemDiv.appendChild(numberControl);
        sequenceContainer.appendChild(itemDiv);
    });
    contentArea.appendChild(sequenceContainer);

    // Add a check button for numerical sequence
    const checkBtn = document.createElement('button');
    checkBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-6';
    checkBtn.textContent = 'Comprobar Orden';
    checkBtn.addEventListener('click', checkNumericalSequence);
    contentArea.appendChild(checkBtn);
}

function updateNumber(itemDiv, change) {
    const numberDisplay = itemDiv.querySelector('.number-display');
    let currentNum = parseInt(numberDisplay.textContent);
    currentNum += change;

    // Keep numbers within a reasonable range, e.g., 0-5 or 1-4 based on the puzzle
    // For this puzzle (1-4), enforce limits
    if (currentNum < 0) currentNum = 0; // Allow 0 for unassigned
    if (currentNum > gameData[currentStepIndex].items.length) currentNum = gameData[currentStepIndex].items.length;

    numberDisplay.textContent = currentNum;
    currentChallengeAttempted = true; // Mark challenge as attempted
}

function checkNumericalSequence() {
    const step = gameData[currentStepIndex];
    const itemDivs = document.querySelectorAll('.numerical-sequence-item');
    let allCorrect = true;
    let currentOrder = [];

    itemDivs.forEach(itemDiv => {
        const originalIndex = parseInt(itemDiv.getAttribute('data-index'));
        const number = parseInt(itemDiv.querySelector('.number-display').textContent);
        currentOrder[originalIndex] = number;
    });

    // Check if numbers are unique and match the correct order
    const correctNumbersSet = new Set(step.items.map(item => item.correctNum));
    const enteredNumbersSet = new Set(currentOrder.filter(num => num !== 0)); // Filter out unassigned 0s

    if (enteredNumbersSet.size !== correctNumbersSet.size || !Array.from(enteredNumbersSet).every(num => correctNumbersSet.has(num))) {
        showFeedback(feedbackArea, 'Asegúrate de usar cada número del 1 al 4 una sola vez.', true);
        return;
    }

    itemDivs.forEach(itemDiv => {
        const originalIndex = parseInt(itemDiv.getAttribute('data-index'));
        const number = parseInt(itemDiv.querySelector('.number-display').textContent);
        if (number === step.items[originalIndex].correctNum) {
            itemDiv.style.backgroundColor = '#d4edda'; // Light green for correct
        } else {
            itemDiv.style.backgroundColor = '#f8d7da'; // Light red for incorrect
            allCorrect = false;
        }
    });

    if (allCorrect) {
        showFeedback(feedbackArea, '¡Orden Correcto! Has descifrado el mensaje del Nilo.', false);
        unlockBadge(step.badgeId);
        nextBtn.disabled = false; // Enable next button
    } else {
        showFeedback(feedbackArea, '¡Orden Incorrecto! Sigue intentándolo.', true);
        nextBtn.disabled = true; // Keep next button disabled
    }
}

function renderHieroglyphPuzzle(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const decoderTable = document.createElement('div');
    decoderTable.className = 'grid grid-cols-4 gap-2 text-center text-sm mb-6 bg-[#fffbf0] p-4 rounded-md border border-[#c0a16b]';
    for (const char in step.decoder) {
        const charDiv = document.createElement('div');
        charDiv.className = 'p-1 border border-[#e0d8c7] rounded-sm';
        charDiv.innerHTML = `<span class="font-bold">${char}</span>: ${step.decoder[char]}`;
        decoderTable.appendChild(charDiv);
    }
    contentArea.appendChild(decoderTable);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex items-center justify-center gap-2 mb-4';
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'hieroglyph-input';
    inputElement.className = 'hieroglyph-input p-2';
    inputElement.placeholder = 'Tu Respuesta';
    inputContainer.appendChild(inputElement);
    contentArea.appendChild(inputContainer);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4';
    checkBtn.textContent = 'Descifrar';
    checkBtn.addEventListener('click', () => {
        currentChallengeAttempted = true;
        const userAnswer = inputElement.value.trim().toUpperCase();
        if (userAnswer === step.answer) {
            showFeedback(feedbackArea, `¡Correcto! La ciudad es ${step.answer}.`, false);
            unlockBadge(step.badgeId);
            nextBtn.disabled = false;
        } else {
            showFeedback(feedbackArea, '¡Incorrecto! Vuelve a intentarlo.', true);
            nextBtn.disabled = true;
        }
    });
    contentArea.appendChild(checkBtn);
    nextBtn.disabled = true; // Disable next until solved
}

function renderRiddle(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex items-center justify-center gap-2 mb-4';
    const inputElement = document.createElement('input');
    inputElement.type = 'number'; // Expect a number
    inputElement.id = 'riddle-input';
    inputElement.className = 'riddle-input p-2';
    inputElement.placeholder = 'Número';
    inputContainer.appendChild(inputElement);
    contentArea.appendChild(inputContainer);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4';
    checkBtn.textContent = 'Resolver Acertijo';
    checkBtn.addEventListener('click', () => {
        currentChallengeAttempted = true;
        const userAnswer = inputElement.value.trim();
        if (userAnswer === step.answer) {
            showFeedback(feedbackArea, `¡Correcto! El número es ${step.answer}.`, false);
            unlockBadge(step.badgeId);
            nextBtn.disabled = false;
        } else {
            showFeedback(feedbackArea, '¡Incorrecto! Revisa tus cálculos.', true);
            nextBtn.disabled = true;
        }
    });
    contentArea.appendChild(checkBtn);
    nextBtn.disabled = true; // Disable next until solved
}

function renderFillInBlanks(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex items-center justify-center gap-1 mb-4 text-lg';
    const prefixSpan = document.createElement('span');
    prefixSpan.textContent = step.blankPrefix;
    inputContainer.appendChild(prefixSpan);

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'fill-in-blank-input';
    inputElement.className = 'fill-in-blank-input p-2 text-center text-lg';
    inputElement.placeholder = '______';
    inputContainer.appendChild(inputElement);

    const suffixSpan = document.createElement('span');
    suffixSpan.textContent = step.blankSuffix;
    inputContainer.appendChild(suffixSpan);

    contentArea.appendChild(inputContainer);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4';
    checkBtn.textContent = 'Comprobar';
    checkBtn.addEventListener('click', () => {
        currentChallengeAttempted = true;
        const userAnswer = inputElement.value.trim().toUpperCase();
        if (userAnswer === step.answer) {
            showFeedback(feedbackArea, `¡Correcto! Has completado la confesión.`, false);
            unlockBadge(step.badgeId);
            nextBtn.disabled = false;
        } else {
            showFeedback(feedbackArea, '¡Incorrecto! Esa no es la palabra correcta.', true);
            nextBtn.disabled = true;
        }
    });
    contentArea.appendChild(checkBtn);
    nextBtn.disabled = true; // Disable next until solved
}

function renderChatInterface(step) {
    const chatWindow = document.createElement('div');
    chatWindow.id = 'chat-window';
    chatWindow.className = 'chat-window';
    contentArea.appendChild(chatWindow);

    const chatInputContainer = document.createElement('div');
    chatInputContainer.className = 'chat-input-container';
    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.id = 'chat-input';
    chatInput.className = 'chat-input';
    chatInput.placeholder = 'Escribe tu pregunta a Cleopatra...';
    chatInputContainer.appendChild(chatInput);

    const sendBtn = document.createElement('button');
    sendBtn.id = 'send-chat-btn';
    sendBtn.className = 'send-btn';
    sendBtn.textContent = 'Enviar';
    chatInputContainer.appendChild(sendBtn);
    contentArea.appendChild(chatInputContainer);

    // Initial message from Cleopatra
    addChatMessage('cleo', step.text, chatWindow);

    sendBtn.addEventListener('click', () => sendChatMessage(chatInput, chatWindow));
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage(chatInput, chatWindow);
        }
    });

    // Disable next button until user decides to end conversation
    nextBtn.disabled = false; // Always allow ending chat
}

async function sendChatMessage(inputElement, chatWindow) {
    const userMessage = inputElement.value.trim();
    if (userMessage) {
        addChatMessage('user', userMessage, chatWindow);
        inputElement.value = ''; // Clear input

        // Simulate Cleopatra thinking/typing
        const thinkingBubble = addChatMessage('cleo', 'Cleopatra está pensando', chatWindow, true);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom

        // Simulate an AI response after a short delay
        setTimeout(async () => {
            const cleopatraResponse = await getCleopatraResponse(userMessage);
            thinkingBubble.textContent = cleopatraResponse;
            thinkingBubble.classList.remove('thinking');
            chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom again
        }, 1500); // Simulate processing time
    }
}

function addChatMessage(sender, message, chatWindow, isThinking = false) {
    const messageRow = document.createElement('div');
    messageRow.className = `chat-message-row ${sender}`;

    const avatar = document.createElement('img');
    avatar.className = 'chat-avatar';
    avatar.src = sender === 'user' ? 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' : 'https://cdn-icons-png.flaticon.com/512/2908/2908182.png'; // Example avatars
    avatar.alt = sender === 'user' ? studentName : 'Cleopatra';
    messageRow.appendChild(avatar);

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-cleo'} ${isThinking ? 'thinking' : ''}`;
    bubble.textContent = message;
    messageRow.appendChild(bubble);

    chatWindow.appendChild(messageRow);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the latest message
    return bubble; // Return the bubble element for potential updates (e.g., thinking message)
}

// Simple AI response logic (can be expanded with more complex logic or an actual API)
async function getCleopatraResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('cleopatra') || lowerMessage.includes('faraona')) {
        return '¡Así es, joven detective! Soy Cleopatra VII Filopátor, la última faraona de Egipto.';
    } else if (lowerMessage.includes('nilo')) {
        return 'El Nilo es el alma de Egipto. Sin sus crecidas, nuestra tierra sería solo desierto. Nos da vida y sustento.';
    } else if (lowerMessage.includes('pirámides')) {
        return 'Las pirámides son monumentos a la eternidad, tumbas para los faraones que las precedieron. Encierran muchos secretos.';
    } else if (lowerMessage.includes('jeroglíficos')) {
        return 'Los jeroglíficos son la escritura sagrada de mi pueblo, el lenguaje de los dioses. Cada símbolo cuenta una historia.';
    } else if (lowerMessage.includes('julio césar')) {
        return 'Julio César fue un gran líder romano y, por un tiempo, un aliado importante para Egipto. Su influencia en Roma fue inmensa.';
    } else if (lowerMessage.includes('marco antonio')) {
        return 'Marco Antonio fue otro poderoso romano, mi compañero y padre de algunos de mis hijos. Juntos, soñamos con un gran imperio.';
    } else if (lowerMessage.includes('tesoro') || lowerMessage.includes('corazón del nilo')) {
        return 'El Corazón del Nilo es una joya ancestral que simboliza la prosperidad de Egipto. Su desaparición sería una gran tragedia.';
    } else if (lowerMessage.includes('gracias') || lowerMessage.includes('agradezco')) {
        return 'El placer es mío, joven detective. Tu curiosidad me honra.';
    } else if (lowerMessage.includes('adiós') || lowerMessage.includes('despedida')) {
        return 'Que los dioses te acompañen en tu camino. ¡Hasta pronto!';
    } else if (lowerMessage.includes('quién eres')) {
        return 'Soy Cleopatra, Faraona de Egipto. ¿En qué puedo ayudarte hoy, joven detective?';
    } else if (lowerMessage.includes('que tal')) {
        return 'Estoy bien, gracias por preguntar. ¡Mi reino necesita mi atención constante!';
    } else if (lowerMessage.includes('tu historia')) {
        return 'Mi vida ha sido un torbellino de política, amor y poder. He luchado por mantener a Egipto independiente y fuerte.';
    } else if (lowerMessage.includes('edad')) {
        return 'La edad es solo un número cuando se tiene el poder del Nilo en las venas, ¿no crees?';
    } else if (lowerMessage.includes('roma')) {
        return 'Roma... una ciudad de gran poder, a veces aliada, a veces rival. Mi destino estuvo entrelazado con sus líderes.';
    } else if (lowerMessage.includes('familia')) {
        return 'Mi familia, los Ptolomeos, ha gobernado Egipto por siglos desde Alejandro Magno. Un linaje complejo, lleno de alianzas y traiciones.';
    } else if (lowerMessage.includes('animales')) {
        return 'En Egipto, veneramos a muchos animales. Los gatos son sagrados, los cocodrilos representan el poder del Nilo, y el escarabajo simboliza la renovación.';
    }
    
    // Default response for unhandled questions
    return 'Esa es una pregunta fascinante, joven detective. Aunque mi conocimiento es vasto, hay algunos secretos que solo el tiempo revelará. ¿Hay algo más en lo que pueda guiarte?';
}


function renderMillionaireGrammarGame(step) {
    nextBtn.disabled = true; // Disable next button until game is completed

    const gameDiv = document.createElement('div');
    gameDiv.className = 'millionaire-game-container p-6 bg-[#fffbf0] rounded-lg shadow-lg border border-[#c0a16b]';
    contentArea.appendChild(gameDiv);

    const questionDisplay = document.createElement('p');
    questionDisplay.id = 'question-display';
    questionDisplay.className = 'text-2xl font-bold mb-6 text-center';
    gameDiv.appendChild(questionDisplay);

    const optionsContainer = document.createElement('div');
    optionsContainer.id = 'millionaire-options';
    optionsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-6';
    gameDiv.appendChild(optionsContainer);

    const lifelinesContainer = document.createElement('div');
    lifelinesContainer.id = 'lifelines-container';
    lifelinesContainer.className = 'flex justify-center gap-4 mt-8';
    gameDiv.appendChild(lifelinesContainer);

    const lifeline5050Btn = document.createElement('button');
    lifeline5050Btn.id = 'lifeline-50-50';
    lifeline5050Btn.className = 'lifeline-btn';
    lifeline5050Btn.textContent = '50:50';
    lifeline5050Btn.addEventListener('click', apply5050Lifeline);
    lifelinesContainer.appendChild(lifeline5050Btn);

    const lifelineAudienceBtn = document.createElement('button');
    lifelineAudienceBtn.id = 'lifeline-audience';
    lifelineAudienceBtn.className = 'lifeline-btn';
    lifelineAudienceBtn.textContent = 'Pista de la Audiencia';
    lifelineAudienceBtn.addEventListener('click', applyAudienceLifeline);
    lifelinesContainer.appendChild(lifelineAudienceBtn);

    const lifelineCallBtn = document.createElement('button');
    lifelineCallBtn.id = 'lifeline-call';
    lifelineCallBtn.className = 'lifeline-btn';
    lifelineCallBtn.textContent = 'Pista de la Faraona';
    lifelineCallBtn.addEventListener('click', applyCallLifeline);
    lifelinesContainer.appendChild(lifelineCallBtn);

    updateLifelineButtons();
    loadMillionaireQuestion();
}

function loadMillionaireQuestion() {
    const step = gameData[currentStepIndex];
    if (millionaireCurrentQuestionIndex >= step.questions.length) {
        showFeedback(feedbackArea, '¡Felicidades! Has completado el juego "Quién Quiere Ser Gramático".', false);
        nextBtn.disabled = false; // Enable next button
        return;
    }

    const currentQ = step.questions[millionaireCurrentQuestionIndex];
    document.getElementById('question-display').innerHTML = `¿Qué categoría gramatical es la palabra destacada en la siguiente frase?: <br>"${currentQ.sentence}"`;
    
    const optionsContainer = document.getElementById('millionaire-options');
    optionsContainer.innerHTML = ''; // Clear previous options

    const optionLabels = ['A', 'B', 'C', 'D'];
    optionLabels.forEach(label => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'millionaire-option-btn';
        optionBtn.innerHTML = `<span class="millionaire-option-label">${label}</span> ${currentQ.options[label]}`;
        optionBtn.dataset.option = label;
        optionBtn.addEventListener('click', () => checkMillionaireAnswer(optionBtn, label));
        optionsContainer.appendChild(optionBtn);
    });

    // Re-apply lifeline state
    updateLifelineButtons();
}

function checkMillionaireAnswer(selectedBtn, selectedOption) {
    currentChallengeAttempted = true; // Mark challenge as attempted
    const step = gameData[currentStepIndex];
    const currentQ = step.questions[millionaireCurrentQuestionIndex];
    const allOptionBtns = document.querySelectorAll('.millionaire-option-btn');

    // Disable all options once an answer is selected
    allOptionBtns.forEach(btn => btn.disabled = true);

    if (selectedOption === currentQ.correctAnswer) {
        selectedBtn.classList.add('correct');
        showFeedback(feedbackArea, '¡Respuesta Correcta!', false);
        millionaireCurrentQuestionIndex++;
        setTimeout(loadMillionaireQuestion, 1500); // Load next question after a short delay
    } else {
        selectedBtn.classList.add('incorrect');
        // Highlight the correct answer
        allOptionBtns.forEach(btn => {
            if (btn.dataset.option === currentQ.correctAnswer) {
                btn.classList.add('correct');
            }
        });
        showFeedback(feedbackArea, `¡Respuesta Incorrecta! La respuesta correcta era ${currentQ.correctAnswer}: ${currentQ.correctCategory}.`, true);
        
        // Reset game after a short delay if incorrect
        setTimeout(() => {
            millionaireCurrentQuestionIndex = 0; // Reset progress
            millionaireLifelines = { '50-50': true, 'audience': true, 'call': true }; // Reset lifelines
            updateLifelineButtons();
            loadMillionaireQuestion();
            showFeedback(feedbackArea, 'Volvamos a empezar. ¡No te rindas!', false);
        }, 3000);
    }
}

function updateLifelineButtons() {
    document.getElementById('lifeline-50-50').disabled = !millionaireLifelines['50-50'];
    document.getElementById('lifeline-audience').disabled = !millionaireLifelines['audience'];
    document.getElementById('lifeline-call').disabled = !millionaireLifelines['call'];
}

function apply5050Lifeline() {
    if (!millionaireLifelines['50-50']) return;

    const step = gameData[currentStepIndex];
    const currentQ = step.questions[millionaireCurrentQuestionIndex];
    const allOptionBtns = Array.from(document.querySelectorAll('.millionaire-option-btn'));

    const incorrectOptions = allOptionBtns.filter(btn => btn.dataset.option !== currentQ.correctAnswer);
    
    // Randomly remove two incorrect options
    if (incorrectOptions.length > 2) {
        const optionsToRemove = [];
        while (optionsToRemove.length < 2) {
            const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
            const option = incorrectOptions[randomIndex];
            if (!optionsToRemove.includes(option)) {
                optionsToRemove.push(option);
            }
        }
        optionsToRemove.forEach(option => {
            option.disabled = true;
            option.style.opacity = '0.4';
        });
    } else {
        // Handle cases where there are 2 or fewer incorrect options
        incorrectOptions.forEach(option => {
            if (option.dataset.option !== currentQ.correctAnswer) {
                option.disabled = true;
                option.style.opacity = '0.4';
            }
        });
    }

    millionaireLifelines['50-50'] = false;
    updateLifelineButtons();
    showModal('Comodín 50:50', 'Se han eliminado dos respuestas incorrectas.');
}

function applyAudienceLifeline() {
    if (!millionaireLifelines['audience']) return;

    const step = gameData[currentStepIndex];
    const currentQ = step.questions[millionaireCurrentQuestionIndex];
    const options = currentQ.options;
    const percentages = {};
    let totalPercentage = 100;

    // Give a higher percentage to the correct answer
    const correctAnswerLabel = currentQ.correctAnswer;
    percentages[correctAnswerLabel] = Math.floor(Math.random() * 30) + 50; // 50-80% for correct
    totalPercentage -= percentages[correctAnswerLabel];

    // Distribute remaining percentage among other options
    const otherOptions = Object.keys(options).filter(key => key !== correctAnswerLabel);
    otherOptions.forEach(option => percentages[option] = 0); // Initialize

    for (let i = 0; i < totalPercentage; i++) {
        const randomIndex = Math.floor(Math.random() * otherOptions.length);
        percentages[otherOptions[randomIndex]]++;
    }

    let message = 'La audiencia cree que:\n';
    for (const label of Object.keys(options).sort()) { // Sort for consistent display
        message += `${label}: ${options[label]} - ${percentages[label]}%\n`;
    }

    millionaireLifelines['audience'] = false;
    updateLifelineButtons();
    showModal('Comodín de la Audiencia', message);
}

function applyCallLifeline() {
    if (!millionaireLifelines['call']) return;

    const step = gameData[currentStepIndex];
    const currentQ = step.questions[millionaireCurrentQuestionIndex];
    const hint = currentQ.hint || 'No tengo una pista específica en este momento, joven detective, pero confío en tu intuición.';

    millionaireLifelines['call'] = false;
    updateLifelineButtons();
    showModal('Pista de la Faraona', `Cleopatra te susurra: "${hint}"`);
}

function renderReadingSpeedTest(step) {
    const readingSpeedDiv = document.createElement('div');
    readingSpeedDiv.id = 'reading-speed-game-area';
    readingSpeedDiv.className = 'flex flex-col items-center justify-center';
    contentArea.appendChild(readingSpeedDiv);

    const wordDisplay = document.createElement('div');
    wordDisplay.id = 'reading-speed-word';
    wordDisplay.className = 'font-cinzel text-center';
    readingSpeedDiv.appendChild(wordDisplay);

    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'flex gap-4 mt-4';
    readingSpeedDiv.appendChild(controlsDiv);

    const difficultySelect = document.createElement('select');
    difficultySelect.id = 'reading-speed-difficulty';
    difficultySelect.className = 'p-2 rounded-md border border-[#c0a16b] bg-[#fffbf0] text-[#4a3a2a]';
    for (const level in step.difficultyLevels) {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        difficultySelect.appendChild(option);
    }
    difficultySelect.value = readingSpeedDifficulty; // Set initial value
    difficultySelect.addEventListener('change', (e) => {
        readingSpeedDifficulty = e.target.value;
        showFeedback(feedbackArea, `Dificultad cambiada a ${readingSpeedDifficulty}.`, false);
    });
    controlsDiv.appendChild(difficultySelect);

    const startBtn = document.createElement('button');
    startBtn.id = 'reading-speed-start-btn';
    startBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl';
    startBtn.textContent = 'Iniciar Prueba';
    startBtn.addEventListener('click', startReadingSpeedTest);
    controlsDiv.appendChild(startBtn);

    const stopBtn = document.createElement('button');
    stopBtn.id = 'reading-speed-stop-btn';
    stopBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl bg-red-700 hover:bg-red-800 hidden';
    stopBtn.textContent = 'Detener';
    stopBtn.addEventListener('click', stopReadingSpeedTest);
    controlsDiv.appendChild(stopBtn);

    // Initial display
    wordDisplay.textContent = 'Presiona "Iniciar Prueba"';
    nextBtn.disabled = false; // Always allow moving on from this activity
}

function startReadingSpeedTest() {
    const step = gameData[currentStepIndex];
    readingSpeedWords = [...step.words].sort(() => 0.5 - Math.random()); // Shuffle words
    currentReadingSpeedWordIndex = 0;
    
    document.getElementById('reading-speed-start-btn').classList.add('hidden');
    document.getElementById('reading-speed-stop-btn').classList.remove('hidden');
    document.getElementById('reading-speed-difficulty').disabled = true; // Disable difficulty during test

    const delay = step.difficultyLevels[readingSpeedDifficulty];
    const wordDisplay = document.getElementById('reading-speed-word');

    readingSpeedInterval = setInterval(() => {
        if (currentReadingSpeedWordIndex < readingSpeedWords.length) {
            wordDisplay.textContent = readingSpeedWords[currentReadingSpeedWordIndex];
            currentReadingSpeedWordIndex++;
        } else {
            stopReadingSpeedTest();
            wordDisplay.textContent = '¡Prueba Terminada!';
            showFeedback(feedbackArea, '¡Has completado la prueba de velocidad lectora! ¡Insignia ganada!', false);
            unlockBadge('velocidad-lectora');
        }
    }, delay);
}

function stopReadingSpeedTest() {
    clearInterval(readingSpeedInterval);
    document.getElementById('reading-speed-start-btn').classList.remove('hidden');
    document.getElementById('reading-speed-stop-btn').classList.add('hidden');
    document.getElementById('reading-speed-difficulty').disabled = false; // Re-enable difficulty
    document.getElementById('reading-speed-word').textContent = 'Prueba Detenida. Presiona "Iniciar Prueba" para intentarlo de nuevo.';
}

function renderComparisonTable(step) {
    const questionElement = document.createElement('p');
    questionElement.className = 'text-xl font-bold mb-4';
    questionElement.textContent = step.question;
    contentArea.appendChild(questionElement);

    const table = document.createElement('table');
    table.className = 'comparison-table';
    contentArea.appendChild(table);

    // Create table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    step.columns.forEach(colText => {
        const th = document.createElement('th');
        th.textContent = colText;
        headerRow.appendChild(th);
    });

    // Create table body with draggable rows
    const tbody = table.createTBody();
    // Shuffle items for the initial display
    let shuffledItems = [...step.items].sort(() => 0.5 - Math.random());

    shuffledItems.forEach((item, index) => {
        const row = tbody.insertRow();
        row.className = 'draggable-row';
        row.draggable = true;
        row.setAttribute('data-item-id', index); // Use original index as unique ID for data

        row.insertCell().textContent = item.text;
        row.insertCell().textContent = item.type;
        row.insertCell().textContent = item.period;
        const orderCell = row.insertCell();
        orderCell.className = 'order-display';
        orderCell.textContent = ''; // Will be filled by drag-and-drop
    });

    contentArea.appendChild(table);

    // Add drag and drop functionality
    let draggedItem = null;

    tbody.addEventListener('dragstart', (e) => {
        draggedItem = e.target.closest('tr');
        if (draggedItem) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', draggedItem.dataset.itemId);
            setTimeout(() => {
                draggedItem.classList.add('opacity-50');
            }, 0);
        }
    });

    tbody.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow drop
        const targetRow = e.target.closest('tr');
        if (targetRow && targetRow !== draggedItem) {
            const rect = targetRow.getBoundingClientRect();
            const midpoint = rect.y + rect.height / 2;
            if (e.clientY < midpoint) {
                targetRow.classList.add('border-t-2', 'border-blue-500');
                targetRow.classList.remove('border-b-2');
            } else {
                targetRow.classList.add('border-b-2', 'border-blue-500');
                targetRow.classList.remove('border-t-2');
            }
        }
    });

    tbody.addEventListener('dragleave', (e) => {
        document.querySelectorAll('.draggable-row').forEach(row => {
            row.classList.remove('border-t-2', 'border-b-2', 'border-blue-500');
        });
    });

    tbody.addEventListener('drop', (e) => {
        e.preventDefault();
        const targetRow = e.target.closest('tr');
        if (targetRow && draggedItem && targetRow !== draggedItem) {
            const rect = targetRow.getBoundingClientRect();
            const midpoint = rect.y + rect.height / 2;
            if (e.clientY < midpoint) {
                tbody.insertBefore(draggedItem, targetRow);
            } else {
                tbody.insertBefore(draggedItem, targetRow.nextSibling);
            }
            updateComparisonTableOrder();
        }
        draggedItem.classList.remove('opacity-50');
        document.querySelectorAll('.draggable-row').forEach(row => {
            row.classList.remove('border-t-2', 'border-b-2', 'border-blue-500');
        });
        draggedItem = null;
    });

    tbody.addEventListener('dragend', () => {
        draggedItem.classList.remove('opacity-50');
        document.querySelectorAll('.draggable-row').forEach(row => {
            row.classList.remove('border-t-2', 'border-b-2', 'border-blue-500');
        });
        draggedItem = null;
        updateComparisonTableOrder();
        currentChallengeAttempted = true; // Mark challenge as attempted
    });

    // Initial order update
    updateComparisonTableOrder();
    nextBtn.disabled = true; // Disable next until solved
}

function updateComparisonTableOrder() {
    const rows = document.querySelectorAll('.comparison-table tbody tr');
    rows.forEach((row, index) => {
        row.querySelector('.order-display').textContent = index + 1;
        // Reset background color
        row.style.backgroundColor = '';
        row.classList.remove('highlight-row'); // Remove any previous highlights
    });
}

function checkComparisonTable() {
    const step = gameData[currentStepIndex];
    const rows = Array.from(document.querySelectorAll('.comparison-table tbody tr'));
    let allCorrect = true;

    rows.forEach((row, index) => {
        const originalItemId = parseInt(row.dataset.itemId);
        const currentOrder = index + 1;
        const correctOrder = step.items[originalItemId].correctOrder;

        if (currentOrder === correctOrder) {
            row.style.backgroundColor = '#d4edda'; // Light green for correct
        } else {
            row.style.backgroundColor = '#f8d7da'; // Light red for incorrect
            allCorrect = false;
        }
    });

    if (allCorrect) {
        showFeedback(feedbackArea, '¡Orden Correcto! Has demostrado ser un verdadero historiador.', false);
        unlockBadge(step.badgeId);
        nextBtn.disabled = false;
        return true;
    } else {
        showFeedback(feedbackArea, '¡Orden Incorrecto! Revisa la cronología y vuelve a intentarlo.', true);
        nextBtn.disabled = true;
        return false;
    }
}


class NileRunnerGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.player = {
            x: this.canvas.width / 2 - 25, // Centered
            y: this.canvas.height - 70, // Near bottom
            width: 50,
            height: 50,
            speed: 5,
            image: new Image()
        };
        this.player.image.src = 'https://cdn-icons-png.flaticon.com/512/3676/3676991.png'; // Raft icon
        this.obstacles = [];
        this.pickups = []; // For papyrus scrolls
        this.score = 0;
        this.gameRunning = false;
        this.animationFrameId = null;
        this.obstacleSpawnRate = 120; // Frames between obstacle spawns
        this.pickupSpawnRate = 300; // Frames between pickup spawns
        this.frameCounter = 0;
        this.difficultyIncreaseRate = 0.999; // Multiplier for spawn rate, slightly decreases over time
        this.maxObstacleSpeed = 3;

        this.scoreDisplay = document.getElementById('nile-runner-score');
        this.gameOverDisplay = document.getElementById('nile-runner-game-over');
        this.restartBtn = document.getElementById('nile-runner-restart-btn');

        this.restartBtn.addEventListener('click', () => this.startGame());

        // Keyboard controls
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    startGame() {
        this.score = 0;
        this.obstacles = [];
        this.pickups = [];
        this.gameRunning = true;
        this.gameOverDisplay.style.display = 'none';
        this.restartBtn.classList.add('hidden');
        this.frameCounter = 0;
        this.obstacleSpawnRate = 120; // Reset spawn rate
        this.pickupSpawnRate = 300;
        this.maxObstacleSpeed = 3;
        this.player.x = this.canvas.width / 2 - 25; // Reset player position
        this.updateScoreDisplay();
        this.gameLoop();
        nextBtn.disabled = true; // Disable next button during game
    }

    stopGame() {
        this.gameRunning = false;
        cancelAnimationFrame(this.animationFrameId);
        this.gameOverDisplay.style.display = 'block';
        this.restartBtn.classList.remove('hidden');
        nextBtn.disabled = false; // Re-enable next button after game over
    }

    resetGame() {
        this.stopGame();
        this.score = 0;
        this.obstacles = [];
        this.pickups = [];
        this.updateScoreDisplay();
        this.gameOverDisplay.style.display = 'none';
        this.restartBtn.classList.add('hidden'); // Hide restart button initially
    }

    gameLoop() {
        if (!this.gameRunning) return;

        this.update();
        this.draw();

        this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
    }

    update() {
        this.frameCounter++;
        this.obstacleSpawnRate *= this.difficultyIncreaseRate;
        this.pickupSpawnRate *= this.difficultyIncreaseRate;
        this.maxObstacleSpeed += 0.0001; // Gradually increase speed

        // Spawn obstacles
        if (this.frameCounter % Math.floor(this.obstacleSpawnRate) === 0) {
            this.obstacles.push({
                x: Math.random() * (this.canvas.width - 50),
                y: -50,
                width: 50,
                height: 50,
                speed: Math.random() * (this.maxObstacleSpeed - 1) + 1, // Min speed 1
                image: new Image(),
                type: 'obstacle'
            });
            this.obstacles[this.obstacles.length - 1].image.src = 'https://cdn-icons-png.flaticon.com/512/1792/1792994.png'; // Crocodile icon
        }

        // Spawn pickups (papyrus)
        if (this.frameCounter % Math.floor(this.pickupSpawnRate) === 0) {
            this.pickups.push({
                x: Math.random() * (this.canvas.width - 30),
                y: -30,
                width: 30,
                height: 30,
                speed: Math.random() * (this.maxObstacleSpeed - 0.5) + 0.5,
                image: new Image(),
                type: 'pickup'
            });
            this.pickups[this.pickups.length - 1].image.src = 'https://cdn-icons-png.flaticon.com/512/3233/3233827.png'; // Papyrus icon
        }

        // Move obstacles and pickups
        this.obstacles.forEach(obstacle => obstacle.y += obstacle.speed);
        this.pickups.forEach(pickup => pickup.y += pickup.speed);

        // Remove off-screen elements
        this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.canvas.height);
        this.pickups = this.pickups.filter(pickup => pickup.y < this.canvas.height);

        // Collision detection
        this.obstacles.forEach(obstacle => {
            if (this.checkCollision(this.player, obstacle)) {
                this.stopGame();
                showFeedback(feedbackArea, `¡Juego Terminado! Puntuación: ${this.score}`, true);
            }
        });

        this.pickups.forEach((pickup, index) => {
            if (this.checkCollision(this.player, pickup)) {
                this.score += 10; // Each papyrus is 10 points
                this.updateScoreDisplay();
                this.pickups.splice(index, 1); // Remove collected pickup
                this.awardNileRunnerBadges(); // Check for badges
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw player
        this.ctx.drawImage(this.player.image, this.player.x, this.player.y, this.player.width, this.player.height);

        // Draw obstacles
        this.obstacles.forEach(obstacle => {
            this.ctx.drawImage(obstacle.image, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });

        // Draw pickups
        this.pickups.forEach(pickup => {
            this.ctx.drawImage(pickup.image, pickup.x, pickup.y, pickup.width, pickup.height);
        });
    }

    checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }

    handleKeyDown(event) {
        if (!this.gameRunning) return;

        if (event.key === 'ArrowLeft' || event.key === 'a') {
            this.player.x -= this.player.speed * 5; // Move faster
        } else if (event.key === 'ArrowRight' || event.key === 'd') {
            this.player.x += this.player.speed * 5; // Move faster
        }

        // Keep player within canvas bounds
        if (this.player.x < 0) this.player.x = 0;
        if (this.player.x + this.player.width > this.canvas.width) this.player.x = this.canvas.width - this.player.width;
    }

    updateScoreDisplay() {
        this.scoreDisplay.textContent = `Puntos: ${this.score}`;
    }

    awardNileRunnerBadges() {
        if (this.score >= 100 && !nileRunnerBadgesAwarded['nile-runner-expert']) {
            unlockBadge('nile-runner-expert');
            nileRunnerBadgesAwarded['nile-runner-expert'] = true;
        }
        if (this.score >= 200 && !nileRunnerBadgesAwarded['nile-runner-master']) {
            unlockBadge('nile-runner-master');
            nileRunnerBadgesAwarded['nile-runner-master'] = true;
        }
        // Unlock base 'nile-runner' badge just by playing for a bit (e.g., getting any score)
        if (this.score > 0 && !allBadges['nile-runner'].unlocked) {
            unlockBadge('nile-runner');
        }
    }
}

function renderNileRunnerGame(step) {
    const gameAreaDiv = document.createElement('div');
    gameAreaDiv.id = 'nile-runner-game-area';
    gameAreaDiv.className = 'flex flex-col items-center justify-center p-4 bg-[#fffbf0] rounded-lg shadow-lg border border-[#c0a16b]';
    contentArea.appendChild(gameAreaDiv);

    const scoreDiv = document.createElement('div');
    scoreDiv.id = 'nile-runner-score';
    scoreDiv.className = 'font-bold text-2xl mb-4 text-[#4a3a2a]';
    scoreDiv.textContent = 'Puntos: 0';
    gameAreaDiv.appendChild(scoreDiv);

    const canvas = document.createElement('canvas');
    canvas.id = 'nile-runner-canvas';
    canvas.width = 600; // Fixed width
    canvas.height = 400; // Fixed height
    gameAreaDiv.appendChild(canvas);

    const gameOverDisplay = document.createElement('div');
    gameOverDisplay.id = 'nile-runner-game-over';
    gameOverDisplay.className = 'font-cinzel text-red-600 text-center text-4xl font-bold mt-4 hidden';
    gameOverDisplay.textContent = '¡Juego Terminado!';
    gameAreaDiv.appendChild(gameOverDisplay);

    const restartBtn = document.createElement('button');
    restartBtn.id = 'nile-runner-restart-btn';
    restartBtn.className = 'detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4 hidden';
    restartBtn.textContent = 'Jugar de Nuevo';
    gameAreaDiv.appendChild(restartBtn);

    const legendDisplay = document.createElement('p');
    legendDisplay.id = 'nile-legend-display';
    legendDisplay.innerHTML = step.instructions;
    gameAreaDiv.appendChild(legendDisplay);

    // Initialize the game
    nileRunnerGame = new NileRunnerGame('nile-runner-canvas');
    nileRunnerGame.startGame(); // Start game automatically when loaded

    nextBtn.disabled = false; // Allow moving on from the game screen at any time
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial display update for badges (even if none unlocked)
    updateBadgeDisplay();
});