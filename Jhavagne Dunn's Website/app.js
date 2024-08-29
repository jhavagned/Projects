// app.js
const { createApp } = Vue;

createApp({
    data() {
        return {
            name: 'Hi there, I\'m Jhavagne Dunn! 👋',
            title: 'Full Software Developer',
            profilePhoto: 'images/profile.jpg',
            navLinks: [
                { id: 1, href: '#about', text: 'About' },
                { id: 2, href: '#skills', text: 'Skills' },
                { id: 3, href: '#projects', text: 'Projects' },
                { id: 4, href: '#experience', text: 'Experience' },
                { id: 5, href: '#education', text: 'Education' },
                { id: 6, href: '#contact', text: 'Contact' }
            ],
            aboutText: 'Hello! I\'m Jhavagne Dunn, I\'m a Full Software Developer with a passion for creating innovative solutions and continuously learning new technologies. I have a background in Computer Science and have worked at IBM, where I specialized in application development.',
            skills: [
                'Languages: JavaScript, Java, C++, Python, PHP',
                'Web Development: Vue.js, HTML, CSS, Node.js, SQL, Spring Boot',
                'Databases: DB2, MongoDB',
                'Cloud & DevOps: IBM Cloud, Docker, Red Hat OpenShift, Jenkins, Kubernetes',
                'Version Control: Git, GitHub',
                'Testing Tools: JUnit, JMeter, Selenium, Postman',
                'Agile: Scrum, Jira',
                'Soft Skills: Problem-Solving, Communication, Time Management, Team Collaboration, Adaptability'

            ],
            learningText: 'Enhancing my DevOps and Fullstack skills through Udemy courses, including AWS, Jenkins, Ansible, and more.',
            contact: {
                email: 'dunn.jhavagne@gmail.com',
                linkedin: 'https://www.linkedin.com/in/jhavagne-dunn-0bb196114',
                linkedinText: 'Jhavagne Dunn',
                github: 'https://github.com/jhavagned',
                githubText: 'JhavagneDunn'
            },
            experiences: [
                { title: 'Software Engineer', company: 'IBM', date: 'May 2018 – April 2024', description: 'As a Software Engineer at IBM, I led the development and enhancement of applications using Java, JavaScript, Python, Vue.js, and Node.js. I successfully managed the migration of a key application from Vue2 to Vue3, ensuring continuous feature delivery and project sustainability. My role involved implementing DevOps practices, including CI/CD pipelines and build automation, to streamline deployment processes. I also focused on addressing software vulnerabilities, conducting code analysis, and optimizing the Java backend and DB2 database infrastructure to improve project efficiency and outcomes' },
                { title: 'Intern', company: 'IBM', date: 'June 2017 - May 2018', description: 'As a Test Automator for the IGF Workbench web application, I was responsible for creating, maintaining, and enhancing test cases to ensure the application\'s functionality and reliability. My work contributed to the overall quality assurance process, allowing for efficient identification and resolution of issues within the application.' }
                // Add more experiences as needed
            ],
            education: [
                { degree: 'Master of Science in Computer Science', institution: 'Iona University', date: 'May 2018' },
                { degree: 'Bachelor of Science in Computer Science', institution: 'Iona University', date: 'May 2017' }
                // Add more education details as needed
            ],
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        submitForm() {
            // Handle form submission (e.g., send an email or save data)
            alert('Form submitted!');
            // Reset form
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
}).mount('#app');