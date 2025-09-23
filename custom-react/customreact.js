function customRender(reactElement, container) {
    /* const domElement=document.createElement(reactElement.type) 
    domElement.innerHTML = reactElement.children
     domElement.setAttribute('href',reactElement.props.href)
      domElement.setAttribute('target',reactElement.props.target)
       container.appendChild(domElement) */
    // create DOM element based on type
    const domElement = document.createElement(reactElement.type);

    // set attributes (props)
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // set children (for now, handling only string children)
    domElement.textContent = reactElement.children;

    // append to container
    container.appendChild(domElement);
}

// our "React element object"
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);