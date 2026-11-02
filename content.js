/*
  ============================================================
   YOUR SITE CONTENT — edit this file to update the website.
  ============================================================
   Tips:
   - Only change the text between the quotes "like this".
   - If your text needs a double quote, write it as \"  (or use ' instead).
   - Wrap words in <b>...</b> to highlight them in the accent colour.
   - Lists are in [ ... ] — each item is separated by a comma.
   - To add a job / project / course, copy an existing { ... } block,
     paste it after a comma, and change the text.
*/

window.CONTENT = {

  name: "Mohamed Amr",
  initials: "MA",
  email: "mdamrak@gmail.com",
  github: "https://github.com/mohameedamrr",
  linkedin: "https://linkedin.com/in/mohameedamrr",
  resume: "https://drive.google.com/file/d/13fYvtMvwZeb_o3CxV1tDbxHOyz5_eH1u/view?usp=drive_link",

  hero: {
    greeting: "hi, my name is",
    tagline: "I build data pipelines that scale.",
    intro: "I'm a <b>Google Cloud Certified Professional Data Engineer</b> working at <b>VOIS (Vodafone International Services)</b> in Cairo. I build, run and debug data pipelines on Google Cloud, and I work with machine learning, LLMs and cloud systems.",
    badge: "Google Cloud Certified · Professional Data Engineer",
    button: "Say hello →"
  },

  about: {
    paragraphs: [
      "I studied <b>Computer Engineering &amp; Software Systems</b> at Ain Shams University, on a dual degree with the University of East London. I graduated in 2025.",
      "Today I build data pipelines at <b>VOIS</b>. I write Apache Beam templates for Google Cloud Dataflow, keep ingestion jobs running reliably, and fix failing pipelines. I'm also a <b>Google Cloud Certified Professional Data Engineer</b>. Before that, I worked on <b>loan-default prediction</b> during a data science internship at Banque Misr.",
      "My university projects ranged from embedded C on a car's CAN bus to LLM-powered diagnostics, distributed image processing on AWS, and computer vision. I enjoy work that crosses the line between software and data."
    ],
    techIntro: "Technologies I work with most:",
    tech: ["Python", "SQL", "Apache Beam", "GCP Dataflow", "Apache Airflow", "Apache Spark", "dbt", "AWS", "TensorFlow", "PostgreSQL"]
  },

  education: [
    {
      degree: "B.Sc. Computer Engineering &amp; Software Systems",
      school: "Ain Shams University · GPA 3.23",
      years: "2020 — 2025"
    },
    {
      degree: "Computer Engineering &amp; Software Systems (Dual Degree)",
      school: "University of East London",
      years: "2021 — 2025"
    }
  ],

  experience: [
    {
      tab: "VOIS",
      role: "Data Engineer, Discover Associate",
      company: "VOIS",
      dates: "Apr 2026 — Present · Vodafone International Services",
      bullets: [
        "Build Apache Beam templates that define and run scalable data processing jobs on Google Cloud Dataflow.",
        "Monitor worker logs across active Dataflow jobs to keep ingestion reliable, check landing outputs and fix API pagination logic.",
        "Update pipeline configurations, fix connection bugs and speed up pipeline execution.",
        "Deploy and configure JSON-based pipelines on Google Cloud Data Fusion for ad-hoc customer requests.",
        "Investigate, debug and fix failing Dataflow pipelines so data processing returns to normal."
      ],
      tags: ["Apache Beam", "Dataflow", "Cloud Data Fusion", "Cloud Storage", "Cloud Scheduler", "Python"]
    },
    {
      tab: "Banque Misr",
      role: "Data Science Intern",
      company: "Banque Misr",
      dates: "Jul 2024 — Aug 2024",
      bullets: [
        "Built a loan-defaulter prediction model and presented the results to business stakeholders.",
        "Learned in depth how machine learning is applied to fintech problems.",
        "Built hands-on experience with classical machine learning and deep learning algorithms."
      ],
      tags: ["Python", "Scikit-learn", "Pandas", "TensorFlow"]
    }
  ],

  // Big project showcases. "art" picks the illustration: "obd", "aws" or "cnn".
  featured: [
    {
      overline: "Graduation Project",
      title: "LLM-Powered On-Board Diagnostics System",
      description: "A car diagnostics platform that connects the vehicle to an app. I built an <b>LLM feature</b> that explains trouble codes the user enters, using LangChain with DeepSeek V3 through the SambaNova API. I also built the trips backend, deployed it on <b>DigitalOcean</b>, and implemented the <b>CAN &amp; OBD protocols</b> in embedded C.",
      stack: ["LangChain", "DeepSeek V3", "Flutter", "AUTOSAR", "Embedded C", "DigitalOcean"],
      art: "obd",
      link: ""
    },
    {
      overline: "Cloud · Distributed Systems",
      title: "Distributed Image Processing on AWS",
      description: "A distributed image processing application on AWS. It splits work across <b>multiple EC2 instances</b> behind an Elastic Load Balancer and stores inputs and outputs in <b>S3</b>. Everything is orchestrated with the boto3 SDK.",
      stack: ["AWS EC2", "S3", "ELB", "boto3", "Python"],
      art: "aws",
      link: ""
    },
    {
      overline: "Deep Learning · Computer Vision",
      title: "Handwritten Word Recognition",
      description: "A handwritten word recognizer built from <b>convolutional and pooling layers</b> in TensorFlow. It uses an image pre-processing pipeline in <b>OpenCV</b> and NumPy to clean the input before it reaches the network.",
      stack: ["TensorFlow", "CNNs", "OpenCV", "NumPy"],
      art: "cnn",
      link: ""
    }
  ],

  // Smaller project cards. "icon" can be: "grid", "tree", "lock", "car", "doc", "heart".
  // Leave "link" empty ("") to link to your GitHub profile instead.
  projects: [
    {
      title: "Sudoku Solver with Computer Vision",
      description: "A computer vision pipeline that reads a photo of a Sudoku puzzle and prepares it for solving, using grayscale conversion, thresholding and morphological operations.",
      stack: ["OpenCV", "NumPy", "Python"],
      icon: "grid",
      link: ""
    },
    {
      title: "Sudoku Solver in C++",
      description: "A Sudoku solver that uses a binary search tree and a backtracking algorithm, with a Flutter interface for the puzzle grid.",
      stack: ["C++", "BST", "Backtracking", "Flutter"],
      icon: "tree",
      link: ""
    },
    {
      title: "Secure Chatroom App",
      description: "A chatroom secured end to end with AES encryption, RSA key exchange and hashing to keep messages confidential and intact.",
      stack: ["AES", "RSA", "Hashing"],
      icon: "lock",
      link: ""
    },
    {
      title: "Car Agency Management System",
      description: "A Java system for running a car agency: inventory, sales and customer data. It uses a controller-driven, modular architecture so it is easy to scale and maintain.",
      stack: ["Java", "OOP", "MVC"],
      icon: "car",
      link: ""
    },
    {
      title: "Mini-Payroll System",
      description: "A JavaFX payroll application for employee records, with salary calculation, grading and role-based features, built on solid OOP principles.",
      stack: ["Java", "JavaFX", "OOP"],
      icon: "doc",
      link: ""
    },
    {
      title: "Anti-Violence Mobile App",
      description: "A Flutter mobile application designed to help reduce violence and support people affected by it.",
      stack: ["Flutter", "Dart", "Mobile"],
      icon: "heart",
      link: ""
    }
  ],

  // Professional certifications — shown as highlighted cards above the courses.
  // Paste your credential link (e.g. Google Drive) into "link": it adds a "View credential"
  // button on the card, and the badge at the top of the page will open it too.
  certifications: [
    {
      title: "Professional Data Engineer",
      issuer: "Google Cloud Certified",
      description: "Validates designing, building, securing and operating data processing systems and ML models on Google Cloud.",
      link: "https://drive.google.com/file/d/1xgiEgVgnSZCM54I_G3Cy0NO7sAvqcilK/view?usp=drive_link"
    }
  ],

  courses: [
    { badge: "DE",  title: "Data Engineering Specialization", provider: "DeepLearning.AI &amp; AWS" },
    { badge: "GCP", title: "Data Engineering, Big Data &amp; ML on Google Cloud", provider: "Google Cloud" },
    { badge: "AWS", title: "AWS Cloud Practitioner Essentials", provider: "AWS" },
    { badge: "AF",  title: "The Complete Hands-On Introduction to Apache Airflow 3", provider: "Udemy" },
    { badge: "LLM", title: "Generative AI with Large Language Models", provider: "DeepLearning.AI &amp; AWS" },
    { badge: "ML",  title: "Machine Learning Specialization", provider: "DeepLearning.AI" }
  ],

  contact: {
    overline: "05. what's next?",
    heading: "Get in touch",
    text: "I'm always open to talking about data engineering, cloud and ML work, or interesting new opportunities. Whether you have a question or just want to say hi, my inbox is open.",
    button: "Say hello"
  }
};
