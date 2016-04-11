/*
 * Tyler Deans
 * March 17, 2016
 */


function FoldView(_simView) {
    // keep a link to the view
    this.simView = _simView;
}


/*
	draws expressions for the option view
*/

FoldView.prototype.drawFoldExpression = function(_fold) {

    $('#foldDiv').append(_fold.foldExpression);
}