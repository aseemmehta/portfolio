// Edit this file to update the site. Items marked TODO are placeholders.
export const profile = {
  name: 'Aseem Mehta',
  title: 'Software Engineer',
  heading: 'Hi, I am Aseem. I build resilient microservices, event pipelines, and practical AI tools.',
  intro: 'Backend engineer working primarily in Java and Python, designing Spring Boot microservices, Kafka event pipelines, and Oracle data systems serving 800,000+ users.',
  linkedin: 'https://www.linkedin.com/in/aseem-mehta01/',
  github: 'https://github.com/aseemmehta',
  recsUrl: 'https://www.linkedin.com/in/aseem-mehta01/details/recommendations/?detailScreenTabIndex=0',
}
export const stack = {
  Languages: ['Java', 'Python', 'PL/SQL'],
  Backend: ['Spring Boot', 'JPA', 'REST APIs', 'Microservices', 'OAuth 2.0', 'Multithreading'],
  'Data & Messaging': ['Oracle', 'SQLite', 'Kafka', 'AWS S3', 'pandas', 'NumPy', 'scikit-learn', 'Tableau'],
  'DevOps & Testing': ['Jenkins', 'Gradle', 'CI/CD', 'BitBucket', 'Docker', 'Git', 'Splunk', 'JUnit', 'Mockito', 'Robot Framework'],
}
export const experience = [
  { role: 'Software Developer', org: 'Mindex Technologies', when: 'Sep 2021 to Jun 2025', points: [
    'Built Spring Boot microservices and REST APIs supporting 800,000+ external users.',
    'Replaced synchronous service calls with Kafka producers and consumers for real-time updates.',
    'Designed a ~70-case Robot Framework and Python regression suite, monitored in Splunk.'] },
  { role: 'Python Programmer / Data Analyst', org: 'Rochester Institute of Technology', when: 'Sep 2020 to Aug 2021', points: [
    'Cut Oracle query time by 40% with PL/SQL tuning and cron-scheduled offload jobs.',
    'Trained scikit-learn models on alumni data to identify potential donors.'] },
  { role: 'Technology Analyst / Senior Systems Engineer', org: 'Infosys', when: 'Oct 2013 to Jun 2018', points: [
    'Led a 9-member distributed engineering team across India and the UK, automating IAM provisioning and audit compliance workflows.',
    'Built a cross-system license optimization tool that recovered approximately £1.8M.'] },
]
export const recommendations = [
  { who: "Chris Sanborn", role: "Solution Lead, Mindex", quote: "Aseem is highly competent in many different technologies, and has experience and knowledge in the Scrum agile framework. Aseem is a very good individual contributor on the team and completes his work on time and with high quality.", featured: true },
  { who: "Sean Fetzner", role: "Principal Software Engineer, Mindex", quote: "Aseem was instrumental to our success. He consistently delivered high quality work across the board -- whether it was analyzing complex requirements, implementing new features, fixing critical bugs, or writing and maintaining robust test automation.", featured: true },
  { who: "Christian Riggalls", role: "Technical Project Coordinator, Paychex", quote: "Aseem is incredibly flexible, dependable, and eager to learn, consistently stepping up to take on new challenges and support his teammates.", featured: false },
  { who: "James Minno", role: "Director of Business Intelligence, Reporting and Analytics, Rochester Institute of Technology", quote: "His analytic and business intelligence skills are strong, along with his skills to get the data in the right shape to start with.", featured: false },
] // featured: true shows on the Home page
// Newest first. role and now are optional.
export const journey = [
  { when: 'Now', org: 'Staying Ahead of the Curve', now: true, text: 'Keeping pace with where engineering is heading: mastering System Design and Data Structures & Algorithms, shipping practical applications with Gen AI, and working toward cutting-edge industry certifications.' },
  { when: 'Sep 2021 to Jun 2025', org: 'Mindex Technologies', role: 'Software Developer', text: 'Built production Spring Boot microservices, OAuth 2.0 gateways, Apache Kafka event pipelines, AWS S3 file ingestion, and a ~70-case Robot Framework automation suite from scratch for enterprise platforms serving 800,000+ users.' },
  { when: 'Internship, Sep 2020 to Aug 2021', org: 'Rochester Institute of Technology', role: 'MS in Computer Science, 2021', text: 'Completed an intensive Master\'s spanning Software Engineering and Data Science (plus a Graduate Certificate in Big Data Analytics), while building an end-to-end Oracle, Python (pandas, NumPy, scikit-learn), and Tableau analytics system from scratch during my internship as a Python Programmer / Data Analyst, cutting query times by 40%.' },
  { when: 'Oct 2013 to Jun 2018', org: 'Infosys Ltd', role: 'Team Leader (Technology Analyst / Senior Systems Engineer)', text: 'Led a 9-member team across offshore (India) and onshore (UK) engagements, spotting operational pain points, automating IAM provisioning and audit compliance workflows, and designing a cross-system license optimization tool that recovered ~£1.8M.' },
]
// Projects now live in ./data/projects.js (one list feeds Home, /projects and #/projects/:slug).
export const sde = [
  ['Service design', 'Object-oriented design with structural patterns for scalable REST APIs and Spring Boot microservices serving 800,000+ external users.'],
  ['Security', 'A Spring Boot gateway between an AngularJS frontend and core APIs, with OAuth 2.0 and request tracing.'],
  ['Messaging and concurrency', 'Kafka-based event flows replacing synchronous inter-service calls, plus thread-safe execution using ThreadContext (MDC).'],
  ['Data and migration', 'PL/SQL backfills run in controlled batches to protect production load, and pandas scripts that replayed data through REST endpoints.'],
  ['Cloud ingestion & CI/CD', 'Automated AWS S3 file ingestion pipelines writing directly to Oracle, alongside BitBucket, Gradle, and Jenkins CI/CD release trains with rollback planning.'],
  ['Test automation & observability', '~70-case Robot Framework and Python end-to-end automation suite, JUnit/Mockito unit tests, shared cross-team test repositories, and Splunk regression monitoring.'],
]
// Optional 3rd item: list of [name, description] bullets. Optional 4th item: [link text, route].
export const ai = [
  ['Data engineering and analytics', 'End-to-end Oracle, PL/SQL, Python (pandas), and Tableau pipelines powering self-service dashboards, including cron-scheduled query optimizations that cut execution time by 40%. Graduate Certificate in Big Data Analytics.'],
  ['Machine learning', 'Two-tier Python execution layer using scikit-learn and NumPy for donor prediction on alumni demographic data, writing insights back to Oracle to minimize I/O overhead.'],
  ['Academic projects', 'Robust Audio Classification Capstone: spectrogram-based transfer learning with VGG16, ResNet50, and InceptionV3 achieving >95% clean accuracy and tested under POWDER 5G packet loss.', null, ['Read the full capstone story', '/projects/audio-classification']],
]
export const certs = [
  { name: 'Certified Scrum Developer', issuer: 'Scrum Alliance', link: 'https://bcert.me/scwjmgbdm' },
  { name: 'Scrum Foundations Certificate', issuer: 'Scrum Alliance', link: 'https://bcert.me/syqsoyznw' },
  { name: 'Generative AI for Software Development', issuer: 'DeepLearning.AI (Coursera)', when: 'Oct 2026', link: '' }, // TODO: paste credential URL; the Verify link appears once this is set
  { name: 'Graduate Certificate in Big Data Analytics', issuer: 'Rochester Institute of Technology', when: '2020', link: '' },
]
export const core = ['Java', 'Spring Boot', 'Kafka', 'Oracle', 'Python', 'PL/SQL', 'Docker', 'AWS S3']
