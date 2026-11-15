// All portfolio content lives here. Edit this file to update the site.
export const links = {
  linkedin: 'https://www.linkedin.com/in/dimple-kumar-a32663362/',
  github: 'https://github.com/DimpleKumar16/dimple-codes',
  resume: 'https://www.linkedin.com/in/dimple-kumar-a32663362/', // replace with './resume.pdf' once the file is in /public
  email: '' as string, // add a professional email to enable the mailto link
}
export const nav = ['about', 'skills', 'experience', 'projects', 'education', 'contact']
export const typing = ['ERP modules & enterprise workflows', 'YOLOv8 computer vision', 'full-stack applications', 'industrial automation']
export const orbitInner = ['Python', 'YOLOv8', 'OpenCV']
export const orbitOuter = ['React', 'TypeScript', 'SQL', 'REST']
export const interests = ['Software Engineering', 'Full-Stack Development', 'Backend Development', 'Artificial Intelligence', 'Computer Vision', 'Industrial Automation']
export const skills: Record<string, string[]> = {
  Programming: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Python', 'REST APIs', 'Spring Boot', 'Backend Integration'],
  Database: ['MySQL', 'SQL', 'Database Management', 'Database Migration'],
  'AI & Machine Learning': ['YOLOv8', 'Computer Vision', 'Object Detection', 'Deep Learning', 'Image Processing', 'Model Training'],
  'Developer Tools': ['Git', 'GitHub', 'VS Code'],
}
export const tracks = [
  { title: 'ERP Application Upgradation', tag: 'ENTERPRISE', ai: false, tech: ['Python', 'React.js', 'TypeScript', 'SQL'],
    points: ['ERP module development and enhancement', 'Frontend and backend integration', 'REST API integration', 'Database operations and migration', 'Debugging, testing and troubleshooting', 'Business workflow improvements'] },
  { title: 'AI Bucket Count Monitoring', tag: 'AI / VISION', ai: true, tech: ['Python', 'YOLOv8', 'Computer Vision'],
    points: ['Python-based AI application', 'YOLOv8 object detection', 'Model training and evaluation', 'CCTV/RTSP camera integration', 'Automated industrial bucket detection and counting', 'AI model deployment and monitoring'] },
]
export const projects = [
  { title: 'AI-Powered Bucket Count Monitoring System', flow: ['RTSP Cam', 'YOLOv8', 'Count', 'Monitor'],
    text: 'An AI-powered industrial monitoring application designed to detect and count buckets automatically using camera feeds and computer vision techniques.',
    tech: ['Python', 'YOLOv8', 'Computer Vision', 'OpenCV', 'Machine Learning'],
    contributions: ['Model training and evaluation', 'CCTV/RTSP camera integration', 'Deployment and monitoring of the AI model'], repo: '' },
  { title: 'ERP Application Upgradation', flow: ['React UI', 'REST API', 'Python', 'SQL DB'],
    text: 'Enterprise application development involving ERP module enhancements, frontend development, backend integration, database operations and migration.',
    tech: ['Python', 'React.js', 'TypeScript', 'SQL', 'REST APIs'],
    contributions: ['ERP module development and enhancement', 'Frontend and backend integration', 'Database operations and migration', 'Debugging, testing and workflow improvements'], repo: '' },
]
export const education = {
  mca: { degree: 'Master of Computer Applications (MCA)', school: 'Dr. M.G.R. Educational and Research Institute', years: 'September 2023 – July 2025', cgpa: '7.9' },
  bca: { degree: 'Bachelor of Computer Applications (BCA)', school: 'College: to be added', years: 'Duration: to be added' }, // editable until verified
}
export const careers = ['Software Developer', 'Python Developer', 'Backend Developer', 'Full-Stack Developer', 'AI Application Developer']
