(function($) {

    "use strict";          


        /* Video */
        var $videoSrc;  
        $('.play-btn').click(function() {
            $videoSrc = $(this).data( "src" );
        });
        $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        })
        $('#videoModal').on('hide.bs.modal', function (e) {
          $("#video").attr('src',$videoSrc); 
        })

        $(".user-items .search-item").click(function(){
            $(".search-box").toggleClass('active');
            $(".search-box .search-input").focus();
          });
          $(".close-button").click(function(){
            $(".search-box").toggleClass('active');
          }); 

          // Video  end

        document.addEventListener("DOMContentLoaded", function(){
        
            window.addEventListener('scroll', function() {
                
              if (window.scrollY > 50) {
                document.getElementById('header-nav').classList.add('fixed-top');
              } else {
                document.getElementById('header-nav').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
              }      

            });

            $(window).on('scroll',function(){
                if($(window).scrollTop()){
                    $('nav').addClass('nav-bg');
                }
                else{
                    $('nav').removeClass('nav-bg');
                }
            })


          }); 
          // DOMContentLoaded  end

          AOS.init({
              duration: 1200,
          })

          var swiper = new Swiper(".featured-swiper", {
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

          var swiper = new Swiper(".team-swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1299: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            },
          });

          var swiper = new Swiper(".testimonial-swiper", {
            loop: true,
            pagination: {
              el: "#testimonials .swiper-pagination",
              clickable: true,
            },
          });

          $(".hover").mouseleave(
            function () {
              $(this).removeClass("hover");
            }
          );
                   

    })(jQuery);