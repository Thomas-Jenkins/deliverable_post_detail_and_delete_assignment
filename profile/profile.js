import { renderProfileDetails } from '../render-utils.js';
import { getProfileById, checkAuth } from '../fetch-utils.js';
import { signOutUser } from '../fetch-utils.js';

const profileDetailsContainer = document.getElementById('profile-container');

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

const params = new URLSearchParams(window.location.search);

displayProfile();

async function displayProfile() {
    const data = await getProfileById(params.get('id'));
    
    const profileDiv = renderProfileDetails(data);
    profileDetailsContainer.append(profileDiv);
    const user = checkAuth();
    console.log('userId', user.id);
    console.log('data', data.id);
    if (user.id === data.id) {
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update Profile';
        profileDetailsContainer.append(updateButton);


        // updateButton.addEventListener('click', async () => {
        //     // add update post function
        // });
    }
}