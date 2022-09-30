# Nature Images CRUD

## List view - display the images.

- [x] List view - display the images in a list.
- [x] Scrolling.
- [x] Filters - search by image title
- [ ] Sorting - sort by tag.

## Details view & CRUD - a single image.

- [x] Display both list and form
- [x] Edit image (update name and / or tag).
- [x] Delete item / image.
- [x] Add a new item - same page

## What's left to do

- [ ] Lazy Loading
- [ ] Clear Input Search & Filter
- [ ] Include Unit Testing for the CRUD and Search
- [ ] Improve image search performance
- [ ] Move Input to a separate component
- [ ] Improve the ADD/EDIT flag. Not the cleanest and easiest to understand
- [ ] UI/UX improvement + mobile design, or total redesign :)

## Time Invested

| Item                | Time Invested |
| ------------------- | ------------- |
| List view & Search  | 45min         |
| Details view & CRUD | 45hr          |
| "Styling"           | 15mins        |
| Code Cleaning       | 15mins        |
| Total               | 2h            |

// Instructions: Fork this, code it then share your stackblitz URL and how many hours you spent on it.

// Goal: Build a page / tool to allow users to create, update, delete and view (search, filter) nature images.
// Don't worry about styling; make it functional.
// Build as low level (from scratch) as possible - no pre-built styling or components / dependencies.
// Suggested time: 2 hours.
// There is a lot of functionality that could be done so please make sure to add a TODO list with notes of what is left, especially if you choose to dive deep into perfecting one piece and thus do not complete all the parts (though ideally we'd prefer you complete all parts).
// 1. List view - display the images. Cards? Table? Carousel? Other?
// 1a. Paging / scrolling.
// 1b. Filters - search by image title or by one or more tags.
// 1c. Sorting - sort by image title or by tag.
//
// 2. Details view & CRUD - a single image.
// 2a. How? New page & destroy list? Hide list? Show both? Think about performance and user experience.
// 2b. Edit image (update name and / or tag).
// 2c. Delete item / image.
// 2d. Add a new item - same page / structure as view and edit, or new page?
//
// 3. What's left to do / what did you not get to? What else would you add and how would you prioritize it? Feel free to leave comments / placeholders in the code and / or add a README file explaining your work.
// 3a. Testing?
// 3b. Performance?
// 3c. Code quality?

// Data is hardcoded in the getItems function; structure / example is:
//[{
// "title": "Alone in the unspoilt wilderness",
// "description": "landscape photography of mountain hit by sun rays",
// "imageUrl": "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
// "tags": ["nature", "mountain", "landscape"]
//}, ...
//]
