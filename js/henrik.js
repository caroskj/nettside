const smiley = document.getElementById("smiley");
        const ctx = smiley.getContext("2d");

        ctx.fillStyle = "yellow";
        ctx.fillRect(100, 100, 300, 300);

        ctx.fillStyle = "black";
        ctx.fillRect(120, 130, 50, 50);

        ctx.fillStyle = "black";
        ctx.fillRect(320, 130, 50, 50);

        ctx.fillStyle = "white";
        ctx.fillRect(120, 300, 250, 50);

        ctx.fillStyle = "pink";
        ctx.fillRect(220, 320, 50, 100);
