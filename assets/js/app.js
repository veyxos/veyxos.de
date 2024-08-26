/** @type {HTMLImageElement} */
const me = document.querySelector('.img img')

function parallax () {
  if (me == null) {
    return
  }

  const scrolled = window.scrollY

  me.style.objectPosition = `center calc(50% + ${scrolled * .7}px)`
}

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', parallax)
  parallax()
}

function mail () {
  /** @type {HTMLElement[]} */
  const elements = Array.from(document.querySelectorAll('[data-mail]'))

  for (const element of elements) {
    const type = element.getAttribute('data-mail')
    const a = element.getAttribute('data-a')
    const b = element.getAttribute('data-b')

    if ([type, a, b].some(it => it == null || it === '')) {
      return
    }

    const res = [a, b].map(it => atob(it)).join('@')

    if (type === 'inner') {
      element.textContent = res
    } else if (type === 'href') {
      element.href = `mailto:${res}`
    } else if (type === 'href+inner') {
      element.textContent = res
      element.href = `mailto:${res}`
    }
  }
}

mail()
