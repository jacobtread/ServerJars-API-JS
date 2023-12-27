![ServerJars](https://serverjars.com/assets/img/icon_small.png)
# ServerJars-API
The Node JavaScript API for ServerJars

# Important Announcement

I have encountered issues with Songoda Company. As a result, I have decided to discontinue my involvement in coding for their projects. Despite these issues, the existing codebase will remain accessible for those interested in making modifications.

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
