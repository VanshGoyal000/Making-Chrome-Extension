# Making of Chrome Extensions

#### Making chrome xtension are simple just writing some HTML , Css , Js code and all set 
##### Here is the step by step process to make chrome extension

#### Make content for extension using Css , Html & JavaScript.
#### Now You have to write  a manifest.json file which contains information about your extension like name, description, version etc.

##### create a file in root folder named manifest.json
##### then add some basic info like - 
```
{
    "name": "Covid-19 Stats UK",
    "version": "1.0.0",
    "description": "latest covid data of UK",
    "manifest_version": 3,
    "author": "Vanshcodeworks",
    "action":{
        "default_popup": "index.html",
        "default_title": "Latest Covid Report"
    }
}

```
#### you can add more  features if needed .
Learn more about manifest.json [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) .

### Extension Created but now load it in Browser
#### Open Google Chrome browser > More tools > Extensions > Developer mode > Load unpacked > select your project directory (where manifest.json exist)
or
#### Open Google Chrome browser and go to `chrome://extensions/`

#### Extension is ready you can check on extension icon

# Made with by ❤️ VanshCodeWorks
