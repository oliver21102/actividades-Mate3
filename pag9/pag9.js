(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1160,
	height: 786,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/luz.jpg?1494940649700", id:"luz"},
		{src:"sounds/bien.mp3?1494940649700", id:"bien"},
		{src:"sounds/mal.mp3?1494940649700", id:"mal"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.luz = function() {
	this.initialize(img.luz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1160,786);


(lib.SímboloBien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleNYQgtgLggggIh1hzIgNgRIn+n+QgygygBhGQAAhEAxgxIB0h0QAxgxBGABQBFABAyAyIGVGUIQBwKQAxgyBGgBQBHAAAxAwIB0B0QAxAxgBBGQAABFgyAzIxsR2IgLALIhzB0IgBABIgLAJQgYAVgfAJIgIADQgWAGgXAAQgUAAgUgFg");
	this.shape.setTransform(-0.5,0.5,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AribVQlUiRkHkGQkGkHiQlVQiWlgAAmCQAAmACWlhQCQlVEGkHQEHkGFUiRQFiiVGAAAQGCAAFgCVQFVCREGEGQEIEHCQFVQCUFgAAGBQAAGCiUFgQiQFVkIEHQkGEGlVCRQlgCVmCAAQmAAAliiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50.1);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,51,0.6)").s().p("AmpFWQhKABAAiEIAAmmQAAiCBKAAINTAAQBKAAAACCIAAGmQAACEhKgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-34.3,100,68.6);


(lib.Símbolo4s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D210D").ss(3.1,1,1).p("AAAnzQhlAAhdAoQhZAmhGBFQhFBFgmBaQgnBdAABkQAABmAnBdQAmBZBFBGQBGBFBZAmQBdAnBlAAQBlAABdgnQBagmBFhFQBFhGAmhZQAohdAAhmQAAhkgohdQgmhahFhFQhFhFhagmQhdgohlAAgAlshjILhACIlwFvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjCHMQhZgmhFhFQhFhFgmhZQgoheAAhlQAAhkAohdQAmhZBFhFQBFhGBZgmQBegoBkAAQBlAABdAoQBZAmBFBGQBGBFAmBZQAoBdAABkQAABlgoBeQgmBZhGBFQhFBFhZAmQhdAohlAAQhkAAhegogAAFEOIFvlvIrggCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkZEZQh1h0ABilQgBikB1h1QB1h0CkAAQClAAB0B0QB1B1AACkQAAClh1B0Qh0B1ilAAQikAAh1h1g");
	this.shape_2.setTransform(4.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103.1,103.1);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.298)").s().p("Ar+FWQiFABAAiEIAAmmQAAiCCFAAIX+AAQCEAAAACCIAAGmQAACEiEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-34.3,180,68.6);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBWIgGgBIgEgDIgBgCIAAicIABgDIADgBIAGgCIAJAAIAJAAIAGACIADABIABADIAAAUQAGgJAFgFQAEgGAFgDIAKgFQAFgBAEgBIAGABIAFABIAFACIADABIABACIABADIAAAGIABAJIgBAKIgBAHQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgEgBIgDgBIgFgBIgGgBQgEAAgDACQgEABgEAEQgEADgEAFIgIANIAABgIgBACIgDADIgHABIgKABIgMgBg");
	this.shape.setTransform(54.7,-33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkBVQgLgEgHgGQgHgHgFgJQgEgKAAgMQAAgNAFgLQAFgKAMgFQAKgGAQgDQAPgEAUABIAPAAIAAgKQAAgHgCgGQgBgFgDgEQgEgDgFgCQgHgCgGAAQgLAAgJACIgPAFIgLAGQgFADgDgBIgDgBIgCgDIgCgGIgBgHIABgJQACgDACgCIAJgGIAOgGIASgEQAKgCAIAAQASAAANAEQANADAJAIQAJAHAEAMQADAMAAAQIAABnQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIgFABIgLABIgMgBQgDAAgCgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIAAgMQgJALgMAFQgNAGgNAAQgNAAgKgDgAgFANQgIABgFAEQgEADgDAEQgCAFAAAGQAAAJAHAGQAFAGAMAAQAHAAAIgFQAHgEAJgKIAAgaIgRAAQgLgBgFACg");
	this.shape_1.setTransform(38.1,-33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBSQgOgGgJgLQgKgLgFgPQgFgQAAgVQAAgVAGgRQAGgRALgMQAKgLAPgFQAOgGAPAAIAOABIANAEIAKAEIAHAFIADADIABAEIABAFIAAAHQAAALgCAEQgCAEgCAAQgDAAgEgDIgIgFIgLgGQgGgCgJAAQgQAAgIANQgJAOAAAYQAAAMACAKQACAJAFAHQAEAGAFAEQAHADAJAAQAJAAAHgDIALgGIAIgGQAEgDACAAIADABIABADIABAGIABAKIgBAIIAAAFIgBADIgDAEIgHAEIgMAGIgOADQgIACgIAAQgQAAgOgGg");
	this.shape_2.setTransform(22.3,-33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJB3IgHgBIgEgDIgBgDIAAiaIABgDIAEgCIAHgCIAJgBIAKABIAHACQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIABADIAACaIgBADIgDADIgHABIgKAAIgJAAgAgThNQgFgFAAgNQAAgNAGgFQAFgFANAAQAOAAAFAFQAGAFAAAMQAAAOgGAFQgFAFgOAAQgOAAgFgFg");
	this.shape_3.setTransform(10.3,-36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRB6IgHAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBgDIAAh9IgUAAQgDAAgCgEQgCgEABgKIAAgJIABgFIACgDIAEgBIATAAIAAgNQAAgQADgMQADgMAHgIQAGgIAJgEQAKgEAPAAIANABIAJACIAFADIACAEIABAFIAAAIIAAAIIgBAGIgBACIgCAAIgDAAIgEgBIgFgCIgHAAQgFAAgDABQgEABgCADQgCAEgBAFIgBANIAAAOIAdAAIACABIACADIACAFIABAJQgBAKgCAEQgBAEgDAAIgdAAIAAB9IgBADIgEADIgHAAIgJABIgKgBg");
	this.shape_4.setTransform(0.5,-37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJB3IgHgBIgEgDIgBgDIAAiaIABgDIAEgCIAHgCIAJgBIAKABIAHACQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIABADIAACaIgBADIgDADIgHABIgKAAIgJAAgAgThNQgFgFAAgNQAAgNAGgFQAFgFANAAQAOAAAFAFQAGAFAAAMQAAAOgGAFQgFAFgOAAQgOAAgFgFg");
	this.shape_5.setTransform(-10,-36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBWIgGgBIgEgDIgBgCIAAicIABgDIADgBIAGgCIAJAAIAJAAIAGACIADABIABADIAAAUQAGgJAFgFQAEgGAFgDIAKgFQAFgBAEgBIAGABIAFABIAFACIADABIABACIABADIAAAGIABAJIgBAKIgBAHQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgEgBIgDgBIgFgBIgGgBQgEAAgDACQgEABgEAEQgEADgEAFIgIANIAABgIgBACIgDADIgHABIgKABIgMgBg");
	this.shape_6.setTransform(-20,-33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBTQgQgGgLgKQgKgLgFgRQgFgQgBgVQABgUAFgQQAGgRAKgMQAKgLAPgHQAPgGAQAAQAUAAAOAGQAOAGAJAKQAJAKAFAPQADAOAAAQIAAAHQABAGgEAEQgDAEgHAAIheAAQABAKACAIQADAIAEAGQAGAFAIADQAHAEALAAQALAAAJgCIAPgEIAKgDIAIgCIACABIACACIABAEIAAAHIAAAHIgBAFIgBADIgCACQAAACgGACIgMAEIgTADQgKACgMAAQgSAAgQgFgAgLg0QgHADgEAGQgDAFgDAHQgCAHgBAJIBAAAQABgTgIgLQgIgLgQAAQgHAAgGAEg");
	this.shape_7.setTransform(-36.3,-33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBUIgJgBIgFgCIgCgGIgviMIgCgFIgBgFIAAgCIABgDQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIAGgCIALAAIAMAAIAHACQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAIACAEIAiBxIABAEIABgEIAjhxIACgEQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIAHgCIALAAIAKAAIAHACIADACIABADIAAACIgBADIAAAEIgCADIgvCMIgCAGIgFADIgJAAIgPABIgOgBg");
	this.shape_8.setTransform(-53.8,-33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49723").s().p("AAEABIgNgBIAHAAIAMgBQABADgEAAIgDgBg");
	this.shape_9.setTransform(-88.3,-9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F49723").s().p("AAAgEIACADIgDAFg");
	this.shape_10.setTransform(-103.7,-10.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49723").s().p("AAAgGIACABIgDAMQABgLAAgCg");
	this.shape_11.setTransform(-105.4,-31);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F49723").s().p("AgCgHIAHALIgIAEQACgCgBgNg");
	this.shape_12.setTransform(112.4,-16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49723").s().p("AgDACIAHgLIgIATg");
	this.shape_13.setTransform(112.4,-11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F49723").s().p("AgOAFQgFgFAFgBIARgEQgDACAKABQAKACgDAAQgNAAgCACQgCAEgGAAIgIgBg");
	this.shape_14.setTransform(-30.1,-65.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F49723").s().p("AgCAHIAEgNIABANg");
	this.shape_15.setTransform(0.4,-69.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F49723").s().p("AgJABIANgDQANABgGABIgLADIgEAAQgMAAAHgCg");
	this.shape_16.setTransform(35.6,-67.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49723").s().p("AgDgDQAEADAEAAIgJAEg");
	this.shape_17.setTransform(42.4,-68.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49723").s().p("AgIACQgCAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABAAIAVgBQABAAAAAAQAAABAAAAQAAAAgBAAQgBAAgBAAIgIACIgEAAIgFAAg");
	this.shape_18.setTransform(34.6,-69.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F49723").s().p("AgMAAQgBAAAKAAIARAAQgHAAABABg");
	this.shape_19.setTransform(60.6,-69.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49723").s().p("AgFACIAGgEIAFAFg");
	this.shape_20.setTransform(69.4,-69.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F49723").s().p("AgDAAQATgHgGAHQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgCAEgDgBIgJABQgIAAAMgEg");
	this.shape_21.setTransform(54.6,-73.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F49723").s().p("AgMAAQAbgFgEAHIACAAIgQABQgIAAgBgDg");
	this.shape_22.setTransform(70.3,-71.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F49723").s().p("AgFAAQADgBAIAAIABACIgHABQgJgBAEgBg");
	this.shape_23.setTransform(84.2,-69.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F49723").s().p("AgHAAIAPgBIgBABIABACQgIgCgHAAg");
	this.shape_24.setTransform(66,-73.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F49723").s().p("AoEFyQhFgHgUADQAEgBACgCQgcAFgugFQgrgEgDABIgFgHQgfAIgOACQgOABglgEIADgCQABgBgFgCQgMAGgJACQgOADgXgBIABgCIg1ABQAAgHgOgBIgQAAIgVAAQgbgDgPgIQgSgLAAgLQgMgCgTgRQgRgRgKgRQABAAAAgGQgIgGgEgNQgEgMABgOIADgZQACgOgBgGQgCgKgDABQgCABgEAGQAGgQgHgkQgGgkABgDQAAgMAFAAQAIAAABgBQgBgPgKAAQgGAAAFgXQACANABgCQABgGANgZQAMgTgDgJIgEAKQgDgNAIghQAGgagIgDIgHADQAFgagCgKQgBgMAEgZIABABQgBgFADgXQABgMgHgIIgCAJIACgUIAHgbIAJgSQAAgDAEgIQAFgIADgCQgDgCAIgLQAHgLAMgJQAWgSAYgGQgRAHAEADQABABAJAAQAIgKAKgDQAKgDAQACQACgaAqAAQgNADACACQAEACALgDQAAAAAAAAQABABgBAAQAAABgBAAQAAABgBAAQgEADACACQAOgGAVABQAdACAOgCQgHADACACIAHAGQACgHAWAFQATAFgHgJQAiAFBTABQBIAAAOAGQAFADANgDIAVgDIgBAGQARgGAOgCQAQgCATgFQgMAFADADQACADAOAFIAbgNIAGAJQALgDAZADIgEAAIACACQADgHAbgEQAegEACgCQAGAGAQgCQAPgBAFAFIAPgEQgFgEAAgDQAAgDAIABIACAAIAFAHQATgCAMAAIgMgEIAOAEIAEAAIgDAAQANADALgDQASAFAugGQAsgHAXAIQgPgDgDADQAPAAAmAEQAeAEAMgDIgBgHQAqgFAYAAIACgIIA/gBQAqgCAMAKQAEgEAWACQAcACAHgBIAEAGQAYACAbgEQAcAIAogDIBAgEIAAACIAqgEQgBAAgBABQAAAAAAAAQAAAAABAAQABAAABgBQAMgDAHABQAWgFAdAHIAaAAQgRADAHAEQAOAHAAACIARgGQADACgEACQgEACAHABIAbgEQAWgCAGgEQgCgDgJgCIAAAAIAFgDQANABABgBIgCgEQALAFATACQAOACAKAFQgJgGAbABQAfAAgIgHQAJAGAFAAQAEgBAGAFQgQgCgVAFIghAIIATAHQgHAHgVgEQgYgFgEABQAFgCALABQAIACACABIgFgIQgSgDgUAEIghAHQAJABgLADQgOAEAHAEIAPgBQAEACgGACIgOAEQgXgDhAAAQg3gBgJgEQAHACALgBQALgBAHgCIgXgEIAbADQARADAPgBQgBgBAFgJQADgHgMgFQgagFgWAJQgaAKgegBIABgEQgBgEgTACQgfAEgVAJQgUAJAAAJQA1gKAFAIIgfAGQgRADgBADQgJgFAQgBQAOgBgMgFQgHABgHACIgJADQAFgDgIgDIgLgEQgUAAgfgDIg2gDQgHgFACgCQgQACgQAJQgQAKAFAEIgYgBQgLgCgLACIANAEIgEAAQgRgBgCAFQgMABgBgDQgBgEgDgBQgMAFAAACQgHgEANgKQALgLgHgEQgHgEgagGIgYgHQgIAHACAUQADAUAJAJQgBADgJgEIgSgGQgOgFgTAFQgUAFgKgBIARgGQgCgCgSACQgRACgEACIAHgKQAGgIgHgDQgcgBgZAKQgYAKACAIIA9gKQABADgVAFQgWAFABAFIg4gDQAfgCgLgFQgOAAgDgBIgLgFQAUgHAggRQAegRAOgKIgdAGIgHgFQgYAEgcAUQgHAFgXATQgPgBAAgKQAAgIAGgEQgVgBgWANQgVAMgWgBIAQADQgEABgWAAQgTgBACACQgHgEgDgGQgDgGAEgCIgkAQQADgCAAgIQAAgIABgBQgLgBgHAJQgFAIAEACIgXgHIgVgJQgHAAAFAIQAEAIAFABQgUAEgVgEQATgDgCgQIgCgYIhHArQACgCADgHQADgIgBgBQgEAJgvADQglACgngBIAGAAQAGgEgSgBQgKgBgHAAIgBAAQgNgEgRAJQgRAJgOgGQAfACgDgLIgnAEQgYACAGAJIgRgDQgHgBAAgFIgxAJQAAAAABgBQABAAAAgBQAAAAABgBQAAAAAAgBQgBgCgIgBQALABAbgFQAVgEAJAGIgDgMQgCgFAIgFQgiADggAKIgzASIgrgGIgBAFIgJgJIgIAFQAAAAAAAAQgBgBABAAQAAgBAAgBQAAAAABgBQgFACgDAEQgGgHANgPIAOAEQAHgHABgDQACgEgKgBIgGADQAJgJgFAAIgGABIgNAFIgRAJQAIgBAMADQgRALgFAKQgFALAMgCIgTAHIgEABIgKAZIgEAKQgDAIAAAJQgCAAgDgDQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBABAAAAQAAAIgDALIgGASIgDAKIgCAIQgBAJADACQACANAEACQAGADABAGQgBAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAIAIASQgBADgEgGQgCgFgCAMIAHArQABAUgCATQABAVAHgLQAGgJAAAPQgHAGgDAEQgFAFAAAOIAHALQADAHACALIgKgCIABAXQgBAJgFAAQAFASgDAOQADARAJgSQAFgJAGgQQgCAIgDAaQgDARgGAJIgDgYQgGAZAGAUQAEAOgLALQABgNgDgLQgDgKgEAHIAFAZQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQgBgEgCAGIAIAVIADAFIgBAAIAAAFIADALIAEANIgCgCQAAAAgBAAQAAABAAAAQAAABAAABQAAABABABIAGAJIAIAIQgEgEAAAFQAAAEAEAHQAGAIAHADQAEABAHgBIAJAAQAEABAFAGQgEAAgCgCIAHAJQAEgGAJABIAKABIALAAIAFABIAIgBQAIAAAGgBQAOgDABgGQANAFgIABQgRAEgOAEIAXAGQgRgBgKACQATAGAXgEQAIgCAYgHQADABABAHQABAGASgCQAagCgJgIQgJgHALgBIAUALQAWgFAaACIArADQAIAAAEgDQAQADAggGQAfgFALABQgDACAIADIALAFIAogGQgKACgDADIgFAJIAQgCIAMgDIgGADQgBABAAAAQAAABAAAAQABABAAAAQABABABAAIAtgKIgMgCIAYgBQASgBAKADQgBACgDACIgEADQgJgEgIACQgEABgIAFQASgBAAACQAAADAFACQAQAAAHgFQAHgFgFgEQAXADAGgBQAMAAARgEIgFAIIAYgCIgTAKQAWACAFgHQAFgHAZACIABAIQAEgBARgHQAKgEAJAFQAIgCgMgFQgIgDAYgBQAKAFAaADQAKgDgLgDQgHgCgGAAQAdgBASALQASAKAdgFQgHgCACgHQABgFgbAAQAKgBAYAEQAWAEANgEIgQAJQAJAAAOgEIgCAHQAOgGAaACQAXACAJgIQgHAHAPgCQAUgDAFACQgKAEgiABQgaAAgCAHQAGACAKgCQALgBAFACQgSAEgDADQAWAEAXgFIAjgJIgoADQACgHAKAAQAMAAAFgFQALAEAPgCQARgCAHABIgJABQAZAAAVAKQAVAKAFAAQAOABAPgEQAQgEgIgDIgUgCQgbgBAPgJQAMAJAdgEQAlgGAaAGQgMAEAHAEQAIAFgKACQARgBAHgCIAOgGIAHAGIAXgLQAGgDAegEQgJACALAEQALAEgGACQAWABAQgGIgCABQAYgBAWADQASACAZgDIgFgDQAjgFBBgBQBRAAAVgCIgWgDIAagBQAYgCAMADIgPACQABADAFADQAHAEALAAIAGgGIAGAFQALAAgDgEQgEgEAMAAQAHAIAzABQA0AAAKAHQAIgGgWAAQgVgBAIgFQAPAEAKABIgFgHIBTAGIBMACIgCACQAaADAIgOQACABgDAEQgDADAEAAQAJgJALgGIAVgKQAagOgBgPQAEADAIgDQAFgCAKgHQAJgHAEgBQAFgBACAIQADgQgBgCQAGAGgKAbIgJAUQgFALAAAEIgHAHQgJAIgHAEIgJAGIgRAJQABAAAAAGQABAEAFgDIgPAKQgDADAOgDQgbAKgcADIgOABIglgBQgegCg9ABIhcACQgzAAgngEQgFAAABACQAAACAEACQgNgFgHAEIgNAHIgggNQgIACACAEIACAFQgZABhAgFQg1gDgbAEQgHgCABgFQAAgEgLgBQAPAHggACQgeADAEADQgJgFghgEQgbgCAFgLQgRgBgCAFQgCAEAHACQgxgBgaAHQgEgBhGgBQhDAAgPgIQAJAFgGABQgNABgJACIAPAIIglgBQgKACAAgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgCgDgJgBQgOgBgJADQgJAFgHACIAEABIgSABIANgFQAQgGgZgCQgZAOgMgHQAPABACgEQACgCgIgDIgeAAIAKALIiDgFQhWgEgyABQABgEgggCQgegBAEgIIAEACQAQgBgNgFQgOgFgOABQAHACgLAHQgKAGAaABIgkAHQgIALgeAAIgYgBgAAWFrIAGABIAEgCIgCAAIgIABgAwgB3QAAAGAFAFQAEgEgGgUIgDANgAvAkyIALACQAFAAAEgBIgLgCIgJABgARmDkIAAAAIAAAAg");
	this.shape_25.setTransform(-1.7,-37.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F49723").s().p("AAFgKIAKAQQgJgBgFABQgGAAgJAGg");
	this.shape_26.setTransform(-54.5,-67.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F49723").s().p("AgDAAQAQgCgPADg");
	this.shape_27.setTransform(-7.9,-5.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F49723").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_28.setTransform(16,-69.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F49723").s().p("AgQAAQANgDAUADQgKAAgRABg");
	this.shape_29.setTransform(26.6,-73.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F49723").s().p("AgCgCQAAgBAAAAQAAAAABAAQAAAAAAABQABAAAAABIADAFIAAAAQgDAAgCgGg");
	this.shape_30.setTransform(-112.2,-10.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F49723").s().p("AADACIgRgEQAOABAOABQgBADgEAAIgGgBg");
	this.shape_31.setTransform(29.9,-73);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F49723").s().p("AgEAAQAAgCAJAAIgJAFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_32.setTransform(-71.8,-8.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F49723").s().p("AgFADIALgFIgGAGg");
	this.shape_33.setTransform(-100.1,-69);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F49723").s().p("AgIAEIgEgFQgCgEAKADIASAHQgMgDgKACg");
	this.shape_34.setTransform(-30.8,-73.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F49723").s().p("AgEAAIAJgBIgBADg");
	this.shape_35.setTransform(74.5,-73.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F49723").s().p("AAJgDIgEAFIgNACg");
	this.shape_36.setTransform(78.6,-73.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F49723").s().p("AgQAAIAbgCIAGAAQAAAAgBABQAAABAAAAQgBAAAAAAQgBAAAAAAQgDABgLgBIAAAEg");
	this.shape_37.setTransform(95.4,-70.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F49723").s().p("AALAVIgJgGIAEAAQAAAAABAAQAAAAAAgBQAAAAAAgBQgBgBAAgBQgFgGgGgDQgFgNgCgJIAGAJIANAVIACACQAFAJgCAAIgBAAg");
	this.shape_38.setTransform(106.2,-66.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F49723").s().p("AgFABIAMgGQgXACgMgCIAmgDIgBAAQAKACAKAAIgVACQAOADgKABQgGACATgBIgMAGQgGACgMAAQgHgDAHgFg");
	this.shape_39.setTransform(87.2,-72.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F49723").s().p("AARADIgmgBQACgCAPgDQARAFAKABIgIABg");
	this.shape_40.setTransform(82,-73.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F49723").s().p("AgQAQIADgDIgXAFQgDgGATgHQARgFgFgCQAGACAEABQAHACAQgCQAKgBgPgEQgTgEgCgCQAMgCAEgCQACgBABgEQAOAKAFAJQAFALgOADQgOgEgOADQgNABgBAGQgBgBgBAAQgBAAAAgBQAAAAAAgBQAAAAABgBg");
	this.shape_41.setTransform(77.8,-70.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F49723").s().p("AAFAAIAEAAIgQABQAHgBAFAAg");
	this.shape_42.setTransform(96.7,-73);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F49723").s().p("AgHAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIATAAQgGABgFAAIgGgBg");
	this.shape_43.setTransform(94.7,-72.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F49723").s().p("AAAAAIABAAIgBAAg");
	this.shape_44.setTransform(79.6,-72.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F49723").s().p("AgRAAQAUAAAHgBQAIAAAAABIgCACQgRAAgQgCg");
	this.shape_45.setTransform(92,-73);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F49723").s().p("AgEAAIAEgBIAFADg");
	this.shape_46.setTransform(104.4,-69.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F49723").s().p("AADAFIgNgMIAVALQgEgCgBACIAAAEg");
	this.shape_47.setTransform(106.2,-68.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F49723").s().p("AAAACIgCABQAAABgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQgDgHAAgCQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABQAEADAKALQgIgIgCACg");
	this.shape_48.setTransform(109.6,-63.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F49723").s().p("AAAACIgGgIQAKAGADAHg");
	this.shape_49.setTransform(103.5,-71.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F49723").s().p("AgSACQAWgFALAAQgEABAFACQAFACgEADQgSgFgRACg");
	this.shape_50.setTransform(93.2,-74.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F49723").s().p("AAFAGIgNgMIARANIgBAAIgDgBg");
	this.shape_51.setTransform(108.5,-67.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F49723").s().p("AgEAAIgBgGQAAgEABgBQAAABAEAKIAGAMg");
	this.shape_52.setTransform(110,-66.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F49723").s().p("AgBABIABgLQACgBgBAKQgBAJABADg");
	this.shape_53.setTransform(110.5,-43);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F49723").s().p("AgCgHQACAJAAgCIADgMQABAXgDACIgBAAQgBAAgBgUg");
	this.shape_54.setTransform(112.9,-51.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F49723").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgCgDABgCIABgDIACARIgCgJg");
	this.shape_55.setTransform(113.1,-54.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F49723").s().p("AgDgDQADgJAAABQACAAACALQgBgCgCAEIgBAKg");
	this.shape_56.setTransform(114.1,-54.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F49723").s().p("AAAgHIABACIAAAKIgBADgAAAgHIAAAAIAAAAg");
	this.shape_57.setTransform(113.8,-49.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F49723").s().p("AgDAeIADgDQAAgJgCgbQgCgYAEgGQAAAMAAAaIAEApg");
	this.shape_58.setTransform(111.6,-39.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F49723").s().p("AAAADQgCgBAAgDIACgCQACAAABAHIgDgBg");
	this.shape_59.setTransform(113.4,-17.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F49723").s().p("AvDFJQg4AAgngoQgognAAg4IAAmDQAAg4AognQAngoA4AAIeHAAQA4AAAnAoQAoAnAAA4IAAGDQAAA4goAnQgnAog4AAg");
	this.shape_60.setTransform(-0.5,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-75.1,229.1,75.2);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsECIAAABIjFjFQgXgaAAgjQAAgpAggcIDDjCQAVgSAcAAQAfAAAWAWIAGAFQASAWAAAdQAAAcgSAVIifCZICWCVQAZAXAAAhQAAAdgUAVIgFAFQgVAVgfAAQgfAAgXgXg");
	this.shape.setTransform(-4.7,-46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49723").s().p("AgCAAQAEgBADgCIgDADIgDAEQgGgEAFAAg");
	this.shape_1.setTransform(32.8,-12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49723").s().p("AACgCIACACIgHADQADgFACAAg");
	this.shape_2.setTransform(44.5,-33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49723").s().p("AgEgCIAKADIgLACQAEgCgDgDg");
	this.shape_3.setTransform(-38.5,-46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49723").s().p("AgCABIAFgDIgDAFg");
	this.shape_4.setTransform(-37.5,-45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49723").s().p("AgFAFQACgBgDgEQgEgEADgBQAEAFADgDQAEgFAFAHQgCAGgDABIgJgBg");
	this.shape_5.setTransform(23.1,-85.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49723").s().p("AAAgIIADAAIgFARg");
	this.shape_6.setTransform(7.2,-86.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49723").s().p("AgEABQAEgCAAgCQAIgCgEAFIgEAFQgGgBACgDg");
	this.shape_7.setTransform(-9.7,-89.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F49723").s().p("AgCAAIACgFIADAKIgFgFg");
	this.shape_8.setTransform(-12.7,-88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49723").s().p("AAAgCQABgBACABQABAAAAAAQABABAAAAQAAABAAAAQAAAAAAAAIgJAEQgBgCAFgEg");
	this.shape_9.setTransform(-8.6,-86.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F49723").s().p("AgDAAIAIgCQAAABAAAAQAAABAAAAQAAAAgBAAQgBAAgBAAIgGADQAAgBAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_10.setTransform(-19.9,-82.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49723").s().p("AgCgBIAEgCIABAHg");
	this.shape_11.setTransform(-23.7,-80.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F49723").s().p("AgBADQABAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAGgIgDALQgCAHAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAgBg");
	this.shape_12.setTransform(-15.7,-79.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49723").s().p("AgBAAIADgBIgCACIAAABIgBgCg");
	this.shape_13.setTransform(-23.8,-78.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F49723").s().p("AgEAAIgBAAIAFgEQACgBAEAEIgGAGIAAAAQgBAAgDgFg");
	this.shape_14.setTransform(-22.8,-78.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F49723").s().p("AgCAAIACgBQAAgBAAAAQABAAABAAQAAAAAAAAQAAABAAAAQAAABgCADg");
	this.shape_15.setTransform(-29.2,-76.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F49723").s().p("AAAABIgDgBQAEAAACgBIgDADIAAgBg");
	this.shape_16.setTransform(-19.7,-77.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49723").s().p("AgSHFQgLgGgHAFIAJgMQgDAAgJAFIABgJQgFAFgGAAIgKgBQgGgDgDABQgEABgEAHQAEgJgHABQgMADgCgDQAHgFARACQANABACgIQgDgDgFABQgFABgDgDQAJgEADgEQgKgHgNAFQgNAIgGABIAVAAQgDAIgFAAQgGgBgEAFQgEgEgJAAQgKAAgCgDIAEAAQgNgDgGgPQgHgQgBgBQgGgDgJACQgJACACAGIAJAFQAMAGgLAJQgBgJgFgDQgDgCgJABQgJAAgFgCQgJgDgGgJQAIgBgBgIQgBgHAGAAQgIgDgFABIgJAEIgBgIIgRAIQgDABgRgDQAGAAgCgIQgDgHAEgBQgHgFgLAAQgLgGgGgLIgGgFQgDgDgJgEIgBAFQgKgEgMgIIgLgIIgcgeIgRgTIAEALIgKgKQgJgJgBgHIAGAFQAJgHgEgLIgIACIADgGQgDgFgEAFQgDAEgEgFQAGgGgDgJQgBgFgGgMQgGgNgBgFQgCgJAEgGQgJAAAEAKQAEAKgIgBIABgGQABgEgBgEIgIAGQgDgLgCgMIgDgUIgCgSQgCgLgEgJIADABQABgQgMgFQACgCADACQAEACABgDQgPgIAJgTIAFgOQABgGgGgDQAHAAAIgEIANgIQAPgJAJAFIgDgHQAHABABALQAAAMAHABIgCAEIgIATQAMABABgDQACAKAGgJQgFAOAAAHQgBAHABANQABAOALAYIASAkQALAVAEAPQADADAEgHQgEAJAHgBIALgBIgFAVQAEABADgDIAFgFQAKAMALAUIAFAHQACAEAEADQAHAHAIACQAAADgFAGQgDADACAFQABgIAEAAQADAAAGADIAJAEQAEAAABgDQgBAGADAFIAGAJQAEAFAAADQAAAGgGAHQAGAEAEgFQAEgEgCgEQAKAHAFACIAIACIAJgBQACAEAbALQAbAJADAOQgCgIADAAIALgBIgEgNIAQAFQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABQAAAEADADQAHACAFgDIAIgHIgBgCIAHAAIgGAFQgIAHAKAEQABgDAGgEQAHgGADAGQgGgBgCAEQgBAEADADIANADIgDgPIBEAIQAKABAFgBIAegDQABAGANgCQAOgBABAKIgCgBQgIADAIAFQAIAEAGgDQgEgBACgLQACgJgLACIAMgNQgBgNAGgFQAFgEALAAQAIAAALgCQAMgDAFgGQgBACABADQAGgIAGgDIAPgGQATgDAAgEIAHAHQAEgSAEgFQAEgEAOgIIACADQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQgBgJABgFQACgHAIgGIACADIAOgSQAIAHAEgFQADgDACgLQADgLAEgEQAFgFALAEQgDgGABgLIADgQIAEAAQgFgJAKgIIAJgGQAEgEABgDQAAgFgEgBQgDgBgGABQAKgEgDgRIgDgMQgBgGACAAQADgEAGABIALADQAAgGgMgDQgIgDAIgIIABAFQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQABgCAVgGQASgGgDgFIgHAEQgBgFADgFIAIgKQAFgFABgCQABgEgHgCIgKAAQAFgGABgEIAAgFQgCgFAGgLIABAAIADgKQACgGgKgDIgBAEQgBgGAAgVQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQgIABgCgPIAAgTQACAGAEgBIAHgFQgJgDgBgDQgCgEAEgHQgPADgIgBQgLgCgDgJIAEADQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQADgBgGgFQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQAEABADgCQgJgDgCgJQgCgMgEgFQAEACADgCIAFgGQgFACgBgDQAAgCABgGQABgEgBgBQgBgBgGAEQAAgWgRgaIgLgUQgFgJACgHQACgEgGgCIgKgFIAHgEQgLgBgGgDQgGgDgLgCQAIAAACgEQACgEABgJIgUADIAGgKQgHAAgFgKQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgCIgDACQgGADgLgDIgJgCQgFgBgCACQADgJgHgCQgGgCADgHIgJABQgBAGgDADQAAABgBAAQAAABgBAAQAAAAgBgBQAAAAAAgBIgCAAIAEgJQgIgBgFgDIACAGIgDgGIgBgBIABAAQgCgGgGAAQgDgHgHgBIgPgCQgJAAgGgCQgHgCgDgJQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQgFgCgOgLQgLgJgHAEIgBAJQgUABgJgCIgDAKQgDgCgIAAIgOAAIgNgCQgGgDgCgHQgCAFgHgDQgKgEgEACIgCgIQgJgCgMAFQgHgFgIAAQgFgBgJADIgZAKIAAgCIgQAKQABgDgBACQgEAGgDAAQgHAIgNgEIgLADQAGgGgFgEQgKgHAAgBIgCAEIgCAFQgCgBABgEQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAQgBACgIAIQgHAHAAAGIAHAEIAAAEQgFABAAABIADAFQgGgDgJABQgGAAgHgDQAGAEgJAFQgLAIAIAFQgIgEgBACQgBABgGgEQAHgCAEgKIAGgRIgMgDQgBgJALAAIAAAAQAMgBAAgCQAAADgFABQgEABgCgBIAIAIQADAAAFgDQAEgCACgEIAJgPQgFAAADgGQADgIgEgCIgGAEQgDgBABgFIAEgIQAIAAAhgKQAYgIAGAFQgEgCgFADQgEACgCADIALADQgDABgKgCQgJgCgGAFIADANQACAKAHAEQAIABAEgDQADgCADgHIAHgMQAFgFAJgBQABgBAAAGQACAFAIgEQAMgHAIgOQAIgNgCgMQgLAIgEACQgJAEgDgIIAOgJQAIgFAAgFQAFAHgHACQgHADAGAFQAGgCAFgHQgCADAEAEIAGAFQAGAAATACIAXAFQADAGgBAEQAHgDAJgLQAJgNgCgGQAFAAAHAEQAFADAFgCQgGgHADABQAIADACgHQAGAAAAAEQgBAFACACQAHgGABgDQACAFgIANQgJANADAHQACAEAKAMIAJALQAGgJAGgZQAFgbgDgMQACgEAEAHQAFAJACAAQADAGAFABQACAAAGgBIAJgDQAEAAADADIgKADQAAADAJABQAKABADgCIgIALQgHAKACAEQAFADAJgBQAIgBAHgCQAQgGAEgLIgSgBQgGAAgGAAIgFABQACgGAMgBQANgBACgGIAaARIgJgCQgGABABAFQAHADABACIACAHQgRAFgVANQgVANgMALIAPgCIAAAIQALgBAYgRIAdgVQAFAFgGALQgFAKgGADQAIAGASgJQASgIAIAJIgDgJQACAAAJAIQAHAGABgCQgBAGgEAHQgDAHgEABIAbgEQgCAAgGAIIgJAJQADAEALgHQAJgGAAgEIACAQQABAEgBAMQADABAFgIQAGgIgBgDQALADAEALQgLgDgOAPIgWAXIBCgMIgLAGIgKAGQAKgGASAQQAJAJAFAHIAIAQIgBgCQgGgBADAJQACAFACADQgBAGAEACIAKACQAHABADACQAEADgDAGQgFgPgMAIQAFADAIANQAIAJAJgHIABAJQAAAFgHACIAUATQgCgBgDACQgDABABAFQgBgGgLgLQgIgJAFgGIgOAHQgGAEgIgBQAKAOASAKIAeARIgCAaIAFAAIgNAHIAGAEQgBABgEgBQABAEADABQgIACgQgFIAGgIQgQgFgDAIIADADQgKgDgCADIAKAPIAJgKQAMAJAFACQAKAFAFgJIgGAQQALAKADAEIALASQgCAAgFgBQgEgBgCACQAKAIgLAPIgGAKQgCACAFABQACAHAGACQAGABACADQgFgBAAACIAJAKQgBACgEgEQgDgCgDAFQAFAOABAJQABALgFAKQAAALAKgEQAJgDgCAIQgKABgDABQgIADgCAHIAHAIQAEADABAHIgNgEIgCAMQgCAEgGgCQADAKgGAHQABAKAOgFQAIgCALgGQgEADgKAMQgGAHgKACIABgNQgMAJAEANQABAFgCABQgDADgKAAQAEgGgCgHQgCgHgGACIABAOQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABQACALAEAHIgBAAIgHATIgBgCQAAAAgBAAQAAgBgBABQAAAAgBAAQAAABgBABIgCAQQAAgEgDABQgEAAgEAEQgHAHAIAOQAGALgLADQAAgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIgJADQAHAFgCAJQgBAFgHAKIgJAOQgCAIAGAGQgKABABgEIAEgUIgOAEIAEgFQADgDABgDQgMACgEANQgCAEgBARQgCAAgHgHQgGgFgFAJQgIALAKAEQAKADgEAFIgRgDQgCAGgFAHQgDADgHADIgVALQgDADAAAEQgJACgLAPQgKAOgHACQABgDgGgBIgIgDIgRARQAFgFAAgFIgDgMQgEACgCAEIgFAGQADgHgFgCIgRAVQADABAEgBIgLAGQgJAEgGgCIABgKQAHAEACgEQACgCABgHQgIADgBgBQgBgEgDgBQgIADgBAHQgCAGAEAFIgPACQgGABgIAIIAAgLIgLAGIAHgPQgIgBgDADQgBACAAAFQgBAFgCACQgCADgKAAIgBgKQgCABgIAKQgEAHgGgHQgDAEAGAFQAGAFgNADQgFgFgPgDQgFADAGAEQAEACADAAQgJACgHgEQgEgCgGgIQgEgGgCgCQgGgCgKAEQADACABAEIgBAGQgBAHAOgBIgEABQgFAAgJgEgAhoFjQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAIgCgDIgCADgAGZCSQgCACAGAFQAFAAgDgNIgGAGgAGUhqQAFgJgGgCQgBAFACAGgAh/lgIgEgBIAAAAIAEABg");
	this.shape_17.setTransform(0,-45.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49723").s().p("AAAgJQABAFACACQADACAJgBIgdALg");
	this.shape_18.setTransform(31.8,-76.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F49723").s().p("AADgBIABABIgHACIAGgDg");
	this.shape_19.setTransform(-7.5,-3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49723").s().p("AgBAAIADAAIgCABg");
	this.shape_20.setTransform(-16.6,-79);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F49723").s().p("AgGAAQAGAAAEgBIADABQgDACgEAAQgBAAgFgCg");
	this.shape_21.setTransform(-4.5,-82.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F49723").s().p("AgFAAQABgDAEACIAGAEQgGAAgFgDg");
	this.shape_22.setTransform(-5.9,-82.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F49723").s().p("AAAAAIgBgEIACAEQABACgDADg");
	this.shape_23.setTransform(25.3,-7.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F49723").s().p("AgDgBIAHABIgCACIgFgDg");
	this.shape_24.setTransform(39,-55.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F49723").s().p("AgBAFIgBgMQACAFADABIgDAGIAAADQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_25.setTransform(18,-76.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F49723").s().p("AgBgCIADAAIAAAFg");
	this.shape_26.setTransform(-22.7,-75.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F49723").s().p("AgBAAIABgGIACANg");
	this.shape_27.setTransform(-24,-74.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F49723").s().p("AgDACQgCgCAFgCIgEgCIAJgBIgFAJIAAACIgDgEg");
	this.shape_28.setTransform(-31.4,-71.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F49723").s().p("AgKAEIgBgEIACABQAAAAABAAQAAABABAAQAAAAAAAAQABgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIgBgDQAHAAAKADIgFABQgHAAgDACIAAACIgEABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_29.setTransform(-34.6,-67.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F49723").s().p("AAAAFQgEADAAgHQgBgCgFAFIgBgHQgBgFAEgEQAGACACAGIABAJQAHgGAEgCIgIAMIAAABIgGADIACgIgAABAGIACACIABgCIgBgBIgCABg");
	this.shape_30.setTransform(-27.5,-73);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F49723").s().p("AgHAGIACgDIAAABIALgIQADAEgCAGQgKgCgEACg");
	this.shape_31.setTransform(-25.4,-74);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F49723").s().p("AgFAMQgMgKACgGQAIAAAEgGQADgHgDgFQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAAADIAFgKQAFAFgCANQgBAJAFABIgJgCQgDAAgDAHQAAAHAGgBIANgBQgEAJAEAGQgNgGgIgJg");
	this.shape_32.setTransform(-26.5,-77.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F49723").s().p("AAAACQAAgCAAgCIABAFg");
	this.shape_33.setTransform(-29.6,-69.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F49723").s().p("AAAgCQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQgCACgBAEQgBgFACgBg");
	this.shape_34.setTransform(-29.3,-70.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F49723").s().p("AgBAGIgDgEQAEgFAFgCQgFAFABAFIgBABIgBAAg");
	this.shape_35.setTransform(-28.5,-70.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F49723").s().p("AAAgBIABABIgBACg");
	this.shape_36.setTransform(-32.1,-67.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F49723").s().p("AgCAAIAFgEIAAAJQgBgCgEgDg");
	this.shape_37.setTransform(-32.6,-67.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F49723").s().p("AAAAAQgDgCgCgCQAGgDACAFQACACABAHQgCgGgEgBg");
	this.shape_38.setTransform(-34.4,-65.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F49723").s().p("AgEAAIACAAIAHAAIgEABIgFgBg");
	this.shape_39.setTransform(-30.5,-67.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F49723").s().p("AAAAFQgEgCgBgDQAJAAABgHQABALgCAEQAAgCgEgBg");
	this.shape_40.setTransform(-27.4,-69.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F49723").s().p("AABgDIAAAHQgEgCAEgFg");
	this.shape_41.setTransform(-32.1,-66);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F49723").s().p("AgEgCIAJACQgDAAgFADg");
	this.shape_42.setTransform(-31.4,-65.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F49723").s().p("AgBAFQgEgBACgIQABAEACAAIAFgCQgCAHgDAAIgBAAg");
	this.shape_43.setTransform(-35,-60.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F49723").s().p("AACAEIAAAAgAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQgCgCABgBIABAAIABAHIgCgEg");
	this.shape_44.setTransform(-34.3,-61.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F49723").s().p("AgEgDQAEAAACAAQADACgBADQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAABgBAAIgDACg");
	this.shape_45.setTransform(-33,-61.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F49723").s().p("AAAgCIABACIgBADIAAAAg");
	this.shape_46.setTransform(-34.1,-59.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F49723").s().p("AgGALIAFgBQABgDAAgMQAAgLAHAAQgEAEAAAMIAAARg");
	this.shape_47.setTransform(-38.5,-56.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F49723").s().p("AAAADIgCgGIAFAHg");
	this.shape_48.setTransform(-39,-53.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F49723").s().p("AAAABQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIADAAQADAAABABIgEAAg");
	this.shape_49.setTransform(-37.2,-46.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F49723").s().p("AkiEjQh4h5AAiqQAAipB4h5QB5h4CpAAQCqAAB5B4QB4B5AACpQAACqh4B5Qh5B4iqAAQipAAh5h4g");
	this.shape_50.setTransform(-1.4,-46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-91.5,90.8,91.5);


(lib.Símbolo1Mal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKFOAQhDgFgygyIoQoRIoQIRQgxAyhCAFQhCAEgsgrIhnhnQgrgrAEhCQAFhCAygyIIRoRIoRoQQgygygFhCQgEhCArgrIBnhnQAsgrBCAFQBCAEAxAyIIQIRIIQoRQAygyBDgEQBCgFAqArIBoBnQArArgEBCQgFBCgyAyIoRIQIIRIRQAyAyAFBCQAEBCgrArIhoBnQgmAng6AAIgMAAg");
	this.shape.setTransform(0,0,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1B24").s().p("ArhbVQlViRkGkGQkHkHiQlVQiVlggBmCQABmACVlhQCQlVEHkHQEGkGFViRQFhiVGAAAQGCAAFgCVQFVCREGEGQEIEHCPFVQCVFgABGBQgBGCiVFgQiPFVkIEHQkGEGlVCRQlgCVmCAAQmAAAlhiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVEFIgFgGQgUgVAAgdQAAghAYgXICXiUIigiaQgRgWgBgbQABgdASgWIAGgFQAWgWAfAAQAbAAAWASIDDDCIgBAAQAhAdABAoQgBAjgXAbIjFDEIAAgBQgWAXggAAQgfAAgVgUg");
	this.shape.setTransform(2.5,-45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49723").s().p("AgBACIgBgFIAFADQgDAEAAAAIgBgCg");
	this.shape_1.setTransform(-24.7,-21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49723").s().p("AAAgCIACAAIgDAFQgBgDACgCg");
	this.shape_2.setTransform(-34,-35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49723").s().p("AgDgCIAJADIgLACQADgBgBgEg");
	this.shape_3.setTransform(44.3,-44.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49723").s().p("AgCABIAFgEIgDAHg");
	this.shape_4.setTransform(45.2,-43.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49723").s().p("AgFAAIAEgHQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAGAAAAADQgGAAACADQACAHgFAAQgGgGABgCg");
	this.shape_5.setTransform(-20.4,-76);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49723").s().p("AgBgJIADASIgCABg");
	this.shape_6.setTransform(-9.6,-86);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49723").s().p("AgDAAIAFgDQAGADgEAAIgEAEQgIgBAFgDg");
	this.shape_7.setTransform(6.4,-83.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F49723").s().p("AAAgFQABAFACACIgFADg");
	this.shape_8.setTransform(9.5,-83.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49723").s().p("AgEABQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABgBIAKgBQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEACIAAABIgEgCg");
	this.shape_9.setTransform(6.5,-86.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F49723").s().p("AgFgCQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABIAGADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_10.setTransform(18.4,-82.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49723").s().p("AgCAAIAFgDIgDAHg");
	this.shape_11.setTransform(21.8,-80);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F49723").s().p("AAAAEQgNgCAMgDQANgFgHAGQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBABQgBABAAABQgBAAAAAAQgBABAAAAQAAAAAAAAIAAAAg");
	this.shape_12.setTransform(17.6,-87.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49723").s().p("AgBgBIACABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABIgCgDg");
	this.shape_13.setTransform(24.3,-80.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F49723").s().p("AgDABQgDgBACgEQAQABgJAHIABABIgHgEg");
	this.shape_14.setTransform(23.4,-81.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F49723").s().p("AgCABQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBADACIgDADQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_15.setTransform(27.3,-75.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F49723").s().p("AgDgCIAHACQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCADQgBgEgDgBg");
	this.shape_16.setTransform(23.2,-85.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49723").s().p("ABNHIQAHgIgOgCQgKAUgHgHQAIAAAAgFQAAgEgEgCIgPABIAHAOQgLABgXgBIgPgBIgigGIgRgDIgigGQABgFgPgGQgOgFAFgKIABACQAIABgFgIQgFgIgGAAQACADgIAIQgHAHAMAEIgUAEQgLASgYgRIgSgPQgLgHgKgCQACAAACgCQgKAAgIgHQgIgFgHgHIgKgMQgFgFgCAAIAEgJQgUAAgGgDQgIgEgKgPIADgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgKABgFgBQgIgCgHgJIACgCIgTgTQAHgGgEgGQgCgCgMgIQgKgIgDgFQgFgIAHgIQgGAAgKgIIgPgNQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQgLgBgCgQIAAgMQgBgHgCgDQgHgFgGAKQACgMgOgNIgKgKQgFgFABgCQgBgHAGgCIALgDQgDgHgMADQgIACADgNQAFAGAAgCQABgDAOgRQAMgOgEgDIgFAGQgFgGAJgSQADgHAAgCQgBgEgHAAIgJACIADgNIgBgFQgDgFAFgOIACABQgBgDADgLQABgGgJgDIgCAEQgBgIADgUIgCgFQAAgEACgBQgIgBADgSIAGgVQAAAHAEAAIAIgCQgHgGgBgFQABgFAHgFQgPgFgGgFQgJgHADgNIACAGQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAEgCgEgHQACAAADADQADADADAAQgHgKAGgKQAHgOABgHQABAEAEABIAIgBQgJgEALgIQAFgEAAgBQAAgCgIgBQAJgIAKgQIAQgaIAIgMQAEgHAEgDQAJgJAGAAQAFAAABgHIADgMIAFAGQAAgMADgGQADgIACgMQAAAJAFACQADACAKgBIgCgVIAKAHQABgIAMgFIAAAAIAAAAIAAAAQgCgIAFgLIAGgJQADgEgBgDQAIAFAFgHQAFgHAGAFQABgFACgEQgPgKAKgBIABAAIAHAGQAGgHAGgEIgIgBIAJAAIACgBIgBABQAHABAEgHQAIABAIgFQAFgEAIgJQAJgJAFgCQAJgEAKAEQgDgBgDABQAAAAgBAAQgBABAAAAQAAABgBAAQAAABAAAAQAIgDAUgBQAQgBAFgFIgDgJQAYgOAKgBIgCgKQAFABALgDIASgFQAKgDAIACQAIACAEAHQACgEAMABIARACIACAIQALADAQgFQAQAMATgBIARgBQAKAAAGACIAAACIAXAAQgBABAAAAQAAAAAAAAQAAABAAAAQABgBAAAAQAIgDADACQAGgBAHAEQAHAEAFAGIANAFQgKgBACAHQACALAAACIALgDQAAACgDADQgBAAAAABQAAAAAAAAQAAABAAABQAAAAABABQACgBANACQALACAFgEQABgCgDgGIAEgCQAGAEABgBQABgBABgEQACAIAHAIQAGAGAAAJQABgJALAHQAOAJABgJQAAAJACABQACABgBAHQgFgHgNgBIgVABIAEAMQgHAGgHgKQgGgLgDAAQADgBAEAEQADAEgBADIAEgMQgDgEgFgCQgEgCgGAAIgSABQADAEgHACQgJABACAGIAHACQAAADgEACIgIACQgFgGgLgFIgUgJIgJgEIgIgCQgJgEgBgEQAGAGALgEIgIgIQACAAAJAIQAHAGAHABQAAgCAGgLQAEgIgDgIQgHgHgHAAQgEABgHAEQgIAFgEABQgIACgKgDIACgFQABgGgLAAQgQAEgLAKQgLAKgBANQAZgMABAOIgPAEQgIADgBAFQgDgIAHAAQAGgBgEgGQgEgBgHAGQACgDgDgEIgFgGQgKAAgNgFIgKgDIgNgBQgEgHABgCQgIADgGAMQgHANAEAGQgFABgGgCQgFgBgFADQAHAFgCAAQgIAAAAAHQgFABgBgDQgBgGgCgBQgEAIABADQgEgFADgOQADgPgFgFQgFgGgNgFIgPgFQgBAJAHAaQAIAaAHAKQABAFgGgFQgHgGgCAAQgIgFgGAJIgEAGQgDAEgDgBIAFgJQgCgCgGAFQgHAFAAADIgCgOQgCgLgEgCQgGABgFAGQgFAFgBAIQgFAQAGAJIAPgUIADgDQADAFgGAJQgGAJADAGIgWAHIAFgFQACgFgEgCQgFACgCgBIgHgDIAGgnIAFgpIgKANIgGgFQgJALAAAcQAAAMAEAYQgGABgHgLQgGgKAAgFQgJAFABATQABASgIAEIAIABIgJAHQgGAEACABQgGgCgGgGQgGgFAAgEIABAaIgHgJIgIgKQgEADAGALQAEAJAEABIgOgBQgEABgLgDQgCADAJAGQAIAFADAAQgDAKgJADQACgKgQgOIgXgVIAKAgIAHAVIAEAKQgEgGgMgMQAHAJgJATIgJAPIgIANIABgCQgDgFgGAGQgDADgBADQgJACAIAMQAHANgJACQAIgLgNgGQABAGgFAMQgCALAMACIgGAFQgDACgFgCIADAYIgEgDQgDgBgDAEQADgEgCgOQgBgLAIAAIgPgFQgHgDgEgGQgDARAIASIARAdIgOARIAFACIgPAAIAEAGQgCAAgDgCQAAADADADQgJgBgOgLIAJgEQgLgMgHAGIACAEQgIgHgDACIAEATIALgGQAQAaAMgIIgKAKQAKAOAJARQgCAAgFgBQgEgCgCACQAGAEgCAFQgBADgFAGIgGAIQgBAEAEABQACAFAHABQAGABACADQgFAAAAABIALAHQgBABgFgCQgDgCgDAFIALARQAEAIgCAIQACAJAJgGQAIgGAAAHQgJADgDADQgFAEABAGIAJADQAGABADAEIgNACIADAJQAAAEgGACQAJAFgCAHIgCAHQABADAHgBQADgCgDgDIgEgDQAFADAIgJIALgOQgCAEgBAKQAAAIgHAGIgHgIQgEANAKAFQAEACAAABQAAADgHAHQgCgFgGgDQgFgCgEAEIALAHQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBABAAAAQAAABgBABQAIAEAKABIgBAAIAKAPQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQABABAAAAIAMAIQgDgCgCAEQgBACABAFQADAIAOgCQAMgCgCAIQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAIgBAIQAHgFAGADQAEABAGAHQALANAMgJQgCAIgDgBQgIgCgJAAIABAMQgEgGgFgBQAAARAcgCQAAACgHAHQgFAGAIADQAKAFADgJQAEgJAEACIgDAQQAHABADACQAEACAEAEIALAPQADAAADgBQADAFAFABIALABQAOAAADAEQgCABABAGIABAHIATAAQgFAAgEAEIgHAKQAGACAIgDQgHADABAFIAXgFQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIAJABQAHACACAFIgGAIQgBgHgEABQgCABgGAFQAIACgBACQgCAEACADQAGACAFgFQAFgFAAgGQAGAFAEACQAFAAAJgDIgFAKIAKgBIgLALQAGAEADgBQACgBACgEQABgEADgCQAEgBAGACIgCAKQADgBAIgHQAFgFADAHQADgCgDgHQgDgGAKABQADAIALAEQAEgDgEgEQgDgEgCAAQALAAAHAOQAHAOALgGQgCgCAAgDIAAgGQABgHgKAAQAEgCAIAFQAJAFAFgFIgFAMQAEAAAFgGIAAAJQADgFAFgBIAIABQAFAAADgBQADgCABgIQgBAKAGgEQAIgFACACQgEAGgNAEQgMACABAIQACADAFgDQAEgCADACQgIAHgBAEQALAEAKgJIANgOIgRAGQAAgIAEgBQAFgCABgFQAFAEAHgFQAGgFADACIgDACQAKgDANALQAMAKADgBQAGgBAFgHQAGgIgGgDIgJACQgLACACgOQAGAHAEgBQADgBAFgFIAKgHQAGgEAKABQgDAGAFAFQAGAEgDAFQAHgFABgEIACgKIAHAFIABgRQABgFAIgLQgCAFAHACQAHABgBAEQAKgFAAgJIAAABQAHgHALgDQAEgBACgCQAFgDADgHIgFgCQAEgJAIgJIAdghQAEgEAGgOIgHAFIAEgJQAEgKAGgBIgCAGQAEACAFAAQAFABADgEIgFgGIAHABQACgFgFgBQgGgCADgEQAMAEALgTIAIgOQAGgGAHAAQgGgHgFAJQgFAIgEgHIAFgCQADgBACgEIgJgCIAUgdQAJgLADgUIACABQAJgLgLgJQACAAAEADQACACADgBQgIgIACgGQABgFAGgHIAIgKQADgFgGgEQAKABASgJQASgHAHAFIgCgIQAGACAAANQAAANAGADIgRAYIAIACQAFACABgCQgBAGABABQABACAGgFIgNAWIgLAVIgPAsQgSA5gbAXQgBAEAJABQgKACADAGQAEAKAAABIgYADQAAAFAEACIAGADQgFAJgKAJIgSAOIgRANQgJAIgDAIQgFABgEgGQgEgEgEADQANACgMANIgIAJQAAAAAAABQgBABAAAAQABABAAABQAAAAABAAQgGgCgGACIgLAFQgNAFgHgPQgHAEACAGQADAFAEAAQgMAHgFAEIgGAGIgGAJQgDgBgLAFIgVAKQggAMgKgJQAHAGgEACQgGADgDADIAKAJIgTAEQgFADAAgCIgDgDQgCgEgFAAQgHABgEAEIgHAKIACABIgJADQgBAAAHgIgABnG+IAEACQAAgBAAgBQABAAAAgBQAAAAAAgBQgBAAAAAAIgEACgAl9hNQAIgFgEgEQgEAEAAAFg");
	this.shape_17.setTransform(-0.9,-46.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49723").s().p("AgKgMIAVAMQgFAAgBACQgBAEACAIg");
	this.shape_18.setTransform(-29.2,-70.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F49723").s().p("AgBABQAGgGgFAHg");
	this.shape_19.setTransform(4.4,-7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49723").s().p("AgIAAQAIgFAJAHQgGgCgHACg");
	this.shape_20.setTransform(3.2,-91.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F49723").s().p("AABADIgHgGQAGACAHADQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_21.setTransform(4.9,-90.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F49723").s().p("AAAgBQAAgCAEADIgHACIADgDg");
	this.shape_22.setTransform(-20.5,-16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F49723").s().p("AgCgCIAFAEIgDABg");
	this.shape_23.setTransform(-41.1,-53.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F49723").s().p("AgHAAQgDgEAGABIANADQgGAAgDAEg");
	this.shape_24.setTransform(-26.2,-84.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F49723").s().p("AgCgCIAFAAIgDAEg");
	this.shape_25.setTransform(26.9,-82.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F49723").s().p("AgHAAIAHAAIAIgBIgIADg");
	this.shape_26.setTransform(28.6,-81.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F49723").s().p("AgCABIgEADIAAgJIANAIIgGADIAAAAQgBAAgCgFg");
	this.shape_27.setTransform(32.5,-72.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F49723").s().p("AgDALIADgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAgBQgBAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAIgEgBQAEgGAFgJIgCAGQgBAGABAGIABABQABAGgEAAIgEgCg");
	this.shape_28.setTransform(34.9,-68.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F49723").s().p("AgNAJQABgGAGgBIAMgCIACAAIgDgCQAAAAgBAAQAAAAAAABQAAAAABABQAAAAABAAQgLgIgCgEIAQALIAAgBIAFAJQgGgGgDgBQADAHgHAAQgDAAAGAGIgHAAIgBAAQgFAAgEgEg");
	this.shape_29.setTransform(31.1,-77.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F49723").s().p("AAEAHIACAAIgNgNQAEgDAHACQABAMADAEg");
	this.shape_30.setTransform(29.4,-79.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F49723").s().p("AAAATQAAgKgHgBQgHgCgFAFQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAEgCIgMgCQADgFANgCQAJgBABgFQACAEgBAFQABABAHAEQAHAAgCgHIgEgNQALACAEgEQgCAOgIAKQgIANgHAAIgBAAg");
	this.shape_31.setTransform(25.8,-78.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F49723").s().p("AgCgBQACABAEAAIgBACg");
	this.shape_32.setTransform(34.8,-74.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F49723").s().p("AAAgDQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAABQABABAAADg");
	this.shape_33.setTransform(32,-78.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F49723").s().p("AgDgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAGAFQgFgBgCgDg");
	this.shape_34.setTransform(33.9,-74.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F49723").s().p("AgGgGQAGAGAFAAQADADgBACIgFACQgEgGgEgHg");
	this.shape_35.setTransform(33.3,-75.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F49723").s().p("AgBAAIABAAIACABg");
	this.shape_36.setTransform(36,-70.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F49723").s().p("AgEgEIAJAFQgCgBgDAEg");
	this.shape_37.setTransform(36.9,-70);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F49723").s().p("AgBgCIAKACQgHAAgCAAQgFADgCAAQAAgGAGABg");
	this.shape_38.setTransform(37.4,-67.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F49723").s().p("AgBACIADgGQABAEgDAFg");
	this.shape_39.setTransform(36.8,-72.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F49723").s().p("AgJgHQANACAGAFQgDgBgBAEQgBAFgEAAQgBgLgJgEg");
	this.shape_40.setTransform(35.4,-76.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F49723").s().p("AgDgCIAHAEIgDABQgBAAgDgFg");
	this.shape_41.setTransform(38.1,-69.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F49723").s().p("AgDACIADgDIAEgEQgCACgBADIABAGg");
	this.shape_42.setTransform(39,-69.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F49723").s().p("AgBABIABgFQAAAAAAAAQAAAAAAABQABAAAAABQAAABAAABQAAAEABABg");
	this.shape_43.setTransform(39.8,-57.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F49723").s().p("AgEAAQAEADAAgDIACgGQAGAJgEAEIgCAAQgCAAgEgHg");
	this.shape_44.setTransform(41.3,-62.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F49723").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEAAAAAAIACgCIAHAFIgFgCg");
	this.shape_45.setTransform(41,-64.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F49723").s().p("AgEAAQACgFACAAQABgBAEAFQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQABAFgBABg");
	this.shape_46.setTransform(42.1,-65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F49723").s().p("AAAAAQAAgDAAADIAAACIAAgCg");
	this.shape_47.setTransform(43.3,-62.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F49723").s().p("AgCgCQABAAABAAQAAAAAAAAQAAAAAAAAQAAgBABAAIACAFIgBACIgEgGgAgCgCIAAAAIAAAAg");
	this.shape_48.setTransform(42.8,-62.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F49723").s().p("AgBAQIABgCQAAgFgFgLQgGgKAHgGQgBAHAFALIAJATg");
	this.shape_49.setTransform(41.8,-56.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F49723").s().p("AABADIgEgGIAHAHg");
	this.shape_50.setTransform(42.5,-52.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F49723").s().p("AAAACQgEgBABgBIADgBQADAAABADIgEAAg");
	this.shape_51.setTransform(45.6,-45.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F49723").s().p("AkiEjQh4h5AAiqQAAipB4h5QB5h4CpAAQCqAAB5B4QB4B5AACpQAACqh4B5Qh5B4iqAAQipAAh5h4g");
	this.shape_52.setTransform(-0.9,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-92.8,92.1,92.9);


(lib.CopiadeSímboloBien332 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleNYQgtgLggggIh1hzIgNgRIn+n+QgygygBhGQAAhEAxgxIB0h0QAxgxBGABQBFABAyAyIGVGUIQBwKQAxgyBGgBQBHAAAxAwIB0B0QAxAxgBBGQAABFgyAzIxsR2IgLALIhzB0IgBABIgLAJQgYAVgfAJIgIADQgWAGgXAAQgUAAgUgFg");
	this.shape.setTransform(-0.5,0.5,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AribVQlUiRkHkGQkGkHiQlVQiWlgAAmCQAAmACWlhQCQlVEGkHQEHkGFUiRQFiiVGAAAQGCAAFgCVQFVCREGEGQEIEHCQFVQCUFgAAGBQAAGCiUFgQiQFVkIEHQkGEGlVCRQlgCVmCAAQmAAAliiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50.1);


(lib.CopiadeSímboloBien32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleNYQgtgLggggIh1hzIgNgRIn+n+QgygygBhGQAAhEAxgxIB0h0QAxgxBGABQBFABAyAyIGVGUIQBwKQAxgyBGgBQBHAAAxAwIB0B0QAxAxgBBGQAABFgyAzIxsR2IgLALIhzB0IgBABIgLAJQgYAVgfAJIgIADQgWAGgXAAQgUAAgUgFg");
	this.shape.setTransform(-0.5,0.5,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AribVQlUiRkHkGQkGkHiQlVQiWlgAAmCQAAmACWlhQCQlVEGkHQEHkGFUiRQFiiVGAAAQGCAAFgCVQFVCREGEGQEIEHCQFVQCUFgAAGBQAAGCiUFgQiQFVkIEHQkGEGlVCRQlgCVmCAAQmAAAliiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50.1);


(lib.CopiadeSímboloBien3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleNYQgtgLggggIh1hzIgNgRIn+n+QgygygBhGQAAhEAxgxIB0h0QAxgxBGABQBFABAyAyIGVGUIQBwKQAxgyBGgBQBHAAAxAwIB0B0QAxAxgBBGQAABFgyAzIxsR2IgLALIhzB0IgBABIgLAJQgYAVgfAJIgIADQgWAGgXAAQgUAAgUgFg");
	this.shape.setTransform(-0.5,0.5,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AribVQlUiRkHkGQkGkHiQlVQiWlgAAmCQAAmACWlhQCQlVEGkHQEHkGFUiRQFiiVGAAAQGCAAFgCVQFVCREGEGQEIEHCQFVQCUFgAAGBQAAGCiUFgQiQFVkIEHQkGEGlVCRQlgCVmCAAQmAAAliiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50.1);


(lib.CopiadeSímboloBien2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleNYQgtgLggggIh1hzIgNgRIn+n+QgygygBhGQAAhEAxgxIB0h0QAxgxBGABQBFABAyAyIGVGUIQBwKQAxgyBGgBQBHAAAxAwIB0B0QAxAxgBBGQAABFgyAzIxsR2IgLALIhzB0IgBABIgLAJQgYAVgfAJIgIADQgWAGgXAAQgUAAgUgFg");
	this.shape.setTransform(-0.5,0.5,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AribVQlUiRkHkGQkGkHiQlVQiWlgAAmCQAAmACWlhQCQlVEGkHQEHkGFUiRQFiiVGAAAQGCAAFgCVQFVCREGEGQEIEHCQFVQCUFgAAGBQAAGCiUFgQiQFVkIEHQkGEGlVCRQlgCVmCAAQmAAAliiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50.1);


(lib.CopiadeSímboloBien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleNYQgtgLggggIh1hzIgNgRIn+n+QgygygBhGQAAhEAxgxIB0h0QAxgxBGABQBFABAyAyIGVGUIQBwKQAxgyBGgBQBHAAAxAwIB0B0QAxAxgBBGQAABFgyAzIxsR2IgLALIhzB0IgBABIgLAJQgYAVgfAJIgIADQgWAGgXAAQgUAAgUgFg");
	this.shape.setTransform(-0.5,0.5,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01A652").s().p("AribVQlUiRkHkGQkGkHiQlVQiWlgAAmCQAAmACWlhQCQlVEGkHQEHkGFUiRQFiiVGAAAQGCAAFgCVQFVCREGEGQEIEHCQFVQCUFgAAGBQAAGCiUFgQiQFVkIEHQkGEGlVCRQlgCVmCAAQmAAAliiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50.1);


(lib.CopiadeSímbolo4s52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D210D").ss(3.1,1,1).p("AAAnzQhlAAhdAoQhZAmhGBFQhFBFgmBaQgnBdAABkQAABmAnBdQAmBZBFBGQBGBFBZAmQBdAnBlAAQBlAABdgnQBagmBFhFQBFhGAmhZQAohdAAhmQAAhkgohdQgmhahFhFQhFhFhagmQhdgohlAAgAlshjILhACIlwFvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjCHMQhZgmhFhFQhFhFgmhZQgoheAAhlQAAhkAohdQAmhZBFhFQBFhGBZgmQBegoBkAAQBlAABdAoQBZAmBFBGQBGBFAmBZQAoBdAABkQAABlgoBeQgmBZhGBFQhFBFhZAmQhdAohlAAQhkAAhegogAAFEOIFvlvIrggCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkZEZQh1h0ABilQgBikB1h1QB1h0CkAAQClAAB0B0QB1B1AACkQAAClh1B0Qh0B1ilAAQikAAh1h1g");
	this.shape_2.setTransform(4.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103.1,103.1);


(lib.CopiadeSímbolo4s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D210D").ss(3.1,1,1).p("AAAnzQhlAAhdAoQhZAmhGBFQhFBFgmBaQgnBdAABkQAABmAnBdQAmBZBFBGQBGBFBZAmQBdAnBlAAQBlAABdgnQBagmBFhFQBFhGAmhZQAohdAAhmQAAhkgohdQgmhahFhFQhFhFhagmQhdgohlAAgAlshjILhACIlwFvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjCHMQhZgmhFhFQhFhFgmhZQgoheAAhlQAAhkAohdQAmhZBFhFQBFhGBZgmQBegoBkAAQBlAABdAoQBZAmBFBGQBGBFAmBZQAoBdAABkQAABlgoBeQgmBZhGBFQhFBFhZAmQhdAohlAAQhkAAhegogAAFEOIFvlvIrggCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkZEZQh1h0ABilQgBikB1h1QB1h0CkAAQClAAB0B0QB1B1AACkQAAClh1B0Qh0B1ilAAQikAAh1h1g");
	this.shape_2.setTransform(4.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103.1,103.1);


(lib.CopiadeSímbolo4s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D210D").ss(3.1,1,1).p("AAAnzQhlAAhdAoQhZAmhGBFQhFBFgmBaQgnBdAABkQAABmAnBdQAmBZBFBGQBGBFBZAmQBdAnBlAAQBlAABdgnQBagmBFhFQBFhGAmhZQAohdAAhmQAAhkgohdQgmhahFhFQhFhFhagmQhdgohlAAgAlshjILhACIlwFvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjCHMQhZgmhFhFQhFhFgmhZQgoheAAhlQAAhkAohdQAmhZBFhFQBFhGBZgmQBegoBkAAQBlAABdAoQBZAmBFBGQBGBFAmBZQAoBdAABkQAABlgoBeQgmBZhGBFQhFBFhZAmQhdAohlAAQhkAAhegogAAFEOIFvlvIrggCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkZEZQh1h0ABilQgBikB1h1QB1h0CkAAQClAAB0B0QB1B1AACkQAAClh1B0Qh0B1ilAAQikAAh1h1g");
	this.shape_2.setTransform(4.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103.1,103.1);


(lib.CopiadeSímbolo4s22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D210D").ss(3.1,1,1).p("AAAnzQhlAAhdAoQhZAmhGBFQhFBFgmBaQgnBdAABkQAABmAnBdQAmBZBFBGQBGBFBZAmQBdAnBlAAQBlAABdgnQBagmBFhFQBFhGAmhZQAohdAAhmQAAhkgohdQgmhahFhFQhFhFhagmQhdgohlAAgAlshjILhACIlwFvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjCHMQhZgmhFhFQhFhFgmhZQgoheAAhlQAAhkAohdQAmhZBFhFQBFhGBZgmQBegoBkAAQBlAABdAoQBZAmBFBGQBGBFAmBZQAoBdAABkQAABlgoBeQgmBZhGBFQhFBFhZAmQhdAohlAAQhkAAhegogAAFEOIFvlvIrggCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkZEZQh1h0ABilQgBikB1h1QB1h0CkAAQClAAB0B0QB1B1AACkQAAClh1B0Qh0B1ilAAQikAAh1h1g");
	this.shape_2.setTransform(4.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103.1,103.1);


(lib.CopiadeSímbolo4s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D210D").ss(3.1,1,1).p("AAAnzQhlAAhdAoQhZAmhGBFQhFBFgmBaQgnBdAABkQAABmAnBdQAmBZBFBGQBGBFBZAmQBdAnBlAAQBlAABdgnQBagmBFhFQBFhGAmhZQAohdAAhmQAAhkgohdQgmhahFhFQhFhFhagmQhdgohlAAgAlshjILhACIlwFvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjCHMQhZgmhFhFQhFhFgmhZQgoheAAhlQAAhkAohdQAmhZBFhFQBFhGBZgmQBegoBkAAQBlAABdAoQBZAmBFBGQBGBFAmBZQAoBdAABkQAABlgoBeQgmBZhGBFQhFBFhZAmQhdAohlAAQhkAAhegogAAFEOIFvlvIrggCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkZEZQh1h0ABilQgBikB1h1QB1h0CkAAQClAAB0B0QB1B1AACkQAAClh1B0Qh0B1ilAAQikAAh1h1g");
	this.shape_2.setTransform(4.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103.1,103.1);


(lib.CopiadeSímbolo1Mal42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKFOAQhDgFgygyIoQoRIoQIRQgxAyhCAFQhCAEgsgrIhnhnQgrgrAEhCQAFhCAygyIIRoRIoRoQQgygygFhCQgEhCArgrIBnhnQAsgrBCAFQBCAEAxAyIIQIRIIQoRQAygyBDgEQBCgFAqArIBoBnQArArgEBCQgFBCgyAyIoRIQIIRIRQAyAyAFBCQAEBCgrArIhoBnQgmAng6AAIgMAAg");
	this.shape.setTransform(0,0,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1B24").s().p("ArhbVQlViRkGkGQkHkHiQlVQiVlggBmCQABmACVlhQCQlVEHkHQEGkGFViRQFhiVGAAAQGCAAFgCVQFVCREGEGQEIEHCPFVQCVFgABGBQgBGCiVFgQiPFVkIEHQkGEGlVCRQlgCVmCAAQmAAAlhiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.CopiadeSímbolo1Mal3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKFOAQhDgFgygyIoQoRIoQIRQgxAyhCAFQhCAEgsgrIhnhnQgrgrAEhCQAFhCAygyIIRoRIoRoQQgygygFhCQgEhCArgrIBnhnQAsgrBCAFQBCAEAxAyIIQIRIIQoRQAygyBDgEQBCgFAqArIBoBnQArArgEBCQgFBCgyAyIoRIQIIRIRQAyAyAFBCQAEBCgrArIhoBnQgmAng6AAIgMAAg");
	this.shape.setTransform(0,0,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1B24").s().p("ArhbVQlViRkGkGQkHkHiQlVQiVlggBmCQABmACVlhQCQlVEHkHQEGkGFViRQFhiVGAAAQGCAAFgCVQFVCREGEGQEIEHCPFVQCVFgABGBQgBGCiVFgQiPFVkIEHQkGEGlVCRQlgCVmCAAQmAAAlhiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.CopiadeSímbolo1Mal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKFOAQhDgFgygyIoQoRIoQIRQgxAyhCAFQhCAEgsgrIhnhnQgrgrAEhCQAFhCAygyIIRoRIoRoQQgygygFhCQgEhCArgrIBnhnQAsgrBCAFQBCAEAxAyIIQIRIIQoRQAygyBDgEQBCgFAqArIBoBnQArArgEBCQgFBCgyAyIoRIQIIRIRQAyAyAFBCQAEBCgrArIhoBnQgmAng6AAIgMAAg");
	this.shape.setTransform(0,0,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1B24").s().p("ArhbVQlViRkGkGQkHkHiQlVQiVlggBmCQABmACVlhQCQlVEHkHQEGkGFViRQFhiVGAAAQGCAAFgCVQFVCREGEGQEIEHCPFVQCVFgABGBQgBGCiVFgQiPFVkIEHQkGEGlVCRQlgCVmCAAQmAAAlhiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.CopiadeSímbolo1Mal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKFOAQhDgFgygyIoQoRIoQIRQgxAyhCAFQhCAEgsgrIhnhnQgrgrAEhCQAFhCAygyIIRoRIoRoQQgygygFhCQgEhCArgrIBnhnQAsgrBCAFQBCAEAxAyIIQIRIIQoRQAygyBDgEQBCgFAqArIBoBnQArArgEBCQgFBCgyAyIoRIQIIRIRQAyAyAFBCQAEBCgrArIhoBnQgmAng6AAIgMAAg");
	this.shape.setTransform(0,0,0.132,0.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1B24").s().p("ArhbVQlViRkGkGQkHkHiQlVQiVlggBmCQABmACVlhQCQlVEHkHQEGkGFViRQFhiVGAAAQGCAAFgCVQFVCREGEGQEIEHCPFVQCVFgABGBQgBGCiVFgQiPFVkIEHQkGEGlVCRQlgCVmCAAQmAAAlhiVg");
	this.shape_1.setTransform(0,0,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


// stage content:
(lib.pag9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root1 = this;
		root1.stop();
		
		root1.f1.addEventListener("click", ff1);
		root1.f2.addEventListener("click",ff2);
		root1.f3.addEventListener("click",ff3);
		root1.f4.addEventListener("click",ff4);
		root1.f5.addEventListener("click",ff5);
		root1.f6.addEventListener("click",ff6)
		 
		
		var bienes= new Array();
		bienes.push(root1.bien1);
		bienes.push(root1.bien2);
		bienes.push(root1.bien3);
		bienes.push(root1.bien4);
		bienes.push(root1.bien5);
		bienes.push(root1.bien6);
		
		var males= new Array();
		males.push(root1.mal1);
		males.push(root1.mal2);
		males.push(root1.mal3);
		males.push(root1.mal4);
		males.push(root1.mal5);
		males.push(root1.mal6);
		
		
		root1.bien1.visible=false;
		root1.bien2.visible=false;
		root1.bien3.visible=false;
		root1.bien4.visible=false;
		root1.bien5.visible=false;
		root1.bien6.visible=false;
		
		root1.mal1.visible=false;
		root1.mal2.visible=false;
		root1.mal3.visible=false;
		root1.mal4.visible=false;
		root1.mal5.visible=false;
		root1.mal6.visible=false;
		
		function volverInvisible(ar){
		 for(var i=0; i<ar.length; i++){
			 ar[i].visible=false;
		 }
		}
		
		var primero= new Array();
		var segundo= new Array();
		var tercero= new Array();
		var cuarto= new Array();
		var quinto= new Array();
		var sexto= new Array();
		 
		primero.push(root1.b1a);
		primero.push(root1.b1b);
		primero.push(root1.b1c);
		
		segundo.push(root1.b2a);
		segundo.push(root1.b2b);
		segundo.push(root1.b2c);
		
		
		tercero.push(root1.b3a);
		tercero.push(root1.b3b);
		tercero.push(root1.b3c);
		
		cuarto.push(root1.b4a);
		cuarto.push(root1.b4b);
		cuarto.push(root1.b4c);
		
		quinto.push(root1.b5a);
		quinto.push(root1.b5b);
		quinto.push(root1.b5c);
		
		sexto.push(root1.b6a);
		sexto.push(root1.b6b);
		sexto.push(root1.b6c);
		
		//volverInvisible(bienes);
		//volverInvisible(males);
		
		
		
		function ff1(e) {
		aux=primero[2].y;	
		createjs.Tween.get(primero[1]).to({y:primero[0].y},1200);
		createjs.Tween.get(primero[2]).to({y:primero[1].y},1200);
		primero[0].y=aux;
		volcar(primero);
		root1.f1.removeEventListener("click", ff1);
		setTimeout(function(){
		root1.f1.addEventListener("click", ff1);
			},1300)
		}
		function ff2(e) {
		aux=segundo[2].y;	
		createjs.Tween.get(segundo[1]).to({y:segundo[0].y},1200);
		createjs.Tween.get(segundo[2]).to({y:segundo[1].y},1200);
		segundo[0].y=aux;
		volcar(segundo);
		root1.f2.removeEventListener("click", ff2);
		setTimeout(function(){
		root1.f2.addEventListener("click", ff2);
			},1300)
		}
		
		function ff3(e) {
		aux=tercero[2].y;	
		createjs.Tween.get(tercero[1]).to({y:tercero[0].y},1200);
		createjs.Tween.get(tercero[2]).to({y:tercero[1].y},1200);
		tercero[0].y=aux;
		volcar(tercero);
		root1.f3.removeEventListener("click", ff3);
		setTimeout(function(){
		root1.f3.addEventListener("click", ff3);
			},1300)
		}
		
		function ff4(e) {
		aux=cuarto[2].y;	
		createjs.Tween.get(cuarto[1]).to({y:cuarto[0].y},1200);
		createjs.Tween.get(cuarto[2]).to({y:cuarto[1].y},1200);
		cuarto[0].y=aux;
		volcar(cuarto);
		root1.f4.removeEventListener("click", ff4);
		setTimeout(function(){
		root1.f4.addEventListener("click", ff4);
			},1300)
		}
		function ff5(e) {
		aux=quinto[2].y;	
		createjs.Tween.get(quinto[1]).to({y:quinto[0].y},1200);
		createjs.Tween.get(quinto[2]).to({y:quinto[1].y},1200);
		quinto[0].y=aux;
		volcar(quinto);
		root1.f5.removeEventListener("click", ff5);
		setTimeout(function(){
		root1.f5.addEventListener("click", ff5);
			},1300)
		}
		function ff6(e) {
		aux=sexto[2].y;	
		createjs.Tween.get(sexto[1]).to({y:sexto[0].y},1200);
		createjs.Tween.get(sexto[2]).to({y:sexto[1].y},1200);
		sexto[0].y=aux;
		volcar(sexto);
		root1.f6.removeEventListener("click", ff6);
		setTimeout(function(){
		root1.f6.addEventListener("click", ff6);
			},1300);
		}
		
		function volcar(ar){
		   var aux=ar[0];
		   ar[0]=ar[1];
		   ar[1]=ar[2];
		   ar[2]=aux;  
		}
		function getSimbolo(ar){
			return ar[1];
		}
		
		root1.verificar.addEventListener("click",fverificar);
		function fverificar(e){
		 verificar1(root1.n1.text,root1.n2.text,primero,root1.f1,root1.bien1,root1.mal1);	
		 verificar1(root1.n3.text,root1.n4.text,segundo,root1.f2,root1.bien2,root1.mal2);	
		 verificar1(root1.n5.text,root1.n6.text,tercero,root1.f3,root1.bien3,root1.mal3);	
		 verificar1(root1.n7.text,root1.n8.text,cuarto,root1.f4,root1.bien4,root1.mal4);	
		 verificar1(root1.n9.text,root1.n10.text,quinto,root1.f5,root1.bien5,root1.mal5);	
		 verificar1(root1.n11.text,root1.n12.text,sexto,root1.f6,root1.bien6,root1.mal6);	
		 
		
		}
		
		
		function volverVisible(mo){
			mo.visible=true;
		}
		
		 function volverInvisible(mo){
			mo.visible=false;
		}
		
		 
		
		function verificar1(a,b,array,btn,bien,mal){
			 var num1=parseInt(a);
		 var num2=parseInt(b);
		var operador=getSimbolo(array).text;
			 
			if(operador=="="){
				if(num1==num2){
					btn.visible=false; 
					volverVisible(bien);	
					volverInvisible(mal);
				}else{
				btn.visible=true;
					volverVisible(mal);	
					volverInvisible(bien);
				}
			 
			
			return true;
			}else{
				if( operador==">"){
			if(num1>num2){
					btn.visible=false; 
					volverVisible(bien);	
					volverInvisible(mal);
				}else{
				btn.visible=true;
					volverVisible(mal);	
					volverInvisible(bien);
				}
					return true;
				}else{
					
					if(operador=="<"){
		       	if(num1<num2){
					btn.visible=false; 
					volverVisible(bien);	
					volverInvisible(mal);
				}else{
				btn.visible=true;
					volverVisible(mal);	
					volverInvisible(bien);
				}  		
						
						return true;
					}
				}
			}
			// volverVisible(mal);
			return false;
		}
		
		function sonidoBien(){
			createjs.Sound.play("bien");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 9
	this.mal6 = new lib.CopiadeSímbolo1Mal42();
	this.mal6.parent = this;
	this.mal6.setTransform(1084.8,549);

	this.bien6 = new lib.CopiadeSímboloBien332();
	this.bien6.parent = this;
	this.bien6.setTransform(1024.8,549);

	this.mal5 = new lib.CopiadeSímbolo1Mal3();
	this.mal5.parent = this;
	this.mal5.setTransform(1084.8,409.1);

	this.bien5 = new lib.CopiadeSímboloBien32();
	this.bien5.parent = this;
	this.bien5.setTransform(1024.8,409.1);

	this.mal4 = new lib.Símbolo1Mal();
	this.mal4.parent = this;
	this.mal4.setTransform(1084.8,269.1);

	this.bien4 = new lib.CopiadeSímboloBien3();
	this.bien4.parent = this;
	this.bien4.setTransform(1024.8,269.1);

	this.mal3 = new lib.CopiadeSímbolo1Mal2();
	this.mal3.parent = this;
	this.mal3.setTransform(519.2,548.4);

	this.bien3 = new lib.CopiadeSímboloBien2();
	this.bien3.parent = this;
	this.bien3.setTransform(459.2,548.3);

	this.mal2 = new lib.CopiadeSímbolo1Mal();
	this.mal2.parent = this;
	this.mal2.setTransform(519.2,409);

	this.bien2 = new lib.CopiadeSímboloBien();
	this.bien2.parent = this;
	this.bien2.setTransform(459.2,409);

	this.mal1 = new lib.Símbolo1Mal();
	this.mal1.parent = this;
	this.mal1.setTransform(519.2,269);

	this.bien1 = new lib.SímboloBien();
	this.bien1.parent = this;
	this.bien1.setTransform(459.2,269);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bien1},{t:this.mal1},{t:this.bien2},{t:this.mal2},{t:this.bien3},{t:this.mal3},{t:this.bien4},{t:this.mal4},{t:this.bien5},{t:this.mal5},{t:this.bien6},{t:this.mal6}]}).wait(1));

	// Modo de aislamiento
	this.f6 = new lib.CopiadeSímbolo4s52();
	this.f6.parent = this;
	this.f6.setTransform(843.1,550.9,0.2,0.2,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.f6, 0, 1, 1);

	this.f5 = new lib.CopiadeSímbolo4s4();
	this.f5.parent = this;
	this.f5.setTransform(843.1,412.8,0.2,0.2,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.f5, 0, 1, 1);

	this.f4 = new lib.CopiadeSímbolo4s3();
	this.f4.parent = this;
	this.f4.setTransform(843.1,272.3,0.2,0.2,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.f4, 0, 1, 1);

	this.f3 = new lib.CopiadeSímbolo4s22();
	this.f3.parent = this;
	this.f3.setTransform(275.5,550.9,0.2,0.2,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.f3, 0, 1, 1);

	this.f2 = new lib.CopiadeSímbolo4s();
	this.f2.parent = this;
	this.f2.setTransform(275.5,412.8,0.2,0.2,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.f2, 0, 1, 1);

	this.f1 = new lib.Símbolo4s();
	this.f1.parent = this;
	this.f1.setTransform(278.6,272.1,0.2,0.2,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.f1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f1},{t:this.f2},{t:this.f3},{t:this.f4},{t:this.f5},{t:this.f6}]}).wait(1));

	// Capa 3
	this.n12 = new cjs.Text("7561", "36px 'Calibri'");
	this.n12.name = "n12";
	this.n12.lineHeight = 46;
	this.n12.parent = this;
	this.n12.setTransform(893.9,528.1);

	this.n11 = new cjs.Text("9561", "36px 'Calibri'");
	this.n11.name = "n11";
	this.n11.lineHeight = 46;
	this.n11.parent = this;
	this.n11.setTransform(659.5,528.1);

	this.n6 = new cjs.Text("2564", "36px 'Calibri'");
	this.n6.name = "n6";
	this.n6.lineHeight = 46;
	this.n6.parent = this;
	this.n6.setTransform(322.8,528.1);

	this.n5 = new cjs.Text("2546", "36px 'Calibri'");
	this.n5.name = "n5";
	this.n5.lineHeight = 46;
	this.n5.parent = this;
	this.n5.setTransform(91.6,528.1);

	this.n10 = new cjs.Text("2178", "36px 'Calibri'");
	this.n10.name = "n10";
	this.n10.lineHeight = 46;
	this.n10.parent = this;
	this.n10.setTransform(893.9,388.1);

	this.n9 = new cjs.Text("1278", "36px 'Calibri'");
	this.n9.name = "n9";
	this.n9.lineHeight = 46;
	this.n9.parent = this;
	this.n9.setTransform(659.5,388.1);

	this.n4 = new cjs.Text("3287", "36px 'Calibri'");
	this.n4.name = "n4";
	this.n4.lineHeight = 46;
	this.n4.parent = this;
	this.n4.setTransform(322.8,388.1);

	this.n3 = new cjs.Text("3294", "36px 'Calibri'");
	this.n3.name = "n3";
	this.n3.lineHeight = 46;
	this.n3.parent = this;
	this.n3.setTransform(91.6,388.1);

	this.n8 = new cjs.Text("4570", "36px 'Calibri'");
	this.n8.name = "n8";
	this.n8.lineHeight = 46;
	this.n8.parent = this;
	this.n8.setTransform(893.9,248.1);

	this.n7 = new cjs.Text("4570", "36px 'Calibri'");
	this.n7.name = "n7";
	this.n7.lineHeight = 46;
	this.n7.parent = this;
	this.n7.setTransform(659.5,248.1);

	this.n2 = new cjs.Text("6704", "36px 'Calibri'");
	this.n2.name = "n2";
	this.n2.lineHeight = 46;
	this.n2.parent = this;
	this.n2.setTransform(322.8,248.1);

	this.n1 = new cjs.Text("6485", "36px 'Calibri'");
	this.n1.name = "n1";
	this.n1.lineHeight = 46;
	this.n1.parent = this;
	this.n1.setTransform(91.6,248.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n1},{t:this.n2},{t:this.n7},{t:this.n8},{t:this.n3},{t:this.n4},{t:this.n9},{t:this.n10},{t:this.n5},{t:this.n6},{t:this.n11},{t:this.n12}]}).wait(1));

	// Capa 18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EA2AAtbQiaAAAAiZIAAkmQAAiZCaAAIK1AAQCZAAAACZIAAEmQAACZiZAAg");
	mask.setTransform(430.3,290.8);

	// Capa 19
	this.b6c = new cjs.Text(">", "bold 46px 'Calibri'", "#FFFFFF");
	this.b6c.name = "b6c";
	this.b6c.lineHeight = 58;
	this.b6c.parent = this;
	this.b6c.setTransform(798.5,606);

	this.b6a = new cjs.Text("<", "bold 46px 'Calibri'", "#FFFFFF");
	this.b6a.name = "b6a";
	this.b6a.lineHeight = 58;
	this.b6a.parent = this;
	this.b6a.setTransform(798.5,460.5);

	this.b6b = new cjs.Text("=", "bold 46px 'Calibri'", "#FFFFFF");
	this.b6b.name = "b6b";
	this.b6b.lineHeight = 58;
	this.b6b.parent = this;
	this.b6b.setTransform(798.5,520.7);

	this.b6c.mask = this.b6a.mask = this.b6b.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b6b},{t:this.b6a},{t:this.b6c}]}).wait(1));

	// Capa 16 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EA2AAiOQiagBAAiZIAAklQAAiaCaABIK1AAQCZgBAACaIAAElQAACZiZABg");
	mask_1.setTransform(430.3,219);

	// Capa 17
	this.b5c = new cjs.Text(">", "bold 46px 'Calibri'", "#FFFFFF");
	this.b5c.name = "b5c";
	this.b5c.lineHeight = 58;
	this.b5c.parent = this;
	this.b5c.setTransform(798.5,442.7);

	this.b5a = new cjs.Text("<", "bold 46px 'Calibri'", "#FFFFFF");
	this.b5a.name = "b5a";
	this.b5a.lineHeight = 58;
	this.b5a.parent = this;
	this.b5a.setTransform(798.5,322.4);

	this.b5b = new cjs.Text("=", "bold 46px 'Calibri'", "#FFFFFF");
	this.b5b.name = "b5b";
	this.b5b.lineHeight = 58;
	this.b5b.parent = this;
	this.b5b.setTransform(798.5,382.6);

	this.b5c.mask = this.b5a.mask = this.b5b.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b5b},{t:this.b5a},{t:this.b5c}]}).wait(1));

	// Capa 15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EA2AAXbQiaAAAAiZIAAklQAAiZCaAAIK1AAQCZAAAACZIAAElQAACZiZAAg");
	mask_2.setTransform(430.3,150);

	// simb
	this.b4c = new cjs.Text(">", "bold 46px 'Calibri'", "#FFFFFF");
	this.b4c.name = "b4c";
	this.b4c.lineHeight = 58;
	this.b4c.parent = this;
	this.b4c.setTransform(798.5,298.2);

	this.b4a = new cjs.Text("<", "bold 46px 'Calibri'", "#FFFFFF");
	this.b4a.name = "b4a";
	this.b4a.lineHeight = 58;
	this.b4a.parent = this;
	this.b4a.setTransform(798.5,174.1);

	this.b4b = new cjs.Text("=", "bold 46px 'Calibri'", "#FFFFFF");
	this.b4b.name = "b4b";
	this.b4b.lineHeight = 58;
	this.b4b.parent = this;
	this.b4b.setTransform(798.5,242);

	this.b4c.mask = this.b4a.mask = this.b4b.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b4b},{t:this.b4a},{t:this.b4c}]}).wait(1));

	// Capa 12 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EAJpAtbQiaAAAAiZIAAkmQAAiZCaAAIK1AAQCZAAAACZIAAEmQAACZiZAAg");
	mask_3.setTransform(146.4,290.8);

	// Capa 13
	this.b3a = new cjs.Text("<", "bold 46px 'Calibri'", "#FFFFFF");
	this.b3a.name = "b3a";
	this.b3a.lineHeight = 58;
	this.b3a.parent = this;
	this.b3a.setTransform(229.3,459.2);

	this.b3c = new cjs.Text(">", "bold 46px 'Calibri'", "#FFFFFF");
	this.b3c.name = "b3c";
	this.b3c.lineHeight = 58;
	this.b3c.parent = this;
	this.b3c.setTransform(229.3,592);

	this.b3b = new cjs.Text("=", "bold 46px 'Calibri'", "#FFFFFF");
	this.b3b.name = "b3b";
	this.b3b.lineHeight = 58;
	this.b3b.parent = this;
	this.b3b.setTransform(229.3,519.3);

	this.b3a.mask = this.b3c.mask = this.b3b.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b3b},{t:this.b3c},{t:this.b3a}]}).wait(1));

	// Capa 10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EAJrAiUQiZAAAAiZIAAklQAAiaCZAAIK1AAQCaAAAACaIAAElQAACZiaAAg");
	mask_4.setTransform(146.7,219.7);

	// Capa 11
	this.b2a = new cjs.Text("<", "bold 46px 'Calibri'", "#FFFFFF");
	this.b2a.name = "b2a";
	this.b2a.lineHeight = 58;
	this.b2a.parent = this;
	this.b2a.setTransform(229.3,312);

	this.b2c = new cjs.Text(">", "bold 46px 'Calibri'", "#FFFFFF");
	this.b2c.name = "b2c";
	this.b2c.lineHeight = 58;
	this.b2c.parent = this;
	this.b2c.setTransform(229.3,440);

	this.b2b = new cjs.Text("=", "bold 46px 'Calibri'", "#FFFFFF");
	this.b2b.name = "b2b";
	this.b2b.lineHeight = 58;
	this.b2b.parent = this;
	this.b2b.setTransform(229.3,379.9);

	this.b2a.mask = this.b2c.mask = this.b2b.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2b},{t:this.b2c},{t:this.b2a}]}).wait(1));

	// Capa 7 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AJtXbQiaAAAAiZIAAklQAAiaCaAAIK1AAQCZAAAACaIAAElQAACZiZAAg");
	mask_5.setTransform(146.8,150);

	// Capa 8
	this.b1a = new cjs.Text("<", "bold 46px 'Calibri'", "#FFFFFF");
	this.b1a.name = "b1a";
	this.b1a.lineHeight = 58;
	this.b1a.parent = this;
	this.b1a.setTransform(230.9,174.1);

	this.b1b = new cjs.Text("=", "bold 46px 'Calibri'", "#FFFFFF");
	this.b1b.name = "b1b";
	this.b1b.lineHeight = 58;
	this.b1b.parent = this;
	this.b1b.setTransform(230.9,239.8);

	this.b1c = new cjs.Text(">", "bold 46px 'Calibri'", "#FFFFFF");
	this.b1c.name = "b1c";
	this.b1c.lineHeight = 58;
	this.b1c.parent = this;
	this.b1c.setTransform(229.3,305);

	this.b1a.mask = this.b1b.mask = this.b1c.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1c},{t:this.b1b},{t:this.b1a}]}).wait(1));

	// Capa 2
	this.instance = new lib.Símbolo5();
	this.instance.parent = this;
	this.instance.setTransform(810.6,550);

	this.instance_1 = new lib.Símbolo4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(929.3,550,0.667,1);

	this.instance_2 = new lib.Símbolo4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(693.8,550,0.667,1);

	this.instance_3 = new lib.Símbolo5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(243.7,550);

	this.instance_4 = new lib.Símbolo4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(358.2,550,0.667,1,0,0,0,0.1,0);

	this.instance_5 = new lib.Símbolo4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(129.3,550,0.667,1,0,0,0,0.1,0);

	this.instance_6 = new lib.Símbolo5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(810.6,410);

	this.instance_7 = new lib.Símbolo4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(929.3,410,0.667,1);

	this.instance_8 = new lib.Símbolo4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(693.8,410,0.667,1);

	this.instance_9 = new lib.Símbolo5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(243.7,410);

	this.instance_10 = new lib.Símbolo4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(358.2,410,0.667,1,0,0,0,0.1,0);

	this.instance_11 = new lib.Símbolo4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(129.3,410,0.667,1,0,0,0,0.1,0);

	this.instance_12 = new lib.Símbolo5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(810.6,270);

	this.instance_13 = new lib.Símbolo4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(929.3,270,0.667,1);

	this.instance_14 = new lib.Símbolo4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(693.8,270,0.667,1);

	this.instance_15 = new lib.Símbolo5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(243.7,270);

	this.instance_16 = new lib.Símbolo4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(358.2,270,0.667,1,0,0,0,0.1,0);

	this.instance_17 = new lib.Símbolo4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(129.4,270,0.667,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa 1
	this.verificar = new lib.Símbolo3();
	this.verificar.parent = this;
	this.verificar.setTransform(585.1,701.7,1,1,0,0,0,0,-37.6);
	new cjs.ButtonHelper(this.verificar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.verificar).wait(1));

	// Capa 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhdAjIAAgOIC7AAIAAAOgAhdgUIAAgOIC7AAIAAAOg");
	this.shape.setTransform(934.9,121.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBpQASgGAIgNQAKgNAAgNQAAgEgBgCIgDgCQgCABgFADQgCABgEABQgJAAgFgGQgFgFAAgIQAAgKAHgGQAGgFAKgBQAJABAKAJQAJAKAAARQAAATgNAPQgNAPgZAKgAgOhPQgGgFAAgIQAAgJAGgFQAGgGAIABQAGgBAGAGQAFAFAAAJQAAAIgFAFQgGAGgGAAQgIAAgGgGg");
	this.shape_1.setTransform(910.9,128.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhdAEIAAgHIC7hSIAAAQIigBFICgBGIAAAQg");
	this.shape_2.setTransform(895.6,121.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZBpQASgGAIgNQAKgNAAgNQAAgEgBgCIgDgCQgCABgFADQgCABgEABQgJAAgFgGQgFgFAAgIQAAgKAHgGQAGgFAKgBQAJABAKAJQAJAKAAARQAAATgNAPQgNAPgZAKgAgOhPQgGgFAAgIQAAgJAGgFQAGgGAIABQAGgBAGAGQAFAFAAAJQAAAIgFAFQgGAGgGAAQgIAAgGgGg");
	this.shape_3.setTransform(871.6,128.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhdBHIChhGIihhGIAAgQIC7BSIAAAHIi7BSg");
	this.shape_4.setTransform(856.3,121.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAOQgGgHAAgHQAAgHAGgFQAGgGAGAAQAIAAAGAGQAFAGAAAGQAAAHgFAHQgHAFgHAAQgGAAgGgFg");
	this.shape_5.setTransform(832.7,132.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag9BJQgKgMAAgSQAAgMAEgJQAIgMARgKQATgJAngPIAAgGQAAgYgHgJQgJgJgMAAQgLAAgGAGQgHAGAAAHIAAALQAAAIgEAEQgEAEgHAAQgGAAgEgEQgEgFAAgIQAAgPAPgMQAQgNAbAAQAUAAAOAHQAKAGAFALQADAIAAAXIAAA1QAAAXABAFQABAFACACQAAABABAAQABAAAAAAQABABAAAAQABAAABAAIAFgBIANgNIAAAKQgTAagSAAQgIAAgGgGQgFgGAAgOQgXATgGADQgKAEgLAAQgQAAgLgLgAgQAAQgOAHgGAJQgGAIAAAKQAAANAIAIQAHAJAKAAQANAAAUgSIAAg7QgYAKgIADg");
	this.shape_6.setTransform(820.8,125.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkB6IAAgHQAMAAAEgCQAEgCACgFQACgGAAgPIAAg+QAAgYgBgIQgBgFgDgCQgDgDgEAAQgFAAgHADIgDgGIAvgUIAHAAIAAB/QAAAPADAGQACAFAEACQAFACALAAIAAAHgAgUg8IATg9IAlAAIgyA9g");
	this.shape_7.setTransform(807.3,121.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AguA+QgUgXAAgnQAAglAWgXQAXgYAdAAQAYAAAPANQAQAMAAAOQAAAHgFAEQgEAEgIAAQgKAAgFgHQgDgDgBgLQgBgKgGgGQgHgFgKAAQgQAAgLANQgOASAAAbQAAAbAOAXQAOAVAWAAQASABANgMQAKgJAJgUIAFACQgGAggTARQgTARgXAAQgaAAgUgXg");
	this.shape_8.setTransform(794.2,125.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag9BJQgLgMAAgSQAAgMAGgJQAHgMASgKQASgJAngPIAAgGQAAgYgIgJQgIgJgMAAQgLAAgGAGQgHAGAAAHIAAALQAAAIgEAEQgEAEgGAAQgHAAgFgEQgDgFAAgIQAAgPAPgMQAPgNAcAAQAUAAANAHQALAGAFALQADAIAAAXIAAA1QAAAXABAFQAAAFADACQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAIAGgBIANgNIAAAKQgTAagSAAQgJAAgEgGQgGgGAAgOQgXATgGADQgJAEgMAAQgQAAgLgLgAgRAAQgNAHgGAJQgGAIAAAKQAAANAHAIQAIAJAKAAQANAAAUgSIAAg7QgYAKgJADg");
	this.shape_9.setTransform(778.8,125.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAABTIg5iGQgEgKgEgEQgDgEgFgDIgMgDIAAgHIBMAAIAAAHIgFAAQgHAAgEADQgDAEAAAFQAAAHADAIIAkBXIAlhaQAEgLAAgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgDgDgBIgMgBIAAgHIA0AAIAAAHQgJABgDACQgGAGgFAMIg5CJg");
	this.shape_10.setTransform(761.2,126.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag9BJQgLgMAAgSQABgMAFgJQAHgMASgKQARgJAogPIAAgGQAAgYgHgJQgIgJgNAAQgLAAgHAGQgGAGAAAHIAAALQAAAIgEAEQgEAEgGAAQgIAAgDgEQgFgFAAgIQAAgPAQgMQAPgNAdAAQATAAAOAHQAKAGAFALQADAIAAAXIAAA1QAAAXABAFQAAAFADACQABABAAAAQABAAAAAAQABABAAAAQABAAABAAIAEgBIAPgNIAAAKQgUAagSAAQgJAAgEgGQgGgGAAgOQgXATgGADQgKAEgKAAQgRAAgLgLgAgQAAQgOAHgGAJQgGAIAAAKQAAANAIAIQAHAJAKAAQANAAAUgSIAAg7QgZAKgHADg");
	this.shape_11.setTransform(735.8,125.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkB8IAAgGQALAAAEgCQAEgCACgGQADgFAAgPIAAiQQAAgbgCgHQgBgGgCgCQgEgCgEAAQgFAAgGACIgDgGIAugUIAIAAIAADUQgBAPADAFQACAFAFACQAEADANAAIAAAGg");
	this.shape_12.setTransform(722.4,121.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkB8IAAgGQALAAAEgCQAEgCACgGQACgFAAgPIAAiQQAAgbgBgHQgBgGgCgCQgEgCgEAAQgFAAgGACIgEgGIAvgUIAIAAIAADUQAAAPACAFQACAFAFACQAEADANAAIAAAGg");
	this.shape_13.setTransform(712.4,121.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkB8IAAgGQAMAAAEgCQAEgCACgGQACgFAAgPIAAg+QAAgagBgGQgBgFgDgCQgDgDgEAAQgFAAgHADIgDgGIAvgUIAIAAIAAB/QAAAPACAFQACAGAEABQAFADALAAIAAAGgAgKhdQgFgFAAgIQAAgHAFgFQAFgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAFQgGAFgHAAQgFAAgGgFg");
	this.shape_14.setTransform(702.3,121.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfBQIgKgCQgDAAgDAEIgFAAIAAg5IAFAAQAFAYAOANQAOAMAPAAQAMABAIgIQAHgGABgLQAAgMgJgIQgIgJgYgMQgZgKgJgLQgHgKAAgPQAAgUANgNQAOgOAVAAQAIAAAOAFIAMACQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAAAIAEgGIAFAAIAAA3IgFAAQgHgagKgJQgLgKgOAAQgMAAgIAHQgHAGAAAJQAAAKAFAHQAFAHARAHIAYANQAkAQAAAcQAAAWgRAOQgRANgUAAQgNAAgTgFg");
	this.shape_15.setTransform(690.5,125.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag9BJQgKgMAAgSQAAgMAEgJQAIgMARgKQASgJAogPIAAgGQAAgYgHgJQgJgJgMAAQgLAAgHAGQgGAGAAAHIAAALQAAAIgEAEQgEAEgHAAQgGAAgEgEQgEgFgBgIQAAgPAQgMQAQgNAcAAQATAAAOAHQAKAGAFALQADAIAAAXIAAA1QAAAXABAFQABAFACACQABABAAAAQABAAAAAAQABABAAAAQABAAABAAIAEgBIAOgNIAAAKQgTAagSAAQgIAAgGgGQgFgGAAgOQgXATgGADQgJAEgMAAQgQAAgLgLgAgQAAQgOAHgGAJQgGAIAAAKQAAANAIAIQAHAJAKAAQANAAAUgSIAAg7QgZAKgHADg");
	this.shape_16.setTransform(675.8,125.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AguA+QgUgXAAgnQAAglAWgXQAXgYAdAAQAYAAAPANQAQAMAAAOQAAAHgFAEQgEAEgIAAQgKAAgFgHQgDgDgBgLQgBgKgGgGQgHgFgKAAQgQAAgLANQgOASAAAbQAAAbAOAXQAOAVAWAAQASABANgMQAKgJAJgUIAFACQgGAggTARQgTARgXAAQgaAAgUgXg");
	this.shape_17.setTransform(659.2,125.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag9BJQgLgMAAgSQAAgMAGgJQAHgMASgKQASgJAngPIAAgGQAAgYgIgJQgIgJgMAAQgLAAgGAGQgHAGAAAHIAAALQAAAIgEAEQgEAEgGAAQgHAAgFgEQgDgFAAgIQAAgPAPgMQAPgNAcAAQAUAAANAHQALAGAFALQADAIAAAXIAAA1QAAAXABAFQAAAFADACQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAIAGgBIANgNIAAAKQgTAagSAAQgJAAgEgGQgGgGAAgOQgXATgGADQgJAEgMAAQgQAAgLgLgAgRAAQgNAHgGAJQgGAIAAAKQAAANAHAIQAIAJAKAAQANAAAUgSIAAg7QgYAKgJADg");
	this.shape_18.setTransform(634.8,125.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkB8IAAgGQALAAAEgCQAEgCACgGQACgFAAgPIAAiQQAAgbgBgHQgBgGgCgCQgEgCgEAAQgEAAgHACIgEgGIAvgUIAIAAIAADUQAAAPACAFQACAFAFACQAEADAMAAIAAAGg");
	this.shape_19.setTransform(621.4,121.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAIBSIAAgGIADAAQAMAAAEgDQAFgEABgHQABgCAAgOIAAhAQAAgWgGgKQgFgJgOgBQgTABgVAWIAABTQAAAQACAEQADAGAEACQAEACAOAAIAAAGIhQAAIAAgGIAEAAQAMAAAEgGQAEgGAAgSIAAg5QAAgegBgGQgBgGgDgCQgDgDgEAAQgFAAgHADIgDgGIAxgUIAHAAIAAAiQAdgiAXAAQAOgBAJAIQAKAGAFAPQAEAKAAAXIAABCQAAAQADAFQABAEAFACQAEADAMAAIAAAGg");
	this.shape_20.setTransform(598.2,125.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AguA/QgVgXABgmQAAgnAUgXQAWgYAdAAQAcAAARASQARARAAAfIhsAAQgBAhASAVQARAVAWgBQAQABALgKQAMgIAIgVIAFADQgDAYgSAUQgRAUgbAAQgcAAgUgWgAgcg8QgLALgCAUIBIAAQgBgPgDgHQgEgJgJgGQgJgGgHABQgPAAgLALg");
	this.shape_21.setTransform(581.4,125.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AguA/QgVgXAAgmQABgnAUgXQAWgYAdAAQAcAAARASQARARAAAfIhsAAQgBAhASAVQARAVAWgBQAQABALgKQAMgIAIgVIAFADQgDAYgSAUQgRAUgbAAQgcAAgUgWgAgcg8QgMALgBAUIBIAAQgBgPgDgHQgEgJgJgGQgJgGgHABQgOAAgMALg");
	this.shape_22.setTransform(556.4,125.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcB/IAAgXQgMAMgLAGQgJAFgOAAQgZAAgVgWQgTgWAAgjQAAgjAWgaQAVgdAjAAQATAAAOAOIAAgeQAAgbgBgHQgCgGgCgCQgEgDgEAAQgEAAgHADIgDgHIAwgTIAIAAIAAC4QAAAdACAGQABAGACACQAEADADAAQAFAAAIgDIACAGIgwAUgAgjgRQgQARAAAiQAAAkAPATQAQASATAAQAOABAPgRIAAhTQgBgKgFgJQgGgKgIgFQgIgFgIAAQgPAAgMAOg");
	this.shape_23.setTransform(539.9,121.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAIBSIAAgGIADAAQAMAAAEgDQAFgEABgHQABgCAAgOIAAhAQAAgWgGgKQgFgJgOgBQgTABgVAWIAABTQAAAQACAEQADAGAEACQAEACAOAAIAAAGIhQAAIAAgGIAEAAQAMAAAEgGQAEgGAAgSIAAg5QAAgegBgGQgBgGgDgCQgDgDgEAAQgFAAgHADIgDgGIAxgUIAHAAIAAAiQAdgiAXAAQAOgBAJAIQAKAGAFAPQAEAKAAAXIAABCQAAAQADAFQABAEAFACQAEADAMAAIAAAGg");
	this.shape_24.setTransform(521.2,125.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag6A4QgSgYAAgfQAAgUALgWQALgWASgKQASgLASAAQAkAAAWAcQATAYAAAeQAAAUgKAWQgKAWgTALQgSAMgUAAQglAAgVgdgAgWhDQgKAGgGANQgFAPAAAVQAAAiAOAZQAOAZAUABQARgBAMgOQALgOAAgiQAAgpgTgZQgMgQgSAAQgJAAgJAFg");
	this.shape_25.setTransform(503.2,125.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhTB5IAAgGIAEAAQAKAAAHgEQADgCACgFQACgEAAgSIAAiWQAAgPgBgEQgCgEgDgDQgDgCgFAAQgEAAgHACIgCgFIAxgUIAHAAIAAAmQANgWAMgIQALgJAOAAQAYAAAQATQAUAYAAAkQAAApgYAbQgUAWgeAAQgLAAgJgEQgHgDgJgHIAAAwQAAARACAFQACAEAFADQAFADAMAAIAAAGgAgFhaQgGADgPAQIAAA8QAAARACAGQACALAKAHQAJAJANgBQASABAKgOQAPgTAAgeQAAgkgRgUQgLgOgPgBQgJABgGAEg");
	this.shape_26.setTransform(484.5,129.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfBQIgKgCQgEAAgCAEIgGAAIAAg5IAGAAQAFAYAOANQAOAMAPAAQAMABAIgIQAIgGgBgLQABgMgJgIQgJgJgXgMQgagKgHgLQgJgKAAgPQAAgUAPgNQANgOAVAAQAIAAANAFIAMACQABAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIADgGIAHAAIAAA3IgHAAQgGgagLgJQgKgKgPAAQgMAAgHAHQgIAGAAAJQAAAKAGAHQAGAHAQAHIAYANQAjAQAAAcQAAAWgQAOQgRANgVAAQgMAAgTgFg");
	this.shape_27.setTransform(469.5,125.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AguA/QgVgXABgmQAAgnAUgXQAWgYAdAAQAcAAARASQASARAAAfIhtAAQgBAhARAVQATAVAVgBQAQABALgKQAMgIAIgVIAGADQgEAYgSAUQgRAUgbAAQgcAAgUgWgAgcg8QgLALgCAUIBIAAQgBgPgDgHQgEgJgJgGQgIgGgIABQgPAAgLALg");
	this.shape_28.setTransform(454.4,125.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag5BSIAAgGQANAAAGgEQAEgCACgHQABgDAAgOIAAg8QAAgcgBgFQgCgGgDgCQgDgDgEAAQgGAAgHADIgBgGIAwgUIAIAAIAAAkQASgkAVAAQAKAAAGAFQAGAGAAAJQAAAGgEAFQgFAEgGABQgGAAgIgHQgHgFgEgBQgDAAgEAEQgIAHgGAQIAABMQAAANACAHQABAFAGADQAGADALAAIAAAGg");
	this.shape_29.setTransform(440.4,125.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag5BSIAAgGQANAAAGgEQAEgCACgHQABgDAAgOIAAg8QAAgcgBgFQgCgGgDgCQgDgDgEAAQgGAAgHADIgBgGIAwgUIAIAAIAAAkQASgkAVAAQAKAAAGAFQAGAGAAAJQAAAGgEAFQgFAEgGABQgGAAgIgHQgHgFgEgBQgDAAgEAEQgIAHgGAQIAABMQAAANACAHQABAFAGADQAGADALAAIAAAGg");
	this.shape_30.setTransform(428.4,125.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag6A4QgSgYAAgfQAAgUALgWQALgWASgKQASgLASAAQAkAAAWAcQATAYAAAeQAAAUgKAWQgKAWgTALQgSAMgUAAQglAAgVgdgAgWhDQgKAGgGANQgFAPAAAVQAAAiAOAZQAOAZAUABQARgBAMgOQALgOAAgiQAAgpgTgZQgMgQgSAAQgJAAgJAFg");
	this.shape_31.setTransform(413.2,125.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AguA+QgUgXAAgnQAAglAWgXQAXgYAdAAQAYAAAPANQAQAMAAAOQAAAHgFAEQgEAEgIAAQgKAAgFgHQgDgDgBgLQgBgKgGgGQgHgFgKAAQgQAAgLANQgOASAAAbQAAAbAOAXQAOAVAWAAQASABANgMQAKgJAJgUIAFACQgGAggTARQgTARgXAAQgaAAgUgXg");
	this.shape_32.setTransform(396.2,125.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AguA/QgUgXAAgmQgBgnAWgXQAUgYAfAAQAbAAARASQARARABAfIhuAAQAAAhARAVQATAVAVgBQAQABAMgKQALgIAIgVIAGADQgEAYgSAUQgSAUgbAAQgaAAgVgWgAgcg8QgMALgCAUIBJAAQgBgPgDgHQgEgJgJgGQgIgGgIABQgPAAgLALg");
	this.shape_33.setTransform(371.4,125.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAhBTIAAgjQgVAXgKAFQgJAHgNAAQgNgBgKgHQgKgIgEgMQgEgNAAgWIAAhGQAAgMgDgEQgCgFgEgCQgGgCgMAAIAAgHIA5AAIAABqQAAAWAHAIQAIAHALAAQAGAAAJgFQAKgFANgNIAAhZQAAgOgFgEQgFgGgQAAIAAgHIA3AAIAABgQAAAcACAGQABAGACADQADADAEgBQAGAAAGgCIADAGIgwAUg");
	this.shape_34.setTransform(354.2,126.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AADB5IAAgGIADAAQAJgBAGgDQADgCACgEQACgFAAgPIAAhFQgQATgMAHQgKAHgMAAQgYAAgSgVQgSgWAAghQAAgpAYgaQAYgaAiAAQAJAAAHADQAJADAHAGQAKgGAKgGIAGAAIAADNQAAAQACAEQACAEAEADQAEADAOAAIAAAGgAgnhbQgOARAAAiQAAAgAPAQQAOAQAUAAQAIAAAJgFQAHgEAIgKIAAhJQAAgOgDgHQgEgIgIgFQgJgGgJABQgUAAgOAQg");
	this.shape_35.setTransform(336.8,129.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag6A4QgSgYAAgfQAAgUALgWQALgWASgKQASgLASAAQAkAAAWAcQATAYAAAeQAAAUgKAWQgKAWgTALQgSAMgUAAQglAAgVgdgAgWhDQgKAGgGANQgFAPAAAVQAAAiAOAZQAOAZAUABQARgBAMgOQALgOAAgiQAAgpgTgZQgMgQgSAAQgJAAgJAFg");
	this.shape_36.setTransform(309.2,125.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AglB8IAAgGQAMAAAEgCQAEgCACgGQADgFgBgPIAAiQQABgbgCgHQgBgGgCgCQgEgCgDAAQgGAAgHACIgDgGIAugUIAIAAIAADUQAAAPADAFQACAFAEACQAFADAMAAIAAAGg");
	this.shape_37.setTransform(295.4,121.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag6A4QgSgYAAgfQAAgUALgWQALgWASgKQASgLASAAQAkAAAWAcQATAYAAAeQAAAUgKAWQgKAWgTALQgSAMgUAAQglAAgVgdgAgWhDQgKAGgGANQgFAPAAAVQAAAiAOAZQAOAZAUABQARgBAMgOQALgOAAgiQAAgpgTgZQgMgQgSAAQgJAAgJAFg");
	this.shape_38.setTransform(281.2,125.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaB6QgOgFgPgKIAAimQAAgagCgHQgBgGgDgCQgDgDgEAAQgFAAgHADIgDgHIAxgTIAIAAIAAB1QAXghAZAAQAZAAASAWQATAUAAAjQAAArgdAbQgYAWgeAAQgMAAgPgFgAgIgMQgHADgLAJIAABhQAJAIAJAEQAIAFAKAAQAQAAAOgRQANgSAAgiQAAgegNgPQgOgRgSAAQgIAAgIAFg");
	this.shape_39.setTransform(262.5,121.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AA6BSIAAgGIADAAQAKAAAGgEQAEgDACgGIABgRIAAhDQAAgUgFgIQgHgLgPAAQgJAAgKAFQgJAEgNANIgBACIABAIIAABKQAAAQABAEQACAFAFACQAFADANAAIAAAGIhQAAIAAgGQAOAAAFgDQAFgDACgHQABgCAAgPIAAhDQAAgUgGgJQgIgKgOgBQgJAAgKAGQgOAHgIAKIAABUQAAAQACAEQACAGAFACQAEACANAAIAAAGIhQAAIAAgGQALAAAFgCQAEgCADgGQACgFAAgPIAAg8QAAgagCgHQgBgHgDgBQgCgDgFAAQgFAAgHADIgCgGIAwgUIAIAAIAAAiIAVgUQAHgHAKgEQAJgDAJAAQAPgBAJAKQALAIADARQASgVANgGQAMgIAOABQAMgBAKAIQAKAGAGAPQAEAKAAAWIAABDQAAAPACAGQACADAFADQAEADALAAIAAAGg");
	this.shape_40.setTransform(240.3,125.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgkB6IAAgHQAMAAAEgCQAEgCACgFQACgGAAgPIAAg+QAAgYgBgIQgBgFgDgCQgDgDgEAAQgFAAgHADIgDgGIAvgUIAHAAIAAB/QAAAPADAGQACAFAEACQAFACALAAIAAAHgAgUg8IATg9IAlAAIgyA9g");
	this.shape_41.setTransform(221.3,121.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgfBQIgJgCQgEAAgDAEIgGAAIAAg5IAGAAQAFAYAOANQAOAMAPAAQAMABAIgIQAIgGgBgLQABgMgJgIQgJgJgXgMQgZgKgIgLQgJgKAAgPQABgUAOgNQANgOAWAAQAHAAANAFIAMACQABAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIADgGIAHAAIAAA3IgHAAQgGgagLgJQgKgKgPAAQgLAAgIAHQgIAGAAAJQAAAKAGAHQAGAHAQAHIAYANQAkAQgBAcQAAAWgQAOQgRANgVAAQgMAAgTgFg");
	this.shape_42.setTransform(209.5,125.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag9BJQgLgMAAgSQABgMAFgJQAHgMASgKQASgJAngPIAAgGQAAgYgIgJQgHgJgNAAQgLAAgHAGQgGAGAAAHIAAALQAAAIgEAEQgEAEgGAAQgHAAgFgEQgEgFAAgIQAAgPAQgMQAPgNAdAAQATAAANAHQALAGAFALQADAIAAAXIAAA1QAAAXABAFQAAAFADACQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAIAFgBIAPgNIAAAKQgUAagSAAQgJAAgEgGQgGgGAAgOQgXATgGADQgKAEgKAAQgRAAgLgLgAgRAAQgNAHgGAJQgGAIAAAKQAAANAHAIQAIAJAKAAQANAAAUgSIAAg7QgYAKgJADg");
	this.shape_43.setTransform(185.8,125.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAIBSIAAgGIADAAQAMAAAEgDQAFgEABgHQABgCAAgOIAAhAQAAgWgGgKQgFgJgOgBQgTABgVAWIAABTQAAAQACAEQADAGAEACQAEACAOAAIAAAGIhQAAIAAgGIAEAAQAMAAAEgGQAEgGAAgSIAAg5QAAgegBgGQgBgGgDgCQgDgDgEAAQgFAAgHADIgDgGIAxgUIAHAAIAAAiQAdgiAXAAQAOgBAJAIQAKAGAFAPQAEAKAAAXIAABCQAAAQADAFQABAEAFACQAEADAMAAIAAAGg");
	this.shape_44.setTransform(168.2,125.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag6A4QgSgYAAgfQAAgUALgWQALgWASgKQASgLASAAQAkAAAWAcQATAYAAAeQAAAUgKAWQgKAWgTALQgSAMgUAAQglAAgVgdgAgWhDQgKAGgGANQgFAPAAAVQAAAiAOAZQAOAZAUABQARgBAMgOQALgOAAgiQAAgpgTgZQgMgQgSAAQgJAAgJAFg");
	this.shape_45.setTransform(150.2,125.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkB8IAAgGQAMAAAEgCQAEgCACgGQACgFAAgPIAAg+QAAgagBgGQgBgFgDgCQgDgDgEAAQgFAAgHADIgDgGIAvgUIAIAAIAAB/QAAAPACAFQACAGAEABQAFADALAAIAAAGgAgKhdQgFgFAAgIQAAgHAFgFQAFgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAFQgGAFgHAAQgFAAgGgFg");
	this.shape_46.setTransform(136.3,121.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AguA+QgUgXAAgnQAAglAWgXQAXgYAdAAQAYAAAPANQAQAMAAAOQAAAHgFAEQgEAEgIAAQgKAAgFgHQgDgDgBgLQgBgKgGgGQgHgFgKAAQgQAAgLANQgOASAAAbQAAAbAOAXQAOAVAWAAQASABANgMQAKgJAJgUIAFACQgGAggTARQgTARgXAAQgaAAgUgXg");
	this.shape_47.setTransform(123.2,125.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AguA+QgUgXAAgnQAAglAWgXQAXgYAdAAQAYAAAPANQAQAMAAAOQAAAHgFAEQgEAEgIAAQgKAAgFgHQgDgDgBgLQgBgKgGgGQgHgFgKAAQgQAAgLANQgOASAAAbQAAAbAOAXQAOAVAWAAQASABANgMQAKgJAJgUIAFACQgGAggTARQgTARgXAAQgaAAgUgXg");
	this.shape_48.setTransform(107.2,125.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AguA/QgUgXgBgmQAAgnAWgXQAUgYAfAAQAbAAARASQARARABAfIhuAAQAAAhARAVQASAVAWgBQAQABAMgKQALgIAIgVIAGADQgEAYgSAUQgSAUgbAAQgaAAgVgWgAgcg8QgMALgCAUIBJAAQgBgPgDgHQgEgJgJgGQgJgGgHABQgPAAgLALg");
	this.shape_49.setTransform(91.4,125.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AglB8IAAgGQAMAAAEgCQAEgCACgGQACgFAAgPIAAiQQAAgbgBgHQgBgGgDgCQgDgCgDAAQgGAAgHACIgCgGIAtgUIAIAAIAADUQABAPACAFQACAFAEACQAFADAMAAIAAAGg");
	this.shape_50.setTransform(78.4,121.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AguA/QgUgXAAgmQgBgnAWgXQAUgYAfAAQAbAAARASQASARAAAfIhuAAQAAAhARAVQATAVAVgBQAQABAMgKQALgIAIgVIAGADQgEAYgSAUQgSAUgbAAQgaAAgVgWgAgcg8QgMALgCAUIBJAAQgBgPgDgHQgEgJgJgGQgIgGgIABQgPAAgLALg");
	this.shape_51.setTransform(65.4,125.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgOB7IgWgHQgSgFgEAAQgFAAgCACQgDADgBAIIgGAAIAAhSIAGAAQAFAaAHANQAIANAQAIQAQAIARAAQAWAAANgLQAMgMAAgQQAAgIgEgJQgFgJgLgIQgGgFgdgRQgfgQgMgKQgNgKgHgMQgHgNAAgOQAAgaAUgSQAUgTAeAAQARAAAVAJQAKAFAEAAQAFAAADgDQADgDABgIIAHAAIAABSIgHAAQgDgXgIgOQgIgOgPgJQgPgIgPAAQgSAAgMALQgMALAAAPQAAAKAIAJQALAOAnAWQAhARAMAIQAMAKAHANQAHANAAAOQAAAbgVAUQgVATghAAQgJAAgJgBg");
	this.shape_52.setTransform(47.4,121.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 4
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F49723").s().p("AAAAYQgMAAgGgFQgGgGAAgKQAAgFADgGQACgHAFgEQAFgFAJABQAKAAAHAFQAHAHABAKQAAAJgDAGQgEAGgMAEg");
	this.shape_53.setTransform(871.8,67.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F49723").s().p("AhPC/IgCgCIAAgCIAAgCIACgUIACgcIACgrIADhBIAFhdQADhBATgeQATgfAmABIAFAAIAFAAQASABAMAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgKAAIgNgCIAAgMIgCgjIgEhEIgEAAIgYAAIgeABIgBARIAAAWIABAjIACA0IgBACIgBACgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAjABIACgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_54.setTransform(858.2,52.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F49723").s().p("Ag/CvIgCAAIgCgEIgCkcIAAgKIAAgRIAAgQIAAgLIACgCIACgDIAXgCIAYAAIADAAIACACIAAECIABAHIAAAJIABAEIABADIAFAAQAOAAARgDIAggHIACAAQAFAAACAGQACAGABAIIAAAPIAAALIAAAGQgDADgHACIgRADIgSACIgLACIgIABIgMACIgNABIgIACIgZAGIgEAAIgFAAIgCAAg");
	this.shape_55.setTransform(826.3,52);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F49723").s().p("AhPC/IgCgCIAAgCIAAgCIACgUIACgcIACgrIADhBIAFhdQADhBATgeQATgfAmABIAFAAIAFAAQASABAMAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgKAAIgNgCIAAgMIgCgjIgEhEIgEAAIgYAAIgeABIgBARIAAAWIABAjIACA0IgBACIgBACgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAjABIACgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_56.setTransform(808.3,52.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F49723").s().p("AABCyQgZAAgVgHQgUgGgOgQQgNgRgFgcQgFgegDgeQgCgdAAgcIADhNIACgrIABgUIABgHIABgGIAEgHQACgDADgBQANAEAOABIAbABIABACIABACIAAADIAAAEIgBAEQgEAcgDAmQgDAmAAAqQAAAoAGAnQABAMAFAMQAFAMAJAIQAJAIAMAAQAGABAGgCQAFAAAFgFQAJgKAFgPQAFgPACgQQACgQAAgMIgBguIgBgwIgCgnQgCgUAAgUIABgEQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIApgFIACgBIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAIAAgBIAAAAQACAAACATIAEAxQABAeAAAlQgBAigFAlQgEAlgLAgQgKAdgUANQgTANgfAAg");
	this.shape_57.setTransform(786.8,50.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F49723").s().p("Ag1CrQgZgIgRgUQgRgUgIgiIgFgaQgDgMAAgMQgCgMAAgQQABgfAJghQAKgiAUgcQATgdAcgRQAdgRAjgBQAOAAAPADQAPADAOAGQAOAGAKALIAGAGQACADAAAEQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFAGIgPANIgCABIgCACIgCABIgBAAQgHAAgIgEIgXgGQgOgDgYAAQgPAAgOALQgNALgLASQgKARgHAUQgHAUgDATQgEARAAANQAAASADASQAEASAHAPQAIAQAOAJQANAKAVAAQALAAAOgDQANgDAMgJQALgKAJgTQAIgTAEggIAAgIIgCgJQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAAIgaACQgPACgVABIgBgCQgCgMgDgJQgBgLgBgMIABgCIABgCQAOgFAWgDQAVgDAXgBQAYAAAUABIAEAsQACAVgBAVQgBAWgHAaIgBABIAAABQgMAogfAXQgfAXgqABIgDAAQgeAAgZgJg");
	this.shape_58.setTransform(760,50.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F49723").s().p("AgQCoQgDgKgCgaIgFg7IgEhIIgEhGIgCg/IAAgHIAAgJIACgJQADgFANgCQAOgCAVgBQAFABACAEIACAJQABgHAAAMIADAoIACA/IACBIIACBIIABA7IAAAGIgCACIgFAAIgIABIgSABQgJgBgIABg");
	this.shape_59.setTransform(740.5,51.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_60.setTransform(712,51.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_61.setTransform(679.1,51.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F49723").s().p("AABCyQgZAAgVgHQgUgGgOgQQgNgRgFgcQgFgegDgeQgCgdAAgcIADhNIACgrIABgUIABgHIABgGIAEgHQACgDADgBQANAEAOABIAbABIABACIABACIAAADIAAAEIgBAEQgEAcgDAmQgDAmAAAqQAAAoAGAnQABAMAFAMQAFAMAJAIQAJAIAMAAQAGABAGgCQAFAAAFgFQAJgKAFgPQAFgPACgQQACgQAAgMIgBguIgBgwIgCgnQgCgUAAgUIABgEQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIApgFIACgBIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAIAAgBIAAAAQACAAACATIAEAxQABAeAAAlQgBAigFAlQgEAlgLAgQgKAdgUANQgTANgfAAg");
	this.shape_62.setTransform(657.7,50.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F49723").s().p("AgGDXIgBgBIgDgVIgEggIAAgEIgDgCIgFAAQgjgBgXgRQgVgQgNgbQgMgagFgeQgFgfAAgZQABg3APgpQAOgnAZgZQAZgXAcgJQAcgIAdAIQAdAIAZAYQAYAZAOApQAPApABA6QAAAYgFAbQgFAcgMAYQgLAagUARQgTASgdAFIACAXIABAWIAAAGIgBADIgBACIgVACIgSABgAANARIADALIAAAJIAHA5QARAAALgLQALgKAHgRQAIgRADgTQAEgTACgPIABgdQAAgNgDgTQgEgSgLgTQgKgTgSgLQgTgNgdgBQgTABgNAMQgOAKgJATQgIASgFAVQgGAUgCAUQgCATABANQAAAZANAXQAMAXAUARIAIAGQAEACAFAAIgFgkQgBgSgBgUQAGgEALgCIATgCQAEABACAFg");
	this.shape_63.setTransform(630.4,53.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F49723").s().p("AgcAMIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgDAXABAeQABAeACAfQADAfAAAaIAAAFIABAEIgzAAIgEgCIAAgHIAAgKIgBgLIAAgUIAAgkIAAg7IABhYIACiBIACgPQAAgCALgBIAaAAIAeABIAUACIACAAIACAAQATACAPAKQAOALAIAQQAJAPAEASIAAAFIAAAHIAAAFQAAAXgHAOQgIAPgOAIQgOAJgWAFIADAMIACAMIA7CqIAAAKIgGACIgLAFIgNAEIgIACgAggh1QAAASgEAeIAAAFIACAEIAEAAQAQAAAMgDQALgDAGgKQAIgJgBgSQAAgMgGgIQgHgIgJgEQgJgDgLAAIgHAAQgFACAAATg");
	this.shape_64.setTransform(591.8,51.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F49723").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_65.setTransform(570.7,52.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F49723").s().p("AhaCyIgBgHIgCgQIgCgTIgBgPIgRj1IgBgMIgBgUIgBgPIAAgEIABgCIABgBIApADIAPABIADAAQAFAAAJAQQAKAQAMAZIAYA4IAaA6IAXAxIACgWIABgpIABg1IACgzIADgnQADgPADAAIAQAAQALAAAUAEIABADIAAADIAAABIgCASIgBAbIgBAuIAABJIgBBwIAAAfIAAALIgBAMIAAAGIgCABIgTABQgKAAgLgCIiAj6IgBAAIAAABIAAAHIACAQIAEAkIAIBGIAMB3IAAAFQgCACgEAAIgQAAIggABg");
	this.shape_66.setTransform(546.2,51);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_67.setTransform(523.5,51.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F49723").s().p("AiDC1QgCgEAAgEIABgiIABg2IADhCQACghADgiQACgiAEgdQAEgdAFgTQAFgTAGgFIAFgBIAFAAQAVABANANQANAMAIAUQAHAUAEAWIAIAmIABAHIACAFIADgDIACgDIAQgjIATghIASgcQAKgOANgJQANgJASAAQAIAAAEAGQAFAHACAJIAEASIABAOQAEBIACBGQACBIAABHIAAAEQgCAEgHACQgHACgIAAIgRABIgLgCIgCgBIAAgGIgCgoIgBg2IgCg7IgCgzIgBgoIgiBLIgTAlIgJAPIgCACIgCACIgdgCQgMgRgIgTIgQgkIgEgJIgFgIIgDBrQgBA3ABA3IgBACIgBADQAAABgHAAIgRACIgRAAIgLABQgEgBgCgDg");
	this.shape_68.setTransform(499.1,52);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F49723").s().p("AgGAuIgBgCIADgFIADgGIABgKQAAgFABgEIgBAAIgCAAQgMAAgJgHQgIgGgBgMQABgHADgIQAEgIAHgGQAGgGAKAAQARAAAIAKQAJALAAATQAAAHgGANQgFANgJAKQgJAKgIAAIgCgBg");
	this.shape_69.setTransform(465.8,68.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_70.setTransform(451.6,51.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F49723").s().p("AABCyQgZAAgVgHQgUgGgOgQQgNgRgFgcQgFgegDgeQgCgdAAgcIADhNIACgrIABgUIABgHIABgGIAEgHQACgDADgBQANAEAOABIAbABIABACIABACIAAADIAAAEIgBAEQgEAcgDAmQgDAmAAAqQAAAoAGAnQABAMAFAMQAFAMAJAIQAJAIAMAAQAGABAGgCQAFAAAFgFQAJgKAFgPQAFgPACgQQACgQAAgMIgBguIgBgwIgCgnQgCgUAAgUIABgEQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIApgFIACgBIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAABAAAAIAAgBIAAAAQACAAACATIAEAxQABAeAAAlQgBAigFAlQgEAlgLAgQgKAdgUANQgTANgfAAg");
	this.shape_71.setTransform(430.2,50.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F49723").s().p("AgGDXIgBgBIgDgVIgEggIAAgEIgCgCIgGAAQgjgBgWgRQgXgQgMgbQgMgagFgeQgFgfAAgZQABg3AOgpQAPgnAZgZQAZgXAcgJQAcgIAdAIQAdAIAZAYQAYAZAOApQAPApABA6QAAAYgFAbQgFAcgLAYQgMAagUARQgUASgcAFIACAXIAAAWIAAAGIAAADIgBACIgUACIgTABgAANARIADALIABAJIAGA5QAQAAAMgLQAMgKAGgRQAIgRAEgTQAEgTABgPIABgdQAAgNgEgTQgDgSgLgTQgJgTgUgLQgTgNgcgBQgTABgOAMQgNAKgIATQgKASgFAVQgFAUgCAUQgBATAAANQABAZAMAXQAMAXATARIAJAGQAEACAFAAIgEgkQgDgSAAgUQAGgEALgCIATgCQAEABACAFg");
	this.shape_72.setTransform(402.9,53.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F49723").s().p("AgcAMIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgCAXABAeQABAeACAfQADAfABAaIAAAFIAAAEIg0AAIgCgCIgBgHIAAgKIAAgLIgBgUIAAgkIABg7IABhYIABiBIABgPQABgCALgBIAaAAIAeABIAUACIACAAIACAAQATACAOAKQAOALAKAQQAIAPAEASIAAAFIAAAHIAAAFQAAAXgHAOQgIAPgOAIQgOAJgWAFIADAMIACAMIA7CqIAAAKIgGACIgMAFIgMAEIgIACgAggh1QgBASgCAeIAAAFIABAEIAEAAQARAAALgDQAKgDAIgKQAGgJAAgSQABgMgHgIQgHgIgJgEQgJgDgLAAIgGAAQgGACAAATg");
	this.shape_73.setTransform(364.3,51.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F49723").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_74.setTransform(343.2,52.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F49723").s().p("AgTC7QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBgBIgBgVIgBglIgBgqIgCgmIgCgWIAAgLIgBgLIgBgEIgDgEIgIABIgIAAQgbAAgQgNQgQgNgHgWQgHgVAAgaIAAgMIAAgNIABgVIACgWQACgLACgEIAcgBQANgBAOAAIADAAIACABIABABIACAKIAABCIgBAFIAAAFIAAAGQAAAJACAGQABAGAFACQAFADALACIBXgJQAFgDACgFIACgKIgBglIAAgnIA5ABIABAaIABAbIAAAFQAAAWgFAVQgDAUgNASQgGAHgKAFIgWAHIgTAFQgJADgBACIAAC2IgBAAIgyADIgEAAg");
	this.shape_75.setTransform(318,52.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F49723").s().p("AhQC/IgBgCIAAgCIAAgCIABgUIACgcIADgrIADhBIAFhdQADhBATgeQATgfAmABIAFAAIAGAAQARABAMAIQALAJAHAOQAGAOACAQQADAPAAAPIAAACIABAJIAAAWIAAAtIgBBLIgCB3IgDACIgSAAIgMAAIgMgCIAAgMIgCgjIgFhEIgCAAIgZAAIgdABIgBARIAAAWIABAjIACA0IgBACIgBACgAgKh3QgIALgCAbIgCAaIgBAWIgBAcIABAHIAAALIABAHIAAACIAMAAIAjABIABgBIABgCIAFhZIAAgIQAAgXgHgNQgIgOgKgCIgDAAQgGAAgIAKg");
	this.shape_76.setTransform(294.5,52.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F49723").s().p("AiDC1QgCgEAAgEIABgiIABg2IADhCQACghADgiQACgiAEgdQAEgdAFgTQAFgTAGgFIAFgBIAFAAQAVABANANQANAMAIAUQAHAUAEAWIAIAmIABAHIACAFIADgDIACgDIAQgjIATghIASgcQAKgOANgJQANgJASAAQAIAAAEAGQAFAHACAJIAEASIABAOQAEBIACBGQACBIAABHIAAAEQgCAEgHACQgHACgIAAIgRABIgLgCIgCgBIAAgGIgCgoIgBg2IgCg7IgCgzIgBgoIgiBLIgTAlIgJAPIgCACIgCACIgdgCQgMgRgIgTIgQgkIgEgJIgFgIIgDBrQgBA3ABA3IgBACIgBADQAAABgHAAIgRACIgRAAIgLABQgEgBgCgDg");
	this.shape_77.setTransform(270,52);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_78.setTransform(231.9,51.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F49723").s().p("AhcCzIAIlcIABgFQABgEACgBIAcgBQAcABAaAKQAcALAVASIABACIABABQAKAIAIAPQAHAOAFARQAFASACARQACAQAAAOQABAfgFAjQgEAhgNAdQgMAdgZATQgZATgmADIg9ABgAgahnIgDA3IgCA/IgBA/IgBAvQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABIACAAQAXgDALgLQANgLAHgRQAGgRACgTQADgTgBgSIAAgNQABgagEgYQgDgYgLgUQgKgUgTgQIgFgEIgGgCIgDAAIgCAgg");
	this.shape_79.setTransform(211.7,50);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F49723").s().p("AhaCyIgBgHIgCgQIgCgTIgBgPIgRj1IgBgMIgBgUIgBgPIAAgEIABgCIABgBIApADIAPABIADAAQAFAAAJAQQAKAQAMAZIAYA4IAaA6IAXAxIACgWIABgpIABg1IACgzIADgnQADgPADAAIAQAAQALAAAUAEIABADIAAADIAAABIgCASIgBAbIgBAuIAABJIgBBwIAAAfIAAALIgBAMIAAAGIgCABIgTABQgKAAgLgCIiAj6IgBAAIAAABIAAAHIACAQIAEAkIAIBGIAMB3IAAAFQgCACgEAAIgQAAIggABg");
	this.shape_80.setTransform(174.1,51);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F49723").s().p("AgpDuQgTgMgOgTQgOgVgEgWQgFgjgBgkQgBgjAFglQACgXAHgXQAGgXAMgVQAMgWAUgQQAKgJANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAfgCAmIgCAtQgCAZgGAZQgFAYgLAVQgLAVgSAMQgRANgaAAQgVgBgUgMgAgKg9QgOATgJAkQgJAiAAAwIAAAQQgBAXACAUQABATAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgJADgLIACgLIAFgiIAHhHIAAgIQgBg6gJgcQgJgcgOgCIgCAAQgMAAgLASgAgRibIgOgDIgNgDQgFgCAAgCIAAgCIABgBIAEgFIAFgHIAFgFIAUgYIARgYIAHgMQAEgFAHAAQAFAAAHAEQAGAEAFAGQAFAGAAAHQgBAHgGAJQgGAJgJAJIgRARQgJAJgDAGIgCACIgEABIgJgBg");
	this.shape_81.setTransform(149.6,45.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F49723").s().p("AgPCoQgDgKgDgaIgFg7IgEhIIgDhGIgDg/IAAgHIAAgJIACgJQADgFANgCQAOgCAVgBQAFABACAEIACAJQABgHABAMIACAoIACA/IACBIIACBIIABA7IAAAGIgCACIgFAAIgIABIgSABQgJgBgIABg");
	this.shape_82.setTransform(133.2,51.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F49723").s().p("AgSCcQgcgTgPgfQgQgfgFglQgGgmAFgjQAFgkAPggQAOgfAXgUQAYgSAdgCQAIAAAIACIAPAGIABABIABAAIAAAuIgJAAQgXABgPAPQgOAOgIAYQgJAYgBAcQgBAaAGAbQAFAbAMATQANAVAUAIQAMAEAMABIAagBIAAAvIgCABIgDABQgJAEgIACQgJABgKAAQgmgBgZgSg");
	this.shape_83.setTransform(118,51.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F49723").s().p("AhQC/IgBgCIAAgCIAAgCIABgUIACgcIADgrIADhBIAFhdQADhBATgeQAUgfAlABIAFAAIAGAAQARABAMAIQALAJAGAOQAHAOACAQQADAPAAAPIAAACIABAJIAAAWIAAAtIgBBLIgCB3IgDACIgSAAIgMAAIgMgCIAAgMIgCgjIgFhEIgDAAIgYAAIgdABIgBARIAAAWIABAjIACA0IgBACIgBACgAgKh3QgIALgCAbIgCAaIgBAWIgBAcIABAHIAAALIABAHIAAACIAMAAIAjABIABgBIABgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_84.setTransform(98.3,52.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F49723").s().p("Ag/CvIgCAAIgCgEIgCkcIAAgKIAAgRIAAgQIAAgLIACgCIACgDIAXgCIAYAAIADAAIACACIAAECIABAHIAAAJIABAEIABADIAFAAQAOAAARgDIAggHIACAAQAFAAACAGQACAGABAIIAAAPIAAALIAAAGQgDADgHACIgRADIgSACIgLACIgIABIgMACIgNABIgIACIgZAGIgEAAIgFAAIgCAAg");
	this.shape_85.setTransform(80.2,52);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F49723").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_86.setTransform(62.2,51.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F49723").s().p("AgcAMIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgCAXABAeQAAAeADAfQADAfABAaIAAAFIAAAEIg0AAIgCgCIgBgHIAAgKIAAgLIgBgUIAAgkIABg7IABhYIABiBIABgPQABgCALgBIAaAAIAeABIAUACIACAAIACAAQATACAOAKQAOALAKAQQAIAPADASIAAAFIAAAHIABAFQAAAXgHAOQgIAPgOAIQgOAJgWAFIADAMIACAMIA7CqIAAAKIgGACIgLAFIgNAEIgIACgAggh1QAAASgDAeIAAAFIABAEIAEAAQARAAALgDQAKgDAIgKQAGgJAAgSQABgMgHgIQgHgIgJgEQgJgDgLAAIgGAAQgGACAAATg");
	this.shape_87.setTransform(43,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(1));

	// Capa 1
	this.instance_18 = new lib.Símbolo2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(71,709.9,1,1,0,0,0,0,-45.8);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Capa 1
	this.instance_19 = new lib.Símbolo1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1089.3,709.2,1,1,0,0,0,0,-46.5);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Capa 1
	this.instance_20 = new lib.luz();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(581.1,393.1,1160,786);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;