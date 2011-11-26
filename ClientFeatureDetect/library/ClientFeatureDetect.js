/**
 * 1 Method: navigator.javaEnabled()
 * Simplest way to check if java is enabled is cheking version
 * @warning Even if is installed, if is not enabled, will return FALSE
 * @version 1.0
 * @example
 * @code
 *      if ( JavaEnabled() ) { // or just navigator.javaEnabled()
 *          document.alert("Java is enabled!");
 *      } else {
 *          document.alert("Java is not enabled!");
 *      }
 * 
 * @endcode
 * @return JavaEnabled Boolean
 */
function JavaEnabled()
{
    JavaEnabled = navigator.javaEnabled();
    return JavaEnabled;
}

/**
 * Return boolean TRUE if one mimetype exist for the browser
 * @version 1.0RC
 * @example
 * @code
 * if ( mimetypeExist('application/pdf') ){
 *      document.alert('You can read Adobe PDF')
 * }
 * @endcode
 * @param String mimetype
 * @return Bool exist
 */
function MimeTypeExist( mimetype ){
    var i, j, plugin, mtcount, exist = false;
    navigator.plugins.refresh(false);
    var pcount = navigator.plugins.length;
    for (i = 0; (!exist) && (i < pcount); ++i) {
        plugin = navigator.plugins[i];
        mtcount = plugin.length;
        for (j = 0; (!exist) && (j < mtcount); j++) {
            if (plugin[j].type == "application/x-ica") {
                exist = true;
            }
        }
    }
    return exist;    
}


/**
 * Dump in one alert Browser plugins
 */
function dumpAlertInstalledPlugins( ){
    for(i = 0; i < navigator.plugins.length; i++){
        alert(navigator.plugins[i].name);
    }     
}