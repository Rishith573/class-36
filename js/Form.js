class Form{
    constructor(){

    }

    display(){
        var title = createElement("H1");
        title.position(200, 40);
        title.html("CAR RACING GAME");
        var input = createInput();
        input.position(500, 250);
        var button = createButton("play");
        button.position(500, 300);
        button.mousePressed(function(){
            var name = input.value();
            var greeting = createElement("H3");
            greeting.html("Hello "+ name)
        })
    }
}