import { getProfiles } from '../fetch-utils.js';
import { renderProfilesList } from '../render-utils.js';

const profilesListContainer = document.getElementById('profile-list-container');




displayProfileList();

async function displayProfileList() {
    const data = await getProfiles();
    const profileLi = renderProfilesList(data);
    profilesListContainer.append(profileLi);
}