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
    // --- Next Path after activities (Index 6) ---
    {
        type: 'multiple-choice',
        title: 'Pista Final: La Ubicación del Corazón',
        text: '¡Excelente trabajo, detective! Has superado los desafíos y reunido las pistas. Ahora, con todo lo que has aprendido, dime: ¿Dónde crees que se oculta el Corazón del Nilo?',
        question: '¿En qué lugar secreto crees que se esconde el Corazón del Nilo?',
        options: ['En las tumbas del Valle de los Reyes', 'Bajo la Gran Pirámide de Giza', 'En el Santuario Escondido de Isis', 'En el Jardín Secreto de Alejandría'],
        correctAnswer: 'En el Santuario Escondido de Isis',
        badgeId: 'master-detective',
        feedback: {
            correct: '¡Magnífico! ¡Has descubierto la verdad! El Corazón del Nilo ha sido recuperado y Egipto está a salvo.',
            incorrect: 'No es la ubicación correcta. Revisa tus pistas.'
        }
    },
    {
        type: 'conclusion',
        title: '¡Misterio Resuelto!',
        text: `¡Felicidades, joven detective! Has recuperado el Corazón del Nilo y salvado a Egipto de un destino oscuro. Tu astucia y valentía serán recordadas por siempre. Has obtenido todas las insignias de un verdadero maestro detective.`,
        final: true
    }
];

// --- GAME STATE ---
let currentPageIndex = 0;
let studentName = '';
const unlockedBadges = new Set();
let nileRunnerScore = 0;
let nileRunnerBadgesAwarded = {
    'nile-runner': false, // Base badge for playing
    'nile-runner-expert': false, // For reaching 50 score
    'nile-runner-master': false // For reaching 100 score
};

let chatHistory = []; // To store chat messages

// --- DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const studentNameInput = document.getElementById('student-name-input');
const submitNameBtn = document.getElementById('submit-name-btn');
const activitySelectionFeedback = document.getElementById('activity-selection-feedback');

const gameContainer = document.getElementById('game-container');
const contentArea = document.getElementById('content-area');
const feedbackArea = document.getElementById('feedback-area');
const nextBtn = document.getElementById('next-btn');
const allBadgesDisplay = document.getElementById('all-badges-display');

const activitySelectionScreen = document.getElementById('activity-selection-screen');

// Chat elements
const chatActivityContainer = document.getElementById('chat-activity-container');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatContainer = document.getElementById('chat-messages'); // Where messages are rendered

// Nile Runner Game elements
const nileRunnerGameArea = document.getElementById('nile-runner-game-area');
const nileRunnerScoreDisplay = document.getElementById('nile-runner-score-display');
const nileRunnerStartBtn = document.getElementById('nile-runner-start-btn');
const nileRunnerStopBtn = document.getElementById('nile-runner-stop-btn');


