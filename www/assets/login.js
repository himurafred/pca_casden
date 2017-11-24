
    function createLogin(person, idList){
          var onsList = $(idList);
          var item ="<ons-list-item>";
            				   item +="<ons-list class=\"width100\" cas=\"" + person.cas +  "\" id=\"login-" + person.cas + "\">";
							   item +="<ons-list-item class=\"list-header-row\" tappable>";	
							   item +="<div class=\"left\">";
                               item +="<ons-icon icon=\"md-face\" class=\"list-item__icon\"></ons-icon>";                 
                               item +="</div>";                                
                               item +="<div class=\"center\">";
                               item +="<span class=\"list-item__title\">" + person.nom +  "  " + person.prenom + "</span>";
                               item +="</div>";
                               item +="</ons-list-item>";
                               onsList.append(item); 
                               
                               $( "#login-" + person.cas ).click(function(event){    
                                   var cas = $(event.currentTarget).attr('cas')
                                     user = annuaire.pupa.filter(function (el) {
                                        return el.cas === cas;
                                    });
                                    user = user[0];
                                    $("#footer").text(user.prenom + " " +user.nom );
                                    dialogLogin.hide();
                              }); 
    };
      
    function filterLogin(annuaire, value){
         if ( value.length > 2 ){
         return annuaire.pupa.filter(function (el) {
                    return el.nom.startsWith(value.toUpperCase());
                });
         }
    }
      
      
    function autocomplete(idFieldSearch, idList, create, filter, annuaire, others){
          var value =  document.getElementById(idFieldSearch).value;
          var find;
         
             
                find = filter (annuaire, value)
              
                $(idList + " ons-list-item").remove();
                 $.each(find, function( index, person ) {
                        create(person, idList, index, others);
                 });
          
    }  
            
      
      