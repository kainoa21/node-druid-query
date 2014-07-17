'use strict'


/**
 * Minimum metric value
 *
 * @see http://druid.io/docs/0.6.120/Aggregations.html
 *
 * @param {string} fieldName name of the metric column
 */
module.exports = function min(fieldName) {
  this.fieldName = fieldName
}