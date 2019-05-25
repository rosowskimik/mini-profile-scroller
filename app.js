//Placeholer data
const data = [
	{
		name: 'John Doe',
		age: 32,
		gender: 'Male',
		lookingfor: 'female',
		location: 'Boston, MA',
		image: 'https://randomuser.me/api/portraits/men/69.jpg'
	},
	{
		name: 'Jane Smith',
		age: 26,
		gender: 'Female',
		lookingfor: 'male',
		location: 'Miami, FL',
		image: 'https://randomuser.me/api/portraits/women/34.jpg'
	},
	{
		name: 'William Johnson',
		age: 28,
		gender: 'Male',
		lookingfor: 'female',
		location: 'Lynn, MA',
		image: 'https://randomuser.me/api/portraits/men/17.jpg'
	}
];

const profile = profileIterator(data);

//Display first profile
nextProfile();

//Next button event
document.querySelector('#next').addEventListener('click', nextProfile);

//Next Profile
function nextProfile() {
	const currentProfile = profile.next().value;

	if(currentProfile !== undefined) {
		document.querySelector('#profile-image').innerHTML = `
			<img src="${currentProfile.image}">
		`;
		document.querySelector('#profile-desc').innerHTML = `
			<ul class="list-group">
				<li class="list-group-item">Name: ${currentProfile.name}</li>
				<li class="list-group-item">Age: ${currentProfile.age}</li>
				<li class="list-group-item">Location: ${currentProfile.location}</li>
				<li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
			</ul>
		`;
	} else {
		//Reload after finished
		window.location.reload();
	}
}

//Profile Iterator
function profileIterator(profiles){
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < profiles.length ?
			{ value: profiles[nextIndex++], done: false } :
			{ done: true }
		}
	}
}