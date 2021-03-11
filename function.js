function Circle(x,y,r){
    this.x_coordinate=x;
    this.y_coordinate=y;
    this.radius=r;
    this.printData=function(){
        document.write("<h1>"+this.x_coordinate+"</h1>");
        document.write("<h1>"+this.y_coordinate+"</h1>");
        document.write("<h1>"+this.radius+"</h1>");
    }
}