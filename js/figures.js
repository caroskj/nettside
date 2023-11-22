


var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

function rect(width, height, mode, color, x, y) {
                console.log("function for å tegne et rektangel som pyret, med plassering inkludert");
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("y", y)
                rect.setAttribute("x", x)
                rect.setAttribute("width", width);
                rect.setAttribute("height", height);
                rect.setAttribute("fill", color);
                return rect;
}

  function circle(radius, mode, color, cx, cy) {
                console.log("function for å tegne en sirkel som pyret, med plassering inkludert");
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", cx);
                circle.setAttribute("cy", cy);
                circle.setAttribute("r", radius);
                circle.setAttribute("fill", color);
                return circle;
  }

  svg.appendChild(rect(40, 50, "solid", "red", 100, 100));

  
