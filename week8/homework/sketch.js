let pColor                   // pendulum color
let p2Color                  // second pendulum color
let posX, posY, velX, velY   // position and velocity of the wandering circle

function setup() {
  createCanvas(800, 600)
  colorMode(HSB, TWO_PI, 1, 1, 1)

  pColor = color(0, 0.8, 0.8)       // start with red
  setInterval(colorChange, 2000)    // run colorChange every 2 seconds

  p2Color = color(PI, 0.8, 0.8)     // start with cyan
  setInterval(colorChange2, 1700)   // change the second pendulum color every 1.7 seconds

  posX = width * 0.5                  // start in the center
  posY = height * 0.5
  velX = random(-4, 4)                // random starting direction
  velY = random(-4, 4)
  setInterval(changeVelocity, 1300)   // change direction every 1.3 seconds
                                    
}

function draw() {
  background(0)

  // pendulum
  push()
  translate(width * 0.5, 0)              
  rotate(cos(millis() * 0.002) * 0.5)    // swings left and right over time
                                         // 0.002 = faster speed, 0.5 = narrower swing
  stroke(pColor)                         // string color
                                         // use pColor instead of red
  strokeWeight(3)                        // thicker string
  line(0, 0, 0, 300)                     // pendulum string
                                         // longer (200 -> 300)
  fill(pColor)                           // bob color
                                         // use pColor instead of red
  circle(0, 300, 50)                     // pendulum bob
                                         // moved to the end of the longer string
  pop()

  // second pendulum (shorter, faster, wider swing)
  push()
  translate(width * 0.5, 0)              // same point
  rotate(sin(millis() * 0.003) * 0.7)    // sin() instead of cos()
                                         
  stroke(p2Color)                        // its own color
  strokeWeight(3)
  line(0, 0, 0, 180)                     // shorter string
  fill(p2Color)
  circle(0, 180, 30)                     // smaller bob
  pop()

  //  wandering circle
  posX += velX   // move by velocity
  posY += velY

  // bounce back inside when it hits a wall (abs() always makes a number positive)
  if (posX - 20 <= 0) velX = abs(velX)
  if (posX + 20 >= width) velX = -abs(velX)
  if (posY - 20 <= 0) velY = abs(velY)
  if (posY + 20 >= height) velY = -abs(velY)

  noStroke()               // no outline
  fill(0, 0, 1)            // white
  circle(posX, posY, 40)   // wandering circle
}

// pick a random hue
function colorChange() {
  pColor = color(random(TWO_PI), 0.8, 0.8)
}

// pick a random hue for the second pendulum
function colorChange2() {
  p2Color = color(random(TWO_PI), 0.8, 0.8)
}

// pick a new random velocity
function changeVelocity() {
  velX = random(-4, 4)
  velY = random(-4, 4)
}