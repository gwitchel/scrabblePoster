
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#16DB93")
  var grid = populateGrid(15);
  tileOne = new Tile(grid,3,3,4)

}

function draw() {
}

function populateGrid(size){
  // create a populate the grid 
  m = [[1,0],[0,1]]
  var grid = [];
  for(var i = 0; i*m[0][0]+ m[0][1]*windowHeight< windowWidth; i+= size){
    grid.push([]);
    for(var j = 0; m[1][0]*windowWidth+m[1][1]*j < windowHeight; j+= size){
      grid[i/size].push([(m[0][0]*i+m[0][1]*j),(m[1][0]*i+m[1][1]*j)])
    }
  }
  
  fill(51);
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      ellipse(grid[i][j][0], grid[i][j][1],2,2);
    }
  }
  return grid; 
}

class Block{
  constructor(grid,x,y,type){
    tiles = [new Tile(grid,x,y,type)]
    this.type = type; 
    if(this.type == 1){ tiles.push(new Tile(grid,x,y-floor(random(0,(y-1))),type))}
    if(this.type == 2){ tiles.push(new Tile(grid,x,y+floor(random(y+1,windowHeight)),type))}
    if(this.type == 3){ tiles.push(new Tile(grid,x+floor(random(x+1,windowWidth),y),type))}
    if(this.type == 4){ tiles.push(new Tile(grid,x-floor(random(x-1,windowWidth),y),type))}
    if(this.type == 5){ 
      if(x > y ){
        randInt = floor(random(y+1,windowHeight))
      } else {
        randInt = floor(random(x+1,windowHeight))
      }
      tiles.push(new Tile(grid,x-randInt,y-randInt,type));
    }
    if(this.type == 5){ 
      if(x > y ){
        randInt = floor(random(1,x))
      } else {
        randInt = floor(random(1,y))
      }
      tiles.push(new Tile(grid,x-randInt,y-randInt,type));
    }
    var fills = ["#54478C","#2C699A","3048BA8","#0DB39E","#83E377","#B9E769","#EFEA5A","#F1C453","#F29E4C"]
    noStroke();
  }
}

class Tile {
  constructor(grid,x,y,type){
    this.type = type; 
    if (type === 1 || type === 2){
      this.p1 = [grid[x][y][0],grid[x][y][1]];
      this.p2 = [grid[x+1][y][0],grid[x+1][y][1]];
      this.p3 = [grid[x][y+1][0],grid[x][y+1][1]];
      this.p4 = [grid[x-1][y+1][0],grid[x+1][y+1][1]];
    }
    if (type === 3 || type === 4){
      this.p1 = [grid[x][y][0],grid[x][y][1]];
      this.p2 = [grid[x+1][y-1][0],grid[x+1][y-1][1]];
      this.p3 = [grid[x+1][y][0],grid[x+1][y][1]];
      this.p4 = [grid[x][y+1][0],grid[x][y+1][1]];
    }
    if (type === 6 || type === 6){
      this.p1 = [grid[x][y][0],grid[x][y][1]];
      this.p2 = [grid[x+1][y][0],grid[x+1][y][1]];
      this.p4 = [grid[x][y+1][0],grid[x][y+1][1]];
      this.p3 = [grid[x+1][y+1][0],grid[x+1][y+1][1]];
    }
  }
}

/* 
GraphTop(){
    quad(this.p1[0], this.p1[1], this.p2[0], this.p2[1], this.p3[0], this.p3[1], this.p4[0], this.p4[1])
  }
  GraphSides(){
    if (this.type === 1){ // lines go up 
      quad(this.p3[0], this.p3[1], this.p4[0], this.p4[1], this.p4[0], 0, this.p3[0], 0)
      quad(this.p3[0], this.p3[1], this.p2[0], this.p2[1], this.p2[0], 0, this.p3[0], 0)
    }
    if (this.type === 2){ // lines go down
      fill(0,0,0);
      quad(this.p3[0], this.p3[1], this.p4[0], this.p4[1], this.p4[0], windowHeight, this.p3[0], windowHeight)
      fill(100,100,100);
      quad(this.p3[0], this.p3[1], this.p2[0], this.p2[1], this.p2[0], windowHeight, this.p3[0], windowHeight)
    }
    if (this.type === 3){ // lines go right
      fill(100,100,100);
      quad(this.p1[0], this.p1[1], this.p4[0], this.p4[1],windowWidth, this.p4[1],  windowWidth,this.p1[0])
      fill(0,0,0);
      quad(this.p1[0], this.p1[1], this.p2[0], this.p2[1],windowWidth, this.p2[1],  windowWidth, this.p1[0])
    }
    if (this.type === 4){ // lines go left
      fill(100,100,100);
      quad(this.p1[0], this.p1[1], this.p4[0], this.p4[1],0, this.p4[1],  0,this.p1[0])
      fill(0,0,0);
      quad(this.p1[0], this.p1[1], this.p2[0], this.p2[1],0, this.p2[1],  0, this.p1[0])
    }
    if (this.type === 5){ // lines go towards viewer
      fill(100,100,100);
      quad(this.p1[0], this.p1[1], this.p4[0], this.p4[1],0, this.p4[1],  0,this.p1[0])
      fill(0,0,0);
      quad(this.p1[0], this.p1[1], this.p2[0], this.p2[1],0, this.p2[1],  0, this.p1[0])
    }
  */ 