sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/qperior/workflowsample/ui/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.qperior.workflowsample.ui.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();
			
			// look for task context and navigate to task ui automaticly
			var startupParameters = this.getComponentData().startupParameters;
			if(startupParameters && startupParameters.taskModel){
				var taskModel = startupParameters.taskModel;
                var taskData = taskModel.getData();
                
                if(taskData.Priority === "HIGH"){
                    taskData.PriorityState  = "Warning";
                } else if (taskData.Priority === "VERY HIGH") {
                    taskData.PriorityState = "Error";
                } else {
                    taskData.PriorityState = "Success";
                }
                taskData.CreatedOnStr = taskData.CreatedOn.toDateString();
                this.getModel("taskHeaderData").setData(taskData);
                
				var taskId = taskData.InstanceID;
				var taskType = taskData.TaskDefinitionID;
				this.getRouter().navTo("TaskRoute", { taskId: taskId, taskType: taskType} );
			}
			
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});