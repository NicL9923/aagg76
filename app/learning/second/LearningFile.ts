import { createInterface } from "node:readline/promises";

// Goal: use all programming concepts to make a console adventure game

async function main() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  const name = await rl.question("What is your name? ");
  console.log(`Nice to meet you, ${name}!`);

  // *************AIDEN*************

  // Give the player health, a weapon name, and a weapon damage value,
  // and a list of items in their backpack

  const hp: number = 100;
  const weaponName: string = "gun";
  const weaponDamage: number = 10;
  const isDead: boolean = false;
  const inBackpack: string[] = ["gun", "camera", "flachLight", "hammer"];

  // Write a function that tells the player they died

  function walk(walkedMiles: number) {
    console.log("You just walked " + walkedMiles + " miles");
  }

  function died() {
    console.log("you died on YouTube");
  }

  // Ask the user if they want to go LEFT or RIGHT, and handle each case. One way must be death

  const door = await rl.question("left or RIGHT?");

  if (door == "left") {
    walk(100000);
  } else if (door == "right") {
    died();
  }

  // Write a function to tell the player what's in their backpack, and call it

  function listinBackpack() {
    console.log("Your items: ");

    inBackpack.forEach(function (item) {
      console.log(item);
    });
  }

  listinBackpack();

  // *************END*************

  rl.close();
}

main().catch((err) => {
  console.error("Unexpected error", err);
  process.exit(1);
});
