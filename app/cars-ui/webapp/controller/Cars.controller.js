
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(Controller,MessageToast){
 return Controller.extend("cars.controller.Cars",{
  onSelect:function(oEvent){
   var data=oEvent.getSource().getBindingContext().getObject()
   MessageToast.show("Selected "+data.model)
  },
  onCart:function(){
   this.getOwnerComponent().getRouter().navTo("cart")
  }
 })
})
