sap.ui.define(     
  [
        "sap/ui/model/json/JSONModel"

  ],
  function(BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("student00.com.sap.training.ux402.listdetail2.ux402listdetail2.controller.App", { //es crea una subclase que 
                                                                                         //ve de la classe base Basecontroller. La subaclase es App
      onInit() {
        var oViewModel = new JSONModel({
          layout : "OneColumn"
      });

      this.getView().setModel(oViewModel, "mainView");


      
      }
    });
  }
);
