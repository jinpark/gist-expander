$(document).ready(function(){
    var windowHeight = window.innerHeight;
    var editorHeight = Math.round(windowHeight * 0.7);
    $('.ace_editor').height(editorHeight);
    $('.ace_gutter').height(editorHeight);
    var script = document.createElement('script');
    script.text = "var editors = document.getElementsByClassName('ace_editor'); for (i = 0; i < editors.length; i++){ ace.edit(editors[i]).resize(); }"
    script.dataset.origin = 'gistExpander';
    document.documentElement.appendChild(script);
    var service = analytics.getService('gist_expander');
    var tracker = service.getTracker('UA-77947490-1');  // Supply your GA Tracking ID.
    tracker.sendAppView('MainView');
});
