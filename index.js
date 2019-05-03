'use strict';

/**
 * Get Current date
 * @return {string}
 */
exports.GetDateTime = function() {
    return (new Date());
};

/**
 * Get Full Date in the Format of MM/DD/YY
 *  @return {string}
 */
exports.GetFullDate = function() {
    var Todaysdate = new Date();
    return Todaysdate.toLocaleDateString();
};
exports.FormatDate = function(Format,seperator){
    var Todaysdate = new Date();
    var datepart = Todaysdate.getDate();
    var monthpart = Todaysdate.getMonth();
    var yearpart = Todaysdate.getFullYear(2);
    console.log(yearpart);
    return Todaysdate.toLocaleDateString();
}