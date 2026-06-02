var embed = document.getElementById('timeline-embed');
var bottomOffset = 40;
embed.style.height = getEmbedHeight(bottomOffset);
//embed.style.height = `calc(${getComputedStyle(document.body).height} - 10%)`;
//embed.style.height = (parseInt(getComputedStyle(document.body).height) - bottomOffset) + "px";

window.timeline = new TL.Timeline('timeline-embed', 'data/timeline.json', {
        //theme: 'dark',
        //default_bg_color: "#222222",
        font: 'css/fonts.css',
        script_path: 'js/timeline3/',
        language: 'de',
        hash_bookmark: false,
        marker_padding: 8,
        slide_padding_lr: 100,
        start_at_slide: 11,
        scale_factor: 0.667,
    });


window.addEventListener('resize', function () {
    embed.style.height = getEmbedHeight(bottomOffset);
    timeline.updateDisplay();
})


function getEmbedHeight(bottomOffset = 0) {
    const bodyHeight = parseInt(getComputedStyle(document.body).height);
    return (bodyHeight - bottomOffset) + "px";
}