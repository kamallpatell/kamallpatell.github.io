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
        },{id: "post-linear-programming-in-r",
        
          title: "Linear Programming in R",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/lpSolve-R/";
          
        },
      },{id: "projects-swarm-robotics",
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
          description: "Visualization and analysis of shopping mall building energy data.",
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
            },},{id: "projects-supply-chain-inventory-analytics-power-bi-dashboard",
          title: 'Supply Chain Inventory Analytics Power BI Dashboard',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2026-08-20-Inventory-Analytics-PowerBI/";
            },},{id: "projects-e-commerce-fulfillment-amp-delivery-optimization-analytics",
          title: 'E-Commerce Fulfillment &amp;amp; Delivery Optimization Analytics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2026-09-15-Ecommerce-SQL/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kamalpatelll", "_blank");
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
