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



(lib._50_img_3 = function() {
	this.initialize(img._50_img_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib._50_img_4 = function() {
	this.initialize(img._50_img_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib._50_img_5 = function() {
	this.initialize(img._50_img_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5760,3616);// helper functions:

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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhfHBJcQkeAAkEhuQj8hqjBjDQjDjBhqj8QhukEAAkeMAAAhnDQAAkdBukEQBqj8DDjCQDBjDD8hqQEEhuEeAAMC+PAAAQEdAAEEBuQD8BqDCDDQDDDCBqD8QBuEEAAEdMAAABnDQAAEehuEEQhqD8jDDBQjCDDj8BqQkEBukdAAg");
	mask.setTransform(749.05,470);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#596BC8").s().p("Eg8kAdSMAAAg6jMB5JAAAMAAAA6jg");
	this.shape.setTransform(536.675,485.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BBC8D").s().p("A+pdSMAAAg6jMA9TAAAMAAAA6jg");
	this.shape_1.setTransform(1160.425,485.5);

	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.2601,0.2599);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,1497.8000000000002,940), null);


(lib.元件5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0F2F2").ss(5,1,1).p("AmUhjIMpAAIAADHIspAAg");
	this.shape.setTransform(40.5,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmUBkIAAjHIMpAAIAADHg");
	this.shape_1.setTransform(40.5,9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-2.5,-2.5,86,25), null);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib._50_img_5();
	this.instance.setTransform(0,0,0.7593,0.7591);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,253.6,253.6), null);


(lib.元件3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib._50_img_4();
	this.instance.setTransform(0,0,0.7593,0.7591);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253.6,253.6);


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib._50_img_3();
	this.instance.setTransform(0,0,0.7593,0.7591);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253.6,253.6);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(240,242,242,0)").ss(1,1,1).p("Ax7zzMAj3AAAQB4AAAAB4MAAAAj3QAAB4h4AAMgj3AAAQh4AAAAh4MAAAgj3QAAh4B4AAg");
	this.shape.setTransform(126.8,126.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.02)").s().p("Ax7T0Qh4AAAAh4MAAAgj3QAAh4B4AAMAj3AAAQB4AAAAB4MAAAAj3QAAB4h4AAg");
	this.shape_1.setTransform(126.8,126.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0F2F2").ss(5,1,1).p("Ax7zzMAj3AAAQB4AAAAB4MAAAAj3QAAB4h4AAMgj3AAAQh4AAAAh4MAAAgj3QAAh4B4AAg");
	this.shape_2.setTransform(126.8,126.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.4)").s().p("Ax7T0Qh4AAAAh4MAAAgj3QAAh4B4AAMAj3AAAQB4AAAAB4MAAAAj3QAAB4h4AAg");
	this.shape_3.setTransform(126.8,126.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,102,0.208)").s().p("Ax7T0Qh4AAAAh4MAAAgj3QAAh4B4AAMAj3AAAQB4AAAAB4MAAAAj3QAAB4h4AAg");
	this.shape_4.setTransform(126.8,126.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,258.6,258.6);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(545,341.5,0.7277,0.7266,0,0,0,749,470);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1090.1,683.1);


// stage content:
(lib.Group2007 = function(mode,startPosition,loop,reversed) {
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
		
		this.button1.on('click', function(){window.open('https://hateams.home/knowledge/group/roboticsdagroup/roboticssolution/televisit-overview/', '_blank');
		});
		
		
		this.button2.on('click', function()
		{window.open
		('https://hateams.home/knowledge/group/roboticsdagroup/roboticssolution/geekathon-background/', 
			'_blank');
		});
		
		
		this.button3.on('click', function()
		{window.open
		('https://hateams.home/knowledge/group/roboticsdagroup/roboticssolution/exploration-patient-usecase1/', 
			'_blank');
		});
		
		
		this.textbutton1.on('click', function(){window.open('https://hateams.home/knowledge/group/roboticsdagroup/roboticssolution/televisit-overview/', '_blank');
		});
		
		
		this.textbutton2.on('click', function()
		{window.open
		('https://hateams.home/knowledge/group/roboticsdagroup/roboticssolution/geekathon-background/', 
			'_blank');
		});
		
		
		this.textbutton3.on('click', function()
		{window.open
		('https://hateams.home/knowledge/group/roboticsdagroup/roboticssolution/exploration-patient-usecase1/', 
			'_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// imgbuttons
	this.button3 = new lib.元件1();
	this.button3.name = "button3";
	this.button3.setTransform(839.8,353.8,1,1,0,0,0,126.8,126.8);
	new cjs.ButtonHelper(this.button3, 0, 1, 2);

	this.button2 = new lib.元件1();
	this.button2.name = "button2";
	this.button2.setTransform(533.8,353.8,1,1,0,0,0,126.8,126.8);
	new cjs.ButtonHelper(this.button2, 0, 1, 2);

	this.button1 = new lib.元件1();
	this.button1.name = "button1";
	this.button1.setTransform(250,354.05,1,1,0,0,0,126.8,126.8);
	new cjs.ButtonHelper(this.button1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button1},{t:this.button2},{t:this.button3}]}).wait(1));

	// imgs
	this.instance = new lib.元件4();
	this.instance.setTransform(839.8,353.8,1,1,0,0,0,126.8,126.8);

	this.instance_1 = new lib.元件3();
	this.instance_1.setTransform(533.8,353.8,1,1,0,0,0,126.8,126.8);

	this.instance_2 = new lib.元件2();
	this.instance_2.setTransform(249.8,353.8,1,1,0,0,0,126.8,126.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// BG
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(545.05,341.5,1,1,0,0,0,545,341.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// textbuttons
	this.textbutton3 = new lib.元件5();
	this.textbutton3.name = "textbutton3";
	this.textbutton3.setTransform(843.75,520.05,1.3167,1.1942,0,0,0,40.6,10.3);
	new cjs.ButtonHelper(this.textbutton3, 0, 1, 1);

	this.textbutton2 = new lib.元件5();
	this.textbutton2.name = "textbutton2";
	this.textbutton2.setTransform(538.65,550.7,2.4833,4.2123,0,0,0,40.6,10.2);
	new cjs.ButtonHelper(this.textbutton2, 0, 1, 1);

	this.textbutton1 = new lib.元件5();
	this.textbutton1.name = "textbutton1";
	this.textbutton1.setTransform(250.55,515.95,0.937,1,0,0,0,40.6,10);
	new cjs.ButtonHelper(this.textbutton1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.textbutton1},{t:this.textbutton2},{t:this.textbutton3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(545,341.5,545.2,341.6);
// library properties:
lib.properties = {
	id: '4610B6920FFB9047986458991C36EBC9',
	width: 1090,
	height: 683,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://static.wixstatic.com/media/b7af9d_616b1e32229a47bc8913c07c03342d88~mv2.png", id:"_50_img_3"},
		{src:"https://static.wixstatic.com/media/b7af9d_66c603dea76748718d74a9edc2be0e00~mv2.png", id:"_50_img_4"},
		{src:"https://static.wixstatic.com/media/b7af9d_06dfac33f85a4fadbce50db21a348ec5~mv2.png", id:"_50_img_5"},
		{src:"https://static.wixstatic.com/media/b7af9d_20cb6178455f495497e8cd8b7958cb72~mv2.png", id:"Image"}
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
an.compositions['4610B6920FFB9047986458991C36EBC9'] = {
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