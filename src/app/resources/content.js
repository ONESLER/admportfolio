import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: 'Aaron Daniel',
  lastName:  'Montalbo',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer / IT Support",
  avatar: "/images/myavatar.jpg",
  location:  'Asia/Manila', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Tagalog']  // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/ONESLER',
},
{
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/aaron-daniel-montalbo-3a10b5310/',
},
{
    name: 'X',
    icon: 'x',
    link: '',
},
{
    name: 'Email',
    icon: 'email',
    link: 'mailto:aarondanielmontalbo@gmail.com',
},
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer with Technical Skills</>,
  subline: <>I'm Aaron you can call <InlineCode>A</InlineCode>, for short, a software developer with no prior experiences a side from self-learned.</>
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a software developer with technical skills in hardware, 
        software, and network, but with no prior experiences a side from self-learned and 
        willingness to learn in those fields.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: 'Mercan Canada Employment Phils., Inc.',
        timeframe: 'FEB 2025 - PRESENT',
        role: 'Deployment Officer',
        achievements: [
          <>
            I became a regular employee after my 6 month probation period, with a position role of Deployment Associate.
          </>,
          <>
            Now my current position role is Deployment Officer.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Mercan Canada Employment Phils., Inc.',
        timeframe: 'AUG 2024 - FEB 2025',
        role: 'Deployment Associate',
        achievements: [
          <>
            Developed Task Management Website using with Laravel Framework.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'City Government of Meycauayan',
        timeframe: 'FEB 2024 - MAY 2024',
        role: 'On-The-Job-Training role in Information Technology (IT Unit Department)',
        achievements: [
            <>Improved Technical Skills in both Hardware and Network fields, with Software credibility to level 1 to 2.</>,
            <>Front lead of the interns, to asses the problems inside the city hall, like network problems, PC units to printer hardware and re-intallation of software programs with their file integrity and system software.</>
        ],
        images: [ ]
    },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educational Attainment",
    institutions: [
      {
        name: 'Dr. Yangas Colleges, Inc.',
        timeframe: '2020 - 2024',
        description:
        <>
        Graduated with a Bachelors Degree in Information Technology.
        </>, 
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
