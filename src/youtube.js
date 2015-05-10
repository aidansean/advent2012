function youtube_video(youtube_id, name, thumbnail_index){
  this.youtube_id = youtube_id ;
  this.name = name ;
  this.thumbnail_index = (thumbnail_index==0) ? 2 : thumbnail_index ;
  this.make_thumbnail_div = function(player_name){
    var div = Create('div') ;
    var img = Create('img') ;
    var heading = Create('h3') ;
    heading.innerHTML = this.name ;
    img.src = 'http://img.youtube.com/vi/' + this.youtube_id + '/' + this.thumbnail_index + '.jpg' ;
    img.id = 'img_thumbnail_' + player_name + ':' + this.youtube_id ;
    img.addEventListener('click', change_video, false) ;
    div.appendChild(heading) ;
    div.appendChild(img) ;
    div.className = 'youtube_thumbnail' ;
    return div ;
  }
}

function youtube_player(name, title, nCols){
  this.name  = name  ;
  this.title = title ;
  this.nCols = nCols ;
  this.youtube_video_list = [] ;
  this.add_video = function(youtube_id, name, thumbnail_index){
    this.youtube_video_list.push(new youtube_video(youtube_id, name, thumbnail_index)) ;
  }
  this.make_thumbnail_table = function(){
    var table = Create('table') ;
    var tbody = Create('tbody') ;
    table.className = 'youtube_player' ;
    var tr, td ;
    for(var i=0 ; i<this.youtube_video_list.length ; i++){
      if(i%this.nCols==0){
        tr = Create('tr') ;
      }
      td = Create('td') ;
      var div = this.youtube_video_list[i].make_thumbnail_div(this.name) ;
      td.appendChild(div) ;
      tr.appendChild(td) ;
      if(i%this.nCols==this.nCols-1){
        tbody.appendChild(tr) ;
      }
      else if(i==this.youtube_video_list.length-1){
        for(var j=0 ; j<this.youtube_video_list.length-i ; j++){
          td = Create('td') ;
          tr.appendChild(td) ;
        }
        tbody.appendChild(tr) ;
      }
    }
    table.appendChild(tbody) ;
    return table ;
  }
  this.assemble_player = function(container){
    var table = this.make_thumbnail_table() ;
    var heading = Create('h3') ;
    heading.innerHTML = this.title ;
    container.appendChild(heading) ;
    container.appendChild(table) ;
  }
  this.player = Get(this.name + '_youtube_player') ;
}

function change_video(event){
  var id = event.target.id ;
  var youtube_id  = id.split(':')[1] ;
  YT_player.cueVideoById(youtube_id) ;
}

function Create(type){ return document.createElement(type) ; }
function      Get(id){ return document.getElementById(id)  ; }
