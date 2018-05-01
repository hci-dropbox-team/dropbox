require(['jquery', 'vector-map', {% if include.map == 'de_merc' %}'vector-map-de'{% else %}'vector-map-world'{% endif %}], function(){
    $(document).ready(function(){
        var data = {{ include.data | jsonify }};
        var markers = false;

        $('#{{ include.id }}').vectorMap({
            map: '{{ include.map }}',
            zoomButtons : false,
            zoomOnScroll: false,
            panOnDrag: false,
            backgroundColor: 'transparent',
            markers: markers,
            markerStyle: {
                initial: {
                    fill: tabler.colors.blue,
                    stroke: '#fff',
                    "stroke-width": 1,
                    r: 5
                },
            },
            onRegionTipShow: function(e, el, code, f){
                el.html(el.html() + (data[code] ? ': <small>' + data[code]+'</small>' : ''));
            },
            series: {
                regions: [{
                    values: data,
                    scale: ['#EFF3F6', tabler.colors.blue],
                    normalizeFunction: 'polynomial'
                }]
            },
            regionStyle: {
                initial: {
                    fill: '#F4F4F4'
                }
            }
        });
    });
});