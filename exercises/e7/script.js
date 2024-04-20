console.log("hello world");

$('body').css('background-color', 'white')

for (let i = 0; i < 500; i++) {
    let block = '<div style= "width:100%; height: 20px; border: 1px"></div>';
    $('body').append(block);
}

$('div').each(function () {
    $(this).mouseenter(function () {
        $(this).addCalss('no-width');
    })
})

$('body').on('keypress', function () {

})