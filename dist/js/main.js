/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, ScrollMagic, TweenMax, Cubic */

// Import dependencies


// Import style


var _lazysizes = __webpack_require__(1);

var _lazysizes2 = _interopRequireDefault(_lazysizes);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Site = function () {
  function Site() {
    _classCallCheck(this, Site);

    this.mobileThreshold = 601;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    this.isIntro = true;
    this.$navPrograma = $('#nav-programa');
    this.$navIntro = $('#nav-intro');
    this.programaOffset = $('#programa').offset().top;
  }

  _createClass(Site, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      _lazysizes2.default.init();

      this.bindAjax();
      this.bindCloseDrawer();
      this.initScrollMagic();
      this.bindScrollTo();
      this.bindScrolling();
    }
  }, {
    key: 'fixWidows',
    value: function fixWidows() {
      // utility class mainly for use on headines to avoid widows [single words on a new line]
      $('.js-fix-widows').each(function () {
        var string = $(this).html();
        string = string.replace(/ ([^ ]*)$/, '&nbsp;$1');
        $(this).html(string);
      });
    }
  }, {
    key: 'bindAjax',
    value: function bindAjax() {
      $('.js-open-drawer').on('click', function () {
        var filmUrl = $(this).attr('data-url');

        $('body').addClass('loading');

        $.ajax({
          url: filmUrl
        }).done(function (html) {
          var content = $(html).find('#content').html();
          $('#drawer-content').html(content);
          $('body').removeClass('loading').addClass('drawer-open');
        });
      });
    }
  }, {
    key: 'bindCloseDrawer',
    value: function bindCloseDrawer() {
      $('#close-drawer, #close-overlay').on('click', function () {
        $('body').removeClass('drawer-open');
      });
    }
  }, {
    key: 'initScrollMagic',
    value: function initScrollMagic() {
      // init controller
      var controller = new ScrollMagic.Controller();

      // build tween
      var tween = TweenMax.to("#light", 1, { ease: Cubic.easeInOut, rotation: 6, scaleX: 5, scaleY: 0.5, opacity: 1, transformOrigin: '0% 50%' });

      // build scene and set duration to window height
      new ScrollMagic.Scene({
        duration: $(document).height()
      }).setTween(tween).addTo(controller);
    }
  }, {
    key: 'bindScrollTo',
    value: function bindScrollTo() {
      var $link = $('.js-scroll-to');

      $link.on('click', function (event) {
        event.preventDefault();

        var target = $(this).attr('href');
        var offset = $(target).offset().top + 1;

        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      });
    }
  }, {
    key: 'bindScrolling',
    value: function bindScrolling() {
      var _this = this;

      _this.toggleNavUnderline();

      $(document).on('scroll', function () {
        _this.toggleNavUnderline();
      });
    }
  }, {
    key: 'toggleNavUnderline',
    value: function toggleNavUnderline() {
      var _this = this;

      var scrollTop = $(window).scrollTop();

      if (scrollTop >= _this.programaOffset && _this.isIntro) {
        _this.$navPrograma.addClass('nav-active');
        _this.$navIntro.removeClass('nav-active');
        _this.isIntro = false;
      }

      if (scrollTop < _this.programaOffset && !_this.isIntro) {
        _this.$navPrograma.removeClass('nav-active');
        _this.$navIntro.addClass('nav-active');
        _this.isIntro = true;
      }
    }
  }]);

  return Site;
}();

