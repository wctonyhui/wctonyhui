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
// helper functions:

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


(lib.VMOname = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhDBKQgagaAAgvQAAgdAJgTQAGgQAMgLQAMgMANgFQASgIAXAAQArAAAZAbQAaAaAAAuQAAAvgaAaQgZAbgrAAQgqAAgZgagAgmgxQgPAQAAAhQAAAhAQARQAPARAWAAQAXAAAPgRQAPgRAAghQAAgggOgRQgOgRgZAAQgXAAgPARg");
	this.shape.setTransform(104.8603,15.4772,0.4906,0.4906);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BhIAAiYIgmCYIglAAIgmiYIAACYIgkAAIAAjBIA6AAIAiCDIAjiDIA6AAIAADBg");
	this.shape_1.setTransform(94.1659,15.4772,0.4906,0.4906);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBhIhFjBIAqAAIAxCOIAuiOIAqAAIhFDBg");
	this.shape_2.setTransform(84.2196,15.4772,0.4906,0.4906);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4).p("A5kEyMAzJAAAQB+AABahaQBZhaAAh+QAAh+hZhZQhahah+AAMgzJAAAQh+AAhaBaQhZBZAAB+QAAB/BZBZQBaBaB+AAg");
	this.shape_3.setTransform(95.1984,15.0089,0.4907,0.4907);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BEC0C2","#3BC5F3"],[0,1],194.3,0,-194.2,0).s().p("A5kEyQh+AAhahaQhZhZAAh/QAAh+BZhZQBahaB+AAMAzJAAAQB+AABaBaQBZBZAAB+QAAB+hZBaQhaBah+AAg");
	this.shape_4.setTransform(95.1984,15.0089,0.4907,0.4907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VMOname, new cjs.Rectangle(-11.1,-2,203.7,34), null);


