# Sprout Styleguide

[![Build Status](https://travis-ci.org/JefMari/sprout-styleguide.svg?branch=master)](https://travis-ci.org/JefMari/sprout-styleguide)
[![Build status](https://ci.appveyor.com/api/projects/status/fq954ye9yqa6e3hi?svg=true)](https://ci.appveyor.com/project/JefMari/sprout-styleguide)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Github file size](https://img.shields.io/github/size/webcaetano/craft/build/phaser-craft.min.js.svg)]()

#### Styleguide for Sprout Projects.

For downloads, how to get started and detailed documentation please refer to the [Styleguide Website](https://jefmari.github.io/sprout-styleguide)

## Requirements and Installation 
This project has the following dependencies (Install each of them):

[Node.js](https://nodejs.org/en/ "Node.js") (v6 and up)
[Harp.js](http://harpjs.com/ "Harp.js") (Latest)

You also need to go to `styleguide/structure/_node-files` and run:`npm install`

### Development and Usage

To start the Styleguide go to You also need to go to `styleguide/structure/_node-files` and run:`node watch.js`

Wait and the browser will open with the Styleguide running via `http://localhost:9241`.

### Publish and Output

To compile the project for www, remove first the existing `www` folder then at the root folder, execute this via command line

```sh
cd styleguide/structure/_node-files && node write-date-exec.js
cd ../../.. && harp compile
```

A `www` folder will be created containg all the compiled files.


### Authors  
Jeferson Mari <jefersonm@sprout.ph>   
Pappu Sabnani <pappus@sprout.ph>   
Jhaya Valenciano <jhayav@sprout.ph>   
Clarice Lualhati <claricel@sprout.ph>   