new Site();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = lazySizes;
	}
})(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */

	if (!document.getElementsByClassName) {
		return;
	}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function hasClass(ele, cls) {
		if (!regClassCache[cls]) {
			regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function addClass(ele, cls) {
		if (!hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function removeClass(ele, cls) {
		var reg;
		if (reg = hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
		var action = add ? _addEventListener : 'removeEventListener';
		if (add) {
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function (evt) {
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
		var event = document.createEvent('CustomEvent');

		if (!detail) {
			detail = {};
		}

		detail.instance = lazysizes;

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function updatePolyfill(el, full) {
		var polyfill;
		if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
			polyfill({ reevaluate: true, elements: [el] });
		} else if (full && full.src) {
			el.src = full.src;
		}
	};

	var getCSS = function getCSS(elem, style) {
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function getWidth(elem, parent, width) {
		width = width || elem.offsetWidth;

		while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
			width = parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = function () {
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function run() {
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while (runFns.length) {
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function rafBatch(fn, queue) {
			if (running && !queue) {
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if (!waiting) {
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	}();

	var rAFIt = function rAFIt(fn, simple) {
		return simple ? function () {
			rAF(fn);
		} : function () {
			var that = this;
			var args = arguments;
			rAF(function () {
				fn.apply(that, args);
			});
		};
	};

	var throttle = function throttle(fn) {
		var running;
		var lastTime = 0;
		var gDelay = 125;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function run() {
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && lazySizesConfig.ricTimeout ? function () {
			requestIdleCallback(run, { timeout: rICTimeout });

			if (rICTimeout !== lazySizesConfig.ricTimeout) {
				rICTimeout = lazySizesConfig.ricTimeout;
			}
		} : rAFIt(function () {
			setTimeout(run);
		}, true);

		return function (isPriority) {
			var delay;

			if (isPriority = isPriority === true) {
				rICTimeout = 33;
			}

			if (running) {
				return;
			}

			running = true;

			delay = gDelay - (Date.now() - lastTime);

			if (delay < 0) {
				delay = 0;
			}

			if (isPriority || delay < 9 && requestIdleCallback) {
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function debounce(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function run() {
			timeout = null;
			func();
		};
		var later = function later() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function () {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function () {
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 300
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for (prop in lazySizesDefaults) {
			if (!(prop in lazySizesConfig)) {
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function () {
			if (lazySizesConfig.init) {
				init();
			}
		});
	})();

	var loader = function () {
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = 'onscroll' in window && !/glebot/.test(navigator.userAgent);

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function resetPreloading(e) {
			isLoading--;
			if (e && e.target) {
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if (!e || isLoading < 0 || !e.target) {
				isLoading = 0;
			}
		};

		var isNestedVisible = function isNestedVisible(elem, elemExpand) {
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
				visible = (getCSS(parent, 'opacity') || 1) > 0;

				if (visible && getCSS(parent, 'overflow') != 'visible') {
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
				}
			}

			return visible;
		};

		var checkElements = function checkElements() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			var lazyloadElems = lazysizes.elements;

			if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

				i = 0;

				lowRuns++;

				if (preloadExpand == null) {
					if (!('expand' in lazySizesConfig)) {
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for (; i < eLlen; i++) {

					if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
						continue;
					}

					if (!supportScroll) {
						unveilElement(lazyloadElems[i]);continue;
					}

					if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
						elemExpand = currentExpand;
					}

					if (beforeExpandVal !== elemExpand) {
						eLvW = innerWidth + elemExpand * hFac;
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if (isLoading > 9) {
							break;
						}
					} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if (autoLoadElem && !loadedSomething) {
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function switchLoadingClass(e) {
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
			triggerEvent(e.target, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
			rafedSwitchLoadingClass({ target: e.target });
		};

		var changeIframeSrc = function changeIframeSrc(elem, src) {
			try {
				elem.contentWindow.location.replace(src);
			} catch (e) {
				elem.src = src;
			}
		};

		var handleSources = function handleSources(source) {
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
				source.setAttribute('media', customMedia);
			}

			if (sourceSrcset) {
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
			var src, srcset, parent, isPicture, event, firesLoad;

			if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

				if (sizes) {
					if (isAuto) {
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if (isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

				event = { target: elem };

				if (firesLoad) {
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if (isPicture) {
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if (srcset) {
					elem.setAttribute('srcset', srcset);
				} else if (src && !isPicture) {
					if (regIframe.test(elem.nodeName)) {
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if (isImg && (srcset || isPicture)) {
					updatePolyfill(elem, { src: src });
				}
			}

			if (elem._lazyRace) {
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function () {
				if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
					if (firesLoad) {
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			}, true);
		});

		var unveilElement = function unveilElement(elem) {
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
				return;
			}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if (isAuto) {
				autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function onload() {
			if (isCompleted) {
				return;
			}
			if (Date.now() - started < 999) {
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function () {
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function () {
				if (lazySizesConfig.loadMode == 3) {
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function _() {
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if (window.MutationObserver) {
					new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if (/d$|^c/.test(document.readyState)) {
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if (lazysizes.elements.length) {
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	}();

	var autoSizer = function () {
		var autosizesElems;

		var sizeElement = rAFIt(function (elem, parent, event, width) {
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if (regPicture.test(parent.nodeName || '')) {
				sources = parent.getElementsByTagName('source');
				for (i = 0, len = sources.length; i < len; i++) {
					sources[i].setAttribute('sizes', width);
				}
			}

			if (!event.detail.dataAttr) {
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function getSizeElement(elem, dataAttr, width) {
			var event;
			var parent = elem.parentNode;

			if (parent) {
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

				if (!event.defaultPrevented) {
					width = event.detail.width;

					if (width && width !== elem._lazysizesWidth) {
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function updateElementsSizes() {
			var i;
			var len = autosizesElems.length;
			if (len) {
				i = 0;

				for (; i < len; i++) {
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function _() {
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	}();

	var init = function init() {
		if (!init.i) {
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF
	};

	return lazysizes;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map