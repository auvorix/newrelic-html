// Google Analytics
import './analytics.js'

// Site initialisation
document.addEventListener('DOMContentLoaded', () => {

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })

  // Contact form — client-side validation
  const form = document.querySelector('.contact-form')
  if (form) {
    const submitBtn = form.querySelector('.submit-btn')
    submitBtn?.addEventListener('click', () => {
      const email = document.getElementById('email')?.value.trim()
      const name = document.getElementById('first-name')?.value.trim()
      const message = document.getElementById('message')?.value.trim()

      if (!name) return showError('Please enter your first name.')
      if (!email || !email.includes('@')) return showError('Please enter a valid email address.')
      if (!message) return showError('Please describe your enquiry.')

      submitBtn.textContent = 'Sending…'
      submitBtn.disabled = true
      setTimeout(() => {
        submitBtn.textContent = 'Enquiry Sent'
        submitBtn.style.background = '#2e7d32'
      }, 1200)
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault()
      document.querySelector(anchor.getAttribute('href'))
        ?.scrollIntoView({ behavior: 'smooth' })
    })
  })

  // Testimonial cards — fade in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.testimonial, .service-card').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity .4s ease, transform .4s ease'
    observer.observe(el)
  })

})

function showError(msg) {
  const existing = document.querySelector('.form-error')
  if (existing) existing.remove()
  const err = document.createElement('p')
  err.className = 'form-error'
  err.style.cssText = 'color:#c0392b;font-size:13px;margin-top:8px;font-family:Arial,sans-serif'
  err.textContent = msg
  document.querySelector('.contact-form')?.appendChild(err)
  setTimeout(() => err.remove(), 4000)
}
