# CS OJT Portfolio - Content Generation Template

**DO NOT MODIFY DESIGN/STYLING - ONLY TEXT CONTENT**

This document contains ready-to-paste text content for your CS portfolio. Customize the placeholder information with your own details.

---

## 1. HOME / WELCOME PAGE (index.html)

### Hero Section - Main Heading & Introduction

**Replace the current hero content with this (customize the bracketed sections):**

```html
<h1 data-aos="fade-up" data-aos-delay="200">Hello, I'm <span class="highlight">[YOUR FULL NAME]</span></h1>
<h2 data-aos="fade-up" data-aos-delay="300">
  [Your Program Year] <span class="typed" data-typed-items="Computer Science Student, Software Developer, Full Stack Developer, Systems Analyst, Web Developer, Backend Engineer"></span>
</h2>
<p data-aos="fade-up" data-aos-delay="400">
  I am a [Year Level] Computer Science student at [University Name] with a strong passion for software development, web applications, and systems design. With hands-on experience in [mention 2-3 key areas like: full-stack web development, object-oriented programming, database design], I am eager to apply my technical knowledge during my On-the-Job Training and contribute meaningfully to innovative projects. I excel in problem-solving, collaborative teamwork, and continuous learning of emerging technologies.
</p>
```

---

## 2. ABOUT ME (about.html)

### About Section - Main Introduction

```html
<span class="eyebrow">About Me</span>
<h2 class="headline">Hi, I'm [Your Name] — A Passionate Computer Science Student & Aspiring Software Engineer</h2>
<p class="lead">
  I am a [3rd-year] student pursuing a degree in Computer Science at [University Name], located in [City/Region]. My academic journey has equipped me with strong technical foundations in software development, data structures, algorithms, and full-stack web development. I am dedicated to building innovative, scalable, and user-centric solutions.
</p>
<p>
  Beyond academics, I am actively engaged in continuous learning through personal projects, coding challenges, and technology communities. I believe in the power of clean code, collaborative problem-solving, and delivering solutions that make a real-world impact.
</p>
```

### Skills Summary Section

Replace the skills grid content with:

```
**Technical Skills:**
- Programming Languages: Python, Java, JavaScript, C++, SQL
- Web Development: HTML5, CSS3, React.js, Node.js, Express.js
- Databases: MySQL, MongoDB, Firebase
- Tools & Frameworks: Git, VS Code, REST APIs, Bootstrap, Postman
- Methodologies: Agile Development, Object-Oriented Programming (OOP)

**Soft Skills:**
- Problem-Solving & Analytical Thinking
- Team Collaboration & Communication
- Time Management & Project Planning
- Adaptability & Self-Directed Learning
- Documentation & Technical Writing
```

### Career Objective

```
My immediate goal is to leverage my technical foundation and acquire professional experience through a meaningful OJT placement. I aim to contribute to real-world software projects, collaborate with experienced engineers, and develop practical expertise in full-stack development and software engineering best practices. I am particularly interested in opportunities involving web application development, backend services, and systems design.
```

---

## 3. ACADEMIC PROJECTS SECTION (portfolio.html)

### Portfolio Section - Updated Title & Description

```html
<h2>Academic Projects</h2>
<p>This section showcases my key academic and personal projects completed throughout my computer science studies. Each project demonstrates my technical skills, problem-solving abilities, and understanding of software engineering principles. I've included descriptions, technologies used, and learning outcomes from each project.</p>
```

### Flexible Project Card Template (COPY & PASTE AS NEEDED)

**Use this structure for each project. Copy the entire `<div class="col-lg-4...">` block and paste it to add unlimited projects:**

