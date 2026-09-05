---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 3
---

<div class="container mt-4">
  
  <!-- Projects List -->
  {% assign sorted_projects = site.projects | where_exp: "project", "project.show_in_list != false" | sort: "date" | reverse %}
  {% if sorted_projects.size > 0 %}
    {% for project in sorted_projects %}
    <div class="mb-4 pb-3 {% unless forloop.last %}border-bottom{% endunless %}">
      <div class="d-flex align-items-start">
        <!-- Image on Left -->
        {% if project.img %}
        <div class="me-4 flex-shrink-0 image-container" style="margin-right: 1rem !important;">
          <a href="{{ project.url | relative_url }}">
            <img src="{{ project.img | relative_url }}" 
                 alt="{{ project.title }}" 
                 class="project-image rounded">
          </a>
        </div>
        <style>
        .image-container {
        width: 250px;
        height: 150px;
        overflow: hidden;
        }
        .project-image {
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
        }
        .project-image:hover {
        transform: scale(1.05);
        }
        </style>
        {% endif %}
        <!-- Content -->
        <div class="flex-grow-1" style="margin-left: 1rem;">
          <!-- Title as Link -->
          <h5 class="mb-1">
            <a href="{{ project.url | relative_url }}" class="text-decoration-none text-dark">
              <span class="fw-bold">{{ project.title }}</span>
            </a>
          </h5>
          <!-- Description -->
          {% if project.list_description %}
          <p class="text-muted mb-2">{{ project.list_description }}</p>
          {% endif %}
          <!-- Links -->
          <div>
            <a href="{{ project.url | relative_url }}" class="text-decoration-none small me-3">
              View details
            </a>
            {% if project.github %}
            <a href="{{ project.github }}" class="text-decoration-none small" target="_blank">
              <i class="bi bi-github me-1"></i> &middot; GitHub
            </a>
            {% endif %}
          </div>
           <!-- Techstack -->
          <div>
            {% if project.tech %}
              <div class="mt-2">
                <small class="text-muted">
                  <i class="bi bi-tools me-1"></i>
                  <span class="fw-bold">Technologies: </span> {{ project.tech }}
                </small>
              </div>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="text-center py-5">
      <p class="text-muted">No projects to display.</p>
    </div>
  {% endif %}
</div>
