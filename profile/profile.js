import { renderProfileCreate, renderProfileDetails } from '../render-utils.js';
import { getProfileById, checkAuth, signOutUser, createProfile } from '../fetch-utils.js';

const profileDetailsContainer = document.getElementById('profile-container');



const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

const params = new URLSearchParams(window.location.search);


const user = checkAuth();



displayProfile();

async function displayProfile() {
    const data = await getProfileById(params.get('id'));
    if (data === undefined) { 
        const profileCreate = renderProfileCreate(data);
        profileDetailsContainer.append(profileCreate);
    } else {
        const profileDiv = renderProfileDetails(data);
        profileDetailsContainer.append(profileDiv);

        if (user.id === data.id) {
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update Profile';
            profileDetailsContainer.append(updateButton);


            updateButton.addEventListener('click', async () => {
                console.log('hello');
                createProfile(data, )
            });
        }
    }
}