```html
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-technology">
  <div class="portfolio-card">
    <div class="portfolio-img">
      <img src="assets/img/portfolio/[PROJECT_SCREENSHOT.png]" alt="[Project Name]" class="img-fluid">
      <!-- OR for video projects, use: -->
      <!-- <video controls class="img-fluid" style="width: 100%; height: auto;">
        <source src="assets/img/portfolio/[PROJECT_VIDEO.mp4]" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
      <div class="portfolio-overlay">
        <a href="assets/img/portfolio/[PROJECT_SCREENSHOT.png]" class="glightbox portfolio-lightbox"><i class="bi bi-plus"></i></a>
        <a href="portfolio-details.html?project=[PROJECT_ID]" class="portfolio-details-link"><i class="bi bi-link"></i></a>
      </div>
    </div>
    <div class="portfolio-info">
      <h4>[PROJECT NAME] - [YEAR]</h4>
      <p class="project-type">[SEMESTER/PHASE: e.g., 2024 Spring, Final Project]</p>
      <div class="portfolio-tags">
        <span class="tag">[Language]</span>
        <span class="tag">[Framework]</span>
      </div>
      <p class="project-description" style="font-size: 0.9rem; margin-top: 8px;">
        [1-2 sentence description of the project purpose and what it does]
      </p>
    </div>
  </div>
</div>
```

### Example Project #1: E-Commerce Web Application

```html
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-technology">
  <div class="portfolio-card">
    <div class="portfolio-img">
      <img src="assets/img/portfolio/ecommerce-app.png" alt="E-Commerce Web Application" class="img-fluid">
      <div class="portfolio-overlay">
        <a href="assets/img/portfolio/ecommerce-app.png" class="glightbox portfolio-lightbox"><i class="bi bi-plus"></i></a>
        <a href="portfolio-details.html?project=ecommerce" class="portfolio-details-link"><i class="bi bi-link"></i></a>
      </div>
    </div>
    <div class="portfolio-info">
      <h4>E-Commerce Platform - 2024</h4>
      <p class="project-type">Full-Stack Development Project</p>
      <div class="portfolio-tags">
        <span class="tag">React.js</span>
        <span class="tag">Node.js</span>
        <span class="tag">MongoDB</span>
        <span class="tag">RESTful API</span>
      </div>
      <p class="project-description" style="font-size: 0.9rem; margin-top: 8px;">
        A fully functional e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Features include product filtering, order tracking, and admin dashboard for inventory management.
      </p>
    </div>
  </div>
</div>
```

**For detailed project page content, add this info to portfolio-details.html:**

```
PROJECT NAME: E-Commerce Web Application
YEAR: 2024
DURATION: 4 months (Academic Semester Project)

DESCRIPTION:
Developed a full-featured e-commerce web application as a comprehensive software engineering project. The platform enables users to browse products, manage shopping carts, process orders, and track deliveries. The application demonstrates proficiency in frontend and backend development, database design, and API integration.

PURPOSE:
The primary objective was to create a scalable, secure, and user-friendly online shopping platform that demonstrates real-world web development practices. The project focused on implementing CRUD operations, user authentication, payment gateway integration, and responsive design principles.

TECHNOLOGIES USED:
- Frontend: React.js, Redux for state management, Material-UI, Axios
- Backend: Node.js, Express.js framework
- Database: MongoDB with Mongoose ODM
- Authentication: JWT (JSON Web Tokens)
- Payment Gateway: Stripe API
- Tools: Git, GitHub, Postman, MongoDB Atlas

MY ROLE:
Solo Developer - Responsible for the entire development lifecycle from requirements analysis to deployment. Designed database schemas, developed RESTful APIs, implemented frontend components, and integrated third-party services.

KEY FEATURES:
- User Registration & Authentication (JWT-based)
- Product Catalog with Advanced Filtering & Search
- Shopping Cart Management with Real-time Updates
- Secure Checkout & Payment Processing
- Order Management System
- Admin Dashboard for Product & Inventory Management
- Responsive Mobile-Friendly Design
- Email Notifications for Order Updates

LEARNING OUTCOMES:
- Mastered full-stack development workflow and MERN stack architecture
- Gained hands-on experience with API design and RESTful principles
- Implemented secure authentication and authorization mechanisms
- Developed proficiency in state management for complex applications
- Learned payment gateway integration and secure transaction handling
- Enhanced skills in responsive web design and user experience optimization
- Understood database design, indexing, and query optimization

CHALLENGES & SOLUTIONS:
- Challenge: Managing complex state across multiple components
  Solution: Implemented Redux for centralized state management, improving code maintainability
- Challenge: Optimizing database queries for fast product search
  Solution: Created proper indexing and implemented pagination for large datasets
- Challenge: Ensuring secure payment transactions
  Solution: Implemented PCI compliance standards and used established payment gateway APIs

[Insert screenshot here] - Shows homepage with product listings
[Insert screenshot here] - Demonstrates shopping cart interface
[Insert screenshot here] - Admin dashboard interface
```

