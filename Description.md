
# Rick and Mory App
The task is to build a relatively simple app where we interact with some data. We're going to create an application where we see lists of character and episodes from the show Rick and Morty. We can add and remove items from both types into a favorite list. At the end we will extend the app to have multiple pages, reusable logic and global state.

 ## TO DO List for this little
- Create a page for episodes and add it to App.vue  [lifecycle, methods]
	-  Fetch items (for demo purposes we'll fetch and work with Rick and Morty episodes from: [rickandmortyapi](https://rickandmortyapi.com/documentation/#rest))
	 - Select correct lifecycle
	 - Add loading logic
	 - Update the template (show new data)

- Homework: Create a page for characters and add it to App.vue  [lifecycle, methods]
	- Homework: Fetch items (for demo purposes we'll fetch and work with Rick and Morty characters from: [rickandmortyapi](https://rickandmortyapi.com/documentation/#rest))
	 - *Homework:* Select correct lifecycle
	 - *Homework:* Add loading logic
	 - *Homework:* Update the template (show new data)

- Create a simple component to display each episode [props, data]
	 - Display name
	 - Display image
	 - *Homework:* Display **air_date**, **created date** (with appropriate format) and **episode** (eg S01E01) as a simple tag component  from element UI

- ***Homework:*** Create a simple component to display each character  [props, data]
	 - *Homework:* Display name
	 - *Homework:* Display image
	 - *Homework:* Display **species**, **origin** (with appropriate format) and **location** as a simple tag component from element UI

- Favorite items [methods, computed, watchers]
	- Add functionality to add an item to a favorite list when clicking on dedicated icon
	- Add functionality to remove an item to a favorite list when clicking on dedicated icon
	- Display in the component of that item that it's in favorites
	- Display in the page of that item the total count of favorite items vs total count os items (format: 'fav / total count')
	- Add a max favorite limitation - can't add more favorite items if count is over a specific number (eg. 10)
	- Display disabled favorite button
	- Add a watcher to show a message (can be an alert) to the user when he has 5, 2 and 1avaliable spots left in his favorite list

- Add pagination logic for Episodes
	- Connect BE pagination logic with FE
	- Connect pagination data with element UI pagination component

- *Homework:* Add pagination logic for Characters
	- *Homework:* Connect BE pagination logic with FE
	- *Homework:* Connect pagination data with element UI pagination component

- Extend pagination logic
	- Abstract the logic to be reusable in multiple places/components
	- Move the logic as Mixin
	- Add the mixin in all places where we have a need for it

- Add pages [Router]
	- Configure vue router
	- Add routing & routes for Episodes and Character pages
	- Create a simple homepage (so we can navigate from more places)
	- Add a navigation
	- Create a HOC/wrapper for all of your pages [slots]

- Add global logic and state [Vuex]
	- Create a separate favorite page
	- Save your favorite Episodes and Characters in a store (or stores)
	- Display general data in the main page

- Vue 3 Composition API
	- Rework the current logic in the components to use the Composition API
- Vue 3 TS Class-Component-Syntax
	- Learn more about TypeScript and the Class syntax
	- Rework the current logic to use Class style components
