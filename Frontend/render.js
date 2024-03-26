/*const socket = io('http://localhost:3000')

socket.on('connect',()=>{
  console.log('Connection Sucessfull Between Mqtt/Render.js With Socket ID',socket.id)
})*/


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

// State Parameters
const Present_State = document.getElementById('Present_State')
const Primary_Status = document.getElementById('Primary_Status')
const Secondary_Status = document.getElementById('Secondary_Status')
const Inverter_Status = document.getElementById('Inverter_Status')
const Cooling_System_Status = document.getElementById('Cooling_System_Status')
const Levitation_Status = document.getElementById('Levitation_Status')
const Propulsion_Status = document.getElementById('Propulsion_Status')
const Brakes_Status = document.getElementById('Brakes_Status')
// Inverter Parameters
const Inv_Voltage = document.getElementById('Inv_Voltage')
const Inv_Current = document.getElementById('Inv_Current')
const Inv_Temperature = document.getElementById('Inv_Temperature')
// Embedded Parameters
const Ubiquity_Status = document.getElementById('Ubiquiti_Status')
const Roll = document.getElementById('Roll_Reading')
const Pitch = document.getElementById('Pitch_Reading')
const Yaw = document.getElementById('Yaw_Reading')
// Propulsion Parameters
const AC_Current = document.getElementById('AC_Reading')
const DC_Current = document.getElementById('DC_Reading')
const LIM_Voltage = document.getElementById('LIM_Voltage_Reading')
const Power_Input = document.getElementById('Power_Input_Reading')
const LIM_Temperature_1 = document.getElementById('LIM_Temperature1_Reading')
const LIM_Temperature_2 = document.getElementById('LIM_Temperature2_Reading')
// Stability Parameters
const Front_Damper = document.getElementById('Front_Damper_Status')
const Rear_Damper = document.getElementById('Rear_Damper_Status')
const Distance_1 = document.getElementById('Damper_Distance1_Reading')
const Distance_2 = document.getElementById('Damper_Distance2_Reading')
// Braking Parameters
const Pressure_1 = document.getElementById('Pressure1_Reading')
const Pressure_2 = document.getElementById('Pressure2_Reading')
const Pressure_3 = document.getElementById('Pressure3_Reading')
const Pressure_4 = document.getElementById('Pressure4_Reading')
const Reed_1 = document.getElementById('Reed1_Reading')
const Reed_2 = document.getElementById('Reed2_Reading')
// Battery Parameters
const SOC = document.getElementById('SOC_Reading')
const Voltage = document.getElementById('Voltage_Reading')
const Current = document.getElementById('Current_Reading')
const Min_Cell_Voltage = document.getElementById('Min_Cell_Voltage_Reading')
const Max_Cell_Voltage = document.getElementById('Max_Cell_Voltage_Reading')
const Min_Cell_Temperature = document.getElementById('Min_Cell_Temp_Reading')
const Max_Cell_Temperature = document.getElementById('Max_Cell_Temp_Reading')
// Levitation Parameters
const EMS_Current = document.getElementById('EMS_Current_Reading')
const Gap_1 = document.getElementById('Gap1_Reading')
const Gap_2 = document.getElementById('Gap2_Reading')
// Primary Parameters
const KM_Distance = document.getElementById('Kinematics_Distance_Value')
const KM_Speed = document.getElementById('Kinematics_Speed_Value')
const KM_Acceleration = document.getElementById('Kinematics_Acceleration_Value')
// Message Dialog
const Message_Box_1 = document.getElementById('Message_Box_Value_1')
const Message_Box_2 = document.getElementById('Message_Box_Value_2')
const Message_Box_3 = document.getElementById('Message_Box_Value_3')
// Errors Dialog
const Error_Box_1 = document.getElementById('Error_Box_Value_1')
const Error_Box_2 = document.getElementById('Error_Box_Value_2')
const Error_Box_3 = document.getElementById('Error_Box_Value_3')
// Power Systems
// Voltage Parameters
const Cell1 = document.getElementById("Cell1")
const Cell2 = document.getElementById("Cell2")
const Cell3 = document.getElementById("Cell3")
const Cell4 = document.getElementById("Cell4")
const Cell5 = document.getElementById("Cell5")
const Cell6 = document.getElementById("Cell6")
const Cell7 = document.getElementById("Cell7")
const Cell8 = document.getElementById("Cell8")
const Cell9 = document.getElementById("Cell9")
const Cell10 = document.getElementById("Cell10")
const Cell11 = document.getElementById("Cell11")
const Cell12 = document.getElementById("Cell12")
const Cell13 = document.getElementById("Cell13")
const Cell14 = document.getElementById("Cell14")
const Cell15 = document.getElementById("Cell15")
const Cell16 = document.getElementById("Cell16")
const Cell17 = document.getElementById("Cell17")
const Cell18 = document.getElementById("Cell18")
const Cell19 = document.getElementById("Cell19")
const Cell20 = document.getElementById("Cell20")
const Cell21 = document.getElementById("Cell21")
const Cell22 = document.getElementById("Cell22")
const Cell23 = document.getElementById("Cell23")
const Cell24 = document.getElementById("Cell24")
const Cell25 = document.getElementById("Cell25")
const Cell26 = document.getElementById("Cell26")
const Cell27 = document.getElementById("Cell27")
const Cell28 = document.getElementById("Cell28")
const Cell29 = document.getElementById("Cell29")
const Cell30 = document.getElementById("Cell30")
const Cell31 = document.getElementById("Cell31")
const Cell32 = document.getElementById("Cell32")
const Cell33 = document.getElementById("Cell33")
const Cell34 = document.getElementById("Cell34")
const Cell35 = document.getElementById("Cell35")
const Cell36 = document.getElementById("Cell36")
const Cell37 = document.getElementById("Cell37")
const Cell38 = document.getElementById("Cell38")
const Cell39 = document.getElementById("Cell39")
const Cell40 = document.getElementById("Cell40")
const Cell41 = document.getElementById("Cell41")
const Cell42 = document.getElementById("Cell42")
const Cell43 = document.getElementById("Cell43")
const Cell44 = document.getElementById("Cell44")
const Cell45 = document.getElementById("Cell45")
const Cell46 = document.getElementById("Cell46")
const Cell47 = document.getElementById("Cell47")
const Cell48 = document.getElementById("Cell48")
const Cell49 = document.getElementById("Cell49")
const Cell50 = document.getElementById("Cell50")
const Cell51 = document.getElementById("Cell51")
const Cell52 = document.getElementById("Cell52")
const Cell53 = document.getElementById("Cell53")
const Cell54 = document.getElementById("Cell54")
const Cell55 = document.getElementById("Cell55")
const Cell56 = document.getElementById("Cell56")
const Cell57 = document.getElementById("Cell57")
const Cell58 = document.getElementById("Cell58")
const Cell59 = document.getElementById("Cell59")
const Cell60 = document.getElementById("Cell60")
// Temperature Parameters
const Temperature_Reading_1 = document.getElementById("Temperature_Reading_1")
const Temperature_Reading_2 = document.getElementById("Temperature_Reading_2")
const Temperature_Reading_3 = document.getElementById("Temperature_Reading_3")
const Temperature_Reading_4 = document.getElementById("Temperature_Reading_4")
const Temperature_Reading_5 = document.getElementById("Temperature_Reading_5")
const Temperature_Reading_6 = document.getElementById("Temperature_Reading_6")
const Temperature_Reading_7 = document.getElementById("Temperature_Reading_7")
const Temperature_Reading_8 = document.getElementById("Temperature_Reading_8")
// General Parameters
const SOC_Reading_PS = document.getElementById("SOC_Reading_PS")
const Voltage_Reading_PS = document.getElementById("Voltage_Reading_PS")
const Current_Reading_PS = document.getElementById("Current_Reading_PS")
const Max_Cell_Voltage_Reading_PS = document.getElementById("Max_Cell_Voltage_Reading_PS")
const Min_Cell_Voltage_Reading_PS = document.getElementById("Min_Cell_Voltage_Reading_PS")
const Avg_Cell_Temperature_Reading_PS = document.getElementById("Avg_Cell_Temp_Reading_PS")
const Max_Cell_Temperature_Reading_PS = document.getElementById("Max_Cell_Temp_Reading_PS")
const Min_Cell_Temperature_Reading_PS = document.getElementById("Min_Cell_Temp_Reading_PS")

