/**
 * Ref.:http://www.spiration.co.uk/post/1186/Java-detect-brower,-JVM-vendor,-Java-version-etc
 */


import java.net.*;

/*
 * PluginTest.java
 * Created on 04 June 2004, 17:30
 */

/**
 *
 * @author  Chris Lacy-Hulbert
 * $Id$
 */
public class JavaDetect extends java.applet.Applet {
    public String OSName;
    public String Vendor;
    public String URL;
    public String Version;
    public String OSArch;
    public String OSVersion;

    URL location;
    /** Creates a new instance of PluginTest */
    @Override
    public void start() {
        Vendor =  System.getProperty("java.vendor");
        URL = System.getProperty("java.vendor.url");
        Version = System.getProperty("java.version");
        OSArch =  System.getProperty("os.arch");
        OSName = System.getProperty("os.name");
        OSVersion = System.getProperty("os.version");
    }
}