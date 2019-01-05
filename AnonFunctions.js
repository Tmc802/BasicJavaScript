function softwareLanguage(lang) {
  return function(name){
    if(lang === 'C#') {
      console.log('That\'s awesome ' + name + ' that\'s my favorite programming Language as well!')
      console.log('What is your favorite framework?')

} else if (lang === 'JavaScript') {
  return function(name) {
    console.log('JavaScript is one of the best Language\'s ' + name + ',' + ' What libraries do you use?')
    }
  } else {
    return function(name) {
      console.log('That\'s awesome ' + name + ' what other software Languages do you use?')
      }
    }
  }
}


var cSharp = softwareLanguage('C#');
var usesJavaScript = softwareLanguage('JavaScript')

cSharp('Tyler')
usesJavaScript('Ricardo');