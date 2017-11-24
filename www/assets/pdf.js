        function loadPDF(pdfFile) {
            console.log(ons.platform);
            if (ons.platform.isAndroid()) {
                loadPDFAndroid(pdfFile)
            } else {
                loadPDFiOS(pdfFile);
            }
        }
        
        function loadPDFiOS(pdfFile) {
            document.location="assets/" + pdfFile;
        }


        function loadPDFAndroid(pdfFile) {
            window.resolveLocalFileSystemURL(cordova.file.applicationDirectory +  'www/assets/' + pdfFile, function(fileEntry) {
                window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
                    fileEntry.copyTo(dirEntry, pdfFile, function(newFileEntry) {
                        //console.log("ouverture");
                        cordova.plugins.fileOpener2.open(newFileEntry.nativeURL,'application/pdf',
                            { 
                                error : function(e) { 
                                    console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                                },
                                success : function () {
                                    console.log('file opened successfully');                
                                }
                            }
                        );
                    });
                }); 
                
                },     
                function fail(error) {
                        console.log(error.code);
                }
            );            
        }
