/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, ScrollMagic, TweenMax, Cubic */

// Import dependencies
import lazySizes from 'lazysizes';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.isIntro = true;
    this.$navPrograma = $('#nav-programa');
    this.$navIntro= $('#nav-intro');
    this.programaOffset = $('#programa').offset().top;
  }

  onResize() {

  }

  onReady() {
    lazySizes.init();

    this.bindAjax();
    this.bindCloseDrawer();
    this.initScrollMagic();
    this.bindScrollTo();
    this.bindScrolling();
  }

  fixWidows() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  }

  bindAjax() {
    $('.js-open-drawer').on('click', function() {
      var filmUrl = $(this).attr('data-url');

      $('body').addClass('loading');

      $.ajax({
        url: filmUrl
      })
      .done(function( html ) {
        var content = $(html).find('#content').html();
        $('#drawer-content').html(content);
        $('body').removeClass('loading').addClass('drawer-open');
      });
    });
  }

  bindCloseDrawer() {
    $('#close-drawer, #close-overlay').on('click', function() {
      $('body').removeClass('drawer-open');
    });
  }

  initScrollMagic() {
  	// init controller
  	var controller = new ScrollMagic.Controller();

  	// build tween
  	var tween = TweenMax.to("#light", 1, {ease: Cubic.easeInOut, rotation: 6, scaleX: 5, scaleY: 0.5, opacity: 1, transformOrigin:'0% 50%'});

  	// build scene and set duration to window height
  	new ScrollMagic.Scene({
      duration: $(document).height(),
    })
		.setTween(tween)
		.addTo(controller);
  }

  bindScrollTo() {
    var $link = $('.js-scroll-to');

    $link.on('click', function(event) {
      event.preventDefault();

      var target = $(this).attr('href');

      $(document).scrollTo($(target), 1000);
    });
  }

  bindScrolling() {
    var _this = this;

    _this.toggleNavUnderline();

    $(document).on('scroll', function() {
      _this.toggleNavUnderline();
    });
  }

  toggleNavUnderline() {
    var _this = this;

    var scrollTop = $(window).scrollTop();

    if (scrollTop >= _this.programaOffset && _this.isIntro) {
      _this.$navPrograma.addClass('link-underline');
      _this.$navIntro.removeClass('link-underline');
      _this.isIntro = false;
    }

    if (scrollTop < _this.programaOffset && !_this.isIntro) {
      _this.$navPrograma.removeClass('link-underline');
      _this.$navIntro.addClass('link-underline');
      _this.isIntro = true;
    }
  }
}

new Site();