// Declaring all variables
var Present_State_Value = 'STA';
var Primary_Status_Value = 'OFF';
var Secondary_Status_Value = 'OFF';
var Inverter_Status_Value = 'OFF';
var Cooling_System_Status_Value = 'OFF';
var Levitation_Status_Value = 'OFF';
var Brakes_Status_Value = 'OFF';
var Propulsion_Status_Value = 'OFF';
var Inv_Voltage_Value = 0.0;
var Inv_Current_Value = 0.0;  
var Inv_Temperature_Value = 0.0;
var AC_Current_Value = 0.0;
var DC_Current_Value = 0.0;
var LIM_Voltage_Value = 0.0;
var Power_Input_Value = 0.0;
var LIM_Temperature_1_Value = 0.0;
var LIM_Temperature_2_Value = 0.0;
var Roll_Value = 0.0; 
var Pitch_Value = 0.0;
var Yaw_Value = 0.0;
var Ubiquity_Status_Value = 'OFF';
var Pressure_1_Value = 0.0;
var Pressure_2_Value = 0.0;
var Pressure_3_Value = 0.0;
var Pressure_4_Value = 0.0;
var Reed_1_Value = "OFF";
var Reed_2_Value = "OFF";
var Front_Damper_Value = "Semi-Active";
var Rear_Damper_Value = "Semi-Active";
var Distance_1_Value = 0.0;
var Distance_2_Value = 0.0;
var EMS_Current_Value = 0.0;
var Gap_1_Value = 0.0;
var Gap_2_Value = 0.0;
var SOC_Value = 0.0;
var Voltage_Value = 0.0;
var Current_Value = 0.0; 
var Min_Cell_Voltage_Value = 0.0;
var Max_Cell_Voltage_Value = 0.0;  
var Min_Cell_Temperature_Value = 0.0;
var Max_Cell_Temperature_Value = 0.0;
var Distance_Value = 0.0;
var Speed_Value = 0.0;
var Acceleration_Value = 0.0;
var Message_1_Value = '';
var Message_2_Value = '';
var Message_3_Value = '';
var presentState = 0
var Error_1_Value = 'No Error'
var Error_2_Value = 'No Error'
var Error_3_Value = 'No Error'

