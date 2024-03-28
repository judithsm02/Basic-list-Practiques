sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
 
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Filter, Fragment) {
      "use strict";

      return Controller.extend("student00.com.sap.training.ux402.listdetail2.ux402listdetail2.controller.SecondDetail", {
        onInit: function () {

             
          },            
    
      

          
    //       _onBindingChange: function () {
    //           var oView = this.getView(),
    //               oElementBinding = oView.getElementBinding();

    //           if (!oElementBinding.getBoundContext()) {
    //               this.getOwnerComponent().getRouter().getTargets().display("detailObjectNotFound");
    //               return;
    //           }

    //           var sPath = oElementBinding.getPath(),
    //               oObject = oView.getModel().getObject(sPath);
  
    //           this.oSemanticObject = oObject.type;              
    //       },


    });
  });
