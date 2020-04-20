window.addEventListener('click', function(e) {
    if (e.target.matches('.ripple') || e.target.closest('.ripple') !== null) {
        let ripple = e.target.closest('.ripple')
        ripple.style.position = 'relative'
        ripple.style.overflow = 'hidden'

        let rippleEffect = setupRipple(e, ripple)
        ripple.prepend(rippleEffect)

        let offsetTime = ripple.getAttribute('data-ripple-duration') || '0.3'

        animateRipple(ripple, rippleEffect)

        fadeOutRipple(rippleEffect, offsetTime)

        removeRipple(rippleEffect, offsetTime)
    }
})

function setupRipple(e, ripple) {
    let x = e.clientX - ripple.offsetLeft
    let y = e.clientY - ripple.offsetTop

    let backgroundColor = ripple.getAttribute('data-ripple') || '#fff'
    let opacity = ripple.getAttribute('data-ripple-opacity') || '0.2'
    let duration = ripple.getAttribute('data-ripple-duration') || '0.3'

    let rippleEffect = document.createElement('span')
    rippleEffect.style.background = backgroundColor
    rippleEffect.style.opacity = opacity
    rippleEffect.style.position = 'absolute'
    rippleEffect.style.left = `${x}px`
    rippleEffect.style.top = `${y}px`
    rippleEffect.style.pointerEvents = 'none'
    rippleEffect.style.transform = 'translate(-50%, -50%)'
    rippleEffect.style.borderRadius = '50%'
    rippleEffect.style.transition = `all ${duration}s linear`
    rippleEffect.style.width = rippleEffect.style.height = '0px'
    rippleEffect.style.zIndex = 1000

    return rippleEffect
}

function animateRipple(ripple, rippleEffect) {
    setTimeout(() => {
        rippleEffect.style.width = rippleEffect.style.height = ((ripple.clientWidth >= ripple.clientHeight ? ripple.clientWidth : ripple.clientHeight) * 2) + 'px'
    }, 100)
}

function fadeOutRipple(rippleEffect, offsetTime) {
    setTimeout(() => {
        rippleEffect.style.opacity = 0
    }, (100 + (parseFloat(offsetTime) * 1000)))
}

function removeRipple(rippleEffect, offsetTime) {
    setTimeout(() => {
        rippleEffect.remove()
    }, (100 + (parseFloat(offsetTime) * 1000 * 2)))
}