# search2vars [![Build Status](https://travis-ci.org/Urucas/search2vars.svg)](https://travis-ci.org/Urucas/search2vars)
Parsing url search to vars

#Usage
```npm install --save search2vars```

**API**
```javascript
var search2vars = require('search2vars');
var vars = search2vars("?id=ba649087-0a4c-48fd-9feb-5bc3f0eaaa9e&name=Peyton");
console.log(vars);
// {"id":"ba649087-0a4c-48fd-9feb-5bc3f0eaaa9e","name":"Peyton"}
```

**Browser**
```html
<script src="https://cdn.rawgit.com/Urucas/search2vars/master/dist/search2vars.js"></script>
<script>
var search2vars = require('search2vars');
var vars = search2vars("?id=ba649087-0a4c-48fd-9feb-5bc3f0eaaa9e&name=Peyton");
console.log(vars);
// {"id":"ba649087-0a4c-48fd-9feb-5bc3f0eaaa9e","name":"Peyton"}
</script>
```
