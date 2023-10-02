sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // necesito importar el jsonmodel para poder enviar json a la vista
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("invoice.invoiceprueba.controller.MainView", {
            onInit: function () {
                var foodData = [
                    { name: "Manzana", description: "Fruta dulce y nutritiva" },
                    { name: "Plátano", description: "Fruta rica en potasio" },
                    { name: "Zanahoria", description: "Hortaliza rica en vitamina A" }
                ];

                // Crear un modelo JSON y establecer los datos de alimentos
                var oModel = new JSONModel({
                    //foods tiene que coincidir con los items de la lista (es como una especie de segundo id)
                    foods: foodData
                });
                //cogemos la lista por el id de la lista
                var oListFood = this.getView().byId("foodList");;
                // Establecer el modelo en la vista para que la lista tenga acceso a los datos
                oListFood.setModel(oModel);

                var exercisesPowerData = [
                    { name: "bench press", description: "upper body exercise" },
                    { name: "squat", description: "lower body exercise" }
                ];
                var modelExercise = new JSONModel({
                    //exercises tiene que coincidir a parte del id tiene que coincidir este nombre con el valor items que le pones en items 
                    exercises: exercisesPowerData
                });
                var tablePower = this.getView().byId("exerciseTable");;
                tablePower.setModel(modelExercise);
           
                  
            }
        });
    });
