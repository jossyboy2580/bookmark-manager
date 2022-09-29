// Referencing the menu open and close button
const closeBtn = document.querySelector(".close")
const menuBtn = document.querySelector(".nav-toggler")
const arrowKey = document.querySelectorAll('.arrowKey')
const mobileMenu = document.querySelector('.mobile-nav')
const formBtn = document.querySelector('.subscriber-form .submit-btn')
const formInput = document.querySelector('.subscriber-form [name="email"]')


// The frequently asked questions
// 
const faqs = document.querySelectorAll('.faq')
    // 
faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            console.log('this faq was clicked')
            if (faq.classList.contains('show')) {
                faq.classList.remove('show')
            } else {
                faqs.forEach(faq => {
                    faq.classList.remove('show')
                })
                faq.classList.add('show')
            }
        })
    })
    // 
    // 
    // Get the tab switching handles
const tabSwitch = document.querySelectorAll('.tab span')

// Add and remove the active class to the tab switch
tabSwitch.forEach(tab => {
    tab.addEventListener('click', () => {
        tabSwitch.forEach(tabber => {
            tabber.parentElement.classList.remove('active')
            tab.parentElement.classList.toggle('active', ' ')
        })
    })
})


// Event listeners added to the buttons
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-menu')
});
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show-mobile-menu')
})




formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(validateEmail(formInput))
})

// Javascript Email Validation gotten from StackOverflow

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};