// Modal elements
const genericModal = document.getElementById('generic-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalConfirmBtn = document.getElementById('modal-confirm-btn');
const modalCloseBtn = genericModal.querySelector('.modal-close-btn');


// --- UTILITIES ---
function showFeedback(element, message, isError) {
    element.textContent = message;
    element.classList.remove('opacity-0', 'error', 'success');
    element.classList.add('show', isError ? 'error' : 'success');
    setTimeout(() => {
        element.classList.remove('show');
        element.classList.add('opacity-0');
    }, 3000);
}

function unlockBadge(badgeId) {
    if (!unlockedBadges.has(badgeId)) {
        unlockedBadges.add(badgeId);
        showFeedback(feedbackArea, `¡Insignia "${badgeId.replace(/-/g, ' ').toUpperCase()}" desbloqueada!`, false);
        renderBadges();
        saveGameState();
    }
}

function renderBadges() {
    allBadgesDisplay.innerHTML = '';
    const availableBadges = [
        { id: 'faraona-badge', name: 'Insignia de la Faraona', icon: '👑' },
        { id: 'nile-runner', name: 'Explorador del Nilo', icon: '🛶' },
        { id: 'nile-runner-expert', name: 'Experto del Nilo', icon: '🌊' },
        { id: 'nile-runner-master', name: 'Maestro del Nilo', icon: '🏆' },
        { id: 'sphinx-riddle', name: 'Resolutor de Enigmas', icon: '🗿' },
        { id: 'sphinx-riddle-solver', name: 'Sabio de la Esfinge', icon: '🧠' },
        { id: 'cleopatra-chat', name: 'Comunicador Real', icon: '🗣️' },
        { id: 'cleopatra-communicator', name: 'Confidente de Cleopatra', icon: '📜' },
        { id: 'master-detective', name: 'Detective Maestro', icon: '🔍' }
    ];

    availableBadges.forEach(badge => {
        const badgeItem = document.createElement('div');
        badgeItem.classList.add('badge-item');
        if (unlockedBadges.has(badge.id)) {
            badgeItem.classList.add('unlocked');
        }
        badgeItem.innerHTML = `
            <span class="text-4xl">${badge.icon}</span>
            <span class="text-sm text-center">${badge.name}</span>
        `;
        allBadgesDisplay.appendChild(badgeItem);
    });
}

function saveGameState() {
    const gameState = {
        currentPageIndex,
        studentName,
        unlockedBadges: Array.from(unlockedBadges),
        nileRunnerScore,
        nileRunnerBadgesAwarded,
        chatHistory
    };
    localStorage.setItem('cleopatraGame', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = localStorage.getItem('cleopatraGame');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        currentPageIndex = gameState.currentPageIndex;
        studentName = gameState.studentName;
        unlockedBadges.clear();
        gameState.unlockedBadges.forEach(badge => unlockedBadges.add(badge));
        nileRunnerScore = gameState.nileRunnerScore || 0;
        nileRunnerBadgesAwarded = gameState.nileRunnerBadgesAwarded || {
            'nile-runner': false,
            'nile-runner-expert': false,
            'nile-runner-master': false
        };
        chatHistory = gameState.chatHistory || [];

        if (studentName) {
            startScreen.classList.add('hidden');
            activitySelectionScreen.classList.remove('hidden');
            renderBadges();
            // Do not render current page immediately, wait for navigation
        }
    }
}

// --- MODAL FUNCTIONS ---
function showModal(title, message, showConfirmBtn = false, onConfirm = null) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    if (showConfirmBtn) {
        modalConfirmBtn.classList.remove('hidden');
        modalConfirmBtn.onclick = () => {
            hideModal();
            if (onConfirm) onConfirm();
        };
    } else {
        modalConfirmBtn.classList.add('hidden');
        modalConfirmBtn.onclick = null;
    }
    genericModal.classList.remove('hidden');
}

function hideModal() {
    genericModal.classList.add('hidden');
}

modalCloseBtn.addEventListener('click', hideModal);

// --- PDF GENERATION ---
const { jsPDF } = window.jspdf;

function generatePdfSummary(title, details, pdfContent, filename) {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(title, 105, 20, null, null, "center");

    let y = 40;
    doc.setFontSize(14);
    
    // Add custom text content if provided
    if (pdfContent) {
        const splitText = doc.splitTextToSize(pdfContent, 170); // Max width 170mm
        doc.text(splitText, 20, y);
        y += (splitText.length * 7) + 10; // Adjust y based on content height
    }

    // Add list details if provided
    if (details && details.length > 0) {
        details.forEach(detail => {
            if (detail.type === 'list' && detail.items) {
                doc.text(`${detail.label}:`, 20, y);
                y += 7;
                detail.items.forEach(item => {
                    doc.text(`- ${item}`, 25, y);
                    y += 7;
                });
            } else {
                doc.text(`${detail.label}: ${detail.value}`, 20, y);
                y += 10;
            }
        });
    }

    doc.save(`${filename}.pdf`);
}


