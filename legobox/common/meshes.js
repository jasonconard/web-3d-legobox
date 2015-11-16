var legoboxMeshes = {
	lego : function(length, height, width, material) {

		var lego = new THREE.Object3D();

		// Load the box of the lego
		var boxGeo = legoboxGeometries.lego(length, height, width);
		var boxMesh = new THREE.Mesh(boxGeo, material);
		lego.add(boxMesh);

		// Load all cylinders at the top of lego
		var legoCylinder = legoboxGeometries.legoCylinder();
		for(var i = 0; i < length; i++) {
			for(var j = 0; j < width; j++) {
				var cylinderMesh = new THREE.Mesh(legoCylinder, material);
				var x = - ( CST.BP * length/2. ) + ( i * CST.BP + 4 );
				var y = ( height * CST.BH + CST.TH ) / 2.;
				var z = - ( CST.BP * width/2. ) + ( j * CST.BP + 4 );
				cylinderMesh.position.set(x, y, z);
				lego.add(cylinderMesh);
			}
		}

		return lego;
	}
};