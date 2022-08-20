export function renderCategoryOptions(categories) {
    // document fragment is a "bag" for elements
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        li.append(titleEl, categoryEl, descriptionEl, contactEl);

        fragment.append(li);
    }

    return fragment;
}
export function renderProfileDetails(profile) {
    const profileContainer = document.createElement('div');
    const profileNameContainer = document.createElement('input');
    const bioContainer = document. createElement('textarea');
    const avatarContainer = document.createElement('div');
    const profileName = document.createElement('p');
    

    profileNameContainer.value = profile.user_name;

    bioContainer.value = profile.bio;

    profileContainer.append(profileNameContainer, bioContainer, avatarContainer);
    profileNameContainer.append(profileName);
    

    return profileContainer;
}

export function renderProfilesList(profiles) {
    const fragment = document.createDocumentFragment();

    for (let profile of profiles) {
        const a = document.createElement('a');
        const li = document.createElement('li');

        li.textContent = profile.user_name;

        a.href = `../profile/?id=${profile.id}`;
        a.append(li);
        fragment.append(a);

    }
    return fragment;
}

export function renderProfileCreate() {
    const formDiv = document.createElement('form');
    const nameInput = document.createElement('input');
    const bioInput = document.createElement('textarea');
    const formSubmit = document.createElement('button');

    nameInput.placeholder = 'Enter Your Profile Name';
    bioInput.placeholder = 'Enter Your Bio';
    formSubmit.textContent = 'Create Profile';

    formDiv.append(nameInput, bioInput, formSubmit);
    return formDiv;
}