var Graph1_X_Values = [50,60,70,80,90,100,110,150];
var Graph1_Y_Values = [15,7,8,8,9,9,9,10];

var Graph2_X_Values = [5,60,37,80,90,160,110,60,15];
var Graph2_Y_Values = [15,7,8,8,9,6,18,10];
var Time_Value = '0'


function stateTransition(evt, State){
  // State Transition
  if (State == 1){                                                    // Safe To Approach
    socket.emit('State_Transition/STA','Initialisation')
  } else if (State == 2 && presentState == 1){                        // Initialize Primary Pack
    socket.emit('State_Transition/Primary_Pack','Initialisation')
  } else if (State == 3 && presentState == 2){                        // Initialize Inverter
    socket.emit('State_Transition/Inverter','Initialisation')
  } else if (State == 4 && presentState == 3){                        // Initialize Cooling Systems
    socket.emit('State_Transition/Cooling_Systems','Initialisation')
  } else if (State == 5 && presentState == 4){                        // Initialize Levitation
    socket.emit('State_Transition/Levitation','Initialisation')
  } else if (State == 6 && presentState == 5){                        // Initialize Propulsion
    socket.emit('State_Transition/Propulsion','Initialisation')
  } else if (State == 9 && presentState == 3){                        // Initialize Crawling Protocol
    socket.emit('State_Transition/Crawl','Initialisation')
  } else if (State == 8){                                             // Actuate Brakes
    socket.emit('State_Transition/Brakes','Initialisation')
  } else{}                                                            // Unknown Command 
}

/*socket.on('State_Transition/STA',(data)=>{
  if(data==1){
    presentState = 1;
    Message_Box_Value_1.innerHTML = 'Pod is Safe to Approch';
    Message_Box_Value_2.innerHTML = 'Pod is Safe to Approch';
    Message_Box_Value_3.innerHTML = 'Pod is Safe to Approch';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Safe to Approch State Failed';
    Message_Box_Value_2.innerHTML = 'Safe to Approch State Failed';
    Message_Box_Value_3.innerHTML = 'Safe to Approch State Failed';
  }
})

socket.on('State_Transition/Primary_Pack',(data)=>{
  if(data==1){
    presentState = 2;                                           
    Message_Box_Value_1.innerHTML = 'Primary Pack Initialised';
    Message_Box_Value_2.innerHTML = 'Primary Pack Initialised';
    Message_Box_Value_3.innerHTML = 'Primary Pack Initialised';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Primary Pack Initialisation Failed';
    Message_Box_Value_2.innerHTML = 'Primary Pack Initialisation Failed';
    Message_Box_Value_3.innerHTML = 'Primary Pack Initialisation Failed';
  }
})

socket.on('State_Transition/Inverter',(data)=>{
  if(data==1){
    presentState = 3;                                           
    Message_Box_Value_1.innerHTML = 'Inverter Initialised';
    Message_Box_Value_2.innerHTML = 'Inverter Initialised';
    Message_Box_Value_3.innerHTML = 'Inverter Initialised';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Inverter Initialisation Failed';
    Message_Box_Value_2.innerHTML = 'Inverter Initialisation Failed';
    Message_Box_Value_3.innerHTML = 'Inverter Initialisation Failed';
  }
})

socket.on('State_Transition/Cooling_Systems',(data)=>{
  if(data==1){
    presentState = 4;                                           
    Message_Box_Value_1.innerHTML = 'Cooling Systems Initialised';
    Message_Box_Value_2.innerHTML = 'Cooling Systems Initialised';
    Message_Box_Value_3.innerHTML = 'Cooling Systems Initialised';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Cooling Systems Initialisation Failed';
    Message_Box_Value_2.innerHTML = 'Cooling Systems Initialisation Failed';
    Message_Box_Value_3.innerHTML = 'Cooling Systems Initialisation Failed';
  }
})

socket.on('State_Transition/Levitation',(data)=>{
  if(data==1){
    presentState = 5;                                           
    Message_Box_Value_1.innerHTML = 'Levitation Initialised';
    Message_Box_Value_2.innerHTML = 'Levitation Initialised';
    Message_Box_Value_3.innerHTML = 'Levitation Initialised';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Levitation Initialisation Failed';
    Message_Box_Value_2.innerHTML = 'Levitation Initialisation Failed';
    Message_Box_Value_3.innerHTML = 'Levitation Initialisation Failed';
  }
})

socket.on('State_Transition/Propulsion',(data)=>{
  if(data==1){
    presentState = 6;                                           
    Message_Box_Value_1.innerHTML = 'Propulsion Initialised';
    Message_Box_Value_2.innerHTML = 'Propulsion Initialised';
    Message_Box_Value_3.innerHTML = 'Propulsion Initialised';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Propulsion Initialisation Failed';
    Message_Box_Value_2.innerHTML = 'Propulsion Initialisation Failed';
    Message_Box_Value_3.innerHTML = 'Propulsion Initialisation Failed';
  }
})

socket.on('State_Transition/Brakes',(data)=>{
  if(data==1){
    presentState = 8;                                           
    Message_Box_Value_1.innerHTML = 'Brakes Actuated';
    Message_Box_Value_2.innerHTML = 'Brakes Actuated';
    Message_Box_Value_3.innerHTML = 'Brakes Actuated';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Brakes Failed';
    Message_Box_Value_2.innerHTML = 'Brakes Failed';
    Message_Box_Value_3.innerHTML = 'Brakes Failed';
  }
})

socket.on('State_Transition/Crawl',(data)=>{
  if(data==1){
    presentState = 9;                                           
    Message_Box_Value_1.innerHTML = 'Crawl Protocal Activated';
    Message_Box_Value_2.innerHTML = 'Crawl Protocal Activated';
    Message_Box_Value_3.innerHTML = 'Crawl Protocal Activated';
  }
  else{
    Message_Box_Value_1.innerHTML = 'Crawling Failed';
    Message_Box_Value_2.innerHTML = 'Crawling Failed';
    Message_Box_Value_3.innerHTML = 'Crawling Failed';
  }
}) */

