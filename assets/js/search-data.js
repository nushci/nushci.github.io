// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-nus-computing-will-be-hosting-our-first-ever-invite-only-chi-event-in-barcelona-this-year-also-see-these-other-links-sharing-our-presence-at-chi-pin-sym-39-s-post-sharing-all-of-singapore-39-s-chi-publications-ai4sg-lab-39-s-chi-schedule",
          title: 'NUS Computing will be hosting our first ever (invite-only) CHI Event in Barcelona...',
          description: "",
          section: "News",},{id: "projects-brian-y-lim",
          title: 'Brian Y. Lim',
          description: "Associate Professor, Department of Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Brian_Lim_Youliang/";
            },},{id: "projects-clement-zheng",
          title: 'Clement Zheng',
          description: "Assistant Professor, Division of Industrial Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Clement_Zheng/";
            },},{id: "projects-pin-sym-foong",
          title: 'Pin Sym Foong',
          description: "Senior Research Fellow, Saw Swee Hock School of Public Health",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Foong_Pin_Sym/";
            },},{id: "projects-gabriel-lipkowitz",
          title: 'Gabriel Lipkowitz',
          description: "Assistant Professor, Division of Industrial Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Gabriel_Elijah_Lipkowitz/";
            },},{id: "projects-irmandy-wicaksono",
          title: 'Irmandy Wicaksono',
          description: "Assistant Professor, Division of Industrial Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Irmandy_Wicaksono/";
            },},{id: "projects-jane-l-e",
          title: 'Jane L. E',
          description: "Assistant Professor, Department of Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Jane_L_E/";
            },},{id: "projects-janghee-cho",
          title: 'Janghee Cho',
          description: "Assistant Professor, Division of Industrial Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Janghee_Cho/";
            },},{id: "projects-justin-moon",
          title: 'Justin Moon',
          description: "Assistant Professor, Division of Industrial Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Justin_Moon/";
            },},{id: "projects-yi-chieh-lee",
          title: 'Yi-Chieh Lee',
          description: "Assistant Professor, Department of Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Lee_Yi-Chieh/";
            },},{id: "projects-wei-tsang-ooi",
          title: 'Wei Tsang Ooi',
          description: "Associate Professor, Department of Information Systems and Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Ooi_Wei_Tsang%20/";
            },},{id: "projects-suranga-nanayakkara",
          title: 'Suranga Nanayakkara',
          description: "Associate Professor, Department of Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Suranga_Nanayakkara/";
            },},{id: "projects-ching-chiuan-yen",
          title: 'Ching-Chiuan Yen',
          description: "Associate Professor, Division of Industrial Design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Yen_Ching-Chiuan/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},];
