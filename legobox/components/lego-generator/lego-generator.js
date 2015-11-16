var LegoGeneratorCtrl = function(lengthInput, widthInput, heightInput) {
	/**
	 * Re-render scene with the new size of lego
	 * @param group
	 * @returns {*}
	 */
	var renderScene = function(group) {
		var legoLength = lengthInput.value;
		var legoWidth = widthInput.value;
		var legoHeight = heightInput.value;
		var redLego = legoboxMeshes.lego(legoLength, 1/3.*legoHeight, legoWidth, legoboxMaterials.red);

		group.add(redLego);
		return redLego;
	};

	// INIT SCENE
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( 500, 500 );
	document.getElementById('3dview').appendChild( renderer.domElement );

	// INIT GROUP OF THE LEGO
	var group = new THREE.Object3D();
	scene.add(group);

	// INIT LIGHT
	var light = new THREE.PointLight( 0xffffff, 2, 100 );
	light.position.set( -50, 50, -12 );
	scene.add(light);

	// INIT CAMERA
	camera.position.set(-50, 40, 4);
	camera.rotation.set(0, 0, 0);
	camera.up = new THREE.Vector3(0, 1, 0);
	camera.lookAt(new THREE.Vector3(0, 0, 4));

	var old = null;
	var render = function() {
		group.rotation.y += 0.01;

		// REFRESH GROUP (one lego will appear)
		group.remove(old);
		scene.remove(old);
		delete old;
		old = renderScene(group)

		requestAnimationFrame( render );
		renderer.render( scene, camera );
	};
	render();
};





