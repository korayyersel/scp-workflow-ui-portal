sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("com.qperior.workflowsample.ui.controller.View1", {
		onInit: function () {

		},
		onPressStartWorkflow: function (evt) {
			$.ajax({
				url: "",
				method: "GET",
				headers: {
					"X-CSRF-Token": "Fetch"
				},
				success:function(result, xhr,data){
					
				}
			});
		}
	});
});