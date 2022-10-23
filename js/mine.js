

//导航栏显示文章标题

//js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素
//2022.9.11 已修复，需要jq，请自行引入
document.getElementById("name-container").setAttribute("style", "display:none");

var position = $(window).scrollTop();

$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll > position) {


    document.getElementById("name-container").setAttribute("style", "");
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");

  } else {


    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");

  }

  position = scroll;

});
function scrollToTop(){
    document.getElementsByClassName("menus_items")[1].setAttribute("style","");
    document.getElementById("name-container").setAttribute("style","display:none");
    btf.scrollToDest(0, 500);
}
//修复没有弄右键菜单的童鞋无法回顶部的问题
document.getElementById("page-name").innerText = document.title.split(" | 只是芒果")[0];
// 这里是去掉你的网站全局名称的设置，如果你不需要去掉，你可以写成：
//document.getElementById("page-name").innerText = document.title

//或者把你的网站的分隔符和全局网站名称加上去*/


//function toRandomPost() {
//    fetch('/sitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
//        let ls = data.querySelectorAll('url loc');
//        let locationHref,locSplit;
//        do {
//            locationHref = ls[Math.floor(Math.random() * ls.length)].innerHTML
//            locSplit = locationHref.split('/')[3] || ''
        //} while (locSplit == '' || locSplit == 'tags');
        //若所有文章都如 https://…….com/posts/2022/07/…… 格式，主域名后字符是 posts，则循环条件改为：
//        } while (locSplit !== 'posts');
//        location.href = locationHref
//    })
//}