### Example Project #2: Task Management System

```html
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy">
  <div class="portfolio-card">
    <div class="portfolio-img">
      <img src="assets/img/portfolio/task-manager.png" alt="Task Management System" class="img-fluid">
      <div class="portfolio-overlay">
        <a href="assets/img/portfolio/task-manager.png" class="glightbox portfolio-lightbox"><i class="bi bi-plus"></i></a>
        <a href="portfolio-details.html?project=taskmanager" class="portfolio-details-link"><i class="bi bi-link"></i></a>
      </div>
    </div>
    <div class="portfolio-info">
      <h4>Task Management System - 2024</h4>
      <p class="project-type">Collaborative Group Project (3 Members)</p>
      <div class="portfolio-tags">
        <span class="tag">Java</span>
        <span class="tag">OOP</span>
        <span class="tag">MySQL</span>
        <span class="tag">GUI</span>
      </div>
      <p class="project-description" style="font-size: 0.9rem; margin-top: 8px;">
        A desktop-based task and project management application built with Java. Allows teams to create projects, assign tasks, track progress, and collaborate on deadlines. Implements multi-user support and role-based access control.
      </p>
    </div>
  </div>
</div>
```

**For portfolio-details.html:**

```
PROJECT NAME: Task Management System
YEAR: 2024
DURATION: 2.5 months (Group Project)

DESCRIPTION:
Collaborated with two teammates to develop a comprehensive task and project management desktop application. The system enables organizations to manage multiple projects, assign tasks to team members, track progress, set milestones, and generate performance reports.

PURPOSE:
The project aimed to apply object-oriented programming principles, implement database systems, and develop a user-friendly graphical interface for project management. It demonstrates understanding of software design patterns, database normalization, and team-based development using version control.

TECHNOLOGIES USED:
- Programming Language: Java
- GUI Framework: JavaFX / Swing
- Database: MySQL
- ORM: Hibernate
- Version Control: Git
- Development Tools: IntelliJ IDEA, Eclipse

MY ROLE:
Backend Developer & Database Designer
- Designed and implemented the MySQL database schema with proper normalization
- Developed core business logic using object-oriented programming principles
- Implemented authentication and authorization modules
- Created API interfaces for frontend-backend communication
- Performed database optimization and query tuning

TEAM ROLES:
- Backend Developer (Me): Database design, business logic, API development
- Frontend Developer: GUI development, user interface design
- QA/Documentation: Testing, documentation, deployment

KEY FEATURES:
- Project Creation & Management
- Task Assignment with Priority Levels
- Progress Tracking & Status Updates
- Deadline Management with Notifications
- Team Member Management & Role-Based Access
- Reports Generation (Gantt Charts, Progress Reports)
- Search & Filter Functionality
- Data Persistence with MySQL Database

LEARNING OUTCOMES:
- Deepened understanding of SOLID principles and design patterns (MVC architecture)
- Developed expertise in relational database design and normalization
- Improved collaboration skills through Git version control and team communication
- Gained experience with GUI development frameworks
- Learned best practices for multi-user application development
- Enhanced skills in SQL query optimization and database indexing

CHALLENGES & SOLUTIONS:
- Challenge: Synchronizing data across multiple user sessions
  Solution: Implemented database transactions and connection pooling for consistency
- Challenge: Designing scalable database schema for growing data
  Solution: Applied normalization principles and created appropriate indexes
- Challenge: Coordinating work between team members
  Solution: Used Git branching strategy and regular code reviews

[Insert screenshot here] - Project dashboard view
[Insert screenshot here] - Task assignment interface
[Insert screenshot here] - Progress tracking visualization
```

### Example Project #3: Machine Learning Classifier

