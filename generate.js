function generate(targetId, elements){
    generateLabels(elements);

    var cy = cytoscape({
        container: document.getElementById(targetId),
        elements: elements,
        style: [
            {
                selector: 'node',
                style: {
                    shape: 'roundrectangle',
                    'border-radius': '25px',
                    'background-color': 'white',
                    label: 'data(label)',
                    'background-fit': 'contain',
                    color: '#777'
                }
            },
            {
                selector: '$node > node',
                style: {
                    color: '#bbb',
                    'background-color': '#eee',
                }
            },
            {
                selector: 'edge',
                style: {
                    'label': 'data(label)',
                    'color': '#333',
                    'width': 3,
                    'line-color': '#ccc',

                    'width': 6,
                    'target-arrow-shape': 'triangle',
                    'line-color': '#9dbaea',
                    'target-arrow-color': '#9dbaea',
                    'opacity': 0.7,
                    'curve-style': 'bezier'
                }
            },
        ],
    });

    cy.on('tap', 'node', function(){
        try { // your browser may block popups
            window.open( this.data('href') );
        } catch(e){ // fall back on url change
            window.location.href = this.data('href'); 
        }
    });

    cy.layout({
        name: 'cose'
        // name: 'concentric'
        // name: 'breadthfirst'
        // name: 'random'
        // name: 'grid'
        // name: 'circle'
    });

    Object.keys(bgs).map(function(k){
        cy.style()
            .selector(k)
            .style({
                'background-image': bgs[k],
            })
            .update();
    });

    return cy;
};

function generateLabels(elements){
    elements.map(function(e){
        var label = e.data.label;
        if (!label) {
            e.data.label = e.data.id;
        }
    });
}
