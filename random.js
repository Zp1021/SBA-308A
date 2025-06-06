// Exporting the random function passing the argument length for usage in index.js
function random(length) {
    return Math.floor(Math.random() * length)
}
export {random};