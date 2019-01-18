
    /*obsluga menu rwd */
    $(document).ready(function() {
        if($(window).width() <= 728) {
            $("ul.navigacja").hide();
        } else {
            $("ul.navigacja").show();
        }
        $(window).on('resize', function(){
            var win = $(this);
            if (win.width() <= 728) { 
                $("ul.navigacja").hide();
            } else {
                $("ul.navigacja").show();
            }
        });
        $(".hamburger").click(function() {
            $("ul.navigacja").slideToggle();
        });

        
        $("#rozwin-oAutorze").click(function(){
            $("#oAutorze").slideToggle();
        });
        
        /* slider */
        const slider = [];
        slider.push("imgSlider1");
        slider.push("imgSlider2");
        slider.push("imgSlider3");
        $(document).ready(function() {
            $("#imgSlider2").hide();
            $("#imgSlider3").hide();
        });

        var i = -1;
        setInterval(function () {
            if(i < slider.length) {
                i++;
                $("#" + slider[i] + "").slideUp("slow");
                if(i == slider.length-1) {
                    i = -1;
                }
                $("#" + slider[i+1] + "").slideDown("slow");
            }
        }, 5000);
    });

    let flota = [];
    flota.push('urus.html');
    flota.push('db11.html');
    flota.push('650s.html');
    flota.push('488.html');
    
    function flotaViewNext() {
        let actualPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);

        let index = flota.indexOf(actualPage);
        
        if(index == flota.length-1) {
            location.href = flota[0];        
        } else {
            location.href = flota[index+1];
        }
    }
    function flotaViewBack() {
        let actualPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);

        let index = flota.indexOf(actualPage);
        
        if(index == 0) {
            location.href = flota[flota.length-1];        
        } else {
            location.href = flota[index-1];
        }
    }


    


    

  

   
    
