// Declare All Variables
var presentState = 0;

function openTab(evt, tabName){
  // Declare All Variables
  var i, tabcontent, tablinks;
  // Get All Elements With class="tabcontent" And Hide Them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
  // Get All Elements With class="tablinks" And Remove The Class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show The Current Tab, And Add An "active" Class To The Button That Opened The Tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* Distance vs Time Graph
const labels = ['1','2','3','4','5','6','7','8','9','10'];
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125];
const data = {
  labels: labels,
  datasets: [{
      data: datapoints,
      borderColor: "red",
      fill: false,1
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }]
};
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Distance'
        },
      }
    }
  },
};
var ctx = new Chart(document.getElementById('distance-time').getContext('2d'), config);
*/

function stateTransition(evt, State){
  // State Transition
  if (State == 1){
    presentState = 1;                                           // Safe To Approach
    document.getElementById("Message_Box_Value_1").innerHTML = 'Pod is Safe to Approch';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Pod is Safe to Approch';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Pod is Safe to Approch';
  } else if (State == 2 && presentState == 1){
    presentState = 2;                                           // Primary Battery Pack
    document.getElementById("Message_Box_Value_1").innerHTML = 'Initializing Primary Battery Pack';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Initializing Primary Battery Pack';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Initializing Primary Battery Pack';
  } else if (State == 3 && presentState == 2){
    presentState = 3;                                           // Inverter
    document.getElementById("Message_Box_Value_1").innerHTML = 'Initializing Inverter';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Initializing Inverter';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Initializing Inverter';
  } else if (State == 4 && presentState == 3){
    presentState = 4;                                           // Cooling Systems
    document.getElementById("Message_Box_Value_1").innerHTML = 'Initializing Cooling Systems';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Initializing Cooling Systems';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Initializing Cooling Systems';
  } else if (State == 5 && presentState == 4){
    presentState = 5;                                           // Levitation
    document.getElementById("Message_Box_Value_1").innerHTML = 'Initializing Levitation (EMS)';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Initializing Levitation (EMS)';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Initializing Levitation (EMS)';
  } else if (State == 6 && presentState == 5){
    presentState = 6;                                           // Propulsion
    document.getElementById("Message_Box_Value_1").innerHTML = 'Initializing Propulsion (LIM)';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Initializing Propulsion (LIM)';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Initializing Propulsion (LIM)';
  } else if (State == 8){
    presentState = 8;                                           // Brakes
    document.getElementById("Message_Box_Value_1").innerHTML = 'Actuating Brakes';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Actuating Brakes';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Actuating Brakes';
  } else if (State == 9 && presentState == 4){
    presentState = 9;                                           // Crawl
    document.getElementById("Message_Box_Value_1").innerHTML = 'Activating Crawl Protocol';
    document.getElementById("Message_Box_Value_2").innerHTML = 'Activating Crawl Protocol';
    document.getElementById("Message_Box_Value_3").innerHTML = 'Activating Crawl Protocol';
  } else{}                                                      // Unknown Command
}

