import { getProfiles } from '../fetch-utils.js';
import { renderProfilesList } from '../render-utils.js';
import { signOutUser } from '../fetch-utils.js';

const profilesListContainer = document.getElementById('profile-list-container');

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);


displayProfileList();

async function displayProfileList() {
    const data = await getProfiles();
    const profileLi = renderProfilesList(data);
    profilesListContainer.append(profileLi);
}