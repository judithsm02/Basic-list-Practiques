sap.ui.define(     // es defineixen els moduls ( arxiu en java que té una funcionalitat especifica) 
  [
  
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller"
    

  ],

  // NO ENTRA AL DETAIL
  
 /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
 function (Controller, Device,JSONModel) {
  "use strict";

  return Controller.extend("student00.com.sap.training.ux402.listdetail2.ux402listdetail2.controller.Detail", {

   onInit:function(){
    this.oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
    var oViewModel = new JSONModel({
        busy: false,
        delay: 0
    });
    this.getOwnerComponent().getRouter().getRoute("masterlist").attachPatternMatched(this._onObjectMatched, this);
    this.getView().setModel(oViewModel, "carrierdetails");

}, 
// ---------------------------------------FINS AQUI FUNCIONA!!! ------------------------------------------------------------------

_onObjectMatched: function (oEvent) {
    this.sObjectId = oEvent.getParameter("arguments").Carrid;
    this.getView().getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
    this.getView().getModel().metadataLoaded().then(function () {
        var sObjectPath = this.getView().getModel().createKey("Carriers", {
            idLeague: this.sObjectId
        });
        this._bindView("/" + sObjectPath);
        console.log("Id DETALLE: ", this.sObjectId)                   
    }.bind(this));
    
},

_bindView: function (sObjectPath) {
    // Set busy indicator during view binding
    var oViewModel = this.getView().getModel("detailView");
    oViewModel.setProperty("/busy", false);   

    this.getView().bindElement({
        path: sObjectPath,
        parameters: {
            expand: "teams"
        },
        
    
        events: {
            change: this._onBindingChange.bind(this),
            dataRequested: function (odata) {
                oViewModel.setProperty("/busy", true);
            },
            dataReceived: function (odata) {
                oViewModel.setProperty("/busy", false);
            }
        }

    });
    
},
_onBindingChange: function () {
    var oView = this.getView(),
        oElementBinding = oView.getElementBinding();
    if (!oElementBinding.getBoundContext()) {
        this.getOwnerComponent().getRouter().getTargets().display("detailObjectNotFound");
        return;
    }
    var sPath = oElementBinding.getPath(),
        oObject = oView.getModel().getObject(sPath);

    this.oSemanticObject = oObject.type;              
},

onCloseDetailPress: function () {
    this.getView().getModel("appView").setProperty("/layout", "OneColumn"); 
    this.getOwnerComponent().getRouter().navTo("RouteMain");
},

onPressOpenCreateTeam: function(){

    var oView = this.getView();
    var oModel = this.getView().getModel();


    // create value help dialog

    if(!this._dialogCreateTeams){
        this._dialogCreateTeams = Fragment.load({
            id: oView.getId(),
            name: "appleagues.view.fragments.CreateTeam",
            controller: this
        },

        ).then(function(oCreateDialog){
            oView.addDependent(oCreateDialog); // El addDependent es como unir el dialogo a su Vista ( siempre hay que hacerlo) al crear el fragmento
            return oCreateDialog;

        });
    }
    

    //open value help dialog
    this._dialogCreateTeams.then(function(oCreateDialog){
        oCreateDialog.open();
    })

    

}






});
});