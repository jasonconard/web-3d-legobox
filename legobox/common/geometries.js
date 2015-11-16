var legoboxGeometries = {
	lego : function(l, h, w) {
		return new THREE.BoxGeometry(CST.BP * l , CST.BH * h, CST.BP * w);
	},
	legoCylinder : function() {
		return new THREE.CylinderGeometry(CST.TR, CST.TR, CST.TH, 32);
	}
};