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
        badgeId: 'faraona-badge', // Badge for correct answer
        feedback: {
            correct: '¡Correcto! Has demostrado ser digno de mi confianza.',
            incorrect: 'Incorrecto. La Faraona es la única con poder supremo.'
        }
    },
    {
        type: 'activity-selection',
        title: 'Pista 2: El Camino a la Verdad',
        text: `Joven detective, el misterio se profundiza. Para desvelar la verdad, debes explorar diferentes caminos. Elige una de estas actividades para encontrar la siguiente pista:`,
        activities: [
            { name: 'Nilo Corredor', id: 'nile-runner-activity', badge: 'nile-runner' },
            { name: 'Acertijo de la Esfinge', id: 'sphinx-riddle-activity', badge: 'sphinx-riddle' },
            { name: 'Audiencia con la Faraona', id: 'cleopatra-chat-activity', badge: 'cleopatra-chat' }
        ]
    },
    // --- Nile Runner Game Path (Index 3 - directly referenced) ---
    {
        type: 'nile-runner',
        title: 'Pista 3: Agilidad en el Nilo',
        text: 'El Corazón del Nilo fue visto por última vez navegando por las aguas. Demuestra tu agilidad esquivando los peligros del río para encontrar la siguiente pista. <br><br><b>Usa las flechas del teclado (izquierda/derecha) para mover el barco.</b>',
        badgeId: 'nile-runner-master' // Badge for completing the game successfully
    },
    // --- Sphinx Riddle Path (Index 4 - directly referenced) ---
    {
        type: 'riddle',
        title: 'Pista 3: El Enigma de la Esfinge',
        text: 'La Esfinge te aguarda con un enigma ancestral. Solo aquellos con una mente aguda pueden desentrañar sus misterios y avanzar en la búsqueda del Corazón del Nilo.',
        riddle: '¿Qué animal camina a cuatro patas por la mañana, dos al mediodía y tres por la tarde?',
        correctAnswer: 'El hombre',
        badgeId: 'sphinx-riddle-solver',
        feedback: {
            correct: '¡La sabiduría de la Esfinge es tuya! Has resuelto el enigma.',
            incorrect: 'Incorrecto. La Esfinge te mira con desaprobación. Inténtalo de nuevo.'
        }
    },
    // --- Chat with Cleopatra Path (Index 5 - directly referenced) ---
    {
        type: 'chat',
        title: 'Pista 3: Audiencia con la Faraona',
        text: 'Joven detective, si buscas la verdad en el corazón de mi reino, debes preguntarme directamente. Estoy lista para responder tus inquietudes.',
        badgeId: 'cleopatra-communicator'
    },
    // --- Reading Speed Game Path (Index 6 - directly referenced) ---
    {
        type: 'reading-speed',
        title: 'Pista 4: El Papiro Veloz',
        text: 'Los escribas de Egipto solían registrar secretos en papiros que se leían a gran velocidad. Demuestra tu rapidez mental leyendo este fragmento para encontrar la siguiente clave.',
        content: 'En las arenas doradas del vasto desierto egipcio, donde el sol incandescente besa las pirámides eternas y el río Nilo serpentea como una arteria vital, yacen los ecos de una civilización milenaria. Los faraones, con sus coronas de doble pluma, gobernaban con la autoridad de los dioses, construyendo monumentos que desafían el tiempo y la lógica humana. Sus reinados eran épocas de esplendor, intriga y un profundo respeto por la vida después de la muerte. Los jeroglíficos, intrincados símbolos grabados en piedra, narran historias de batallas, mitos y la vida cotidiana de un pueblo que creía en la eternidad. La momificación, un arte sagrado, preparaba el cuerpo para su viaje al más allá, asegurando la inmortalidad del alma. El legado de Egipto, un tesoro de sabiduría y misterio, continúa fascinando a la humanidad, invitándonos a desentrañar sus enigmas aún ocultos bajo el velo del tiempo.',
        thresholdWPM: 150, // Words Per Minute threshold for success
        badgeId: 'fast-reader'
    },
    // --- Comparison Table Activity (Index 7 - directly referenced) ---
    {
        type: 'comparison-table',
        title: 'Pista 4: El Juicio de los Dioses',
        text: 'Para avanzar, debes entender las alianzas y rivalidades. Compara a los líderes de Egipto y Roma para encontrar la pista oculta en sus relaciones.',
        columns: ['Característica', 'Cleopatra VII', 'Julio César', 'Marco Antonio'],
        rows: [
            ['Origen', 'Egipto', 'Roma', 'Roma'],
            ['Rol Principal', 'Faraona', 'General/Dictador', 'General/Triunviro'],
            ['Relación con Cleopatra', 'Ella misma', 'Aliado y Amante', 'Aliado y Amante'],
            ['Famoso por', 'Inteligencia, Estrategia', 'Conquistas, Liderazgo', 'Lealtad, Fuerza Militar']
        ],
        highlightRow: 'Relación con Cleopatra', // Row to highlight
        badgeId: 'historian-badge'
    },
    // --- Cryptography (Index 8 - directly referenced) ---
    {
        type: 'cryptography',
        title: 'Pista 5: El Cifrado del Papiro',
        text: 'Los secretos de los faraones a menudo se ocultaban en complejos cifrados. Solo descifrando este mensaje podrás revelar la ubicación final del Corazón del Nilo.',
        encryptedMessage: 'HVWHP QLORY HV HO OXJDU', // Example: "ESTE ES EL NILO" (Caesar cipher, shift 3)
        // Using a simple Caesar cipher for this example
        // (V -> S, H -> E, W -> T, K -> H, S -> I, D -> S)
        // Real message: "LA TUMBA ESTA AQUI"
        shift: -3, // This is the shift amount to decrypt
        // Expected decrypted message: "EL CORAZON ESTA EN EL TEMPLO" (example)
        correctAnswer: 'EL CORAZON ESTA EN EL TEMPLO', // The actual decrypted answer
        badgeId: 'cryptographer-badge'
    },
    {
        type: 'conclusion',
        title: '¡El Corazón del Nilo Recuperado!',
        text: `¡Felicidades, joven detective! Has superado cada desafío y desentrañado los enigmas de Egipto. Gracias a tu ingenio y perseverancia, el 'Corazón del Nilo' ha sido recuperado y la prosperidad ha vuelto a mi reino. Tu nombre será recordado en los anales de la historia egipcia como un verdadero héroe. ¡Has demostrado ser el mejor detective que Egipto jamás haya conocido! <br><br><b>Puedes revisar tus insignias y descargar un resumen de tu aventura.</b>`,
        final: true
    }
];

