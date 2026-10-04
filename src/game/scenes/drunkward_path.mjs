/*
<!DOCTYPE html>
<html>
<style>
p {
font-size: x-large;
text-align: justify;
}
</style>
<body>

<h1>JavaScript Strings</h1>
<h2>The split() Method</h2>

<canvas id="walkCanvas"></canvas>

<p id="demo"></p>

<script>
*/
const canvas = document.getElementById('walkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

function shuffle(array) {
  // Create a shallow copy if you don't want to mutate the original array
  const shuffled = [...array]; 
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements using destructuring assignment
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}


function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSelfAvoidingPath(totalSteps, stepLength)
{
  let attempts = 0;
  const potentialRotations = [Math.PI / 2, -Math.PI / 2, 0, 0, 0];
  console.clear();
  
  while (attempts < 100) { // Safety loop limit to prevent freezing
    attempts++;
    
    let x = canvas.width >> 1;
    let y = canvas.height >> 1;
    let currentAngle = 0; 
    
    const path = [{ x, y }];
    const visited = new Set();
    // Round to handle minor floating point variations in JavaScript math
    visited.add(`${Math.round(x)},${Math.round(y)}`); 

    let success = true;

    for (let i = 0; i < totalSteps; i++)
    {
    
      const turns = shuffle(potentialRotations);
      
      let stepFound = false;

      for (let turn of turns)
      {
        let testAngle = currentAngle + turn;
        let nextX = x + stepLength * Math.cos(testAngle);
        let nextY = y + stepLength * Math.sin(testAngle);
        if (nextX < 0 || nextX >= canvas.width || nextY < 0 || nextY >= canvas.height)
          {
            continue;
          }
        
        let key = `${Math.round(nextX)},${Math.round(nextY)}`;

        // Check if the coordinate is safe to visit
        if (!visited.has(key))
        {
          x = nextX;
          y = nextY;
          console.log(`${turn === 0? 'Same':'ROT'}`);
          currentAngle = testAngle;
          path.push({ x, y });
          visited.add(key);
          
          stepFound = true;
          break; // Exit the turn selection loop
        }
      }

      // If neither +90 nor -90 worked, we hit a dead end
      if (!stepFound)
      {
        success = false;
        break; // Break the step loop and retry the whole path
      }
    }

    if (success) {
      return path; // Return the valid path coordinates
    }
  }
  return null; // Fallback if it somehow fails 100 times
}

function drawNewPath()
{
  ctx.fillStyle = "#bbb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const totalSteps = 19; //getRandomInt(5, 11);
  const stepLength = 25; 
  
  const validPath = generateSelfAvoidingPath(totalSteps, stepLength);
  
  if (!validPath) return;

  // Draw the path
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(validPath[0].x, validPath[0].y);
  
  for (let i = 1; i < validPath.length; i++)
  {
    ctx.strokeStyle = `#${getRandomInt(0xff, 0xffffff).toString(16).padStart(6, '0')}`;
    ctx.lineTo(validPath[i].x, validPath[i].y);
  

  
  // ctx.strokeStyle = `#${getRandomInt(0xff, 0xffffff).toString(16).padStart(6, '0')}`;  //'#2196F3'; // Sleek blue line
    console.log(ctx.strokeStyle)
  //ctx.lineCap = 'round';
  //ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(validPath[i].x, validPath[i].y);
  }

  // Draw Start Point (Green)
  ctx.fillStyle = '#3478DB';
  ctx.beginPath();
  ctx.arc(validPath[0].x, validPath[0].y, 6, 0, 2 * Math.PI);
  ctx.fill();

  // Draw End Point (Red)
  const lastPoint = validPath[validPath.length - 1];
  ctx.fillStyle = '#F44336';
  ctx.beginPath();
  ctx.arc(lastPoint.x, lastPoint.y, 6, 0, 2 * Math.PI);
  ctx.fill();
}

// Initial draw
drawNewPath();


/*
const canvas = document.getElementById('walkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 200;
canvas.height = 200;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawNewPath() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 1. Set a fixed number of steps between 5 and 9
  const totalSteps = getRandomInt(5, 9);
  const stepLength = 40; 
  
  // Start in the middle of the canvas
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let currentAngle = 0; // Starting heading (facing right)

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#ff5722';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Draw the initial starting point
  ctx.arc(x, y, 4, 0, 2 * Math.PI);

  for (let i = 0; i < totalSteps; i++) {
    // 2. Choose a relative rotation: +90 or -90 degrees (in radians)
    const turn = Math.random() < 0.5 ? Math.PI / 2 : -Math.PI / 2;
    currentAngle += turn;

    // 3. Compute next line coordinates
    x += stepLength * Math.cos(currentAngle);
    y += stepLength * Math.sin(currentAngle);

    ctx.lineTo(x, y);
  }

  ctx.stroke();
}

// Generate the first one on page load
drawNewPath();
*/


/*
</script>

</body>
</html>
*/


/*
// This ONE
<!DOCTYPE html>
<html>
<style>
p {
font-size: x-large;
text-align: justify;
}
</style>
<body>

<h1>JavaScript Strings</h1>
<h2>The split() Method</h2>

<canvas id="walkCanvas"></canvas>

<p id="demo"></p>

<script>

const canvas = document.getElementById('walkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 315;
canvas.height = 280;

ctx.fillStyle = "#cacaca";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const visited = new Set();


function shuffle(array) {
  // Create a shallow copy if you don't want to mutate the original array
  const shuffled = [...array]; 
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements using destructuring assignment
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}


function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSelfAvoidingPath(totalSteps, stepLength)
{
  let attempts = 0;
  const potentialRotations = [Math.PI / 2, -Math.PI / 2, 0, 0, 0];
  console.clear();
  
  while (attempts < 100) { // Safety loop limit to prevent freezing
    attempts++;
    
    let x = canvas.width >> 1;
    let y = canvas.height >> 1;
    let currentAngle = 0; 
    
    const path = [{ x, y }];
    
    // Round to handle minor floating point variations in JavaScript math
    visited.add(`${Math.round(x)},${Math.round(y)}`); 

    let success = true;

    for (let i = 0; i < totalSteps; i++)
    {
    
      const turns = shuffle(potentialRotations);
      
      let stepFound = false;

      for (let turn of turns)
      {
        let testAngle = currentAngle + turn;
        let nextX = x + stepLength * Math.cos(testAngle);
        let nextY = y + stepLength * Math.sin(testAngle);
        if (nextX < 0 || nextX >= canvas.width || nextY < 0 || nextY >= canvas.height)
          {
            continue;
          }
        
        let key = `${Math.round(nextX)},${Math.round(nextY)}`;

        // Check if the coordinate is safe to visit
        if (!visited.has(key))
        {
          x = nextX;
          y = nextY;
          console.log(`${turn === 0? 'Same':'ROT'}`);
          currentAngle = testAngle;
          path.push({ x, y });
          visited.add(key);
          
          stepFound = true;
          break; // Exit the turn selection loop
        }
      }

      // If neither +90 nor -90 worked, we hit a dead end
      if (!stepFound)
      {
        success = false;
        break; // Break the step loop and retry the whole path
      }
    }

    if (success) {
      return path; // Return the valid path coordinates
    }
  }
  return null; // Fallback if it somehow fails 100 times
}

function drawNewPath()
{
  
  
  
  const totalSteps = 5; //getRandomInt(5, 11);
  const stepLength = 35; 
  
  const validPath = generateSelfAvoidingPath(totalSteps, stepLength);
  
  if (!validPath) return;

  // Draw the path
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(validPath[0].x, validPath[0].y);
  
  for (let i = 1; i < validPath.length; i++)
  {
    ctx.strokeStyle = `#${getRandomInt(0xff, 0xffffff).toString(16).padStart(6, '0')}`;
    ctx.lineTo(validPath[i].x, validPath[i].y);
  

  
  // ctx.strokeStyle = `#${getRandomInt(0xff, 0xffffff).toString(16).padStart(6, '0')}`;  //'#2196F3'; // Sleek blue line
    console.log(ctx.strokeStyle)
  //ctx.lineCap = 'round';
  //ctx.lineJoin = 'round';
    ctx.stroke();
    // to change color at each step
    //ctx.beginPath();
    //ctx.moveTo(validPath[i].x, validPath[i].y);
  }

  // Draw Start Point (Green)
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(validPath[0].x, validPath[0].y, 6, 0, 2 * Math.PI);
  ctx.fill();

  // Draw End Point (Red)
  const lastPoint = validPath[validPath.length - 1];
  ctx.fillStyle = '#F44336';
  ctx.beginPath();
  ctx.arc(lastPoint.x, lastPoint.y, 6, 0, 2 * Math.PI);
  ctx.fill();
}

// Initial draw
drawNewPath();
drawNewPath();




</script>

</body>
</html>
*/
