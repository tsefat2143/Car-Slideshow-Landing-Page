let init = () => {
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    links = document.getElementsByClassName('jumbo-slider__link'),
    circles = document.getElementsByClassName('jumbo-slider__circle'),
    current = 1,
    time = 8000;

    slides[0].classList.add('jumbo-slider__slide--active');
    links[current-1].classList.add('jumbo-slider__link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled');

    //update elipsis and links
    let updateNav = (current) => {
        for(i = 0; i < slides.length; i++) {
            links[i].classList.remove('jumbo-slider__link--active');
            circles[i].classList.remove('jumbo-slider__circle--filled');
        }

        links[current-1].classList.add('jumbo-slider__link--active');
        circles[current-1].classList.add('jumbo-slider__circle--filled');
    }

    let startSliding = () => {

        setInterval(() => {

            slides[1].classList.add('jumbo-slider__slide--active');
            slides[0].classList.remove('jumbo-slider__slide--active');

            container.appendChild(slides[0].cloneNode([true]));
            container.removeChild(slides[0])

            if(current < slides.length) {
                current++;
                updateNav(current);
            } else {
                current = 1;
                updateNav(current);
            }
            


        }, time);
    }
    startSliding()

}

init();