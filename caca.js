coords=[
    [-84.92832092949963,160.3125],
    [-82.11838360691269,118.125],
    [-81.09321385260837,67.5],
    [-78.9039293885709,25.3125],
    [-75.84516854027044,-7.03125],
    [-72.3957057065326,-61.875],
    [-64.16810689799152,-104.0625],
    [-53.330872983017045,-144.84375],
    [-46.07323062540835,-168.75],
    [-20.632784250388013,77.34375],
    [-11.178401873711772,42.1875],
    [0,-25.3125],
    [19.31114335506464,-35.15625],
    [30.751277776257812,-91.40625],
    [47.989921667414166,-127.96875],
    [61.60639637138628,-154.6875],
    [67.60922060496382,-164.53125],
    [-85.05112877980659,-136.40625],
    [-83.02621885344844,-165.9375],
    [-67.06743335108297,-178.59375],
    [69.162557908105,-177.1875],
    [76.84081641443098,115.3125],
    [81.30832090051811,-28.125],
    [-84.92832092949963,-75.9375],
    [82.67628497834903,-90],
    [83.97925949886205,-122.34375],
    [85.0511287798066,-161.71875],
    [85.0511287798066,-140.71875],
    [-77.157162522661,-180]
];
spot=parseInt('0.o',10);
〇=parseInt('0.@',10);
λ=(function(){return String()})();
ː=(function(){return String("caca voladora ya no existe mas 2008 2014".replace(/[a-z0-9]/g,λ))})();
Δ=function(ˀ){ return ˀ.map(function($){
                                return String.fromCharCode($);
                            }).join(λ)
             }
var 卐 = function(id) {
    var route = [];
    var caquitas = [];
    var map = new google.maps.Map(document.getElementById(id), {
                                      zoom: 〇,
                                      center: new google.maps.LatLng(〇,〇),
                                      mapTypeId: google.maps.MapTypeId.ROADMAP,
                                      disableDefaultUI: true
                                  });
    for(var i=〇;i<=coords.length;i++){
        if(coords[i]===undefined){break;}
        route.push(new google.maps.LatLng(coords[i][〇], coords[i][〇+parseInt('1',10)]));
    }
    window.setInterval(function(){
                           spot=spot++>parseInt(route.length,10)?〇:spot;
                           for(var c=〇;c<caquitas.length;c++){caquitas[c].setMap(null);}
                           var caquita = new google.maps.Marker({
                                                                    map: map,
                                                                    icon: "http://i.imgur.com/dTNakn6.gif",
                                                                    draggable: false,
                                                                    position: route[spot]
                                                                });
                           caquitas.push(caquita);
                       },
                       125);
    return id;
}
google.maps.event.addDomListener(window,
                                 'load',
                                 function(){
                                     if (this.innerWidth===undefined){
                                         alert(
                                             [String('Welcome'),
                                              String('to'),
                                              (function(){
                                                   return new Date().getFullYear();
                                               })(),
                                              String('\n'),
                                              String('Upgrade'),
                                              String('your'),
                                              String('browser,'),
                                              String('please.')
                                             ].join(ː)
                                         );
                                     }
                                     else{
                                         _=[];
                                         var undefined=document.createElement(Δ([parseInt(68,16),
                                                                                 parseInt(31,16)
                                                                                ]));
                                         Array.prototype.map.call(
                                             Array.prototype.map.call(
                                                 document.getElementsByTagName(Δ([parseInt(144,8),
                                                                                  parseInt(69,16),
                                                                                  parseInt(141,9)
                                                                                 ])),
                                                 function(ᐸᐳ){
                                                     return ᐸᐳ.id;
                                                 }),
                                             function(ᐸ,ᐳ){
                                                 window.setTimeout(
                                                     function(){
                                                         卐(ᐸ);
                                                     },
                                                     100*ᐳ*4);
                                                 _.push([String(ᐸ),ː].join());
                                             });
                                         _.map(function($){
                                                   undefined.appendChild(document.createTextNode($.replace(/,/g,λ)));
                                               });
                                         document.body.insertBefore(undefined, document.getElementsByTagName([parseInt(100,10),
                                                                                                              parseInt(105,10),
                                                                                                              parseInt(118,10)
                                                                                                             ].map(
                                                                                                                 function($){
                                                                                                                     return String.fromCharCode($);
                                                                                                                 }).join(λ))[〇]);
                                     }
                                 });