```html
<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-finance">
  <div class="portfolio-card">
    <div class="portfolio-img">
      <img src="assets/img/portfolio/ml-classifier.png" alt="ML Classifier Project" class="img-fluid">
      <div class="portfolio-overlay">
        <a href="assets/img/portfolio/ml-classifier.png" class="glightbox portfolio-lightbox"><i class="bi bi-plus"></i></a>
        <a href="portfolio-details.html?project=mlclassifier" class="portfolio-details-link"><i class="bi bi-link"></i></a>
      </div>
    </div>
    <div class="portfolio-info">
      <h4>Machine Learning Classifier - 2024</h4>
      <p class="project-type">Data Science & AI Project</p>
      <div class="portfolio-tags">
        <span class="tag">Python</span>
        <span class="tag">TensorFlow</span>
        <span class="tag">Pandas</span>
        <span class="tag">Jupyter</span>
      </div>
      <p class="project-description" style="font-size: 0.9rem; margin-top: 8px;">
        Developed a machine learning model to classify iris flower species using supervised learning algorithms. Includes data preprocessing, model training, evaluation, and visualization of results with 95% accuracy.
      </p>
    </div>
  </div>
</div>
```

**For portfolio-details.html:**

```
PROJECT NAME: Iris Species Classification - Machine Learning Model
YEAR: 2024
DURATION: 6 weeks (Academic Assignment)

DESCRIPTION:
Implemented a machine learning classification model to predict iris flower species based on physical measurements. The project involved data preprocessing, exploratory data analysis, model training and evaluation, and result visualization.

PURPOSE:
To apply fundamental machine learning concepts including data preprocessing, feature engineering, model selection, and performance evaluation. The project demonstrates understanding of supervised learning algorithms and their practical application.

TECHNOLOGIES USED:
- Programming Language: Python 3.x
- Data Processing: Pandas, NumPy
- Machine Learning: Scikit-learn
- Deep Learning: TensorFlow/Keras
- Data Visualization: Matplotlib, Seaborn
- Notebook Environment: Jupyter Notebook

MY ROLE:
Data Scientist - Solo Project
- Conducted exploratory data analysis (EDA)
- Implemented data preprocessing and feature scaling
- Developed and trained multiple classifiers
- Evaluated model performance using cross-validation
- Created visualizations and documentation

METHODOLOGY:
- Dataset: Iris dataset (150 samples, 4 features)
- Data Split: 80% training, 20% testing
- Models Tested: Logistic Regression, Decision Tree, Random Forest, SVM, Neural Network
- Performance Metric: Accuracy, Precision, Recall, F1-Score

KEY ACHIEVEMENTS:
- Achieved 95% classification accuracy with Random Forest model
- Performed comprehensive feature importance analysis
- Generated confusion matrices and ROC curves
- Created interactive visualizations for result interpretation

LEARNING OUTCOMES:
- Mastered data preprocessing techniques: feature scaling, handling missing values
- Understood supervised learning algorithms and their hyperparameter tuning
- Developed proficiency with scikit-learn library
- Learned model evaluation metrics and cross-validation techniques
- Gained skills in data visualization and result interpretation
- Improved understanding of overfitting and regularization concepts

[Insert screenshot here] - EDA visualization
[Insert screenshot here] - Model performance comparison
[Insert screenshot here] - Confusion matrix
```

---

## 4. RESUME / CV (resume.html)

### Education Section

```html
<h3 class="resume-title">Education</h3>

<div class="resume-content">
  <article class="education-item">
    <h4>Bachelor of Science in Computer Science</h4>
    <h5>[Expected Graduation: Month, Year]</h5>
    <p class="institution"><em>[University Name], [City, Country]</em></p>
    <p>
      Major: Computer Science | GPA: [Your GPA/3.8 out of 4.0]
      Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Software Engineering, Discrete Mathematics, Computer Networks
    </p>
  </article>

  <article class="education-item">
    <h4>Specialized Certifications</h4>
    <h5>2024</h5>
    <p class="institution"><em>[Certification Name - e.g., Google Cloud Associate Cloud Engineer]</em></p>
    <p>
      Completed comprehensive training in cloud infrastructure, application deployment, and cloud security. Demonstrated proficiency in modern DevOps practices and scalable application architecture.
    </p>
  </article>
</div>
```

### Technical Skills Section

