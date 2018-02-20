export function setGrapherStyle(id, zoom) {
    const div = document.getElementById(id)
    const svg = div.getElementsByTagName('svg')[0];
    setTextSize(svg);
    const curve = div.getElementsByClassName('graph')[0].getElementsByTagName('path')[0];
    curve.setAttribute('stroke-width', '2');

    if(!zoom) {
        const xAxis =  div.getElementsByClassName('x axis')[0];
        const xAxisNumbers = xAxis.getElementsByTagName('text');
        correctXAxisNumbers(xAxisNumbers);
        const yAxis =  div.getElementsByClassName('y axis')[0];
        const yAxisNumbers = yAxis.getElementsByTagName('text');
        correctYAxisNumbers(yAxisNumbers);
    }
}

function setTextSize(svgEl) {
    svgEl.setAttribute('font-size', '14px');
}

function moveXAxisNumber(htmlEl) {
    htmlEl.setAttribute('transform', 'translate(0,-150)');
}

function moveYAxisNumber(htmlEl) {
    htmlEl.setAttribute('transform', 'translate(235,0)');
}

function correctXAxisNumbers(numHtmlCol) {
    for(let i = 0; i < numHtmlCol.length; i++) {
        moveXAxisNumber(numHtmlCol[i]);
    }
}

function correctYAxisNumbers(numHtmlCol) {
    for(let i = 0; i < numHtmlCol.length; i++) {
        moveYAxisNumber(numHtmlCol[i]);
    }
}

/*
<text dy=".71em" style="text-anchor: middle;" y="3" x="0" transform="translate(0,-150)" class="AxisLabel">-5</text>
*/