// --- GAME VARIABLES ---
let currentPageIndex = 0;
let studentName = '';
let gameStarted = false;
let badges = {}; // Object to store unlocked badges { 'badgeId': true/false }
let chatHistory = []; // For Cleopatra Chat
let nileRunnerScore = 0; // Score for Nile Runner Game
let nileRunnerGame = null; // To hold the game object/control
let nileRunnerBadgesAwarded = {
    'nile-runner-expert': false,
    'nile-runner-master': false
};

// --- DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const studentNameInput = document.getElementById('student-name-input');
const submitNameBtn = document.getElementById('submit-name-btn');
const activitySelectionFeedback = document.getElementById('activity-selection-feedback');

const gameContainer = document.getElementById('game-container'); // Correctly identified
const contentArea = document.getElementById('content-area');
const feedbackArea = document.getElementById('feedback-area');
const navigationArea = document.getElementById('navigation-area');
const nextBtn = document.getElementById('next-btn');
const allBadgesDisplay = document.getElementById('all-badges-display');

// Modal Elements
const genericModal = document.getElementById('generic-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalCloseBtn = document.querySelector('.modal-close-btn');

// --- HELPER FUNCTIONS ---
function showFeedback(element, message, isError = false) {
    element.textContent = message;
    element.classList.remove('opacity-0');
    element.classList.add('opacity-100');
    if (isError) {
        element.classList.remove('text-green-600');
        element.classList.add('text-red-600');
    } else {
        element.classList.remove('text-red-600');
        element.classList.add('text-green-600');
    }
    setTimeout(() => {
        element.classList.remove('opacity-100');
        element.classList.add('opacity-0');
    }, 3000);
}

function saveGameState() {
    const gameState = {
        currentPageIndex,
        studentName,
        badges,
        chatHistory,
        nileRunnerScore,
        nileRunnerBadgesAwarded
    };
    localStorage.setItem('cleopatraGame', JSON.stringify(gameState));
    console.log('Game state saved:', gameState);
}

function loadGameState() {
    const savedState = localStorage.getItem('cleopatraGame');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        currentPageIndex = gameState.currentPageIndex || 0;
        studentName = gameState.studentName || '';
        badges = gameState.badges || {};
        chatHistory = gameState.chatHistory || [];
        nileRunnerScore = gameState.nileRunnerScore || 0;
        nileRunnerBadgesAwarded = gameState.nileRunnerBadgesAwarded || {
            'nile-runner-expert': false,
            'nile-runner-master': false
        };

        if (studentName) {
            studentNameInput.value = studentName;
        }
        console.log('Game state loaded:', gameState);
    } else {
        console.log('No saved game state found.');
    }
}

