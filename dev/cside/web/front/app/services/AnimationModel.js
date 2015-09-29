//
//
// AnimationModel
//
// @author Didier Brun
//

app.provider("AnimationModel", function ()
{


    var AnimationModel = function() {

        this.path = null;
        this.localized = null;
        this.global = null;
        this.setup();

    }

    AnimationModel.prototype.setup = function() {

        if (window['DigitalServices'] != undefined) {
            this.locale = DigitalServices.env.lang;
            this.path = (DigitalServices.env.animationResourcePath + DigitalServices.env.animationId).replace(/\/*$/, '') + '/';
            this.localized = angular.fromJson(DigitalServices.env.animationLocalized);
            this.global = angular.fromJson(DigitalServices.env.animationGlobal);
        }
        else {
            this.locale = DigitalServices.env.lang;
            this.path = "";
            this.localized = angular.fromJson(window.localized_json);
            this.global = angular.fromJson(window.global_json);
        }




    }

    var animationModel = new AnimationModel();

    return {
        animationModel:animationModel,
        $get:function($log){
            return animationModel;
        }
    }



});