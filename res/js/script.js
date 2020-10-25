/*
var user = {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  }
*/
$(document).ready(function() {
    $.getJSON('https://private-anon-df6a060fae-wad20postit.apiary-mock.com/users/1', function (data) {
        let avatarEl = $("#avatar");
        avatarEl.attr("src", data.avatar);
        const userdata = `${data.firstname}
               ${data.lastname}<br>
               ${data.email}`;
        $("#userdata").html(userdata);
    });


    $.getJSON('http://private-anon-81fac79a64-wad20postit.apiary-mock.com/posts', function (data) {
        for (let post of data) {
            const postcontainer = $("<div class='post'></div>");
            const author = $("<div class='post-author'></div>");
            const authorinfo = $("<div class='post-author-info'></div>");
            const authorimage = $("<img src=" + post.author.avatar + "'' alt='Post Author'>");
            authorinfo.append(authorimage);
            authorinfo.append($("<small>" + post.author.firstname + ' ' + post.author.lastname + "</small>"));
            author.append(authorinfo);
            author.append($("<small>" + post.createTime + "</small>"));
            postcontainer.append(author);
            if (post.media !== null) {
                if (post.media.type === "video") {
                    postcontainer.append($("<video controls><source src='" + post.media.url + "' type='video/mp4'></video>"))
                } else if (post.media.type === "image") {
                    postcontainer.append($("<div class='post-image'><img src='" + post.media.url + "' alt='Post image'></div>"))
                }
            }
            if (post.text !== null) {
                postcontainer.append($("<div class='post-title'><h3>" + post.text + "</h3></div>"))
            }
            postcontainer.append($("<div class='post-actions'><button type='button' name='like' class='like-button'>" + post.likes + "</button></div>"));
            $(".main-container").append(postcontainer)
        }
    });

    $("#avatar").click(function () {
        $("#avatarDropDown").toggle();
    });

    $(window).click(function (event) {
        target = $(event.target);
        if (!target.is('#avatar') && !($.contains($("#avatarDropDown")[0], event.target))) {
            const dropdowns = $(".avatarDropDown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                $(openDropdown).hide();
            }
            if (event.target.name === "like") {
                event.target.classList.toggle("liked");
            }

            if (event.target.name === "follow") {
                event.target.classList.toggle("followed");
                if (event.target.textContent === "Follow") {
                    event.target.textContent = "Followed";
                } else {
                    event.target.textContent = "Follow";
                }
            }
        }
    });

    $.getJSON('https://private-anon-cebd089c68-wad20postit.apiary-mock.com/profiles', function (data) {

        for (let profile of data) {
            const postcontainer = $("<div class='profile'></div>");
            const profileinfo = $("<div class='profile-name'></div>");
            const profileavatar = $("<img src=" + profile.avatar + "'' alt='Post Author'>");
            postcontainer.append(profileavatar);
            profileinfo.append($("<h3>" + profile.firstname + ' ' + profile.lastname + "</h3>"));
            postcontainer.append(profileinfo);
            postcontainer.append($("<div class='profile-button'><button type='button' name='follow' class='follow-button'>Follow</button></div>"));
            $('.main-browse-container').append(postcontainer);
        }

    });
});

