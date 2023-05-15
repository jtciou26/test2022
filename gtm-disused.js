
// 改_admin_table_scrollable
(function() { 

  var ta = document.querySelector('.ant-table-content');
  if (ta){
    ta.style.maxHeight ='500px'
    ta.style.overflowY='scroll'
  };
  var th = document.querySelector('.ant-table-thead');
  if (th){
    th.style.position='sticky'; 
    th.style.top='0';
    th.style.zIndex='99'
  };
  console.log ("GTM'd")
})();  



// 改_apply-join-org-button
(function(){  
  var btn = document.querySelector("[data-tr-action^='go-to-/account']");
  if (btn){
      btn.style.width = "125px";
      btn.style.padding = "10px";
      btn.style.fontSize = "14px";
      btn.style.color = "white"
  };
  console.log ("GTM modifies elements refers to redmine #31909")

})()

// 改_disable_note_and_question
    (function() {
var restore = document.querySelector(".Classroomstyle__CardContainer-sc-1d9072h-25,jizoxb");
    var el = document.createElement('el');
      el.innerText='';
    if (restore) {
      restore.parentElement.replaceChild(el, restore); 
    }
    console.log("GTM modified elements which refers to redmine #31925");

})();

// 改_remove_broadcast
  (function() {
  function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
};

  var restore = getElementByXpath("//span[text()[contains(.,'廣播')]]").closest('label');
  var remove = restore.parentNode.removeChild(restore);
  console.log("GTM removes the 'broadcast' option, refers to redmine #30849");

        })();

// 改_toggle-video-chapter
(function() { 

var one = document.querySelector(".knZPwB .bffHqp"); 

  one.addEventListener('click', function(e) {
    e.stopPropagation();
    var two = document.querySelector("[data-tr-action='toggle-video-chapter']>[data-name='圖層 1']");

    var event = new MouseEvent('click',{
        bubbles: true
      });
    two.dispatchEvent(event);
    e.stopPropagation();
});
 
  console.log("GTM modifies elements which refers to redmine #31797");
})();

// 改_user_already_in_usergroup
(function() {
    var wording = document.createElement('wording');  // Create a new element
    wording.innerText = "無此資料或成員已加入群組";  // Add the text content
    var text = document.querySelector(".ant-empty-description")

    if (text) {    
    text.parentElement.replaceChild(wording, text);  // 取代其文字
    };
    console.log('GTM fired, check redmine #31986')
  })();