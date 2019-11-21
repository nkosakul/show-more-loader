class ShowMore {
  constructor(options) {
    this.container = options.container;
    this.items = options.items;
    this.loadMoreBtn = options.loadMoreBtn;
    this.defaultItemsToShow = options.defaultItemsToShow;
    this.amountOfItemsToShow = options.amountOfItemsToShow;
  }

  hideItems = () => {
    this.items.forEach((item, i) => {
      if (i > this.defaultItemsToShow - 1) {
        item.style.display = 'none';
      }
    });
  };

  showMore = () => {
    let hiddenItems = [];
    this.items.forEach(item => {
      if (item.style.display === 'none') {
        hiddenItems.push(item);
      }
    });

    hiddenItems.forEach((item, i) => {
      if (i < this.amountOfItemsToShow) {
        item.removeAttribute('style');
      }
    });

    hiddenItems.splice(0, this.amountOfItemsToShow);
    hiddenItems.length === 0 && this.loadMoreBtn.remove();
  };

  bindEvents = () => {
    this.loadMoreBtn.addEventListener('click', this.showMore);
  };

  init = () => {
    this.hideItems();
    this.bindEvents();
  };
}