// State Parameters
const Update_State_Parameters = setInterval(function(){
  Present_State.innerHTML = `${Present_State_Value}`
  Primary_Status.innerHTML = `${Primary_Status_Value}`
  Secondary_Status.innerHTML = `${Secondary_Status_Value}`
  Inverter_Status.innerHTML =  `${Inverter_Status_Value}`
  Levitation_Status.innerHTML = `${Levitation_Status_Value}`
  Brakes_Status.innerHTML = `${Brakes_Status_Value}`
  Propulsion_Status.innerHTML = `${Propulsion_Status_Value}`
  Cooling_System_Status.innerHTML = `${Cooling_System_Status_Value}`
},100)

// Inverter Parameters
const Update_Inverter_Parameters = setInterval(function(){
  Inv_Voltage.innerHTML = `${Inv_Voltage_Value}`
  Inv_Current.innerHTML = `${Inv_Current_Value}`
  Inv_Temperature.innerHTML = `${Inv_Temperature_Value}`
},100)

// Embedded Parameters
const Update_Embedded_Box = setInterval(function(){
  Ubiquity_Status.innerHTML = `${Ubiquity_Status_Value}`
  Roll.innerHTML = `${Roll_Value}`
  Pitch.innerHTML = `${Pitch_Value}`
  Yaw.innerHTML = `${Yaw_Value}`
},100)

// Propulsion Parameters
const Update_Propulsion_Box = setInterval( function(){
  AC_Current.innerHTML = `${AC_Current_Value}`
  DC_Current.innerHTML = `${DC_Current_Value}`
  LIM_Voltage.innerHTML = `${LIM_Voltage_Value}`
  Power_Input.innerHTML =  `${Power_Input_Value}`
  LIM_Temperature_1.innerHTML = `${LIM_Temperature_1_Value}`
  LIM_Temperature_2.innerHTML = `${LIM_Temperature_2_Value}`
},100)

// Stability Parameters
const Update_Stability_Box = setInterval(function(){
  Front_Damper.innerHTML = `${Front_Damper_Value}`
  Rear_Damper.innerHTML = `${Rear_Damper_Value}`
  Distance_1.innerHTML = `${Distance_1_Value}`
  Distance_2.innerHTML = `${Distance_2_Value}`
},100)

// Braking Parameters
const Update_Braking_Box = setInterval(function(){
  Pressure_1.innerHTML = `${Pressure_1_Value}`
  Pressure_2.innerHTML = `${Pressure_2_Value}`
  Pressure_3.innerHTML = `${Pressure_3_Value}`
  Pressure_4.innerHTML = `${Pressure_4_Value}`
  Reed_1.innerHTML = `${Reed_1_Value}`
  Reed_2.innerHTML = `${Reed_2_Value}`
},100)

// Battery Parameters
const Update_Battery_Box = setInterval(function(){
  SOC.innerHTML = `${SOC_Value}`
  Voltage.innerHTML = `${Voltage_Value}`
  Current.innerHTML = `${Current_Value}`
  Min_Cell_Voltage.innerHTML = `${Min_Cell_Voltage_Value}`
  Max_Cell_Voltage.innerHTML = `${Max_Cell_Voltage_Value}`
  Min_Cell_Temperature_Value.innerHTML = `${Min_Cell_Temperature_Value}`
  Max_Cell_Temperature.innerHTML = `${Max_Cell_Temperature_Value}`
},100)

// Levitation Parameters
const Update_Levitation_Box = setInterval(function(){
  Gap_1.innerHTML = `${Gap_1_Value}`
  Gap_2.innerHTML = `${Gap_2_Value}`
  EMS_Current.innerHTML = `${EMS_Current_Value}`
},100)

// Primary Parameters
const Update_KM_Parameters = setInterval(function(){
   KM_Distance.innerHTML = `${Distance_Value}`
   KM_Acceleration.innerHTML = `${Acceleration_Value}`
   KM_Speed.innerHTML = `${Speed_Value}`
},100)

// Message Dialog
/*const Update_Message_Box = setInterval(function(){
  Message_Box_1.innerHTML = `${Message_1_Value}`
  Message_Box_2.innerHTML = `${Message_2_Value}`
  Message_Box_3.innerHTML = `${Message_3_Value}`
},100)*/

