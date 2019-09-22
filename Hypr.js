/**
 * Creates element
 * @param {string} tag - Name of a tag
 * @param {any[]} content - List of content that will be appended - 
 * @param {Object} attribs - HTML tag attributes and events
 * @return {HTMLElement}
 */
function h(tag, content = [], attribs = {}) {
    let elm = document.createElement(tag || "div");
 
    for(let key in attribs) {
        let value = attribs[key];

        value.call    // check if value is function
            ? elm.addEventListener(key, value) 
            : elm.setAttribute(key, value);
    }

    content.forEach(child => elm.append(child));

    return elm;
}



// Example usage
const hello = h(0, [
    h("h1", ["Hello world!"]),
    h("p", ["How are you doing?"]),
    h(0, [
        h("button", ["Good"], { click: () => alert("That's great!") }),
        h("button", ["Bad"], { click: () => alert("How come?") })
        ], { class: "buttons" })
], { class: "hello" });

document.body.appendChild(hello);

// <div class="hello">
//     <h1>Hello world!</h1>
//     <p>How are you doing?</p>
//     <div class="buttons">
//         <button>Good</button>
//         <button>Bad</button>
//      </div>
//  </div>