import AV from 'leancloud-storage';

var APP_ID = 'ATNpGkivXvWoGUegPIi40VU9-gzGzoHsz';
var APP_KEY = 'JEDQXHlknPB1tYAnk4dh9izM';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

/*var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/
export default AV