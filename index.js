var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();

//controller for the scrollMagic
const controller = new ScrollMagic.Controller();

// elements
tl.from("blockquote", 0.5, { x: 200, opacity: 0 });
tl.from("span", 1,{width: 0}, "=-.5");
tl.from("#office", 0.5, {x: -200, opacity: 0}, "=-1");
tl.from("#building", 1, {x: 200, opacity: 0}, "=-.7");

// from -> before 
tl2.from("#box", 1, {opacity: 0, scale: 0});

// to -> after
tl2.to("#box", .5, {
  left: "20%",
  scale: 1.3,
  borderColor: 'white',
  borderWidth: 12,
  boxShadow: '1px 1px 0px rba(0,0,0,.09)'
});


const scene = new ScrollMagic.Scene({
  // sticky = section
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%",
})

  .setPin(".sticky")
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})

  .setTween(tl2)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}

