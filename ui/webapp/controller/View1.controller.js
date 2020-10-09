sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.qperior.workflowsample.ui.controller.View1", {
		onInit: function () {

		},
		onPressStartWorkflow: function (evt) {
			$.ajax({
				url: "/comqperiorworkflowsampleui/bpmworkflowruntime/v1/xsrf-token",
				method: "GET",
				headers: {
					"X-CSRF-Token": "Fetch"
				},
				success: function (result, xhr, data) {
					var token = data.getResponseHeader("X-CSRF-Token");
					if (token === null) return;

					$.ajax({
						url: "/comqperiorworkflowsampleui/bpmworkflowruntime/v1/workflow-instances",
						type: "POST",
						data: JSON.stringify({
							definitionId: "samplewf",
							context: {
								lastname: "yersel",
								fistname: "koray"
							}
						}),
						headers: {
							"X-CSRF-Token": token,
							"Content-Type": "application/json"
						},
						async: false,
						success: function (data) {
							MessageToast.show("The workflow has started");
						},
						error: function (data) {
							MessageToast.show(data);
						}
					});
				}
			});
		}
	});
});