function Functioncodnum() {

  $.sweetModal({
	title: {
		tab1: {
			label: 'Vista 1'
		},

		tab2: {
			label: 'Vista 2'
		},
        tab3: {
			label: 'Colori'
		}
	},

	content: {
		tab1: '<center><img src="crocesmom.PNG" alt="cod " id="imgtab1"></img> <script>$(document).ready(function(){ $("#imgtab1").width(200); $("#imgtab1").mouseover(function() { $(this).css("cursor","pointer"); $(this).animate({width: "500px"}, "slow"); }); $("#imgtab1").mouseout(function() { $(this).animate({width: "200px"}, "slow"); }); });</script></center>',
		tab2: '<center><img src="underconstruction.jpg" alt="cod " id="imgtab2"></img> <script>$(document).ready(function(){ $("#imgtab2").width(200); $("#imgtab2").mouseover(function() { $(this).css("cursor","pointer"); $(this).animate({width: "500px"}, "slow"); }); $("#imgtab2").mouseout(function() { $(this).animate({width: "200px"}, "slow"); }); });</script></center>',
        tab3: 'Colori disponibili...'
	},
/*
	buttons: {
		someOtherAction: {
			label: 'Action 2',
			classes: 'secondaryB bordered flat',
			action: function() {
				return $.sweetModal('You clicked Action 2!');
			}
		},

		someAction: {
			label: 'Action 1',
			classes: '',
			action: function() {
				return $.sweetModal('You clicked Action 1!');
			}
		},
	}   */
});


}
