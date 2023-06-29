const cursor = document.querySelector('.cursor');

document.addEventListener("mousemove", function(e) {
	const x = e.clientX;
	const y = e.clientY;
	cursor.style.left = x + 'px';
	cursor.style.top = y + 'px';
});

document.querySelectorAll('button').forEach(button => {
	button.addEventListener('mouseenter', () => {
		cursor.classList.add('cursor-hover')
	})
	button.addEventListener('mouseleave', () => {
		cursor.classList.remove('cursor-hover')
	})
});