
$(document).ready(function() {
        $(document).on('click', '.showMore', function () {
            $('.showMore').text("Show less");
            $('.showMore').attr('class', 'showLess btn btn-info');
            $('.skills').animate({height: '1500px'}, "slow");
        });

        $(document).on('click', '.showLess', function () {
            //$('.moreSkills').css("visibility", "hidden");
            $('.showLess').text("Show more");
            $('.showLess').attr('class', 'showMore btn btn-info');
            $('.skills').animate({height: '420px'}, "slow");
        });

        $(".anchor").click(function(e) {
            e.preventDefault();
            anchor = $(this).attr('href');
            $("html, body").animate({
              'scrollTop':   $(anchor).offset().top
            }, 1000);
        });

});