(lib.VMODept = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBKQgagaAAgvQAAgdAJgTQAGgQAMgLQAMgMANgFQASgIAXAAQArAAAZAbQAaAaAAAuQAAAvgaAaQgZAbgrAAQgqAAgZgagAgmgxQgPAQAAAhQAAAhAQARQAPARAWAAQAXAAAPgRQAPgRAAghQAAgggOgRQgOgRgZAAQgXAAgPARg");
	this.shape.setTransform(88.4571,10.0344,0.4129,0.4129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BhIAAiYIgmCYIglAAIgmiYIAACYIgkAAIAAjBIA6AAIAiCDIAjiDIA6AAIAADBg");
	this.shape_1.setTransform(79.4555,10.0344,0.4129,0.4129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBhIhFjBIArAAIAvCOIAviOIAqAAIhFDBg");
	this.shape_2.setTransform(71.0836,10.0344,0.4129,0.4129);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4).p("A5kEyMAzJAAAQB+AABahaQBZhaAAh+QAAh+hZhZQhahah+AAMgzJAAAQh+AAhaBaQhZBZAAB+QAAB/BZBZQBaBaB+AAg");
	this.shape_3.setTransform(80.0749,9.6008,0.4129,0.4129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BEC0C2","#3BC5F3"],[0,1],194.3,0,-194.2,0).s().p("A5kEyQh+AAhahaQhZhZAAh/QAAh+BZhZQBahaB+AAMAzJAAAQB+AABaBaQBZBZAAB+QAAB+hZBaQhaBah+AAg");
	this.shape_4.setTransform(80.0749,9.6008,0.4129,0.4129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4).p("A5kdNMAzJAAAQB+AABahaQBZhZAAh/MAAAgw1QAAh/hZhZQhahah+AAMgzJAAAQh+AAhaBaQhZBZAAB/MAAAAw1QAAB/BZBZQBaBaB+AAg");
	this.shape_5.setTransform(80.0643,77.1395,0.4129,0.4129);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#8AD6F8","#3BC5F3"],[0,1],194.3,0,-194.2,0).s().p("A5kdNQh+AAhahaQhZhZAAh/MAAAgw1QAAh/BZhZQBahaB+AAMAzJAAAQB+AABaBaQBZBZAAB/MAAAAw1QAAB/hZBZQhaBah+AAg");
	this.shape_6.setTransform(80.0643,77.1395,0.4129,0.4129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VMODept, new cjs.Rectangle(-2.1,-5,174.2,171.1), null);


(lib.VMO3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00E3FF").s().p("AhPB+IBNj7IAvAJIAjCXIhKAvIgMgcIgqBIg");
	this.shape.setTransform(31.5112,137.6116,0.4156,0.4156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00E3FF").s().p("AAxB+IgrhIIgLAcIhKgvIAjiXIAvgJIBND7g");
	this.shape_1.setTransform(22.0448,137.6116,0.4156,0.4156);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C7CCCC").s().p("Ag3B9QADgQgPgcIgjg3Qg0hRAIg/IAkgHIgCARQABAWAHARQAYA4BWgBQBYABARg4QAGgRgCgWIgEgRIAkAHQAIA+gzBSQgZAngKARQgPAbADARg");
	this.shape_2.setTransform(26.7005,137.6116,0.4156,0.4156);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00C5FF").s().p("AhVB7QAGhdAEghQAGhCAygcQAYgOAYgBIA0gKQAQA7ghC6g");
	this.shape_3.setTransform(17.9005,137.7823,0.4157,0.4157);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00C5FF").s().p("Ag+B7Qgei7ALg6IBCAMQARAEAQAJQAyAcAGBCQAFAyAFBMg");
	this.shape_4.setTransform(36.0802,137.7823,0.4157,0.4157);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED9CC").s().p("AgECnQgVgCgSgKQgHgFgVgWIgHgIQgMgJgLgYQgNgbgEgiQgRgTgJgRQgTglAmAAIgBgJQAAglATgbQAegrBJgDIAAAAIAIAAIAAAAQBVADAbA+QAOAegDAfQAlAAgUAmQgKASgSATQgEAigKAVQgLAYgNAGQgaAegJAFQgSAKgVACg");
	this.shape_5.setTransform(26.8528,123.0968,0.4157,0.4157);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#57534F").s().p("AiFBrQgQgagFgkQgIhFA+guIAQgMQAVgOAYgGQBMgSBRBEIALALQAMAPAHARQAWA3grA9g");
	this.shape_6.setTransform(26.6718,116.9177,0.4157,0.4157);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6BEA6").s().p("AkGCIIADgQQAGgUAKgRQAMgRAdgLQANgFANgDIBlgTQAjgrgThAIgag4ICrAAIgaA4QgTBAAjArIBlATIAaAIQAdALALARQASAcACAZg");
	this.shape_7.setTransform(26.9956,131.3697,0.4157,0.4157);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#57534F").s().p("Ag9CoQiDACAHiqQABg0AQhAIAPg2IEuAAQAkCVABBJQACBHgeAaQgYAVg+ABQhRgEg0ABg");
	this.shape_8.setTransform(26.6685,125.2273,0.4157,0.4157);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00C5FF").s().p("Ai2A5IAAhxIFuAAIAABxg");
	this.shape_9.setTransform(26.954,140.5572,0.4157,0.4157);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-42.5,0,42.6,0).ss(3).p("AmKEuIAApbQAAgmAbgcQAcgcAnAAIJaAAQAnAAAbAcQAcAcAAAmIAAJbQAAAngcAbQgbAcgnAAIpaAAQgnAAgcgcQgbgbAAgng");
	this.shape_10.setTransform(27.0521,131.2897,0.4158,0.4158);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#8AD6F8","#FEFCFC"],[0,0.004],-39.5,0,39.6,0).s().p("AktGMQgnAAgbgcQgcgbABgnIAApbQgBgmAcgcQAbgcAnAAIJaAAQAoAAAbAcQAbAcAAAmIAAJbQAAAngbAbQgbAcgoAAg");
	this.shape_11.setTransform(27.0521,131.2897,0.4158,0.4158);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#707070").s().p("AhABWIAAirIB+AAIAAAdIhcAAIAAAmIBVAAIAAAcIhVAAIAAAvIBfAAIAAAdg");
	this.shape_12.setTransform(109.3104,131.1794,0.4156,0.4156);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#707070").s().p("AhABWIAAirIB+AAIAAAdIhcAAIAAAmIBVAAIAAAcIhVAAIAAAvIBfAAIAAAdg");
	this.shape_13.setTransform(102.66,131.1794,0.4156,0.4156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#707070").s().p("Ag8BVIAAipIAjAAIAACMIBVAAIAAAdg");
	this.shape_14.setTransform(96.4148,131.2106,0.4156,0.4156);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#707070").s().p("Ag0BWIgDgaIAOABQAMAAAFgHQAFgGADgKIgvh8IAjAAIAdBXIAdhXIAiAAIg0CMQgFANgDADQgEAGgEAEQgEADgJADQgGABgKAAQgLAAgIgBg");
	this.shape_15.setTransform(87.5511,133.2057,0.4156,0.4156);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#707070").s().p("AguA3QgLgLAAgQQAAgLAFgHQAFgJAJgEQAIgEASgDQAXgEAIgEIAAgEQAAgJgFgEQgFgEgLAAQgJAAgFAEQgFAEgDAIIgegGQAEgRANgKQANgIAYAAQAVAAALAFQAKAGAFAHQAEAIAAAWIAAAlQAAARABAIQACAHAEAJIggAAIgFgOQgIAJgKADQgIAFgLAAQgTAAgLgKgAAAAHQgPAEgDACQgGAFAAAGQAAAHAFAGQAFAEAIAAQAHAAAJgFQAFgEADgHIABgWg");
	this.shape_16.setTransform(82.0645,132.1666,0.4156,0.4156);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#707070").s().p("AgoBJQgOgPAAgbIAhgEQAAAPAEAGQAHAKAKAAQALAAAFgHQAEgGAAgWIAAhtIAjAAIAABrQAAAUgEANQgEAPgOAJQgOAJgUAAQgZAAgOgOg");
	this.shape_17.setTransform(76.1935,131.2418,0.4156,0.4156);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-144.2,0,144.2,0).ss(3).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_18.setTransform(93.335,131.4736,0.4157,0.4157);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AyLEIQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_19.setTransform(93.335,131.4736,0.4157,0.4157);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-42.5,0,42.6,0).ss(5).p("AmKEuIAApbQAAgmAbgcQAcgcAnAAIJaAAQAnAAAbAcQAcAcAAAmIAAJbQAAAngcAbQgbAcgnAAIpaAAQgnAAgcgcQgbgbAAgng");
	this.shape_20.setTransform(18.268,131.5968,0.4822,0.4822);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-144.2,0,144.2,0).ss(5).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_21.setTransform(95.1208,131.8078,0.4821,0.4821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19,p:{scaleX:0.4157,scaleY:0.4157,x:93.335,y:131.4736}},{t:this.shape_18},{t:this.shape_17,p:{scaleX:0.4156,scaleY:0.4156,x:76.1935,y:131.2418}},{t:this.shape_16,p:{scaleX:0.4156,scaleY:0.4156,x:82.0645,y:132.1666}},{t:this.shape_15,p:{scaleX:0.4156,scaleY:0.4156,x:87.5511,y:133.2057}},{t:this.shape_14,p:{scaleX:0.4156,scaleY:0.4156,x:96.4148,y:131.2106}},{t:this.shape_13,p:{scaleX:0.4156,scaleY:0.4156,x:102.66,y:131.1794}},{t:this.shape_12,p:{scaleX:0.4156,scaleY:0.4156,x:109.3104,y:131.1794}},{t:this.shape_11,p:{scaleX:0.4158,scaleY:0.4158,x:27.0521,y:131.2897}},{t:this.shape_10},{t:this.shape_9,p:{scaleX:0.4157,scaleY:0.4157,x:26.954,y:140.5572}},{t:this.shape_8,p:{scaleX:0.4157,scaleY:0.4157,x:26.6685,y:125.2273}},{t:this.shape_7,p:{scaleX:0.4157,scaleY:0.4157,x:26.9956,y:131.3697}},{t:this.shape_6,p:{scaleX:0.4157,scaleY:0.4157,x:26.6718,y:116.9177}},{t:this.shape_5,p:{scaleX:0.4157,scaleY:0.4157,x:26.8528,y:123.0968}},{t:this.shape_4,p:{scaleX:0.4157,scaleY:0.4157,x:36.0802,y:137.7823}},{t:this.shape_3,p:{scaleX:0.4157,scaleY:0.4157,x:17.9005,y:137.7823}},{t:this.shape_2,p:{scaleX:0.4156,scaleY:0.4156,x:26.7005,y:137.6116}},{t:this.shape_1,p:{scaleX:0.4156,scaleY:0.4156,x:22.0448,y:137.6116}},{t:this.shape,p:{scaleX:0.4156,scaleY:0.4156,x:31.5112,y:137.6116}}]}).to({state:[{t:this.shape_19,p:{scaleX:0.4821,scaleY:0.4821,x:95.1208,y:131.8078}},{t:this.shape_21},{t:this.shape_17,p:{scaleX:0.4819,scaleY:0.4819,x:75.024,y:131.4816}},{t:this.shape_16,p:{scaleX:0.4819,scaleY:0.4819,x:81.8309,y:132.5538}},{t:this.shape_15,p:{scaleX:0.4819,scaleY:0.4819,x:88.192,y:133.7586}},{t:this.shape_14,p:{scaleX:0.4819,scaleY:0.4819,x:98.4686,y:131.4455}},{t:this.shape_13,p:{scaleX:0.4819,scaleY:0.4819,x:105.7092,y:131.4093}},{t:this.shape_12,p:{scaleX:0.4819,scaleY:0.4819,x:113.4196,y:131.4093}},{t:this.shape_11,p:{scaleX:0.4822,scaleY:0.4822,x:18.268,y:131.5968}},{t:this.shape_20},{t:this.shape_9,p:{scaleX:0.482,scaleY:0.482,x:17.9845,y:142.2956}},{t:this.shape_8,p:{scaleX:0.482,scaleY:0.482,x:17.6534,y:124.5215}},{t:this.shape_7,p:{scaleX:0.482,scaleY:0.482,x:18.0327,y:131.6432}},{t:this.shape_6,p:{scaleX:0.482,scaleY:0.482,x:17.6572,y:114.8869}},{t:this.shape_5,p:{scaleX:0.482,scaleY:0.482,x:17.8671,y:122.0512}},{t:this.shape_4,p:{scaleX:0.482,scaleY:0.482,x:28.5658,y:139.0782}},{t:this.shape_3,p:{scaleX:0.482,scaleY:0.482,x:7.4874,y:139.0782}},{t:this.shape_2,p:{scaleX:0.4819,scaleY:0.4819,x:17.6015,y:138.8555}},{t:this.shape_1,p:{scaleX:0.4819,scaleY:0.4819,x:12.2038,y:138.8555}},{t:this.shape,p:{scaleX:0.4819,scaleY:0.4819,x:23.1788,y:138.8555}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,109.8,169.79999999999998,43.39999999999999);


(lib.VMO2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00E3FF").s().p("AhLCkIgBiYIgYiQICugfQAAANAbE6g");
	this.shape.setTransform(21.8054,96.2067,0.4158,0.4158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00E3FF").s().p("AhkClQAck+AAgLICtAgIgYCQIgBCZg");
	this.shape_1.setTransform(32.2204,96.1964,0.4158,0.4158);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C7CCCC").s().p("AhwClIADhqIA5jeIAzAVIAzgWIA/DfIAABqg");
	this.shape_2.setTransform(27.0753,96.1964,0.4158,0.4158);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00C5FF").s().p("Ag0CVIgCgrQgDgWAEgqQAHhUAchqIALAKQANANALASQAkA8ACBcIACBog");
	this.shape_3.setTransform(37.2192,96.8512,0.4158,0.4158);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00C5FF").s().p("Ag0CVIAChoQABhcAig7QAQgeARgLQAbBpAGBUQAEArgDAWIgCAqg");
	this.shape_4.setTransform(16.8585,96.8616,0.4158,0.4158);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#764932").s().p("AheAsQgGgLAYgVQAYgUAogTQAngSAfgFQAggFAFALQAFAMgYAVQgYAUgnASQgnATgfAFIgRACQgQAAgEgJg");
	this.shape_5.setTransform(25.2187,76.0488,0.4157,0.4157);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED9CC").s().p("AgDCWIAAgBQgSgBgRgKQgIgEgSgTIgGgHQgLgIgKgWQgLgZgEgeQgPgRgIgPQgQghAhAAIAAgIQgBghARgZQAcgnBBgCIAGAAQBNACAZA4QAMAcgDAbQAhAAgSAiQgJAQgQARQgDAcgJAWQgKAVgMAGQgXAagIAEQgRAKgTABIAAABg");
	this.shape_6.setTransform(26.8504,81.567,0.4157,0.4157);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#764932").s().p("AhxBfQgmg2AUgwQAGgQALgNIAKgKQBIg9BEARQAiAIAUAUQA3ApgHA+QgEAfgPAXg");
	this.shape_7.setTransform(26.7141,76.0486,0.4157,0.4157);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6BEA6").s().p("AijAmIAygPIARAEQAUAAASgUQASgTgDgsIgHgpIBpAAQgSAfAKAmQAEATAHAMIBqAoIhQAwIh0AHg");
	this.shape_8.setTransform(27.0129,89.6168,0.4158,0.4158);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-42.5,0,42.6,0).ss(3).p("AmLEuIAApaQAAgnAcgcQAbgbAnAAIJaAAQAnAAAcAbQAcAcAAAnIAAJaQAAAngcAbQgcAcgnAAIpaAAQgnAAgbgcQgcgbAAgng");
	this.shape_9.setTransform(27.1041,90.7866,0.4158,0.4158);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#8AD6F8","#FEFCFC"],[0,0.004],-39.5,0,39.6,0).s().p("AktGLQgnABgbgcQgcgbAAgnIAApaQAAgnAcgcQAbgcAnAAIJaAAQAnAAAcAcQAcAcAAAnIAAJaQAAAngcAbQgcAcgngBg");
	this.shape_10.setTransform(27.1041,90.7866,0.4158,0.4158);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#707070").s().p("AgiBSQgNgGgHgJQgIgKgCgJQgEgOAAgeIAAhaIAjAAIAABcQAAAWABAGQADALAIAGQAIAHAOAAQAPAAAHgGQAHgGADgJQABgJAAgUIAAheIAiAAIAABZQAAAfgDANQgCANgIAIQgJAKgLAEQgMAFgVAAQgYAAgMgFg");
	this.shape_11.setTransform(119.7883,90.812,0.4156,0.4156);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#707070").s().p("AAwBWIgPgnIhEAAIgNAnIglAAIBCirIAkAAIBFCrgAgXASIAtAAIgXg/g");
	this.shape_12.setTransform(112.6192,90.7497,0.4156,0.4156);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#707070").s().p("Ag8BVIAAipIAjAAIAACMIBVAAIAAAdg");
	this.shape_13.setTransform(106.2189,90.7809,0.4156,0.4156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#707070").s().p("AgEBSQgIgDgDgFQgDgDgCgJIgBgYIAAg1IgPAAIAAgaIAPAAIAAgZIAggTIAAAsIAXAAIAAAaIgXAAIAAAyQAAANABAFQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACAEAAQAEAAAJgDIADAaQgMAEgOAAQgJAAgGgDg");
	this.shape_14.setTransform(98.5406,90.8848,0.4156,0.4156);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#707070").s().p("AgPBWIAAh7IAfAAIAAB7gAgPg2IAAgfIAfAAIAAAfg");
	this.shape_15.setTransform(95.4963,90.7497,0.4156,0.4156);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#707070").s().p("AAgBWIgthRIgdAdIAAA0IgjAAIAAirIAjAAIAABMIBGhMIAuAAIhBBDIBEBog");
	this.shape_16.setTransform(90.8623,90.7497,0.4156,0.4156);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#707070").s().p("AgqBOQgOgLAAgQIABgEIAlAEQABAGADADQAGAEAIAAQANAAAHgEQAEgDACgGQACgDAAgMIAAgSQgPAUgWAAQgZAAgOgVQgMgRAAgXQAAggAPgQQAPgRAXAAQAWAAAPAUIAAgRIAfAAIAABvQAAAVgEALQgEAMgGAGQgHAGgLADQgKAEgRAAQgfAAgNgLgAgSg1QgIAJAAATQAAASAIAKQAHAJALAAQAMAAAIgKQAIgIAAgTQAAgTgIgJQgIgKgMAAQgLAAgHAKg");
	this.shape_17.setTransform(80.9813,92.7238,0.4156,0.4156);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#707070").s().p("AAYA/IAAg/QAAgTgCgGQgDgHgEgCQgFgEgGABQgIAAgHAEQgGAFgDAIQgDAIAAAUIAAA3IghAAIAAh7IAfAAIAAASQAQgUAYAAQAKAAAKADQAIAEAGAGQAEAHACAHQACAHAAAPIAABMg");
	this.shape_18.setTransform(75.0174,91.6744,0.4156,0.4156);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#707070").s().p("AgPBWIAAh7IAfAAIAAB7gAgPg2IAAgfIAfAAIAAAfg");
	this.shape_19.setTransform(70.5912,90.7497,0.4156,0.4156);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#707070").s().p("AgRBWIAAhIIg+hjIAoAAIAoBEIAnhEIAoAAIg/BjIAABIg");
	this.shape_20.setTransform(66.2482,90.7497,0.4156,0.4156);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-144.2,0,144.2,0).ss(3).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhOQBNhNBtAAMAkXAAAQBtAABNBNQBNBOAABsQAABthNBNQhNBOhtAAg");
	this.shape_21.setTransform(93.4623,90.9912,0.4158,0.4158);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AyLEIQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_22.setTransform(93.4623,90.9912,0.4158,0.4158);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-42.5,0,42.6,0).ss(5).p("AmLEuIAApaQAAgnAcgcQAbgbAnAAIJaAAQAnAAAcAbQAcAcAAAnIAAJaQAAAngcAbQgcAcgnAAIpaAAQgnAAgbgcQgcgbAAgng");
	this.shape_23.setTransform(19.0837,91.2287,0.4805,0.4805);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-144.2,0,144.2,0).ss(5).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhOQBNhNBtAAMAkXAAAQBtAABNBNQBNBOAABsQAABthNBNQhNBOhtAAg");
	this.shape_24.setTransform(95.706,91.4448,0.4804,0.4804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{scaleX:0.4158,scaleY:0.4158,x:93.4623,y:90.9912}},{t:this.shape_21},{t:this.shape_20,p:{scaleX:0.4156,scaleY:0.4156,x:66.2482,y:90.7497}},{t:this.shape_19,p:{scaleX:0.4156,scaleY:0.4156,x:70.5912,y:90.7497}},{t:this.shape_18,p:{scaleX:0.4156,scaleY:0.4156,x:75.0174,y:91.6744}},{t:this.shape_17,p:{scaleX:0.4156,scaleY:0.4156,x:80.9813,y:92.7238}},{t:this.shape_16,p:{scaleX:0.4156,scaleY:0.4156,x:90.8623,y:90.7497}},{t:this.shape_15,p:{scaleX:0.4156,scaleY:0.4156,x:95.4963,y:90.7497}},{t:this.shape_14,p:{scaleX:0.4156,scaleY:0.4156,x:98.5406,y:90.8848}},{t:this.shape_13,p:{scaleX:0.4156,scaleY:0.4156,x:106.2189,y:90.7809}},{t:this.shape_12,p:{scaleX:0.4156,scaleY:0.4156,x:112.6192,y:90.7497}},{t:this.shape_11,p:{scaleX:0.4156,scaleY:0.4156,x:119.7883,y:90.812}},{t:this.shape_10,p:{scaleX:0.4158,scaleY:0.4158,x:27.1041,y:90.7866}},{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.4158,scaleY:0.4158,x:27.0129,y:89.6168}},{t:this.shape_7,p:{scaleX:0.4157,scaleY:0.4157,x:26.7141,y:76.0486}},{t:this.shape_6,p:{scaleX:0.4157,scaleY:0.4157,x:26.8504,y:81.567}},{t:this.shape_5,p:{scaleX:0.4157,scaleY:0.4157,x:25.2187,y:76.0488}},{t:this.shape_4,p:{scaleX:0.4158,scaleY:0.4158,x:16.8585,y:96.8616}},{t:this.shape_3,p:{scaleX:0.4158,scaleY:0.4158,x:37.2192,y:96.8512}},{t:this.shape_2,p:{scaleX:0.4158,scaleY:0.4158,x:27.0753,y:96.1964}},{t:this.shape_1,p:{scaleX:0.4158,scaleY:0.4158,x:32.2204,y:96.1964}},{t:this.shape,p:{scaleX:0.4158,scaleY:0.4158,x:21.8054,y:96.2067}}]}).to({state:[{t:this.shape_22,p:{scaleX:0.4804,scaleY:0.4804,x:95.706,y:91.4448}},{t:this.shape_24},{t:this.shape_20,p:{scaleX:0.4802,scaleY:0.4802,x:64.2842,y:91.3185}},{t:this.shape_19,p:{scaleX:0.4802,scaleY:0.4802,x:69.3026,y:91.3185}},{t:this.shape_18,p:{scaleX:0.4802,scaleY:0.4802,x:74.4169,y:92.387}},{t:this.shape_17,p:{scaleX:0.4802,scaleY:0.4802,x:81.3082,y:93.5996}},{t:this.shape_16,p:{scaleX:0.4802,scaleY:0.4802,x:92.7255,y:91.3185}},{t:this.shape_15,p:{scaleX:0.4802,scaleY:0.4802,x:98.08,y:91.3185}},{t:this.shape_14,p:{scaleX:0.4802,scaleY:0.4802,x:101.5977,y:91.4746}},{t:this.shape_13,p:{scaleX:0.4802,scaleY:0.4802,x:110.4698,y:91.3545}},{t:this.shape_12,p:{scaleX:0.4802,scaleY:0.4802,x:117.8653,y:91.3185}},{t:this.shape_11,p:{scaleX:0.4802,scaleY:0.4802,x:126.1492,y:91.3905}},{t:this.shape_10,p:{scaleX:0.4805,scaleY:0.4805,x:19.0837,y:91.2287}},{t:this.shape_23},{t:this.shape_8,p:{scaleX:0.4804,scaleY:0.4804,x:18.9196,y:89.9054}},{t:this.shape_7,p:{scaleX:0.4803,scaleY:0.4803,x:18.5312,y:74.2199}},{t:this.shape_6,p:{scaleX:0.4803,scaleY:0.4803,x:18.6888,y:80.596}},{t:this.shape_5,p:{scaleX:0.4803,scaleY:0.4803,x:16.8034,y:74.2203}},{t:this.shape_4,p:{scaleX:0.4804,scaleY:0.4804,x:7.1867,y:98.2766}},{t:this.shape_3,p:{scaleX:0.4804,scaleY:0.4804,x:30.7126,y:98.2645}},{t:this.shape_2,p:{scaleX:0.4804,scaleY:0.4804,x:18.9917,y:97.5079}},{t:this.shape_1,p:{scaleX:0.4804,scaleY:0.4804,x:24.9367,y:97.5079}},{t:this.shape,p:{scaleX:0.4804,scaleY:0.4804,x:12.9025,y:97.5199}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,69.7,169.3,43.099999999999994);


(lib.VMO1button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1,3,true).p("Am3h2INvAAQAuAAAgAgQAgAgAAAuIAAASQAAAtggAgQggAhguAAItvAAQguAAggghQggggAAgtIAAgSQAAguAgggQAgggAuAAg");
	this.shape.setTransform(83.0438,17.75,1.1144,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Am3B3QguAAggggQggggAAgtIAAgSQAAguAgghQAggfAuAAINvAAQAuAAAgAfQAgAhAAAuIAAASQAAAtggAgQggAgguAAg");
	this.shape_1.setTransform(83.0438,17.75,1.1144,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1,1,1,3,true).p("AhkiWIDJAAQAyAAAAAyIAADJQAAAygyAAIjJAAQgyAAAAgyIAAjJQAAgyAyAAg");
	this.shape_2.setTransform(17.6006,17.5762,1.164,1.164);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhkCXQgyAAAAgyIAAjJQAAgyAyAAIDJAAQAyAAAAAyIAADJQAAAygyAAg");
	this.shape_3.setTransform(17.6006,17.5762,1.164,1.164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,146.4,37.2);


(lib.VMO1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00E3FF").s().p("AhLCkIgBiYIgYiQICugfQAAANAbE6g");
	this.shape.setTransform(21.8054,55.0567,0.4158,0.4158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00E3FF").s().p("AhkClQAck+AAgLICtAgIgYCQIgBCZg");
	this.shape_1.setTransform(32.2204,55.0464,0.4158,0.4158);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C7CCCC").s().p("AhwClIADhqIA5jeIAzAVIAzgWIA/DfIAABqg");
	this.shape_2.setTransform(27.0753,55.0464,0.4158,0.4158);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00C5FF").s().p("Ag0CVIgCgrQgDgWAEgqQAHhUAchqIALAKQANANALASQAkA8ACBcIACBog");
	this.shape_3.setTransform(37.2192,55.7012,0.4158,0.4158);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00C5FF").s().p("Ag0CVIAChoQABhcAig7QAQgeARgLQAbBpAGBUQAEArgDAWIgCAqg");
	this.shape_4.setTransform(16.8585,55.7116,0.4158,0.4158);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#764932").s().p("AheAsQgGgLAYgVQAYgUAogTQAngSAfgFQAggFAFALQAFAMgYAVQgYAUgnASQgnATgfAFIgRACQgQAAgEgJg");
	this.shape_5.setTransform(25.3397,34.9213,0.4157,0.4157);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED9CC").s().p("AgDCWIAAgBQgSgBgRgKQgIgEgSgTIgGgHQgLgIgKgWQgLgZgEgeQgPgRgIgPQgQghAhAAIAAgIQgBghARgZQAcgnBBgCIAGAAQBNACAZA4QAMAcgDAbQAhAAgSAiQgJAQgQARQgDAcgJAWQgKAVgMAGQgXAagIAEQgRAKgTABIAAABg");
	this.shape_6.setTransform(26.9716,40.4401,0.4157,0.4157);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#764932").s().p("AhxBfQgmg2AUgwQAGgQALgNIAKgKQBIg9BEARQAiAIAUAUQA3ApgHA+QgEAfgPAXg");
	this.shape_7.setTransform(26.8353,34.9211,0.4157,0.4157);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6BEA6").s().p("AijAmIAygPIARAEQAUAAASgUQASgTgDgsIgHgpIBpAAQgSAfAKAmQAEATAHAMIBqAoIhQAwIh0AHg");
	this.shape_8.setTransform(27.0129,48.4668,0.4158,0.4158);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-42.5,0,42.6,0).ss(3).p("AmLEuIAApaQAAgnAcgcQAbgbAnAAIJaAAQAnAAAcAbQAcAcAAAnIAAJaQAAAngcAbQgcAcgnAAIpaAAQgnAAgbgcQgcgbAAgng");
	this.shape_9.setTransform(27.1041,49.6366,0.4158,0.4158);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#8AD6F8","#FEFCFC"],[0,0.004],-39.5,0,39.6,0).s().p("AktGLQgnABgbgcQgcgbAAgnIAApaQAAgnAcgcQAbgcAnAAIJaAAQAnAAAcAcQAcAcAAAnIAAJaQAAAngcAbQgcAcgngBg");
	this.shape_10.setTransform(27.1041,49.6366,0.4158,0.4158);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#707070").s().p("AgnBOQgUgLgKgWQgKgVAAgYQAAgbALgUQAMgWAVgKQAQgJAYAAQAgAAASAOQASAOAFAXIgiAGQgEgMgKgIQgKgHgPAAQgWAAgNAOQgOAPAAAcQAAAeAOAPQAOAPAVAAQAKAAALgEQAMgEAHgGIAAgWIgnAAIAAgcIBKAAIAABDQgMAMgTAHQgVAIgVAAQgaAAgUgLg");
	this.shape_11.setTransform(118.9415,49.578,0.4157,0.4157);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#707070").s().p("AAhBWIhEhvIAABvIggAAIAAirIAiAAIBFByIAAhyIAgAAIAACrg");
	this.shape_12.setTransform(111.5003,49.578,0.4157,0.4157);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#707070").s().p("AgiBSQgNgGgIgJQgHgJgCgKQgDgOgBgeIAAhaIAjAAIAABcQAAAWABAGQACALAJAGQAIAHAOAAQAOAAAIgGQAHgGACgJQABgIAAgVIAAheIAjAAIAABZQAAAfgDANQgCAMgIAJQgHAJgNAFQgMAFgVAAQgZAAgLgFg");
	this.shape_13.setTransform(104.2981,49.6404,0.4157,0.4157);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#707070").s().p("AhABWIAAirIB+AAIAAAdIhcAAIAAAmIBVAAIAAAcIhVAAIAAAvIBfAAIAAAdg");
	this.shape_14.setTransform(97.5324,49.578,0.4157,0.4157);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#707070").s().p("AgQBWIAAhIIg/hjIApAAIAnBEIAnhEIAoAAIg/BjIAABIg");
	this.shape_15.setTransform(90.7564,49.578,0.4157,0.4157);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#707070").s().p("AA7BAIAAhGQAAgSgEgGQgEgHgKAAQgHAAgGAEQgGAFgDAHQgCAJAAAQIAAA8IggAAIAAhEQAAgSgCgFQgCgFgDgCQgDgDgHAAQgJAAgFAEQgGAEgDAHQgCAIAAARIAAA9IghAAIAAh7IAeAAIAAARQAQgVAXABQALAAAJAEQAJAGAFAKQAIgKAJgGQALgEAKAAQANgBAKAGQAJAFAFALQADAJAAASIAABOg");
	this.shape_16.setTransform(80.4052,50.503,0.4157,0.4157);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#707070").s().p("AguA2QgLgKAAgPQAAgLAFgJQAEgHAKgEQAIgEASgEQAUgEALgEIAAgDQAAgJgFgFQgEgEgNABQgIgBgFADQgGAFgCAIIgegGQAFgSAMgIQANgJAYAAQAUAAAMAGQALAFAEAHQAEAJAAAVIAAAmQAAAQABAHQACAJAEAIIggAAIgFgNQgIAHgKAFQgIAEgLAAQgTAAgLgLgAAAAHQgOADgEAEQgHAEAAAHQAAAHAGAFQAGAFAHAAQAIAAAIgGQAGgEACgHIABgQIAAgGIgTAEg");
	this.shape_17.setTransform(73.2342,50.5653,0.4157,0.4157);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#707070").s().p("AgwBJQgRgPgEgcIAigEQADARAJAJQAKAIAOAAQARAAAJgIQAIgHAAgJQAAgHgDgEQgEgEgJgDIgbgIQgcgHgLgIQgPgOAAgVQAAgNAHgLQAHgMAOgGQAPgGATAAQAfAAARAOQAQAOABAYIgjABQgCgNgHgGQgIgFgNAAQgPAAgJAGQgFAEAAAGQAAAIAFADQAGAFAZAHQAZAFAMAHQALAFAIALQAHAMAAAPQAAAQgIAMQgJANgPAGQgQAHgVAAQggAAgRgQg");
	this.shape_18.setTransform(67.0609,49.5884,0.4157,0.4157);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-144.2,0,144.2,0).ss(3).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhOQBNhNBtAAMAkXAAAQBtAABNBNQBNBOAABsQAABthNBNQhNBOhtAAg");
	this.shape_19.setTransform(93.4623,49.8412,0.4158,0.4158);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AyLEIQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_20.setTransform(93.4623,49.8412,0.4158,0.4158);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-42.5,0,42.6,0).ss(5).p("AmLEuIAApaQAAgnAcgcQAbgbAnAAIJaAAQAnAAAcAbQAcAcAAAnIAAJaQAAAngcAbQgcAcgnAAIpaAAQgnAAgbgcQgcgbAAgng");
	this.shape_21.setTransform(18.8966,49.8472,0.4787,0.4787);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#ADAFB1","#8F9092"],[0,1],-144.2,0,144.2,0).ss(5).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhOQBNhNBtAAMAkXAAAQBtAABNBNQBNBOAABsQAABthNBNQhNBOhtAAg");
	this.shape_22.setTransform(95.2716,50.0783,0.4787,0.4787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20,p:{scaleX:0.4158,scaleY:0.4158,x:93.4623,y:49.8412}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:0.4157,scaleY:0.4157,x:67.0609,y:49.5884}},{t:this.shape_17,p:{scaleX:0.4157,scaleY:0.4157,x:73.2342,y:50.5653}},{t:this.shape_16,p:{scaleX:0.4157,scaleY:0.4157,x:80.4052,y:50.503}},{t:this.shape_15,p:{scaleX:0.4157,scaleY:0.4157,x:90.7564,y:49.578}},{t:this.shape_14,p:{scaleX:0.4157,scaleY:0.4157,x:97.5324,y:49.578}},{t:this.shape_13,p:{scaleX:0.4157,scaleY:0.4157,x:104.2981,y:49.6404}},{t:this.shape_12,p:{scaleX:0.4157,scaleY:0.4157,x:111.5003,y:49.578}},{t:this.shape_11,p:{scaleX:0.4157,scaleY:0.4157,x:118.9415,y:49.578}},{t:this.shape_10,p:{scaleX:0.4158,scaleY:0.4158,x:27.1041,y:49.6366}},{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.4158,scaleY:0.4158,x:27.0129,y:48.4668}},{t:this.shape_7,p:{scaleX:0.4157,scaleY:0.4157,x:26.8353,y:34.9211}},{t:this.shape_6,p:{scaleX:0.4157,scaleY:0.4157,x:26.9716,y:40.4401}},{t:this.shape_5,p:{scaleX:0.4157,scaleY:0.4157,x:25.3397,y:34.9213}},{t:this.shape_4,p:{scaleX:0.4158,scaleY:0.4158,x:16.8585,y:55.7116}},{t:this.shape_3,p:{scaleX:0.4158,scaleY:0.4158,x:37.2192,y:55.7012}},{t:this.shape_2,p:{scaleX:0.4158,scaleY:0.4158,x:27.0753,y:55.0464}},{t:this.shape_1,p:{scaleX:0.4158,scaleY:0.4158,x:32.2204,y:55.0464}},{t:this.shape,p:{scaleX:0.4158,scaleY:0.4158,x:21.8054,y:55.0567}}]}).to({state:[{t:this.shape_20,p:{scaleX:0.4787,scaleY:0.4787,x:95.2716,y:50.0783}},{t:this.shape_22},{t:this.shape_18,p:{scaleX:0.4786,scaleY:0.4786,x:64.8532,y:49.7829}},{t:this.shape_17,p:{scaleX:0.4786,scaleY:0.4786,x:71.9603,y:50.9076}},{t:this.shape_16,p:{scaleX:0.4786,scaleY:0.4786,x:80.216,y:50.8358}},{t:this.shape_15,p:{scaleX:0.4786,scaleY:0.4786,x:92.1329,y:49.771}},{t:this.shape_14,p:{scaleX:0.4786,scaleY:0.4786,x:99.934,y:49.771}},{t:this.shape_13,p:{scaleX:0.4786,scaleY:0.4786,x:107.7231,y:49.8428}},{t:this.shape_12,p:{scaleX:0.4786,scaleY:0.4786,x:116.0147,y:49.771}},{t:this.shape_11,p:{scaleX:0.4786,scaleY:0.4786,x:124.5815,y:49.771}},{t:this.shape_10,p:{scaleX:0.4787,scaleY:0.4787,x:18.8966,y:49.8472}},{t:this.shape_21},{t:this.shape_8,p:{scaleX:0.4787,scaleY:0.4787,x:18.773,y:48.4868}},{t:this.shape_7,p:{scaleX:0.4786,scaleY:0.4786,x:18.5465,y:32.8883}},{t:this.shape_6,p:{scaleX:0.4786,scaleY:0.4786,x:18.7034,y:39.2419}},{t:this.shape_5,p:{scaleX:0.4786,scaleY:0.4786,x:16.8247,y:32.8886}},{t:this.shape_4,p:{scaleX:0.4787,scaleY:0.4787,x:7.0829,y:56.8273}},{t:this.shape_3,p:{scaleX:0.4787,scaleY:0.4787,x:30.523,y:56.8153}},{t:this.shape_2,p:{scaleX:0.4787,scaleY:0.4787,x:18.8448,y:56.0615}},{t:this.shape_1,p:{scaleX:0.4787,scaleY:0.4787,x:24.7682,y:56.0615}},{t:this.shape,p:{scaleX:0.4787,scaleY:0.4787,x:12.7779,y:56.0734}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,28.4,168.6,42.9);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#707070").s().p("AgjBSQgNgGgGgJQgIgJgCgKQgDgOgBgeIAAhaIAjAAIAABcQAAAWABAHQADAKAIAGQAIAHAOAAQAOAAAIgGQAHgGACgJQACgJAAgUIAAheIAiAAIAABZQAAAfgDANQgCAMgIAJQgHAJgNAFQgMAFgVAAQgZAAgMgFg");
	this.shape.setTransform(86.3015,96.7043,0.4129,0.4131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AAwBWIgPgnIhDAAIgOAnIglAAIBDirIAjAAIBFCrgAgYASIAuAAIgWg/g");
	this.shape_1.setTransform(79.1689,96.6527,0.4129,0.4131);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("Ag8BVIAAipIAjAAIAACMIBWAAIAAAdg");
	this.shape_2.setTransform(72.8208,96.6837,0.4129,0.4131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("AAYBAIAAhAQAAgUgCgFQgDgGgEgDQgFgDgHAAQgHAAgHAEQgHAFgCAIQgDAIAAATIAAA5IghAAIAAh8IAfAAIAAASQAQgVAYAAQAKAAAKAEQAIAEAFAGQAFAGACAIQACAHAAAPIAABNg");
	this.shape_3.setTransform(63.8095,97.5718,0.4129,0.4131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("AgtAsQgMgRAAgaQAAgdAQgTQARgRAYAAQAaAAARATQAQARgBAmIhSAAQABAPAHAHQAIAJAKgBQAIAAAFgDQAGgGACgJIAhAGQgHATgNAJQgNAJgVAAQggAAgPgVgAgQgfQgHAJAAANIAwAAQgBgQgGgGQgHgIgKAAQgKAAgHAIg");
	this.shape_4.setTransform(57.9787,97.6234,0.4129,0.4131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("AAYBWIAAhCQAAgRgCgHQgDgFgEgDQgEgDgIAAQgIAAgFAEQgHADgDAIQgDAIAAAPIAAA/IghAAIAAirIAhAAIAAA/QAQgSAVgBQAMABAJAEQAIADAFAIQAFAFACAJQABAIAAAQIAABJg");
	this.shape_5.setTransform(52.259,96.6527,0.4129,0.4131);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#707070").s().p("Ag8BXIAAiqIAfAAIAAASQAGgJAKgGQALgGALAAQAVAAAQARQAPARAAAeQAAAfgPARQgQARgVAAQgJAAgJgEQgHgDgLgLIAAA+gAgTgzQgIAJAAATQAAAVAIAJQAJAKALAAQALAAAHgJQAIgJAAgVQAAgTgIgKQgIgJgLAAQgLAAgIAJg");
	this.shape_6.setTransform(46.3547,98.5425,0.4129,0.4131);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#707070").s().p("AgtAsQgMgRAAgaQAAgeAQgSQAQgRAZAAQAaAAAQATQARARgBAmIhRAAQABAPAHAHQAHAJALgBQAHAAAFgDQAFgFADgKIAhAGQgHATgNAJQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAAOIAwAAQgBgQgGgGQgIgIgJAAQgKAAgHAIg");
	this.shape_7.setTransform(40.3999,97.6234,0.4129,0.4131);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#707070").s().p("AgEBSQgIgDgDgEQgDgFgCgIIgBgXIAAg2IgPAAIAAgaIAPAAIAAgYIAggUIAAAsIAXAAIAAAaIgXAAIAAAyQAAAPABADQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACAEAAQAEAAAJgDIADAaQgMAEgOAAQgJAAgGgDg");
	this.shape_8.setTransform(36.0634,96.7766,0.4129,0.4131);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#707070").s().p("AgwBKQgRgPgEgdIAigEQADASAJAHQAKAIAPAAQAQAAAJgHQAIgHAAgJQAAgHgDgEQgEgEgJgDIgagIQgdgGgLgKQgPgOAAgUQAAgNAHgMQAIgLANgGQANgGAVAAQAgAAAQAOQAQAOABAYIgjABQgCgNgHgGQgIgFgNAAQgPAAgJAGQgFAEAAAHQAAAGAFAEQAGAFAZAGQAXAGAOAHQANAHAGAJQAHALAAARQAAAPgIAMQgJANgOAGQgQAHgWAAQgfAAgSgPg");
	this.shape_9.setTransform(31.0262,96.663,0.4129,0.4131);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00E3FF").s().p("AiNEzIgCkdIgtkNIFFg7QABAYARDNIAiGAg");
	this.shape_10.setTransform(49.2887,44.6065,0.4129,0.413);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00E3FF").s().p("Ai8EzIAhmAQASjOABgXIFFA6IgtENIgDEeg");
	this.shape_11.setTransform(68.6001,44.5962,0.4129,0.413);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C7CCCC").s().p("AjTEzIAHjHIBqmeIBgApIBggpIB2GeIAADHg");
	this.shape_12.setTransform(59.0528,44.5962,0.4129,0.413);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00C5FF").s().p("AhiEWIgFhRQgFgoAHhPQANieA1jFIAVARQAYAZAVAiQBEBwADCtIAEDCg");
	this.shape_13.setTransform(77.872,45.8043,0.4129,0.413);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00C5FF").s().p("AhiEWIADjBQADisA/hwQAfg4AfgWQAyDFAMCfQAGBQgEAoIgEBPg");
	this.shape_14.setTransform(40.115,45.8147,0.4129,0.413);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#764932").s().p("AixBTQgKgVAtgoQAtgmBKgjQBJgiA7gJQA7gKAKAWQAKAVgtAnQgtAnhKAiQhIAjg8AJQgSADgNAAQgfAAgHgPg");
	this.shape_15.setTransform(55.9542,7.2686,0.4128,0.413);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FED9CC").s().p("AgGEXQgigCgggSQgOgIgiglIgLgMQgFgEgIgJQgPgSgLgZQgVgtgHg7QgcgegPgeQggg9A/AAIgBgQQAAg9AfgtQAzhKB7gDIAAgBIAMAAIAAABQCPAEAuBnQAXA0gGAzQA/AAgiBAQgRAfgdAfQgGA3gSAmQgLAZgQAQIgNAKQgsAwgPAJQggASgiACIgGABg");
	this.shape_16.setTransform(58.9763,17.4945,0.4128,0.413);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#764932").s().p("AjTCyQhHhmAkhbQALgdAVgZQALgMAIgGQCGhyCAAfQBAAPAmAmQBnBNgPB0QgHA6gbAsg");
	this.shape_17.setTransform(58.7191,7.2531,0.4128,0.413);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6BEA6").s().p("AkxBHIBdgcIAgAHQAmAAAgglQAigkgGhTIgMhMIDFAAQggA6AQBHQAHAkAPAXIDEBKIiTBZIjaAOg");
	this.shape_18.setTransform(58.9392,32.3909,0.4129,0.413);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-78.9,0,78.9,0).ss(5).p("AriKFIAA0JQAAgnAcgbQAcgcAnAAIUIAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAbQgbAcgnAAI0IAAQgnAAgcgcQgcgbAAgng");
	this.shape_19.setTransform(59.02,34.5372,0.4129,0.4131);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AqDLjQgnAAgcgcQgcgbAAgnIAA0JQAAgnAcgbQAcgcAnAAIUIAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAbQgbAcgnAAg");
	this.shape_20.setTransform(59.02,34.5372,0.4129,0.4131);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAfAAIAAASQAJgNAFgEQAIgEAHAAQALAAAMAGIgLAeQgIgFgIAAQgIAAgEAEQgEADgDALQgDAKAAAgIAAAog");
	this.shape_21.setTransform(91.2404,77.031,0.4129,0.4131);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvAuQgNgSAAgbQAAgfARgSQARgTAZAAQAcAAARATQARAUgBAmIhVAAQAAAPAIAJQAJAIAKAAQAJAAAFgEQAFgFADgJIAiAFQgGATgPAKQgOAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQgBgPgHgIQgHgHgKAAQgLAAgHAIg");
	this.shape_22.setTransform(85.9155,77.093,0.4129,0.4131);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWBBIgWhSIgVBSIgiAAIgoiBIAhAAIAYBUIAXhUIAfAAIAWBUIAZhUIAhAAIgpCBg");
	this.shape_23.setTransform(79.0813,77.093,0.4129,0.4131);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghA8QgRgJgIgPQgIgQAAgVQAAgRAIgQQAJgQAQgIQAPgJASAAQAdAAATATQATAUAAAcQAAAdgTATQgTAUgdAAQgRAAgQgIgAgWgcQgJAKAAASQAAATAJALQAKAKAMAAQANAAAJgKQAJgLAAgTQAAgSgJgKQgJgLgNAAQgMAAgKALg");
	this.shape_24.setTransform(71.918,77.093,0.4129,0.4131);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRBZIAAiTIg1AAIAAgfICNAAIAAAfIg1AAIAACTg");
	this.shape_25.setTransform(66.3649,76.0707,0.4129,0.4131);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAgAAIAAASQAJgNAFgEQAGgEAIAAQAMAAALAGIgLAeQgHgFgJAAQgIAAgEAEQgDADgEALQgDAKABAgIAAAog");
	this.shape_26.setTransform(58.7267,77.031,0.4129,0.4131);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvAuQgNgTAAgaQAAgfARgSQARgTAaAAQAbAAASATQAQATgBAnIhUAAQAAAPAIAJQAIAIALAAQAIAAAFgEQAGgFACgJIAjAFQgHATgOAKQgOAKgWAAQggAAgRgWgAgRggQgHAHAAAPIAyAAQAAgOgHgJQgIgHgKAAQgKAAgIAIg");
	this.shape_27.setTransform(53.4019,77.093,0.4129,0.4131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFBWQgHgDgDgFQgEgFgCgJIgBgXIAAg4IgPAAIAAgcIAPAAIAAgZIAigUIAAAtIAYAAIAAAcIgYAAIAABFQABADACACQADABADABQAFAAAJgDIADAaQgLAFgQAAQgJAAgHgDg");
	this.shape_28.setTransform(48.8797,76.2152,0.4129,0.4131);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgoA5QgPgLgEgSIAigFQACAKAGAFQAIAFAKAAQANAAAIgFQAEgDAAgGQAAgEgDgCQgCgDgJgCQgpgKgLgHQgPgJAAgTQAAgRAOgLQANgMAbAAQAaAAANAJQAMAIAGASIghAGQgBgHgGgFQgGgEgKAAQgOAAgFAEQgEACAAAFQAAAEADACQAEADAcAHQAbAGAKAJQALAIAAAQQABASgPANQgPANgeAAQgZAAgQgLg");
	this.shape_29.setTransform(44.1523,77.093,0.4129,0.4131);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmA9QgLgGgEgLQgFgJAAgTIAAhRIAiAAIAAA7QAAAZACAIQADAHAEADQAFADAIAAQAIAAAHgFQAHgFACgHQADgHAAgbIAAg2IAiAAIAACAIggAAIAAgTQgGAKgMAGQgLAGgNAAQgMAAgLgFg");
	this.shape_30.setTransform(38.2586,77.1549,0.4129,0.4131);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQBZIAAiyIAhAAIAACyg");
	this.shape_31.setTransform(33.6963,76.0707,0.4129,0.4131);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2BFQgXgZAAgqQAAgsAXgYQAYgaAkAAQAhAAAUAUQAMALAGAWIgkAJQgDgOgKgJQgJgHgPgBQgTAAgNAPQgMAOABAgQgBAhAMAPQANAOASAAQAPAAAKgKQAKgJAFgTIAjALQgIAegTANQgTAPgcAAQgiAAgYgYg");
	this.shape_32.setTransform(28.5045,76.0707,0.4129,0.4131);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-144.7,0,144.7,0).ss(4).p("ASLEIMgkVAAAQhuAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBuAAMAkVAAAQBuAABNBOQBNBNAABsQAABthNBNQhNBOhuAAg");
	this.shape_33.setTransform(58.915,96.8918,0.4129,0.4131);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AyLEIQhtgBhNhNQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkWAAAQBuAABNBOQBNBNAABsQAABthNBNQhNBNhuABg");
	this.shape_34.setTransform(58.915,96.8918,0.4129,0.4131);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(4).p("AxgJmMAjCAAAQB+AABahZQBZhaAAh+IAApoQAAh/hZhZQhahah+AAMgjCAAAQh/AAhaBaQhZBaAAB+IAAJoQAAB+BZBaQBaBZB/AAg");
	this.shape_35.setTransform(58.915,82.4131,0.4129,0.4131);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#00B4A8","#00BAF2"],[0,1],142.7,0,-142.7,0).s().p("AxgJmQh/AAhahZQhZhaAAh+IAApoQAAh/BZhaQBahZB/AAMAjBAAAQB/AABZBZQBaBaAAB/IAAJoQAAB+haBaQhZBZh/AAg");
	this.shape_36.setTransform(58.915,82.4131,0.4129,0.4131);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#00CCCC").ss(8).p("AriKFIAA0JQAAgnAcgbQAcgcAnAAIUIAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAbQgbAcgnAAI0IAAQgnAAgcgcQgcgbAAgng");
	this.shape_37.setTransform(58.9847,23.3305,0.4824,0.4827);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#00CCCC").ss(7).p("ASLEIMgkVAAAQhuAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBuAAMAkVAAAQBuAABNBOQBNBNAABsQAABthNBNQhNBOhuAAg");
	this.shape_38.setTransform(58.8501,96.1864,0.4825,0.4827);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36,p:{scaleX:0.4129,scaleY:0.4131,x:58.915,y:82.4131}},{t:this.shape_35,p:{scaleX:0.4129,scaleY:0.4131,x:58.915,y:82.4131}},{t:this.shape_34,p:{scaleX:0.4129,scaleY:0.4131,x:58.915,y:96.8918}},{t:this.shape_33},{t:this.shape_32,p:{scaleX:0.4129,scaleY:0.4131,x:28.5045,y:76.0707}},{t:this.shape_31,p:{scaleX:0.4129,scaleY:0.4131,x:33.6963,y:76.0707}},{t:this.shape_30,p:{scaleX:0.4129,scaleY:0.4131,x:38.2586,y:77.1549}},{t:this.shape_29,p:{scaleX:0.4129,scaleY:0.4131,x:44.1523,y:77.093}},{t:this.shape_28,p:{scaleX:0.4129,scaleY:0.4131,x:48.8797,y:76.2152}},{t:this.shape_27,p:{scaleX:0.4129,scaleY:0.4131,x:53.4019,y:77.093}},{t:this.shape_26,p:{scaleX:0.4129,scaleY:0.4131,x:58.7267,y:77.031}},{t:this.shape_25,p:{scaleX:0.4129,scaleY:0.4131,x:66.3649,y:76.0707}},{t:this.shape_24,p:{scaleX:0.4129,scaleY:0.4131,x:71.918,y:77.093}},{t:this.shape_23,p:{scaleX:0.4129,scaleY:0.4131,x:79.0813,y:77.093}},{t:this.shape_22,p:{scaleX:0.4129,scaleY:0.4131,x:85.9155,y:77.093}},{t:this.shape_21,p:{scaleX:0.4129,scaleY:0.4131,x:91.2404,y:77.031}},{t:this.shape_20,p:{scaleX:0.4129,scaleY:0.4131,x:59.02,y:34.5372}},{t:this.shape_19},{t:this.shape_18,p:{scaleX:0.4129,scaleY:0.413,x:58.9392,y:32.3909}},{t:this.shape_17,p:{scaleX:0.4128,scaleY:0.413,x:58.7191,y:7.2531}},{t:this.shape_16,p:{scaleX:0.4128,scaleY:0.413,x:58.9763,y:17.4945}},{t:this.shape_15,p:{scaleX:0.4128,scaleY:0.413,x:55.9542,y:7.2686}},{t:this.shape_14,p:{scaleX:0.4129,scaleY:0.413,x:40.115,y:45.8147}},{t:this.shape_13,p:{scaleX:0.4129,scaleY:0.413,x:77.872,y:45.8043}},{t:this.shape_12,p:{scaleX:0.4129,scaleY:0.413,x:59.0528,y:44.5962}},{t:this.shape_11,p:{scaleX:0.4129,scaleY:0.413,x:68.6001,y:44.5962}},{t:this.shape_10,p:{scaleX:0.4129,scaleY:0.413,x:49.2887,y:44.6065}},{t:this.shape_9,p:{scaleX:0.4129,scaleY:0.4131,x:31.0262,y:96.663}},{t:this.shape_8,p:{scaleX:0.4129,scaleY:0.4131,x:36.0634,y:96.7766}},{t:this.shape_7,p:{scaleX:0.4129,scaleY:0.4131,x:40.3999,y:97.6234}},{t:this.shape_6,p:{scaleX:0.4129,scaleY:0.4131,x:46.3547,y:98.5425}},{t:this.shape_5,p:{scaleX:0.4129,scaleY:0.4131,x:52.259,y:96.6527}},{t:this.shape_4,p:{scaleX:0.4129,scaleY:0.4131,x:57.9787,y:97.6234}},{t:this.shape_3,p:{scaleX:0.4129,scaleY:0.4131,x:63.8095,y:97.5718}},{t:this.shape_2,p:{scaleX:0.4129,scaleY:0.4131,x:72.8208,y:96.6837}},{t:this.shape_1,p:{scaleX:0.4129,scaleY:0.4131,x:79.1689,y:96.6527}},{t:this.shape,p:{scaleX:0.4129,scaleY:0.4131,x:86.3015,y:96.7043}}]}).to({state:[{t:this.shape_36,p:{scaleX:0.4825,scaleY:0.4827,x:58.8501,y:79.269}},{t:this.shape_35,p:{scaleX:0.4825,scaleY:0.4827,x:58.8501,y:79.269}},{t:this.shape_34,p:{scaleX:0.4825,scaleY:0.4827,x:58.8501,y:96.1864}},{t:this.shape_38},{t:this.shape_32,p:{scaleX:0.4824,scaleY:0.4826,x:23.3358,y:71.8508}},{t:this.shape_31,p:{scaleX:0.4824,scaleY:0.4826,x:29.4021,y:71.8508}},{t:this.shape_30,p:{scaleX:0.4824,scaleY:0.4826,x:34.7327,y:73.1177}},{t:this.shape_29,p:{scaleX:0.4824,scaleY:0.4826,x:41.619,y:73.0453}},{t:this.shape_28,p:{scaleX:0.4824,scaleY:0.4826,x:47.1426,y:72.0197}},{t:this.shape_27,p:{scaleX:0.4824,scaleY:0.4826,x:52.4263,y:73.0453}},{t:this.shape_26,p:{scaleX:0.4824,scaleY:0.4826,x:58.648,y:72.9729}},{t:this.shape_25,p:{scaleX:0.4824,scaleY:0.4826,x:67.5725,y:71.8508}},{t:this.shape_24,p:{scaleX:0.4824,scaleY:0.4826,x:74.0609,y:73.0453}},{t:this.shape_23,p:{scaleX:0.4824,scaleY:0.4826,x:82.4306,y:73.0453}},{t:this.shape_22,p:{scaleX:0.4824,scaleY:0.4826,x:90.4158,y:73.0453}},{t:this.shape_21,p:{scaleX:0.4824,scaleY:0.4826,x:96.6375,y:72.9729}},{t:this.shape_20,p:{scaleX:0.4824,scaleY:0.4827,x:58.9847,y:23.3305}},{t:this.shape_37},{t:this.shape_18,p:{scaleX:0.4824,scaleY:0.4826,x:58.9022,y:20.8068}},{t:this.shape_17,p:{scaleX:0.4823,scaleY:0.4825,x:58.5923,y:-8.5767}},{t:this.shape_16,p:{scaleX:0.4823,scaleY:0.4825,x:58.8929,y:3.3887}},{t:this.shape_15,p:{scaleX:0.4823,scaleY:0.4825,x:55.3619,y:-8.5586}},{t:this.shape_14,p:{scaleX:0.4824,scaleY:0.4826,x:36.9076,y:36.4909}},{t:this.shape_13,p:{scaleX:0.4824,scaleY:0.4826,x:81.0237,y:36.4789}},{t:this.shape_12,p:{scaleX:0.4824,scaleY:0.4826,x:59.0349,y:35.0673}},{t:this.shape_11,p:{scaleX:0.4824,scaleY:0.4826,x:70.1902,y:35.0673}},{t:this.shape_10,p:{scaleX:0.4824,scaleY:0.4826,x:47.6263,y:35.0793}},{t:this.shape_9,p:{scaleX:0.4824,scaleY:0.4826,x:26.2423,y:95.9093}},{t:this.shape_8,p:{scaleX:0.4824,scaleY:0.4826,x:32.1277,y:96.042}},{t:this.shape_7,p:{scaleX:0.4824,scaleY:0.4826,x:37.1943,y:97.0314}},{t:this.shape_6,p:{scaleX:0.4824,scaleY:0.4826,x:44.1517,y:98.1052}},{t:this.shape_5,p:{scaleX:0.4824,scaleY:0.4826,x:51.0501,y:95.8972}},{t:this.shape_4,p:{scaleX:0.4824,scaleY:0.4826,x:57.7328,y:97.0314}},{t:this.shape_3,p:{scaleX:0.4824,scaleY:0.4826,x:64.5454,y:96.971}},{t:this.shape_2,p:{scaleX:0.4824,scaleY:0.4826,x:75.0739,y:95.9334}},{t:this.shape_1,p:{scaleX:0.4824,scaleY:0.4826,x:82.4909,y:95.8972}},{t:this.shape,p:{scaleX:0.4824,scaleY:0.4826,x:90.8245,y:95.9575}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-17.1,152.4,129.5);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#707070").s().p("AgiBRQgMgFgIgJQgIgKgCgJQgEgSAAgaIAAhaIAjAAIAABcIABAcQADALAIAGQAJAGANAAQAPAAAHgGQAIgGABgIQACgJAAgVIAAhdIAiAAIAABZQAAAfgDAMQgCANgIAJQgHAIgNAGQgNAFgUAAQgXAAgNgGg");
	this.shape.setTransform(84.7366,96.686,0.4129,0.413);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AAxBWIgPgnIhEAAIgOAnIglAAIBCirIAkAAIBFCrgAgYASIAvAAIgYg/g");
	this.shape_1.setTransform(77.6148,96.624,0.4129,0.413);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("Ag7BVIAAipIAiAAIAACMIBVAAIAAAdg");
	this.shape_2.setTransform(71.2672,96.6447,0.4129,0.413);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("AgQBWIAAh8IAgAAIAAB8gAgQg2IAAgfIAgAAIAAAfg");
	this.shape_3.setTransform(63.908,96.624,0.4129,0.413);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("AguA3QgLgLAAgQQAAgLAFgIQAFgIAJgDQAJgFARgDQAYgFAHgDIAAgDQAAgKgFgEQgFgEgLAAQgJAAgFAEQgEADgEAJIgegGQAGgSALgIQAMgJAZAAQAWAAAKAFQAKAFAFAIQAEAJAAAVIAAAlQAAASACAGQABAHAEAKIggAAIgEgNQgJAIgJAEQgIAEgMAAQgUAAgKgKgAAAAIQgOACgEADQgGAFAAAHQAAAHAFAFQAFAFAIAAQAIAAAIgGQAFgEADgHQABgEAAgMIAAgHIgTAGg");
	this.shape_4.setTransform(59.7691,97.5947,0.4129,0.413);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("AAiBWIgiiAIghCAIgmAAIgoirIAjAAIAaB1IAfh1IApAAIAeB3IAah3IAjAAIgqCrg");
	this.shape_5.setTransform(52.7196,96.624,0.4129,0.413);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#707070").s().p("AgPBWIAAh8IAfAAIAAB8gAgPg2IAAgfIAfAAIAAAfg");
	this.shape_6.setTransform(43.9257,96.624,0.4129,0.413);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#707070").s().p("AAYBWIAAhCQAAgUgCgEQgCgFgFgDQgFgDgHAAQgHAAgGAEQgHADgDAIQgDAIAAAPIAAA/IghAAIAAirIAhAAIAAA/QAQgSAVAAQANAAAIAEQAJAEAEAHQAFAFACAJQACAKAAAOIAABJg");
	this.shape_7.setTransform(39.5391,96.624,0.4129,0.413);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#707070").s().p("Ag0BBQgWgXAAgpQAAgpAXgYQAWgYAjAAQAgAAATATQAMALAFAUIgiAJQgDgNgKgJQgJgHgOAAQgSAAgMANQgMAPAAAeQAAAfAMAOQAMAOARAAQAOAAAKgJQAKgJAEgSIAiAKQgIAcgSAOQgRAOgcAAQghAAgXgYg");
	this.shape_8.setTransform(32.8921,96.624,0.4129,0.413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00E3FF").s().p("AiMEzIgDkdIgtkOIFFg6QABAZARDMIAiGAg");
	this.shape_9.setTransform(49.3241,44.5718,0.4128,0.413);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00E3FF").s().p("Ai8EzQA0pNAAgYIFFA6IgtEOIgDEdg");
	this.shape_10.setTransform(68.6333,44.5511,0.4128,0.413);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C7CCCC").s().p("AjTEzIAHjGIBqmeIBgAoIBggpIB2GfIAADGg");
	this.shape_11.setTransform(59.0871,44.5511,0.4128,0.413);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00C5FF").s().p("AhiEWIgFhQQgFgoAHhQQANieA1jFIAVARQAYAZAVAjQBEBvADCsIAEDDg");
	this.shape_12.setTransform(77.9042,45.7591,0.4128,0.413);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00C5FF").s().p("AhiEWIADjBQADisA/hwQAfg4AfgWQAzDFAMCfQAGBQgEAoIgFBPg");
	this.shape_13.setTransform(40.1411,45.7694,0.4128,0.413);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#895E3C").s().p("AixBTQgKgVAtgoQAtgmBKgjQBJgiA7gJQA7gKAKAWQAKAVgtAoQgtAmhKAiQhJAjg7AJQgSADgOAAQgeAAgHgPg");
	this.shape_14.setTransform(56.0416,7.2234,0.4128,0.4129);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FED9CC").s().p("AgGEYIAAgBQgjgCgfgSQgNgIgjglIgLgMQgUgQgTgoQgVgugHg5QgcgfgPgdQggg+A/AAIgBgPQAAg+AfgtQAzhKB7gDIAAgBIAGABIAGgBIAAABQCQAEAtBnQAXA0gGAzQA/AAgiBAQgRAfgdAgQgGA2gSAmQgLAZgQAQIgNAKQgsAwgPAJQgfASgjACIAAABg");
	this.shape_15.setTransform(59.0602,17.4435,0.4128,0.4129);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#895E3C").s().p("AjTCxQhHhlAkhbQAMgdAUgZQALgMAIgGQCGhyCAAfQBAAPAmAmQBnBMgPB0QgHA7gbArg");
	this.shape_16.setTransform(58.8076,7.2139,0.4128,0.4129);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6BEA6").s().p("AkwBGIBcgbIAgAHQAmgBAggkQAigkgGhTIgMhMIDFAAQghA6AQBHQAIAkAPAXIDEBKIiUBZIjZAOg");
	this.shape_17.setTransform(58.9839,32.3575,0.4128,0.413);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-78.9,0,78.9,0).ss(5).p("AriKFIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAcQgbAbgnAAI0JAAQgnAAgbgbQgcgcAAgng");
	this.shape_18.setTransform(59.054,34.5323,0.4129,0.4131);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AqELjQgnAAgbgbQgcgcAAgnIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAcQgbAbgnAAg");
	this.shape_19.setTransform(59.054,34.5323,0.4129,0.4131);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAgAAIAAASQAIgOAGgDQAHgFAHABQALgBAMAHIgKAeQgKgFgGgBQgIAAgFAEQgEAFgCAKQgEAKAAAhIAAAng");
	this.shape_20.setTransform(84.6448,76.9927,0.4128,0.413);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvAuQgNgSAAgbQAAgfARgSQARgTAaAAQAcAAAQAUQARASgBAnIhVAAQABAQAIAIQAIAIALAAQAHAAAGgEQAFgEADgKIAjAGQgHATgOAJQgOAKgWAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgOgHgJQgIgHgKAAQgKAAgIAIg");
	this.shape_21.setTransform(79.3204,77.0443,0.4128,0.413);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWBBIgWhSIgVBSIghAAIgqiBIAiAAIAYBUIAWhUIAhAAIAVBUIAZhUIAiAAIgqCBg");
	this.shape_22.setTransform(72.4973,77.0546,0.4128,0.413);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghA8QgQgIgIgQQgJgPAAgWQAAgSAJgPQAIgPAPgJQAQgJASAAQAeAAASAUQATASAAAdQAAAegTATQgTATgdAAQgRAAgQgIgAgVgcQgKAKAAASQAAAUAKAKQAJAKAMAAQAOAAAJgKQAJgLAAgTQAAgSgJgKQgJgLgOAAQgMAAgJALg");
	this.shape_23.setTransform(65.3348,77.0443,0.4128,0.413);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRBZIAAiTIg1AAIAAgfICNAAIAAAfIg1AAIAACTg");
	this.shape_24.setTransform(59.7823,76.0427,0.4128,0.413);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA9BdIgYgQQgRAIgVAAQgqAAgXgZQgXgXAAgrQAAgsAXgZQAYgYAoAAQAnAAAXAYQAXAZAAAsQAAAXgGAQQgFAOgLAMQAOAKAPAFIgNAaIgQgHgAgmg1QgOAQAAAfQAAAeAOAPQAOAQAVAAQAGAAAHgCQgKgJgLgDIAKgUQAQAFARANQAHgIAEgMQADgLAAgOQAAgggNgPQgPgPgUAAQgWAAgOAPg");
	this.shape_25.setTransform(49.8951,76.3525,0.4128,0.413);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhEBZIAAiyIA7AAQAhAAAJADQAOADALAPQALANAAAWQgBAQgGALQgGALgJAGQgKAHgJABQgMADgYAAIgYAAIAABDgAgggIIAUAAQAVAAAHgDQAIgDADgFQAEgGAAgIQAAgKgFgGQgGgGgJgCQgHgCgSABIgSAAg");
	this.shape_26.setTransform(42.4332,76.0427,0.4128,0.413);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag2BEQgXgXAAgrQAAgtAXgYQAXgYAkgBQAhABAVASQAMAMAGAWIgkAIQgCgOgLgIQgLgIgNAAQgTAAgMAOQgNAPAAAfQAAAiANAOQALAOATAAQAPABAKgKQALgKAEgSIAjAKQgIAegTAOQgTAPgdAAQgiAAgXgZg");
	this.shape_27.setTransform(35.1056,76.0427,0.4128,0.413);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-144.7,0,144.7,0).ss(4).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhtBNhMQBNhOBtAAMAkXAAAQBtAABNBOQBNBMAABtQAABthNBNQhNBOhtAAg");
	this.shape_28.setTransform(58.9169,96.8972,0.4129,0.4131);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AyLEHQhtAAhNhMQhNhOAAhtQAAhsBNhOQBNhNBtABMAkXAAAQBtgBBNBNQBNBOAABsQAABthNBOQhNBMhtAAg");
	this.shape_29.setTransform(58.9169,96.8972,0.4129,0.4131);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(4).p("AxhJmMAjCAAAQB/AABahaQBZhZAAh/IAApoQAAh+hZhaQhahZh/AAMgjCAAAQh+AAhaBZQhZBaAAB+IAAJoQAAB/BZBZQBaBaB+AAg");
	this.shape_30.setTransform(58.9169,82.4186,0.4129,0.4131);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#00B4A8","#00BAF2"],[0,1],142.7,0,-142.7,0).s().p("AxhJmQh+AAhahZQhZhaAAh/IAApoQAAh+BZhaQBahZB+AAMAjCAAAQB/AABaBZQBZBaAAB+IAAJoQAAB/hZBaQhaBZh/AAg");
	this.shape_31.setTransform(58.9169,82.4186,0.4129,0.4131);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#00CCCC").ss(8).p("AriKFIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAcQgbAbgnAAI0JAAQgnAAgbgbQgcgcAAgng");
	this.shape_32.setTransform(59.0773,23.632,0.4742,0.4744);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#00CCCC").ss(7).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhtBNhMQBNhOBtAAMAkXAAAQBtAABNBOQBNBMAABtQAABthNBNQhNBOhtAAg");
	this.shape_33.setTransform(58.9016,95.2467,0.4742,0.4744);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31,p:{scaleX:0.4129,scaleY:0.4131,x:58.9169,y:82.4186}},{t:this.shape_30,p:{scaleX:0.4129,scaleY:0.4131,x:58.9169,y:82.4186}},{t:this.shape_29,p:{scaleX:0.4129,scaleY:0.4131,x:58.9169,y:96.8972}},{t:this.shape_28},{t:this.shape_27,p:{scaleX:0.4128,scaleY:0.413,x:35.1056,y:76.0427}},{t:this.shape_26,p:{scaleX:0.4128,scaleY:0.413,x:42.4332,y:76.0427}},{t:this.shape_25,p:{scaleX:0.4128,scaleY:0.413,x:49.8951,y:76.3525}},{t:this.shape_24,p:{scaleX:0.4128,scaleY:0.413,x:59.7823,y:76.0427}},{t:this.shape_23,p:{scaleX:0.4128,scaleY:0.413,x:65.3348,y:77.0443}},{t:this.shape_22,p:{scaleX:0.4128,scaleY:0.413,x:72.4973,y:77.0546}},{t:this.shape_21,p:{scaleX:0.4128,scaleY:0.413,x:79.3204,y:77.0443}},{t:this.shape_20,p:{scaleX:0.4128,scaleY:0.413,x:84.6448,y:76.9927}},{t:this.shape_19,p:{scaleX:0.4129,scaleY:0.4131,x:59.054,y:34.5323}},{t:this.shape_18},{t:this.shape_17,p:{scaleX:0.4128,scaleY:0.413,x:58.9839,y:32.3575}},{t:this.shape_16,p:{scaleX:0.4128,scaleY:0.4129,x:58.8076,y:7.2139}},{t:this.shape_15,p:{scaleX:0.4128,scaleY:0.4129,x:59.0602,y:17.4435}},{t:this.shape_14,p:{scaleX:0.4128,scaleY:0.4129,x:56.0416,y:7.2234}},{t:this.shape_13,p:{scaleX:0.4128,scaleY:0.413,x:40.1411,y:45.7694}},{t:this.shape_12,p:{scaleX:0.4128,scaleY:0.413,x:77.9042,y:45.7591}},{t:this.shape_11,p:{scaleX:0.4128,scaleY:0.413,x:59.0871,y:44.5511}},{t:this.shape_10,p:{scaleX:0.4128,scaleY:0.413,x:68.6333,y:44.5511}},{t:this.shape_9,p:{scaleX:0.4128,scaleY:0.413,x:49.3241,y:44.5718}},{t:this.shape_8,p:{scaleX:0.4129,scaleY:0.413,x:32.8921,y:96.624}},{t:this.shape_7,p:{scaleX:0.4129,scaleY:0.413,x:39.5391,y:96.624}},{t:this.shape_6,p:{scaleX:0.4129,scaleY:0.413,x:43.9257,y:96.624}},{t:this.shape_5,p:{scaleX:0.4129,scaleY:0.413,x:52.7196,y:96.624}},{t:this.shape_4,p:{scaleX:0.4129,scaleY:0.413,x:59.7691,y:97.5947}},{t:this.shape_3,p:{scaleX:0.4129,scaleY:0.413,x:63.908,y:96.624}},{t:this.shape_2,p:{scaleX:0.4129,scaleY:0.413,x:71.2672,y:96.6447}},{t:this.shape_1,p:{scaleX:0.4129,scaleY:0.413,x:77.6148,y:96.624}},{t:this.shape,p:{scaleX:0.4129,scaleY:0.413,x:84.7366,y:96.686}}]}).to({state:[{t:this.shape_31,p:{scaleX:0.4742,scaleY:0.4744,x:58.9016,y:78.618}},{t:this.shape_30,p:{scaleX:0.4742,scaleY:0.4744,x:58.9016,y:78.618}},{t:this.shape_29,p:{scaleX:0.4742,scaleY:0.4744,x:58.9016,y:95.2467}},{t:this.shape_33},{t:this.shape_27,p:{scaleX:0.4742,scaleY:0.4744,x:31.5788,y:71.3259}},{t:this.shape_26,p:{scaleX:0.4742,scaleY:0.4744,x:39.9953,y:71.3259}},{t:this.shape_25,p:{scaleX:0.4742,scaleY:0.4744,x:48.5658,y:71.6817}},{t:this.shape_24,p:{scaleX:0.4742,scaleY:0.4744,x:59.9221,y:71.3259}},{t:this.shape_23,p:{scaleX:0.4742,scaleY:0.4744,x:66.2997,y:72.4763}},{t:this.shape_22,p:{scaleX:0.4742,scaleY:0.4744,x:74.5265,y:72.4882}},{t:this.shape_21,p:{scaleX:0.4742,scaleY:0.4744,x:82.3634,y:72.4763}},{t:this.shape_20,p:{scaleX:0.4742,scaleY:0.4744,x:88.4788,y:72.417}},{t:this.shape_19,p:{scaleX:0.4742,scaleY:0.4744,x:59.0773,y:23.632}},{t:this.shape_32},{t:this.shape_17,p:{scaleX:0.4742,scaleY:0.4743,x:59.0072,y:21.1412}},{t:this.shape_16,p:{scaleX:0.4741,scaleY:0.4743,x:58.799,y:-7.7241}},{t:this.shape_15,p:{scaleX:0.4741,scaleY:0.4743,x:59.0892,y:4.0259}},{t:this.shape_14,p:{scaleX:0.4741,scaleY:0.4743,x:55.622,y:-7.7132}},{t:this.shape_13,p:{scaleX:0.4742,scaleY:0.4743,x:37.3645,y:36.5457}},{t:this.shape_12,p:{scaleX:0.4742,scaleY:0.4743,x:80.739,y:36.5338}},{t:this.shape_11,p:{scaleX:0.4742,scaleY:0.4743,x:59.1257,y:35.1464}},{t:this.shape_10,p:{scaleX:0.4742,scaleY:0.4743,x:70.0905,y:35.1464}},{t:this.shape_9,p:{scaleX:0.4742,scaleY:0.4743,x:47.912,y:35.1701}},{t:this.shape_8,p:{scaleX:0.4742,scaleY:0.4744,x:29.0326,y:94.9382}},{t:this.shape_7,p:{scaleX:0.4742,scaleY:0.4744,x:36.6671,y:94.9382}},{t:this.shape_6,p:{scaleX:0.4742,scaleY:0.4744,x:41.7055,y:94.9382}},{t:this.shape_5,p:{scaleX:0.4742,scaleY:0.4744,x:51.8059,y:94.9382}},{t:this.shape_4,p:{scaleX:0.4742,scaleY:0.4744,x:59.9028,y:96.053}},{t:this.shape_3,p:{scaleX:0.4742,scaleY:0.4744,x:64.6566,y:94.9382}},{t:this.shape_2,p:{scaleX:0.4742,scaleY:0.4744,x:73.1092,y:94.962}},{t:this.shape_1,p:{scaleX:0.4742,scaleY:0.4744,x:80.4,y:94.9382}},{t:this.shape,p:{scaleX:0.4742,scaleY:0.4744,x:88.5799,y:95.0094}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-16.1,142.4,127.4);


(lib.LINE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#BCBCBC").ss(6).p("Egh7AR3MAAAgjsQAAjeCdidQCcidDeAAMAzJAAAQDdAACdCdQCdCdAADdMAAAAjtQAADdidCdQidCdjdAAMgzJAAAQjeAAicidQididAAjdg");
	this.shape.setTransform(1093.9643,238.2137,0.4129,0.4129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBCBC").ss(6).p("AMcPBI44AAQhEAAgwgwQgvgwAAhEIAA44QAAhEAvgxQAwgvBEAAIY4AAQBFAAAwAvQAvAxAABEIAAY4QAABEgvAwQgwAwhFAAg");
	this.shape_1.setTransform(470.3627,235.096,0.4129,0.4129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBCBC").ss(6).p("AMcPBI43AAQhEAAgwgwQgwgwAAhEIAA44QAAhEAwgxQAwgvBEAAIY3AAQBEAAAwAvQAwAxAABEIAAY4QAABEgwAwQgwAwhEAAg");
	this.shape_2.setTransform(326.7961,235.096,0.4129,0.4129);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBCBC").ss(6).p("AMcPBI44AAQhEAAgwgwQgvgwAAhEIAA44QAAhEAvgxQAwgvBEAAIY4AAQBFAAAwAvQAvAxAABEIAAY4QAABEgvAwQgwAwhFAAg");
	this.shape_3.setTransform(613.7538,235.096,0.4129,0.4129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBCBC").ss(6).p("AMcPAI44AAQhEAAgwgwQgvgwAAhEIAA43QAAhEAvgwQAwgwBEAAIY4AAQBFAAAvAwQAwAwAABEIAAY3QAABEgwAwQgvAwhFAAg");
	this.shape_4.setTransform(757.1449,235.2509,0.4129,0.4129);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBCBC").ss(6).p("AMcPAI43AAQhEAAgwgwQgwgwAAhEIAA43QAAhEAwgwQAwgwBEAAIY3AAQBEAAAwAwQAwAwAABEIAAY3QAABEgwAwQgwAwhEAAg");
	this.shape_5.setTransform(900.5257,235.2509,0.4129,0.4129);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBCBC").ss(6).p("AMcPAI44AAQhEAAgwgwQgwgwAAhEIAA43QAAhEAwgwQAwgwBEAAIY4AAQBEAAAxAwQAvAwAABEIAAY3QAABEgvAwQgxAwhEAAg");
	this.shape_6.setTransform(183.2295,235.1683,0.4129,0.4129);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBCBC").ss(6).p("AMcPAI43AAQhEAAgxgwQgvgwAAhEIAA43QAAhEAvgwQAxgwBEAAIY3AAQBEAAAxAwQAwAwAABEIAAY3QAABEgwAwQgxAwhEAAg");
	this.shape_7.setTransform(39.6732,235.1683,0.4129,0.4129);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBCBC").ss(6).p("AQOTMMggbAAAQhEAAgwgwQgwgwAAhEMAAAghPQAAhEAwgwQAwgwBEAAMAgbAAAQBEAAAwAwQAwAwAABEMAAAAhPQAABEgwAwQgwAwhEAAg");
	this.shape_8.setTransform(470.404,50.6697,0.4129,0.4129);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBCBC").ss(6).p("AMIAAI4PAA");
	this.shape_9.setTransform(972.2212,228.7575,0.4129,0.4129);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBCBC").ss(6).p("AAAkPIAAIf");
	this.shape_10.setTransform(183.0643,184.1917,0.4129,0.4129);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBCBC").ss(6).p("AAAEQIAAof");
	this.shape_11.setTransform(326.6206,184.1917,0.4129,0.4129);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBCBC").ss(6).p("AAAEYIAAov");
	this.shape_12.setTransform(613.7538,183.8613,0.4129,0.4129);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBCBC").ss(6).p("AADEjIgFpF");
	this.shape_13.setTransform(756.8662,183.9646,0.4129,0.4129);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBCBC").ss(6).p("EijKAErIAAiEQAAiqB5h5QB5h5CqAAME5cgAXQCrAAB5B5QB5B5AACpIAACc");
	this.shape_14.setTransform(471.0027,183.087,0.4129,0.4129);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBCBC").ss(6).p("AAAyPMAAAAkg");
	this.shape_15.setTransform(470.1769,147.1825,0.4129,0.4129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LINE, new cjs.Rectangle(-3,-3,1189.7,313.5), null);


(lib.ITPSChiefLeader = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F5BE56").s().p("AiBA3Qg2gXAAggQAAgfA2gXQA1gXBMABQBMgBA3AXQA2AXAAAfQAAAgg2AXQg3AWhMAAQhMAAg1gWg");
	this.shape.setTransform(74.683,8.1155,0.4129,0.4129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007EFF").s().p("Ai2FuIgDk1Igzk1IGchxQAAAfA9K8g");
	this.shape_1.setTransform(62.1528,56.3682,0.4129,0.4129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007EFF").s().p("AjtFuIApnPQAUjuABgeIGcBxIg0E1IgCE1g");
	this.shape_2.setTransform(87.0687,56.3682,0.4129,0.4129);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEB562").s().p("AgwFUIAOnmIgTg0IAAAAIA1iMIA2CMIgPA0IAMHmg");
	this.shape_3.setTransform(74.683,57.4519,0.4129,0.4129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A3EEEC").s().p("AkPFuIAAjGICYoVIB8A1IB7g0ICJIUIAGDGg");
	this.shape_4.setTransform(74.4972,56.3475,0.4129,0.4129);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0039FF").s().p("AiEE2IgBgIQgBgzAMhnQAYjLBFj+IAZAXQAcAfAZAtQBPCPAEDfIACCag");
	this.shape_5.setTransform(97.7789,58.6905,0.4129,0.4129);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0039FF").s().p("AiFE2IADiaQAEjfBPiPQAnhIAmgbQBFD+AYDLQANBngCAzIgBAIg");
	this.shape_6.setTransform(51.1146,58.6905,0.4129,0.4129);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8DECB").s().p("AhZFfQhNhdgcgoQguhCgKhYIADgfQg2gKgFgPQgGgJgDgJQgFgRADgpQADgrAYAGQAMADALAMQAGgzAXg9QAahFAlgwQBhh+B4BUQAuAgBBArQAvAgATAUQAoAoAHBeIAZgQQAagGACArQACAagIAfIgGAUQgEAKgkAeQgHBOgvBJQhKBhguBBQgcAZglAMQgWAHgRAAQgvAAgfgsg");
	this.shape_7.setTransform(74.5975,22.1811,0.4129,0.4129);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6BEA6").s().p("AjJDZIi/hyID9hfQATgeAKguQAVhcgqhKID9AAIgQBhQgHBrArAvQAqAvAxABQAZAAAQgJIB3AjIk6CQg");
	this.shape_8.setTransform(74.6727,41.8562,0.4129,0.4129);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5BE56").s().p("AgsGrQgggGgfgKIgZgKQgXglhBiWIg8iPQgOgXgOhNIgMhKQAAiPBFhOQAignAigKQApgaA9gTQAfgJAWgEIAdAAQAlACAlAGQB1ATBCA7QBQBJgWC7QgKBdgbBPQgOAvhFCLIhCCBQgzAehCAAQgaAAgfgFg");
	this.shape_9.setTransform(74.6567,17.8344,0.4129,0.4129);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#37FFFD","#0076FF"],[0,1],-97.4,0,97.5,0).ss(5).p("AucM/IAA59QAAgnAcgbQAbgcAoAAIZ8AAQAnAAAcAcQAbAbAAAnIAAZ9QAAAmgbAdQgcAbgnAAI58AAQgoAAgbgbQgcgdAAgmg");
	this.shape_10.setTransform(74.3476,43.0543,0.4129,0.4129);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("As9OdQgoAAgbgcQgcgbAAgnIAA59QAAgnAcgbQAbgcAoAAIZ8AAQAnAAAcAcQAbAbAAAnIAAZ9QAAAngbAbQgcAcgnAAg");
	this.shape_11.setTransform(74.3476,43.0543,0.4129,0.4129);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#707070").s().p("AhBBrIgEggQAJABAIAAQAQAAAGgIQAHgIAEgNIg8icIAsAAIAkBuIAkhuIArAAIhBCwQgEAOgGAHQgEAHgGAFQgGAEgKADQgKACgLABQgLgBgMgCg");
	this.shape_12.setTransform(106.3487,124.1101,0.4129,0.4129);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#707070").s().p("Ag4A3QgQgVAAghQAAgmAUgVQAVgWAeAAQAiAAAUAXQAVAXgCAuIhmAAQABATAJAKQAKAKANAAQAJAAAHgGQAGgFAEgMIApAHQgIAXgRAMQgQALgaAAQgpAAgSgagAgUgnQgJAKAAARIA9AAQgBgSgJgJQgJgKgMAAQgMAAgJAKg");
	this.shape_13.setTransform(99.4757,122.7991,0.4129,0.4129);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#707070").s().p("AgTBrIAAjVIAnAAIAADVg");
	this.shape_14.setTransform(94.3741,121.581,0.4129,0.4129);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#707070").s().p("AgvBFQgTgNgGgWIAqgHQADAMAHAHQAJAGANAAQAQAAAIgGQAFgEAAgHQAAgEgCgEQgFgDgJgCQgygMgMgIQgTgMAAgWQAAgVAQgNQAQgOAiAAQAfAAAPAKQAQAMAFATIgmAHQgDgJgHgFQgHgFgMAAQgPAAgIAFQgFADAAAFQAAAFAEADQAFADAhAIQAgAIAOALQANAKAAATQAAAWgSAPQgSAPgjAAQgfAAgSgMg");
	this.shape_15.setTransform(89.0371,122.7991,0.4129,0.4129);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#707070").s().p("AANAhIAAghQAAgJgCgDQgBgDgCgCQgDgCgDAAQgDAAgEADQgEACgBAEQgBAEAAAKIAAAdIgRAAIAAg/IAQAAIAAAJQAIgLAMAAQAFAAAFACQAFACACADIADAIIABALIAAAng");
	this.shape_16.setTransform(81.975,122.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#707070").s().p("Ag6BEQgOgNAAgTQAAgNAGgLQAHgLALgEQAOgGATgDQAfgHAIgEIAAgEQAAgLgGgGQgHgFgOAAQgLAAgGAFQgGAEgEALIgmgHQAGgWAQgLQAQgLAeAAQAZAAAPAGQANAHAGAKQAFALAAAaIAAAvQAAAWACAIQABAKAGALIgpAAIgFgRQgKAKgNAFQgKAFgOAAQgZAAgNgNgAAAAKQgSAEgFADQgIAGAAAIQAAAJAHAGQAGAGAKAAQALAAAJgHQAIgGACgHQACgFAAgQIAAgIIgYAHg");
	this.shape_17.setTransform(74.7502,122.7991,0.4129,0.4129);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#707070").s().p("AhKBqIAAjTIAqAAIAACvIBrAAIAAAkg");
	this.shape_18.setTransform(67.8028,121.612,0.4129,0.4129);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#707070").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_19.setTransform(58.5844,121.581,0.4129,0.4129);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#707070").s().p("AgUBrIAAiaIApAAIAACagAgUhEIAAgmIApAAIAAAmg");
	this.shape_20.setTransform(55.1469,121.581,0.4129,0.4129);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#707070").s().p("AAeBrIAAhSQAAgXgDgHQgCgGgGgEQgGgEgJAAQgIAAgJAFQgIAFgEAJQgEALAAATIAABNIgpAAIAAjVIApAAIAABPQAVgYAaAAQANAAANAGQALAFAGAIQAFAIADAKQACAJAAAVIAABbg");
	this.shape_21.setTransform(49.6447,121.581,0.4129,0.4129);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#707070").s().p("AhRBrIAAjVIBGAAQAmAAAMADQATAFAMAQQAMAQAAAaQAAAVgHAMQgGAMgMAIQgMAIgKACQgQADgcAAIgdAAIAABRgAgmgJIAYAAQAYAAAJgDQAJgEAFgHQAFgHAAgKQAAgMgHgHQgHgIgLgBQgHgCgXAAIgVAAg");
	this.shape_22.setTransform(41.8612,121.581,0.4129,0.4129);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxBPIAAiaIAmAAIAAAWQAJgPAIgFQAHgGAKAAQAPABAMAHIgMAkQgKgHgKAAQgIAAgGAFQgFAFgEANQgDALAAAoIAAAvg");
	this.shape_23.setTransform(124.7534,96.8067,0.4129,0.4129);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag5A3QgPgVAAghQAAgmAUgVQAVgWAeAAQAiAAAUAXQAUAWgBAvIhmAAQABATAJAJQAKALANAAQAJAAAHgGQAGgFAEgMIApAHQgIAXgRAMQgRALgaAAQgoAAgTgagAgUgnQgJAKAAARIA8AAQAAgSgJgJQgJgKgMAAQgNAAgIAKg");
	this.shape_24.setTransform(118.365,96.879,0.4129,0.4129);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag4BYQgTgWAAgnQAAgmATgVQATgUAcgBQAZABATAVIAAhNIApAAIAADVIgmAAIAAgWQgLAOgMAGQgMAGgNAAQgbAAgTgVgAgXgKQgKALAAAXQAAAZAHALQAKAQARABQAOgBAKgMQAKgLAAgZQAAgbgKgKQgJgMgPAAQgOAAgKALg");
	this.shape_25.setTransform(111.0455,95.7332,0.4129,0.4129);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag6BEQgOgMAAgVQAAgNAGgKQAIgLAKgEQAJgFAYgFQAagFAMgFIAAgEQABgLgHgGQgFgFgQAAQgKAAgHAFQgGAFgEAKIglgHQAHgXAPgKQAPgLAeAAQAbAAAOAGQAOAHAEAKQAGALAAAaIAAAvQAAAWACAIQACAJAFAMIgpAAIgEgMIgBgFQgLAKgMAFQgKAFgPAAQgYAAgNgNgAgBAJQgQAEgGAEQgIAFAAAJQAAAJAHAGQAGAGAKAAQAKAAAKgHQAIgGACgIQABgFAAgPIAAgIQgNAEgLACg");
	this.shape_26.setTransform(103.9748,96.879,0.4129,0.4129);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAXQgGgJAAgNQAAgQAIgIQAJgKAMAAQAOAAAIAKQAIAJAAATIgqAAQABAIADAEQAFAEAEAAQAEAAADgCQACgCACgFIARADQgDAJgHAFQgIAFgKAAQgQAAgIgLgAgIgPQgDAEAAAHIAYAAQAAgIgEgEQgDgEgGAAQgEAAgEAFg");
	this.shape_27.setTransform(97.0015,96.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhLBqIAAjUIAsAAIAACwIBqAAIAAAkg");
	this.shape_28.setTransform(90.1225,95.6919,0.4129,0.4129);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdBtIAAh6IgXAAIAAggIAXAAIAAgMQAAgTAEgKQAEgJAMgHQAKgGARAAQARAAARAFIgFAdQgIgCgLAAQgIAAgFAEQgEAEAAAMIAAALIAfAAIAAAgIgfAAIAAB6g");
	this.shape_29.setTransform(80.8118,95.5784,0.4129,0.4129);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag4A3QgQgVAAghQAAgmAUgVQAVgWAfAAQAhAAAUAXQAVAXgBAuIhnAAQABASAJAKQAKALANAAQAJAAAHgGQAHgFADgMIApAHQgHAXgSAMQgRALgZAAQgoAAgTgagAgUgnQgJAJAAASIA9AAQgBgSgJgJQgIgKgNAAQgMAAgJAKg");
	this.shape_30.setTransform(75.0014,96.879,0.4129,0.4129);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUBrIAAiaIApAAIAACagAgUhEIAAgmIApAAIAAAmg");
	this.shape_31.setTransform(69.9013,95.661,0.4129,0.4129);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAdBrIAAhSQAAgZgCgFQgCgGgGgEQgHgEgIAAQgJAAgIAFQgIAFgEAJQgEAJAAAUIAABOIgpAAIAAjVIApAAIAABPQAUgYAbAAQANAAAMAGQAMAFAGAIQAGAKACAIQACANAAARIAABbg");
	this.shape_32.setTransform(64.4099,95.661,0.4129,0.4129);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhBBSQgcgdABgzQgBg1AcgdQAcgeAsAAQAnAAAZAXQAOAOAIAaIgrAKQgEgQgMgKQgLgKgSAAQgXAAgPARQgPASAAAmQAAAoAPARQAOARAXAAQARAAANgLQANgLAFgYIAqAOQgKAkgXAQQgXARghAAQgqAAgcgdg");
	this.shape_33.setTransform(56.1005,95.661,0.4129,0.4129);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag8BcQgWgSgEgkIAqgFQAEAVAMALQALAKATAAQAVAAAKgJQALgJAAgMQAAgHgEgGQgEgFgMgEIgigKQgjgIgOgMQgTgSAAgZQAAgQAJgPQAKgOARgIQARgHAZAAQAoAAAUASQAVASAAAdIgrACQgCgRgKgHQgJgHgRAAQgTAAgLAIQgHAEAAAJQAAAIAHAFQAGAGAgAIQAhAIAOAIQAQAIAIANQAIANAAAVQAAATgKAPQgKARgTAHQgSAIgdAAQgnAAgWgTg");
	this.shape_34.setTransform(43.9926,95.661,0.4129,0.4129);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhRBrIAAjVIBFAAQAnAAAMADQATAFAMAQQAMAQAAAaQAAATgHAOQgIANgKAHQgMAIgLACQgPADgdAAIgcAAIAABRgAgmgJIAYAAQAYAAAJgDQAJgEAFgHQAFgIAAgJQAAgLgHgIQgHgHgLgDQgHgBgXAAIgVAAg");
	this.shape_35.setTransform(35.9826,95.661,0.4129,0.4129);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVBrIAAixIg/AAIAAgkICpAAIAAAkIg/AAIAACxg");
	this.shape_36.setTransform(27.9106,95.661,0.4129,0.4129);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVBrIAAjVIArAAIAADVg");
	this.shape_37.setTransform(22.4192,95.661,0.4129,0.4129);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#37FFFD","#0076FF"],[0,1],-180.6,0,180.6,0).ss(4).p("AXIFKMguPAAAQh/AAhahaQhZhZAAh/IAAgvQAAh+BZhaQBahaB/AAMAuPAAAQB/AABaBaQBZBaAAB+IAAAvQAAB/hZBZQhaBah/AAg");
	this.shape_38.setTransform(73.7179,121.8701,0.4129,0.4129);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A3HFKQh/AAhahaQhZhZAAh/IAAgvQAAh+BZhaQBahaB/AAMAuPAAAQB/AABaBaQBZBaAAB+IAAAvQAAB/hZBZQhaBah/AAg");
	this.shape_39.setTransform(73.7179,121.8701,0.4129,0.4129);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(4).p("A3HMAMAuPAAAQB/AABahZQBZhaAAh+IAAucQAAh/hZhaQhahZh/AAMguPAAAQh/AAhaBZQhZBaAAB/IAAOcQAAB+BZBaQBaBZB/AAg");
	this.shape_40.setTransform(73.7179,103.7636,0.4129,0.4129);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#37FFFD","#0076FF"],[0,1],178.6,0,-178.6,0).s().p("A3HMAQh/AAhahZQhZhaAAh+IAAucQAAh/BZhaQBahZB/AAMAuPAAAQB/AABaBZQBZBaAAB/IAAOcQAAB+hZBaQhaBZh/AAg");
	this.shape_41.setTransform(73.7179,103.7636,0.4129,0.4129);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0000FF").ss(8).p("AucM/IAA59QAAgnAcgbQAbgcAoAAIZ8AAQAnAAAcAcQAbAbAAAnIAAZ9QAAAmgbAdQgcAbgnAAI58AAQgoAAgbgbQgcgdAAgmg");
	this.shape_42.setTransform(74.1007,36.9367,0.5165,0.5165);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0000FF").ss(10).p("AXIFKMguPAAAQh/AAhahaQhZhZAAh/IAAgvQAAh+BZhaQBahaB/AAMAuPAAAQB/AABaBaQBZBaAAB+IAAAvQAAB/hZBZQhaBah/AAg");
	this.shape_43.setTransform(73.2937,135.5228,0.5165,0.5165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41,p:{scaleX:0.4129,scaleY:0.4129,x:73.7179,y:103.7636}},{t:this.shape_40,p:{scaleX:0.4129,scaleY:0.4129,x:73.7179,y:103.7636}},{t:this.shape_39,p:{scaleX:0.4129,scaleY:0.4129,x:73.7179,y:121.8701}},{t:this.shape_38},{t:this.shape_37,p:{scaleX:0.4129,scaleY:0.4129,x:22.4192,y:95.661}},{t:this.shape_36,p:{scaleX:0.4129,scaleY:0.4129,x:27.9106,y:95.661}},{t:this.shape_35,p:{scaleX:0.4129,scaleY:0.4129,x:35.9826,y:95.661}},{t:this.shape_34,p:{scaleX:0.4129,scaleY:0.4129,x:43.9926,y:95.661}},{t:this.shape_33,p:{scaleX:0.4129,scaleY:0.4129,x:56.1005,y:95.661}},{t:this.shape_32,p:{scaleX:0.4129,scaleY:0.4129,x:64.4099,y:95.661}},{t:this.shape_31,p:{scaleX:0.4129,scaleY:0.4129,x:69.9013,y:95.661}},{t:this.shape_30,p:{scaleX:0.4129,scaleY:0.4129,x:75.0014,y:96.879}},{t:this.shape_29,p:{scaleX:0.4129,scaleY:0.4129,x:80.8118,y:95.5784}},{t:this.shape_28,p:{scaleX:0.4129,scaleY:0.4129,x:90.1225,y:95.6919}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:97.0015,y:96.875}},{t:this.shape_26,p:{scaleX:0.4129,scaleY:0.4129,x:103.9748,y:96.879}},{t:this.shape_25,p:{scaleX:0.4129,scaleY:0.4129,x:111.0455,y:95.7332}},{t:this.shape_24,p:{scaleX:0.4129,scaleY:0.4129,x:118.365,y:96.879}},{t:this.shape_23,p:{scaleX:0.4129,scaleY:0.4129,x:124.7534,y:96.8067}},{t:this.shape_22,p:{scaleX:0.4129,scaleY:0.4129,x:41.8612,y:121.581}},{t:this.shape_21,p:{scaleX:0.4129,scaleY:0.4129,x:49.6447,y:121.581}},{t:this.shape_20,p:{scaleX:0.4129,scaleY:0.4129,x:55.1469,y:121.581}},{t:this.shape_19,p:{scaleX:0.4129,scaleY:0.4129,x:58.5844,y:121.581}},{t:this.shape_18,p:{scaleX:0.4129,scaleY:0.4129,x:67.8028,y:121.612}},{t:this.shape_17,p:{scaleX:0.4129,scaleY:0.4129,x:74.7502,y:122.7991}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:81.975,y:122.725}},{t:this.shape_15,p:{scaleX:0.4129,scaleY:0.4129,x:89.0371,y:122.7991}},{t:this.shape_14,p:{scaleX:0.4129,scaleY:0.4129,x:94.3741,y:121.581}},{t:this.shape_13,p:{scaleX:0.4129,scaleY:0.4129,x:99.4757,y:122.7991}},{t:this.shape_12,p:{scaleX:0.4129,scaleY:0.4129,x:106.3487,y:124.1101}},{t:this.shape_11,p:{scaleX:0.4129,scaleY:0.4129,x:74.3476,y:43.0543}},{t:this.shape_10},{t:this.shape_9,p:{scaleX:0.4129,scaleY:0.4129,x:74.6567,y:17.8344}},{t:this.shape_8,p:{scaleX:0.4129,scaleY:0.4129,x:74.6727,y:41.8562}},{t:this.shape_7,p:{scaleX:0.4129,scaleY:0.4129,x:74.5975,y:22.1811}},{t:this.shape_6,p:{scaleX:0.4129,scaleY:0.4129,x:51.1146,y:58.6905}},{t:this.shape_5,p:{scaleX:0.4129,scaleY:0.4129,x:97.7789,y:58.6905}},{t:this.shape_4,p:{scaleX:0.4129,scaleY:0.4129,x:74.4972,y:56.3475}},{t:this.shape_3,p:{scaleX:0.4129,scaleY:0.4129,x:74.683,y:57.4519}},{t:this.shape_2,p:{scaleX:0.4129,scaleY:0.4129,x:87.0687,y:56.3682}},{t:this.shape_1,p:{scaleX:0.4129,scaleY:0.4129,x:62.1528,y:56.3682}},{t:this.shape,p:{scaleX:0.4129,scaleY:0.4129,x:74.683,y:8.1155}}]}).to({state:[{t:this.shape_41,p:{scaleX:0.5165,scaleY:0.5165,x:73.2937,y:112.8738}},{t:this.shape_40,p:{scaleX:0.5165,scaleY:0.5165,x:73.2937,y:112.8738}},{t:this.shape_39,p:{scaleX:0.5165,scaleY:0.5165,x:73.2937,y:135.5228}},{t:this.shape_43},{t:this.shape_37,p:{scaleX:0.5164,scaleY:0.5164,x:9.0993,y:102.7813}},{t:this.shape_36,p:{scaleX:0.5164,scaleY:0.5164,x:15.9681,y:102.7813}},{t:this.shape_35,p:{scaleX:0.5164,scaleY:0.5164,x:26.0646,y:102.7813}},{t:this.shape_34,p:{scaleX:0.5164,scaleY:0.5164,x:36.0837,y:102.7813}},{t:this.shape_33,p:{scaleX:0.5164,scaleY:0.5164,x:51.2286,y:102.7813}},{t:this.shape_32,p:{scaleX:0.5164,scaleY:0.5164,x:61.6221,y:102.7813}},{t:this.shape_31,p:{scaleX:0.5164,scaleY:0.5164,x:68.4909,y:102.7813}},{t:this.shape_30,p:{scaleX:0.5164,scaleY:0.5164,x:74.8703,y:104.3049}},{t:this.shape_29,p:{scaleX:0.5164,scaleY:0.5164,x:82.1381,y:102.6781}},{t:this.shape_28,p:{scaleX:0.5164,scaleY:0.5164,x:93.784,y:102.8201}},{t:this.shape_27,p:{scaleX:1.2509,scaleY:1.2509,x:102.3877,y:104.2295}},{t:this.shape_26,p:{scaleX:0.5164,scaleY:0.5164,x:111.1109,y:104.3049}},{t:this.shape_25,p:{scaleX:0.5164,scaleY:0.5164,x:119.9551,y:102.8717}},{t:this.shape_24,p:{scaleX:0.5164,scaleY:0.5164,x:129.1104,y:104.3049}},{t:this.shape_23,p:{scaleX:0.5164,scaleY:0.5164,x:137.1012,y:104.2145}},{t:this.shape_22,p:{scaleX:0.5165,scaleY:0.5165,x:33.4087,y:135.1999}},{t:this.shape_21,p:{scaleX:0.5165,scaleY:0.5165,x:43.1443,y:135.1999}},{t:this.shape_20,p:{scaleX:0.5165,scaleY:0.5165,x:50.0264,y:135.1999}},{t:this.shape_19,p:{scaleX:0.5165,scaleY:0.5165,x:54.3261,y:135.1999}},{t:this.shape_18,p:{scaleX:0.5165,scaleY:0.5165,x:65.8565,y:135.2386}},{t:this.shape_17,p:{scaleX:0.5165,scaleY:0.5165,x:74.5463,y:136.7235}},{t:this.shape_16,p:{scaleX:1.2509,scaleY:1.2509,x:83.5913,y:136.5649}},{t:this.shape_15,p:{scaleX:0.5165,scaleY:0.5165,x:92.4165,y:136.7235}},{t:this.shape_14,p:{scaleX:0.5165,scaleY:0.5165,x:99.092,y:135.1999}},{t:this.shape_13,p:{scaleX:0.5165,scaleY:0.5165,x:105.4731,y:136.7235}},{t:this.shape_12,p:{scaleX:0.5165,scaleY:0.5165,x:114.0699,y:138.3633}},{t:this.shape_11,p:{scaleX:0.5165,scaleY:0.5165,x:74.1007,y:36.9367}},{t:this.shape_42},{t:this.shape_9,p:{scaleX:0.5164,scaleY:0.5164,x:74.4681,y:5.3869}},{t:this.shape_8,p:{scaleX:0.5164,scaleY:0.5164,x:74.4882,y:35.4353}},{t:this.shape_7,p:{scaleX:0.5164,scaleY:0.5164,x:74.3941,y:10.8241}},{t:this.shape_6,p:{scaleX:0.5164,scaleY:0.5164,x:45.0199,y:56.4929}},{t:this.shape_5,p:{scaleX:0.5164,scaleY:0.5164,x:103.3913,y:56.4929}},{t:this.shape_4,p:{scaleX:0.5164,scaleY:0.5164,x:74.2687,y:53.5621}},{t:this.shape_3,p:{scaleX:0.5164,scaleY:0.5164,x:74.5011,y:54.9436}},{t:this.shape_2,p:{scaleX:0.5164,scaleY:0.5164,x:89.9941,y:53.5879}},{t:this.shape_1,p:{scaleX:0.5164,scaleY:0.5164,x:58.8273,y:53.5879}},{t:this.shape,p:{scaleX:0.5164,scaleY:0.5164,x:74.5011,y:-6.7702}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-16.9,194.5,174.5);


(lib.ITOTower = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#707070").s().p("AgRBWIAAirIAiAAIAACrg");
	this.shape.setTransform(77.5432,96.6359,0.4129,0.4131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AAwBWIgPgnIhDAAIgOAnIglAAIBDirIAjAAIBFCrgAgYASIAuAAIgWg/g");
	this.shape_1.setTransform(72.5578,96.6359,0.4129,0.4131);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("Ag8BVIAAipIAjAAIAACMIBWAAIAAAdg");
	this.shape_2.setTransform(66.2099,96.6566,0.4129,0.4131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("AggA5QgOgHgJgPQgIgPAAgVQAAgRAIgOQAIgPAPgJQAOgIASAAQAcAAASASQASATAAAbQAAAcgSASQgRATgdAAQgQAAgQgIgAgVgbQgIAKAAARQAAATAIAJQAJAKAMAAQANAAAIgKQAJgJAAgTQAAgRgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_3.setTransform(57.2093,97.6066,0.4129,0.4131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("AgqAwQgPgSAAgeQAAgdAPgSQARgRAaAAQAYAAANAKQANAKAGAUIggAFQgCgJgGgFQgGgFgJAAQgLAAgIAIQgHAJAAAUQAAAVAHAJQAIAJALAAQAJAAAHgFQAGgFADgNIAfAFQgEAWgPAMQgOALgYAAQgaAAgRgRg");
	this.shape_4.setTransform(51.491,97.6066,0.4129,0.4131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("AgQBWIAAh8IAgAAIAAB8gAgQg2IAAgfIAgAAIAAAfg");
	this.shape_5.setTransform(47.3003,96.6359,0.4129,0.4131);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#707070").s().p("AAhBWIhEhvIAABvIggAAIAAirIAhAAIBGByIAAhyIAgAAIAACrg");
	this.shape_6.setTransform(42.3046,96.6359,0.4129,0.4131);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00E3FF").s().p("AiMEzIgDkdIgtkOIFFg6QAAAYASDNIAiGAg");
	this.shape_7.setTransform(49.2713,44.5817,0.4128,0.413);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00E3FF").s().p("Ai8EzIAimAQARjNABgYIFFA6IgtEOIgCEdg");
	this.shape_8.setTransform(68.5812,44.5611,0.4128,0.413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C7CCCC").s().p("AjTEzIAGjGIBqmeIBhAoIBggpIB2GfIAADGg");
	this.shape_9.setTransform(59.0346,44.5611,0.4128,0.413);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C5FF").s().p("AhiEWIgFhQQgEgoAGhQQANieA2jFIAVARQAYAZAVAjQBDBvADCsIAEDDg");
	this.shape_10.setTransform(77.8525,45.7691,0.4128,0.413);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C5FF").s().p("AhiEWIADjBQADisA/hwQAfg4AfgWQAzDFAMCfQAGBQgFAoIgEBPg");
	this.shape_11.setTransform(40.0947,45.7794,0.4128,0.413);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663632").s().p("AixBTQgKgVAtgoQAtgmBKgjQBJgiA7gJQA7gKAKAWQAKAVgtAoQgtAmhKAiQhJAjg7AJQgSADgNAAQgfAAgHgPg");
	this.shape_12.setTransform(55.9926,7.2491,0.4128,0.413);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FED9CC").s().p("AgHEYIAAgBQgigCgfgSQgMgHgkgmIgMgMQgUgQgSgoQgWgsgGg7QgcgfgQgdQgfg+A/AAIgBgPQAAg+AfgtQAzhKB6gDIAAgBIAHABIAGgBIAAABQCPAEAuBnQAXA0gGAzQA/AAgiBAQgRAfgdAgQgGA1gSAnQgMAZgPAQIgNAKQgsAwgPAJQggASgiACIAAABg");
	this.shape_13.setTransform(58.9893,17.4704,0.4128,0.413);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663632").s().p("AjTCxQhHhlAkhbQALgdAVgZQALgMAIgGQCGhyCAAfQBAAPAmAmQBnBMgPB0QgHA7gbArg");
	this.shape_14.setTransform(58.7677,7.2396,0.4128,0.413);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6BEA6").s().p("AkxBGIBcgbIAgAHQAmgBAigkQAhgkgGhTIgMhMIDFAAQghA6AQBHQAIAkAOAXIDFBKIiUBZIjZAOg");
	this.shape_15.setTransform(58.9314,32.367,0.4128,0.413);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-78.9,0,78.9,0).ss(5).p("AriKFIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAcQgcAbgnAAI0JAAQgnAAgbgbQgcgcAAgng");
	this.shape_16.setTransform(59.0299,34.5323,0.4129,0.4131);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AqELjQgnAAgcgbQgbgcAAgnIAA0JQAAgnAbgbQAcgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAcQgbAbgnAAg");
	this.shape_17.setTransform(59.0299,34.5323,0.4129,0.4131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAgAAIAAASQAJgOAEgDQAIgFAIABQALgBALAHIgLAeQgJgFgHgBQgGAAgGAEQgFAFgCAKQgCAKAAAhIAAAng");
	this.shape_18.setTransform(81.9561,77.015,0.4129,0.413);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvAuQgNgSAAgbQAAgfARgSQARgTAaAAQAcAAAQAUQARASgBAnIhVAAQABAQAIAIQAHAIALAAQAIAAAGgEQAFgEADgKIAjAGQgHATgOAJQgOAKgWAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgOgHgJQgIgHgKAAQgKAAgIAIg");
	this.shape_19.setTransform(76.6314,77.0666,0.4129,0.413);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWBBIgWhSIgVBSIgiAAIgpiBIAiAAIAYBUIAWhUIAhAAIAVBUIAZhUIAiAAIgqCBg");
	this.shape_20.setTransform(69.8078,77.0769,0.4129,0.413);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghA8QgQgIgIgQQgJgPAAgWQAAgSAJgPQAIgPAPgJQAQgJASAAQAeAAASAUQATASAAAdQAAAegTATQgTATgdAAQgRAAgQgIgAgWgcQgJAKAAASQAAATAJALQAKAKAMAAQAOAAAJgKQAJgLAAgTQAAgSgJgKQgJgLgOAAQgMAAgKALg");
	this.shape_21.setTransform(62.6448,77.0666,0.4129,0.413);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBZIAAiTIg1AAIAAgfICNAAIAAAfIg1AAIAACTg");
	this.shape_22.setTransform(57.0918,76.065,0.4129,0.413);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag+BEQgYgYAAgrQAAgaAJgTQAGgPAKgJQAKgLANgFQAQgIAWAAQAnABAYAYQAYAYAAArQAAAsgYAYQgYAZgnAAQgnAAgXgZgAgjguQgOAPAAAfQAAAfAPAPQAOAPAUAAQAWAAAOgPQAOgQgBgeQAAgfgNgPQgNgPgXAAQgVAAgOAPg");
	this.shape_23.setTransform(47.0697,76.065,0.4129,0.413);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRBZIAAiTIg1AAIAAgfICNAAIAAAfIg1AAIAACTg");
	this.shape_24.setTransform(40.0718,76.065,0.4129,0.413);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRBZIAAiyIAjAAIAACyg");
	this.shape_25.setTransform(35.5097,76.065,0.4129,0.413);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-144.7,0,144.7,0).ss(4).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhtBNhMQBNhOBtAAMAkXAAAQBtAABNBOQBNBMAABtQAABthNBNQhNBOhtAAg");
	this.shape_26.setTransform(58.9037,96.8972,0.4129,0.4131);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AyLEHQhtAAhNhMQhNhOAAhtQAAhsBNhOQBNhNBtABMAkXAAAQBtgBBNBNQBNBOAABsQAABthNBOQhNBMhtAAg");
	this.shape_27.setTransform(58.9037,96.8972,0.4129,0.4131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(4).p("AxgJmMAjBAAAQB/AABahaQBZhZAAh/IAApoQAAh+hZhaQhahZh/AAMgjBAAAQh/AAhaBZQhZBaAAB+IAAJoQAAB/BZBZQBaBaB/AAg");
	this.shape_28.setTransform(58.9037,82.4186,0.4129,0.4131);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#00B4A8","#00BAF2"],[0,1],142.7,0,-142.7,0).s().p("AxgJmQh/AAhahZQhZhaAAh/IAApoQAAh+BZhaQBahZB/AAMAjBAAAQB/AABaBZQBZBaAAB+IAAJoQAAB/hZBaQhaBZh/AAg");
	this.shape_29.setTransform(58.9037,82.4186,0.4129,0.4131);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00CCCC").ss(8).p("AriKFIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAcQgcAbgnAAI0JAAQgnAAgbgbQgcgcAAgng");
	this.shape_30.setTransform(58.954,23.778,0.4733,0.4735);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00CCCC").ss(7).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhtBNhMQBNhOBtAAMAkXAAAQBtAABNBOQBNBMAABtQAABthNBNQhNBOhtAAg");
	this.shape_31.setTransform(58.8021,95.2476,0.4733,0.4735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{scaleX:0.4129,scaleY:0.4131,x:58.9037,y:82.4186}},{t:this.shape_28,p:{scaleX:0.4129,scaleY:0.4131,x:58.9037,y:82.4186}},{t:this.shape_27,p:{scaleX:0.4129,scaleY:0.4131,x:58.9037,y:96.8972}},{t:this.shape_26},{t:this.shape_25,p:{scaleX:0.4129,scaleY:0.413,x:35.5097,y:76.065}},{t:this.shape_24,p:{scaleX:0.4129,scaleY:0.413,x:40.0718,y:76.065}},{t:this.shape_23,p:{scaleX:0.4129,scaleY:0.413,x:47.0697,y:76.065}},{t:this.shape_22,p:{scaleX:0.4129,scaleY:0.413,x:57.0918,y:76.065}},{t:this.shape_21,p:{scaleX:0.4129,scaleY:0.413,x:62.6448,y:77.0666}},{t:this.shape_20,p:{scaleX:0.4129,scaleY:0.413,x:69.8078,y:77.0769}},{t:this.shape_19,p:{scaleX:0.4129,scaleY:0.413,x:76.6314,y:77.0666}},{t:this.shape_18,p:{scaleX:0.4129,scaleY:0.413,x:81.9561,y:77.015}},{t:this.shape_17,p:{scaleX:0.4129,scaleY:0.4131,x:59.0299,y:34.5323}},{t:this.shape_16},{t:this.shape_15,p:{scaleX:0.4128,scaleY:0.413,x:58.9314,y:32.367}},{t:this.shape_14,p:{scaleX:0.4128,scaleY:0.413,x:58.7677,y:7.2396}},{t:this.shape_13,p:{scaleX:0.4128,scaleY:0.413,x:58.9893,y:17.4704}},{t:this.shape_12,p:{scaleX:0.4128,scaleY:0.413,x:55.9926,y:7.2491}},{t:this.shape_11,p:{scaleX:0.4128,scaleY:0.413,x:40.0947,y:45.7794}},{t:this.shape_10,p:{scaleX:0.4128,scaleY:0.413,x:77.8525,y:45.7691}},{t:this.shape_9,p:{scaleX:0.4128,scaleY:0.413,x:59.0346,y:44.5611}},{t:this.shape_8,p:{scaleX:0.4128,scaleY:0.413,x:68.5812,y:44.5611}},{t:this.shape_7,p:{scaleX:0.4128,scaleY:0.413,x:49.2713,y:44.5817}},{t:this.shape_6,p:{scaleX:0.4129,scaleY:0.4131,x:42.3046,y:96.6359}},{t:this.shape_5,p:{scaleX:0.4129,scaleY:0.4131,x:47.3003,y:96.6359}},{t:this.shape_4,p:{scaleX:0.4129,scaleY:0.4131,x:51.491,y:97.6066}},{t:this.shape_3,p:{scaleX:0.4129,scaleY:0.4131,x:57.2093,y:97.6066}},{t:this.shape_2,p:{scaleX:0.4129,scaleY:0.4131,x:66.2099,y:96.6566}},{t:this.shape_1,p:{scaleX:0.4129,scaleY:0.4131,x:72.5578,y:96.6359}},{t:this.shape,p:{scaleX:0.4129,scaleY:0.4131,x:77.5432,y:96.6359}}]}).to({state:[{t:this.shape_29,p:{scaleX:0.4733,scaleY:0.4735,x:58.8021,y:78.6526}},{t:this.shape_28,p:{scaleX:0.4733,scaleY:0.4735,x:58.8021,y:78.6526}},{t:this.shape_27,p:{scaleX:0.4733,scaleY:0.4735,x:58.8021,y:95.2476}},{t:this.shape_31},{t:this.shape_25,p:{scaleX:0.4732,scaleY:0.4734,x:31.9546,y:71.3641}},{t:this.shape_24,p:{scaleX:0.4732,scaleY:0.4734,x:37.1834,y:71.3641}},{t:this.shape_23,p:{scaleX:0.4732,scaleY:0.4734,x:45.204,y:71.3641}},{t:this.shape_22,p:{scaleX:0.4732,scaleY:0.4734,x:56.6907,y:71.3641}},{t:this.shape_21,p:{scaleX:0.4732,scaleY:0.4734,x:63.0551,y:72.5121}},{t:this.shape_20,p:{scaleX:0.4732,scaleY:0.4734,x:71.2649,y:72.524}},{t:this.shape_19,p:{scaleX:0.4732,scaleY:0.4734,x:79.0857,y:72.5121}},{t:this.shape_18,p:{scaleX:0.4732,scaleY:0.4734,x:85.1885,y:72.453}},{t:this.shape_17,p:{scaleX:0.4733,scaleY:0.4735,x:58.954,y:23.778}},{t:this.shape_30},{t:this.shape_15,p:{scaleX:0.4732,scaleY:0.4734,x:58.8062,y:21.2826}},{t:this.shape_14,p:{scaleX:0.4731,scaleY:0.4733,x:58.5765,y:-7.5404}},{t:this.shape_13,p:{scaleX:0.4731,scaleY:0.4733,x:58.8305,y:4.1846}},{t:this.shape_12,p:{scaleX:0.4731,scaleY:0.4733,x:55.396,y:-7.5295}},{t:this.shape_11,p:{scaleX:0.4732,scaleY:0.4734,x:37.2166,y:36.6554}},{t:this.shape_10,p:{scaleX:0.4732,scaleY:0.4734,x:80.4926,y:36.6436}},{t:this.shape_9,p:{scaleX:0.4732,scaleY:0.4734,x:58.9245,y:35.259}},{t:this.shape_8,p:{scaleX:0.4732,scaleY:0.4734,x:69.8664,y:35.259}},{t:this.shape_7,p:{scaleX:0.4732,scaleY:0.4734,x:47.7343,y:35.2827}},{t:this.shape_6,p:{scaleX:0.4732,scaleY:0.4734,x:39.7149,y:94.9397}},{t:this.shape_5,p:{scaleX:0.4732,scaleY:0.4734,x:45.4406,y:94.9397}},{t:this.shape_4,p:{scaleX:0.4732,scaleY:0.4734,x:50.2434,y:96.0522}},{t:this.shape_3,p:{scaleX:0.4732,scaleY:0.4734,x:56.7971,y:96.0522}},{t:this.shape_2,p:{scaleX:0.4732,scaleY:0.4734,x:67.1127,y:94.9634}},{t:this.shape_1,p:{scaleX:0.4732,scaleY:0.4734,x:74.388,y:94.9397}},{t:this.shape,p:{scaleX:0.4732,scaleY:0.4734,x:80.1017,y:94.9397}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-15.9,157.6,127.10000000000001);


(lib.ISDTower = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#707070").s().p("AAhBWIhEhvIAABvIggAAIAAirIAhAAIBGByIAAhyIAgAAIAACrg");
	this.shape.setTransform(82.4035,96.6478,0.4129,0.4131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AAwBWIgOgnIhEAAIgOAnIglAAIBDirIAjAAIBFCrgAgYASIAuAAIgWg/g");
	this.shape_1.setTransform(75.2605,96.6478,0.4129,0.4131);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("AAiBWIAAhLIhDAAIAABLIgjAAIAAirIAjAAIAABEIBDAAIAAhEIAiAAIAACrg");
	this.shape_2.setTransform(68.1176,96.6478,0.4129,0.4131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("Ag0BBQgWgXAAgpQAAgpAWgYQAXgYAjAAQAgAAATATQALAKAGAVIgiAJQgDgOgKgIQgJgHgOAAQgSAAgMANQgMAPAAAeQAAAfAMAOQAMAOARAAQAPAAAJgJQAKgIAEgTIAiAKQgIAcgSAOQgRAOgdAAQghAAgWgYg");
	this.shape_3.setTransform(60.9643,96.6478,0.4129,0.4131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("Ag0BVIgDgaIAOACQALAAAGgGQAGgIACgJIgvh8IAjAAIAdBXIAdhXIAiAAIg0CMQgFAMgDAEQgEAGgEAEIgNAFQgJACgHAAIgTgCg");
	this.shape_4.setTransform(51.8601,98.6615,0.4129,0.4131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("AAXA/IAAg/QAAgUgCgFQgCgGgEgEQgFgCgHAAQgHAAgHAEQgGAFgEAIQgCAIAAATIAAA4IghAAIAAh7IAfAAIAAASQAQgUAYgBQALABAJADQAKAFADAFQAEAHADAHQABAHAAAPIAABMg");
	this.shape_5.setTransform(46.152,97.5669,0.4129,0.4131);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#707070").s().p("AggA5QgPgHgIgPQgIgPAAgVQAAgRAIgOQAIgPAPgJQAOgIASAAQAcAAASASQASATAAAbQAAAcgSASQgSATgcAAQgQAAgQgIgAgVgbQgJAKAAARQAAATAJAJQAJAKAMAAQANAAAJgKQAIgKAAgSQAAgRgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_6.setTransform(40.1135,97.6185,0.4129,0.4131);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#707070").s().p("AgQBWIAAiOIgzAAIAAgdICHAAIAAAdIgzAAIAACOg");
	this.shape_7.setTransform(34.7872,96.6478,0.4129,0.4131);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00E3FF").s().p("AiNEzIgCkdIgtkOIFFg6QABAXAzJOg");
	this.shape_8.setTransform(49.3552,44.6016,0.4129,0.413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00E3FF").s().p("Ai8EzIAimAQARjNABgYIFFA6IgtEOIgCEdg");
	this.shape_9.setTransform(68.6666,44.581,0.4129,0.413);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C7CCCC").s().p("AjTEzIAHjGIBqmeIBgAoIBggpIB2GfIAADGg");
	this.shape_10.setTransform(59.1192,44.581,0.4129,0.413);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C5FF").s().p("AhiEWIgFhQQgEgoAGhQQANieA2jFIAVARQAYAZAVAjQBDBvADCsIAEDDg");
	this.shape_11.setTransform(77.9385,45.7891,0.4129,0.413);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00C5FF").s().p("AhiEWIADjBQADisA/hwQAfg4AfgWQAzDFALCfQAGBQgEAoIgEBPg");
	this.shape_12.setTransform(40.1712,45.7995,0.4129,0.413);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#754D29").s().p("AixBTQgKgVAtgoQAtgmBKgjQBIgiA7gJQA8gKAKAWQAKAVgtAoQgtAmhKAiQhJAjg7AJQgSADgNAAQgfAAgHgPg");
	this.shape_13.setTransform(56.0684,7.2577,0.4128,0.413);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FED9CC").s().p("AgGEYIAAgBQgjgCgfgSQgMgHgkgmIgMgMQgUgQgSgoQgVgrgHg8QgcgfgQgdQgfg+A/AAIgBgPQAAg+AfgtQAzhKB7gDIAAgBIAGABIAGgBIAAABQCPAEAuBnQAXA0gGAzQA/AAgiBAQgRAfgdAgQgGA1gSAnQgMAZgPAQIgNAKQgsAwgPAJQggASgiACIAAABg");
	this.shape_14.setTransform(59.0858,17.4793,0.4128,0.413);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#754D29").s().p("AjTCxQhHhlAkhbQALgdAVgZQALgMAIgGQCGhyCAAfQBAAPAmAmQBmBMgOB0QgHA7gbArg");
	this.shape_15.setTransform(58.8402,7.2482,0.4128,0.413);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6BEA6").s().p("AkwBGIBbgbIAhAHQAlgBAigkQAhgkgFhTIgNhMIDEAAQggA6AQBHQAIAkAOAXIDGBKIiVBZIjZAOg");
	this.shape_16.setTransform(59.016,32.386,0.4129,0.413);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-78.9,0,78.9,0).ss(5).p("AriKFIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAcQgcAbgnAAI0JAAQgnAAgbgbQgcgcAAgng");
	this.shape_17.setTransform(59.0547,34.5323,0.4129,0.4131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AqELjQgnAAgbgbQgcgcAAgnIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAcQgbAbgnAAg");
	this.shape_18.setTransform(59.0547,34.5323,0.4129,0.4131);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAgAAIAAASQAJgOAFgDQAGgFAIABQALgBAMAHIgLAeQgJgFgHgBQgHAAgFAEQgEAEgDALQgDAKAAAhIAAAng");
	this.shape_19.setTransform(82.1149,77.0261,0.4129,0.4131);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvAuQgNgSAAgbQAAgfARgSQASgTAZAAQAcAAARAUQARATgBAmIhVAAQAAAPAIAJQAIAIALAAQAIAAAFgEQAGgEADgKIAiAGQgHATgOAJQgOAKgWAAQghAAgQgWgAgRggQgHAIAAAOIAzAAQgBgPgHgIQgIgHgKAAQgKAAgIAIg");
	this.shape_20.setTransform(76.7797,77.0778,0.4129,0.4131);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWBBIgWhSIgVBSIghAAIgqiBIAiAAIAYBUIAWhUIAhAAIAVBUIAZhUIAiAAIgqCBg");
	this.shape_21.setTransform(69.9558,77.0881,0.4129,0.4131);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghA8QgQgIgJgQQgIgQAAgVQAAgRAIgQQAJgPAPgJQAQgJASAAQAeAAASAUQATATAAAcQAAAdgTAUQgSATgeAAQgRAAgQgIgAgVgcQgJAKAAASQAAATAJALQAIAKANAAQAOAAAJgKQAIgLAAgTQAAgSgIgKQgKgLgNAAQgNAAgIALg");
	this.shape_22.setTransform(62.7925,77.0778,0.4129,0.4131);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRBZIAAiTIg1AAIAAgfICNAAIAAAfIg1AAIAACTg");
	this.shape_23.setTransform(57.2394,76.0761,0.4129,0.4131);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhKBZIAAiyIBCAAQAWAAALAEQAQAFALALQAMAMAFARQAGASAAAYQAAAVgFARQgHASgMANQgJAJgRAGQgNADgSAAgAgmA7IAbAAQAOAAAHgBQAIgCAHgGQAFgFAEgNQAEgLgBgVQABgVgEgKQgDgKgHgHQgGgGgLgDQgHgBgVAAIgRAAg");
	this.shape_24.setTransform(47.5988,76.0761,0.4129,0.4131);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyBNQgTgQgDgeIAjgEQADASAKAIQAKAJAPAAQASAAAJgIQAIgHAAgJQAAgHgDgFQgEgDgJgFIgcgHQgdgHgMgKQgRgOAAgWQAAgNAIgMQAIgNAPgFQAOgHAVAAQAhAAARAPQARAPAAAYIgkACQgCgNgIgHQgHgGgPAAQgOAAgKAGQgGAEAAAIQAAAGAFAFQAHAFAaAHQAcAGALAGQANAHAGAKQAIANAAAQQAAAPgJAOQgIANgQAHQgPAHgYAAQgiAAgRgQg");
	this.shape_25.setTransform(40.26,76.0761,0.4129,0.4131);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRBZIAAiyIAjAAIAACyg");
	this.shape_26.setTransform(35.4604,76.0761,0.4129,0.4131);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-144.7,0,144.7,0).ss(4).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhtBNhMQBNhOBtAAMAkXAAAQBtAABNBOQBNBMAABtQAABthNBNQhNBOhtAAg");
	this.shape_27.setTransform(58.9179,96.8972,0.4129,0.4131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AyLEHQhtAAhNhMQhNhOAAhtQAAhsBNhOQBNhNBtABMAkXAAAQBtgBBNBNQBNBOAABsQAABthNBOQhNBMhtAAg");
	this.shape_28.setTransform(58.9179,96.8972,0.4129,0.4131);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(4).p("AxgJmMAjBAAAQB/AABahaQBZhZAAh/IAApoQAAh+hZhaQhahZh/AAMgjBAAAQh/AAhaBZQhZBaAAB+IAAJoQAAB/BZBZQBaBaB/AAg");
	this.shape_29.setTransform(58.9179,82.4186,0.4129,0.4131);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#00B4A8","#00BAF2"],[0,1],142.7,0,-142.7,0).s().p("AxgJmQh/AAhahZQhZhaAAh/IAApoQAAh+BZhaQBahZB/AAMAjBAAAQB/AABaBZQBZBaAAB+IAAJoQAAB/hZBaQhaBZh/AAg");
	this.shape_30.setTransform(58.9179,82.4186,0.4129,0.4131);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00CCCC").ss(8).p("AriKFIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAcQgcAbgnAAI0JAAQgnAAgbgbQgcgcAAgng");
	this.shape_31.setTransform(59.0761,23.8012,0.4794,0.4796);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#00CCCC").ss(7).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhtBNhMQBNhOBtAAMAkXAAAQBtAABNBOQBNBMAABtQAABthNBNQhNBOhtAAg");
	this.shape_32.setTransform(58.8917,96.2013,0.4794,0.4796);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{scaleX:0.4129,scaleY:0.4131,x:58.9179,y:82.4186}},{t:this.shape_29,p:{scaleX:0.4129,scaleY:0.4131,x:58.9179,y:82.4186}},{t:this.shape_28,p:{scaleX:0.4129,scaleY:0.4131,x:58.9179,y:96.8972}},{t:this.shape_27},{t:this.shape_26,p:{scaleX:0.4129,scaleY:0.4131,x:35.4604,y:76.0761}},{t:this.shape_25,p:{scaleX:0.4129,scaleY:0.4131,x:40.26,y:76.0761}},{t:this.shape_24,p:{scaleX:0.4129,scaleY:0.4131,x:47.5988,y:76.0761}},{t:this.shape_23,p:{scaleX:0.4129,scaleY:0.4131,x:57.2394,y:76.0761}},{t:this.shape_22,p:{scaleX:0.4129,scaleY:0.4131,x:62.7925,y:77.0778}},{t:this.shape_21,p:{scaleX:0.4129,scaleY:0.4131,x:69.9558,y:77.0881}},{t:this.shape_20,p:{scaleX:0.4129,scaleY:0.4131,x:76.7797,y:77.0778}},{t:this.shape_19,p:{scaleX:0.4129,scaleY:0.4131,x:82.1149,y:77.0261}},{t:this.shape_18,p:{scaleX:0.4129,scaleY:0.4131,x:59.0547,y:34.5323}},{t:this.shape_17},{t:this.shape_16,p:{scaleX:0.4129,scaleY:0.413,x:59.016,y:32.386}},{t:this.shape_15,p:{scaleX:0.4128,scaleY:0.413,x:58.8402,y:7.2482}},{t:this.shape_14,p:{scaleX:0.4128,scaleY:0.413,x:59.0858,y:17.4793}},{t:this.shape_13,p:{scaleX:0.4128,scaleY:0.413,x:56.0684,y:7.2577}},{t:this.shape_12,p:{scaleX:0.4129,scaleY:0.413,x:40.1712,y:45.7995}},{t:this.shape_11,p:{scaleX:0.4129,scaleY:0.413,x:77.9385,y:45.7891}},{t:this.shape_10,p:{scaleX:0.4129,scaleY:0.413,x:59.1192,y:44.581}},{t:this.shape_9,p:{scaleX:0.4129,scaleY:0.413,x:68.6666,y:44.581}},{t:this.shape_8,p:{scaleX:0.4129,scaleY:0.413,x:49.3552,y:44.6016}},{t:this.shape_7,p:{scaleX:0.4129,scaleY:0.4131,x:34.7872,y:96.6478}},{t:this.shape_6,p:{scaleX:0.4129,scaleY:0.4131,x:40.1135,y:97.6185}},{t:this.shape_5,p:{scaleX:0.4129,scaleY:0.4131,x:46.152,y:97.5669}},{t:this.shape_4,p:{scaleX:0.4129,scaleY:0.4131,x:51.8601,y:98.6615}},{t:this.shape_3,p:{scaleX:0.4129,scaleY:0.4131,x:60.9643,y:96.6478}},{t:this.shape_2,p:{scaleX:0.4129,scaleY:0.4131,x:68.1176,y:96.6478}},{t:this.shape_1,p:{scaleX:0.4129,scaleY:0.4131,x:75.2605,y:96.6478}},{t:this.shape,p:{scaleX:0.4129,scaleY:0.4131,x:82.4035,y:96.6478}}]}).to({state:[{t:this.shape_30,p:{scaleX:0.4794,scaleY:0.4796,x:58.8917,y:79.3903}},{t:this.shape_29,p:{scaleX:0.4794,scaleY:0.4796,x:58.8917,y:79.3903}},{t:this.shape_28,p:{scaleX:0.4794,scaleY:0.4796,x:58.8917,y:96.2013}},{t:this.shape_32},{t:this.shape_26,p:{scaleX:0.4794,scaleY:0.4796,x:31.6646,y:72.0186}},{t:this.shape_25,p:{scaleX:0.4794,scaleY:0.4796,x:37.2374,y:72.0186}},{t:this.shape_24,p:{scaleX:0.4794,scaleY:0.4796,x:45.7585,y:72.0186}},{t:this.shape_23,p:{scaleX:0.4794,scaleY:0.4796,x:56.9521,y:72.0186}},{t:this.shape_22,p:{scaleX:0.4794,scaleY:0.4796,x:63.3999,y:73.1816}},{t:this.shape_21,p:{scaleX:0.4794,scaleY:0.4796,x:71.7172,y:73.1936}},{t:this.shape_20,p:{scaleX:0.4794,scaleY:0.4796,x:79.6404,y:73.1816}},{t:this.shape_19,p:{scaleX:0.4794,scaleY:0.4796,x:85.8351,y:73.1216}},{t:this.shape_18,p:{scaleX:0.4794,scaleY:0.4796,x:59.0761,y:23.8012}},{t:this.shape_31},{t:this.shape_16,p:{scaleX:0.4794,scaleY:0.4796,x:58.9988,y:21.2931}},{t:this.shape_15,p:{scaleX:0.4793,scaleY:0.4795,x:58.7653,y:-7.898}},{t:this.shape_14,p:{scaleX:0.4793,scaleY:0.4795,x:59.0505,y:3.9808}},{t:this.shape_13,p:{scaleX:0.4793,scaleY:0.4795,x:55.5472,y:-7.887}},{t:this.shape_12,p:{scaleX:0.4794,scaleY:0.4796,x:37.1186,y:36.8671}},{t:this.shape_11,p:{scaleX:0.4794,scaleY:0.4796,x:80.969,y:36.8551}},{t:this.shape_10,p:{scaleX:0.4794,scaleY:0.4796,x:59.1186,y:35.4524}},{t:this.shape_9,p:{scaleX:0.4794,scaleY:0.4796,x:70.2037,y:35.4524}},{t:this.shape_8,p:{scaleX:0.4794,scaleY:0.4796,x:47.7819,y:35.4763}},{t:this.shape_7,p:{scaleX:0.4794,scaleY:0.4796,x:30.88,y:95.9018}},{t:this.shape_6,p:{scaleX:0.4794,scaleY:0.4796,x:37.0643,y:97.0288}},{t:this.shape_5,p:{scaleX:0.4794,scaleY:0.4796,x:44.0755,y:96.9689}},{t:this.shape_4,p:{scaleX:0.4794,scaleY:0.4796,x:50.7032,y:98.2398}},{t:this.shape_3,p:{scaleX:0.4794,scaleY:0.4796,x:61.274,y:95.9018}},{t:this.shape_2,p:{scaleX:0.4794,scaleY:0.4796,x:69.5796,y:95.9018}},{t:this.shape_1,p:{scaleX:0.4794,scaleY:0.4796,x:77.8733,y:95.9018}},{t:this.shape,p:{scaleX:0.4794,scaleY:0.4796,x:86.1669,y:95.9018}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-16.4,143.8,136.5);


(lib.ISATower = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#707070").s().p("AhABWIAAirIB+AAIAAAdIhcAAIAAAnIBVAAIAAAbIhVAAIAAAvIBfAAIAAAdg");
	this.shape.setTransform(75.4152,96.674,0.4128,0.4132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AhABWIAAirIB+AAIAAAdIhcAAIAAAnIBWAAIAAAbIhWAAIAAAvIBfAAIAAAdg");
	this.shape_1.setTransform(68.8104,96.674,0.4128,0.4132);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("Ag7BVIAAipIAiAAIAACMIBVAAIAAAdg");
	this.shape_2.setTransform(62.6082,96.705,0.4128,0.4132);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("AgfA5QgQgIgIgOQgIgPAAgUQAAgRAIgQQAIgOAPgJQAQgIAQAAQAcAAASATQASARAAAcQAAAcgSATQgSASgcAAQgQAAgPgIgAgVgbQgIAKAAARQAAATAIAKQAJAKAMAAQANAAAJgKQAIgJAAgUQAAgSgIgJQgJgKgNAAQgMAAgJAKg");
	this.shape_3.setTransform(53.5989,97.645,0.4128,0.4132);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("AgtAsQgMgRAAgaQAAgdAQgTQARgRAYAAQAaAAAQATQARARgBAmIhSAAQABAPAHAHQAIAJAKgBQAIAAAFgDQAFgFADgKIAhAGQgHATgNAJQgOAJgUAAQgfAAgQgVgAgQgfQgHAIAAAOIAwAAQgBgQgGgGQgHgIgKAAQgKAAgHAIg");
	this.shape_4.setTransform(47.7693,97.645,0.4128,0.4132);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("Ag7BVIAAipIAiAAIAACMIBVAAIAAAdg");
	this.shape_5.setTransform(42.2676,96.705,0.4128,0.4132);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00E3FF").s().p("AiNEzIgCkdIgtkNIFFg7QABAYARDNIAiGAg");
	this.shape_6.setTransform(49.2673,44.6163,0.4128,0.4131);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00E3FF").s().p("Ai8EzIAhmAQASjNAAgYIFGA6IgtENIgDEeg");
	this.shape_7.setTransform(68.5744,44.606,0.4128,0.4131);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C7CCCC").s().p("AjTEzIAHjHIBqmeIBgApIBggpIB2GeIAADHg");
	this.shape_8.setTransform(59.0292,44.606,0.4128,0.4131);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00C5FF").s().p("AhiEWIgFhRQgFgoAHhPQANieA1jFIAVARQAYAZAVAiQBEBwADCtIAEDCg");
	this.shape_9.setTransform(77.8443,45.8144,0.4128,0.4131);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C5FF").s().p("AhiEWIADjBQADisA/hwQAfg4AfgWQAzDFAMCfQAGBQgEAoIgFBPg");
	this.shape_10.setTransform(40.0853,45.8247,0.4128,0.4131);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#794705").s().p("AixBTQgKgVAtgoQAtgmBKgjQBJgiA7gJQA7gKAKAWQAKAVgtAnQgtAnhKAiQhJAjg6AJQgSADgOAAQgfAAgHgPg");
	this.shape_11.setTransform(55.9667,7.2787,0.4127,0.4131);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FED9CC").s().p("AgGEXQgigCgggSQgOgIgiglIgLgMQgVgQgSgoQgVgtgHg7QgcgegQgeQgfg9A/AAIgBgQQAAg9AfgtQAzhKB7gDIAAgBIAMAAIAAABQCPAEAuBnQAXA0gGAzQA/AAgiBAQgRAfgdAfQgGA1gSAoQgLAZgQAQIgNAKQgsAwgPAJQggASgiACIgGABg");
	this.shape_12.setTransform(58.994,17.5073,0.4127,0.4131);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#794705").s().p("AjTCyQhHhmAkhbQALgdAVgZQALgMAIgGQCGhyCAAfQBAAPAmAmQBnBNgPB0QgHA6gbAsg");
	this.shape_13.setTransform(58.7414,7.2632,0.4127,0.4131);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6BEA6").s().p("AkwBHIBcgcIAgAHQAmAAAgglQAigkgGhTIgMhMIDFAAQghA6AQBHQAIAkAPAXIDFBKIiVBZIjZAOg");
	this.shape_14.setTransform(58.9157,32.398,0.4128,0.4131);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-78.9,0,78.9,0).ss(5).p("AriKFIAA0JQAAgnAcgbQAcgcAmAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAbQgcAcgnAAI0JAAQgmAAgcgcQgcgbAAgng");
	this.shape_15.setTransform(58.9756,34.5448,0.4128,0.4132);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AqELjQgmAAgcgcQgcgbAAgnIAA0JQAAgnAcgbQAcgcAmAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAbQgcAcgnAAg");
	this.shape_16.setTransform(58.9756,34.5448,0.4128,0.4132);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAfAAIAAASQAJgNAFgEQAIgEAIAAQAKAAAMAGIgLAeQgIgFgIAAQgIAAgEAEQgEADgDALQgDAKAAAgIAAAog");
	this.shape_17.setTransform(81.8036,77.0368,0.4128,0.4131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvAuQgNgSAAgbQAAgfARgSQARgTAZAAQAcAAARATQARAUgBAmIhVAAQAAAPAIAJQAJAIAKAAQAJAAAFgEQAFgFADgJIAiAFQgGATgPAKQgOAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQgBgPgHgIQgHgHgKAAQgLAAgHAIg");
	this.shape_18.setTransform(76.48,77.0988,0.4128,0.4131);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWBBIgWhSIgVBSIgiAAIgoiBIAhAAIAYBUIAXhUIAfAAIAWBUIAZhUIAhAAIgpCBg");
	this.shape_19.setTransform(69.6476,77.0988,0.4128,0.4131);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghA8QgRgJgIgPQgIgQAAgVQAAgRAIgQQAJgQAQgIQAQgJARAAQAdAAATATQATAUAAAcQAAAdgTATQgTAUgdAAQgRAAgQgIgAgWgcQgIAKgBASQABATAIALQAKAKAMAAQAOAAAIgKQAKgLgBgTQABgSgKgKQgIgLgOAAQgMAAgKALg");
	this.shape_20.setTransform(62.4861,77.0988,0.4128,0.4131);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRBZIAAiTIg1AAIAAgfICNAAIAAAfIg1AAIAACTg");
	this.shape_21.setTransform(56.9344,76.0763,0.4128,0.4131);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAyBZIgPgoIhHAAIgPAoIgmAAIBGiyIAlAAIBICygAgZATIAwAAIgYhCg");
	this.shape_22.setTransform(47.5543,76.0763,0.4128,0.4131);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBNQgSgQgEgeIAjgDQAEASAJAIQAKAIAQAAQARAAAJgHQAJgIAAgKQAAgFgEgFQgEgFgJgDIgcgIQgdgHgMgKQgQgPAAgVQAAgOAIgLQAHgMAPgGQAOgHAVAAQAhAAARAPQARAPABAZIgkABQgCgNgIgHQgIgGgOAAQgQAAgJAHQgGAEAAAHQAAAGAGAFQAHAGAZAGQAZAGAOAHQAMAGAIALQAHALAAARQAAAPgJAOQgIANgQAHQgRAHgWAAQggAAgTgQg");
	this.shape_23.setTransform(40.3309,76.0866,0.4128,0.4131);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRBZIAAiyIAjAAIAACyg");
	this.shape_24.setTransform(35.5429,76.0763,0.4128,0.4131);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-144.7,0,144.7,0).ss(4).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_25.setTransform(58.83,96.9132,0.4128,0.4132);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AyLEIQhtgBhNhNQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBNhtABg");
	this.shape_26.setTransform(58.83,96.9132,0.4128,0.4132);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(4).p("AxgJmMAjCAAAQB+AABahZQBZhaAAh+IAApoQAAh+hZhaQhahah+AAMgjCAAAQh/AAhaBaQhZBaAAB+IAAJoQAAB+BZBaQBaBZB/AAg");
	this.shape_27.setTransform(58.83,82.4313,0.4128,0.4132);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#00B4A8","#00BAF2"],[0,1],142.7,0,-142.7,0).s().p("AxgJmQh/AAhahZQhZhaAAh+IAApoQAAh/BZhaQBahZB/AAMAjCAAAQB+AABaBZQBZBaAAB/IAAJoQAAB+hZBaQhaBZh+AAg");
	this.shape_28.setTransform(58.83,82.4313,0.4128,0.4132);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#00CCCC").ss(8).p("AriKFIAA0JQAAgnAcgbQAcgcAmAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAbQgcAcgnAAI0JAAQgmAAgcgcQgcgbAAgng");
	this.shape_29.setTransform(58.9948,24.9381,0.4744,0.4749);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00CCCC").ss(7).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_30.setTransform(58.8829,96.6315,0.4745,0.4749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28,p:{scaleX:0.4128,scaleY:0.4132,x:58.83,y:82.4313}},{t:this.shape_27,p:{scaleX:0.4128,scaleY:0.4132,x:58.83,y:82.4313}},{t:this.shape_26,p:{scaleX:0.4128,scaleY:0.4132,x:58.83,y:96.9132}},{t:this.shape_25},{t:this.shape_24,p:{scaleX:0.4128,scaleY:0.4131,x:35.5429,y:76.0763}},{t:this.shape_23,p:{scaleX:0.4128,scaleY:0.4131,x:40.3309,y:76.0866}},{t:this.shape_22,p:{scaleX:0.4128,scaleY:0.4131,x:47.5543,y:76.0763}},{t:this.shape_21,p:{scaleX:0.4128,scaleY:0.4131,x:56.9344,y:76.0763}},{t:this.shape_20,p:{scaleX:0.4128,scaleY:0.4131,x:62.4861,y:77.0988}},{t:this.shape_19,p:{scaleX:0.4128,scaleY:0.4131,x:69.6476,y:77.0988}},{t:this.shape_18,p:{scaleX:0.4128,scaleY:0.4131,x:76.48,y:77.0988}},{t:this.shape_17,p:{scaleX:0.4128,scaleY:0.4131,x:81.8036,y:77.0368}},{t:this.shape_16,p:{scaleX:0.4128,scaleY:0.4132,x:58.9756,y:34.5448}},{t:this.shape_15},{t:this.shape_14,p:{scaleX:0.4128,scaleY:0.4131,x:58.9157,y:32.398}},{t:this.shape_13,p:{scaleX:0.4127,scaleY:0.4131,x:58.7414,y:7.2632}},{t:this.shape_12,p:{scaleX:0.4127,scaleY:0.4131,x:58.994,y:17.5073}},{t:this.shape_11,p:{scaleX:0.4127,scaleY:0.4131,x:55.9667,y:7.2787}},{t:this.shape_10,p:{scaleX:0.4128,scaleY:0.4131,x:40.0853,y:45.8247}},{t:this.shape_9,p:{scaleX:0.4128,scaleY:0.4131,x:77.8443,y:45.8144}},{t:this.shape_8,p:{scaleX:0.4128,scaleY:0.4131,x:59.0292,y:44.606}},{t:this.shape_7,p:{scaleX:0.4128,scaleY:0.4131,x:68.5744,y:44.606}},{t:this.shape_6,p:{scaleX:0.4128,scaleY:0.4131,x:49.2673,y:44.6163}},{t:this.shape_5,p:{scaleX:0.4128,scaleY:0.4132,x:42.2676,y:96.705}},{t:this.shape_4,p:{scaleX:0.4128,scaleY:0.4132,x:47.7693,y:97.645}},{t:this.shape_3,p:{scaleX:0.4128,scaleY:0.4132,x:53.5989,y:97.645}},{t:this.shape_2,p:{scaleX:0.4128,scaleY:0.4132,x:62.6082,y:96.705}},{t:this.shape_1,p:{scaleX:0.4128,scaleY:0.4132,x:68.8104,y:96.674}},{t:this.shape,p:{scaleX:0.4128,scaleY:0.4132,x:75.4152,y:96.674}}]}).to({state:[{t:this.shape_28,p:{scaleX:0.4745,scaleY:0.4749,x:58.8829,y:79.9863}},{t:this.shape_27,p:{scaleX:0.4745,scaleY:0.4749,x:58.8829,y:79.9863}},{t:this.shape_26,p:{scaleX:0.4745,scaleY:0.4749,x:58.8829,y:96.6315}},{t:this.shape_30},{t:this.shape_24,p:{scaleX:0.4744,scaleY:0.4748,x:32.1014,y:72.6647}},{t:this.shape_23,p:{scaleX:0.4744,scaleY:0.4748,x:37.6045,y:72.6765}},{t:this.shape_22,p:{scaleX:0.4744,scaleY:0.4748,x:45.9067,y:72.6647}},{t:this.shape_21,p:{scaleX:0.4744,scaleY:0.4748,x:56.6877,y:72.6647}},{t:this.shape_20,p:{scaleX:0.4744,scaleY:0.4748,x:63.0685,y:73.8399}},{t:this.shape_19,p:{scaleX:0.4744,scaleY:0.4748,x:71.2996,y:73.8399}},{t:this.shape_18,p:{scaleX:0.4744,scaleY:0.4748,x:79.1524,y:73.8399}},{t:this.shape_17,p:{scaleX:0.4744,scaleY:0.4748,x:85.271,y:73.7686}},{t:this.shape_16,p:{scaleX:0.4744,scaleY:0.4749,x:58.9948,y:24.9381}},{t:this.shape_29},{t:this.shape_14,p:{scaleX:0.4744,scaleY:0.4748,x:58.9649,y:22.464}},{t:this.shape_13,p:{scaleX:0.4744,scaleY:0.4748,x:58.7735,y:-6.4386}},{t:this.shape_12,p:{scaleX:0.4744,scaleY:0.4748,x:59.0638,y:5.3345}},{t:this.shape_11,p:{scaleX:0.4744,scaleY:0.4748,x:55.5844,y:-6.4209}},{t:this.shape_10,p:{scaleX:0.4744,scaleY:0.4748,x:37.3222,y:37.8958}},{t:this.shape_9,p:{scaleX:0.4744,scaleY:0.4748,x:80.7204,y:37.8839}},{t:this.shape_8,p:{scaleX:0.4744,scaleY:0.4748,x:59.0953,y:36.495}},{t:this.shape_7,p:{scaleX:0.4744,scaleY:0.4748,x:70.0661,y:36.495}},{t:this.shape_6,p:{scaleX:0.4744,scaleY:0.4748,x:47.8755,y:36.5069}},{t:this.shape_5,p:{scaleX:0.4744,scaleY:0.4749,x:39.8217,y:96.3821}},{t:this.shape_4,p:{scaleX:0.4744,scaleY:0.4749,x:46.145,y:97.4625}},{t:this.shape_3,p:{scaleX:0.4744,scaleY:0.4749,x:52.8451,y:97.4625}},{t:this.shape_2,p:{scaleX:0.4744,scaleY:0.4749,x:63.1998,y:96.3821}},{t:this.shape_1,p:{scaleX:0.4744,scaleY:0.4749,x:70.3283,y:96.3465}},{t:this.shape,p:{scaleX:0.4744,scaleY:0.4749,x:77.9194,y:96.3465}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-14.8,150.2,127.5);


(lib.CADTower = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#707070").s().p("AhBBWIAAirIA4AAQAdAAALADQAOAEALANQAKANAAAUQAAAQgGALQgHALgIAFQgIAFgKADQgOACgVAAIgWAAIAABBgAgegHIATAAQATAAAHgDQAHgCAEgGQAEgFAAgIQAAgJgGgHQgFgGgJgBQgGgCgSAAIgQAAg");
	this.shape.setTransform(77.033,96.6598,0.4129,0.4131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AgRBWIAAirIAiAAIAACrg");
	this.shape_1.setTransform(72.2331,96.6598,0.4129,0.4131);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("Ag0BVIgDgZIAOABQALAAAGgHQAGgHADgKIgwh7IAjAAIAdBXIAdhXIAiAAIg0CMQgEALgEAGIgIAJQgGAEgGABQgHACgKAAQgLAAgIgCg");
	this.shape_2.setTransform(65.2966,98.6838,0.4129,0.4131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("AAYBAIAAg/QAAgUgDgGQgBgFgFgEQgFgDgHAAQgHAAgHAEQgHAFgCAIQgCAGgBAWIAAA4IghAAIAAh8IAfAAIAAASQAQgUAYAAQALAAAJADQAJAEAEAGQAEAGADAJQABAHABAOIAABNg");
	this.shape_3.setTransform(59.5781,97.5789,0.4129,0.4131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("AAYBAIAAg/QAAgSgCgIQgDgGgEgDQgFgDgHAAQgHAAgHAEQgHAFgCAIQgDAGAAAWIAAA4IghAAIAAh8IAfAAIAAASQAQgUAYAAQAKAAAKADQAIAEAFAGQAFAHACAIQACAKAAALIAABNg");
	this.shape_4.setTransform(53.5397,97.5789,0.4129,0.4131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("AgtAsQgMgRAAgaQAAgfAQgRQARgRAYAAQAbAAAPASQARATgBAlIhSAAQABAPAHAHQAIAJAKgBQAIAAAFgEQAFgDADgKIAhAFQgHATgNAJQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKABgHAHg");
	this.shape_5.setTransform(47.7088,97.6408,0.4129,0.4131);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#707070").s().p("AAgBWIguhRIgcAdIAAA0IgjAAIAAirIAjAAIAABNIBFhNIAvAAIhBBDIBEBog");
	this.shape_6.setTransform(41.7827,96.6598,0.4129,0.4131);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00E3FF").s().p("AiNEzIgCkdIgtkOIFFg6QABAYARDNIAiGAg");
	this.shape_7.setTransform(49.425,44.6239,0.4129,0.413);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00E3FF").s().p("Ai8EzIAimAQARjNABgYIFFA6IgtENIgCEeg");
	this.shape_8.setTransform(68.7364,44.6136,0.4129,0.413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C7CCCC").s().p("AjTEzIAHjHIBqmeIBgApIBggpIB2GeIAADHg");
	this.shape_9.setTransform(59.1891,44.6136,0.4129,0.413);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C5FF").s().p("AhiEWIgFhQQgEgoAGhQQANieA2jFIAVARQAYAZAVAjQBDBvADCtIAEDCg");
	this.shape_10.setTransform(78.0083,45.8114,0.4129,0.413);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C5FF").s().p("AhiEWIADjBQADisA/hwQAUgkAXgYIATgSQAzDFAMCfQAGBQgFAoIgEBPg");
	this.shape_11.setTransform(40.2478,45.8321,0.4129,0.413);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#754D29").s().p("AixBTQgKgVAtgnQAtgnBKgiQBJgjA7gJQA8gKAJAWQAKAVgtAoQgtAmhKAjQhJAig6AJQgTADgNAAQgfAAgHgPg");
	this.shape_12.setTransform(56.17,7.2697,0.4128,0.413);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FED9CC").s().p("AgGEXQghgCghgSQgMgHgkgmIgLgMQgUgQgTgoQgVgsgHg8QgcgegPgeQggg9A/AAIgBgQQAAg9AggtQAzhKB6gDIAAgBIANAAIAAABQCPAEAtBnQAXA0gGAzQA/AAgiBAQgQAfgeAfQgGA4gSAlQgLAZgPAQQgIAHgFADQgtAwgPAJQggASghACIgHABg");
	this.shape_13.setTransform(59.058,17.5119,0.4128,0.413);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#754D29").s().p("AjTCyQhHhmAkhbQALgdAVgZQALgMAIgGQCGhyCAAfQBAAPAmAmQBnBMgPB1QgHA6gbAsg");
	this.shape_14.setTransform(58.9452,7.2705,0.4128,0.413);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6BEA6").s().p("AkwBHIBcgbIAgAHQAlgBAigkQAhglgFhTIgNhLIDFAAQghA5AQBHQAIAkAPAXIDFBKIiVBZIjZANg");
	this.shape_15.setTransform(59.0859,32.3979,0.4129,0.413);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-78.9,0,78.9,0).ss(5).p("AriKFIAA0JQAAgnAbgbQAcgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAbQgbAcgnAAI0JAAQgnAAgcgcQgbgbAAgng");
	this.shape_16.setTransform(59.1033,34.5546,0.4129,0.4131);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AqELjQgnAAgbgcQgcgbAAgnIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAcAcQAbAbAAAnIAAUJQAAAngbAbQgcAcgnAAg");
	this.shape_17.setTransform(59.1033,34.5546,0.4129,0.4131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAfAAIAAASQAIgMAHgFQAGgEAJAAQALAAALAGIgLAeQgIgFgIAAQgIAAgEADQgEAFgDAKQgDAKAAAgIAAAog");
	this.shape_18.setTransform(84.7546,77.0484,0.4129,0.4131);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvAuQgNgSAAgbQAAgfARgSQARgTAZAAQAcAAARATQARAUgBAmIhVAAQAAAOAIAKQAJAIAKAAQAJAAAFgEQAFgFADgJIAiAFQgGATgPAKQgOAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgPgIgIQgHgHgKAAQgLAAgHAIg");
	this.shape_19.setTransform(79.4297,77.1104,0.4129,0.4131);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWBBIgWhTIgVBTIghAAIgqiBIAiAAIAYBUIAWhUIAhAAIAVBUIAZhUIAiAAIgqCBg");
	this.shape_20.setTransform(72.5955,77.1104,0.4129,0.4131);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghA8QgQgJgIgPQgJgQAAgVQAAgRAJgQQAHgQARgIQAQgJARAAQAdAAATATQATAUAAAcQAAAdgTATQgSAUgeAAQgRAAgQgIgAgVgdQgKALABASQgBATAKALQAJAKAMAAQANAAAKgKQAJgLAAgTQAAgSgJgLQgKgKgNAAQgMAAgJAKg");
	this.shape_21.setTransform(65.4322,77.1104,0.4129,0.4131);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBaIAAiUIg1AAIAAgfICNAAIAAAfIg1AAIAACUg");
	this.shape_22.setTransform(59.8791,76.0881,0.4129,0.4131);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhKBaIAAizIBCAAQAUABANADQAQAEALAMQAMANAFARQAGARAAAYQAAAXgGAPQgGATgNANQgKAJgPAFQgLADgUABgAgmA8IAbAAQAPAAAGgDQAJgBAFgFQAGgGAEgMQAEgLAAgWQAAgUgEgKQgEgLgGgHQgHgGgKgCQgHgCgWAAIgQAAg");
	this.shape_23.setTransform(50.2385,76.0881,0.4129,0.4131);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAyBaIgPgpIhHAAIgOApIgnAAIBGizIAlAAIBICzgAgZATIAwAAIgXhBg");
	this.shape_24.setTransform(42.652,76.0881,0.4129,0.4131);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag2BFQgXgZAAgrQAAgrAXgYQAXgZAlAAQAgAAAVATQAMALAGAWIgjAJQgDgOgLgJQgJgHgPgBQgTABgMAOQgNAOAAAgQAAAhAMAOQANAPASAAQAOAAALgJQAKgJAFgUIAjALQgIAdgTAPQgSANgdAAQgjAAgXgXg");
	this.shape_25.setTransform(35.1996,76.0881,0.4129,0.4131);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-144.7,0,144.7,0).ss(4).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_26.setTransform(58.9453,96.9092,0.4129,0.4131);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AyLEIQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_27.setTransform(58.9453,96.9092,0.4129,0.4131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(4).p("AxgJmMAjBAAAQB/AABahaQBZhZAAh/IAApnQAAh/hZhaQhahZh/AAMgjBAAAQh/AAhaBZQhZBaAAB/IAAJnQAAB/BZBZQBaBaB/AAg");
	this.shape_28.setTransform(58.9453,82.4305,0.4129,0.4131);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#00B4A8","#00BAF2"],[0,1],142.7,0,-142.7,0).s().p("AxgJmQh/AAhahaQhZhZAAh/IAApnQAAh/BZhZQBahaB/AAMAjBAAAQB/AABaBaQBZBZAAB/IAAJnQAAB/hZBZQhaBah/AAg");
	this.shape_29.setTransform(58.9453,82.4305,0.4129,0.4131);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00CCCC").ss(8).p("AriKFIAA0JQAAgnAbgbQAcgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAbQgbAcgnAAI0JAAQgnAAgcgcQgbgbAAgng");
	this.shape_30.setTransform(59.2204,23.1719,0.4747,0.4749);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00CCCC").ss(7).p("AIoB9IxPAAQg0AAglgkQglglAAg0QAAgzAlgkQAlglA0AAIRPAAQA0AAAlAlQAlAkAAAzQAAA0glAlQglAkg0AAg");
	this.shape_31.setTransform(59.025,94.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AonB9Qg0AAglgkQglglAAg0QAAgzAlgkQAlglA0AAIRPAAQA0AAAlAlQAlAkAAAzQAAA0glAlQglAkg0AAg");
	this.shape_32.setTransform(59.025,94.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{scaleX:0.4129,scaleY:0.4131,x:58.9453,y:82.4305}},{t:this.shape_28,p:{scaleX:0.4129,scaleY:0.4131,x:58.9453,y:82.4305}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{scaleX:0.4129,scaleY:0.4131,x:35.1996,y:76.0881}},{t:this.shape_24,p:{scaleX:0.4129,scaleY:0.4131,x:42.652,y:76.0881}},{t:this.shape_23,p:{scaleX:0.4129,scaleY:0.4131,x:50.2385,y:76.0881}},{t:this.shape_22,p:{scaleX:0.4129,scaleY:0.4131,x:59.8791,y:76.0881}},{t:this.shape_21,p:{scaleX:0.4129,scaleY:0.4131,x:65.4322,y:77.1104}},{t:this.shape_20,p:{scaleX:0.4129,scaleY:0.4131,x:72.5955,y:77.1104}},{t:this.shape_19,p:{scaleX:0.4129,scaleY:0.4131,x:79.4297,y:77.1104}},{t:this.shape_18,p:{scaleX:0.4129,scaleY:0.4131,x:84.7546,y:77.0484}},{t:this.shape_17,p:{scaleX:0.4129,scaleY:0.4131,x:59.1033,y:34.5546}},{t:this.shape_16},{t:this.shape_15,p:{scaleX:0.4129,scaleY:0.413,x:59.0859,y:32.3979}},{t:this.shape_14,p:{scaleX:0.4128,scaleY:0.413,x:58.9452,y:7.2705}},{t:this.shape_13,p:{scaleX:0.4128,scaleY:0.413,x:59.058,y:17.5119}},{t:this.shape_12,p:{scaleX:0.4128,scaleY:0.413,x:56.17,y:7.2697}},{t:this.shape_11,p:{scaleX:0.4129,scaleY:0.413,x:40.2478,y:45.8321}},{t:this.shape_10,p:{scaleX:0.4129,scaleY:0.413,x:78.0083,y:45.8114}},{t:this.shape_9,p:{scaleX:0.4129,scaleY:0.413,x:59.1891,y:44.6136}},{t:this.shape_8,p:{scaleX:0.4129,scaleY:0.413,x:68.7364,y:44.6136}},{t:this.shape_7,p:{scaleX:0.4129,scaleY:0.413,x:49.425,y:44.6239}},{t:this.shape_6,p:{scaleX:0.4129,scaleY:0.4131,x:41.7827,y:96.6598}},{t:this.shape_5,p:{scaleX:0.4129,scaleY:0.4131,x:47.7088,y:97.6408}},{t:this.shape_4,p:{scaleX:0.4129,scaleY:0.4131,x:53.5397,y:97.5789}},{t:this.shape_3,p:{scaleX:0.4129,scaleY:0.4131,x:59.5781,y:97.5789}},{t:this.shape_2,p:{scaleX:0.4129,scaleY:0.4131,x:65.2966,y:98.6838}},{t:this.shape_1,p:{scaleX:0.4129,scaleY:0.4131,x:72.2331,y:96.6598}},{t:this.shape,p:{scaleX:0.4129,scaleY:0.4131,x:77.033,y:96.6598}}]}).to({state:[{t:this.shape_29,p:{scaleX:0.4747,scaleY:0.475,x:59.0273,y:78.2367}},{t:this.shape_28,p:{scaleX:0.4747,scaleY:0.475,x:59.0273,y:78.2367}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_25,p:{scaleX:0.4747,scaleY:0.4749,x:31.7236,y:70.9253}},{t:this.shape_24,p:{scaleX:0.4747,scaleY:0.4749,x:40.2911,y:70.9253}},{t:this.shape_23,p:{scaleX:0.4747,scaleY:0.4749,x:49.0129,y:70.9253}},{t:this.shape_22,p:{scaleX:0.4747,scaleY:0.4749,x:60.0961,y:70.9253}},{t:this.shape_21,p:{scaleX:0.4747,scaleY:0.4749,x:66.4802,y:72.1007}},{t:this.shape_20,p:{scaleX:0.4747,scaleY:0.4749,x:74.7154,y:72.1007}},{t:this.shape_19,p:{scaleX:0.4747,scaleY:0.4749,x:82.5723,y:72.1007}},{t:this.shape_18,p:{scaleX:0.4747,scaleY:0.4749,x:88.694,y:72.0295}},{t:this.shape_17,p:{scaleX:0.4747,scaleY:0.4749,x:59.2204,y:23.1719}},{t:this.shape_30},{t:this.shape_15,p:{scaleX:0.4747,scaleY:0.4749,x:59.1942,y:20.6952}},{t:this.shape_14,p:{scaleX:0.4746,scaleY:0.4748,x:59.0365,y:-8.1992}},{t:this.shape_13,p:{scaleX:0.4746,scaleY:0.4748,x:59.1661,y:3.5754}},{t:this.shape_12,p:{scaleX:0.4746,scaleY:0.4748,x:55.8458,y:-8.2002}},{t:this.shape_11,p:{scaleX:0.4747,scaleY:0.4749,x:37.5364,y:36.1408}},{t:this.shape_10,p:{scaleX:0.4747,scaleY:0.4749,x:80.9491,y:36.1171}},{t:this.shape_9,p:{scaleX:0.4747,scaleY:0.4749,x:59.3129,y:34.7399}},{t:this.shape_8,p:{scaleX:0.4747,scaleY:0.4749,x:70.2893,y:34.7399}},{t:this.shape_7,p:{scaleX:0.4747,scaleY:0.4749,x:48.0873,y:34.7518}},{t:this.shape_6,p:{scaleX:0.4747,scaleY:0.4749,x:39.2986,y:94.5634}},{t:this.shape_5,p:{scaleX:0.4747,scaleY:0.4749,x:46.1117,y:95.6913}},{t:this.shape_4,p:{scaleX:0.4747,scaleY:0.4749,x:52.8153,y:95.6201}},{t:this.shape_3,p:{scaleX:0.4747,scaleY:0.4749,x:59.7575,y:95.6201}},{t:this.shape_2,p:{scaleX:0.4747,scaleY:0.4749,x:66.3319,y:96.8904}},{t:this.shape_1,p:{scaleX:0.4747,scaleY:0.4749,x:74.3067,y:94.5634}},{t:this.shape,p:{scaleX:0.4747,scaleY:0.4749,x:79.8249,y:94.5634}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-16.6,150.3,127.5);


(lib.BSDTower = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#707070").s().p("AhBBWIAAirIA4AAQAdAAALADQAPAFAKAMQAKANAAAUQAAAQgGALQgGAKgJAGQgHAFgKADQgOACgVAAIgXAAIAABBgAgegHIATAAQAUAAAGgDQAHgCAEgGQAEgGAAgHQAAgJgFgHQgGgGgIgBQgGgCgSAAIgRAAg");
	this.shape.setTransform(77.0016,96.6004,0.4128,0.413);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_1.setTransform(72.213,96.6004,0.4128,0.413);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("AAYBAIAAg/QAAgSgCgIQgDgGgEgDQgFgDgHAAQgHAAgHAEQgHAFgCAIQgDAGAAAWIAAA4IghAAIAAh8IAfAAIAAASQAQgUAYAAQAKAAAKADQAIAEAFAGQAFAHACAIQACAKAAALIAABNg");
	this.shape_2.setTransform(65.0713,97.5193,0.4128,0.413);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("AgfA6QgQgJgIgPQgIgPAAgUQAAgQAIgPQAIgPAPgJQAQgIAQAAQAdAAARASQASATAAAbQAAAcgSATQgSASgcAAQgQAAgPgHgAgVgcQgIAMAAAQQAAASAIALQAJAJAMAAQANAAAJgJQAIgKAAgTQAAgRgIgLQgJgJgNAAQgMAAgJAJg");
	this.shape_3.setTransform(59.0236,97.5812,0.4128,0.413);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("AA7BAIAAhHQAAgRgEgGQgEgHgKAAQgHAAgGAEQgGAFgDAHQgCAHAAASIAAA8IggAAIAAhEQAAgSgCgFQgBgFgEgCQgEgDgGAAQgJAAgFAEQgGAEgDAHQgDAKABAPIAAA9IgiAAIAAh8IAfAAIAAASQARgUAWAAQAMAAAIAEQAJAGAFAKQAIgKAKgGQAJgEALAAQANgBAKAGQAJAGAFAKQADAIAAASIAABPg");
	this.shape_4.setTransform(51.5621,97.5193,0.4128,0.413);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("AgQBWIAAh7IAhAAIAAB7gAgQg2IAAgfIAhAAIAAAfg");
	this.shape_5.setTransform(45.824,96.6004,0.4128,0.413);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#707070").s().p("AgwBKQgRgPgEgdIAigDQADAQAJAJQAKAIAPAAQAQAAAJgHQAIgIAAgJQAAgGgDgEQgEgFgJgDIgbgHQgcgHgLgJQgPgOAAgVQAAgNAHgLQAHgLAOgHQAPgGATAAQAfAAARAPQAQAOABAXIgjACQgCgOgHgFQgIgGgNAAQgPAAgJAGQgFAEAAAHQAAAGAFAEQAGAGAZAGQAaAGALAGQALAGAIALQAHALAAAQQAAAPgIANQgJANgOAGQgPAGgXAAQgfAAgSgPg");
	this.shape_6.setTransform(41.0664,96.6004,0.4128,0.413);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00E3FF").s().p("AiMEzIgDkdIgtkOIFFg6QABAZARDMIAiGAg");
	this.shape_7.setTransform(49.4166,44.5641,0.4128,0.4129);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00E3FF").s().p("Ai8EzIAimAQARjNABgYIFFA6IgtENIgDEeg");
	this.shape_8.setTransform(68.734,44.5538,0.4128,0.4129);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C7CCCC").s().p("AjTEzIAHjHIBqmeIBgApIBggpIB2GeIAADHg");
	this.shape_9.setTransform(59.1785,44.5538,0.4128,0.4129);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00C5FF").s().p("AhiEWIgFhQQgEgoAGhQQANieA2jFIAVARQAYAZAVAjQBDBvADCtIAEDCg");
	this.shape_10.setTransform(78.0039,45.7514,0.4128,0.4129);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00C5FF").s().p("AhiEWIADjBQADisA/hwQAUgjAWgZIAUgSQAyDFAMCfQAGBQgEAoIgEBPg");
	this.shape_11.setTransform(40.245,45.772,0.4128,0.4129);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5A3F21").s().p("AixBTQgKgVAtgnQAtgnBKgiQBIgjA7gJQA8gKAKAWQAKAVgtAoQguAmhJAjQhJAig7AJQgSADgOAAQgeAAgHgPg");
	this.shape_12.setTransform(56.1798,7.201,0.4127,0.4129);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FED9CC").s().p("AgGEXQghgCghgSQgMgHgkgmIgLgMQgUgQgTgoQgVgtgHg7QgcgegPgeQggg9A/AAIgBgQQAAg9AggtQAzhKB6gDIAAgBIAMAAIAAABQCQAEAtBnQAXA0gGAzQA/AAgiBAQgQAfgeAfQgGA4gSAlQgLAZgPAQQgIAHgFADQgtAwgPAJQghASghACIgGABg");
	this.shape_13.setTransform(59.1907,17.4402,0.4127,0.4129);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5A3F21").s().p("AjTCyQhHhmAkhbQALgdAVgZIASgSQCGhyCAAfQBBAPAlAmQBnBMgOB1QgHA6gbAsg");
	this.shape_14.setTransform(58.9461,7.2018,0.4127,0.4129);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6BEA6").s().p("AkwBHIBcgbIAgAHQAmgBAggkQAiglgGhTIgMhLIDFAAQghA5AQBHQAIAkAPAXIDEBKIiUBZIjZANg");
	this.shape_15.setTransform(59.0753,32.3409,0.4128,0.4129);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-78.9,0,78.9,0).ss(5).p("AriKFIAA0JQAAgnAbgbQAcgcAnAAIUIAAQAoAAAcAcQAbAbAAAnIAAUJQAAAngbAbQgcAcgoAAI0IAAQgnAAgcgcQgbgbAAgng");
	this.shape_16.setTransform(59.113,34.5546,0.4129,0.4131);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AqELjQgnAAgbgcQgcgbAAgnIAA0JQAAgnAcgbQAbgcAnAAIUJAAQAnAAAbAcQAcAbAAAnIAAUJQAAAngcAbQgbAcgnAAg");
	this.shape_17.setTransform(59.113,34.5546,0.4129,0.4131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBCIAAiAIAgAAIAAASQAHgMAGgFQAHgEAIAAQAMAAALAGIgLAeQgHgFgJAAQgIAAgEADQgEAFgDAKQgDAKAAAgIAAAog");
	this.shape_18.setTransform(84.4588,76.9926,0.4128,0.413);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvAuQgNgTAAgaQAAgfARgSQARgTAaAAQAbAAASATQARAUgBAmIhVAAQAAAOAIAKQAIAIALAAQAIAAAFgEQAGgFADgJIAiAFQgHATgOAKQgPAKgVAAQggAAgRgWgAgRggQgHAIAAAOIAyAAQAAgPgHgIQgIgHgKAAQgKAAgIAIg");
	this.shape_19.setTransform(79.1245,77.0546,0.4128,0.413);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWBBIgWhTIgWBTIghAAIgoiBIAhAAIAYBUIAXhUIAfAAIAWBUIAZhUIAhAAIgpCBg");
	this.shape_20.setTransform(72.3019,77.0546,0.4128,0.413);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghA8QgQgJgJgPQgIgQAAgVQAAgRAIgQQAJgQAPgIQAQgJASAAQAdAAATATQATAUAAAcQAAAdgTATQgUAUgcAAQgRAAgQgIgAgWgdQgJALAAASQAAATAJALQAJAKANAAQAOAAAIgKQAJgLAAgTQAAgSgJgLQgIgKgOAAQgNAAgJAKg");
	this.shape_21.setTransform(65.1399,77.0546,0.4128,0.413);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBaIAAiUIg1AAIAAgfICNAAIAAAfIg1AAIAACUg");
	this.shape_22.setTransform(59.5878,76.0324,0.4128,0.413);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhKBaIAAizIBCAAQAUABANADQAQAEALAMQALAMAGASQAGARAAAYQAAAUgFASQgHATgMANQgLAJgPAFQgLADgUABgAgmA8IAbAAQAPAAAGgDQAIgBAHgFQAFgGAEgMQADgLAAgWQAAgUgDgKQgEgMgGgGQgHgGgKgCQgHgCgWAAIgQAAg");
	this.shape_23.setTransform(49.949,76.0324,0.4128,0.413);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgyBNQgSgQgEgeIAkgDQADARAJAJQAKAIAQAAQASAAAIgHQAJgIAAgKQAAgHgEgDQgEgFgJgDIgcgIQgcgHgNgKQgQgPAAgVQAAgMAIgNQAHgMAPgGQAOgHAVAAQAhAAARAPQARAPABAZIgkABQgCgNgIgHQgIgGgOAAQgQAAgJAHQgGAEAAAHQAAAGAGAFQAHAFAZAHQAaAGANAHQANAGAHALQAHAKAAASQAAARgJAMQgJAOgPAGQgQAHgXAAQggAAgTgQg");
	this.shape_24.setTransform(42.5909,76.0428,0.4128,0.413);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhKBaIAAizIBIAAQAVAAAJACQALACAIAGQAIAFAFAKQAGAKAAAKQAAANgGALQgHAKgMAFQAQAFAJAKQAJAMAAAPQAAANgGAMQgGALgKAHQgJAHgOACIgrABgAgmA8IAiAAIAYgBQAIgCAEgGQAFgFABgKQgBgIgEgFQgDgGgHgDQgJgDgXAAIgdAAgAgmgRIAYAAIAZgBQAKgBAEgFQAGgHAAgHQAAgIgFgGQgDgEgKgCIgzgBg");
	this.shape_25.setTransform(35.625,76.0324,0.4128,0.413);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#00B4A8","#00BAF2"],[0,1],-144.7,0,144.7,0).ss(4).p("ASMEIMgkXAAAQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_26.setTransform(58.9443,96.9092,0.4129,0.4131);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AyLEIQhtAAhNhOQhNhNAAhtQAAhsBNhNQBNhOBtAAMAkXAAAQBtAABNBOQBNBNAABsQAABthNBNQhNBOhtAAg");
	this.shape_27.setTransform(58.9443,96.9092,0.4129,0.4131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(4).p("AxhJmMAjCAAAQB/AABahaQBZhZAAh/IAApnQAAh/hZhaQhahZh/AAMgjCAAAQh+AAhaBZQhZBaAAB/IAAJnQAAB+BZBaQBaBaB+AAg");
	this.shape_28.setTransform(58.9443,82.4305,0.4129,0.4131);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#00B4A8","#00BAF2"],[0,1],142.7,0,-142.7,0).s().p("AxhJmQh+AAhahaQhZhZAAh/IAApnQAAh/BZhZQBahaB+AAMAjCAAAQB/AABaBaQBZBZAAB/IAAJnQAAB/hZBZQhaBah/AAg");
	this.shape_29.setTransform(58.9443,82.4305,0.4129,0.4131);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00CCCC").ss(8).p("AriKFIAA0JQAAgnAbgbQAcgcAnAAIUIAAQAoAAAcAcQAbAbAAAnIAAUJQAAAngbAbQgcAcgoAAI0IAAQgnAAgcgcQgbgbAAgng");
	this.shape_30.setTransform(59.2028,23.4686,0.4777,0.478);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00CCCC").ss(7).p("AIsB+IxXAAQg0AAglglQglglAAg0QAAgzAlglQAlglA0AAIRXAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAg");
	this.shape_31.setTransform(59.025,95.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AorB+Qg0AAglglQglglAAg0QAAgzAlglQAlglA0AAIRXAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAg");
	this.shape_32.setTransform(59.025,95.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{scaleX:0.4129,scaleY:0.4131,x:58.9443,y:82.4305}},{t:this.shape_28,p:{scaleX:0.4129,scaleY:0.4131,x:58.9443,y:82.4305}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{scaleX:0.4128,scaleY:0.413,x:35.625,y:76.0324}},{t:this.shape_24,p:{scaleX:0.4128,scaleY:0.413,x:42.5909,y:76.0428}},{t:this.shape_23,p:{scaleX:0.4128,scaleY:0.413,x:49.949,y:76.0324}},{t:this.shape_22,p:{scaleX:0.4128,scaleY:0.413,x:59.5878,y:76.0324}},{t:this.shape_21,p:{scaleX:0.4128,scaleY:0.413,x:65.1399,y:77.0546}},{t:this.shape_20,p:{scaleX:0.4128,scaleY:0.413,x:72.3019,y:77.0546}},{t:this.shape_19,p:{scaleX:0.4128,scaleY:0.413,x:79.1245,y:77.0546}},{t:this.shape_18,p:{scaleX:0.4128,scaleY:0.413,x:84.4588,y:76.9926}},{t:this.shape_17,p:{scaleX:0.4129,scaleY:0.4131,x:59.113,y:34.5546}},{t:this.shape_16},{t:this.shape_15,p:{scaleX:0.4128,scaleY:0.4129,x:59.0753,y:32.3409}},{t:this.shape_14,p:{scaleX:0.4127,scaleY:0.4129,x:58.9461,y:7.2018}},{t:this.shape_13,p:{scaleX:0.4127,scaleY:0.4129,x:59.1907,y:17.4402}},{t:this.shape_12,p:{scaleX:0.4127,scaleY:0.4129,x:56.1798,y:7.201}},{t:this.shape_11,p:{scaleX:0.4128,scaleY:0.4129,x:40.245,y:45.772}},{t:this.shape_10,p:{scaleX:0.4128,scaleY:0.4129,x:78.0039,y:45.7514}},{t:this.shape_9,p:{scaleX:0.4128,scaleY:0.4129,x:59.1785,y:44.5538}},{t:this.shape_8,p:{scaleX:0.4128,scaleY:0.4129,x:68.734,y:44.5538}},{t:this.shape_7,p:{scaleX:0.4128,scaleY:0.4129,x:49.4166,y:44.5641}},{t:this.shape_6,p:{scaleX:0.4128,scaleY:0.413,x:41.0664,y:96.6004}},{t:this.shape_5,p:{scaleX:0.4128,scaleY:0.413,x:45.824,y:96.6004}},{t:this.shape_4,p:{scaleX:0.4128,scaleY:0.413,x:51.5621,y:97.5193}},{t:this.shape_3,p:{scaleX:0.4128,scaleY:0.413,x:59.0236,y:97.5812}},{t:this.shape_2,p:{scaleX:0.4128,scaleY:0.413,x:65.0713,y:97.5193}},{t:this.shape_1,p:{scaleX:0.4128,scaleY:0.413,x:72.213,y:96.6004}},{t:this.shape,p:{scaleX:0.4128,scaleY:0.413,x:77.0016,y:96.6004}}]}).to({state:[{t:this.shape_29,p:{scaleX:0.4777,scaleY:0.4781,x:59.01,y:78.9378}},{t:this.shape_28,p:{scaleX:0.4777,scaleY:0.4781,x:59.01,y:78.9378}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_25,p:{scaleX:0.4776,scaleY:0.478,x:32.035,y:71.5336}},{t:this.shape_24,p:{scaleX:0.4776,scaleY:0.478,x:40.0943,y:71.5455}},{t:this.shape_23,p:{scaleX:0.4776,scaleY:0.478,x:48.6072,y:71.5336}},{t:this.shape_22,p:{scaleX:0.4776,scaleY:0.478,x:59.7588,y:71.5336}},{t:this.shape_21,p:{scaleX:0.4776,scaleY:0.478,x:66.1823,y:72.7166}},{t:this.shape_20,p:{scaleX:0.4776,scaleY:0.478,x:74.4684,y:72.7166}},{t:this.shape_19,p:{scaleX:0.4776,scaleY:0.478,x:82.3619,y:72.7166}},{t:this.shape_18,p:{scaleX:0.4776,scaleY:0.478,x:88.5333,y:72.6449}},{t:this.shape_17,p:{scaleX:0.4777,scaleY:0.478,x:59.2028,y:23.4686}},{t:this.shape_30},{t:this.shape_15,p:{scaleX:0.4775,scaleY:0.4779,x:59.1567,y:20.9474}},{t:this.shape_14,p:{scaleX:0.4774,scaleY:0.4778,x:59.0133,y:-8.184}},{t:this.shape_13,p:{scaleX:0.4774,scaleY:0.4778,x:59.2963,y:3.664}},{t:this.shape_12,p:{scaleX:0.4774,scaleY:0.4778,x:55.8129,y:-8.185}},{t:this.shape_11,p:{scaleX:0.4775,scaleY:0.4779,x:37.3728,y:36.4922}},{t:this.shape_10,p:{scaleX:0.4775,scaleY:0.4779,x:81.0543,y:36.4683}},{t:this.shape_9,p:{scaleX:0.4775,scaleY:0.4779,x:59.2761,y:35.0823}},{t:this.shape_8,p:{scaleX:0.4775,scaleY:0.4779,x:70.3304,y:35.0823}},{t:this.shape_7,p:{scaleX:0.4775,scaleY:0.4779,x:47.983,y:35.0943}},{t:this.shape_6,p:{scaleX:0.4776,scaleY:0.478,x:38.3355,y:95.3615}},{t:this.shape_5,p:{scaleX:0.4776,scaleY:0.478,x:43.8401,y:95.3615}},{t:this.shape_4,p:{scaleX:0.4776,scaleY:0.478,x:50.4792,y:96.4252}},{t:this.shape_3,p:{scaleX:0.4776,scaleY:0.478,x:59.1124,y:96.4969}},{t:this.shape_2,p:{scaleX:0.4776,scaleY:0.478,x:66.1097,y:96.4252}},{t:this.shape_1,p:{scaleX:0.4776,scaleY:0.478,x:74.3727,y:95.3615}},{t:this.shape,p:{scaleX:0.4776,scaleY:0.478,x:79.9132,y:95.3615}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-16.6,143.29999999999998,136.2);


// stage content:
(lib.OrganizationalChartHATowerVMO = function(mode,startPosition,loop,reversed) {
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		let root = this;
		this.VMOname.visible=false;
		this.stop();
		
		
		stage.enableMouseOver(3);
		_this.VMO1.on('mouseover', function(){
		_this.VMOname.visible = true;
		});
		
		stage.enableMouseOver(3);
		_this.VMO1.on('mouseout', function(){
		_this.VMOname.visible = false;
		});
		
		
		stage.enableMouseOver(3);
		_this.VMO2.on('mouseover', function(){
		_this.VMOname.visible = true;
		});
		
		stage.enableMouseOver(3);
		_this.VMO2.on('mouseout', function(){
		_this.VMOname.visible = false;
		});
		
		
		stage.enableMouseOver(3);
		_this.VMO3.on('mouseover', function(){
		_this.VMOname.visible = true;
		});
		
		stage.enableMouseOver(3);
		_this.VMO3.on('mouseout', function(){
		_this.VMOname.visible = false;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// VMOname
	this.VMOname = new lib.VMOname();
	this.VMOname.name = "VMOname";
	this.VMOname.setTransform(1137.55,182,1,1,0,0,0,90.7,15);

	this.timeline.addTween(cjs.Tween.get(this.VMOname).wait(1));

	// VMO3
	this.VMO3 = new lib.VMO3();
	this.VMO3.name = "VMO3";
	this.VMO3.setTransform(1141.95,244.5,1,1,0,0,0,80.7,74.4);
	new cjs.ButtonHelper(this.VMO3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.VMO3).wait(1));

	// VMO2
	this.VMO2 = new lib.VMO2();
	this.VMO2.name = "VMO2";
	this.VMO2.setTransform(1141.95,224.2,1,1,0,0,0,80.7,54.1);
	new cjs.ButtonHelper(this.VMO2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.VMO2).wait(1));

	// VMO1
	this.VMO1 = new lib.VMO1();
	this.VMO1.name = "VMO1";
	this.VMO1.setTransform(1141.95,203.6,1,1,0,0,0,80.7,33.5);
	new cjs.ButtonHelper(this.VMO1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.VMO1).wait(1));

	// VMODept
	this.instance = new lib.VMODept();
	this.instance.setTransform(1137.85,248.45,1,1,0,0,0,75.3,77.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// VMObutton
	this.VMO3button = new lib.VMO1button();
	this.VMO3button.name = "VMO3button";
	this.VMO3button.setTransform(1143,301.5,1,1,0,0,0,72.2,17.6);
	new cjs.ButtonHelper(this.VMO3button, 0, 1, 1);

	this.VMO2button = new lib.VMO1button();
	this.VMO2button.name = "VMO2button";
	this.VMO2button.setTransform(1143,261,1,1,0,0,0,72.2,17.6);
	new cjs.ButtonHelper(this.VMO2button, 0, 1, 1);

	this.VMO1button = new lib.VMO1button();
	this.VMO1button.name = "VMO1button";
	this.VMO1button.setTransform(1143,219.75,1,1,0,0,0,72.2,17.6);
	new cjs.ButtonHelper(this.VMO1button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.VMO1button},{t:this.VMO2button},{t:this.VMO3button}]}).wait(1));

	// ClusterTower
	this.ClusterTower = new lib.Symbol2();
	this.ClusterTower.name = "ClusterTower";
	this.ClusterTower.setTransform(948.95,282.75,1,1,0,0,0,58.9,54.4);
	new cjs.ButtonHelper(this.ClusterTower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ClusterTower).wait(1));

	// ISATower
	this.ISATower = new lib.ISATower();
	this.ISATower.name = "ISATower";
	this.ISATower.setTransform(805.85,281.65,1,1,0,0,0,58.8,54.4);
	new cjs.ButtonHelper(this.ISATower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ISATower).wait(1));

	// ITOTower
	this.ITOTower = new lib.ITOTower();
	this.ITOTower.name = "ITOTower";
	this.ITOTower.setTransform(662.2,282.6,1,1,0,0,0,58.9,54.4);
	new cjs.ButtonHelper(this.ITOTower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ITOTower).wait(1));

	// ISDTower
	this.ISDTower = new lib.ISDTower();
	this.ISDTower.name = "ISDTower";
	this.ISDTower.setTransform(518.8,282.6,1,1,0,0,0,58.9,54.4);
	new cjs.ButtonHelper(this.ISDTower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ISDTower).wait(1));

	// CPQTower
	this.CPQTower = new lib.Symbol1();
	this.CPQTower.name = "CPQTower";
	this.CPQTower.setTransform(380.15,282.6,1,1,0,0,0,63.8,54.4);
	new cjs.ButtonHelper(this.CPQTower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.CPQTower).wait(1));

	// CADTower
	this.CADTower = new lib.CADTower();
	this.CADTower.name = "CADTower";
	this.CADTower.setTransform(236.55,282.65,1,1,0,0,0,63.8,54.4);
	new cjs.ButtonHelper(this.CADTower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.CADTower).wait(1));

	// BSDTower
	this.instance_1 = new lib.BSDTower();
	this.instance_1.setTransform(88.1,287.55,1,1,0,0,0,58.9,59.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ITPSChiefLeader
	this.ITPSChiefLeader = new lib.ITPSChiefLeader();
	this.ITPSChiefLeader.name = "ITPSChiefLeader";
	this.ITPSChiefLeader.setTransform(518.8,104.1,1,1,0,0,0,73.7,68.7);
	new cjs.ButtonHelper(this.ITPSChiefLeader, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ITPSChiefLeader).wait(1));

	// LINE
	this.instance_2 = new lib.LINE();
	this.instance_2.setTransform(640.55,181.35,1,1,0,0,0,591.9,153.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(646.1,201,593.3000000000001,147.3);
// library properties:
lib.properties = {
	id: '8496AEE506C3924EAF85C44B918BCAC3',
	width: 1259,
	height: 365,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['8496AEE506C3924EAF85C44B918BCAC3'] = {
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