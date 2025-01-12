export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize seamless innovation through teamwork and technology ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm highly adaptable with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a live Video Conferencing App",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to discuss a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Vibe - Video Conferencing (Coming Soon)",
        des: "Simplify your video conferencing experience. Seamlessly connect with colleagues and friends.",
        img: "/vibe.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "Coming Soon",
    },
    {
        id: 2,
        title: "CoderSpace",
        des: "Sign up to experience the future of collaborative developer interaction using Next.js with CoderSpace.",
        img: "/testing.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongodb-original.svg", "/zod.svg"],
        link: "https://github.com/hirshad494/CoderSpace",
    },
    
    {
        id: 3,
        title: "DevAI - Your AI in Code",
        des: "Integrates advanced AI models to provide intelligent solutions, and enhance productivity for developers.",
        img: "/devaitesting.png",
        iconLists: ["/javascript.svg", "/nodejs.svg", "/css3.svg", "/axios.svg", "/nodemon.svg"],
        link: "https://github.com/hirshad494/Dev_AI",
    },
    {
        id: 4,
        title: "Motivation Bot",
        des: "Discord bot designed to uplift users by providing motivational messages and responding to sad texts.",
        img: "/discord.png",
        iconLists: ["/python-original.svg", "/flask-svgrepo-com.svg", "/uptimerobot.svg", "/replit-original.svg"],
        link: "https://github.com/hirshad494/motivationalbot",
    },
];

export const testimonials = [
    {
        quote:
            "Hamza is an exceptional leader with great qualities that every young leader should have. Hamza was one of eight students that was selected under my leadership at the Halton Region to start a business. Hamza displayed exceptional technical knowledge and really impressed our team during the interview. After Hamza was selected, he worked hard trying to gain clients and grow his business. I can say without doubt that I had a great time leading Hamza and I highly recommend him to any organization that is looking for a great asset to join their team.",
        name: "Prince Khan",
        title: "Former Mentor at Halton Region",
    },
    {
        quote:
            "Hamza has been one of our lead unity instructors for higher belt levels when the students have progressed from purple to black belt in our program. His knowledge with the Unity Editor, C#, Visual Studio, and even git source control for when the kids need to save their projects as a separate branch in our program repositories has been invaluable to the centre & our day-to-day operations when issues need some troubleshooting. His ability to integrate new systems as well as his adaptability to new challenges that come up in the centre make him an amazing candidate for any new opportunities he comes across.",
        name: "Sina Lyon",
        title: "Programming Instructor at Code Ninjas",
    },
    {
        quote:
            "I've had the pleasure of working together with Hamza at Code Ninjas over the past year. During this time, I have seen Hamza provide guidance and mentoring to dozens of students. Hamza is kind, patient, and always goes above and beyond to ensure that the students he is working with not only find answers to their issues, but to understand the reasoning of how their code functions. All things considered, I expect Hamza will have a successful career and will be a tremendous asset for anyone who is fortunate enough to have him as part of their team.",
        name: "Jonathan Holowka",
        title: "Lead Programming Instructor at Code Ninjas",
    },
    {
        quote:
            "Hamza has exceptional technical skills and posses a deep and comprehensive understanding of JavaScript, Unity, C#, and other programming languages. He has an intuitive grasp of complex coding concepts and is adept at troubleshooting and debugging. Hamza developed a Rewards system application for our student based on progress, and his proficiency in integrating several tools, programming the application and deploying it in a short amount of time was impressive. His work always reflects a high standard of creativity, functionality and technical precision. He has great potential to be a future Tech leader and an asset to any organization and I wish him all the best.",
        name: "Shireen Islam",
        title: "Centre Director at Code Ninjas",
    },
    
];

export const companies = [
    {
        id: 1,
        name: "CoderSpace",
        img: "/coderspace.ico",
        nameImg: "/coderspace.png",
    },
    {
        id: 2,
        name: "DevGenie",
        img: "/devgeniecube.png",
        nameImg: "/devgenie.png",
    },
    {
        id: 3,
        name: "DEVAI",
        img: "/devai.ico",
        nameImg: "/devainame copy.png",
    },
    
];

export const workExperience = [
    {
        id: 1,
        title: "Devops Engineer Intern - Canada Life",
        desc: "Automated provisioning using Infrastructure as Code, helped reduce Kafka configuration time from one hour to five minutes.",
        className: "md:col-span-2", 
        thumbnail: "/exp1.svg",

    },
    {
        id: 2,
        title: "Business Systems Analyst - Canada Life",
        desc: "Elicited integration product requirements using Jira and Confluence, collaborating with architects to implement scalable AWS solutions and improving process efficiency.",
        className: "md:col-span-2", 
        thumbnail: "/exp2.svg",
    }, 
    {
        id: 3,
        title: "Software Engineer Intern - Akhny Solutions",
        desc: "Designed and developed responsive web and mobile applications using React.js, optimizing performance and user engagement.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 4,
        title: "Programming Instructor - Code Ninjas",
        desc: "Led hands-on game development sessions using Unity and C#, achieving a significant increase in student advancement.",
        className: "md:col-span-2", 
        thumbnail: "/exp3.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/hirshad494",
    },
    
    {
        id: 2,
        img: "/link.svg",
        link: "https://linkedin.com/in/hirshad494",
    },
];
