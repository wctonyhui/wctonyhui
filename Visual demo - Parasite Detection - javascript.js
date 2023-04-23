(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.basicscreen = function() {
	this.initialize(img.basicscreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1476,798);


(lib.innerring01 = function() {
	this.initialize(img.innerring01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8080,8105);


(lib.loading01 = function() {
	this.initialize(img.loading01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,938);


(lib.outerring01 = function() {
	this.initialize(img.outerring01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10077,10221);


(lib.result1groupimage = function() {
	this.initialize(img.result1groupimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1153,550);


(lib.result2groupimage = function() {
	this.initialize(img.result2groupimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,546);


(lib.result3groupimage = function() {
	this.initialize(img.result3groupimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,549);


(lib.result4groupimage = function() {
	this.initialize(img.result4groupimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1254,549);


(lib.Segment1 = function() {
	this.initialize(img.Segment1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,138);


(lib.Segment2 = function() {
	this.initialize(img.Segment2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,138);


(lib.Segment3 = function() {
	this.initialize(img.Segment3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,138);


(lib.Segment4 = function() {
	this.initialize(img.Segment4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,137);


(lib.Taptheimagestoshowtheresults = function() {
	this.initialize(img.Taptheimagestoshowtheresults);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584,142);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tap_the_image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Taptheimagestoshowtheresults();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tap_the_image, new cjs.Rectangle(0,0,584,142), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap6JiIAAzDIT1AAIAATDg");
	this.shape.setTransform(63.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AqiKJIAA0RIVFAAIAAURg");
	this.shape_1.setTransform(63.525,61.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqiKJIAA0RIVFAAIAAURg");
	this.shape_2.setTransform(63.525,61.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.8,135.1,129.70000000000002);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjlCqIAAlTIHLAAIAAFTg");
	this.shape.setTransform(23,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AjzC0IAAlnIHmAAIAAFng");
	this.shape_1.setTransform(23,17.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjzC0IAAlnIHmAAIAAFng");
	this.shape_2.setTransform(23,17.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-0.9,48.699999999999996,36);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao0I4IAAxvIRpAAIAARvg");
	this.shape.setTransform(56.5,56.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("ApSJVIAAyqISkAAIAASqg");
	this.shape_1.setTransform(56.5,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApSJVIAAyqISkAAIAASqg");
	this.shape_2.setTransform(56.5,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,118.9,119.5);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuBI5IAAxxIcDAAIAARxg");
	this.shape.setTransform(89.775,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AvAJhIAAzBIeBAAIAATBg");
	this.shape_1.setTransform(89.775,56.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvAJhIAAzBIeBAAIAATBg");
	this.shape_2.setTransform(89.775,56.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-3.9,192.20000000000002,121.80000000000001);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.result4groupimage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,1254,549), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.result3groupimage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,1152,549), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.result2groupimage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,1152,546), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.result2groupimage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,1152,546), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.innerring01();
	this.instance.setTransform(0,0,0.0435,0.0435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,351.9,353), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.outerring01();
	this.instance.setTransform(0,0,0.0435,0.0435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,438.9,445.1), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.result1groupimage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,1153,550), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.loading01();
	this.instance.setTransform(0,0,0.0435,0.0435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,152.4,40.9), null);


(lib.mon4_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Segment4();
	this.instance.setTransform(0,0,0.9471,0.9471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.7,129.8);


(lib.mon3_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Segment3();
	this.instance.setTransform(0,0,0.9471,0.9471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.6,130.7);


(lib.mon2_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Segment2();
	this.instance.setTransform(0,0,0.9471,0.9471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.7,130.7);


(lib.mon1_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Segment1();
	this.instance.setTransform(0,0,0.9471,0.9471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.1,130.7);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {gallery2:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(1228,125,1,1,0,0,0,576,273);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(652,-148,1152,546);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {gallery3:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(924,108,1,1,0,0,0,576,274.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(348,-166.5,1152,549);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {gallery4:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(1274.9,81.75,1,1,0,0,0,627,274.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(647.9,-192.7,1254,549);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(576.5,275,1,1,0,0,0,576.5,275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1153,550);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {result4:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer_4
	this.instance = new lib.Symbol3();
	this.instance.setTransform(220.2,228.4,1,1,0,0,0,76.2,20.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:218.5,y:220.4,alpha:1},4).to({x:219.2,y:219.4,alpha:0.4883},8).to({x:218.2,y:222.4,alpha:1},7).to({x:223.2,y:225.4,alpha:0.4883},10).to({x:224,y:225.25,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_3
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(219.4,221.6,1,1,0,0,0,219.4,222.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:219.3,regY:222.5,rotation:105.0002,x:217.75,y:213.5,alpha:1},4).to({regX:219.4,regY:222.6,rotation:1440,x:222.4,y:218.6},25).to({x:223.2,y:218.45,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_2
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(219.9,222.5,1,1,0,0,0,175.9,176.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:175.8,rotation:-135.0006,x:218.25,y:214.45,alpha:1},4).to({regX:175.9,rotation:-1440,x:222.9,y:219.5},25).to({x:223.7,y:219.35,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_1
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(567,263.5,1,1,0,0,0,627,274.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({alpha:1},14).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.1,-97.8,1287.1,635.8);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {result2:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer_4
	this.instance = new lib.Symbol3();
	this.instance.setTransform(160.8,144.45,1,1,0,0,0,76.2,20.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:160.5,y:147.5,alpha:1},4).to({x:164.5,y:140.5,alpha:0.4883},8).to({x:162.5,y:139.5,alpha:1},7).to({x:166.5,y:144.5,alpha:0.4883},10).to({x:155.5,y:147.5,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_3
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(160,137.65,1,1,0,0,0,219.4,222.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:219.3,regY:222.5,rotation:105.0002,x:159.75,y:140.6,alpha:1},4).to({regX:219.4,regY:222.6,rotation:1440,x:165.7,y:137.7},25).to({x:154.7,y:140.7,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_2
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(160.5,138.55,1,1,0,0,0,175.9,176.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:175.8,rotation:-135.0006,x:160.25,y:141.55,alpha:1},4).to({regX:175.9,rotation:-1440,x:166.2,y:138.6},25).to({x:155.2,y:141.6,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_1
	this.instance_3 = new lib.Symbol10();
	this.instance_3.setTransform(447,184,1,1,0,0,0,576,273);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({x:448,alpha:1},14).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.9,-173,1174.9,630);


(lib.result3visual = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {result3:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer_4
	this.instance = new lib.Symbol3();
	this.instance.setTransform(727.5,-108.5,1,1,0,0,0,76.2,20.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-116.5,alpha:1},4).to({x:724.5,y:-118.5,alpha:0.4883},8).to({x:727.5,y:-119.5,alpha:1},7).to({x:728.5,y:-116.5,alpha:0.4883},10).to({x:727.3,y:-115.1,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_3
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(726.7,-115.3,1,1,0,0,0,219.4,222.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:219.3,regY:222.5,rotation:105.0002,x:726.75,y:-123.4,alpha:1},4).to({regX:219.4,regY:222.6,rotation:1440,x:727.7,y:-123.3},25).to({x:726.5,y:-121.9,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_2
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(727.2,-114.4,1,1,0,0,0,175.9,176.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:175.8,rotation:-135.0006,x:727.25,y:-122.45,alpha:1},4).to({regX:175.9,rotation:-1440,x:728.2,y:-122.4},25).to({x:727,y:-121,alpha:0},2).to({_off:true},1).wait(18));

	// Layer_1
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(1025,-73.5,1,1,0,0,0,576,274.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({alpha:1},14).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(414.6,-435.8,1186.4,636.8);


(lib.redShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {result1:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer_4
	this.instance = new lib.Symbol3();
	this.instance.setTransform(405.2,58.4,1,1,0,0,0,76.2,20.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.4883},8).to({alpha:1},7).to({alpha:0.4883},10).to({alpha:0},2).to({_off:true},1).wait(18));

	// Layer_3
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(404.4,51.6,1,1,0,0,0,219.4,222.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:219.3,regY:222.5,rotation:105.0002,x:404.45,y:51.5,alpha:1},4).to({regX:219.4,regY:222.6,rotation:1440,x:404.4,y:51.6},25).to({alpha:0},2).to({_off:true},1).wait(18));

	// Layer_2
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(404.9,52.5,1,1,0,0,0,175.9,176.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:175.8,rotation:-135.0006,x:404.95,y:52.45,alpha:1},4).to({regX:175.9,rotation:-1440,x:404.9,y:52.5},25).to({alpha:0},2).to({_off:true},1).wait(18));

	// Layer_1
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(707.5,97,1,1,0,0,0,576.5,275);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({alpha:1},14).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92,-260.8,1192,632.8);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {gallery1:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.Symbol30();
	this.instance.setTransform(1048,195,1,1,0,0,0,576.5,275);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(471.5,-80,1153,550);


// stage content:
(lib.html5gamev4refined8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		let root = this;
		this.result1visual.visible=false;
		this.result2visual.visible=false;
		this.result3visual.visible=false;
		this.result4visual.visible=false;
		this.result1visualarray.visible=false;
		this.result2visualarray.visible=false;
		this.result3visualarray.visible=false;
		this.result4visualarray.visible=false;
		
		
		
		///////////////////
		
		this.mon1_button.addEventListener("click", result1);
		function result1 () 
		{
			root.taptheimages.visible=false;
			
			root.result2visual.visible=false;
		    root.result3visual.visible=false;
		    root.result4visual.visible=false;
		
		    root.result1visualarray.visible=false;
		    root.result2visualarray.visible=false;
		    root.result3visualarray.visible=false;
		    root.result4visualarray.visible=false;
		
			root.result1visual.visible=true;
			root.result1visual.gotoAndPlay("result1");
			root.mon1_button.removeEventListener("click", result1);
			setTimeout(function()
			{root.mon1_button.addEventListener("click", result1);}, 500);
		}
		
		///////////////////
		
		this.mon2_button.addEventListener("click", result2);
		function result2 ()  
		{
			root.taptheimages.visible=false;
			
			root.result1visual.visible=false;
			root.result3visual.visible=false;	
		    root.result4visual.visible=false;
			
		    root.result1visualarray.visible=false;
		    root.result2visualarray.visible=false;
		    root.result3visualarray.visible=false;
		    root.result4visualarray.visible=false;	
		
			root.result2visual.visible=true;
			root.result2visual.gotoAndPlay("result2");
			root.mon2_button.removeEventListener("click", result2);
			setTimeout(function()
			{root.mon2_button.addEventListener("click", result2);}, 500);
		}
		
		///////////////////
		
		this.mon3_button.addEventListener("click", result3);
		function result3 ()  
		{
			root.taptheimages.visible=false;
			
			root.result1visual.visible=false;
			root.result2visual.visible=false;
		    root.result4visual.visible=false;
			
		    root.result1visualarray.visible=false;
		    root.result2visualarray.visible=false;
		    root.result3visualarray.visible=false;
		    root.result4visualarray.visible=false;
		
			root.result3visual.visible=true;
			root.result3visual.gotoAndPlay("result3");
			root.mon3_button.removeEventListener("click", result3);
			setTimeout(function()
			{root.mon3_button.addEventListener("click", result3);}, 500);
		}
		
		///////////////////
		
		this.mon4_button.addEventListener("click", result4);
		function result4 ()  
		{
			root.taptheimages.visible=false;
			
			root.result1visual.visible=false;
			root.result2visual.visible=false;	
		    root.result3visual.visible=false;	
		
		    root.result1visualarray.visible=false;
		    root.result2visualarray.visible=false;
		    root.result3visualarray.visible=false;
		    root.result4visualarray.visible=false;	
		
			root.result4visual.visible=true;
			root.result4visual.gotoAndPlay("result4");
			root.mon4_button.removeEventListener("click", result4);
			setTimeout(function()
			{root.mon4_button.addEventListener("click", result4);}, 500);
		}
		
		///////////////////
		
		
		this.next_button.addEventListener("click", playClickNext.bind(this));
		function playClickNext() 
		{
			if (this.currentFrame < 3)
		    {this.gotoAndStop(this.currentFrame +1);}
		}
		this.prev_button.addEventListener("click", playClickBack.bind(this));
		function playClickBack() 
		{
			if (this.currentFrame < 3 )
		    {this.gotoAndStop(this.currentFrame -1);}
			else {this.gotoAndStop(this.currentFrame -1);}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// result1visualarray
	this.result1visualarray = new lib.Symbol34();
	this.result1visualarray.name = "result1visualarray";
	this.result1visualarray.setTransform(-199.5,333.5,1,1,0,0,0,96,81);

	this.timeline.addTween(cjs.Tween.get(this.result1visualarray).wait(4));

	// result2visualarray
	this.result2visualarray = new lib.Symbol33();
	this.result2visualarray.name = "result2visualarray";
	this.result2visualarray.setTransform(-336,439,1,1,0,0,0,142.5,118.5);

	this.timeline.addTween(cjs.Tween.get(this.result2visualarray).wait(4));

	// result3visualarray
	this.result3visualarray = new lib.Symbol32();
	this.result3visualarray.name = "result3visualarray";
	this.result3visualarray.setTransform(-82.5,433.5,1,1,0,0,0,95,95);

	this.timeline.addTween(cjs.Tween.get(this.result3visualarray).wait(4));

	// result4visualarray
	this.result4visualarray = new lib.Symbol31();
	this.result4visualarray.name = "result4visualarray";
	this.result4visualarray.setTransform(-333.5,455.5,1,1,0,0,0,144,90);

	this.timeline.addTween(cjs.Tween.get(this.result4visualarray).wait(4));

	// result1visual
	this.result1visual = new lib.redShape();
	this.result1visual.name = "result1visual";
	this.result1visual.setTransform(97,405,1,1,0,0,0,54,54);

	this.timeline.addTween(cjs.Tween.get(this.result1visual).wait(4));

	// result2visual
	this.result2visual = new lib.Symbol9();
	this.result2visual.name = "result2visual";
	this.result2visual.setTransform(467,388.5,1,1,0,0,0,168.5,127);

	this.timeline.addTween(cjs.Tween.get(this.result2visual).wait(4));

	// result3visual
	this.result3visual = new lib.result3visual();
	this.result3visual.name = "result3visual";
	this.result3visual.setTransform(-139,659.5,1,1,0,0,0,138.5,138);

	this.timeline.addTween(cjs.Tween.get(this.result3visual).wait(4));

	// result4ivsual
	this.result4visual = new lib.Symbol12();
	this.result4visual.name = "result4visual";
	this.result4visual.setTransform(264.8,421.6,1,1,0,0,0,35,238);

	this.timeline.addTween(cjs.Tween.get(this.result4visual).wait(4));

	// tap_the_image
	this.taptheimages = new lib.tap_the_image("synched",0);
	this.taptheimages.name = "taptheimages";
	this.taptheimages.setTransform(461,411,1,1,0,0,0,292,71);

	this.timeline.addTween(cjs.Tween.get(this.taptheimages).wait(4));

	// mon4_button
	this.instance = new lib.mon4_button("synched",0);
	this.instance.setTransform(1359.3,662.8,1,1,0,0,0,65.3,64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// mon3_button
	this.instance_1 = new lib.mon3_button("synched",0);
	this.instance_1.setTransform(1215.3,663.3,1,1,0,0,0,66.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	// mon2_button
	this.instance_2 = new lib.mon2_button("synched",0);
	this.instance_2.setTransform(1073.3,663.3,1,1,0,0,0,65.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// mon1_button
	this.instance_3 = new lib.mon1_button("synched",0);
	this.instance_3.setTransform(902,663.3,1,1,0,0,0,98,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

	// button
	this.mon4_button = new lib.Symbol29();
	this.mon4_button.name = "mon4_button";
	this.mon4_button.setTransform(1359,661,0.8933,0.9257,0,0,0,63.2,61.5);
	new cjs.ButtonHelper(this.mon4_button, 0, 1, 2);

	this.mon3_button = new lib.Symbol28();
	this.mon3_button.name = "mon3_button";
	this.mon3_button.setTransform(1158.05,604.2,2.5319,3.3836,0,0,0,0.4,0.5);
	new cjs.ButtonHelper(this.mon3_button, 0, 1, 2);

	this.mon2_button = new lib.Symbol27();
	this.mon2_button.name = "mon2_button";
	this.mon2_button.setTransform(1017.1,661,1.0089,1,0,0,0,0.6,57);
	new cjs.ButtonHelper(this.mon2_button, 0, 1, 2);

	this.mon1_button = new lib.Symbol26();
	this.mon1_button.name = "mon1_button";
	this.mon1_button.setTransform(902.25,661.1,1,1,0,0,0,89.8,56.9);
	new cjs.ButtonHelper(this.mon1_button, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mon1_button},{t:this.mon2_button},{t:this.mon3_button},{t:this.mon4_button}]}).wait(4));

	// button_decoration
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AgWAuIAtgtIgtgu");
	this.shape.setTransform(860.25,402.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// background
	this.instance_4 = new lib.basicscreen();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(738,399,738,399);
// library properties:
lib.properties = {
	id: '7F2A40DDD4E8534287E22FD521F8C46B',
	width: 1476,
	height: 798,
	fps: 24,
	color: "#FFF1D7",
	opacity: 1.00,
	manifest: [
		{src:"https://static.wixstatic.com/media/b7af9d_f6a9b9b4763248c7889f990539208ad8~mv2.png", id:"basicscreen"},
		{src:"https://static.wixstatic.com/media/b7af9d_884d7524ac6e44fd8d2c210ad37ebbd1~mv2.png", id:"innerring01"},
		{src:"https://static.wixstatic.com/media/b7af9d_0dfdd913256f411b9f864251e0c20d70~mv2.png", id:"loading01"},
		{src:"https://static.wixstatic.com/media/b7af9d_25603aaa46bf45aba43c5c8e9fa369fe~mv2.png", id:"outerring01"},
		{src:"https://static.wixstatic.com/media/b7af9d_b9ceca7ee73c4416b56527fa8afbb337~mv2.png", id:"result1groupimage"},
		{src:"https://static.wixstatic.com/media/b7af9d_15cd135d9653438b9c4712c7e5c9fb1d~mv2.png", id:"result2groupimage"},
		{src:"https://static.wixstatic.com/media/b7af9d_99724e35508c40e08f207cd674344780~mv2.png", id:"result3groupimage"},
		{src:"https://static.wixstatic.com/media/b7af9d_763c883a2708434694171b48636211a1~mv2.png", id:"result4groupimage"},
		{src:"https://static.wixstatic.com/media/b7af9d_9df8f3eda19247378a66bfc6e748514d~mv2.png", id:"Segment1"},
		{src:"https://static.wixstatic.com/media/b7af9d_e31f17bed3fc4c6b929f22e9d2b97dda~mv2.png", id:"Segment2"},
		{src:"https://static.wixstatic.com/media/b7af9d_785b0b95a9284c758bc4db3ae77236a4~mv2.png", id:"Segment3"},
		{src:"https://static.wixstatic.com/media/b7af9d_4667282f3d0847f18384bd422678d90a~mv2.png", id:"Segment4"},
		{src:"https://static.wixstatic.com/media/b7af9d_41eb5364008841b0b6f1d0b09bb40b08~mv2.png", id:"Taptheimagestoshowtheresults"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7F2A40DDD4E8534287E22FD521F8C46B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;