// Error Dialog
const Update_Error_Box = setInterval(function(){
  Error_Box_1.innerHTML = `${Error_1_Value}`
  Error_Box_2.innerHTML = `${Error_2_Value}`
  Error_Box_3.innerHTML = `${Error_3_Value}`
},100)

// Updating Graphs
const Update_Graphs = setInterval(function(){
 Graph1_X_Values.push(parseInt(Time_Value))
 Graph1_Y_Values.push(parseInt(Distance_Value))
 Graph2_X_Values.push(parseInt(Time_Value))
 Graph2_Y_Values.push(parseInt(Speed_Value))
},1000)



var Cell_1_Value = 0.0; var Cell_2_Value = 0.0; var Cell_3_Value = 0.0; var Cell_4_Value = 0.0; var Cell_5_Value = 0.0;
var Cell_6_Value = 0.0; var Cell_7_Value = 0.0; var Cell_8_Value = 0.0; var Cell_9_Value = 0.0; var Cell_10_Value = 0.0;
var Cell_11_Value = 0.0; var Cell_12_Value = 0.0; var Cell_13_Value = 0.0; var Cell_14_Value = 0.0; var Cell_15_Value = 0.0;
var Cell_16_Value = 0.0; var Cell_17_Value = 0.0; var Cell_18_Value = 0.0; var Cell_19_Value = 0.0; var Cell_20_Value = 0.0;
var Cell_21_Value = 0.0; var Cell_22_Value = 0.0; var Cell_23_Value = 0.0; var Cell_24_Value = 0.0; var Cell_25_Value = 0.0;
var Cell_26_Value = 0.0; var Cell_27_Value = 0.0; var Cell_28_Value = 0.0; var Cell_29_Value = 0.0; var Cell_30_Value = 0.0;
var Cell_31_Value = 0.0; var Cell_32_Value = 0.0; var Cell_33_Value = 0.0; var Cell_34_Value = 0.0; var Cell_35_Value = 0.0;
var Cell_36_Value = 0.0; var Cell_37_Value = 0.0; var Cell_38_Value = 0.0; var Cell_39_Value = 0.0; var Cell_40_Value = 0.0;
var Cell_41_Value = 0.0; var Cell_42_Value = 0.0; var Cell_43_Value = 0.0; var Cell_44_Value = 0.0; var Cell_45_Value = 0.0;
var Cell_46_Value = 0.0; var Cell_47_Value = 0.0; var Cell_48_Value = 0.0; var Cell_49_Value = 0.0; var Cell_50_Value = 0.0;
var Cell_51_Value = 0.0; var Cell_52_Value = 0.0; var Cell_53_Value = 0.0; var Cell_54_Value = 0.0; var Cell_55_Value = 0.0;
var Cell_56_Value = 0.0; var Cell_57_Value = 0.0; var Cell_58_Value = 0.0; var Cell_59_Value = 0.0; var Cell_60_Value = 0.0;

var Temperature_Value_1 = 0.0; var Temperature_Value_2 = 0.0; var Temperature_Value_3 = 0.0; var Temperature_Value_4 = 0.0;
var Temperature_Value_5 = 0.0; var Temperature_Value_6 = 0.0; var Temperature_Value_7 = 0.0; var Temperature_Value_8 = 0.0;
var Avg_Cell_Temperature_Value = 0.0;


