var banner = document.querySelector(".banner");
var canvas = document.getElementById('dots');

// Set canvas size
canvas.width = banner.offsetWidth;
canvas.height = banner.offsetHeight;

let ctx = canvas.getContext('2d');

let dots = [];

// Create dots with velocity
for (let i = 0; i < 30; i++) {
    let speed = 0.1; // Adjust the speed as needed
    let angle = Math.random() * Math.PI * 2; // Random angle for direction
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 3,
        color: '#ffA500',
        dx: Math.cos(angle) * speed, // Horizontal velocity
        dy: Math.sin(angle) * speed  // Vertical velocity
    });
}

// Function to draw the dots
const drawDots = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before each frame
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
    });
    dots.forEach((dot, index) => {
    try {
        // Ensure there is a next dot to compare
        if (index < dots.length - 1) {
            // Access the current and next dot's positions
            let nextDot = dots[index + 1];

            // Calculate the distance between two consecutive dots
            let duriyan = Math.sqrt(
                (nextDot.x - dot.x) ** 2 + (nextDot.y - dot.y) ** 2
            );

            // If the distance is less than 150, draw a line between the dots
            if (duriyan <= 200 || duriyan <= 100) {
                ctx.strokeStyle = dot.color || 'black'; // Default color fallback
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y); // Move to the current dot
                ctx.lineTo(nextDot.x, nextDot.y); // Draw to the next dot
                ctx.stroke();
            }
        }
    } catch (error) {
        console.error("Error drawing line between dots:", error);
    }
});
};
// Function to update the dot positions
const updateDots = () => {
    dots.forEach(dot => {
        // Update position based on velocity
        dot.x += dot.dx;
        dot.y += dot.dy;

        // Check for boundaries and reverse direction if needed (bounce effect)
        if (dot.x + dot.size > canvas.width || dot.x - dot.size < 0) {
            dot.dx = -dot.dx; // Reverse horizontal direction
        }
        if (dot.y + dot.size > canvas.height || dot.y - dot.size < 0) {
            dot.dy = -dot.dy; // Reverse vertical direction
        }
    });
};

// Animation loop
const animate = () => {
    updateDots();  // Update dot positions
    drawDots();    // Redraw dots
    requestAnimationFrame(animate); // Loop the animation
};

// Start the animation
animate();
banner.addEventListener('mousemove', (event) => {
console.log("mouse Moving");
ctx.clearRect(0, 0, canvas.width, canvas.height); 
//delete or Simply erases the old lines It clears everything
drawDots();
let mouse = {
    x: event.pageX - banner.getBoundingClientRect().left,
    y: event.pageY - banner.getBoundingClientRect().top,
}
//yahan pe mouse ki location milri
dots.forEach(dot => {
    let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
    //ye code se distance pata chalri uss dot and mouse k beech mein then
    //check agar distance so & so hai i.e.; condition toh ye wala code run karo
    if(distance <= 170){
        ctx.strokeStyle = dot.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        //Moves the drawing pen to the position of dot
        ctx.lineTo(mouse.x, mouse.y);
        //Drwas a straight line from the dot's position to the mouse's position
        ctx.stroke();
    }
});
});
banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})




