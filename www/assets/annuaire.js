 function filterAnnuaire(annuaire, value){
        if(value === '*'){
            return annuaire;
        }
        return annuaire.filter(function (el) {
                    return el.nom.startsWith(value.toUpperCase());
                });
  }
      
  
  function createAnnuaire(person, idList, index, idAnnuaire){
                    var onsList = $(idList);
                    var item ="<ons-list-item class=\"item-annuaire\">";
        			item +="<ons-list class=\"width100\">";
							   item +="<ons-list-header class=\"list-header-row\"  id=\"header-"+ idAnnuaire + "-"+ index +"\">";	
							   item +="<div class=\"left\">";
                               item +="<ons-icon icon=\"md-face\" class=\"list-item__icon\"></ons-icon>";                 
                               item +="</div>";                                
                               item +="<div class=\"center\">";
                               item +="<span class=\"list-item__title\">" + person.nom +  "  " + person.prenom + "</span>";
                               item +="</div>";
                               item +="</ons-list-header>";
							   
                   item +="<div class=\"hide\" id=\"data-" + idAnnuaire + "-"+ index +"\">";
							   //Phone mobile
							   if ( person.mobile ){
								   item +="<a href=\"tel:"+ person.mobile +"\">";
								   item +="<ons-list-item tappable>";
								   item +="<div class=\"left\">";
								   item +="<ons-icon icon=\"ion-iphone\" class=\"list-item__icon\"></ons-icon>&nbsp;";   
								   item +="</div>";
								   item +="<div class=\"center\">";
								   item +="<span class=\"list-item__title\">"+ person.mobile +"</span>";
								   item +="</div>";
								   item +="</ons-list-item>";
								   item +="</a>";
							   }	
							   
							    //Phone fixe
								if ( person.fixe ){
								   item +="<a href=\"tel:" + person.fixe + "\">";
								   item +="<ons-list-item tappable>";
								   item +="<div class=\"left\">";
								   item +="<ons-icon icon=\"ion-android-home\" class=\"list-item__icon\"></ons-icon>";
								   item +="</div>";
								   item +="<div class=\"center\">";
								   item +="<span class=\"list-item__title\">" + person.fixe + "</span>";
								   item +="</div>";
								   item +="</ons-list-item>";
								   item +="</a>";
								}
								
								//Fax 
							   if ( person.fax ){
								  // item +="<a href=\"tel:" + person.fax + "\">";
								   item +="<ons-list-item>";
								   item +="<div class=\"left\">";
								   item +="<ons-icon icon=\"ion-android-print\" class=\"list-item__icon\"></ons-icon>";
								   item +=" </div>";
								   item +=" <div class=\"center\">";
								   item +=" <span class=\"list-item__title\">" + person.fax + "</span>";
								   item +=" </div>";
								   item +="</ons-list-item>";
								   //item +=" </a>";
							   }
							   
							   //Email
							   if (  person.email ){
								   item +=" <a href=\"mailto:" + person.email + "\">";
								   item +=" <ons-list-item tappable>";
								   item +=" <div class=\"left\">";
								   item +=" <ons-icon icon=\"ion-email\" class=\"list-item__icon\"></ons-icon>";
								   item +="</div>";
								   item +="<div class=\"center\">";
								   item +=" <span class=\"list-item__title\">" + person.email + "</span>";
								   item +=" </div>";
								   item +="</ons-list-item>";
								   item +="</a>";
							   }
                            
                               item +="</div>";
							   
							   item +="</ons-list>";
                               item +="</ons-list-item>";
                               onsList.append(item); 
                               $( "#header-" + idAnnuaire + "-"+ index ).click(function(){                     
                                      $( "#data-" + idAnnuaire + "-"+ index).toggle();
                              }); 
  }