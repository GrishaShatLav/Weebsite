const swup = new Swup(); // просто запускаем Swup

// Для проверки:
swup.on('animationOutStart', () => console.log('Swup анимация начала уходить'));
swup.on('animationInEnd', () => console.log('Swup анимация вернулась'));Swup();