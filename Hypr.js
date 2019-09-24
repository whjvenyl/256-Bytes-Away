/**
 * Creates element
 * @param {string} selector - selector in a fromat "tag#id.class"
 * @param {Object} attrs - HTML tag attributes and events or children
 * @param {any | any[]} children - List of content or content itself that will be appended
 * @return {HTMLElement}
 */
function h(selector, attrs = {}, children = []) {
    let elm = "div";
    
    if(attrs.length) {
        children = attrs;
        attrs = {};
    }

    !attrs.class && (attrs.class = "");
    !Array.isArray(children) && (children = [children]);

    selector.split(/([\.#]?[^\s#.]+)/g).forEach(
        matched => { 
            if(matched) matched[0] === "." 
                ? attrs.class += matched.substr(1) + ""
                : matched[0] === "#"
                    ? attrs.id = matched.substr(1)
                    : elm = matched;
        }
    );

    elm = document.createElement(elm);
 
    for(let key in attrs) {
        let value = attrs[key];

        value.call    // check if value is function
            ? elm.addEventListener(key, value) 
            : elm.setAttribute(key, value);
    }

    children.forEach(child => elm.append(child));

    return elm;
}


// Example usage
const hello = h(".hello", [
    h("h1.title", "Hello world!"),
    h("p.question", "How are you doing?"),
    h(".buttons", [
        h("button", { click: () => alert("That's great!") }, "Good"),
        h("button", { click: () => alert("How come?") }, "Bad")
        ])
]);

document.body.appendChild(hello);

// <div class="hello">
//     <h1>Hello world!</h1>
//     <p>How are you doing?</p>
//     <div class="buttons">
//         <button>Good</button>
//         <button>Bad</button>
//      </div>
//  </div>