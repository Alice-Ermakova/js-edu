/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      
        //create variables
	      let MasterJS_hours = 800;
	      let BasicsProgramming_hours = 500;
	      let Total_amount_of_hours = 0;
          if(knowsProgramming){
              Total_amount_of_hours = 800;
          }
          else{
              Total_amount_of_hours = MasterJS_hours + BasicsProgramming_hours;
          }
        return result = Math.ceil(Total_amount_of_hours/config[focus]);      
      };
  