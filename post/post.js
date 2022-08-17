import { getPostById, checkAuth, deletePost } from '../fetch-utils.js';
import { renderPostDetails } from '../render-utils.js';

const postDetailsContainerEl = document.getElementById('post-details');


const params = new URLSearchParams(window.location.search);

displayPost();



async function displayPost() {
    const data = await getPostById(params.get('id'));
    const postDiv = renderPostDetails(data);
    postDetailsContainerEl.append(postDiv);
    const user = checkAuth();
    console.log(user.id);
    console.log(data.user_id);
    if (user.id === data.user_id) {
        console.log('hello');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Post';
        
        deleteButton.addEventListener('click', () => {
            deletePost(data.id);
            
        });

        postDetailsContainerEl.append(deleteButton);
    }
};