function endActivityAndShowSummary(activityTitle, summaryDetails, pdfContent, pdfFilename) {
    // Hide current activity view
    document.getElementById('content-area').classList.remove('hidden'); // Show content area
    chatActivityContainer.classList.add('hidden'); // Hide chat
    nileRunnerGameArea.classList.add('hidden'); // Hide Nile game

    // Show navigation buttons again
    nextBtn.classList.remove('hidden');
    
    // Render the summary in contentArea or show a modal
    const summaryHtml = `
        <h2 class="font-cinzel text-3xl font-bold text-center mb-4">Actividad Completada: ${activityTitle}</h2>
        ${summaryDetails.map(detail => {
            if (detail.type === 'list') {
                return `<h3 class="font-cinzel text-xl font-bold mt-4">${detail.label}:</h3><ul>${detail.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            return `<p class="text-lg mb-2"><b>${detail.label}:</b> ${detail.value}</p>`;
        }).join('')}
        <button id="download-summary-pdf" class="detective-btn mt-6">Descargar Resumen PDF</button>
    `;
    contentArea.innerHTML = summaryHtml;

    document.getElementById('download-summary-pdf').addEventListener('click', () => {
        generatePdfSummary(`Resumen de ${activityTitle}`, summaryDetails, pdfContent, pdfFilename);
    });
}


// --- GAME LOGIC ---

// Chat with Cleopatra Logic
const GEMINI_API_KEY = 'TU_CLAVE_API_DE_GEMINI'; // Reemplaza con tu clave real

async function getGeminiResponse(message) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: message
                    }]
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error de la API de Gemini:', errorData);
            return "Lo siento, no puedo responder en este momento. Los oráculos están ocupados. (Error: " + (errorData.error ? errorData.error.message : response.statusText) + ")";
        }

        const data = await response.json();
        if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "Interesante pregunta, pero mis oráculos no tienen una respuesta clara en este momento.";
        }
    } catch (error) {
        console.error('Error al conectar con Gemini:', error);
        return "Un velo de misterio cubre esta conversación. Por favor, inténtalo de nuevo más tarde.";
    }
}

async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
    renderChatHistory();
    chatInput.value = '';

    addTypingIndicator();
    const geminiResponse = await getGeminiResponse(userMessage);
    removeTypingIndicator();

    chatHistory.push({ role: 'model', parts: [{ text: geminiResponse }] });
    renderChatHistory();
    chatContainer.scrollTop = chatContainer.scrollHeight;
    saveGameState(); // Save chat history
}

function addTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'typing-indicator';
    typingIndicator.classList.add('chat-message-row', 'model-message', 'typing');
    typingIndicator.innerHTML = '<div class="chat-avatar"><img src="images/cleopatra_avatar.png" alt="Cleopatra"></div><div class="chat-bubble"><span>Escribiendo...</span></div>';
    chatContainer.appendChild(typingIndicator);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function renderChatHistory() {
    chatContainer.innerHTML = '';
    chatHistory.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message-row', msg.role === 'user' ? 'user-message' : 'model-message');
        messageElement.innerHTML = `
            <div class="chat-avatar"><img src="images/${msg.role === 'user' ? 'user_avatar.png' : 'cleopatra_avatar.png'}" alt="${msg.role === 'user' ? 'Tú' : 'Cleopatra'}"></div>
            <div class="chat-bubble">${msg.parts[0].text}</div>
        `;
        chatContainer.appendChild(messageElement);
    });
}


// Nile Runner Game Logic (Interactive Version)
class NileRunnerGame {
    constructor(canvasId, options) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.options = options;

        this.player = {
            x: 50,
            y: this.canvas.height / 2 - 15, // Centered vertically
            width: 40,
            height: 30,
            color: '#8B4513', // Brown for boat
            speedY: 0,
            gravity: 0.5, // Simulates up/down movement
            jumpStrength: -8
        };

        this.obstacles = [];
        this.obstacleSpeed = 3;
        this.obstacleSpawnRate = 120; // Frames between obstacles
        this.frame = 0;
        this.score = 0;
        this.gameInterval = null;
        this.isRunning = false;

        this.boundKeyDownHandler = this.keyDownHandler.bind(this);
        this.boundGameLoop = this.gameLoop.bind(this);
    }

    resetGame() {
        this.player.y = this.canvas.height / 2 - 15;
        this.player.speedY = 0;
        this.obstacles = [];
        this.score = 0;
        this.frame = 0;
        if (this.gameInterval) {
            cancelAnimationFrame(this.gameInterval);
        }
        this.options.onScoreUpdate(this.score);
        this.draw(); // Draw initial state
    }

    startGame() {
        this.resetGame(); // Reset before starting
        this.isRunning = true;
        this.gameLoop();
    }

    stopGame() {
        this.isRunning = false;
        if (this.gameInterval) {
            cancelAnimationFrame(this.gameInterval);
        }
        window.removeEventListener('keydown', this.boundKeyDownHandler);
        this.options.onGameEnd(this.score);
    }

    keyDownHandler(e) {
        if (e.key === 'ArrowUp' || e.key === 'w') {
            this.player.speedY = this.player.jumpStrength; // Make it "jump" up
        }
    }

    generateObstacle() {
        const height = Math.random() * (this.canvas.height / 2 - 30) + 30; // Random height
        const gap = Math.random() * (this.canvas.height / 3) + 60; // Random gap size
        const topObstacleHeight = height;
        const bottomObstacleHeight = this.canvas.height - (height + gap);

        this.obstacles.push({
            x: this.canvas.width,
            width: 30,
            topHeight: topObstacleHeight,
            bottomHeight: bottomObstacleHeight,
            passed: false // To check if player passed it for scoring
        });
    }

    detectCollision() {
        for (let i = 0; i < this.obstacles.length; i++) {
            let o = this.obstacles[i];

            // Check collision with top obstacle
            if (this.player.x < o.x + o.width &&
                this.player.x + this.player.width > o.x &&
                this.player.y < o.topHeight) {
                return true;
            }
            // Check collision with bottom obstacle
            if (this.player.x < o.x + o.width &&
                this.player.x + this.player.width > o.x &&
                this.player.y + this.player.height > this.canvas.height - o.bottomHeight) {
                return true;
            }
        }

        // Check collision with top/bottom canvas edges
        if (this.player.y <= 0 || this.player.y + this.player.height >= this.canvas.height) {
            return true;
        }

        return false;
    }

    update() {
        this.player.speedY += this.player.gravity;
        this.player.y += this.player.speedY;

        // Keep player within canvas Y bounds
        if (this.player.y < 0) this.player.y = 0;
        if (this.player.y + this.player.height > this.canvas.height) this.player.y = this.canvas.height - this.player.height;


        if (this.frame % this.obstacleSpawnRate === 0) {
            this.generateObstacle();
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            let o = this.obstacles[i];
            o.x -= this.obstacleSpeed;

            // Score update
            if (o.x + o.width < this.player.x && !o.passed) {
                this.score++;
                o.passed = true;
                this.options.onScoreUpdate(this.score);
            }
        }

        // Remove off-screen obstacles
        this.obstacles = this.obstacles.filter(o => o.x + o.width > 0);

        if (this.detectCollision()) {
            this.stopGame();
            showModal('¡Fin del Juego!', `Has chocado con un obstáculo. Puntuación final: ${this.score}`, true, () => {
                // Optionally go back to activity selection or restart
            });
        }

        this.frame++;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Player
        this.ctx.fillStyle = this.player.color;
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);

        // Draw Obstacles
        this.ctx.fillStyle = '#4a3a2a'; // Dark color for obstacles
        this.obstacles.forEach(o => {
            this.ctx.fillRect(o.x, 0, o.width, o.topHeight);
            this.ctx.fillRect(o.x, this.canvas.height - o.bottomHeight, o.width, o.bottomHeight);
        });
    }

    gameLoop() {
        if (!this.isRunning) return;

        this.update();
        this.draw();
        this.gameInterval = requestAnimationFrame(this.boundGameLoop);
    }
}

let nileRunnerGameInstance = null; // To hold the instance of the game

function setupNileRunnerGame() {
    contentArea.innerHTML = '';
    nileRunnerGameArea.classList.remove('hidden');
    chatActivityContainer.classList.add('hidden');
    nextBtn.classList.add('hidden'); // Hide next button during game
    
    nileRunnerStartBtn.classList.remove('hidden');
    nileRunnerStopBtn.classList.add('hidden'); // Hide stop button initially

    nileRunnerScoreDisplay.textContent = 0; // Reset score display

    if (!nileRunnerGameInstance) {
        nileRunnerGameInstance = new NileRunnerGame('nile-runner-canvas', {
            onScoreUpdate: (score) => {
                nileRunnerScore = score;
                nileRunnerScoreDisplay.textContent = score;
                if (score >= 100 && !nileRunnerBadgesAwarded['nile-runner-master']) {
                    unlockBadge('nile-runner-master');
                    nileRunnerBadgesAwarded['nile-runner-master'] = true;
                } else if (score >= 50 && !nileRunnerBadgesAwarded['nile-runner-expert']) {
                    unlockBadge('nile-runner-expert');
                    nileRunnerBadgesAwarded['nile-runner-expert'] = true;
                }
                saveGameState();
            },
            onGameEnd: (finalScore) => {
                unlockBadge('nile-runner'); // Unlock base badge just for playing
                nileRunnerStartBtn.textContent = 'Volver a Jugar';
                nileRunnerStartBtn.classList.remove('hidden');
                nileRunnerStopBtn.classList.add('hidden');
                nileRunnerScore = finalScore;
                saveGameState();
            }
        });
    } else {
        nileRunnerGameInstance.resetGame(); // Reset existing game instance
    }

    nileRunnerStartBtn.onclick = () => {
        nileRunnerGameInstance.startGame();
        nileRunnerStartBtn.classList.add('hidden');
        nileRunnerStopBtn.classList.remove('hidden');
        window.addEventListener('keydown', nileRunnerGameInstance.boundKeyDownHandler);
    };

    nileRunnerStopBtn.onclick = () => {
        nileRunnerGameInstance.stopGame();
        nileRunnerStartBtn.classList.remove('hidden');
        nileRunnerStopBtn.classList.add('hidden');
    };
}


// Riddle Game Logic (example, assuming your existing riddle logic is fine)
function setupRiddleActivity(page) {
    contentArea.innerHTML = `
        <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
        <p class="text-lg mt-4">${page.text}</p>
        <p class="text-xl font-bold mt-4">${page.riddle}</p>
        <input type="text" id="riddle-answer-input" class="w-full p-3 rounded-md border-2 border-[#c0a16b] bg-[#fef9e7] text-[#4a3a2a] mt-4" placeholder="Tu respuesta...">
        <button id="submit-riddle-btn" class="detective-btn mt-4">Resolver</button>
    `;
    nextBtn.classList.add('hidden'); // Hide next button until riddle solved
    chatActivityContainer.classList.add('hidden'); // Hide chat
    nileRunnerGameArea.classList.add('hidden'); // Hide Nile game

    const answerInput = document.getElementById('riddle-answer-input');
    const submitRiddleBtn = document.getElementById('submit-riddle-btn');

    submitRiddleBtn.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === page.correctAnswer.toLowerCase()) {
            showFeedback(feedbackArea, page.feedback.correct, false);
            unlockBadge(page.badgeId);
            nextBtn.classList.remove('hidden'); // Show next button
            submitRiddleBtn.disabled = true; // Disable button after correct answer
            answerInput.disabled = true;
        } else {
            showFeedback(feedbackArea, page.feedback.incorrect, true);
        }
    });
}


// --- RENDER PAGE FUNCTION ---
function renderPage(pageIndex) {
    const page = gameData[pageIndex];
    
    // Hide all activity-specific containers first
    chatActivityContainer.classList.add('hidden');
    nileRunnerGameArea.classList.add('hidden');
    contentArea.classList.remove('hidden'); // Default to showing general content

    // Reset next button state
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = 'Siguiente Pista'; // Default text

    if (page.type === 'intro' || page.type === 'conclusion' || page.type === 'text') {
        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
        `;
        if (page.final) {
            nextBtn.classList.add('hidden'); // No more next if it's the final page
        }
    } else if (page.type === 'multiple-choice') {
        let optionsHtml = page.options.map((option, index) => `
            <button class="detective-btn multiple-choice-btn mt-2 w-full text-left" data-answer="${option}">${option}</button>
        `).join('');
        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            <p class="text-xl font-bold mt-4">${page.question}</p>
            <div id="options-container" class="mt-4 space-y-2">
                ${optionsHtml}
            </div>
        `;
        nextBtn.classList.add('hidden'); // Hide until answered correctly

        document.querySelectorAll('.multiple-choice-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const selectedAnswer = e.target.dataset.answer;
                if (selectedAnswer === page.correctAnswer) {
                    showFeedback(feedbackArea, page.feedback.correct, false);
                    unlockBadge(page.badgeId);
                    nextBtn.classList.remove('hidden');
                    document.querySelectorAll('.multiple-choice-btn').forEach(btn => btn.disabled = true); // Disable all options
                } else {
                    showFeedback(feedbackArea, page.feedback.incorrect, true);
                }
            });
        });
    } else if (page.type === 'activity-selection') {
        const activitiesHtml = page.activities.map(activity => {
            // Check if activity has a badge and if it's unlocked
            const isCompleted = activity.badge && unlockedBadges.has(activity.badge);
            const completedClass = isCompleted ? 'opacity-50 cursor-not-allowed' : ''; // Visually indicate completion
            const completedText = isCompleted ? ' (Completado)' : '';

            return `
                <button class="detective-btn activity-select-btn mt-4 ${completedClass}" data-activity-id="${activity.id}" ${isCompleted ? 'disabled' : ''}>
                    ${activity.name}${completedText}
                </button>
            `;
        }).join('');

        contentArea.innerHTML = `
            <h2 class="font-cinzel text-2xl font-bold">${page.title}</h2>
            <p class="text-lg mt-4">${page.text}</p>
            <div id="activity-options" class="mt-4 flex flex-col items-center">
                ${activitiesHtml}
            </div>
        `;
        nextBtn.classList.add('hidden'); // Hide until an activity is completed

        document.querySelectorAll('.activity-select-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const activityId = e.target.dataset.activityId;
                contentArea.classList.add('hidden'); // Hide main content area

                // Based on activityId, show the correct activity and setup its logic
                if (activityId === 'cleopatra-chat-activity') {
                    chatActivityContainer.classList.remove('hidden');
                    // Ensure chat history is loaded and rendered when chat is opened
                    renderChatHistory();
                    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
                } else if (activityId === 'nile-runner-activity') {
                    setupNileRunnerGame(); // Setup and show the Nile Runner game
                } else if (activityId === 'sphinx-riddle-activity') {
                    setupRiddleActivity(gameData.find(item => item.type === 'riddle')); // Find the riddle page
                }
            });
        });
    } else if (page.type === 'riddle') {
        // This case is handled by setupRiddleActivity when selected from activity-selection
        // No direct render needed here if only accessible via activity selection
    } else if (page.type === 'chat') {
        // This case is handled by setupChatActivity when selected from activity-selection
        // No direct render needed here if only accessible via activity selection
    } else if (page.type === 'nile-runner') {
        // This case is handled by setupNileRunnerGame when selected from activity-selection
        // No direct render needed here if only accessible via activity selection
    }

    // Scroll to top of game content for new page
    gameContainer.scrollTop = 0;
    saveGameState();
    renderBadges(); // Ensure badges are always rendered with current state
}


// --- EVENT LISTENERS ---
submitNameBtn.addEventListener('click', () => {
    studentName = studentNameInput.value.trim();
    if (studentName) {
        startScreen.classList.add('hidden');
        activitySelectionScreen.classList.remove('hidden'); // Assuming this is the main game container
        gameContainer.classList.remove('hidden'); // Show the main game container
        saveGameState();
        renderPage(currentPageIndex); // Render the first page of the game
    } else {
        showFeedback(activitySelectionFeedback, 'Por favor, introduce tu nombre.', true);
    }
});

nextBtn.addEventListener('click', () => {
    const page = gameData[currentPageIndex];

    // Specific logic for finishing activities
    if (page.type === 'chat') {
        const chatContent = chatHistory.map(msg => `${msg.role === 'user' ? 'Tú' : 'Cleopatra'}: ${msg.parts[0].text}`).join('\n');
        const summaryHtml = [
            { label: 'Participante', value: studentName },
            { type: 'list', label: 'Conversación', items: chatHistory.map(msg => `${msg.role === 'user' ? 'Tú' : 'Cleopatra'}: ${msg.parts[0].text}`) }
        ];
        endActivityAndShowSummary('Chat con Cleopatra', summaryHtml, chatContent, 'Registro_Chat_Cleopatra');
        unlockBadge(page.badgeId); // Unlock chat badge
        
        // After activity summary, allow moving to next main game page
        nextBtn.textContent = 'Siguiente Pista'; // Reset next button text
        currentPageIndex = gameData.findIndex(item => item.type === 'multiple-choice' && item.title === 'Pista Final: La Ubicación del Corazón'); // Go to the final clue
        if (currentPageIndex === -1) currentPageIndex = 6; // Fallback index if not found
        renderPage(currentPageIndex);
        return;
    }
    
    // Logic to move to the next page in the main gameData flow
    currentPageIndex++;
    if (currentPageIndex < gameData.length) {
        renderPage(currentPageIndex);
    } else {
        console.log('Reached end of gameData array unexpectedly or no specific end handler.');
        contentArea.innerHTML = `<h2 class="font-cinzel text-3xl font-bold text-center">¡Aventura Finalizada!</h2><p class="text-lg text-center mt-4">¡Has completado todos los desafíos!</p>`;
        document.getElementById('navigation-area').style.display = 'none';
        allBadgesDisplay.innerHTML = '';
    }
});

// Chat specific event listeners
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


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
        gameContainer.classList.remove('hidden');
        renderPage(currentPageIndex); // Render the current page based on loaded state
    }
});