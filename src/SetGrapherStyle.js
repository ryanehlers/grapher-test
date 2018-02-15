export function setGrapherStyle(id) {
    const div = document.getElementById(id)
    const curve = div.getElementsByClassName('graph')[0].getElementsByTagName('path')[0];
    curve.setAttribute('stroke-width', '2');

    const xAxis =  div.getElementsByClassName('x axis')[0];
    const xAxisNumbers = xAxis.getElementsByTagName('text');
    correctXAxisNumbers(xAxisNumbers);

    const yAxis =  div.getElementsByClassName('y axis')[0];
    const yAxisNumbers = yAxis.getElementsByTagName('text');
    correctYAxisNumbers(yAxisNumbers);
}

function moveXAxisNumber(htmlEl) {
    htmlEl.setAttribute('transform', 'translate(0,-150)');
}

function moveYAxisNumber(htmlEl) {
    htmlEl.setAttribute('transform', 'translate(235,0)');
}

function setAxisNumberClass(htmlEl) {
    htmlEl.setAttribute('style', 'text-anchor: middle; font-size: 14px;');
}

function correctXAxisNumbers(numHtmlCol) {
    for(let i = 0; i < numHtmlCol.length; i++) {
        moveXAxisNumber(numHtmlCol[i]);
        setAxisNumberClass(numHtmlCol[i]);
    }
}

function correctYAxisNumbers(numHtmlCol) {
    for(let i = 0; i < numHtmlCol.length; i++) {
        moveYAxisNumber(numHtmlCol[i]);
        setAxisNumberClass(numHtmlCol[i]);
    }
}

/*
<text dy=".71em" style="text-anchor: middle;" y="3" x="0" transform="translate(0,-150)" class="AxisLabel">-5</text>
*/