function unlockBadge(badgeId) {
    if (!badges[badgeId]) {
        badges[badgeId] = true;
        saveGameState();
        const badgeElement = document.getElementById(badgeId);
        if (badgeElement) {
            badgeElement.classList.add('unlocked');
            showModal('¡Insignia Desbloqueada!', `¡Felicidades! Has ganado la insignia de ${badgeId.replace('-', ' ').toUpperCase()}!`);
        }
        renderBadges();
    }
}

function renderBadges() {
    allBadgesDisplay.innerHTML = ''; // Clear previous badges
    const badgeContainer = document.createElement('div');
    badgeContainer.className = 'flex flex-wrap justify-center gap-4 mt-4';

    const allPossibleBadges = [
        { id: 'faraona-badge', name: 'Faraona', icon: '👑' },
        { id: 'nile-runner', name: 'Corredor del Nilo', icon: '🚣' },
        { id: 'nile-runner-expert', name: 'Experto del Nilo', icon: '🏆' },
        { id: 'nile-runner-master', name: 'Maestro del Nilo', icon: '🥇' },
        { id: 'sphinx-riddle', name: 'Acertijo de la Esfinge', icon: '🤔' },
        { id: 'sphinx-riddle-solver', name: 'Resolutor de Esfinges', icon: '🧠' },
        { id: 'cleopatra-chat', name: 'Chat con Cleopatra', icon: '💬' },
        { id: 'cleopatra-communicator', name: 'Comunicador de Cleopatra', icon: '🗣️' },
        { id: 'fast-reader', name: 'Lector Veloz', icon: '⚡' },
        { id: 'historian-badge', name: 'Historiador', icon: '📜' },
        { id: 'cryptographer-badge', name: 'Criptógrafo', icon: '🔒' },
        // Add other badges as needed
    ];

    allPossibleBadges.forEach(badge => {
        const badgeItem = document.createElement('div');
        badgeItem.id = badge.id;
        badgeItem.className = `badge-item flex flex-col items-center p-2 rounded-lg ${badges[badge.id] ? 'unlocked' : ''}`;
        badgeItem.innerHTML = `
            <span class="text-4xl">${badge.icon}</span>
            <span class="text-sm text-center mt-1">${badge.name}</span>
        `;
        badgeContainer.appendChild(badgeItem);
    });
    allBadgesDisplay.appendChild(badgeContainer);
}


function showModal(title, message, isHtml = false) {
    modalTitle.textContent = title;
    if (isHtml) {
        modalContent.innerHTML = message;
    } else {
        modalContent.textContent = message;
    }
    genericModal.classList.remove('hidden');
}

function hideModal() {
    genericModal.classList.add('hidden');
}

