(function ($) {
    'use strict';

    //  Portfolio load more button Ajax

    var $loadbutton = $( '.loadAjax' );

    if( $loadbutton.length ){

        var postNumber = portfolioloadajax.postNumber,
            Incr = 0;
        //
        $loadbutton.on( 'click', function(){


            Incr = Incr + parseInt( postNumber) ;
           
            var $button = $( this ),
                $data;
           
            $data =  {
                'action' : 'real_estate_portfolio_ajax',
                'postNumber'   : postNumber,
                'postIncrNumber'   : Incr,
                'elsettings'   : portfolioloadajax.elsettings
            };
           
            $.ajax({
                
                url  : portfolioloadajax.action_url,
                data : $data,
                type : 'POST',


                success: function( data ){

                     $( '.real_estate-portfolio-load' ).html(data);

                    var $container = $('.real_estate-portfolio');

                    $container.isotope('reloadItems').isotope({
                        itemSelector: '.single_gallery_item',
                        percentPosition: true,
                        masonry: {
                            columnWidth: '.single_gallery_item'
                        }
                    });

                    var loaditems = parseInt( Incr ) + parseInt( postNumber );

                    if( portfolioloadajax.totalitems == loaditems ){
                        $button.hide();
                    }
    
                }
                
            });
            
            return false;   
            
        } );
        
        
    }


})(jQuery);