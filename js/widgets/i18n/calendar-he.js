/* Hebrew initialisation for the UI Datepicker extension. */
/* Written by Amir Hardon (ahardon at gmail dot com). 
	 ported by Anton Artyukh (jqm_contribution@exadel.com, deeperton@gmail.com) */
jQuery(document).bind( "ui-calendarbeforecreate", function(){
	$.mobile.calendar.prototype.regional['he'] = {
		closeText: 'סגור',
		prevText: '&#x3C;הקודם',
		nextText: 'הבא&#x3E;',
		currentText: 'היום',
		monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני',
		'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
		monthNamesShort: ['ינו','פבר','מרץ','אפר','מאי','יוני',
		'יולי','אוג','ספט','אוק','נוב','דצמ'],
		dayNames: ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'],
		dayNamesShort: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
		dayNamesMin: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
});
