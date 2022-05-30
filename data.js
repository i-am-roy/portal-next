import {FaReact ,FaCss3} from 'react-icons/fa'
import {AiOutlineAppstoreAdd,AiFillHtml5 , AiFillProject ,} from 'react-icons/ai'
import {SiAltiumdesigner, SiJira, SiAzuredevops, SiSonarqube, SiGit, SiJavascript , SiBootstrap , SiJquery , SiNodedotjs , SiExpress , SiDotnet, SiMysql , SiMongodb} from 'react-icons/si'
import {DiDotnet} from 'react-icons/di'
import {VscGitPullRequest} from 'react-icons/vsc'

export const WorkExperience = [
    {
        Company: "Accenture",
        Position : "Application Developer Analyst",
        StartingYear : 2020,
        EndingYear : 0,
        Location : "Benagaluru, Karnataka"
    },
    {
        Company: "Accenture",
        Position : "Application Developer Associate",
        StartingYear : 2019,
        EndingYear :2020,
        Location : "Benagaluru, Karnataka"
    },
    
]

export const MyProjects = [
    {
        Title : "React JS Developer - myConcerto Asset Management Portal UI/UX",
        Location : "Bengaluru/Karnataka",
        Tech: [
            'React Js',
            'BootStrap',
            'Redux',
            'Rest API',
            'HTML5',
            'SHAREPOINT'

        ],
        Description: `• Developed rich responsive reusable UI components with React JS for
        Contribution Portal
        • Used CSS library BootStrap 4 for stylings
        • Used ES6 Scripts to build a highly responsive SPA
        • UsedWebpack and Bubble to build react applications
        • Worked with Redux for state management.
        • Extensively using chrome developer tools for tracking and debugging.
        • Used Azure Devops CI-CD Pipeline for continuous deployment. bugs
        and resolving issues.`,
        Dureation: [2020,2022]
    },
    {
        Title : "SharePoint Content Management",
        Location : "Bengaluru/Karnataka",
        Tech: [
            '.NET',
            'Sharepoint',
            'Sharepoint .Net Solutions',
            'Azure'

        ],
        Description: `• Developed rich responsive reusable UI components with React JS for
        Contribution Portal
        • Used CSS library BootStrap 4 for stylings
        • Used ES6 Scripts to build a highly responsive SPA
        • UsedWebpack and Bubble to build react applications
        • Worked with Redux for state management.
        • Extensively using chrome developer tools for tracking and debugging.
        • Used Azure Devops CI-CD Pipeline for continuous deployment. bugs
        and resolving issues.`,
        Dureation: [2019,2020]
    }
]

export const MySkills = [
    {
        name : 'FrontEnd',
        options :  [
            {titel: 'HTM5', logo : <AiFillHtml5 size={60} />},
            {titel: 'CSS3', logo :  <FaCss3 size={60} />},
            {titel: 'BootStrap 4', logo :  <SiBootstrap size={60} />},
            {titel: 'Javascripts', logo :  <SiJavascript size={60} />},
            {titel: 'React Js', logo : <FaReact size={60}/>},
            {titel: 'Jquery', logo :  <SiJquery size={60} />},
            
        ]
    },
    {
        name : 'BackEnd',
        options :  [
            {titel: 'Node JS', logo : <SiNodedotjs size={60} />},
            {titel: 'Express', logo : <SiExpress size={60} />},
            {titel: '.Net', logo : <SiDotnet size={60} />},
            {titel: '.Net WEB API', logo : <DiDotnet size={60} />},
            {titel: 'SQL', logo : <SiMysql size={60} />},
            {titel: 'MongoDB', logo : <SiMongodb size={60} />},
            
        ]
    },
    {
        name : 'Tools',
        options: [
            {titel: 'JIRA', logo : <SiJira size={60}/>},
            {titel: 'Azure Devops', logo : <SiAzuredevops size={60}/>},
            {titel: 'Sonar Qube', logo : <SiSonarqube size={60}/>},
            {titel: 'GIT', logo : <SiGit size={60}/>},
        ]
    },
    {
        name : 'Functional',
        options : [
            {titel: 'App Design and Thinking', logo : <AiOutlineAppstoreAdd size={60}/>},
            {titel: 'Creative Design', logo : <SiAltiumdesigner size={60} />},
            {titel: 'Project Management', logo : <AiFillProject size={60}/>},
            {titel: 'Agile Methodology', logo : <VscGitPullRequest size={60} />},
            
        ]
    }
]

export const Certifications = [
    {
        'Title' : 'Udemy Node JS Essential Training',
        'Link' : ''
    },
    {
        'Title' : 'Udemy Node JS Essential Training',
        'Link' : ''
    }

]

export const Language = [
    {
        Title : "English",
        Proficiency : 'Read/Write'
    },
    {
        Title : "Hindi",
        Proficiency : 'Read'
    },
    {
        Title : 'Bengali',
        Proficiency : 'Read/Write'
    }
]

