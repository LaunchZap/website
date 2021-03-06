particlesJS('particles-js', {
  particles: {
    color: '#aaa',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 1,
      anim: {
        enable: false,
        speed: 0.05,
        opacity_min: 0,
        sync: true
      }
    },
    size: 5,
    size_random: false,
    nb: 100,
    line_linked: {
      enable_auto: true,
      distance: 140,
      color: '#ccc',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: true,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 0.5
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: true,
        density_area: 700 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});