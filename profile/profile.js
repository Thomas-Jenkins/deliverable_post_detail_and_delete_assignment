import { renderProfileDetails } from '../render-utils.js';
import { getProfileById, checkAuth } from '../fetch-utils.js';

const profileDetailsContainer = document.getElementById('profile-container');

const params = new URLSearchParams(window.location.search);

displayProfile();

async function displayProfile() {
    const data = await getProfileById(params.get('id'));
    
    const profileDiv = renderProfileDetails(data);
    profileDetailsContainer.append(profileDiv);
    const user = checkAuth();
    console.log('userId', user.id);
    console.log('data', data.user_id);
    if (user.id === data.user_id) {
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update Profile';
        profileDetailsContainer.append(updateButton);


        // updateButton.addEventListener('click', async () => {
        //     // add update post function
        // });
    }
}