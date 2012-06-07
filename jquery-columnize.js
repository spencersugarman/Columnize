/**
 *  jQuery Column Navigation Plugin
 *	
 *	version 1.0
 *	
 *	Written by Spencer Sugarman
 *	http://spencersugarman.com
 *	
 *
 *	!!! NOTICE !!!
 *	This library and related library requires jQuery 1.7 or higher
 *	http://www.jquery.com
 *
 *	This library requires the Bootstrap CSS framework
 *	http://twitter.github.com/bootstrap/
 *
 *	The MIT License
 *
 *	Copyright (c) 2008 Polaris Digital Limited
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be included in
 *	all copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *	THE SOFTWARE.
 *
 *
 **/
(function ($) {

    "use strict";

    $.fn.columnize = function (method) {
        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.columnize' );
        }
    };
    
    var config = {
        height: '400px',
        width: null
    };
    
    var methods = {
        init: function () {
            var d = this.addClass('columnize'),
                u = d.find('ul');
            config.width = (config.width === null) ? $(this).width()+'px' : config.width;
            d.css('height', config.height).css('width', config.width);
            u.hide();
            u.first().wrap('<div class="row">').wrap('<div class="span4" style="border-right: 1px solid #eee">').show();
            $(document).on('click', '.columnize a', function(e) {
                e.preventDefault();
                var t = $(this),
                    s = t.siblings('ul').clone();
                if (s[0]) {
                    var c = t.closest('.span4'),
                        cn = c.next();
                    if (cn[0]) {
                        $(c).nextAll('.span4').remove();
                        }
                    var l = d.find('.span4').last(),
                        n = $('<div class="span4"></div>');
                    n.css('border-right', '1px solid #eee').insertAfter(l);
                    n.html($(s[0]).show());
                    var w = $('#columns .span4').length * 241;
                    $('#columns .row').css('width', w+'px');
                }
            });
        }
    };
    
})(jQuery);
