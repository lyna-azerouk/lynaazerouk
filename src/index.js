
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('show_details');
    const fn_button = document.getElementById('show_fn_details');

    button.addEventListener('click', function () {
        const lip6_details = document.getElementById('lip6_details');
        if (lip6_details.style.display === 'none' || !lip6_details.style.display) {
            lip6_details.style.display = 'block';
        } else {
            lip6_details.style.display = 'none'; 
        }
    });

    fn_button.addEventListener('click', function () {
        const fn_details = document.getElementById('fn_details');
        if (fn_details.style.display === 'none' || !fn_details.style.display) {
            fn_details.style.display = 'block';
        } else {
            fn_details.style.display = 'none'; 
        }
    });
});
