function rect(width, height, mode, color, x, y) {
                console.log("function for å tegne et rektangel som pyret, med plassering inkludert");
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("y", y)
                rect.setAttribute("x", x)
                rect.setAttribute("width", width);
                rect.setAttribute("height", height);
                rect.setAttribute("fill", color);
                return rect;
