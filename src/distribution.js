
export function func1(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
	
	// sine of sine..
	//var p=Math.sin(abs_y/20*360*3.14/180)*Math.sin((abs_y-Math.floor(abs_y))*360*3.14/180);
    //mesh.scale.set((p)*(height-abs_y)/2,1,(p)*(height-abs_y)/2);
	
	// pow of pow..
	//var p=Math.pow(0.25,Math.log(10-abs_y%10)/Math.log(0.4));
	//var s=Math.pow(0.25,Math.log(50-abs_y)/Math.log(0.5));
    //mesh.scale.set(s*p/1500,1,s*p/1500);
	
	// diamonds..
	if(abs_y%10 < 5)
	{
		var p=Math.pow(0.25,Math.log(5-abs_y%5)/Math.log(0.4));
		var s=Math.pow(0.25,Math.log(50-abs_y)/Math.log(0.5));
		mesh.scale.set(s*p/1000,1,s*p/1000);
	}
	else
	{
		var p=Math.pow(0.25,Math.log(abs_y%5)/Math.log(0.4));
		var s=Math.pow(0.25,Math.log(50-abs_y)/Math.log(0.5));
		mesh.scale.set(s*p/1000,1,s*p/1000);
	}

    mesh.position.set(0, abs_y, 0);
}

export function sawtooth(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    
    mesh.position.set(0, abs_y, 0);
}

export function triangle(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    
    mesh.position.set(0, abs_y, 0);
}

export function step(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    
    mesh.position.set(0, abs_y, 0);
}