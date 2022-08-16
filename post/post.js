import { getPost, checkAuth } from '../fetch-utils.js';
const postDetailsContainerEl = document.getElementById('post-details-form');

async function displayPost() {
    getPost();

}
displayPost();
console.log(displayPost());