const player = {
    name: "kuromi",
    point: 10,
    animal: true,
};

console.log(player);
// console.log(player.name);
// console.log(player["point"]);

player.animal = false;
console.log(player.animal);

player.point = player.point + 5;
console.log(player.point);

player.lastName = "yoon";
console.log(player);
