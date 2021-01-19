/*===== DRAG and DROP =====*/

const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
    animation: 150,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ghostClass: "blue-background-class"
});