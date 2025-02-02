let isChanged = false

function toggleClick(obj) {
    obj.style.backgroundColor = isChanged ? "transparent" : "blue"
    isChanged = !isChanged
}