```html
<h3 class="resume-title">Technical Skills</h3>

<div class="resume-content">
  <div class="skill-item">
    <h4>Programming Languages</h4>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p style="font-size: 0.9rem; margin-top: 5px;">Java, Python, JavaScript, C++, SQL, HTML5, CSS3</p>
  </div>

  <div class="skill-item">
    <h4>Web Development & Frameworks</h4>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p style="font-size: 0.9rem; margin-top: 5px;">React.js, Node.js, Express.js, Bootstrap, RESTful APIs, AJAX</p>
  </div>

  <div class="skill-item">
    <h4>Databases & Data Management</h4>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p style="font-size: 0.9rem; margin-top: 5px;">MySQL, MongoDB, Firebase, Database Design, Query Optimization</p>
  </div>

  <div class="skill-item">
    <h4>Tools & Technologies</h4>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p style="font-size: 0.9rem; margin-top: 5px;">Git/GitHub, VS Code, Postman, Docker, CI/CD, Linux</p>
  </div>

  <div class="skill-item">
    <h4>Software Engineering & Methodology</h4>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p style="font-size: 0.9rem; margin-top: 5px;">OOP Design Patterns, Agile/Scrum, Unit Testing, Clean Code, SOLID Principles</p>
  </div>

  <div class="skill-item">
    <h4>Soft Skills</h4>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p style="font-size: 0.9rem; margin-top: 5px;">Problem-Solving, Team Collaboration, Communication, Project Management, Adaptability</p>
  </div>
</div>
```

### Academic Projects Summary

```html
<h3 class="resume-title">Academic Projects</h3>

<div class="resume-content">
  <article class="project-item">
    <h4>E-Commerce Web Application</h4>
    <h5>2024 | Solo Project</h5>
    <ul>
      <li>Developed full-stack MERN application with secure payment gateway integration</li>
      <li>Implemented JWT-based authentication and role-based access control</li>
      <li>Designed MongoDB database schema and optimized queries for performance</li>
      <li>Achieved 95% code test coverage using Jest and React Testing Library</li>
    </ul>
  </article>

  <article class="project-item">
    <h4>Task Management System</h4>
    <h5>2024 | Group Project (3 Team Members)</h5>
    <ul>
      <li>Backend Developer: Designed relational database and implemented business logic in Java</li>
      <li>Created RESTful API endpoints for task and project management operations</li>
      <li>Implemented multi-user authentication and role-based authorization</li>
      <li>Generated project reports and progress visualizations</li>
    </ul>
  </article>

  <article class="project-item">
    <h4>Machine Learning Classifier</h4>
    <h5>2024 | Academic Assignment</h5>
    <ul>
      <li>Built supervised learning model with 95% classification accuracy</li>
      <li>Performed comprehensive exploratory data analysis and feature engineering</li>
      <li>Compared multiple ML algorithms: Logistic Regression, Decision Tree, Random Forest, SVM</li>
      <li>Created visualizations for model evaluation and result interpretation</li>
    </ul>
  </article>
</div>
```

### Professional Attributes

```html
<h3 class="resume-title">Professional Attributes</h3>

<div class="resume-content">
  <ul>
    <li><strong>Analytical Mindset:</strong> Strong ability to break down complex problems and develop efficient solutions using computational thinking</li>
    <li><strong>Version Control Expertise:</strong> Proficient with Git workflows, branching strategies, and collaborative development practices</li>
    <li><strong>Code Quality:</strong> Committed to writing clean, maintainable, well-documented code following industry best practices</li>
    <li><strong>Continuous Learning:</strong> Actively engaged in self-directed learning through online courses, tutorials, and tech community participation</li>
    <li><strong>Collaborative Development:</strong> Experienced in team-based projects with effective communication and conflict resolution</li>
    <li><strong>Testing & Debugging:</strong> Proficient in unit testing, integration testing, and systematic debugging methodologies</li>
  </ul>
</div>
```

---

## 5. SKILLS & TOOLS (services.html) - Update Existing Service Cards

### Service #1: Web Development

```html
<h3>Full-Stack Web Development</h3>
<p>
  I specialize in building modern, responsive web applications using the latest frameworks and best practices. With expertise in both frontend and backend development, I can deliver complete web solutions from concept to deployment. My stack includes React.js, Node.js, Express, and various databases.
</p>
<a href="service-details.html" class="service-link">
  <span>Learn More</span>
  <i class="bi bi-arrow-right"></i>
</a>
```

### Service #2: Database Design & Optimization

