/* Welsh/UK initialisation for the jQuery UI date picker plugin. */
/* Written by William Griffiths. 
	 ported by Anton Artyukh (jqm_contribution@exadel.com, deeperton@gmail.com) */
jQuery(document).bind( "ui-calendarbeforecreate", function(){
	$.mobile.calendar.prototype.regional['cy-GB'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['Ionawr','Chwefror','Mawrth','Ebrill','Mai','Mehefin',
		'Gorffennaf','Awst','Medi','Hydref','Tachwedd','Rhagfyr'],
		monthNamesShort: ['Ion', 'Chw', 'Maw', 'Ebr', 'Mai', 'Meh',
		'Gor', 'Aws', 'Med', 'Hyd', 'Tac', 'Rha'],
		dayNames: ['Dydd Sul', 'Dydd Llun', 'Dydd Mawrth', 'Dydd Mercher', 'Dydd Iau', 'Dydd Gwener', 'Dydd Sadwrn'],
		dayNamesShort: ['Sul', 'Llu', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
		dayNamesMin: ['Su','Ll','Ma','Me','Ia','Gw','Sa'],
		weekHeader: 'Wy',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
});