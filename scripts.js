// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target.offsetTop - 60,
          offsetY: 60
        },
        ease: 'power2.inOut'
      });
    }
  });
});

// Text reveal animation for headline
gsap.utils.toArray('.hero-content h1').forEach((heading, i) => {
  const letters = heading.textContent.split('');
  heading.textContent = '';
  letters.forEach((letter, j) => {
    heading.innerHTML += `<span class="letter">${letter}</span>`;
  });

  gsap.to(heading.querySelectorAll('.letter'), {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: heading,
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  });
});

// Project cards hover animations
gsap.utils.toArray('.card').forEach(card => {
  const hoverTimeline = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play none none reverse'
    }
  });

  hoverTimeline
    .to(card, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
    .to(card, {
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      duration: 0.3,
      ease: 'power2.out'
    }, '<')
    .to(card.querySelector('h3'), {
      color: '#ffcc00',
      duration: 0.3,
      ease: 'power2.out'
    }, '<');

  card.addEventListener('mouseenter', () => hoverTimeline.play());
  card.addEventListener('mouseleave', () => hoverTimeline.reverse());
});

// Cursor effect
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: 'power2.out'
  });
});

// Add cursor hover effect
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
  });
});

// Page load animation

// Tab functionality for About Me section
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Initialize
  tabContents.forEach(content => {
    content.style.display = 'none';
  });
  document.querySelector('.education-content').style.display = 'block';

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      // Hide all tab contents
      tabContents.forEach(content => {
        content.style.display = 'none';
      });

      // Show selected tab content
      const tabId = button.getAttribute('data-tab');
      const content = document.querySelector(`.${tabId}-content`);
      if (content) {
        content.style.display = 'block';
      }
    });
  });
});

// Page load animation
gsap.from('.hero-content', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power2.out',
  delay: 0.5
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Initialize particles.js
tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#000000"
    }
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#ffffff"
    },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150,
      opacity: 0.5
    },
    move: {
      enable: true,
      speed: 2
    },
    size: {
      value: 2
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});

console.log("Welcome to Ambar's Portfolio 🚀");