setInterval(function updateLabelsMT(evt){
  document.getElementById("Present_State").innerHTML = 'STA';
  document.getElementById("Primary_Status").innerHTML = 'OFF';
  document.getElementById("Secondary_Status").innerHTML = 'ON';
  document.getElementById("Inverter_Status").innerHTML = 'OFF';
  document.getElementById("Cooling_System_Status").innerHTML = 'OFF';
  document.getElementById("Levitation_Status").innerHTML = 'OFF';
  document.getElementById("Propulsion_Status").innerHTML = 'OFF';
  document.getElementById("Brakes_Status").innerHTML = 'OFF';
  document.getElementById("Inverter_Status").innerHTML = 'OFF';
  document.getElementById("Inv_Voltage").innerHTML = '0.0';
  document.getElementById("Inv_Current").innerHTML = '0.0';
  document.getElementById("Inv_Temperature").innerHTML = '0.0';
  document.getElementById("Pressure1_Reading").innerHTML = '0.0';
  document.getElementById("Pressure2_Reading").innerHTML = '0.0';
  document.getElementById("Reed1_Reading").innerHTML = 'OFF';
  document.getElementById("Reed2_Reading").innerHTML = 'OFF';
  document.getElementById("Front_Damper_Status").innerHTML = 'Semi-Active';
  document.getElementById("Rear_Damper_Status").innerHTML = 'Semi-Active';
  document.getElementById("Damper_Distance1_Reading").innerHTML = '0.0';
  document.getElementById("Damper_Distance2_Reading").innerHTML = '0.0';
  document.getElementById("AC_Reading").innerHTML = '0.0';
  document.getElementById("DC_Reading").innerHTML = '0.0';
  document.getElementById("LIM_Voltage_Reading").innerHTML = '0.0';
  document.getElementById("Power_Input_Reading").innerHTML = '0.0';
  document.getElementById("LIM_Temperature1_Reading").innerHTML = '0.0';
  document.getElementById("LIM_Temperature2_Reading").innerHTML = '0.0';
  document.getElementById("Tape1_Reading").innerHTML = '0';
  document.getElementById("Tape2_Reading").innerHTML = '0';
  document.getElementById("Ubiquiti_Status").innerHTML = 'True';
  document.getElementById("Roll_Reading").innerHTML = '0.0';
  document.getElementById("Pitch_Reading").innerHTML = '0.0';
  document.getElementById("Yaw_Reading").innerHTML = '0.0';
  document.getElementById("SOC_Reading").innerHTML = '0.0';
  document.getElementById("Voltage_Reading").innerHTML = '0.0';
  document.getElementById("Current_Reading").innerHTML = '0.0';
  document.getElementById("Max_Cell_Voltage_Reading").innerHTML = '0.0';
  document.getElementById("Min_Cell_Voltage_Reading").innerHTML = '0.0';
  document.getElementById("Max_Cell_Temp_Reading").innerHTML = '0.0';
  document.getElementById("Min_Cell_Temp_Reading").innerHTML = '0.0';
  document.getElementById("Avg_Cell_Temp_Reading").innerHTML = '0.0';
  document.getElementById("EMS_Current_Reading").innerHTML = '0.0';
  document.getElementById("Gap1_Reading").innerHTML = '0.0';
  document.getElementById("Gap2_Reading").innerHTML = '0.0';
  document.getElementById("Kinematics_Distance_Value").innerHTML = '0.0';
  document.getElementById("Kinematics_Speed_Value").innerHTML = '0.0';
  document.getElementById("Kinematics_Acceleration_Value").innerHTML = '0.0';
  document.getElementById("Error_Box_Value_1").innerHTML = 'No Errors';
  document.getElementById("Message_Box_Value_1").innerHTML = 'No Messages';
  document.getElementById("Error_Box_Value_2").innerHTML = 'No Errors';
  document.getElementById("Message_Box_Value_2").innerHTML = 'No Messages';
  document.getElementById("Error_Box_Value_3").innerHTML = 'No Errors';
  document.getElementById("Message_Box_Value_3").innerHTML = 'No Messages';
},1000);

