# show-more-loader

Simple show-more functionallity for a list of items which should be hidden at first.
Show more items after every click on a "show-more" button.


## Usage
new ShowMore({
  container: container, // [node] container which holds your items
  items: items, // [array] your items
  loadMoreBtn: button, // button for showing more items on click
  defaultItemsToShow: 4, // how many items to show on default
  amountOfItemsToShow: 2, // how many items to show additionally on click
}).init();
