(function () {
  app.addComponent({
    name: 'home',
    view,
    controller
  });

  function view() {
    return `
    <div class="centerSection">      
        <h2 class="sectionTitle">Find a GitHub user</h2> 
      <input placeholder="press enter to search" type="text" class="userSearchName"><br>
    </div>
  `
  } 
  
  function controller() {
    var search = document.querySelector(".userSearchName");
    search.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {  // key= 13 is "Enter"
          window.location.hash = `#/user/${e.target.value}`
        }
    });
  }
})();