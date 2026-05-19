export const languagesList = {
	en: 'English',
	es: 'Español',
};

export const labels = {
  en: {
    //** Meta Tags */
    'index.title': 'Carlos Velasquez — Full Stack Developer | Node.js, NestJS, React',
    'index.description':
      'Full Stack Developer with 5+ years building production web platforms with Node.js, NestJS, React, Next.js and PostgreSQL. End-to-end ownership from API to UI.',
    'index.keywords':
      'Full Stack Developer, Software Engineer, Node.js, NestJS, React, Next.js, TypeScript, PostgreSQL, REST API, Docker, Carlos Velasquez',

    //** Navigation Bar */
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',

    //** Hero Section */
    'hero.mission_control': 'MISSION CONTROL',
    'hero.full_stack_explorer': 'FULL STACK EXPLORER',
    'hero.code_astronaut': 'CODE ASTRONAUT',
    'hero.space_developer': 'SPACE DEVELOPER',
    'hero.description':
      'Exploring the digital universe one line of code at a time. Engineering resilient applications that push the boundaries of what production systems can do.',
    'hero.h1_role': 'Full Stack Developer',
    'hero.years_badge': '5+ years shipping',
    'hero.stack_badge': 'Node · Nest · React',
    'hero.launch_mission': 'Download Mission Dossier',
    'hero.summary': 'Full Stack Developer (5 years) — I build scalable web applications using Node.js/NestJS, React/Next.js and PostgreSQL. I focus on reliable APIs, clean architecture and delivering business-driven end-to-end solutions.',

    //** About Section */
    'about.title': 'Who I Am',
    'about.subtitle': 'MISSION BRIEFING',

    //** Technical Section */
    'tech.title': 'Technical Capabilities',
    'tech.subtitle': 'NAVIGATION SYSTEMS',

    //** Skills Section */
    'project.title': 'Featured Projects',
    'project.subtitle': 'SPACE MISSIONS',
    'project.view_project': 'Open Project',
    'project.view_code': 'GitHub Repository',
    'project.modal.close': 'Close project details',
    'project.modal.stack': 'Tech Orbit',
    'project.modal.view_live': 'Launch Live Site',
    'project.modal.view_code': 'View Source',
    'project.equasystems.title': 'Equa Systems — Marketing Site',
    'project.equasystems.description':
      'Designed and shipped the corporate site for Equa Systems. Optimized for Core Web Vitals, fully responsive, and structured to surface the service catalog and case studies for prospective clients.',

    //* Work Experience Titles */
    'experience.title': 'Career Journey',
    'experience.subtitle': 'PROFESSIONAL ODYSSEY',

    //* Work Experience Section */
    'experience.equasystems.role': 'Full Stack Developer',
    'experience.equasystems.period': 'August 2020 - Present',
    'experience.equasystems.description':
      "Design and ship web applications for Equa Systems' clients across multiple verticals. Partner with product, design, and QA to scope features, implement them end-to-end, and own delivery through to production deployment.",
    'experience.equasystems.summary':
      'Led front-to-back implementation of multiple client platforms, shipped features that measurably lifted engagement, and tuned application performance from API response times through to render.',

    'experience.softdaniv.role': 'Software Developer',
    'experience.softdaniv.period': 'July 2019 - January 2021',
    'experience.softdaniv.description':
      'Built enterprise software with a backend and data focus. Worked directly with clients to translate operational requirements into shipped features, and owned database design and query performance for the systems I delivered.',
    'experience.softdaniv.summary':
      "Delivered projects on schedule across the team's portfolio, optimized critical queries to cut response times, and partnered with stakeholders through delivery and follow-on iterations.",

    //** Certificates Section */
    'certificate.title': 'Certificates & Courses',
    'certificate.subtitle': 'ASTRO ACHIEVEMENTS',
    'certificate.hacker_rank_node_basic.title': 'Node.js (Basic) — HackerRank',
    'certificate.hacker_rank_node_basic.description':
      'HackerRank skill assessment validating Node.js fundamentals: modules, asynchronous I/O, file system access, and HTTP server primitives.',
    'certificate.udemy_sql_advance.title': 'SQL Server: Advanced Programming — Udemy',
    'certificate.udemy_sql_advance.description':
      'Advanced SQL Server programming: stored procedures, indexing strategy, transaction control, and query performance tuning. Instructor: Mariano Puglisi.',
    'certificate.devtalles.title': 'Clean Architecture in Node.js — DevTalles',
    'certificate.devtalles.description':
      'Building production REST APIs in Node.js with Clean Architecture: dependency inversion, layered separation, and JWT-based authentication. Instructor: Fernando Herrera.',
    'certificate.view_certificate': 'View Certificate',
    'certificate.devtalles.nestjs.title': 'NestJS — The Complete Guide',
    'certificate.devtalles.nestjs.description':
      'Comprehensive NestJS coverage: modular architecture, guards, interceptors, dependency injection, and database integration. Instructor: Fernando Herrera.',
    'certificate.hacker_rank_node_intermediate.title': 'Node.js (Intermediate) — HackerRank',
    'certificate.hacker_rank_node_intermediate.description':
      'HackerRank skill assessment validating intermediate Node.js: streams, event-loop internals, error handling, and asynchronous patterns.',
    'certificate.cloud_native_academy.devsecops.title': 'DevSecOps with GitHub Actions',
    'certificate.cloud_native_academy.devsecops.description':
      'Implementing secure CI/CD pipelines with GitHub Actions: vulnerability scanning, secret management, and supply-chain verification. Instructor: Aldo Trucios Cornejo.',

    //** Contact Section */
    'contact.title': 'Keep in Touch',
    'contact.subtitle': 'COMMUNICATION PORTAL',
    'contact.form.name': 'CALL SIGN (NAME)',
    'contact.form.name_holder': 'Enter your name...',
    'contact.form.email': 'TRANSMISSION FREQUENCY (EMAIL)',
    'contact.form.email_holder': 'Enter your email...',
    'contact.form.message': 'MESSAGE CONTENT',
    'contact.form.message_holder': 'Enter your message...',
    'contact.form.send_message': 'Send Message',
    'contact.email.success.title': 'Mission Accomplished! 🚀',
    'contact.email.success.description':
      "Your message reached Mission Control. I'll respond as soon as possible — thanks for reaching out.",
    'contact.email.error.title': 'Houston, We Have a Problem! ❌',
    'contact.email.error.optional.message': 'There was an issue sending your message. Please try again later.',
    'contact.email.wait.title': 'Hold Your Rockets! ⏳',
    'contact.email.wait.part1': 'Please wait',
    'contact.email.wait.part2': 'seconds before sending another message.',
    'contact.email.connection.title': 'Lost in Space... 🌌',
    'contact.email.connection.description':
      "Your message couldn't be transmitted to Mission Control. Please check your internet connection and try again.",
    'contact.email.sending.title': 'Sending Transmission... 🚀',
    'contact.email.sending.description':
      'Your message is being transmitted to Mission Control. Please wait for confirmation.',
    'contact.email.validation.name': 'Name cannot be empty! 👨‍🚀',
    'contact.email.validation.email': 'Please enter a valid email address! 📧',
    'contact.email.validation.message': 'Message cannot be empty! 📝',
    'contact.email.validation.form': 'Form elements not found. Please refresh the page.',
    'contact.email.validation.error': 'Please check your input! 🚨',

    //** Footer Section */
    'footer.rights': 'All rights reserved.',
    'footer.crafted': 'Crafted with 💙 in the digital cosmos',
    'footer.navigation.home': 'Home',
    'footer.navigation.skills': 'Technical Capabilities',
    'footer.navigation.projects': 'Featured Projects',
    'footer.navigation.certificates': 'Certificates & Courses',
    'footer.navigation.contact': 'Keep in Touch',
    'footer.projects.equasystem': 'Equasystem WebSite',
    'footer.certificates.hacker_rank_node_basic': 'NodeJs (Basic) - HackerRank',
    'footer.certificates.udemy_sql_advance': 'SQL Server (Advance) - Udemy',
    'footer.certificates.devtalles.node_clean_architecture': 'NodeJs - DevTalles',
    'footer.certificates.devtalles.nestjs': 'NestJs - DevTalles',
    'footer.certificates.hacker_rank_node_intermediate': 'Node.js (Intermediate) - HackerRank',
    'footer.certificates.cloud_native_academy.devsecops': 'DevSecOps - Cloud Native Academy',
    'footer.navigation.title': 'NAVIGATION',
    'footer.project.title': 'PROJECTS',
    'footer.certificate.title': 'CERTIFICATES',
    'footer.experience.title': 'EXPERIENCE',

    //** Error Section */
    'error.title': 'Houston, we have a problem.',
    'error.description':
      "The coordinates you're looking for are lost in space. Let's navigate back to a known star system.",
    'error.button': 'Return to Mission Control',

    //** Roadmap Section */
    'roadmap.title': 'ROADMAP CHALLENGES',
    'roadmap.subtitle': 'SKILL MISSIONS',
    'roadmap.task_tracker.title': 'Task Tracker CLI',
    'roadmap.task_tracker.description':
      'A command-line task management application built with Node.js. Features include task creation, listing, updating, and deletion with a focus on efficient task organization and status tracking.',
    'roadmap.url_shortener.title': 'URL Shortening Service',
    'roadmap.url_shortener.description':
      'A URL shortening service that transforms long URLs into concise, shareable links. Built with modern backend technologies and includes features like custom aliases and click tracking.',
    'roadmap.fitness_tracker.title': 'Fitness Workout Tracker',
    'roadmap.fitness_tracker.description':
      'A comprehensive fitness tracking application that helps users manage their workout routines, track progress, and achieve their fitness goals. Features include workout planning, progress tracking, and performance analytics.'
  },
  es: {
    //** Meta Tags */
    'index.title': 'Carlos Velasquez — Desarrollador Full Stack | Node.js, NestJS, React',
    'index.description':
      'Desarrollador Full Stack con más de 5 años construyendo plataformas web en producción con Node.js, NestJS, React, Next.js y PostgreSQL. Responsable end-to-end, desde la API hasta la UI.',
    'index.keywords':
      'Desarrollador Full Stack, Ingeniero de Software, Node.js, NestJS, React, Next.js, TypeScript, PostgreSQL, REST API, Docker, Carlos Velasquez',

    //** Navigation Bar */
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.certificates': 'Certificados',
    'nav.contact': 'Contacto',

    //** Hero Section */
    'hero.mission_control': 'CONTROL DE MISIÓN',
    'hero.full_stack_explorer': 'EXPLORADOR FULL STACK',
    'hero.code_astronaut': 'ASTRONAUTA DEL CÓDIGO',
    'hero.space_developer': 'DESARROLLADOR ESPACIAL',
    'hero.description':
      'Explorando el universo digital una línea de código a la vez. Construyendo aplicaciones estelares que empujan los límites de los sistemas en producción.',
    'hero.h1_role': 'Desarrollador Full Stack',
    'hero.years_badge': '+5 años en producción',
    'hero.stack_badge': 'Node · Nest · React',
    'hero.launch_mission': 'Descargar Dossier de Misión',
    'hero.summary': 'Desarrollador Full Stack (5 años) — Construyo aplicaciones web escalables usando Node.js/NestJS, React/Next.js y PostgreSQL. Me enfoco en APIs confiables, arquitectura limpia y entregar soluciones de extremo a extremo orientadas al negocio.',

    //** About Section */
    'about.title': 'Quién Soy',
    'about.subtitle': 'BRIEFING DE MISIÓN',

    //** Technical Section */
    'tech.title': 'Capacidades Técnicas',
    'tech.subtitle': 'SISTEMAS DE NAVEGACIÓN',

    //** Skills Section */
    'project.title': 'Proyectos Destacados',
    'project.subtitle': 'MISIONES ESPACIALES',
    'project.view_project': 'Abrir Proyecto',
    'project.view_code': 'Repositorio de GitHub',
    'project.modal.close': 'Cerrar detalles del proyecto',
    'project.modal.stack': 'Órbita Tecnológica',
    'project.modal.view_live': 'Lanzar Sitio en Vivo',
    'project.modal.view_code': 'Ver Código Fuente',
    'project.equasystems.title': 'Equa Systems — Sitio Corporativo',
    'project.equasystems.description':
      'Diseñé y entregué el sitio corporativo de Equa Systems. Optimizado para Core Web Vitals, totalmente responsivo y estructurado para destacar el catálogo de servicios y casos de éxito.',

    //* Work Experience Titles */
    'experience.title': 'Trayectoria Profesional',
    'experience.subtitle': 'ODISEA PROFESIONAL',

    //* Work Experience Section */
    'experience.equasystems.role': 'Desarrollador Full Stack',
    'experience.equasystems.period': 'Agosto 2020 - Presente',
    'experience.equasystems.description':
      'Diseño y entrego aplicaciones web para los clientes de Equa Systems en múltiples sectores. Colaboro con producto, diseño y QA para definir alcance, implementar funcionalidades de extremo a extremo y asumir el despliegue a producción.',
    'experience.equasystems.summary':
      'Lideré la implementación full-stack de múltiples plataformas de cliente, entregué funcionalidades que elevaron de forma medible el engagement y optimicé el rendimiento desde la API hasta el render.',

    'experience.softdaniv.role': 'Desarrollador de Software',
    'experience.softdaniv.period': 'Julio 2019 - Enero 2021',
    'experience.softdaniv.description':
      'Construí software empresarial con foco en backend y datos. Trabajé directamente con clientes para traducir requerimientos operativos en funcionalidades entregadas, y fui responsable del diseño y rendimiento de las consultas en los sistemas que entregué.',
    'experience.softdaniv.summary':
      'Entregué proyectos a tiempo en el portafolio del equipo, optimicé consultas críticas para reducir los tiempos de respuesta y acompañé a los stakeholders durante la entrega e iteraciones posteriores.',

    //** Certificates Section */
    'certificate.title': 'Certificados y Cursos',
    'certificate.subtitle': 'LOGROS EN EL ESPACIO',
    'certificate.hacker_rank_node_basic.title': 'Node.js (Básico) — HackerRank',
    'certificate.hacker_rank_node_basic.description':
      'Evaluación de HackerRank que valida los fundamentos de Node.js: módulos, I/O asíncrono, acceso al sistema de archivos y primitivas de servidor HTTP.',
    'certificate.udemy_sql_advance.title': 'SQL Server: Programación Avanzada — Udemy',
    'certificate.udemy_sql_advance.description':
      'Programación avanzada en SQL Server: procedimientos almacenados, estrategia de indexación, control transaccional y tuning de consultas. Instructor: Mariano Puglisi.',
    'certificate.devtalles.title': 'Clean Architecture en Node.js — DevTalles',
    'certificate.devtalles.description':
      'Construcción de APIs REST en Node.js con Clean Architecture: inversión de dependencias, separación por capas y autenticación basada en JWT. Instructor: Fernando Herrera.',
    'certificate.view_certificate': 'Ver Certificado',
    'certificate.devtalles.nestjs.title': 'NestJS — La Guía Completa',
    'certificate.devtalles.nestjs.description':
      'Cobertura completa de NestJS: arquitectura modular, guards, interceptores, inyección de dependencias e integración con bases de datos. Instructor: Fernando Herrera.',
    'certificate.hacker_rank_node_intermediate.title': 'Node.js (Intermedio) — HackerRank',
    'certificate.hacker_rank_node_intermediate.description':
      'Evaluación de HackerRank que valida Node.js a nivel intermedio: streams, internals del event loop, manejo de errores y patrones asíncronos.',
    'certificate.cloud_native_academy.devsecops.title': 'DevSecOps con GitHub Actions',
    'certificate.cloud_native_academy.devsecops.description':
      'Implementación de pipelines CI/CD seguros con GitHub Actions: análisis de vulnerabilidades, gestión de secretos y verificación de cadena de suministro. Instructor: Aldo Trucios Cornejo.',

    //** Contact Section */
    'contact.title': 'Mantente en Contacto',
    'contact.subtitle': 'PORTAL DE COMUNICACIÓN',
    'contact.form.name': 'NOMBRE (CALL SIGN)',
    'contact.form.name_holder': 'Introduce tu nombre...',
    'contact.form.email': 'EMAIL (FRECUENCIA DE TRANSMISIÓN)',
    'contact.form.email_holder': 'Ingresa tu correo electrónico...',
    'contact.form.message': 'CONTENIDO DEL MENSAJE',
    'contact.form.message_holder': 'Introduce tu mensaje...',
    'contact.form.send_message': 'Enviar Mensaje',
    'contact.email.success.title': '¡Misión Cumplida! 🚀',
    'contact.email.success.description':
      'Tu mensaje llegó a Control de Misión. Responderé lo antes posible — gracias por escribirme.',
    'contact.email.error.title': '¡Houston, Tenemos un Problema! ❌',
    'contact.email.error.optional.message':
      'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
    'contact.email.wait.title': '¡Detén tus Cohetes! ⏳',
    'contact.email.wait.part1': 'Por favor, espera',
    'contact.email.wait.part2': 'segundos antes de enviar otro mensaje.',
    'contact.email.connection.title': 'Perdido en el Espacio... 🌌',
    'contact.email.connection.description':
      'Tu mensaje no pudo ser transmitido a Control de Misión. Por favor, verifica tu conexión a internet e inténtalo de nuevo.',
    'contact.email.sending.title': 'Enviando Transmisión... 🚀',
    'contact.email.sending.description':
      'Tu mensaje está siendo transmitido a Control de Misión. Por favor, espera la confirmación.',
    'contact.email.validation.name': '¡El nombre no puede estar vacío! 👨‍🚀',
    'contact.email.validation.email': '¡Por favor, introduce una dirección de correo electrónico válida! 📧',
    'contact.email.validation.message': '¡El mensaje no puede estar vacío! 📝',
    'contact.email.validation.form': 'No se encontraron elementos del formulario. Por favor, actualiza la página.',
    'contact.email.validation.error': '¡Por favor, verifica los datos ingresados! 🚨',

    //** Footer Section */
    'footer.rights': 'Todos los derechos reservados.',
    'footer.crafted': 'Hecho con 💙 en el cosmos digital',
    'footer.navigation.home': 'Inicio',
    'footer.navigation.skills': 'Capacidades Técnicas',
    'footer.navigation.projects': 'Proyectos Destacados',
    'footer.navigation.certificates': 'Certificados y Cursos',
    'footer.navigation.contact': 'Mantente en Contacto',
    'footer.projects.equasystem': 'Sitio Web de Equasystem',
    'footer.certificates.hacker_rank_node_basic': 'NodeJs (Básico) - HackerRank',
    'footer.certificates.udemy_sql_advance': 'SQL Server (Avanzado) - Udemy',
    'footer.certificates.devtalles.node_clean_architecture': 'NodeJs - DevTalles',
    'footer.certificates.hacker_rank_node_intermediate': 'Node.js (Intermedio) - HackerRank',
    'footer.certificates.devtalles.nestjs': 'NestJs - DevTalles',
    'footer.certificates.cloud_native_academy.devsecops': 'DevSecOps - Cloud Native Academy',
    'footer.navigation.title': 'NAVEGACIÓN',
    'footer.project.title': 'PROYECTOS',
    'footer.certificate.title': 'CERTIFICADOS',
    'footer.experience.title': 'EXPERIENCIA',

    //** Error Section */
    'error.title': 'Houston, tenemos un problema.',
    'error.description':
      'Las coordenadas que buscas están perdidas en el espacio. Volvamos a un sistema estelar conocido.',
    'error.button': 'Volver al Control de Misión',

    //** Roadmap Section */
    'roadmap.title': 'DESAFÍOS DE ROADMAP',
    'roadmap.subtitle': 'MISIONES DE HABILIDAD',
    'roadmap.task_tracker.title': 'Gestor de Tareas CLI',
    'roadmap.task_tracker.description':
      'Una aplicación de línea de comandos para gestión de tareas construida con Node.js. Incluye funciones de creación, listado, actualización y eliminación de tareas con enfoque en la organización eficiente y seguimiento de estado.',
    'roadmap.url_shortener.title': 'Servicio de Acortamiento de URLs',
    'roadmap.url_shortener.description':
      'Un servicio de acortamiento de URLs que transforma enlaces largos en URLs cortas y compartibles. Construido con tecnologías backend modernas e incluye características como alias personalizados y seguimiento de clics.',
    'roadmap.fitness_tracker.title': 'Gestor de Entrenamientos Fitness',
    'roadmap.fitness_tracker.description':
      'Una aplicación integral de seguimiento de fitness que ayuda a los usuarios a gestionar sus rutinas de entrenamiento, seguir su progreso y alcanzar sus objetivos de fitness. Incluye planificación de entrenamientos, seguimiento de progreso y análisis de rendimiento.'
  }
};
