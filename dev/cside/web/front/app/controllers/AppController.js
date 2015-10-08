//
//
// AppController
//
// @author Didier Brun
//

app.controller ("AppController", ['$log', '$scope', '$state', 'AnimationModel', 'DeviceDetector', 'WrapperUtils', '$vuittonServices', function AppController($log, $scope, $state, model, device, wrapper, $vuitton)
{

    $scope.texts = model.localized.texts;


    window.setContentSize = function(){
        device.updateDeviceCSS();
    }


    device.setLayout(DeviceDetector.LAYOUT_FILL);
    device.updateDeviceCSS();

    if(device.mobile() != null)
    {
        wrapper.hideBackButton();
    }


    $scope.pathTo = function(path,attrs){
        $state.go(path,attrs);
    }

    $scope.moreDetails = function (sku){
        $vuitton.openProductPage(sku);
    }


}]);