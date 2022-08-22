window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav li');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tabs[index].classList.add('active')
        })
    })

    const sections = document.querySelectorAll('main section');
    const images = ['image-1.webp', 'image-2.webp', 'image-3.webp', 'image-4.webp'];
    sections.forEach((section, image) => {
        const label = section.getAttribute('id');
        section.innerHTML = `
        <h3>${label}</h3>
        <img src="images/${images[image]}" alt="${label}">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
        `;
    })
})

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    window.pageYOffset > 110 ?
        nav.classList.add('shadow') :
        nav.classList.remove('shadow')
})

window.onscroll = () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })

    const tabs = document.querySelectorAll('nav li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.classList.contains(current)) {
            tab.classList.add('active')
        }
    })
}