---
layout: page
title: Home Credit Default Risk
date: 2023-12-15
project_title: Home Credit Default Risk
description: kaggle competetion by home credit group.
list_description: This course project, developed for the Data Mining II course in the Industrial and Systems Engineering (ISE) program, focuses on predicting loan default risk using real‑world financial and demographic data from the Home Credit dataset. The objective was to build reliable machine learning models like XGboost and LightGBM that identify high‑risk applicants while minimizing false rejections, enabling data‑driven credit decision‑making.
img: assets/projects/Home_Credit.png
importance:
category: course-projects
github: https://github.com/kkratos/Loan-Default-Risk-Prediction
giscus_comments: false
tech: python, XGBoost, LightGBM
---

This course project, developed for the Data Mining II course in the Industrial and Systems Engineering (ISE) program, focuses on predicting loan default risk using real‑world financial and demographic data from the Home Credit dataset. The objective was to build reliable machine learning models that identify high‑risk applicants while minimizing false rejections, enabling data‑driven credit decision‑making.

Below is the Jupyter Notebook containing the implementation of this project.

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/homecredit.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/homecredit.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
