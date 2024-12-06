var banner = document.querySelector(".banner");
var canvas = document.getElementById('dots');

//After selecting html components we should define the height and width of canvas

canvas.width = canvas.clientWidth; // Adjust the width according to client width
canvas.height = canvas.clientHeight;// same for height

let ctx = canvas.getContext('2d');

let dots = [];
//array of circles initially it will be empty & then we will push elements in array using for loops
for(let i = 0; i < 30; i++){
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        //this is the circle fyn followed by size and color
        size: Math.random() * 3 + 3,
        color: '#ffA500',
    })
}

const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        //start drawing
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        //creates a circular arc centered at x, y with a radius of radius
        ctx.fill();
        //fills the current or given path with the current fillStyle 
    })
}
drawDots();

    //ab aata apna wala code
    //code for connecting dots
    //mera Code Updated by GPT bahi Sahaba
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
                if (duriyan <= 280 || duriyan <= 100) {
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
banner.addEventListener('mousemove', (event) => {
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
        if(distance < 200){
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
    //ye hogaya spider kind of web

    // //ab aata apna wala code
    // //code for connecting dots
    // //mera Code Updated by GPT bahi Sahaba
    // dots.forEach((dot, index) => {
    //     try {
    //         // Ensure there is a next dot to compare
    //         if (index < dots.length - 1) {
    //             // Access the current and next dot's positions
    //             let nextDot = dots[index + 1];
    
    //             // Calculate the distance between two consecutive dots
    //             let duriyan = Math.sqrt(
    //                 (nextDot.x - dot.x) ** 2 + (nextDot.y - dot.y) ** 2
    //             );
    
    //             // If the distance is less than 150, draw a line between the dots
    //             if (duriyan < 150) {
    //                 ctx.strokeStyle = dot.color || 'black'; // Default color fallback
    //                 ctx.lineWidth = 1;
    //                 ctx.beginPath();
    //                 ctx.moveTo(dot.x, dot.y); // Move to the current dot
    //                 ctx.lineTo(nextDot.x, nextDot.y); // Draw to the next dot
    //                 ctx.stroke();
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Error drawing line between dots:", error);
    //     }
    // });
  
    // dots.forEach(dot => {
    //     for (let i = 0; i < dot.x.length - 1; i++){
    //     let duriyan = Math.sqrt((dot.x[i + 1] - dot.x[i]) ** 2 + (dot.y[i + 1] - dot.y[i]) ** 2 );

    //     if(duriyan < 150){
    //         ctx.strokeStyle = dot.color;
    //         ctx.lineWidth = 1;
    //         ctx.beginPath();
    //         ctx.moveTo(dot.x[i + 1], dot.x[i]);
    //         ctx.lineTo(dot.x[i + 1], dot.x[i]);
    //         ctx.stroke();
    //     }
    // }
    // }) 
});

banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})