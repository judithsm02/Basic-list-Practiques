sap.ui.define([
    "student00/com/sap/training/ux402/listdetail2/ux402listdetail2/controller/BaseController",
    "sap/ui/Device"
  ],
  
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Device) {
      "use strict";
  
      return Controller.extend("student00.com.sap.training.ux402.listdetail2.ux402listdetail2.controller.Detail", {
  
        onInit: function () {
          this.getRouter().getRoute("carrierdetails").attachPatternMatched(this._onObjectMatched, this);
         },        
  
          _onBindingChange: function() {
                  var oView = this.getView(); //varibale que almacena la vista actual 
                  var oElementBinding = oView.getElementBinding(); //variable que almacena los elementenos de la vista. conecta la llista del model amb elements de la interface d'ususari
          
                  if (!oElementBinding.getBoundContext()) { // verifica si hi ha un context vinculat a l'enllaç dels elements. Si no hi ha dades es mostra el object not found
                      this.getRouter().getTargets().display("detailObjectNotFound");
                      this.getOwnerComponent().oListSelector.clearMasterListSelection(); //esborra la selecció 
                      return;
                  }
                  var sPath = oElementBinding.getPath(); //es crea una variable path que agafa la path del elements d'aquesta vista i els emmagatzema en sPath
                  this.getOwnerComponent().oListSelector.selectAListItem(sPath); //es fa la crida al selectAListItem (en el listSelector.js) i se li envia el spath com a parametre
  
              },
          
          _bindView: function(sObjectPath) {
            var oView = this.getView();
          
            this.getView().bindElement({ //bind.element s'utilitza per associar la vista acual amb dades específiques. 
            path: sObjectPath,
            events: { 
                change: this._onBindingChange.bind(this), // cuando los datos vinculados cambian, se ejecuta la funcion on.binding
                dataRequested: function() { // es una funció que es crida quan es necessita que es carreguin dades
                oView.setBusy(true);//Establece la vista como “ocupada” (indicando que se están cargando datos).
            },
            dataReceived: function() { //funció que es crida quan s'han rebut les dades
            oView.setBusy(false); //es posa com a setbusy false. ja esta lliure la vista
            }
            }
            });
          },
  
  
          _onObjectMatched: function(oEvent){
                this.getView().getModel("mainView").setProperty("/layout", "TwoColumnsMidExpanded");
                var sObjectPath =
                "/UX_C_Carrier_TP('" + oEvent.getParameter("arguments").objectId + "')";
                this._bindView(sObjectPath);
            }
  
        });
  
      });
  