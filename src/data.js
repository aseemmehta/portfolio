// Edit this file to update the site. Items marked TODO are placeholders.
export const profile = {
  name: 'Aseem Mehta',
  title: 'Backend Software Engineer',
  heading: "Hey, I'm Aseem! I build the services behind the screen.",
  intro: "I'm a backend engineer who works mostly in Java and Python. I spend my days on Spring Boot microservices, Kafka and Oracle: the kind of systems that serve 800,000+ people.",
  linkedin: 'https://www.linkedin.com/in/aseem-mehta01/',
  github: '', // TODO: add your GitHub profile URL
}
export const stack = {
  Languages: ['Java', 'Python', 'PL/SQL'],
  Backend: ['Spring Boot', 'JPA', 'REST APIs', 'Microservices', 'OAuth 2.0', 'Multithreading'],
  'Data & Messaging': ['Oracle', 'Kafka', 'AWS S3', 'pandas', 'NumPy', 'scikit-learn', 'Tableau'],
  'DevOps & Testing': ['Jenkins', 'Gradle', 'Docker', 'Git', 'Splunk', 'JUnit', 'Mockito', 'Robot Framework'],
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
    'Led a 9-member SAP Security team across India and the UK.',
    'Built a license optimization tool that recovered about £1.8M.'] },
]
export const recommendations = [
  { who: "Chris Sanborn", role: "Solution Lead, Mindex", quote: "Aseem is highly competent in many different technologies, and has experience and knowledge in the Scrum agile framework. Aseem is a very good individual contributor on the team and completes his work on time and with high quality.", featured: true },
  { who: "Sean Fetzner", role: "Principal Software Engineer, Mindex", quote: "Aseem was instrumental to our success. He consistently delivered high quality work across the board -- whether it was analyzing complex requirements, implementing new features, fixing critical bugs, or writing and maintaining robust test automation.", featured: true },
  { who: "Christian Riggalls", role: "Technical Project Coordinator, Paychex", quote: "Aseem is incredibly flexible, dependable, and eager to learn, consistently stepping up to take on new challenges and support his teammates.", featured: false },
  { who: "James Minno", role: "Director of Business Intelligence, Reporting and Analytics, Rochester Institute of Technology", quote: "His analytic and business intelligence skills are strong, along with his skills to get the data in the right shape to start with.", featured: false },
] // featured: true shows on the Home page
export const projects = [
  { title: 'TODO: SDE project', kind: 'sde', featured: true, blurb: 'What it does, your role, and the stack.', tags: ['Java'], link: '' },
  { title: 'TODO: AI project', kind: 'ai', featured: true, blurb: 'Problem, approach and result.', tags: ['Python'], link: '' },
] // link empty = private project, shown as "Private"
export const sde = [
  ['Service design', 'Object-oriented design with structural patterns for scalable REST APIs and Spring Boot microservices.'],
  ['Security', 'A Spring Boot gateway between an AngularJS frontend and core APIs, with OAuth 2.0 and request tracing.'],
  ['Messaging and concurrency', 'Kafka-based event flows, plus thread-safe execution using ThreadContext (MDC).'],
  ['Data and migration', 'PL/SQL backfills in controlled batches, and pandas scripts that replayed data through REST endpoints.'],
  ['Testing and delivery', 'JUnit, Mockito and Robot Framework suites; Gradle, BitBucket and Jenkins release trains with rollback planning.'],
]
export const ai = [
  ['Machine learning', 'scikit-learn and NumPy models for donor prediction on alumni demographic data, with results written back to Oracle.'],
  ['Data engineering and analytics', 'Oracle, pandas and Tableau pipelines for self-service dashboards. Graduate Certificate in Big Data Analytics.'],
  ['Gen AI', 'TODO: add your Gen AI work.'],
  ['Academic and personal projects', 'TODO: add your DS and ML projects.'],
]
export const certs = [
  { name: 'Certified Scrum Developer', issuer: 'Scrum Alliance', link: 'https://bcert.me/scwjmgbdm' },
  { name: 'Scrum Foundations Certificate', issuer: 'Scrum Alliance', link: 'https://bcert.me/syqsoyznw' },
]
export const core = ['Java', 'Spring Boot', 'Kafka', 'Oracle', 'Python', 'PL/SQL', 'Docker', 'AWS S3']
