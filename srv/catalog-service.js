
const cds = require('@sap/cds')

module.exports = srv=>{
 const {Cars}=srv.entities
 srv.after('READ','Cars',each=>{
  each.category = each.electric ? "EV":"ICE"
 })
}
