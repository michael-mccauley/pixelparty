function init(){
    console.log("hello init");

    const selectedColor = $("#selectedColor");
    const clickBox = $("#clickBox");

    selectedColor.on('change', (event) => {
        console.log(selectedColor.val());
    });

    // Test pixel
    clickBox.on('click', (event) => {
        clickBox.css("background-color", selectedColor.val());
    });

    // Main Canvas
    let stage = new createjs.Stage("canvas");
    let bg = new createjs.Shape();
    bg.graphics.beginFill("white").drawRect(0, 0, stage.canvas.width, stage.canvas.height);
    stage.addChild(bg);

    createjs.Touch.enable(stage);
    stage.mouseEnabled = true;
    stage.enableMouseOver(10);
    let padding = 1;
    let width = (stage.canvas.width / 100) - 1;
    let height = (stage.canvas.height / 100) - 1;
    let cols = 100;
    for(var i=0; i < 10000; i++) {
        var s = new createjs.Shape();
        s.outColor = "#f8f8f8"
        s.graphics.beginFill(s.outColor).drawRect(0, 0, width, height).endFill();
        s.x = (width + padding) * (i%cols);
        s.y = (height + padding) * (i/cols|0);
        s.mouseEnabled = true;
        s.persistColor = false;
        s.addEventListener("mouseover", handleMouseOver);
        s.addEventListener("mouseout", handleMouseOut);
        s.addEventListener("click", click);
        stage.addChild(s)
    }
    
    createjs.Ticker.addEventListener("tick", tick);
    
    function click(event){
        let target = event.target;
        target.persistColor = true;
        target.graphics.clear().beginFill(selectedColor.val()).drawRect(0, 0, width, height).endFill();
    }

    function handleMouseOver(event) {
        let target = event.target;
        target.graphics.clear().beginFill(selectedColor.val()).drawRect(0, 0, width, height).endFill();
    }
    
    function handleMouseOut(event) {
        let target = event.target;
        if (!target.persistColor){
            target.graphics.clear().beginFill(target.outColor).drawRect(0, 0, width, height).endFill();
        };
    }
    
    function tick() {
        stage.update();   
    }

}