setInterval(function updateLabelsPST(evt){
  document.getElementById("Cell1").innerHTML = '0.0';
  document.getElementById("Cell2").innerHTML = '0.0';
  document.getElementById("Cell3").innerHTML = '0.0';
  document.getElementById("Cell4").innerHTML = '0.0';
  document.getElementById("Cell5").innerHTML = '0.0';
  document.getElementById("Cell6").innerHTML = '0.0';
  document.getElementById("Cell7").innerHTML = '0.0';
  document.getElementById("Cell8").innerHTML = '0.0';
  document.getElementById("Cell9").innerHTML = '0.0';
  document.getElementById("Cell10").innerHTML = '0.0';
  document.getElementById("Cell11").innerHTML = '0.0';
  document.getElementById("Cell12").innerHTML = '0.0';
  document.getElementById("Cell13").innerHTML = '0.0';
  document.getElementById("Cell14").innerHTML = '0.0';
  document.getElementById("Cell15").innerHTML = '0.0';
  document.getElementById("Cell16").innerHTML = '0.0';
  document.getElementById("Cell17").innerHTML = '0.0';
  document.getElementById("Cell18").innerHTML = '0.0';
  document.getElementById("Cell19").innerHTML = '0.0';
  document.getElementById("Cell20").innerHTML = '0.0';
  document.getElementById("Cell21").innerHTML = '0.0';
  document.getElementById("Cell22").innerHTML = '0.0';
  document.getElementById("Cell23").innerHTML = '0.0';
  document.getElementById("Cell24").innerHTML = '0.0';
  document.getElementById("Cell25").innerHTML = '0.0';
  document.getElementById("Cell26").innerHTML = '0.0';
  document.getElementById("Cell27").innerHTML = '0.0';
  document.getElementById("Cell28").innerHTML = '0.0';
  document.getElementById("Cell29").innerHTML = '0.0';
  document.getElementById("Cell30").innerHTML = '0.0';
  document.getElementById("Cell31").innerHTML = '0.0';
  document.getElementById("Cell32").innerHTML = '0.0';
  document.getElementById("Cell33").innerHTML = '0.0';
  document.getElementById("Cell34").innerHTML = '0.0';
  document.getElementById("Cell35").innerHTML = '0.0';
  document.getElementById("Cell36").innerHTML = '0.0';
  document.getElementById("Cell37").innerHTML = '0.0';
  document.getElementById("Cell38").innerHTML = '0.0';
  document.getElementById("Cell39").innerHTML = '0.0';
  document.getElementById("Cell40").innerHTML = '0.0';
  document.getElementById("Cell41").innerHTML = '0.0';
  document.getElementById("Cell42").innerHTML = '0.0';
  document.getElementById("Cell43").innerHTML = '0.0';
  document.getElementById("Cell44").innerHTML = '0.0';
  document.getElementById("Cell45").innerHTML = '0.0';
  document.getElementById("Cell46").innerHTML = '0.0';
  document.getElementById("Cell47").innerHTML = '0.0';
  document.getElementById("Cell48").innerHTML = '0.0';
  document.getElementById("Cell49").innerHTML = '0.0';
  document.getElementById("Cell50").innerHTML = '0.0';
  document.getElementById("Cell51").innerHTML = '0.0';
  document.getElementById("Cell52").innerHTML = '0.0';
  document.getElementById("Cell53").innerHTML = '0.0';
  document.getElementById("Cell54").innerHTML = '0.0';
  document.getElementById("Cell55").innerHTML = '0.0';
  document.getElementById("Cell56").innerHTML = '0.0';
  document.getElementById("Cell57").innerHTML = '0.0';
  document.getElementById("Cell58").innerHTML = '0.0';
  document.getElementById("Cell59").innerHTML = '0.0';
  document.getElementById("Cell60").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_1").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_2").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_3").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_4").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_5").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_6").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_7").innerHTML = '0.0';
  document.getElementById("Temperature_Reading_8").innerHTML = '0.0';
  document.getElementById("SOC_Reading_PS").innerHTML = '0.0';
  document.getElementById("Voltage_Reading_PS").innerHTML = '0.0';
  document.getElementById("Current_Reading_PS").innerHTML = '0.0';
  document.getElementById("Max_Cell_Voltage_Reading_PS").innerHTML = '0.0';
  document.getElementById("Min_Cell_Voltage_Reading_PS").innerHTML = '0.0';
  document.getElementById("Avg_Cell_Temp_Reading_PS").innerHTML = '0.0';
  document.getElementById("Max_Cell_Temp_Reading_PS").innerHTML = '0.0';
  document.getElementById("Min_Cell_Temp_Reading_PS").innerHTML = '0.0';
},1000);

setInterval(function updateTime(evt){
  var today = new Date(),
  minutes = today.getMinutes().toString().length == 1 ? '0'+today.getMinutes() : today.getMinutes(),
  hours = today.getHours().toString().length == 1 ? '0'+today.getHours() : today.getHours(),
  ampm = today.getHours() >= 12 ? 'pm' : 'am',
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var time = days[today.getDay()]+' '+months[today.getMonth()]+' '+today.getDate()+' '+today.getFullYear()+' '+hours+':'+minutes+ampm;
  document.getElementById("time1").innerHTML = time;
  document.getElementById("time2").innerHTML = time;
  document.getElementById("time3").innerHTML = time;
},1000);