const targetNode = document;
    // document.getElementById(divID).style.top = "20px";

const config = { subtree: true, attributes: true, };
const callback = function(mutations, observer) {
    //  write code here 

};
// Create an observer instance linked to the callback function
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
const observer = new MutationObserver(callback);
// Start observing the target node for configured mutations
observer.observe(targetNode, config);
