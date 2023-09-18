const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruit.filter(item => {
		return item.toLowerCase().includes(str.toLowerCase());
	});;
}

//Event listener that is triggered whenever a user types.
function searchHandler(e) {
	//Declare and assign the value of the event's target to a variable 
	let inputVal = e.target.value;
	//results stores a fruit list which matches inputVal 
	const results = search(inputVal);
	//If inputVal isn't empty, return suggestions. Else, clear .suggestions ul.
	inputVal ? showSuggestions(results, inputVal) : suggestions.value = '';
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	//Iterate each fruit from results into a li IF inputVal (a string) is truthy
	if (inputVal) {
		results.forEach(result => {
			const aLi = document.createElement('li');
			aLi.innerHTML = result; //// assigning text to aLi using result value.
			suggestions.appendChild(aLi);
		})
	}
}


function highlightSuggestion(e) {
	if (e.target.tagName === 'LI') {
		e.target.style.backgroundColor = '#FD5100';
	}
}

function removeHighlight(e) {
	if (e.target.tagName === 'LI') {
		e.target.style.backgroundColor = '';
	}
}

function useSuggestion(e) {
	//Access the text content of the element that has been clicked on
	placeholderVal = e.target.innerText;
	//Set the value of the input field to the placeholder value
	input.value = placeholderVal;
	// Hide the suggestions dropdown
	suggestions.style.display = 'none';
	// Clear the suggestions list
	suggestions.value = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', removeHighlight);
suggestions.addEventListener('click', useSuggestion);