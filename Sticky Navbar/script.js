window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav a');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tabs[index].classList.add('active')
        })
    })
})

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    window.pageYOffset > 110 ?
    nav.classList.add('shadow') :
    nav.classList.remove('shadow')
})

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    const label = section.getAttribute('id');
    section.innerHTML = `
    <h3>${label}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem.</p>
    `;
})