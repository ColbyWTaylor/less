let cyborg = "cyborg";
let cloner = cyborg;
let copycat = "cyborg";

console.log(
  "cloner is the same as cyborg. This is " + Object.is(cyborg, cloner)
);
console.log(
  "copycat is the same as cloner. This is " + Object.is(copycat, cloner)
);
console.log(
  "copycat is the same as cloner. This is " + Object.is(copycat, cloner)
);

cyborg = "waffles";

console.log(
  "cyborg (which was sadly turned into a toaster) is the same as cloner. This is now " +
    Object.is(cyborg, cloner)
);
