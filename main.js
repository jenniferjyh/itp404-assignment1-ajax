
$('#startsearch').on('click', function() {
    var item = document.getElementById("userinput").value;
   
    $('#results').html("<div class = \"loader\"></div>");
   
  
    let promise = $.ajax({
      type: 'GET',
      url: 'https://www.reddit.com/r/'+ item + '.json'
    });
  
    promise.then(function(displays) {
      let fragment = document.createDocumentFragment();
  
      displays.data.children.forEach(function(info) {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let a = document.createElement('a')
        let p = document.createElement('p');
        
        div.className = "card";
        a.innerText = info.data.title;
        a.href = info.data.url;
        h4.innerText = 'Score: ' + info.data.score;
        p.innerText = 'By: ' + info.data.author;

        h3.append(a);
        div.append(h3);
        div.append(h4);
        div.append(p);
        fragment.append(div);
      });
  
      $('#results').html(fragment);
    });
    promise.fail(function(){
        $('#results').html("No Results Found");
   
    })
  });
  
  
