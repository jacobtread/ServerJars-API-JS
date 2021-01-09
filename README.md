![ServerJars](https://serverjars.com/assets/img/icon_small.png)
# ServerJars-API
The Node JavaScript API for ServerJars

# Important Announcement
Any Issues will be ignored. The Songoda company screwed me over and I will no longer be writing code for them however I will leave this code up for anyone who wishes to modify it. 

[![NPM](https://nodei.co/npm/serverjars-api.png)](https://nodei.co/npm/serverjars-api/)

**Code Examples:**

**Fetching the latest Jar:**
```javascript
const ServerJars = require('serverjars-api');

ServerJars.fetchLatest('spigot').then(jar => {
    console.log(jar.version);
}).catch(console.log);
```

**Fetching the all Jars:**
```javascript
const ServerJars = require('serverjars-api');

ServerJars.fetchAll('spigot').then(jars => {
    console.log(jars)
}).catch(console.log);
```

**Downloading Jars:**
```javascript
const ServerJars = require('serverjars-api');

ServerJars.downloadJar('spigot', '1.14.4', './spigot-1.14.4.jar').then(stream => {
    stream.on('finish', () => {
        console.log('Downloaded')
    })
}).catch(console.log);
```
