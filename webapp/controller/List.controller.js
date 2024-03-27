sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/m/MessageBox",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Device) {
        "use strict";

        return Controller.extend("student00.com.sap.training.ux402.listdetail2.ux402listdetail2.controller.List", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                var bReplace=!Device.system.phone; // true si el dispositivo no es un telefono     false= telefono

            },

            _showDetail: function(oItem) {
                var bReplace=!Device.system.phone; // true si el dispositivo no es un telefono     false= telefono
                var sCarrierId =oItem.getBindingContext().getProperty("Carrid"); //de la taula OItem, li diem que agafi el context de la variable carrid 
                this._navigateToCarrierDetails(sCarrierId,bReplace); //es fa una crida per mostra els details i se li passen les dues variables
            },

            onSelect: function(oEvent){

                var iID = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Carrid;
                console.log("ID: ", iID);
            

            },
            _navigateToCarrierDetails: function(sCarrierId , bReplace){

                this.getRouter().navTo("carrierdetails",{
                    objectId: sCarrierId
				}, bReplace);
                console.log("ID2: ", sCarrierId);
                  



            },
                        
           

            
        });
    });