```html
<h3>Database Design & Optimization</h3>
<p>
  I design efficient, scalable database architectures and optimize queries for performance. My expertise includes relational databases (MySQL, PostgreSQL), NoSQL databases (MongoDB), and advanced indexing strategies. I ensure data integrity, security, and optimal query performance.
</p>
<a href="service-details.html" class="service-link">
  <span>Learn More</span>
  <i class="bi bi-arrow-right"></i>
</a>
```

### Service #3: API Development

```html
<h3>RESTful API Development</h3>
<p>
  I develop robust, scalable RESTful APIs that serve as the backbone for modern applications. My expertise includes API design, authentication/authorization, request validation, error handling, and comprehensive documentation. I follow OpenAPI/Swagger standards for clear API specifications.
</p>
<a href="service-details.html" class="service-link">
  <span>Learn More</span>
  <i class="bi bi-arrow-right"></i>
</a>
```

### Service #4: Software Solutions Consulting

```html
<h3>Software Solutions & Technical Consulting</h3>
<p>
  I provide technical consultation for software architecture, design patterns, and technology selection. I help analyze requirements, propose scalable solutions, and establish best practices for code quality, testing, and deployment. My goal is to ensure technical excellence and long-term maintainability.
</p>
<a href="service-details.html" class="service-link">
  <span>Learn More</span>
  <i class="bi bi-arrow-right"></i>
</a>
```

### Service #5: Testing & Quality Assurance

```html
<h3>Software Testing & QA</h3>
<p>
  I implement comprehensive testing strategies including unit testing, integration testing, and end-to-end testing. I use modern testing frameworks (Jest, Pytest, JUnit) to ensure code quality and identify bugs early. I'm also experienced in test automation and continuous integration practices.
</p>
<a href="service-details.html" class="service-link">
  <span>Learn More</span>
  <i class="bi bi-arrow-right"></i>
</a>
```

### Service #6: Cloud & DevOps

```html
<h3>Cloud Deployment & DevOps</h3>
<p>
  I deploy and manage applications on cloud platforms (AWS, Google Cloud, Azure) with focus on scalability, reliability, and security. I implement CI/CD pipelines, containerization with Docker, infrastructure-as-code, and monitoring solutions for optimal application performance.
</p>
<a href="service-details.html" class="service-link">
  <span>Learn More</span>
  <i class="bi bi-arrow-right"></i>
</a>
```

---

## 6. CERTIFICATES & TRAININGS

### Certification Template (Copy & Paste as Needed)

```html
<!-- Certification Card Template -->
<div class="certification-item" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #0d6efd; background: #f8f9fa;">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h4 style="margin-bottom: 5px;">[CERTIFICATION NAME]</h4>
      <p style="margin: 5px 0; color: #666;">
        <i class="bi bi-calendar-event"></i> Issued: [Month, Year] | 
        <i class="bi bi-building"></i> Issuer: [Organization/Platform]
      </p>
      <p style="margin-top: 10px;">
        [1-2 sentence description of what the certification covers and its relevance to your CS career]
      </p>
      <p style="font-size: 0.9rem; color: #0d6efd; margin-top: 10px;">
        Credential ID: [Credential ID] | 
        <a href="#" style="color: #0d6efd; text-decoration: none;">View Certificate <i class="bi bi-arrow-up-right"></i></a>
      </p>
    </div>
    <div class="col-md-4 text-md-end">
      <img src="assets/img/profile/[certification-badge.png]" alt="[Certification Name]" style="max-width: 120px; height: auto;">
    </div>
  </div>
</div>
```

### Example Certifications to Add

**Example 1: Google Cloud Associate Cloud Engineer**

```html
<div class="certification-item" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #0d6efd; background: #f8f9fa;">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h4 style="margin-bottom: 5px;">Google Cloud Associate Cloud Engineer</h4>
      <p style="margin: 5px 0; color: #666;">
        <i class="bi bi-calendar-event"></i> Issued: December 2024 | 
        <i class="bi bi-building"></i> Issuer: Google Cloud
      </p>
      <p style="margin-top: 10px;">
        Demonstrates proficiency in deploying applications, implementing security controls, managing cloud resources, and optimizing costs on Google Cloud Platform. Covers GCP services, networking, storage, and compute infrastructure.
      </p>
      <p style="font-size: 0.9rem; color: #0d6efd; margin-top: 10px;">
        Credential ID: GCP-ACE-2024-12345 | 
        <a href="https://www.credential.net" style="color: #0d6efd; text-decoration: none;">View Certificate <i class="bi bi-arrow-up-right"></i></a>
      </p>
    </div>
  </div>
</div>
```

