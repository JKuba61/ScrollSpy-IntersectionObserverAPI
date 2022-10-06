const sections = document.querySelectorAll('.section')
const navItems = document.querySelectorAll('.nav__item')

const options = {
	threshold: [0.5],
}

const handleScrollspy = e => {
	e.forEach(entry => {
		const activeNav = document.querySelector(`a[href='#${entry.target.id}']`)

		if (entry.isIntersecting) {
			navItems.forEach(item => item.classList.remove('active'))
			activeNav.classList.add('active')
		}
	})
}

const observer = new IntersectionObserver(handleScrollspy, options)

sections.forEach(section => {
	observer.observe(section)
})
