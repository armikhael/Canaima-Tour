/*
 *  Rythenbox
 *  
 *  Maintainer : Carlos Espinoza
 */

function RythenboxSystem($parent){
	
	var _parent = $parent;
	var _this = this;
	var _isOpen = false;
	var maximised = false;
	var minified = false;
	var movieURL = 'videos/iStock.flv';
	
	this.init = function(){
		this.setupControl();
	}
	
	this.setupControl = function(){
		$('#rythenbox  .control .close').click(function(){
			_this.close();
		});
		$('#rythenbox  .control .min').click(function(){
			_this.min();
		});
		
		//~ $('#movieplayer  .control .max').click(function(){
			//~ if(maximised){
				//~ maximised = false;
				//~ $('#movieplayer').css('width','700px');
				//~ $('#movieplayer').css('height','497px');
				//~ $('#movieplayer').removeClass('fullsize');
				//~ _parent.systemSettings.decreaseFullscreen();
			//~ }else{
				//~ maximised = true;
				//~ $('#movieplayer').css('width',$(document).width() - 70 + 'px');
				//~ $('#movieplayer').css('height',$(document).height() - 50 + 'px');
				//~ $('#movieplayer').addClass('fullsize');
				//~ _parent.systemSettings.increaseFullscreen();
			//~ }
			//~ _this.resize();
		//~ });
		$('#rythenbox .container .tools .controlbuttons .left .play').click(function(){
			playClicked();
		});
	}
	
	this.addVideo = function(){
		var videoObject = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"  width="'+$('#rythenbox .container .video').width()+'" height="'+$('#rythenbox .container .video').height()+'"  id="videoPlayer"><param name="movie"  value="../Canaima-tour/videos/videoplayer.swf" />		<param name="wmode" value="transparent" />  <param name="quality" value="high" />		<param name="bgcolor" value="#000000" />		<embed wmode="transparent" src="../Canaima-tour/videos/videoplayer.swf" quality="high" bgcolor="#000000" width="'+$('#rythenbox .container .video').width()+'" height="'+$('#rythenbox .container .video').height()+'"  name="videoPlayer" align="" type="application/x-shockwave-flash"  pluginspage="http://www.macromedia.com/go/getflashplayer"> </embed></object>'; 
		$('#rythenbox .container .video').html(videoObject);
	}
	
	this.removeVideo = function(){
		$('#rythenbox .container .video').html('');
	}
	
	this.open = function($playvideo){
		if(!_isOpen){
			this.resize();
			this.center();
			$('#rythenbox').show();
		}
		$('#rythenbox').mousedown();
		_parent.systemMenu.openWindow('rythenbox');
		_isOpen = true;
		if($('css3-container').length > 0){
        	$('#rythenbox').prev().css('top', $('#rythenbox').css('top'));
        	$('#rythenbox').prev().css('left', $('#rythenbox').css('left'));
        }
	}
	
	this.close = function(){
		_parent.openWindows['rythenbox'] = false;
		if(maximised){ _parent.systemSettings.decreaseFullscreen(); }
		$('#rythenbox ').hide();
		_parent.systemMenu.closeWindow('rythenbox');
		$('#rythenbox ').removeClass('fullsize');
		_this.resize();
		minified = _isOpen = false;
		this.removeVideo();
		_this.center();
	}
	
	this.min = function(){
		if(maximised){ _parent.systemSettings.decreaseFullscreen(); }
		$('#rythenbox ').hide();
		_parent.systemMenu.wiggle('rythenbox');
		minified = true;
		_isOpen = false;
	}
	
	this.isMaximised = function(){
		return maximised;
	}
	
	this.resize = function(){
		var videoWidth = $('#rythenbox').width();
		var videoHeight = $('#rythenbox').height();
		$('#videoPlayer embed').attr('width',videoWidth);
		$('#videoPlayer').attr('width',videoWidth);
		$('#videoPlayer').attr('height',videoHeight);
		$('#videoPlayer embed').attr('height',videoHeight - 27);
	}
	
	this.center = function(){
    	var left = ($(document).width() / 2) - ($('#rythenbox').width() / 2);
		var top = Math.max(24,($(document).height() / 2) - ($('#rythenbox').height() / 2));
		$('#rythenbox').css('left',left);
		$('#rythenbox').css('top',top);
    }
}

function getFlashMovieObject(movieName){
	if (window.document[movieName]){
		return window.document[movieName];
	}
	if (navigator.appName.indexOf("Microsoft Internet")==-1){
		if (document.embeds && document.embeds[movieName])
			return document.embeds[movieName];
	}
	else{
		return document.getElementById(movieName);
	}
}

function playClicked(){
	var flashMovie=getFlashMovieObject("videoPlayer");
	flashMovie.playClicked('fg');
}