**Example 2: The Complete JavaScript Course 2024**

```html
<div class="certification-item" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #28a745; background: #f8f9fa;">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h4 style="margin-bottom: 5px;">The Complete JavaScript Course 2024: From Zero to Expert</h4>
      <p style="margin: 5px 0; color: #666;">
        <i class="bi bi-calendar-event"></i> Issued: October 2024 | 
        <i class="bi bi-building"></i> Issuer: Udemy
      </p>
      <p style="margin-top: 10px;">
        Comprehensive JavaScript training covering ES6+, async programming, DOM manipulation, and modern development practices. Includes 45+ hours of video content with real-world projects demonstrating advanced JavaScript concepts and best practices.
      </p>
      <p style="font-size: 0.9rem; color: #0d6efd; margin-top: 10px;">
        Credential ID: UC-12345678 | 
        <a href="https://www.udemy.com/certificate" style="color: #0d6efd; text-decoration: none;">View Certificate <i class="bi bi-arrow-up-right"></i></a>
      </p>
    </div>
  </div>
</div>
```

**Example 3: AWS Certified Cloud Practitioner**

```html
<div class="certification-item" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #FF9900; background: #f8f9fa;">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h4 style="margin-bottom: 5px;">AWS Certified Cloud Practitioner</h4>
      <p style="margin: 5px 0; color: #666;">
        <i class="bi bi-calendar-event"></i> Issued: August 2024 | 
        <i class="bi bi-building"></i> Issuer: Amazon Web Services
      </p>
      <p style="margin-top: 10px;">
        Validates foundational knowledge of AWS cloud services, including EC2, S3, RDS, Lambda, and IAM. Demonstrates understanding of cloud economics, security, compliance, and AWS Well-Architected Framework principles.
      </p>
      <p style="font-size: 0.9rem; color: #0d6efd; margin-top: 10px;">
        Credential ID: AWS-CLF-12345 | Expires: August 2027
      </p>
    </div>
  </div>
</div>
```

**Example 4: Oracle Java Programmer Certified Associate**

```html
<div class="certification-item" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #E74C3C; background: #f8f9fa;">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h4 style="margin-bottom: 5px;">Oracle Java Programmer Certified Associate</h4>
      <p style="margin: 5px 0; color: #666;">
        <i class="bi bi-calendar-event"></i> Issued: June 2024 | 
        <i class="bi bi-building"></i> Issuer: Oracle
      </p>
      <p style="margin-top: 10px;">
        Demonstrates competency in Java programming fundamentals including object-oriented programming, exception handling, collections framework, and Java streams API. Validates ability to write clean, efficient Java code following industry standards.
      </p>
      <p style="font-size: 0.9rem; color: #0d6efd; margin-top: 10px;">
        Credential ID: 1Z0-808-2024-123456 | 
        <a href="https://www.oracle.com/credential" style="color: #0d6efd; text-decoration: none;">View Certificate <i class="bi bi-arrow-up-right"></i></a>
      </p>
    </div>
  </div>
</div>
```

---

## 7. CONTACT / CONNECT (contact.html)

### Contact Info Section

```html
<h3>Contact Information</h3>
<p>
  I'm always open to discussions about software development, collaborative projects, and career opportunities. Feel free to reach out via any of the following channels. I typically respond within 24 hours.
</p>

<!-- Email -->
<div class="info-item" data-aos="fade-up" data-aos-delay="300">
  <div class="icon-box">
    <i class="bi bi-envelope"></i>
  </div>
  <div class="content">
    <h4>Email Address</h4>
    <p>[your.email@gmail.com]</p>
    <p style="font-size: 0.9rem; color: #666;">Best for: Professional inquiries, project opportunities</p>
  </div>
</div>

<!-- Phone (Optional) -->
<div class="info-item" data-aos="fade-up" data-aos-delay="400">
  <div class="icon-box">
    <i class="bi bi-telephone"></i>
  </div>
  <div class="content">
    <h4>Phone Number</h4>
    <p>+1 [XXX] [XXX]-[XXXX]</p>
    <p style="font-size: 0.9rem; color: #666;">Available for calls: Monday-Friday, 2 PM - 6 PM (UTC+8)</p>
  </div>
</div>

<!-- Location -->
<div class="info-item" data-aos="fade-up" data-aos-delay="500">
  <div class="icon-box">
    <i class="bi bi-geo-alt"></i>
  </div>
  <div class="content">
    <h4>Location</h4>
    <p>[City, Country]</p>
    <p style="font-size: 0.9rem; color: #666;">Available for local and remote opportunities</p>
  </div>
</div>
```

