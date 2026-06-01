(function () {

    var embed = document.getElementById('timeline-embed');
    var bottomOffset = 40;
    embed.style.height = getEmbedHeight(bottomOffset);
    //embed.style.height = `calc(${getComputedStyle(document.body).height} - 10%)`;
    //embed.style.height = (parseInt(getComputedStyle(document.body).height) - bottomOffset) + "px";


    // Export as JSON
    // let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQeIEfze-0GvRB0qLh4K4D_QUl4GeqHA6XOFKIqDniWrB_L6dKwqZUtboY3a3ItturFe1Ct0QEhGn4y/pubhtml'
    // TL.exportJSON(url).then(console.log)

    var options = {

        // font: 'default',
        font: '/css/fonts.css',
        script_path: 'js/timeline3/',
        language: "de",
        hash_bookmark: false,
        marker_padding: 8,
        // marker_width_min: 105,
        // marker_height_min: 25,
        // timenav_position: "top",
        // timenav_height_percentage: 5,
        slide_padding_lr: 100,
        start_at_slide: 11,

        // menubar_height: 3,
        scale_factor: 10,
        // theme: "contrast"
        // theme: "dark",
        // default_bg_color: "#222",
        //  initial_zoom: 5,

    }


    timeline = new TL.Timeline(
        'timeline-embed',
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQeIEfze-0GvRB0qLh4K4D_QUl4GeqHA6XOFKIqDniWrB_L6dKwqZUtboY3a3ItturFe1Ct0QEhGn4y/pubhtml',
        options);





    window.addEventListener('resize', function () {
        embed.style.height = getEmbedHeight(bottomOffset);
        timeline.updateDisplay();
    })

    function getEmbedHeight(bottomOffset = 0) {
        const bodyHeight = parseInt(getComputedStyle(document.body).height);
        return (bodyHeight - bottomOffset) + "px";
    }


})();