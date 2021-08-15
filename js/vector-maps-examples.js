(function($, window, document) {

  $(function() {

    $('#world-map').vectorMap({
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#666'
        }
      }
    });

    $('#europe').vectorMap({
      zoomOnScroll: false,
      map: 'europe_mill_en',
      regionStyle: {
        initial: {
          fill: '#666'
        }
      }
    });

    $('#usa').vectorMap({
      zoomOnScroll: false,
      map: 'us_aea_en',
      regionStyle: {
        initial: {
          fill: '#666'
        }
      }
    });

    $('#india').vectorMap({
      zoomOnScroll: false,
      map: 'in_mill_en',
      regionStyle: {
        initial: {
          fill: '#ccc'
        }
      }
    });

    $('#world-map-markers').vectorMap({
      regionStyle: {
        initial: {
          fill: '#666'
        }
      },
      markerStyle: {
        initial: {
          fill: '#e6be8a',
          stroke: '#fff',
          r: 15
        },
        hover: {
          stroke: '#fff',
        }
      },
      markers: [
        { latLng: [22.90, 12.45], name: '312 users' },
        { latLng: [43.73, 7.41], name: '435 users' },
        { latLng: [-0.52, 166.93], name: '5345 users' },
        { latLng: [-8.51, 179.21], name: '5435 users' },
        { latLng: [43.93, 12.46], name: '87 users' },
        { latLng: [47.14, 9.52], name: '5 users' },
        { latLng: [7.11, 171.06], name: '654 users' },
        { latLng: [17.3, -62.73], name: '6577 users' },
        { latLng: [3.2, 73.22], name: '564 users' },
        { latLng: [35.88, 14.5], name: '2354 users' },
        { latLng: [12.05, -61.75], name: '1230 users' },
        { latLng: [13.16, -61.23], name: '9375 users' },
        { latLng: [13.16, -59.55], name: '864 users' },
        { latLng: [17.11, -61.85], name: '6564 users' },
        { latLng: [-4.61, 55.45], name: '9845 users' },
        { latLng: [7.35, 134.46], name: '22 users' },
        { latLng: [42.5, 1.51], name: '1 user' },
        { latLng: [14.01, -60.98], name: '5467 users' },
        { latLng: [6.91, 158.18], name: '99 users' },
        { latLng: [1.3, 103.8], name: '123 users' },
        { latLng: [1.46, 173.03], name: '55 users' },
        { latLng: [-21.13, -175.2], name: '6540 users' },
        { latLng: [15.3, -61.38], name: '2346 users' },
        { latLng: [-20.2, 57.5], name: '7542 users' },
        { latLng: [26.02, 50.55], name: '234 users' },
        { latLng: [0.33, 6.73], name: '76 users' }
      ],
    });

  });

}(window.jQuery, window, document));