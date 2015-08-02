

function start(){
  var adventCalendar_player = new youtube_player('adventCalendar', 'Advent Calendar 2012', 5) ;
  adventCalendar_player.add_video('w6HI2XO_qyA', 'December 1st' , 2) ;
  adventCalendar_player.add_video('YatFzKMNj2M', 'December 2nd' , 2) ;
  adventCalendar_player.add_video('NLKJ45X0Qd0', 'December 3rd' , 2) ;
  adventCalendar_player.add_video('TmKWeP480Fk', 'December 4th' , 2) ;
  adventCalendar_player.add_video('VNu8geawFCE', 'December 5th' , 2) ;
  adventCalendar_player.add_video('FXDUhqpNKSw', 'December 6th' , 2) ;
  adventCalendar_player.add_video('V3t3MTcO_ak', 'December 7th' , 2) ;
  adventCalendar_player.add_video('2eljtMEF3DM', 'December 8th' , 2) ;
  adventCalendar_player.add_video('sImDBSKyO0Q', 'December 9th' , 2) ;
  adventCalendar_player.add_video('63wJOaLvSdo', 'December 10th', 2) ;
  adventCalendar_player.add_video('uPuOTps2QKo', 'December 11th', 2) ;
  adventCalendar_player.add_video('02nNaqeU8io', 'December 12th', 2) ;
  adventCalendar_player.add_video('4ktv6yUpRcg', 'December 13th', 2) ;
  adventCalendar_player.add_video('qVq7uQR3EOI', 'December 14th', 2) ;
  adventCalendar_player.add_video('b85sbBmCA-0', 'December 15th', 2) ;
  adventCalendar_player.add_video('hj-NZEkKQPk', 'December 16th', 2) ;
  adventCalendar_player.add_video('KvcvZKuw4EU', 'December 17th', 2) ;
  adventCalendar_player.add_video('zUoVg4QzZe8', 'December 18th', 2) ;
  adventCalendar_player.add_video('S8VcXgnNdF0', 'December 19th', 2) ;
  adventCalendar_player.add_video('sGeJery2ZWw', 'December 20th', 2) ;
  adventCalendar_player.add_video('6v4LEYnCyz4', 'December 21st', 2) ;
  adventCalendar_player.add_video('cFG5ukRnBFU', 'December 22nd', 2) ;
  adventCalendar_player.add_video('B1jnkkYXLeE', 'December 23rd', 2) ;
  adventCalendar_player.add_video('G3yQkThzCL0', 'December 24th', 2) ;
  adventCalendar_player.add_video('G9yKBEcigAY', 'December 25th', 2) ;
  adventCalendar_player.assemble_player(Get('div_player_wrapper')) ;
  
  var YT_player = null ;
  var tag = document.createElement('script') ;
  tag.src = "https://www.youtube.com/iframe_api" ;
  var firstScriptTag = document.getElementsByTagName('script')[0] ;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag) ;
}

function onYouTubeIframeAPIReady(){
  YT_player = new YT.Player('div_youtube_player', {
    width:  '750',
    height: '457',
    videoId: 'LM6qnIMEWWY',
    events: {
      'onStateChange': onPlayerReady,
    }
  });
}
  
function onPlayerReady(event){
  event.target.playVideo() ;
}
