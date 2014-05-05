var Weapon = function(board, locations, id){
  this.id = id;
  this.locations = locations;
  this.locations[id] = {};
  this.locations[id].x = Math.random() * 500;
  this.locations[id].y = Math.random() * 500;
  this.fill = 'blue';
  console.log(id, this.locations[id].x, this.locations[id].y);
  //console.log(board);
  //this.render(board);
};

Weapon.prototype.render = function(board){
  this.el = board.append('svg:circle')
      .attr('class', 'weapon')
      .attr('cx', this.locations[this.id].x)
      .attr('cy', this.locations[this.id].y)
      .attr('r', 30)
      .attr('fill', this.fill);
};

Weapon.prototype.move = function(){
  this.locations[this.id].x += 0.1;
  this.locations[this.id].y += 0.1;  
};
