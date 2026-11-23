// Single source of truth for every project. Feeds Home (featured teaser cards), /projects (all teaser cards)
// and the dedicated detail pages at #/projects/:slug.
//
// category:   'Built using Gen AI' | 'Software Development' | 'Academic / Capstone'
// repoStatus: 'public' | 'private' | 'academic'. repoUrl is optional; a GitHub link shows only when status is public AND repoUrl is set.
// featured:   true shows on Home (first 3, in array order).
// cta:        label of the button on the teaser card.
//
// detail (every key is optional; ProjectDetail renders only what exists):
//   overview:     { heading, paras: [string] }
//   architecture: { heading, layout: 'chain' | 'grid', nodes: [{ name, sub, badge, badgeKind: 'pub' | 'int', text, edge }], note, table: { cols, rows } }
//   highlights:   { heading, items: [{ title, text }] }
//   tables:       [{ heading, cols, rows, intro }]
//   outcomes:     { heading, items: [string] }

export const CATEGORIES = ['Built using Gen AI', 'Software Development', 'Academic / Capstone']

export const projects = [
  {
    slug: 'job-radar',
    category: 'Built using Gen AI',
    eyebrow: 'Built using Gen AI · Job Intelligence',
    title: 'Job-Radar: A Personal Job Intelligence System Built Iteratively with Claude',
    summary: 'Six cooperating components, from scraping to ATS resume scoring and trend analytics, that turn a noisy job hunt into a ranked, searchable, self-cleaning pipeline.',
    cardTags: ['Python', 'SQLite', 'Claude'],
    allTags: ['Python', 'SQLite', 'Claude', 'ATS scoring', 'Scheduled jobs', 'Analytics'],
    featured: true,
    repoStatus: 'private',
    repoUrl: '',
    cta: 'Read Full Story →',
    detail: {
      overview: {
        heading: 'Overview',
        paras: [
          'Job-Radar is a multi-service personal job intelligence system built with Claude and Python/SQLite. It automates the repetitive parts of a job search: collecting postings, scoring how well a resume matches each description, filtering down to what matters, and keeping the data lean over time.',
          'It was built iteratively with Claude: one component at a time, each shaped, tested and refined in short loops before the next one was added.',
        ],
      },
      architecture: {
        heading: 'Architecture: six components',
        layout: 'grid',
        nodes: [
          { name: 'Scraper', sub: 'Python', text: 'Automated job scraper that collects new postings.' },
          { name: 'ATS Resume Scorer', sub: 'Python · Claude', text: 'Scores a resume against each job description.' },
          { name: 'Advanced Filter', sub: 'Command service', text: 'Narrows postings with advanced, composable filter commands.' },
          { name: 'SQLite Cleanup', sub: 'Scheduled job', text: 'Keeps the SQLite database lean by clearing stale data on a schedule.' },
          { name: 'Trend Analytics', sub: 'Python · SQLite', text: 'Surfaces trends across the collected postings.' },
          { name: 'Frontend UI', sub: 'Web UI', text: 'One place to browse, filter and act on results.' },
        ],
      },
      highlights: {
        heading: 'Engineering highlights',
        items: [
          { title: 'Separation of concerns', text: 'Scraping, scoring, filtering, cleanup, analytics and UI are separate components, so each can change or fail without taking down the rest.' },
          { title: 'Resume-to-JD scoring', text: 'An ATS-style scoring engine ranks postings by how well they match a resume.' },
          { title: 'Self-maintaining data', text: 'A scheduled cleanup job keeps SQLite small and fast without manual housekeeping.' },
          { title: 'Built with Claude, iteratively', text: 'Each component was developed in short Gen AI-assisted loops, with the design reviewed and tightened at every step.' },
        ],
      },
      outcomes: {
        heading: 'Outcomes',
        items: [
          'A working end-to-end personal job intelligence pipeline, from raw postings to ranked, filtered results.',
          'A repeatable pattern for building multi-component tools quickly with Gen AI while keeping the architecture clean.',
        ],
      },
    },
  },
  {
    slug: 'tasker',
    category: 'Built using Gen AI',
    eyebrow: 'Built using Gen AI · Productivity',
    title: 'Tasker: A Lean, Distraction-Free Goal Time Tracker Wired into Google',
    summary: 'A lightweight application that tracks the time spent on personal goals, integrated with Google so tracking stays out of the way.',
    cardTags: ['Google integration', 'Gen AI'],
    allTags: ['Google integration', 'Gen AI'],
    featured: true,
    repoStatus: 'public',
    repoUrl: 'https://github.com/aseemmehta/Tasker',
    cta: 'Read Full Story →',
    detail: {
      overview: {
        heading: 'Overview',
        paras: [
          'Tasker is a lightweight, distraction-free application for tracking the time spent on personal goals. It is integrated with Google, so it fits into tools already in daily use instead of asking for a new routine.',
          'The design goal was to stay lean: no dashboards to maintain and no feature creep, just a fast way to see where time actually goes.',
        ],
      },
      highlights: {
        heading: 'Engineering highlights',
        items: [
          { title: 'Lean by design', text: 'A deliberately small feature set keeps the app quick to open and easy to keep using.' },
          { title: 'Google integration', text: 'Connects with Google so goals and time tracking live alongside everyday tools.' },
          { title: 'Built with Gen AI', text: 'Shaped and iterated with Gen AI assistance, from first idea to working app.' },
        ],
      },
      outcomes: {
        heading: 'Outcomes',
        items: [
          'A focused goal time tracker used to see how time is actually spent against personal goals.',
          'A public repository with the full source.',
        ],
      },
    },
  },
  {
    slug: 'portfolio',
    category: 'Built using Gen AI',
    eyebrow: 'Built using Gen AI · This Site',
    title: 'This Portfolio: Designed Iteratively with Gen AI, Shipped Through a Private-to-Public Pipeline',
    summary: 'A React and Vite site shaped over many short design-and-feedback rounds, with a private working repo and an automated, personal-data-checked path to GitHub Pages.',
    cardTags: ['React', 'Vite', 'GitHub Pages', 'Gen AI'],
    allTags: ['React', 'Vite', 'React Router', 'GitHub Pages', 'GitHub Actions', 'Gen AI'],
    featured: false,
    repoStatus: 'public',
    repoUrl: 'https://github.com/aseemmehta/portfolio',
    cta: 'Read Full Story →',
    detail: {
      overview: {
        heading: 'Overview',
        paras: [
          'This site was designed and built iteratively with Gen AI. Each round started with visual references and written feedback, produced a new version, and ended with the next round of feedback: layout, wording, typography, theme and content all evolved this way.',
          'Publishing is split in two. Work happens in a private repository; a script checks the site for personal data and copies only the site folder into a public repository, which deploys to GitHub Pages.',
        ],
      },
      architecture: {
        heading: 'Publishing pipeline',
        layout: 'chain',
        nodes: [
          { name: 'Iterate', sub: 'Gen AI · feedback rounds', text: 'Design and content refined in short loops.' },
          { name: 'Private repo', sub: 'Working files', text: 'Site source plus personal notes that never ship.' },
          { name: 'Publish check', sub: 'Script', text: 'Scans for personal data, then copies only the site folder.' },
          { name: 'Public repo', sub: 'GitHub', text: 'Holds only what is meant to be public.' },
          { name: 'GitHub Pages', sub: 'GitHub Actions', text: 'Automated build and deploy on the free tier.' },
        ],
      },
      highlights: {
        heading: 'Engineering highlights',
        items: [
          { title: 'Gen AI as a design partner', text: 'Many short design-and-feedback rounds, each one narrowing the look, copy and structure.' },
          { title: 'Safe by default', text: 'A private working repo, an automated personal-data check before publishing, and noindex while content is unfinished.' },
          { title: 'Light and dark themes', text: 'Design tokens drive both themes, with a responsive layout and reduced-motion support.' },
          { title: 'Free-tier hosting', text: 'A static React and Vite build with hash routing, so it runs on GitHub Pages with no server.' },
        ],
      },
      outcomes: {
        heading: 'Outcomes',
        items: [
          'A live portfolio on GitHub Pages, updated through a repeatable, low-risk publishing flow.',
          'A working example of building and shipping a real product iteratively with Gen AI.',
        ],
      },
    },
  },
  {
    slug: 'battleship',
    category: 'Software Development',
    eyebrow: 'Software Development · Microservices',
    title: 'Battleship: Re-architecting a UDP Game into a Spring Boot Microservices Platform',
    summary: 'Replaced a legacy peer-to-peer UDP game with a 4-container Docker stack—Spring Cloud Gateway, Spring Boot 3, PostgreSQL 16, and React—built for race-safe multiplayer play over LAN.',
    cardTags: ['Java', 'Spring Boot 3', 'Spring Cloud Gateway', 'PostgreSQL 16'],
    allTags: ['Java', 'Spring Boot 3', 'Spring Cloud Gateway', 'PostgreSQL 16', 'JPA', 'Flyway', 'React 18', 'Vite', 'NGINX', 'Docker Compose', 'OpenAPI / Swagger'],
    featured: true,
    repoStatus: 'private',
    repoUrl: '', // [ADD BATTLESHIP GITHUB URL] To link it: set repoStatus to 'public' and paste the URL here. Otherwise leave as private.
    cta: 'Read Architecture →',
    detail: {
      overview: {
        heading: 'The problem and the re-architecture',
        paras: [
          'The legacy version was a peer-to-peer UDP game: players needed fixed IP addresses and had to run it with sudo.',
          'It was rebuilt as an HTTP API-driven microservices stack that starts with a single command, docker compose up --build. No sudo, local Java, Maven or Node is required, and the game is playable across two phones on the same Wi-Fi.',
        ],
      },
      architecture: {
        heading: 'System architecture',
        layout: 'chain',
        nodes: [
          { name: 'Players', sub: 'Phones or browsers on the LAN', edge: true },
          { name: 'frontend', sub: 'React 18 · Vite · unprivileged nginx', badge: 'published :3000', badgeKind: 'pub', text: 'Lobby, ship placement, battle UI.' },
          { name: 'gateway', sub: 'Spring Cloud Gateway', badge: 'published :9090', badgeKind: 'pub', text: 'Single public entry point.' },
          { name: 'api', sub: 'Spring Boot 3 · JPA · Flyway', badge: 'internal :8081', badgeKind: 'int', text: 'Matchmaking, rules, turns.' },
          { name: 'db', sub: 'PostgreSQL 16', badge: 'internal :5432', badgeKind: 'int', text: 'Game state on a Docker volume.' },
        ],
        note: 'Only the frontend and gateway ports are published. The api and db services stay on the internal Docker network.',
        table: {
          cols: ['Service', 'Stack', 'Port', 'Responsibility'],
          rows: [
            ['frontend', 'React 18, Vite, unprivileged nginx', 'Published :3000', 'Lobby, ship placement, battle UI'],
            ['gateway', 'Spring Cloud Gateway', 'Published :9090', 'Single public entry point: routing, CORS, X-Request-Id tracing'],
            ['api', 'Spring Boot 3, JPA, Flyway', 'Internal :8081, not published', 'Matchmaking, rules, turn handling, Swagger UI'],
            ['db', 'PostgreSQL 16', 'Internal :5432, not published', 'Persistent game state on a Docker volume'],
          ],
        },
      },
      highlights: {
        heading: 'Backend engineering and concurrency decisions',
        items: [
          { title: 'Race-safe concurrency', text: 'PostgreSQL SKIP LOCKED matchmaking, row-level locking for moves, and a UNIQUE (game_id, shooter_slot, cell) constraint that prevents duplicate shots under race conditions.' },
          { title: 'API and security hygiene', text: 'X-Player-Token authentication, ETag version caching (304 Not Modified), RFC 7807 JSON error responses, and server-side DTO projection (GameViewAssembler) so unsunk opponent ships are never exposed to clients.' },
          { title: 'Derived data model', text: 'games → players → ships and shots. Boards are derived from ships and shots rather than stored redundantly.' },
          { title: 'State machine and timeouts', text: 'An explicit lifecycle (WAITING → PLACING → IN_PROGRESS → FINISHED) with a configurable 120s turn forfeit and a 10 min idle timeout.' },
          { title: 'Zero-DB domain testing', text: 'Pure domain tests (mvn test) run without requiring PostgreSQL.' },
        ],
      },
      tables: [
        {
          heading: 'API surface',
          cols: ['Endpoint', 'Purpose'],
          rows: [
            ['POST /api/matchmaking', 'Join an open game or start a new one (SKIP LOCKED matchmaking)'],
            ['GET /api/games/{id}', 'Per-player game view, with ETag and 304 Not Modified'],
            ['PUT /api/games/{id}/fleet', 'Place a fleet'],
            ['POST /api/games/{id}/shots', 'Fire a shot (row-locked, unique per cell)'],
          ],
        },
        {
          heading: 'Design patterns applied',
          cols: ['Pattern', 'Where', 'What it does'],
          rows: [
            ['State', 'GamePhase subclasses', 'Isolates valid transitions per phase; illegal commands are rejected by default.'],
            ['Strategy', 'FleetRules / ClassicFleetRules', 'Swappable board and placement validation without changing game flow.'],
            ['Factory Method', 'Game.open', 'Enforces a valid initial state with the creator in slot 1.'],
            ['Repository', 'GameRepository', 'Centralizes SQL, SKIP LOCKED matchmaking and row locks.'],
            ['Facade', 'GameService', 'One transaction per use case; keeps controllers thin.'],
            ['Assembler (DTO)', 'GameViewAssembler', 'Per-player projection that hides enemy ships.'],
            ['Observer', 'GameEvent / GameEventLogger', 'Post-commit events, ready for future push or WebSocket channels.'],
            ['API Gateway and Database per Service', 'gateway, api', 'A single entry point, with Flyway migrations isolated to api/.'],
          ],
        },
      ],
      outcomes: {
        heading: 'Outcomes',
        items: [
          'The whole platform runs with one command: docker compose up --build.',
          'No sudo, local Java, Maven or Node needed, and it is playable on two phones over the same Wi-Fi.',
          'Duplicate shots are impossible at the database level, even under race conditions.',
          'Domain rules are covered by tests that run without a database.',
        ],
      },
    },
  },
  {
    slug: 'audio-classification',
    category: 'Academic / Capstone',
    eyebrow: 'Academic / Capstone · Deep Learning',
    title: 'Robust Audio Classification Using Image Classifiers: >95% Accuracy, Tested Under Heavy Packet Loss',
    summary: 'Turned environmental sounds into spectrograms and applied transfer learning with VGG16, ResNet50 and InceptionV3, then stress-tested the models on a 5G emulator with 10–80% packet loss.',
    cardTags: ['Python', 'TensorFlow', 'Keras', 'POWDER 5G'],
    allTags: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'ResNet50', 'InceptionV3', 'POWDER 5G'],
    featured: false,
    repoStatus: 'academic',
    repoUrl: '',
    cta: 'Read Full Story →',
    detail: {
      overview: {
        heading: 'Overview',
        paras: [
          'An end-to-end deep learning pipeline in Python using TensorFlow (via Keras) that classifies environmental sounds, gunshots versus fireworks, by converting audio clips into spectrogram images and applying transfer learning with pre-trained VGG16, ResNet50 and InceptionV3 models.',
          'The capstone question: do these models stay reliable when the audio arrives over a degraded, bandwidth-limited network?',
        ],
      },
      architecture: {
        heading: 'Pipeline',
        layout: 'chain',
        nodes: [
          { name: 'Audio clips', sub: 'Gunshots vs. fireworks' },
          { name: 'Spectrograms', sub: 'Audio to images' },
          { name: 'Transfer learning', sub: 'VGG16 · ResNet50 · InceptionV3', text: 'Early stopping and callbacks.' },
          { name: 'Evaluation', sub: 'Clean and degraded', text: 'POWDER 5G emulator, 10–80% packet loss.' },
          { name: 'IoT feasibility', sub: 'Bandwidth-limited devices' },
        ],
      },
      highlights: {
        heading: 'Engineering highlights',
        items: [
          { title: 'Transfer learning on spectrograms', text: 'Pre-trained image classifiers (VGG16, ResNet50, InceptionV3) reused for audio by classifying spectrogram images.' },
          { title: 'Network-condition testing', text: 'Used the POWDER 5G network emulator to introduce 10–80% packet loss across 3,200+ generated samples.' },
          { title: 'Generalization controls', text: 'Applied early stopping and callback mechanisms to prevent overfitting and improve generalization across varying data quality.' },
        ],
      },
      outcomes: {
        heading: 'Outcomes',
        items: [
          'More than 95% accuracy on clean data.',
          'InceptionV3 showed the highest consistency across degraded samples.',
          'Demonstrated resilience in bandwidth-constrained environments.',
          'Demonstrated the feasibility of deploying the trained models on bandwidth-limited IoT devices.',
        ],
      },
    },
  },
]

export const getProject = slug => projects.find(p => p.slug === slug)
