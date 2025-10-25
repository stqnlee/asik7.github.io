$(document).ready(function() {
    console.log("jQuery is ready!");
    let isChanged = false;
    $('#change-content').click(function() {
        if (!isChanged) {
            $('#id-selector').text('changed by id');
            $('.class-selector').html('<strong>changed by class</strong>');
            $('.tag-example').css('color', 'orange');
        } else {
            $('#id-selector').text('text by id');
            $('.class-selector').html('text by class');
            $('.tag-example').css('color', '');
        }
        isChanged = !isChanged;
    });

    $('#hide-btn').click(() => $('#visibility-paragraph').hide(400));  
    $('#show-btn').click(() => $('#visibility-paragraph').show(400));
    $('#toggle-btn').click(() => $('#visibility-paragraph').toggle(400));

    $('#fade-in-btn').click(() => $('#fade-image').fadeIn(800));
    $('#fade-out-btn').click(() => $('#fade-image').fadeOut(800));
    $('#fade-toggle-btn').click(() => $('#fade-image').fadeToggle(800));

    $('#slide-up-btn').click(() => $('#collapsible-panel').slideUp(600));
    $('#slide-down-btn').click(() => $('#collapsible-panel').slideDown(600));
    $('#slide-toggle-btn').click(() => $('#collapsible-panel').slideToggle(600));

    let photoCount = 2;
    $('#add-item').click(function() {
        $('#dynamic-list').append(`<li>photo ${photoCount}</li>`);
        photoCount++;
    });
    $('#remove-item').click(function() {
        $('#dynamic-list li:last').remove();
        if (photoCount > 1) photoCount--;
    });

    let imgChanged = false;
    $('#change-src').click(function() {
        if (!imgChanged) {
            $('#change-src-img').attr('src', 'gr.JPG');
        } else {
            $('#change-src-img').attr('src', 'ma.JPG');
        }
        imgChanged = !imgChanged;
    });

    let linkChanged = false;
    $('#change-href').click(function() {
        if (!linkChanged) {
            $('#change-href-link').attr('href', 'gr.JPG').text('link of photo 2');
        } else {
            $('#change-href-link').attr('href', 'gr.JPG').text('link of photo 1');
        }
        linkChanged = !linkChanged;
    });

    $('#name-input, #email-input').on('input', function() {
        const name = $('#name-input').val();
        const email = $('#email-input').val();
        $('#live-display').text(`Live input: Name - ${name}, Email - ${email}`);
    });

    $('#basic-animate').click(function() {
        $('#square').animate({
            width: '200px',
            height: '200px',
            left: '150px'
        }, 1000);
    });
    $('#sequential-animate').click(function() {
        $('#square')
            .animate({ left: '300px' }, 600)
            .animate({ top: '100px' }, 600)
            .animate({ width: '50px', height: '50px' }, 600)
            .animate({ left: '0px', top: '0px', width: '100px', height: '100px' }, 600);
    });
    $('#combined-animate').click(function() {
        $('#square').animate({
            opacity: 0.4,
            width: '180px',
            height: '180px',
            left: '200px',
            borderRadius: '50%'
        }, 1200);
    });

    $('.gallery-thumbnail').hide().fadeIn(1000);

    $('.gallery-thumbnail').click(function() {
        const src = $(this).attr('src').replace('150', '600'); 
        $('#enlarged-image').attr('src', src).fadeIn(300);
        $('#overlay').fadeIn(300);
    });

    $('#overlay, #enlarged-image').click(function() {
        $('#enlarged-image').fadeOut(300, function() {
            $(this).attr('src', '');
        });
        $('#overlay').fadeOut(300);
    });
});
