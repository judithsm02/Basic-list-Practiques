sap.ui.define(     
  [
        "sap/ui/model/json/JSONModel"

  ],
  function(BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("student00.com.sap.training.ux402.listdetail2.ux402listdetail2.controller.App", { 

      onInit() {
        var oViewModel = new JSONModel({
          layout : "OneColumn"
      });

      this.getView().setModel(oViewModel, "mainView");
      // sap.ui.getCore().setModel(oViewModel, "mainView");    //se hace asi para que el modelo de datos esté en core y se pueda usar en todas las vistas
      

      
      }
    });
  }
);