// --- GAME LOGIC ---
function renderPage(index) {
    const page = gameData[index];
    contentArea.innerHTML = ''; // Clear previous content
    navigationArea.innerHTML = ''; // Clear previous navigation buttons
    feedbackArea.textContent = ''; // Clear feedback

    renderBadges(); // Always render badges when page changes

    let navigationButtonsHtml = '';

    if (page.type === 'intro' || page.type === 'conclusion' || page.type === 'text') {
        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
        `;
        if (page.final) {
            navigationButtonsHtml = `
                <button id="download-summary-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mb-4">Descargar Resumen</button>
                <button id="restart-game-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Volver a Jugar</button>
            `;
            // Add event listeners for final screen buttons
            setTimeout(() => {
                document.getElementById('download-summary-btn').addEventListener('click', generatePdfSummary);
                document.getElementById('restart-game-btn').addEventListener('click', restartGame);
            }, 0);
        } else {
            navigationButtonsHtml = `<button id="next-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Siguiente Pista</button>`;
        }
    } else if (page.type === 'multiple-choice') {
        let optionsHtml = page.options.map((option, idx) => `
            <button class="detective-btn multiple-choice-option font-cinzel font-bold py-2 px-6 rounded-lg text-lg mb-3" data-option="${option}">${option}</button>
        `).join('');

        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            <p class="text-xl font-bold mt-6">${page.question}</p>
            <div id="options-container" class="flex flex-col items-center mt-4">
                ${optionsHtml}
            </div>
        `;
        // Add event listeners for options
        document.querySelectorAll('.multiple-choice-option').forEach(button => {
            button.addEventListener('click', (event) => {
                const selectedOption = event.target.dataset.option;
                if (selectedOption === page.correctAnswer) {
                    showFeedback(feedbackArea, page.feedback.correct);
                    if (page.badgeId) {
                        unlockBadge(page.badgeId);
                    }
                    navigationArea.innerHTML = `<button id="next-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Siguiente Pista</button>`;
                    currentPageIndex++;
                } else {
                    showFeedback(feedbackArea, page.feedback.incorrect, true);
                    // Optionally, allow retrying or penalize
                }
                saveGameState();
                renderPage(currentPageIndex);
            });
        });
    } else if (page.type === 'activity-selection') {
        let activitiesHtml = page.activities.map(activity => `
            <button class="detective-btn activity-select-btn font-cinzel font-bold py-3 px-8 rounded-lg text-xl mb-4" data-activity-id="${activity.id}">${activity.name}</button>
        `).join('');

        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            <div class="flex flex-col items-center mt-6">
                ${activitiesHtml}
            </div>
        `;

        document.querySelectorAll('.activity-select-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const activityId = event.target.dataset.activityId;
                // Navigate to the specific activity page
                if (activityId === 'nile-runner-activity') {
                    currentPageIndex = gameData.findIndex(p => p.type === 'nile-runner');
                } else if (activityId === 'sphinx-riddle-activity') {
                    currentPageIndex = gameData.findIndex(p => p.type === 'riddle');
                } else if (activityId === 'cleopatra-chat-activity') {
                    currentPageIndex = gameData.findIndex(p => p.type === 'chat');
                }
                saveGameState();
                renderPage(currentPageIndex);
            });
        });
    } else if (page.type === 'nile-runner') {
        contentArea.innerHTML = `
            <div id="nile-runner-game-area" class="flex flex-col items-center justify-center gap-4">
                <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
                <p class="text-lg">${page.text}</p>
                <div class="text-lg">Puntuación: <span id="nile-runner-score-display">${nileRunnerScore}</span></div>
                <canvas id="nile-runner-canvas" width="800" height="300" class="border-2 border-amber-800 bg-blue-300"></canvas>
                <div class="flex gap-4">
                    <button id="nile-runner-start-btn" class="detective-btn">Comenzar</button>
                    <button id="nile-runner-stop-btn" class="detective-btn hidden">Detener</button>
                </div>
            </div>
        `;
        // Attach game logic (placeholder for actual game implementation)
        initializeNileRunnerGame();
    } else if (page.type === 'riddle') {
        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            <p class="text-xl font-bold mt-6">Acertijo: "${page.riddle}"</p>
            <input type="text" id="riddle-answer-input" placeholder="Tu respuesta..." class="w-full max-w-sm p-3 mt-4 border-2 border-[#c0a16b] rounded-lg text-lg bg-[#fef9e7] text-[#4a3a2a]">
            <button id="submit-riddle-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4">Resolver</button>
        `;
        document.getElementById('submit-riddle-btn').addEventListener('click', () => {
            const userAnswer = document.getElementById('riddle-answer-input').value.trim();
            if (userAnswer.toLowerCase() === page.correctAnswer.toLowerCase()) {
                showFeedback(feedbackArea, page.feedback.correct);
                if (page.badgeId) {
                    unlockBadge(page.badgeId);
                }
                currentPageIndex++; // Move to next page on correct answer
                saveGameState();
                renderPage(currentPageIndex);
            } else {
                showFeedback(feedbackArea, page.feedback.incorrect, true);
            }
        });
    } else if (page.type === 'chat') {
        contentArea.innerHTML = `
            <div id="chat-container" class="flex flex-col h-96 bg-gray-100 rounded-lg p-4 relative">
                <h2 class="font-cinzel text-2xl font-bold mb-4">${page.title}</h2>
                <p class="text-lg mb-4">${page.text}</p>
                <div id="chat-display" class="flex-1 overflow-y-auto p-2 border border-gray-300 rounded-lg mb-4 bg-white">
                    </div>
                <div class="flex">
                    <input type="text" id="chat-input" placeholder="Escribe tu mensaje a Cleopatra..." class="flex-1 p-2 border border-gray-300 rounded-l-lg">
                    <button id="send-btn" class="detective-btn px-4 py-2 rounded-r-lg">Enviar</button>
                </div>
            </div>
        `;
        // Initialize chat display
        const chatDisplay = document.getElementById('chat-display');
        chatHistory.forEach(msg => {
            const msgElement = document.createElement('div');
            msgElement.className = `p-2 my-1 rounded-lg ${msg.role === 'user' ? 'bg-blue-200 self-end text-right' : 'bg-gray-200 self-start text-left'}`;
            msgElement.textContent = `${msg.role === 'user' ? 'Tú' : 'Cleopatra'}: ${msg.parts[0].text}`;
            chatDisplay.appendChild(msgElement);
        });
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom

        // Event listeners for chat
        const sendBtn = document.getElementById('send-btn');
        const chatInput = document.getElementById('chat-input');

        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        if (page.badgeId) {
            unlockBadge(page.badgeId); // Unlock chat badge just by starting
        }
        navigationButtonsHtml = `<button id="next-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4">Terminar Chat</button>`;

    } else if (page.type === 'reading-speed') {
        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            <div id="word-display" class="text-4xl font-bold text-center mt-8 min-h-[80px]"></div>
            <div class="text-xl mt-4">WPM: <span id="wpm-display">0</span></div>
            <div class="flex gap-4 mt-6">
                <button id="start-reading-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl">Comenzar</button>
                <button id="stop-reading-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl hidden">Detener</button>
            </div>
        `;

        const wordDisplay = document.getElementById('word-display');
        const wpmDisplay = document.getElementById('wpm-display');
        const startReadingBtn = document.getElementById('start-reading-btn');
        const stopReadingBtn = document.getElementById('stop-reading-btn');

        let words = page.content.split(/\s+/);
        let currentWordIndex = 0;
        let startTime = 0;
        let timerInterval;

        startReadingBtn.addEventListener('click', () => {
            startReadingBtn.classList.add('hidden');
            stopReadingBtn.classList.remove('hidden');
            currentWordIndex = 0;
            startTime = Date.now();
            displayNextWord();
            timerInterval = setInterval(displayNextWord, 300); // Adjust speed as needed
        });

        stopReadingBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            const endTime = Date.now();
            const totalTimeSeconds = (endTime - startTime) / 1000;
            const wordsRead = currentWordIndex;
            const wpm = (wordsRead / totalTimeSeconds) * 60;
            wpmDisplay.textContent = Math.round(wpm);

            if (wpm >= page.thresholdWPM) {
                showFeedback(feedbackArea, `¡Excelente! Has leído a ${Math.round(wpm)} WPM.`, false);
                if (page.badgeId) {
                    unlockBadge(page.badgeId);
                }
                currentPageIndex++;
            } else {
                showFeedback(feedbackArea, `Necesitas leer más rápido. Tu WPM fue de ${Math.round(wpm)}. Inténtalo de nuevo.`, true);
            }
            stopReadingBtn.classList.add('hidden');
            startReadingBtn.classList.remove('hidden');
            wordDisplay.textContent = '¡Prueba de Lectura Finalizada!';
            saveGameState();
            // Do not immediately render next page, allow user to see feedback
            setTimeout(() => renderPage(currentPageIndex), 2000); // Render next page after 2 seconds
        });

        function displayNextWord() {
            if (currentWordIndex < words.length) {
                wordDisplay.textContent = words[currentWordIndex];
                currentWordIndex++;
            } else {
                // All words displayed, stop automatically
                clearInterval(timerInterval);
                stopReadingBtn.click(); // Simulate stop button click to calculate WPM
            }
        }
    } else if (page.type === 'comparison-table') {
        let tableHtml = `<table class="comparison-table w-full border-collapse mt-4"><thead><tr>`;
        page.columns.forEach(col => {
            tableHtml += `<th class="border p-2 bg-[#c0a16b] text-[#4a3a2a] font-bold">${col}</th>`;
        });
        tableHtml += `</tr></thead><tbody>`;
        page.rows.forEach(row => {
            const isHighlighted = page.highlightRow && row[0] === page.highlightRow;
            tableHtml += `<tr class="${isHighlighted ? 'highlight-row' : ''}">`;
            row.forEach(cell => {
                tableHtml += `<td class="border p-2">${cell}</td>`;
            });
            tableHtml += `</tr>`;
        });
        tableHtml += `</tbody></table>`;

        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            ${tableHtml}
        `;
        navigationButtonsHtml = `<button id="next-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4">Siguiente Pista</button>`;
        if (page.badgeId) {
            unlockBadge(page.badgeId);
        }
    } else if (page.type === 'cryptography') {
        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            <p class="text-xl font-bold mt-6">Mensaje Cifrado: <span class="text-red-600">${page.encryptedMessage}</span></p>
            <input type="text" id="decrypted-answer-input" placeholder="Tu mensaje descifrado..." class="w-full max-w-sm p-3 mt-4 border-2 border-[#c0a16b] rounded-lg text-lg bg-[#fef9e7] text-[#4a3a2a]">
            <button id="submit-decryption-btn" class="detective-btn font-cinzel font-bold py-2 px-8 rounded-lg text-xl mt-4">Descifrar</button>
            <div id="decryption-hint" class="text-sm mt-2 text-gray-600">Pista: Considera un cifrado César.</div>
        `;
        document.getElementById('submit-decryption-btn').addEventListener('click', () => {
            const userAnswer = document.getElementById('decrypted-answer-input').value.trim();
            if (userAnswer.toUpperCase() === page.correctAnswer.toUpperCase()) {
                showFeedback(feedbackArea, '¡Mensaje descifrado correctamente! Has revelado la verdad.');
                if (page.badgeId) {
                    unlockBadge(page.badgeId);
                }
                currentPageIndex++; // Move to next page on correct answer
                saveGameState();
                renderPage(currentPageIndex);
            } else {
                showFeedback(feedbackArea, 'Mensaje incorrecto. Sigue intentándolo.', true);
            }
        });
    }


    if (navigationButtonsHtml) {
        navigationArea.innerHTML = navigationButtonsHtml;
        const newNextBtn = document.getElementById('next-btn');
        if (newNextBtn) {
            newNextBtn.addEventListener('click', () => {
                currentPageIndex++;
                saveGameState();
                if (currentPageIndex < gameData.length) {
                    renderPage(currentPageIndex);
                } else {
                    // This handles cases where we might go past the last defined page
                    // For now, it will just show the last page
                    // In a more complex game, you might have a dedicated "game over" or "the end" state
                    console.log("Fin del juego o ruta no definida después de la última página.");
                    // Fallback to a generic end screen or conclusion if no specific path end is defined
                    contentArea.innerHTML = `<h2 class="font-cinzel text-3xl font-bold text-center">¡Aventura Finalizada!</h2><p class="text-lg text-center mt-4">¡Has completado todos los desafíos!</p>`;
                    document.getElementById('navigation-area').style.display = 'none';
                    allBadgesDisplay.innerHTML = ''; // Clear badges on final exit
                }
            });
        }
    }
}

async function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatDisplay = document.getElementById('chat-display');
    const userMessage = chatInput.value.trim();

    if (userMessage) {
        chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
        const userMsgElement = document.createElement('div');
        userMsgElement.className = 'p-2 my-1 rounded-lg bg-blue-200 self-end text-right';
        userMsgElement.textContent = `Tú: ${userMessage}`;
        chatDisplay.appendChild(userMsgElement);
        chatInput.value = '';
        chatDisplay.scrollTop = chatDisplay.scrollHeight;

        // Simulate Cleopatra's response (replace with actual API call if integrated)
        const cleopatraResponse = await getCleopatraResponse(userMessage);
        chatHistory.push({ role: 'model', parts: [{ text: cleopatraResponse }] });
        const cleopatraMsgElement = document.createElement('div');
        cleopatraMsgElement.className = 'p-2 my-1 rounded-lg bg-gray-200 self-start text-left';
        cleopatraMsgElement.textContent = `Cleopatra: ${cleopatraResponse}`;
        chatDisplay.appendChild(cleopatraMsgElement);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
        saveGameState();
    }
}

// Placeholder for actual Gemini API integration
async function getCleopatraResponse(message) {
    // In a real application, you would make an API call here to your Gemini backend
    // For now, a simple placeholder response
    const responses = [
        "Joven detective, tu perspicacia me complace.",
        "El Nilo guarda muchos secretos. ¿Qué más deseas saber?",
        "Mis conocimientos son vastos como las arenas del desierto.",
        "Pregunta, y te revelaré lo que mi sabiduría permita.",
        "El destino de Egipto está en juego, tus preguntas son importantes."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}


function restartGame() {
    localStorage.removeItem('cleopatraGame'); // Clear saved game
    currentPageIndex = 0;
    studentName = '';
    badges = {};
    chatHistory = [];
    nileRunnerScore = 0;
    nileRunnerBadgesAwarded = {
        'nile-runner-expert': false,
        'nile-runner-master': false
    };
    studentNameInput.value = ''; // Clear name input
    submitNameBtn.disabled = true; // Disable button again
    startScreen.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    // Ensure all activity-specific displays are hidden on restart if they were visible
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) chatContainer.classList.add('hidden');
    const nileRunnerGameArea = document.getElementById('nile-runner-game-area');
    if (nileRunnerGameArea) nileRunnerGameArea.classList.add('hidden');
    // Add similar checks for other activity containers if they become directly visible
    renderPage(currentPageIndex); // Re-render initial state
    renderBadges();
}

function generatePdfSummary() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('Resumen de tu Aventura: El Enigma de Cleopatra', 105, 20, null, null, "center");

    let y = 40;
    doc.setFontSize(14);
    doc.text(`Nombre del Detective: ${studentName}`, 20, y);
    y += 10;
    doc.text(`Insignias Desbloqueadas:`, 20, y);
    y += 10;

    // Add badges to PDF
    const unlockedBadges = Object.keys(badges).filter(badgeId => badges[badgeId]);
    if (unlockedBadges.length > 0) {
        unlockedBadges.forEach(badgeId => {
            doc.text(`- ${badgeId.replace('-', ' ').toUpperCase()}`, 30, y);
            y += 7;
        });
    } else {
        doc.text(`- Ninguna`, 30, y);
        y += 7;
    }

    y += 10;
    doc.text('Registro del Chat con Cleopatra:', 20, y);
    y += 10;

    // Add chat history to PDF
    if (chatHistory.length > 0) {
        chatHistory.forEach(msg => {
            const role = msg.role === 'user' ? 'Tú' : 'Cleopatra';
            const text = msg.parts[0].text;
            // Split text into lines if too long
            const lines = doc.splitTextToSize(`${role}: ${text}`, 170); // Max width 170mm
            lines.forEach(line => {
                doc.text(line, 30, y);
                y += 7;
                if (y > 280) { // Check for page overflow
                    doc.addPage();
                    y = 20; // Reset y for new page
                }
            });
        });
    } else {
        doc.text(`- No hubo conversación`, 30, y);
        y += 7;
    }

    doc.save(`Resumen_Aventura_Cleopatra_${studentName.replace(/\s/g, '_')}.pdf`);
}

// --- NILE RUNNER GAME LOGIC (PLACEHOLDER) ---
function initializeNileRunnerGame() {
    const canvas = document.getElementById('nile-runner-canvas');
    if (!canvas) {
        console.error("Canvas element not found for Nile Runner Game.");
        return;
    }
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('nile-runner-start-btn');
    const stopButton = document.getElementById('nile-runner-stop-btn');
    const scoreDisplay = document.getElementById('nile-runner-score-display');

    let gameSimulationInterval;
    let score = nileRunnerScore; // Load saved score

    scoreDisplay.textContent = score;

    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        stopButton.classList.remove('hidden');
        score = nileRunnerScore; // Reset to loaded score, or 0 if new game
        scoreDisplay.textContent = score;

        // Simulate game play and score increase
        gameSimulationInterval = setInterval(() => {
            score += 10; // Increase score
            scoreDisplay.textContent = score;

            // Unlock badges based on score
            if (score >= 50 && !nileRunnerBadgesAwarded['nile-runner-expert']) {
                unlockBadge('nile-runner-expert');
                nileRunnerBadgesAwarded['nile-runner-expert'] = true;
            }
            if (score >= 100 && !nileRunnerBadgesAwarded['nile-runner-master']) {
                unlockBadge('nile-runner-master');
                nileRunnerBadgesAwarded['nile-runner-master'] = true;
            }
        }, 1000); // Update score every second

        nileRunnerGame = { // Simple object to simulate game control
            stopGame: () => {
                clearInterval(gameSimulationInterval);
                showFeedback(feedbackArea, 'Juego Nile Runner detenido.', false);
                startButton.classList.remove('hidden'); // Show start button again
                stopButton.classList.add('hidden');
                nileRunnerScore = score; // Save final score
                unlockBadge('nile-runner'); // Unlock base badge just for playing
                saveGameState(); // Save state after game ends
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
                saveGameState(); // Save state after reset
            }
        };
    });

    stopButton.addEventListener('click', () => {
        if (nileRunnerGame) {
            nileRunnerGame.stopGame();
            // Navigation after stopping game
            currentPageIndex++; // Move to next page or back to activity selection
            saveGameState();
            if (currentPageIndex < gameData.length) {
                renderPage(currentPageIndex);
            } else {
                console.log('Reached end of gameData array unexpectedly after Nile Runner game.');
                contentArea.innerHTML = `<h2 class="font-cinzel text-3xl font-bold text-center">¡Aventura Finalizada!</h2><p class="text-lg text-center mt-4">¡Has completado todos los desafíos!</p>`;
                document.getElementById('navigation-area').style.display = 'none';
                allBadgesDisplay.innerHTML = ''; // Clear badges on final exit
            }
        }
    });

    // Ensure nextBtn is set to 'Volver al Menú de Actividades' if on Nile Runner page
    // This part should be handled by renderPage, but added here for immediate context
    nextBtn.textContent = 'Volver al Menú de Actividades'; // Ensure text is correct
    nextBtn.removeEventListener('click', handleNextButtonClick); // Remove generic listener
    nextBtn.addEventListener('click', () => {
        // Go back to activity selection
        currentPageIndex = gameData.findIndex(p => p.type === 'activity-selection');
        saveGameState();
        renderPage(currentPageIndex);
    });
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
        gameContainer.classList.add('hidden');
    } else { // If name loaded, go straight to game container
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        renderPage(currentPageIndex); // Render the current page based on loaded state
    }
});

// --- EVENT LISTENERS ---
submitNameBtn.addEventListener('click', () => {
    studentName = studentNameInput.value.trim();
    if (studentName) {
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        saveGameState();
        currentPageIndex = 0; // Start at the intro page
        renderPage(currentPageIndex); // Render the first page of the game
    } else {
        showFeedback(activitySelectionFeedback, 'Por favor, introduce tu nombre.', true);
    }
});

modalCloseBtn.addEventListener('click', hideModal);

// Generic next button listener (if not overridden by specific page logic)
// This is a common pattern, specific page logic will remove and re-add if needed
function handleNextButtonClick() {
    currentPageIndex++;
    saveGameState();
    if (currentPageIndex < gameData.length) {
        renderPage(currentPageIndex);
    } else {
        console.log('Reached end of gameData array unexpectedly or no specific end handler.');
        // Fallback to a generic end screen if no specific path end is defined
        contentArea.innerHTML = `<h2 class="font-cinzel text-3xl font-bold text-center">¡Aventura Finalizada!</h2><p class="text-lg text-center mt-4">¡Has completado todos los desafíos!</p>`;
        document.getElementById('navigation-area').style.display = 'none';
        allBadgesDisplay.innerHTML = ''; // Clear badges on final exit
    }
}
// Initially attach the generic next button listener
if (nextBtn) {
    nextBtn.addEventListener('click', handleNextButtonClick);
}

// Ensure gameContainer is passed correctly
// Removed old activitySelectionScreen references that caused null errors.
// All functionality should now correctly target gameContainer.
