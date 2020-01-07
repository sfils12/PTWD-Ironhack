// Find the most popular actor from an array
// Input: an array of object, where each element contains the property "popularityScore"
// Output: A string that represents the name of the most popular actor

function mostPopularActor(actors) {
	let highestScore = americanActors[0].popularityScore;

	for (let i = 0; i < americanActors.length; i++) {
		if (americanActors[i].popularityScore > highestScore) {
			highestScore = americanActors[i].popularityScore;
			actorName = americanActors[i].name;
		}
	}
	return actorName;
}

var americanActors = [
	{ name: 'Tom Hanks', popularityScore: 87 },
	{ name: 'Natalie Portman', popularityScore: 90 },
	{ name: 'Jack Nicholson', popularityScore: 98 },
	{ name: 'Julia Roberts', popularityScore: 88 }
];
// console.log(mostPopularActor(americanActors)); // => "Jack Nicholson"

mostPopularActor(americanActors);
mostPopularActor(americanActors);
