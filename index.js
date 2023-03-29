// Iteration 1: Names and Input

const hacker1 ="Arantxa";
const hacker2 ="Robert";

console.log(`The driver's name is ${hacker1}.`);

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }

  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }

  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let driverSpaced = '';

for (i=0; i<hacker1.length; i++) {
    if (i === hacker1.length-1) {
        driverSpaced += hacker1[i].toUpperCase();
        continue;
    }
        driverSpaced += hacker1[i].toUpperCase() + ' ';
}

console.log(driverSpaced);

let navigatorReverse = '';
for (i=hacker2.length-1; i>=0; i--) {
  navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


//Bonus 1
let sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare felis sit amet ipsum mollis, in congue enim sagittis. Mauris imperdiet porttitor magna rhoncus imperdiet. Nulla eget odio erat. Donec ultrices fringilla rutrum. Sed in pulvinar sapien. Ut ac neque sed neque placerat ultricies ut ut odio. Nullam dictum vehicula augue, non scelerisque leo pulvinar a. Etiam eget venenatis quam.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla at leo non purus pharetra blandit nec sed eros. Suspendisse commodo nisl eget ornare sagittis. Vivamus ipsum tortor, elementum dictum ipsum at, tempus iaculis magna. Proin id justo commodo, vulputate nisi non, varius nulla. Duis ac quam nisi. Phasellus vehicula, leo sit amet consectetur dictum, tortor lectus euismod justo, ut gravida dolor libero at ligula.

Sed placerat et lectus eu finibus. Integer id quam facilisis, bibendum velit at, semper sem. Suspendisse ut diam ut augue tincidunt feugiat. Etiam in rhoncus diam. Vestibulum in luctus quam. In interdum turpis vel est suscipit malesuada. Aliquam erat volutpat. Ut quis ante et eros fermentum hendrerit.`

let sentenceArray = sentence.replaceAll('\n\n', ' ');

console.log(sentenceArray.split(' ').length);
