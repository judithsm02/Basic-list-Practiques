/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00comsaptrainingux402listdetail2/ux402_listdetail2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
