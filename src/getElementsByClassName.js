// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  searchTree(document.body);
  
  // inner recursive function(parameter1) {
  function searchTree(node) {
    //has class?
    if (node.classList) {
      //if yes, search through clases for className
      for (var i = 0; i < node.classList.length; i++) {
        var classItem = node.classList[i];
        //if match is found
        if(classItem === className) {
          result.push(node)
        }
      }
    }

    //next check for children
    if (node.childNodes) {
      //run test above for each child
      for (var j = 0; j < node.childNodes.length; j++) {
        var child = node.childNodes[j];
        searchTree(child);
      }
    }
  }
  

//return array
return result;

};
