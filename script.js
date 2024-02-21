
// view video

var count=1;
var playvideo =document.getElementsByClassName('vids');
var video =document.getElementById('video');
var videoplayer =document.getElementById('video-player');
var info =document.getElementById('info');
var profile =document.getElementById('profile-btn');
var home =document.getElementById('home-btn');

	playvideo[0].addEventListener('click',function(){
		
		if(document.getElementById('video-player').style.display='none'){
			
			document.getElementById('video-player').style.display='block';
		
			document.getElementById('video').src='vids/1.mp4';
			document.getElementById('video').play();
			
		}else{
			
			document.getElementById('video-player').style.display='none';	
			
		}
		
		info.addEventListener('click',function next(){
	
			if(count<3){
			count++;
			document.getElementById('video').pause();
			document.getElementById('video').src='vids/'+count+'.mp4';
				
			document.getElementById('video').play();
			}else{
				
				count=1;
				document.getElementById('video').src='vids/'+count+'.mp4';
				document.getElementById('video').play();			
			}
	
		});
		
	});
	
	
	playvideo[1].addEventListener('click',function(){
		
		if(document.getElementById('video-player').style.display='none'){
			
			document.getElementById('video-player').style.display='block';
		
			document.getElementById('video').src='vids/2.mp4';
			document.getElementById('video').play();
			
		}else{
			
			document.getElementById('video-player').style.display='none';	
			
		}
		
		info.addEventListener('click',function next(){
	
			if(count<3){
			count++;
			document.getElementById('video').pause();
			document.getElementById('video').src='vids/'+count+'.mp4';
				
			document.getElementById('video').play();
			}else{
				
				count=1;
				document.getElementById('video').src='vids/'+count+'.mp4';
				document.getElementById('video').play();			
			}
	
		});
		
		
	});
	
	playvideo[2].addEventListener('click',function(){
		
		if(document.getElementById('video-player').style.display='none'){
			
			document.getElementById('video-player').style.display='block';
		
			document.getElementById('video').src='vids/3.mp4';
			document.getElementById('video').play();
			
		}else{
			
			document.getElementById('video-player').style.display='none';	
			
		}
		
		
		info.addEventListener('click',function next(){
	
			if(count<3){
			count++;
			document.getElementById('video').pause();
			document.getElementById('video').src='vids/'+count+'.mp4';
				
			document.getElementById('video').play();
			}else{
				
				count=1;
				document.getElementById('video').src='vids/'+count+'.mp4';
				document.getElementById('video').play();			
			}
	
		});
		
		
	});
	
	profile.addEventListener('click',function(){
		
			document.getElementById('video-player').style.display='none';	
			document.getElementById('video').pause();
		
	});

	home.addEventListener('click',function(){
		
			document.getElementById('video-player').style.display='none';	
			document.getElementById('video').pause();
		
	});


// swipe


