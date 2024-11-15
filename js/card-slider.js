var StackCards = function (element) {
  this.element = element;
  this.items = this.element.getElementsByClassName("card");
  this.scrollingListener = false;
  this.scrolling = false;
  initStackCardsEffect(this);
};

function initStackCardsEffect(element) {
  var observer = new IntersectionObserver(stackCardsCallback.bind(element));
  observer.observe(element.element);
}

function stackCardsCallback(entries) {
  if (entries[0].isIntersecting) {
    if (this.scrollingListener) return; 
    stackCardsInitEvent(this);
  } else {
    if (!this.scrollingListener) return;
    window.removeEventListener("scroll", this.scrollingListener);
    this.scrollingListener = false;
  }
}

function stackCardsInitEvent(element) {
  element.scrollingListener = stackCardsScrolling.bind(element);
  window.addEventListener("scroll", element.scrollingListener);
}

function stackCardsScrolling() {
  if (this.scrolling) return;
  this.scrolling = true;
  window.requestAnimationFrame(animateStackCards.bind(this));
}

function animateStackCards() {
  var top = this.element.getBoundingClientRect().top;
  var offsetTop = 100,
    cardHeight = 300,
    marginY = 15;
  for (var i = 0; i < this.items.length; i++) {
    var scrolling = offsetTop - top - i * (cardHeight + marginY);
    if (scrolling > 0) {
      this.items[i].setAttribute(
        "style",
        "transform: translateY(" +
          marginY * i +
          "px) scale(" +
          (cardHeight - scrolling * 0.02) / cardHeight +
          ");"
      );
    }
  }

  this.scrolling = false;
}

var stackCards = document.getElementsByClassName("card-deck-js");
var intersectionObserverSupported =
  "IntersectionObserver" in window && "IntersectionObserverEntry" in window;

if (stackCards.length > 0 && intersectionObserverSupported) {
  for (var i = 0; i < stackCards.length; i++) {
    new StackCards(stackCards[i]);
  }
}
