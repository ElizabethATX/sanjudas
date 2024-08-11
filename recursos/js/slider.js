let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        let slide = document.querySelector('.slide');
        let items = document.querySelectorAll('.item');
        let forward = true;

        function nextSlide() {
            if (forward) {
                slide.appendChild(items[0]);
            } else {
                slide.prepend(items[items.length - 1]);
            }
            items = document.querySelectorAll('.item');
            checkDirection();
        }

        function prevSlide() {
            if (!forward) {
                slide.appendChild(items[0]);
            } else {
                slide.prepend(items[items.length - 1]);
            }
            items = document.querySelectorAll('.item');
            checkDirection();
        }

        function checkDirection() {
            if (items[0] === document.querySelector('.item:last-child')) {
                forward = false;
            } else if (items[items.length - 1] === document.querySelector('.item:first-child')) {
                forward = true;
            }
        }

        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);

        setInterval(nextSlide, 4000);