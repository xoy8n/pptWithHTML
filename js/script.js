import { slidesData } from './data.js';

let slideIndex = 1;

function createElement(tag, className, textContent, attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
    return element;
}

function createContent(content) {
    const cont = createElement('div', 'cont');
    if (content.link) {
        const link = createElement('a', 'link', null, { href: content.link, target: '_blank' });
        link.appendChild(createElement('img', null, null, { src: content.imgSrc, alt: content.imgAlt }));
        cont.appendChild(link);
    }
    cont.appendChild(createElement('h3', null, content.heading));
    if (content.description) cont.appendChild(createElement('p', null, content.description));
    return cont;
}

function createTab(tab, index) {
    const button = createElement('button', 'tablinks', tab.heading, {
        role: 'tab',
        'aria-controls': tab.id,
        'aria-selected': index === 0 ? 'true' : 'false'
    });
    if (index === 0) button.classList.add('active');
    button.onclick = (event) => {
        document.querySelectorAll('.tablinks[aria-selected="true"]').forEach(el => el.setAttribute('aria-selected', 'false'));
        openTab(event, tab.id);
    };
    return button;
}

function createTabContent(tab, index) {
    const tabContent = createElement('section', 'tabcontent', null, {
        id: tab.id,
        role: 'tabpanel',
        'aria-labelledby': tab.id
    });
    if (index === 0) tabContent.classList.add('active');

    tab.sections.forEach(section => {
        const innerTabCont = createElement('article', 'innerTabCont');
        innerTabCont.appendChild(createElement('h4', null, section.subtitle));
        const ul = createElement('ul');
        section.items.forEach(item => {
            ul.appendChild(createElement('li', null, item));
        });
        innerTabCont.appendChild(ul);
        tabContent.appendChild(innerTabCont);
    });

    return tabContent;
}

function createSlide(slide) {
    const slideOuterCont = createElement('div', 'slideOuterCont');
    slideOuterCont.appendChild(createElement('h2', 'mainTit', slide.title));
    const slideInnerCont = createElement('div', 'slideInnerCont');

    if (slide.contents) {
        slide.contents.forEach(content => slideInnerCont.appendChild(createContent(content)));
    } else if (slide.tabs) {
        const tabs = createElement('nav', 'tabs', null, { role: 'tablist' });
        slide.tabs.forEach((tab, index) => tabs.appendChild(createTab(tab, index)));
        slideInnerCont.appendChild(tabs);
        slide.tabs.forEach((tab, index) => slideInnerCont.appendChild(createTabContent(tab, index)));
    }

    slideOuterCont.appendChild(slideInnerCont);
    return slideOuterCont;
}

function renderSlides() {
    const slidesWrapper = document.getElementById('slidesWrapper');
    slidesData.forEach(slide => {
        const slideContainer = createElement('div', 'slidesContainer');
        if (slide.tableContents) {
            const table = createTable(slide);
            const slideOuterCont = createElement('div', 'slideOuterCont');
            slideOuterCont.appendChild(createElement('h2', 'mainTit', slide.title));
            const slideInnerCont = createElement('div', 'slideInnerCont');
            slideInnerCont.appendChild(table);
            slideOuterCont.appendChild(slideInnerCont);
            slideContainer.appendChild(slideOuterCont);
        } else {
            slideContainer.appendChild(createSlide(slide));
        }
        slidesWrapper.appendChild(slideContainer);
    });
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slidesContainer");
    const numberText = document.querySelector(".numberText");

    slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

    Array.from(slides).forEach(slide => slide.classList.remove("active"));
    slides[slideIndex - 1].classList.add("active");
    numberText.innerHTML = `${slideIndex} / ${slides.length}`;

    const activeSlideTabs = slides[slideIndex - 1].querySelectorAll('.tablinks');
    if (activeSlideTabs.length > 0) {
        activeSlideTabs[0].click();
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    Array.from(tabcontent).forEach(content => content.classList.remove("active"));
    Array.from(tablinks).forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    evt.currentTarget.setAttribute('aria-selected', 'true');
}

function navigateTabs() {
    const activeTab = document.querySelector('.tablinks.active');
    const tabs = Array.from(document.querySelectorAll('.slidesContainer.active .tablinks'));
    const activeSlide = document.querySelector('.slidesContainer.active');
    const slides = Array.from(document.getElementsByClassName('slidesContainer'));

    let nextIndex = (tabs.indexOf(activeTab) + 1) % tabs.length;

    if (nextIndex === 0) {
        let nextSlideIndex = (slides.indexOf(activeSlide) + 1) % slides.length;
        plusSlides(1);
        const nextSlideTabs = slides[nextSlideIndex].querySelectorAll('.tablinks');
        if (nextSlideTabs.length > 0) {
            nextSlideTabs[0].click();
        }
    } else {
        tabs[nextIndex].click();
    }
}

function createTable(data) {
    const table = createElement('table', 'tables');
    const thead = createElement('thead');
    const headerRow = createElement('tr');
    const headers = ["특징", "GitHub Copilot", "JetBrains AI", "codeium"];

    headers.forEach(headerText => {
        const header = createElement('th', null, headerText);
        headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = createElement('tbody');
    for (let i = 0; i < 7; i++) {
        const row = createElement('tr');
        const headingCell = createElement('td', null, data.tableContents[i]?.heading || '');
        row.appendChild(headingCell);
        for (let j = 0; j < 3; j++) {
            const cell = createElement('td', null, data.tableContents[i]?.info[j] || '');
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    return table;
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') plusSlides(1);  // Next slide
    if (event.key === 'ArrowLeft') plusSlides(-1);  // Previous slide
    if (event.key === 'Enter') plusSlides(1);
    if (event.key === 'Tab') {
        event.preventDefault();
        navigateTabs();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderSlides();
    showSlides(slideIndex);
});