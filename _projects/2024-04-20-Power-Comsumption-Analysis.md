---
layout: page
title: Power Consumption Analysis and Prediction
date: 2024-04-20
project_title: Building Energy Consumption Analysis
description: visualization and analysis of shopping mall building energy data.
list_description: Capstone project for data analytics course applying learned methodologies to energy consumption analysis. Practiced end-to-end analytics workflow- data wrangling, exploratory analysis, visualization, and predictive modeling. Key deliverables included clustering analysis of daily load patterns, regression modeling, and feature importance analysis for thermal comfort. The project demonstrated application of course concepts including data preprocessing, statistical analysis, machine learning implementation, and result interpretation in a practical domain.
img: assets/projects/electricity.png
importance:
github: https://github.com/kkratos/Building-Energy-Analysis
category: course-projects
giscus_comments: false
tech: python
---

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/building.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/building.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
    {% jupyter_notebook jupyter_path %}
{% else %}
    <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

## Summary

- Conducted thorough data analysis, cleaning, and pre-processing using pandas library, resulting in improved data quality and reduced errors.
- leveraged Matplotlib and Seaborn's functionalities to create visually compelling and informative charts that enhanced the overall understanding of the underlying data.
- Utilized K-means Clustering on electrical meter data to identify daily load profiles and implemented a k-nearest neighbor regression model to accurately predict energy consumption with a MAPE of 6.59%.
- Implemented Random Forest model on ASHRAE thermal dataset, enabling the analysis of thermal sensation and identify key factors influencing human comfort with feature importance plot.