setInterval(function updateLabelsPST(evt){
  Cell1.innerHTML = `${Cell_1_Value}`
  Cell2.innerHTML = `${Cell_2_Value}`
  Cell3.innerHTML = `${Cell_3_Value}`
  Cell4.innerHTML = `${Cell_4_Value}`
  Cell5.innerHTML = `${Cell_5_Value}`
  Cell6.innerHTML = `${Cell_6_Value}`
  Cell7.innerHTML = `${Cell_7_Value}`
  Cell8.innerHTML = `${Cell_8_Value}`
  Cell9.innerHTML = `${Cell_9_Value}`
  Cell10.innerHTML = `${Cell_10_Value}`
  Cell11.innerHTML = `${Cell_11_Value}`
  Cell12.innerHTML = `${Cell_12_Value}`
  Cell13.innerHTML = `${Cell_13_Value}`
  Cell14.innerHTML = `${Cell_14_Value}`
  Cell15.innerHTML = `${Cell_15_Value}`
  Cell16.innerHTML = `${Cell_16_Value}`
  Cell17.innerHTML = `${Cell_17_Value}`
  Cell18.innerHTML = `${Cell_18_Value}`
  Cell19.innerHTML = `${Cell_19_Value}`
  Cell20.innerHTML = `${Cell_20_Value}`
  Cell21.innerHTML = `${Cell_21_Value}`
  Cell22.innerHTML = `${Cell_22_Value}`
  Cell23.innerHTML = `${Cell_23_Value}`
  Cell24.innerHTML = `${Cell_24_Value}`
  Cell25.innerHTML = `${Cell_25_Value}`
  Cell26.innerHTML = `${Cell_26_Value}`
  Cell27.innerHTML = `${Cell_27_Value}`
  Cell28.innerHTML = `${Cell_28_Value}`
  Cell29.innerHTML = `${Cell_29_Value}`
  Cell30.innerHTML = `${Cell_30_Value}`
  Cell31.innerHTML = `${Cell_31_Value}`
  Cell32.innerHTML = `${Cell_32_Value}`
  Cell33.innerHTML = `${Cell_33_Value}`
  Cell34.innerHTML = `${Cell_34_Value}`
  Cell35.innerHTML = `${Cell_35_Value}`
  Cell36.innerHTML = `${Cell_36_Value}`
  Cell37.innerHTML = `${Cell_37_Value}`
  Cell38.innerHTML = `${Cell_38_Value}`
  Cell39.innerHTML = `${Cell_39_Value}`
  Cell40.innerHTML = `${Cell_40_Value}`
  Cell41.innerHTML = `${Cell_41_Value}`
  Cell42.innerHTML = `${Cell_42_Value}`
  Cell43.innerHTML = `${Cell_43_Value}`
  Cell44.innerHTML = `${Cell_44_Value}`
  Cell45.innerHTML = `${Cell_45_Value}`
  Cell46.innerHTML = `${Cell_46_Value}`
  Cell47.innerHTML = `${Cell_47_Value}`
  Cell48.innerHTML = `${Cell_48_Value}`
  Cell49.innerHTML = `${Cell_49_Value}`
  Cell50.innerHTML = `${Cell_50_Value}`
  Cell51.innerHTML = `${Cell_51_Value}`
  Cell52.innerHTML = `${Cell_52_Value}`
  Cell53.innerHTML = `${Cell_53_Value}`
  Cell54.innerHTML = `${Cell_54_Value}`
  Cell55.innerHTML = `${Cell_55_Value}`
  Cell56.innerHTML = `${Cell_56_Value}`
  Cell57.innerHTML = `${Cell_57_Value}`
  Cell58.innerHTML = `${Cell_58_Value}`
  Cell59.innerHTML = `${Cell_59_Value}`
  Cell60.innerHTML = `${Cell_60_Value}`

  Temperature_Reading_1.innerHTML = `${Temperature_Value_1}`
  Temperature_Reading_2.innerHTML = `${Temperature_Value_2}`
  Temperature_Reading_3.innerHTML = `${Temperature_Value_3}`
  Temperature_Reading_4.innerHTML = `${Temperature_Value_4}`
  Temperature_Reading_5.innerHTML = `${Temperature_Value_5}`
  Temperature_Reading_6.innerHTML = `${Temperature_Value_6}`
  Temperature_Reading_7.innerHTML = `${Temperature_Value_7}`
  Temperature_Reading_8.innerHTML = `${Temperature_Value_8}`
  SOC_Reading_PS.innerHTML = `${SOC_Value}`
  Voltage_Reading_PS.innerHTML = `${Voltage_Value}`
  Current_Reading_PS.innerHTML = `${Current_Value}`
  Max_Cell_Voltage_Reading_PS.innerHTML = `${Max_Cell_Voltage_Value}`
  Min_Cell_Voltage_Reading_PS.innerHTML = `${Min_Cell_Voltage_Value}`
  Avg_Cell_Temp_Reading_PS.innerHTML = `${Avg_Cell_Temperature_Value}`
  Max_Cell_Temp_Reading_PS.innerHTML = `${Max_Cell_Temperature_Value}`
  Min_Cell_Temp_Reading_PS.innerHTML = `${Min_Cell_Temperature_Value}`
},100);


function DSTesting(evt, State){
  // DS Testing
  if (State == 1){
    socket.emit('DSTesting','1')
  } else if (State == 2){
    socket.emit('DSTesting','2')
  } else if (State == 3){
    socket.emit('DSTesting','3')
  } else if (State == 4){
    socket.emit('DSTesting','4')
  } else if (State == 5){
    socket.emit('DSTesting','5')
  } else if (State == 6){
    socket.emit('DSTesting','6')
  } else if (State == 7){
    socket.emit('DSTesting','7')
  } else if (State == 8){
    socket.emit('DSTesting','8')
  } else if (State == 9){
    socket.emit('DSTesting','9')
  } else if (State == 10){
    socket.emit('DSTesting','10')
  } else if (State == 11){
    socket.emit('DSTesting','11')
  } else if (State == 12){
    socket.emit('DSTesting','12')
  } else if (State == 13){
    socket.emit('DSTesting','13')
  } else if (State == 14){
    socket.emit('DSTesting','14')
  } else if (State == 15){
    socket.emit('DSTesting','15')
  } else if (State == 16){
    socket.emit('DSTesting','16')
  } else if (State == 17){
    socket.emit('DSTesting','17')
  } else if (State == 18){
    socket.emit('DSTesting','18')
  } else if (State == 19){
    socket.emit('DSTesting','19')
  } else if (State == 20){
    socket.emit('DSTesting','20')
  } else if (State == 21){
    socket.emit('DSTesting','21')
  } else if (State == 22){
    socket.emit('DSTesting','22')
  } else if (State == 23){
    socket.emit('DSTesting','23')
  } else if (State == 24){
    socket.emit('DSTesting','24')
  } else if (State == 25){
    socket.emit('DSTesting','25')
  } else if (State == 26){
    socket.emit('DSTesting','26')
  } else if (State == 27){
    socket.emit('DSTesting','27')
  } else if (State == 28){
    socket.emit('DSTesting','28')
  } 
  else{}
}


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


