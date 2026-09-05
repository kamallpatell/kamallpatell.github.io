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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-linear-programming-in-r-lpsolve",
        
          title: "Linear Programming in R(LpSolve)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/lpSolve-R/";
          
        },
      },{id: "post-data-engineering-week-2-workflow-orchestration",
        
          title: "Data Engineering Week 2 - Workflow Orchestration",
        
        description: "Workflow orchestration with prefect",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/week2-data-engineering-workflow-orchestration/";
          
        },
      },{id: "post-data-engineering-week-1-docker-and-postgresql",
        
          title: "Data Engineering Week 1 - Docker and Postgresql",
        
        description: "Introduction to data engineering by Alexey Grigorev",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/week1-data-engineering-zoomcamp/";
          
        },
      },{id: "post-data-engineering-week-3-data-warehouse",
        
          title: "Data Engineering Week 3 - Data Warehouse",
        
        description: "Data Warehouse and BigQuery",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/week3-data-engineering-data-warehouse/";
          
        },
      },{id: "post-system-modeling-in-flexsim",
        
          title: "System Modeling in Flexsim",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/system-modeling-flexsim/";
          
        },
      },{id: "post-travel-paths-using-a-in-flexsim",
        
          title: "Travel Paths Using A* In FlexSim",
        
        description: "A-Star Algorithm",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Travel-Paths-flexsim/";
          
        },
      },{id: "post-experiment-control-in-flexsim-simulation",
        
          title: "Experiment Control in Flexsim Simulation",
        
        description: "Model as experimentation tool and learn about the model process with different input parameters.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Experiment-Control-flexsim/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-swarm-robotics",
          title: 'Swarm Robotics',
          description: "simulate the control of 6 wheeled robots in PyBullet physics simulator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2019-05-10-Swarm-Robotics/";
            },},{id: "projects-cad-modeling",
          title: 'CAD Modeling',
          description: "Solidwords, CatiaV5",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2019-05-12-CAD-Modeling/";
            },},{id: "projects-pattern-analysis-of-9-years-of-us-vehicle-accidents",
          title: 'Pattern Analysis of 9 years of US Vehicle Accidents',
          description: "vehicle accidents from 2016-2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-12-15-US-Vehicle/";
            },},{id: "projects-tableau-data-visualization",
          title: 'Tableau Data Visualization',
          description: "dashboard visualization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-05-10-Tableau/";
            },},{id: "projects-home-credit-default-risk",
          title: 'Home Credit Default Risk',
          description: "kaggle competetion by home credit group.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-12-15-Home-Credit/";
            },},{id: "projects-power-consumption-analysis-and-prediction",
          title: 'Power Consumption Analysis and Prediction',
          description: "visualization and analysis of shopping mall building energy data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-04-20-Power-Comsumption-Analysis/";
            },},{id: "projects-forecasting-electricity-price-using-autoregressive-and-lstm-model",
          title: 'Forecasting Electricity Price using Autoregressive and LSTM Model',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-04-20-Forecasting-Analytics/";
            },},{id: "projects-barzilai-borwein-step-size-for-stochastic-gradient-descent",
          title: 'Barzilai-Borwein Step Size for Stochastic Gradient Descent',
          description: "Forecasting Analytics Course Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-10-12-Paper-Implementation-BB-Step/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kkratos", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kamalpatel", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%6D%61%6C%70%61%74%65%6C%31%34@%79%61%68%6F%6F.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
