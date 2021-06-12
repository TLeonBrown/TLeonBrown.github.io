// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#154382, #326AAA, #91C3EA, #7EB4E6",
  firstName: "Tian",
  middleName: "",
  lastName: "Brown",
  message: "Welcome to my page!",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/TLeonBrown",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tian-brown-376051173/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//b) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//c) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.JPG"),
  imageSize: 375,
  message:
    " I'm currently working as a UI/Frontend Developer at Spheryx, \
    a small Manhattan-based startup! \
    My work-related passions are in user interface design and \
    front-end/web development. \
    In my free time, I love working on multimedia projects, mixing \
    cocktails, running, and listening to rock music!",
  resume: require("../editable-stuff/Resume 2021 (5-26).pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch that number of your most recently updated projects.
// You can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display additional, specfic projects, add the repository names.
//      i.e ["repository-1", "repo-2"]
// Be careful not to include the same repo twice
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "TLeonBrown", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
  ],
};

const manualProjects = [
  {
    name: "Waveback Music Player",
    description: "A fully fledged playlist sharing application/music player, developed with the MERN stack and the Spotify API.",
    url: "https://github.com/CSE416-NLP/waveback",
    date: "Fall 2020"
  },
  {
    name: "New York State Census Data Dashboard",
    description: "An interactive dashboard for analyzing many different statistics and demographics, across each county in New York State.",
    url: "https://github.com/TLeonBrown/CSE-495-496-Research-Project",
    date: "Fall 2020 - Spring 2021"
  },
  {
    name: "Twin",
    description: "A TypeScript puzzle platformer game inspired by classic flash games such as FireBoy & LavaGirl. Winner of the 2021 SBU Game Programming Competition!",
    url: "https://twin-game.web.app/",
    date: "Spring 2021"
  },
  {
    name: "IMDb Movie Data Dashboard",
    description: "A multifaceted dashboard for visualizing a large database of IMDb movie statistics from 2006-2016.",
    url: "https://github.com/TLeonBrown/CSE-332-Dashboard-Project",
    date: "Fall 2019"
  },
];

// LEADERSHIP SECTION
const leadership = {
  show: false, 
  heading: "Leadership & Extracurriculars",
  message:
    "Here are several of the extracurriculars I have participated in on the Stony Brook campus!.",
  images: [
    { 
      img: require("../editable-stuff/Tabletop Club Logo.png"), 
      label: "SBU Tabletop Club - President", 
      paragraph: "Since August 2018, I have served as the President of the Tabletop Club, \
      Stony Brook's premier club for playing board games and tabletop RPGs!" 
    },
  ],
  imageSize: {
    width:"425",
    height:"600"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  skills: [
    "JavaScript & Typescript",
    "React, Express, HTML & CSS",
    "D3 Visualization Library",
    "Python & PyQtGraph",
    "Java & C",
    "Unity & Unreal Game Engines",
    "Adobe Creative Cloud Suite"
  ],
};

// ART PORTFOLIO
const portfolio = {
  show: true,
  heading: "Art Portfolio",
  projects: [
    "The State of the Union",
    "Worm",
    "Hemispheres (1978), Re-Imagined",
    "Forest Environment",
    "Tabletop Club Branding",
  ],
  pdfs: [
    require("../editable-stuff/Portfolio/Tian_Brown_Project3.pdf"),
    require("../editable-stuff/Portfolio/Tian_Brown_Project2.pdf"),
    require("../editable-stuff/Portfolio/Tian_Brown_Project1.pdf"),
    "https://www.youtube.com/watch?v=KgSURjOX4aI",
    require("../editable-stuff/Portfolio/Tian_Brown_Visual_Deliverables_2.pdf"),
  ],
  artists: [
    "Tian Brown, Fall 2020",
    "Tian Brown, Fall 2020",
    "Tian Brown, Fall 2020",
    "Tian Brown, Spring 2019",
    "Tian Brown, Fall 2019"
  ],
  dimensions: [
    "13\" x 19\"",
    "13\" x 19\"",
    "13\" x 9.45\"",
    "N/A",
    "N/A",
  ],
  mediums: [
    "Digital (Adobe Photoshop)",
    "Digital (Adobe Photoshop, InDesign)",
    "Digital (Adobe Illustrator, InDesign)",
    "Digital (Blender, Unreal Engine)",
    "Digital (Adobe Illustrator, InDesign)",
  ],
  extras: [
    "Winner, 2021 Sunwood Student Art Competition",
    "",
    "",
    "",
    "",
    "",
  ],
  statements: [
    require("../editable-stuff/Portfolio/Tian_Brown_Project3_Statement.pdf"),
    require("../editable-stuff/Portfolio/Tian_Brown_Project2_Statement.pdf"),
    require("../editable-stuff/Portfolio/Tian_Brown_Project1_Statement.pdf"),
    null,
    null,
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true, // Not enabled
  heading: "Get In Touch",
  message:
    "Feel free to reach out to me!"
};

const contactInfo = {
  email: "tianbrown@gmail.com",
  phone: "+1 (914) - 233 - 4840",
  location: "New Rochelle, NY",
  locationLink: "https://www.openstreetmap.org/#map=12/40.9301/-73.8168",
  occupation: "UI Developer at Spheryx, Inc."
}

export { navBar, mainBody, about, repos, manualProjects, skills, portfolio, leadership, getInTouch, contactInfo };
