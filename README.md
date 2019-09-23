I love tiny libraries and since I write a lot of them I decided that I would put them all into one repo. The goal is to to never exceed 256 bytes per one minified and zipped library. I use Uglify3 with default options for minification and deflate for zipping. If you ever get an idea for a tiny library be sure to let me know. Hope you find these libraries helpful.

I know some of these libraries could be smaller by for example removing default values. But that would be forcing developers to pass these values by hand which sacrifices developer experience . Plus it'd end up bloating the codebase way more than having default values in place.

The main focus of this repo is on size so the libraries listed lack sanity checks meaning these libraries are not production-ready. I try to make them as fast as possible tho.

# Table of contents
[🔨 Hypr](https://github.com/YamiteruXYZ/256-Bytes-Away/blob/master/Hypr.js) - [243 bytes] Stricter and smaller HyperScript replacement   
[🔒 CRID](https://github.com/YamiteruXYZ/256-Bytes-Away/blob/master/CRID.js) - [178 bytes] Cryptographically strong string generator based on window.crypto   
[⛓️ Ogs](https://github.com/YamiteruXYZ/256-Bytes-Away/blob/master/Ogs.js) - [168 bytes] Safely gets and sets values on nested objects   
[🥝 Ev](https://github.com/YamiteruXYZ/256-Bytes-Away/blob/master/Ev.js) - [125 bytes] Absolute core of event emitting   
[😮 E](https://github.com/YamiteruXYZ/256-Bytes-Away/blob/master/E.js) - [80 bytes] Pub/sub pattern   