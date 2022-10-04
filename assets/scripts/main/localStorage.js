function saveLocalStorage() {
    localStorage.setItem('calendar_itens', JSON.stringify(items))
}


function deleteLocalStorage() {
    localStorage.removeItem('calendar_itens')
    items.splice(0, items.length);
    showItems()
}