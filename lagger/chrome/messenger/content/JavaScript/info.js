var version;
var os;
var clientName;




// Function request a client system info
function requestClientSysInfo() {
	
	try {

	var iq = new JSJaCIQ();
	
	iq.setIQ(window.opener.infojid,null,'get','sys_info');
	iq.setQuery('jabber:iq:version');
	
	if (window.opener.console) {
        window.opener.cons.addInConsole("OUT : " + iq.xml() + "\n");
    }
	
	 sendVcardRequest();
	
	window.opener.con.send(iq, retrieveSysInfo);
	
	

  
   
   }
   catch (e) {alert (e);}
}


// Function to send a vcard request
function sendVcardRequest (){

try {

	var iq = new JSJaCIQ();
	var elem = iq.getDoc().createElement('vCard');
	iq.setIQ(window.opener.infojid,null,'get','vcard');
	
	iq.getNode().appendChild(elem).setAttribute('xmlns','vcard-temp');
	
	window.opener.con.send(iq, retrieveVcard);
	
	if (window.opener.console) {
        window.opener.cons.addInConsole("OUT : " + iq.xml() + "\n");
    }
    
    }
   catch (e) {alert (e);}
   
   
}


// function to retrieve a client system info
function retrieveSysInfo(iq){

//alert (iq.xml());

try {

var tag;

        	
        tag = iq.getNode().getElementsByTagName('version');
		if (tag && tag.item(0) && tag.item(0).firstChild)	
			var version = tag.item(0).firstChild.nodeValue;
			
			
			 tag = iq.getNode().getElementsByTagName('os');
		if (tag && tag.item(0) && tag.item(0).firstChild){	
			var os = tag.item(0).firstChild.nodeValue;
			var ostext = document.getElementById("os");
				ostext.setAttribute("value",os);
				ostext.readonly = true;
				}
			
			 tag = iq.getNode().getElementsByTagName('name');
		if (tag && tag.item(0) && tag.item(0).firstChild){
			var name = tag.item(0).firstChild.nodeValue;
			var clienttext = document.getElementById("client");
				clienttext.setAttribute("value",name + " " + version);
				clienttext.readonly = true;
				}
        	
        if (window.opener.console) {
        window.opener.cons.addInConsole("IN : " + iq.xml() + "\n");
    }

}
   catch (e) {alert (e);}
}

