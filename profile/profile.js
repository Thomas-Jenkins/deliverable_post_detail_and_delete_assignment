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
    console.log('temp', data);
    if (data === undefined) { 
        const profileCreate = renderProfileCreate(data);
        profileDetailsContainer.append(profileCreate);
    } else {
        const profileDiv = renderProfileDetails(data);
        profileDetailsContainer.append(profileDiv);
        const profileContainer = document.querySelector('#name-cont');
        const bioContainer = document.querySelector('#bio-cont');
        if (user.id === data.id) {
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update Profile';
            profileDetailsContainer.append(updateButton);


            updateButton.addEventListener('click', async () => {
                console.log('hello');
                await createProfile(data.id, profileContainer.value, bioContainer.value);
                location.reload();
            });
        }
    }
}
