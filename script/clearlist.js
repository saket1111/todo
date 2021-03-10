export const clearList = () => {
    (document.getElementById('list').innerHTML = '');
    let container = document.querySelector('ul');
    container.parentNode.style.display = "none";
}