new Chart("Graph_1", {
  type: "line",
  data: {
    labels: Graph1_X_Values,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(255,0,0,0.5)",
      data: Graph1_Y_Values,
      cubicInterpolationMode: 'monotone',
    }]
  },
  options: {
    legend: {display: false},
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Distance-Time Graph',
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            align: 'center' ,
            text: 'Time'
          }
        },
        y: {
          title: {
            display: true,
            align: 'center' ,
            text: 'Distance',
          },
        }
    },
  }
});


new Chart("Graph_2", {
  type: "line",
  data: {
    labels: Graph2_X_Values,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(255,0,0,0.5)",
      data: Graph2_Y_Values,
      cubicInterpolationMode: 'monotone',
    }]
  },
  options: {
    legend: {display: false},
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Speed-Time Graph',
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
            text: 'Speed',
          },
        }
    },
  }
});





/*socket.on('State/Present',(data)=>{
 Present_State_Value = data
})
socket.on('State/Primary',(data)=>{
 Primary_Status_Value = data
})
socket.on('State/Secondary',(data)=>{
 Secondary_Status_Value = data
})
socket.on('State/Inverter',(data)=>{
 Inverter_Status_Value = data
})
socket.on('State/Cooling',(data)=>{
 Cooling_System_Status_Value = data
})
socket.on('State/Levitation',(data)=>{
 Levitation_Status_Value = data
})
socket.on('State/Brakes',(data)=>{
 Brakes_Status_Value = data
})
socket.on('State/Propulsion',(data)=>{
 Propulsion_Status_Value = data
})

socket.on('Inverter/Voltage',(data)=>{
  Inv_Voltage_Value = data
})
socket.on('Inverter/Current',(data)=>{
 Inv_Current_Value = data
})
socket.on('Inverter/Temperature',(data)=>{
 Inv_Temperature_Value = data
})

socket.on('Braking/Pressure1',(data)=>{
  Pressure_1_Value = data
})
socket.on('Braking/Pressure2',(data)=>{
 Pressure_2_Value = data
})
socket.on('Braking/Pressure3',(data)=>{
  Pressure_3_Value = data
})
socket.on('Braking/Pressure4',(data)=>{
 Pressure_4_Value = data
})
socket.on('Braking/Reed1',(data)=>{
  Reed_1_Value = data
})
socket.on('Braking/Reed2',(data)=>{
 Reed_2_Value = data
})

socket.on('Stability/Front_Damper',(data)=>{
  Front_Damper_Value = data
})
socket.on('Stability/Rear_Damper',(data)=>{
 Rear_Damper_Value = data
})
socket.on('Stability/Distance1',(data)=>{
 Distance_1_Value = data
})
socket.on('Stability/Distance2',(data)=>{
 Distance_2_Value = data
})

socket.on('Battery/SOC',(data)=>{
 SOC_Value = data
})
socket.on('Battery/Voltage',(data)=>{
  Voltage_Value = data
})
socket.on('Battery/Current',(data)=>{
 Current_Value = data
})
socket.on('Battery/Max_Cell_Voltage',(data)=>{
  Max_Cell_Voltage_Value = data
})
socket.on('Battery/Min_Cell_Voltage',(data)=>{
 Min_Cell_Voltage_Value = data
})
socket.on('Battery/Max_Cell_Temperature',(data)=>{
 Max_Cell_Temperature_Value = data
})
socket.on('Battery/Min_Cell_Temperature',(data)=>{
 Min_Cell_Temperature_Value = data
})

socket.on('Propulsion/AC_Current',(data)=>{
 AC_Current_Value = data
})
socket.on('Propulsion/DC_Current',(data)=>{
 DC_Current_Value = data
})
socket.on('Propulsion/LIM_Voltage',(data)=>{
 LIM_Voltage_Value = data
})
socket.on('Propulsion/Power_Input',(data)=>{
 Power_Input_Value = data
})
socket.on('Propulsion/LIM_Temperature1',(data)=>{
 LIM_Temperature_1_Value = data
})
socket.on('Propulsion/LIM_Temperature2',(data)=>{
 LIM_Temperature_2_Value = data
})

socket.on('Embedded/Ubiquity_Status',(data)=>{
 Ubiquity_Status_Value = data
})
socket.on('Embedded/Roll',(data)=>{
 Roll_Value = data
})
socket.on('Embedded/Pitch',(data)=>{
 Pitch_Value = data
})
socket.on('Embedded/Yaw',(data)=>{
 Yaw_Value = data
})

socket.on('Levitation/EMS_Current',(data)=>{
 EMS_Current_Value = data
})
socket.on('Levitation/Gap1',(data)=>{
 Gap_1_Value = data
})
socket.on('Levitation/Gap2',(data)=>{
 Gap_2_Value = data
})

socket.on('Time',(data)=>{
 Time_Value = data
})

socket.on('KM/Distance',(data)=>{
  Distance_Value = data
 })
 socket.on('KM/Speed',(data)=>{
  Speed_Value = data
 })
 socket.on('KM/Acceleration',(data)=>{
  Acceleration_Value = data
 })


socket.on('PS/T1',(data)=>{
 Temperature_Value_1 = data
})
socket.on('PS/T2',(data)=>{
  Temperature_Value_2 = data
})
socket.on('PS/T3',(data)=>{
  Temperature_Value_3 = data
})
socket.on('PS/T4',(data)=>{
  Temperature_Value_4 = data
})
socket.on('PS/T5',(data)=>{
  Temperature_Value_5 = data
})
socket.on('PS/T6',(data)=>{
  Temperature_Value_6 = data
})
socket.on('PS/T7',(data)=>{
  Temperature_Value_7 = data
})
socket.on('PS/T8',(data)=>{
  Temperature_Value_8 = data
})
socket.on('PS/Avg_Cell_Temperature',(data)=>{
  Avg_Cell_Temperature_Value = data
 })

socket.on('Error',(data)=>{
  Error_1_Value = data
  Error_2_Value = data
  Error_3_Value = data
})


socket.on('CV1',(data)=>{
  Cell_1_Value = data
})
socket.on('CV2',(data)=>{
  Cell_2_Value = data
})
socket.on('CV3',(data)=>{
  Cell_3_Value = data
})
socket.on('CV4',(data)=>{
  Cell_4_Value = data
})
socket.on('CV5',(data)=>{
  Cell_5_Value = data
})
socket.on('CV6',(data)=>{
  Cell_6_Value = data
})
socket.on('CV7',(data)=>{
  Cell_7_Value = data
})
socket.on('CV8',(data)=>{
  Cell_8_Value = data
})
socket.on('CV9',(data)=>{
  Cell_9_Value = data
})
socket.on('CV10',(data)=>{
  Cell_10_Value = data
})
socket.on('CV11',(data)=>{
  Cell_11_Value = data
})
varsocket.on('CV12',(data)=>{
  Cell_12_Value = data
})
socket.on('CV13',(data)=>{
  Cell_13_Value = data
})
socket.on('CV14',(data)=>{
  Cell_14_Value = data
})
socket.on('CV15',(data)=>{
  Cell__Value = data
})
socket.on('CV15',(data)=>{
  Cell_15_Value = data
})
socket.on('CV16',(data)=>{
  Cell_16_Value = data
})
socket.on('CV17',(data)=>{
  Cell_17_Value = data
})
socket.on('CV18',(data)=>{
  Cell_18_Value = data
})
socket.on('CV19',(data)=>{
  Cell_19_Value = data
})
socket.on('CV20',(data)=>{
  Cell_20_Value = data
})
socket.on('CV21',(data)=>{
  Cell_21_Value = data
})
socket.on('CV22',(data)=>{
  Cell_22_Value = data
})
socket.on('CV23',(data)=>{
  Cell_23_Value = data
})
socket.on('CV24',(data)=>{
  Cell_24_Value = data
})
socket.on('CV25',(data)=>{
  Cell_25_Value = data
})
socket.on('CV26',(data)=>{
  Cell_26_Value = data
})
socket.on('CV27',(data)=>{
  Cell_27_Value = data
})
socket.on('CV28',(data)=>{
  Cell_28_Value = data
})
socket.on('CV29',(data)=>{
  Cell_29_Value = data
})
socket.on('CV30',(data)=>{
  Cell_30_Value = data
})
socket.on('CV31',(data)=>{
  Cell_31_Value = data
})
socket.on('CV32',(data)=>{
  Cell_32_Value = data
})
socket.on('CV33',(data)=>{
  Cell_33_Value = data
})
socket.on('CV34',(data)=>{
  Cell_34_Value = data
})
socket.on('CV35',(data)=>{
  Cell_35_Value = data
})
varsocket.on('CV36',(data)=>{
  Cell_36_Value = data
})
socket.on('CV37',(data)=>{
  Cell_37_Value = data
})
socket.on('CV38',(data)=>{
  Cell_38_Value = data
})
socket.on('CV39',(data)=>{
  Cell_39_Value = data
})
socket.on('CV40',(data)=>{
  Cell_40_Value = data
})
socket.on('CV41',(data)=>{
  Cell_41_Value = data
})
socket.on('CV42',(data)=>{
  Cell_42_Value = data
})
socket.on('CV43',(data)=>{
  Cell_43_Value = data
})
socket.on('CV44',(data)=>{
  Cell_44_Value = data
})
socket.on('CV45',(data)=>{
  Cell_45_Value = data
})
socket.on('CV46',(data)=>{
  Cell_46_Value = data
})
socket.on('CV47',(data)=>{
  Cell_47_Value = data
})
socket.on('CV48',(data)=>{
  Cell_48_Value = data
})
socket.on('CV49',(data)=>{
  Cell_49_Value = data
})
socket.on('CV50',(data)=>{
  Cell_50_Value = data
})
socket.on('CV51',(data)=>{
  Cell_51_Value = data
})
socket.on('CV52',(data)=>{
  Cell_52_Value = data
})
socket.on('CV53',(data)=>{
  Cell_53_Value = data
})
socket.on('CV54',(data)=>{
  Cell_54_Value = data
})
socket.on('CV55',(data)=>{
  Cell_55_Value = data
})
socket.on('CV56',(data)=>{
  Cell_56_Value = data
})
socket.on('CV57',(data)=>{
  Cell_57_Value = data
})
socket.on('CV58',(data)=>{
  Cell_58_Value = data
})
socket.on('CV59',(data)=>{
  Cell_59_Value = data
})
socket.on('CV60',(data)=>{
  Cell_60_Value = data
})
*/