// Function to retrieve personal v-card
function retrieveVcard(iq){
 if (window.opener.console) {
        window.opener.cons.addInConsole("IN : " + iq.xml() + "\n");
    }
    
    try {
    
    var tag;
    
    /*********************** GENERAL *********************/
	
	
	var tagfn = iq.getNode().getElementsByTagName('FN');
		if (tagfn && tagfn.item(0) && tagfn.item(0).firstChild)	
			var name = tagfn.item(0).firstChild.nodeValue;
			if (name){
				var nametext = document.getElementById("name");
				nametext.setAttribute("value",name);
				nametext.readonly=true;
				}
				
	var tagfam = iq.getNode().getElementsByTagName('FAMILY');
		if (tagfam && tagfam.item(0) && tagfam.item(0).firstChild)	
			var fam = tagfam.item(0).firstChild.nodeValue;
			if (fam){
				var famtext = document.getElementById("family");
				famtext.setAttribute("value",fam);
				famtext.readonly=true;
				}			
				
				
		var tagnick = iq.getNode().getElementsByTagName('NICKNAME');
		if (tagnick && tagnick.item(0) && tagnick.item(0).firstChild)
			var nick = tagnick.item(0).firstChild.nodeValue;
			if (nick){
				var nicktext = document.getElementById("nickname");
				nicktext.setAttribute("value",nick);
				nicktext.readonly=true;
				}
				
				
	
				
	var tagurl = iq.getNode().getElementsByTagName('URL');
		if (tagurl && tagurl.item(0) && tagurl.item(0).firstChild)	
			var url = tagurl.item(0).firstChild.nodeValue;
			if (url){
			var urltext = document.getElementById("url");
				urltext.readonly=true;
				urltext.setAttribute("value",url);
				}			
	
	
	var tagbday = iq.getNode().getElementsByTagName('BDAY');
		if (tagbday && tagbday.item(0) && tagbday.item(0).firstChild)	
			var bday = tagbday.item(0).firstChild.nodeValue;
			if (bday){
			var bdaytext = document.getElementById("birthday");
				bdaytext.readonly=true;
				bdaytext.setAttribute("value",bday);
				}							
			
			
	var taguser = iq.getNode().getElementsByTagName('USERID');
		if (taguser && taguser.item(0) && taguser.item(0).firstChild )
			var id = taguser.item(0).firstChild.nodeValue;
			if (id){
				var labeljabberid = document.getElementById("userid");
				labeljabberid.setAttribute("value",id);
				labeljabberid.readonly = true;
				jabberid = id;
				}
			
			
			
	/**************************** LOCATION *************************/		
			
	
	var tagstreet = iq.getNode().getElementsByTagName('STREET');
		if (tagstreet && tagstreet.item(0) && tagstreet.item(0).firstChild)
			var street = tagstreet.item(0).firstChild.nodeValue;	
				if (street){
					var streettext = document.getElementById("street");
					streettext.setAttribute("value",street);
					streettext.readonly = true;
				}
	
	var tagcode = iq.getNode().getElementsByTagName('PCODE');
		if (tagcode && tagcode.item(0) && tagcode.item(0).firstChild)
			var zip = tagcode.item(0).firstChild.nodeValue;	
				if (zip){
					var ziptext = document.getElementById("postal");
					ziptext.setAttribute("value",zip);
					ziptext.readonly = true;
				}
	
	var tagctry = iq.getNode().getElementsByTagName('CTRY');
		if (tagctry && tagctry.item(0) && tagctry.item(0).firstChild)
			var country = tagctry.item(0).firstChild.nodeValue;	
				if (country){
					var countrytext = document.getElementById("country");
					countrytext.setAttribute("value",country);
					countrytext.readonly = true;
				}
	
	var taglocal = iq.getNode().getElementsByTagName('LOCALITY');
		if (taglocal && taglocal.item(0) && taglocal.item(0).firstChild)
			var address = taglocal.item(0).firstChild.nodeValue;	
				if (address){
					var addresstext = document.getElementById("location");
					addresstext.setAttribute("value",address);
					addresstext.readonly = true;
				}
				
				
	var tagextadd = iq.getNode().getElementsByTagName('EXTADD');
		if (tagextadd && tagextadd.item(0) && tagextadd.item(0).firstChild)
			var extra = tagextadd.item(0).firstChild.nodeValue;	
				if (extra){
					var extratext = document.getElementById("extra");
					extratext.setAttribute("value",extra);
					extratext.readonly = true;
				}			
	
	
	/*************************** WORK *********************************/
	
	
	var tagorg = iq.getNode().getElementsByTagName('ORGNAME');
		if (tagorg && tagorg.item(0) && tagorg.item(0).firstChild)
			var orgname = tagorg.item(0).firstChild.nodeValue;	
				if (orgname){
				var orgnametext = document.getElementById("company");
				orgnametext.setAttribute("value",orgname);
				orgnametext.readonly = true;
				}
	
	var tagnumber = iq.getNode().getElementsByTagName('NUMBER');
		if (tagnumber && tagnumber.item(0) && tagnumber.item(0).firstChild)
			var number = tagnumber.item(0).firstChild.nodeValue;
			if (number){
				var numbertext = document.getElementById("phone");
				numbertext.setAttribute("value",number);
				numbertext.readonly = true;
				}
				
		var tagunit = iq.getNode().getElementsByTagName('ORGUNIT');
		if (tagunit && tagunit.item(0) && tagunit.item(0).firstChild)
			var orgunit = tagunit.item(0).firstChild.nodeValue;
			if (orgunit){
				var unittext = document.getElementById("department");
				unittext.setAttribute("value",orgunit);
				unittext.readonly = true;
				}	
				
		var tagrole = iq.getNode().getElementsByTagName('ROLE');
		if (tagrole && tagrole.item(0) && tagrole.item(0).firstChild)
			var role = tagrole.item(0).firstChild.nodeValue;
			if (role){
				var roletext = document.getElementById("role");
				roletext.setAttribute("value",role);
				roletext.readonly = true;
				}			
			
	
	
	var tagmail = iq.getNode().getElementsByTagName('EMAIL');
		if (tagmail && tagmail.item(0) && tagmail.item(0).firstChild)	
			var email = tagmail.item(0).firstChild.nodeValue;
			if (email){
			var emailtext = document.getElementById("email");
				emailtext.setAttribute("value",email);
				emailtext.readonly = true;
				}
	
	
	
	
	/****************************** ABOUT *****************************/
	
	
	var tagdesc = iq.getNode().getElementsByTagName('DESC');
		if (tagdesc && tagdesc.item(0) && tagdesc.item(0).firstChild)	
			var desc = tagdesc.item(0).firstChild.nodeValue;
			if (desc){
			var desctext = document.getElementById("about");
				desctext.setAttribute("value",desc);
				desctext.readonly = true;
				}
	
	
	
	
	/******************************* AVATAR **************************/
	
	
	var	tagbin = iq.getNode().getElementsByTagName('BINVAL');
		if (tagbin && tagbin.item(0) && tagbin.item(0).firstChild )
			var base64data = tagbin.item(0).firstChild.nodeValue.toString();
				if (base64data){
				
				var savefile = "." + cutResource(window.opener.infojid);
				try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
					} catch (e) {
				alert("Permission to save file was denied.");
				}
				// get the path to the user's home (profile) directory
				const DIR_SERVICE = new Components.Constructor("@mozilla.org/file/directory_service;1","nsIProperties");
				try { 
			path=(new DIR_SERVICE()).get("ProfD", Components.interfaces.nsIFile).path; 
				} catch (e) {
			alert("error");
				}
			// determine the file-separator
				if (path.search(/\\/) != -1) {
				path = path + "\\";
				} else {
				path = path + "/";
				}
				savefile = path+savefile;
				
				//alert (savefile);
				saveInFile (base64data,savefile);
				
				var uri = "data:image/jpeg;base64," + base64data;
					//alert (uri);
	
				var image = document.getElementById("photo");
				image.setAttribute("src",uri);
				image.setAttribute("height",50);
				image.setAttribute("width",50);
				
				
				//alert ("image" + cutResource(window.opener.infojid));
				var rosterimage = window.opener.document.getElementById("image" + cutResource(window.opener.infojid));
				rosterimage.setAttribute("src",uri);
				rosterimage.persist="src";
				}
			
	
	
	if (window.opener.console) {
        window.opener.cons.addInConsole("TEST : " + base64data + "\n");
    	window.opener.cons.addInConsole("IN : " + iq.xml() + "\n");
    }
	
	
	
	}
	catch(e) {alert ("retrieve vcard" + e);}
}

// Function to create the photo file
function createPhotoFile(){
 	
	
	//create a unique tempfile
      var dest = Components.classes["@mozilla.org/file/directory_service;1"]
          .getService(Components.interfaces.nsIProperties)
          .get("TmpD", Components.interfaces.nsIFile);
      dest.append(basename(url));
      dest.createUnique(dest.NORMAL_FILE_TYPE, 0664);

}


function clear (){
 
 document.getElementById("about").value = "";
 
 }
 
 function resize(){
 
 
 }