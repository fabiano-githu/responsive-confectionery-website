document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     1. MENU HAMBÚRGUER — abre e fecha via JS
     ========================================= */
  var menuToggle = document.querySelector(".menu-toggle");
  var menuCheck = document.getElementById("menu-check");
  var nav = document.querySelector("header nav");
  var header = document.querySelector("header");

  function openMenu() {
    if (menuCheck) menuCheck.checked = true;
    if (menuToggle) {
      menuToggle.classList.add("is-active");
      menuToggle.setAttribute("aria-expanded", "true");
    }
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (menuCheck) menuCheck.checked = false;
    if (menuToggle) {
      menuToggle.classList.remove("is-active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    var isOpen = menuCheck ? menuCheck.checked : (menuToggle && menuToggle.classList.contains("is-active"));
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");

    // clique no botão hambúrguer
    menuToggle.addEventListener("click", function (event) {
      event.preventDefault();
      toggleMenu();
    });

    // acessibilidade: Enter ou espaço também abrem/fecham
    menuToggle.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    });
  }

  // fecha o menu ao clicar em qualquer link dele
  document.querySelectorAll("header nav a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // fecha o menu ao clicar fora do header
  document.addEventListener("click", function (event) {
    var isOpen = menuCheck ? menuCheck.checked : (menuToggle && menuToggle.classList.contains("is-active"));
    if (isOpen && header && !header.contains(event.target)) {
      closeMenu();
    }
  });

  // fecha com a tecla Esc
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  // fecha o menu automaticamente se a tela virar desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) closeMenu();
  });

  /* =========================================
     2. SOMBRA NO HEADER AO ROLAR
     ========================================= */
  function handleHeaderShadow() {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 10 ? "0 2px 8px rgba(0,0,0,0.08)" : "none";
  }
  window.addEventListener("scroll", handleHeaderShadow);
  handleHeaderShadow();

  /* =========================================
     3. SCROLL SUAVE EM LINKS #âncora
     ========================================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* =========================================
     4. LINK ATIVO CONFORME A SEÇÃO VISÍVEL
     ========================================= */
  var sections = document.querySelectorAll("main [id]");

  function markActiveLink() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute("id");
      var link = document.querySelector('header nav a[href="#' + id + '"]');
      if (link) link.classList.toggle("active", scrollPos >= top && scrollPos < bottom);
    });
  }
  if (sections.length > 0) window.addEventListener("scroll", markActiveLink);

  /* =========================================
     5. BOTÃO "VOLTAR AO TOPO"
     ========================================= */
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 400);
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =========================================
     6. ANO DO COPYRIGHT AUTOMÁTICO
     ========================================= */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================
     7. VALIDAÇÃO BÁSICA DE FORMULÁRIO
     ativa se existir <form data-validate> na página
     ========================================= */
  var form = document.querySelector("form[data-validate]");
  if (form) {
    form.addEventListener("submit", function (event) {
      var valid = true;
      form.querySelectorAll("[required]").forEach(function (field) {
        field.classList.remove("field-error");
        if (!field.value.trim()) {
          field.classList.add("field-error");
          valid = false;
        }
        if (field.type === "email" && field.value) {
          var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
          if (!emailOk) {
            field.classList.add("field-error");
            valid = false;
          }
        }
      });
      if (!valid) event.preventDefault();
    });
  }

});
