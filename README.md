webgl-legobox 
===================

This is a webgl and three.js powered 3d webapp which contains the view of a legobox.
It also contains a few components for playing Lego.

----------
Current version :  v1.0.0
Licence : MIT

Components
-------------

#### Legobox

The 3D representation of a legobox based on the [mapsquare.io](http://mapsquare.io) legobox.

> **Note:**

> You can edit legolist.js if you want to customize the lego view. It is a Javascript Array which contains all Legos with a few parameters : the **3D size** of a block, the **3D position** and the **material**.

#### Lego generator

A generator of one piece of customizable Lego.

> **Form parameters:**

> - Length
> - Width
> - Height

#### Common

Contains all JS files in common in the components.


> **Form parameters:**

> - **constants.js** :  Contants sizes of a lego 
> - **geometries.js** : Builder of Three.js Geometry elements for creating a Lego.
> - **materials.js** : List of all the materials
> - **meshes.js** : Builder of a Mesh of a group of Meshes, it contains a Lego builder.

