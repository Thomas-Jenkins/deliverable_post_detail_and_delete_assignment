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
    const profileNameContainer = document.createElement('div');
    const bioContainer = document. createElement('div');
    const avatarContainer = document.createElement('div');
    const profileName = document.createElement('p');
    const bio = document.createElement('p');

    profileName.textContent = profile.user_name;

    bio.textContent = profile.bio;

    profileContainer.append(profileNameContainer, bioContainer, avatarContainer);
    profileNameContainer.append(profileName);
    bioContainer.append(bio);

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