import { getPostById, checkAuth } from '../fetch-utils.js';
import { renderPostDetails } from '../render-utils.js';

const postDetailsContainerEl = document.getElementById('post-details');

const params = new URLSearchParams(window.location.search);

async function displayPost() {
    const data = getPostById(params.get('id'));
    const postDiv = renderPostDetails(data);

    postDetailsContainerEl.append(postDiv);
    
}
displayPost();