### Contact Form Description

```html
<h3>Get In Touch</h3>
<p>
  Have a question, project proposal, or just want to connect? Send me a message and I'll get back to you as soon as possible. Whether it's about collaboration, mentorship, or opportunities, I'd love to hear from you!
</p>
```

### Social Links Section (Update the header social links)

```html
<!-- Update header social links to: -->
<div class="header-social-links">
  <a href="https://github.com/[your-username]" class="github" title="GitHub"><i class="bi bi-github"></i></a>
  <a href="https://linkedin.com/in/[your-profile]" class="linkedin" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
  <a href="mailto:your.email@gmail.com" class="email" title="Email"><i class="bi bi-envelope"></i></a>
  <a href="https://twitter.com/[your-handle]" class="twitter" title="Twitter"><i class="bi bi-twitter-x"></i></a>
</div>
```

---

## CUSTOMIZATION GUIDELINES

### For Each Section, Replace These Placeholders:

**Personal Info:**
- `[YOUR FULL NAME]`
- `[Your Program Year]` (e.g., "4th Year", "Final Year")
- `[University Name]`
- `[City/Region]`
- `[Your GPA]`

**Skills:**
- Adjust the programming languages based on your actual skills
- Modify the progress bar values (aria-valuenow) from 0-100 to reflect your proficiency
- Keep only the tools/frameworks you actually know

**Projects:**
- Add project names, years, and descriptions relevant to your coursework
- Use the template provided and copy-paste for each additional project
- Include actual screenshot filenames in the src attributes
- Update technologies, roles, and achievements with real information

**Certifications:**
- Add actual certification names and dates
- Include credential IDs if available
- Add links to verify certificates when possible

**Contact:**
- Replace email with your actual email address
- Add your LinkedIn, GitHub, and Twitter profiles
- Include your actual location

---

## NOTES FOR FLEXIBLE PROJECTS SECTION

✅ **The projects section is fully flexible!** You can:
- Add as many projects as you want
- Remove projects you don't need
- Change the filter categories (filter-strategy, filter-finance, etc.)
- Add projects with images OR videos
- Include project descriptions, technologies, and links

✅ **Screenshot Placeholder Instructions:**
- Save your project screenshots/videos in: `assets/img/portfolio/`
- Use descriptive filenames: `ecommerce-app.png`, `task-manager.png`, etc.
- Supported formats: PNG, JPG, MP4, WebM, MOV
- Recommended size: 600px × 400px for consistency

✅ **To add a new project:**
1. Copy the entire `<div class="col-lg-4...">` block
2. Paste it before the closing `</div>` of the isotope-container
3. Update: project name, screenshot filename, description, technologies
4. Create a new category in the filter menu if needed (e.g., `filter-capstone`)

---

## FINAL TIPS

1. **Personalize Content:** Replace all placeholder text with your actual information
2. **Keep It Professional:** Use formal language suitable for academic/professional contexts
3. **Be Specific:** Include technology names, frameworks, and methodologies
4. **Show Progression:** Organize projects chronologically and show skill growth
5. **Add Real Details:** Use actual grades, dates, and achievement numbers
6. **Proofread:** Check for spelling and grammar before publishing
7. **Update Regularly:** Keep portfolio current with new projects and certifications
8. **Include Screenshots:** Add visual representations of your projects and work
9. **Professional Email:** Use a professional email format (firstname.lastname@email.com)
10. **Mobile-Friendly:** Test the portfolio on mobile devices to ensure responsiveness

---

**Version:** 1.0 | **Date:** January 2026 | **Status:** Ready for Customization
