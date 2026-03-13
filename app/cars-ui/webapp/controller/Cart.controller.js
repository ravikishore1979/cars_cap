
sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller){
 return Controller.extend("cars.controller.Cart",{
  onBack:function(){
   this.getOwnerComponent().getRouter().navTo("cars")
  }
 })
})
