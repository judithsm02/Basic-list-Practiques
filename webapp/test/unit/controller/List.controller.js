/*global QUnit*/

sap.ui.define([
	"student00comsaptrainingux402listdetail2/ux402_listdetail2/controller/List.controller"
], function (Controller) {
	"use strict";

	QUnit.module("List Controller");

	QUnit.test("I should test the List controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
