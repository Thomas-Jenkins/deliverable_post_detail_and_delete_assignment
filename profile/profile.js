import { renderProfileDetails } from '../render-utils.js';
import { getProfileById } from '../fetch-utils.js';

const profileDetailsContainer = document.getElementById('profile-container');

const params = new URLSearchParams(window.location.search);

displayProfile();

async function displayProfile() {
    const data = await getProfileById(params.get('id'));
    console.log(data);
    const profileDiv = renderProfileDetails(data);
    profileDetailsContainer.append(profileDiv);
}