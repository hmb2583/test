function ViewModel(){
    var nombre = ko.obserbable();
}
ko.applyBindings(new ViewModel (), document.getElementById('aplicacion'));