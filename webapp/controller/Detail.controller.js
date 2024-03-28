sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  'sap/ui/model/Filter',
  'sap/ui/core/Fragment',
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Filter, Fragment) {
      "use strict";

      return Controller.extend("student00.com.sap.training.ux402.listdetail2.ux402listdetail2.controller.Detail", {
        onInit: function () {

              this.oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
              var oViewModel = new JSONModel({
                  busy: false,
                  delay: 0
              });
              this.getOwnerComponent().getRouter().getRoute("carrierdetails").attachPatternMatched(this._onObjectMatched, this);
              this.getView().setModel(oViewModel, "carrierdetails");

          },
          

          _onObjectMatched: function (oEvent) {
            this.getView().getModel("mainView").setProperty("/layout", "TwoColumnsMidExpanded");
            var sObjectPath =
            "/UX_C_Carrier_TP('" + oEvent.getParameter("arguments").objectId + "')";
            this._bindView(sObjectPath);
        },         
          

        //   _bindView: function(sObjectPath) {
        //     var oView = this.getView();
          
        //     this.getView().bindElement({ //bind.element s'utilitza per associar la vista acual amb dades específiques. 
        //     path: sObjectPath,
        //     events: { 
        //         change: this._onBindingChange.bind(this), // cuando los datos vinculados cambian, se ejecuta la funcion on.binding
        //         dataRequested: function() { // es una funció que es crida quan es necessita que es carreguin dades
        //         oView.setBusy(true);//Establece la vista como “ocupada” (indicando que se están cargando datos).
        //     },
        //     dataReceived: function() { //funció que es crida quan s'han rebut les dades
        //     oView.setBusy(false); //es posa com a setbusy false. ja esta lliure la vista
        //     }
        //     }
        //     });
        //   },
  
        //   _onBindingChange: function () {
        //     var oView = this.getView(),
        //         oElementBinding = oView.getElementBinding();

        //     if (!oElementBinding.getBoundContext()) {
        //         this.getOwnerComponent().getRouter().getTargets().display("detailObjectNotFound");
        //         return;
        //     }

        //     var sPath = oElementBinding.getPath(),
        //         oObject = oView.getModel().getObject(sPath);

        //     this.oSemanticObject = oObject.type;              
        // }


    });
  });
