var LegoboxCtrl = function() {

	var legoboxObj;
	/**
	 * Add a lego to legobox (see legobox.js for the listing of legos)
	 * @param lego
	 * @param index
	 */
	var addLego = function(lego, index) {
		// Compute offset of lego from the base object
		var offsetX = index == 0 ? 0 : -CST.BP * legobox[0].l /2. + CST.BP * lego.l / 2.;
		var offsetY = index == 0 ? 0 : -CST.BH * legobox[0].h /2. + CST.BH * lego.h / 2.;
		var offsetZ = index == 0 ? 0 : -CST.BP * legobox[0].w /2. + CST.BP * lego.w / 2.;

		var legoMesh = legoboxMeshes.lego(lego.l, lego.h, lego.w, lego.material);

		legoMesh.position.set(
			lego.x *  CST.BP + offsetX,
			lego.y *  CST.BH + offsetY,
			lego.z * -CST.BP - offsetZ
		);

		legoboxObj.add(legoMesh);
	};

	// INIT SCENE
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('3dview').appendChild( renderer.domElement );

	// INIT LEGOBOX
	legoboxObj = new THREE.Object3D();
	scene.add(legoboxObj);

	console.log(legobox.length);
	legobox.forEach( addLego );

	// INIT LIGHT
	var light = new THREE.PointLight( 0xffffff, 1, 0 );
	light.position.set( -200, 200, -12 );
	scene.add(light);

	//INIT CAMERA
	camera.position.set(-240, 240, 4);
	camera.rotation.set(0, 0, 0);
	camera.up = new THREE.Vector3(0, 1, 0);
	camera.lookAt(new THREE.Vector3(0, 0, 4));

	function render() {
		legoboxObj.rotation.y += 0.01;
		requestAnimationFrame( render );
		renderer.render( scene, camera );
	}
	render();
};
