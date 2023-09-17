/*
Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values:
00	01	02	03	04
10	11	12	13	14
20	21	22	23	24
30	31	32	33	34
40	41	42	43	44

The dir argument will be a string:
up
down
left
right

If the position is not inside the level grid the method should throw an error and not move the hero
*/

Hero.prototype.move = function (dir) {
  let x = parseInt(this.position[0]),
      y = parseInt(this.position[1]);
  
  if (dir === 'up') x--;
  else if (dir === 'down') x++;
  else if (dir === 'left') y--;
  else if (dir === 'right') y++;
  
  if (x < 0 || x > 4 || y < 0 || y > 4) throw new Error;
  
  this.position = `${x}${y}`;
}
