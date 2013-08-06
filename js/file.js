/* 
 *  File Object
 *  author: Anthony Dillon
 *  Maintainer : Carlos Espinoza
 */

function File($id, $url, $type, $name, $size, $date ,$location){
	if($name == undefined){ var tempName = _url.split('/'); $name = tempName[tempName.length-1].split('.')[0]; }
	if($size == undefined){ $size = '11.5MB'; }
	if($date == undefined){ $date = new Date().toString(); }
	if ($location==undefined) { $location='/Home';}
	if($type == undefined){$type = 'photo'; }
	
	var _id = $id;
	var _url = $url;
	var _type = $type;
	var _name = $name;
	var _size = $size;
	var _date = $date;
	var _location = $location;
	
	this.url = function(){ return _url; }
	this.name = function(){ return _name; }
	this.size = function(){ return _size; }
	this.date = function(){ return _date; }
	this.location = function(){ return _location; }
	this.id = function(){ return _id; }
	this.type = function(){ return _type; }
	
	this.setURL = function($url){ _url = $url; }
	this.setName = function($name){ _name = $name; }
	this.setSize = function($size){ _size = $size; }
	this.setDate = function($date){ _date = $date; }
	this.setLocation = function($location){ _location = $location; }
	this.setType = function($type){ _type = $type; }
	
	this.drawIcon = function($id, $type){
		switch(_type){
			case 'photo':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="photo"  data-id='+$id+'><p class="border"><img src="'+_url+'"  width="53px"  /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="photo"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'video':
				var tempName = _url.split('/');
				tempName = tempName[tempName.length-1].split('.')[0];
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'"  data-type="video"  data-id='+$id+'><p class="border"><img src="img/videos/'+tempName+'.jpg"  width="53px"  /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'"  data-type="video"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'audio':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="audio"  data-id='+$id+'><p><img src="img/folder/audio.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="audio"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'deb':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="deb"  data-id='+$id+'><p><img src="img/folder/deb.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="deb"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'iso_i386':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="iso"  data-id='+$id+'><a href="http://descargas.canaima.softwarelibre.gob.ve/canaima-popular-4.0~b1_i386.iso"><p><img src="img/folder/iso.png" /></a></p><a href="http://descargas.canaima.softwarelibre.gob.ve/canaima-popular-4.0~b1_i386.iso"><span>'+_name+'</span></a></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="iso"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'iso_amd64':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="iso"  data-id='+$id+'><a href="http://descargas.canaima.softwarelibre.gob.ve/canaima-popular-4.0~b1_amd64.iso"><p><img src="img/folder/iso.png" /></a></p><a href="http://descargas.canaima.softwarelibre.gob.ve/canaima-popular-4.0~b1_amd64.iso"><span>'+_name+'</span></a></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="iso"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'zip':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="zip"  data-id='+$id+'><p><img src="img/folder/zip.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="zip"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'rar':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="rar"  data-id='+$id+'><p><img src="img/folder/rar.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="rar"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'escr_desktop':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="escr_desktop"  data-id='+$id+'><p><img src="img/folder/escr_desktop.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="escr_desktop"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'tar':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="tar"  data-id='+$id+'><p><img src="img/folder/tar.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="tar"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'odt':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="odt"  data-id='+$id+'><p><img src="img/folder/odt.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="odt"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'cal':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="cal"  data-id='+$id+'><p><img src="img/folder/cal.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="cal"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'ppt':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="ppt"  data-id='+$id+'><p><img src="img/folder/ppt.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="ppt"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			case 'txt':
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="txt"  data-id='+$id+'><p><img src="img/folder/txt.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="txt"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
			default:
				if($type == 'display-icon'){
					return  '<div class="file '+$type+'" data-type="unknown"  data-id='+$id+'><p><img src="img/folder/unknown.png" /></p><span>'+_name+'</span></div>';
				}else{
					return  '<div class="file '+$type+'" data-type="unknown"  data-id='+$id+'><p></p><span>'+_name+'</span></div>';
				}
			break;
		}
		
	}
}
