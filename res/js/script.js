/*
var user = {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  }
*/

$.getJSON('https://private-anon-df6a060fae-wad20postit.apiary-mock.com/users/1', function(data) {
        var avatar = `${data.avatar}`
        var avatarEl = document.getElementById('avatar');
        avatarEl.src = avatar;        
    });

$.getJSON('https://private-anon-df6a060fae-wad20postit.apiary-mock.com/users/1', function(data) {
    var userdata = `${data.firstname}
                    ${data.lastname}<br>
                    ${data.email}`
    var avatar = `${data.avatar}`
    $("#userdata").html(userdata);
    var avatarEl = document.getElementById('avatar');
    avatarEl.src = avatar;        
});

function avatarDropDown() {
    document.getElementById("avatarDropDown").classList.toggle("show");
    

    //var userdata = document.getElementById('userdata');
    //userdata.innerHTML = user.firstname + ' ' +user.lastname + '<br />' +
    //user.email;
    
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('#avatar') && !(document.getElementById("avatarDropDown").contains(event.target))) {
      var dropdowns = document.getElementsByClassName("avatarDropDown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');     
        } 
      }
    }
  }

