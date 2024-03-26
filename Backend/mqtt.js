// MQTT script
const mqtt = require('mqtt')
const fs = require('fs')
const {Command} = require('commander')
const program = new Command()
program
  .option('-p, --protocol <type>', 'connect protocol: mqtt, mqtts, ws, wss. default is mqtt', 'mqtt')
  .parse(process.argv)
// IP of Base Station
const host = '10.42.233.42'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
// Connection Options
const OPTIONS = {
  clientId: clientId,
  clean: true,
  connectTimeout: 10000,
  username: '',
  password: '',
  reconnectPeriod: 1000,
}
// Protocol List
const PROTOCOLS = ['mqtt', 'mqtts', 'ws', 'wss']
// Default is mqtt, unencrypted tcp connection
let connectUrl = `mqtt://${host}:${port}`
if (program.protocol && PROTOCOLS.indexOf(program.protocol) === -1){
  console.log('protocol must one of mqtt, mqtts, ws, wss.')
} else if (program.protocol === 'mqtts'){
  // mqtts, encrypted tcp connection
  connectUrl = `mqtts://${host}:8883`
  OPTIONS['ca'] = fs.readFileSync('./broker.emqx.io-ca.crt')
} else if (program.protocol === 'ws'){
  // ws, unencrypted WebSocket connection
  const mountPath = '/mqtt'
  // mount path, connect emqx via WebSocket
  connectUrl = `ws://${host}:8083${mountPath}`
} else if (program.protocol === 'wss'){
  // wss, encrypted WebSocket connection
  const mountPath = '/mqtt'
  // mount path, connect emqx via WebSocket
  connectUrl = `wss://${host}:8084${mountPath}`
  OPTIONS['ca'] = fs.readFileSync('./broker.emqx.io-ca.crt')
} else{}
const client = mqtt.connect(connectUrl, OPTIONS)

client.on('connect', ()=>{
  console.log(`${program.protocol}: Connected`)
  // State Parameters
  client.subscribe('State_Transition/STA',()=>{
  })
  client.subscribe('State_Transition/Primary_Pack',()=>{
  })
  client.subscribe('State_Transition/Secondary_Pack',()=>{
  })
  client.subscribe('State_Transition/Inverter',()=>{
  })
  client.subscribe('State_Transition/Cooling_Systems',()=>{
  })
  client.subscribe('State_Transition/Levitation',()=>{
  })
  client.subscribe('State_Transition/Propulsion',()=>{
  })
  client.subscribe('State_Transition/Brakes',()=>{
  })
  // Inverter Parameters
  client.subscribe('Inverter/Voltage',()=>{
  })
  client.subscribe('Inverter/Current',()=>{
  })
  client.subscribe('Inverter/Temperature',()=>{
  })
  // Embedded Parameters
  client.subscribe('Embedded/Ubiquity_Status',()=>{
  })
  client.subscribe('Embedded/Roll',()=>{
  })
  client.subscribe('Embedded/Pitch',()=>{
  })
  client.subscribe('Embedded/Yaw',()=>{
  })
  // Propulsion Parameters
  client.subscribe('Propulsion/AC_Current',()=>{
  })
  client.subscribe('Propulsion/DC_Current',()=>{
  })
  client.subscribe('Propulsion/LIM_Voltage',()=>{
  })
  client.subscribe('Propulsion/Power_Input',()=>{
  })
  client.subscribe('Propulsion/Temperature1',()=>{
  })
  client.subscribe('Propulsion/Temperature2',()=>{
  })
  // Stability Parameters
  client.subscribe('Stability/Front_Damper',()=>{
  })
  client.subscribe('Stability/Rear_Damper',()=>{
  })
  client.subscribe('Stability/Distance1',()=>{
  })
  client.subscribe('Stability/Distance2',()=>{
  })
  // Braking Parameters
  client.subscribe('Braking/Pressure1',()=>{
  })
  client.subscribe('Braking/Pressure2',()=>{
  })
  client.subscribe('Braking/Pressure3',()=>{
  })
  client.subscribe('Braking/Pressure4',()=>{
  })
  client.subscribe('Braking/Reed1',()=>{
  })
  client.subscribe('Braking/Reed2',()=>{
  })
  // Battery Parameters
  client.subscribe('Battery/SOC',()=>{
  })
  client.subscribe('Battery/Voltage',()=>{
  })
  client.subscribe('Battery/Current',()=>{
  })
  client.subscribe('Battery/Min_Cell_Voltage',()=>{
  })
  client.subscribe('Battery/Max_Cell_Voltage',()=>{
  })
  client.subscribe('Battery/Min_Cell_Temperature',()=>{
  })
  client.subscribe('Battery/Max_Cell_Temperature',()=>{
  })
  // Levitation Parameters
  client.subscribe('Levitation/EMS_Current',()=>{
  })
  client.subscribe('Levitation/Gap1',()=>{
  })
  client.subscribe('Levitation/Gap2',()=>{
  })
  // Time 
  client.subscribe('Time',()=>{
  })
  //KM Parameters
  client.subscribe('KM/Distance',()=>{
  })
  client.subscribe('KM/Speed',()=>{
  })
  client.subscribe('KM/Acceleration',()=>{
  })
  //DSSetup
  client.subscribe('DSTesting',()=>{
  })
  //Power System
  client.subscribe('PS/T1',()=>{
  })
  client.subscribe('PS/T2',()=>{
  })
  client.subscribe('PS/T3',()=>{
  })
  client.subscribe('PS/T4',()=>{
  })
  client.subscribe('PS/T5',()=>{
  })
  client.subscribe('PS/T6',()=>{
  })
  client.subscribe('PS/T7',()=>{
  })
  client.subscribe('PS/T8',()=>{
  })
  client.subscribe('PS/Avg_Cell_Temperature',()=>{
  })
  client.subscribe('CV1',()=>{
  })
  client.subscribe('CV2',()=>{
  })
  client.subscribe('CV3',()=>{
  })
  client.subscribe('CV4',()=>{
  })
  client.subscribe('CV5',()=>{
  })
  client.subscribe('CV6',()=>{
  })
  client.subscribe('CV7',()=>{
  })
  client.subscribe('CV8',()=>{
  })
  client.subscribe('CV9',()=>{
  })
  client.subscribe('CV10',()=>{
  })
  client.subscribe('CV11',()=>{
  })
  client.subscribe('CV12',()=>{
  })
  client.subscribe('CV13',()=>{
  })
  client.subscribe('CV14',()=>{
  })
  client.subscribe('CV15',()=>{
  })
  client.subscribe('CV16',()=>{
  })
  client.subscribe('CV17',()=>{
  })
  client.subscribe('CV18',()=>{
  })
  client.subscribe('CV19',()=>{
  })
  client.subscribe('CV20',()=>{
  })
  client.subscribe('CV21',()=>{
  })
  client.subscribe('CV22',()=>{
  })
  client.subscribe('CV23',()=>{
  })
  client.subscribe('CV24',()=>{
  })
  client.subscribe('CV25',()=>{
  })
  client.subscribe('CV26',()=>{
  })
  client.subscribe('CV27',()=>{
  })
  client.subscribe('CV28',()=>{
  })
  client.subscribe('CV29',()=>{
  })
  client.subscribe('CV30',()=>{
  })
  client.subscribe('CV31',()=>{
  })
  client.subscribe('CV32',()=>{
  })
  client.subscribe('CV33',()=>{
  })
  client.subscribe('CV34',()=>{
  })
  client.subscribe('CV35',()=>{
  })
  client.subscribe('CV36',()=>{
  })
  client.subscribe('CV37',()=>{
  })
  client.subscribe('CV38',()=>{
  })
  client.subscribe('CV39',()=>{
  })
  client.subscribe('CV40',()=>{
  })
  client.subscribe('CV41',()=>{
  })
  client.subscribe('CV42',()=>{
  })
  client.subscribe('CV43',()=>{
  })
  client.subscribe('CV44',()=>{
  })
  client.subscribe('CV45',()=>{
  })
  client.subscribe('CV46',()=>{
  })
  client.subscribe('CV47',()=>{
  })
  client.subscribe('CV48',()=>{
  })
  client.subscribe('CV49',()=>{
  })
  client.subscribe('CV50',()=>{
  })
  client.subscribe('CV51',()=>{
  })
  client.subscribe('CV51',()=>{
  })
  client.subscribe('CV52',()=>{
  })
  client.subscribe('CV53',()=>{
  })
  client.subscribe('CV54',()=>{
  })
  client.subscribe('CV55',()=>{
  })
  client.subscribe('CV56',()=>{
  })
  client.subscribe('CV57',()=>{
  })
  client.subscribe('CV58',()=>{
  })
  client.subscribe('CV59',()=>{
  })
  client.subscribe('CV60',()=>{
  })

})
// Client on Reconnect
client.on('reconnect', (error)=>{
  console.log(`Reconnecting(${program.protocol}):`, error)
})
// Client on Error
client.on('error', (error)=>{
  console.log(`Connection error(${program.protocol}):`, error)
})

// Socket IO Script
const express = require("express")
const { createServer } = require('http')
const {Server} = require('socket.io')
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors:{
    origin: "*"
  },
})
httpServer.listen(3000)
io.on('connection',(socket)=>{
  console.log('Connection Sucessfull Between Mqtt/Render.js With Socket ID',socket.id)
  socket.on('disconnect',(reason)=>{
    console.log(reason)
  })
  // client on message
  client.on('message', (topic, payload)=>{
    // State Parameters
    if(topic=='State_Transition/STA'){
      socket.emit('State_Transition/STA',payload.toString())
    }
    if(topic=='State_Transition/Primary_Pack'){
      socket.emit('State_Transition/Primary_Pack',payload.toString())
    }
    if(topic=='State_Transition/Secondary_Pack'){
      socket.emit('State_Transition/Secondary_Pack',payload.toString())
    }
    if(topic=='State_Transition/Inverter'){
      socket.emit('State_Transition/Inverter',payload.toString())
    }
    if(topic=='State_Transition/Cooling_Systems'){
      socket.emit('State_Transition/Cooling_Systems',payload.toString())
    }
    if(topic=='State_Transition/Levitation'){
      socket.emit('State_Transition/Levitation',payload.toString())
    }
    if(topic=='State_Transition/Propulsion'){
      socket.emit('State_Transition/Propulsion',payload.toString())
    }
    if(topic=='State_Transition/Brakes'){
      socket.emit('State_Transition/Brakes',payload.toString())
    }
    // Inverter Parameters
    if(topic=='Inverter/Voltage'){
      socket.emit('Inverter/Voltage',payload.toString())
    }
    if(topic=='Inverter/Current'){
      socket.emit('Inverter/Current',payload.toString())
    }
    if(topic=='Inverter/Temperature'){
      socket.emit('Inverter/Temperature',payload.toString())
    }
    // Embedded Parameters
    if(topic=='Embedded/Ubiquity_Status'){
      socket.emit('Embedded/Ubiquity_Status',payload.toString())
    }
    if(topic=='Embedded/Roll'){
      socket.emit('Embedded/Roll',payload.toString())
    }
    if(topic=='Embedded/Pitch'){
      socket.emit('Embedded/Pitch',payload.toString())
    }
    if(topic=='Embedded/Yaw'){
      socket.emit('Embedded/Yaw',payload.toString())
    }
    // Propulsion Parameters
    if(topic=='Propulsion/AC_Current'){
      socket.emit('Propulsion/AC_Current',payload.toString())
    }
    if(topic=='Propulsion/DC_Current'){
      socket.emit('Propulsion/DC_Current',payload.toString())
    }
    if(topic=='Propulsion/LIM_Voltage'){
      socket.emit('Propulsion/LIM_Voltage',payload.toString())
    }
    if(topic=='Propulsion/Power_Input'){
      socket.emit('Propulsion/Power_Input',payload.toString())
    }
    if(topic=='Propulsion/LIM_Temperature1'){
      socket.emit('Propulsion/LIM_Temperature1',payload.toString())
    }
    if(topic=='Propulsion/LIM_Temperature2'){
      socket.emit('Propulsion/LIM_Temperature2',payload.toString())
    }
    // Stability Parameters
    if(topic=='Stability/Front_Damper'){
      socket.emit('Stability/Front_Damper',payload.toString())
    }
    if(topic=='Stability/Rear_Damper'){
      socket.emit('Stability/Rear_Damper',payload.toString())
    }
    if(topic=='Stability/Distance1'){
      socket.emit('Stability/Distance1',payload.toString())
    }
    if(topic=='Stability/Distance2'){
      socket.emit('Stability/Distance2',payload.toString())
    }
    // Braking Parameters
    if(topic=='Braking/Pressure1'){
      socket.emit('Braking/Pressure1',payload.toString())
    }
    if(topic=='Braking/Pressure2'){
      socket.emit('Braking/Pressure2',payload.toString())
    }
    if(topic=='Braking/Pressure3'){
      socket.emit('Braking/Pressure3',payload.toString())
    }
    if(topic=='Braking/Pressure4'){
      socket.emit('Braking/Pressure4',payload.toString())
    }
    if(topic=='Braking/Reed1'){
      socket.emit('Braking/Reed1',payload.toString())
    }
    if(topic=='Braking/Reed2'){
      socket.emit('Braking/Reed2',payload.toString())
    }
    // Battery Parameters
    if(topic=='Battery/SOC'){
      socket.emit('Battery/SOC',payload.toString())
    }
    if(topic=='Battery/Voltage'){
      socket.emit('Battery/Voltage',payload.toString())
    }
    if(topic=='Battery/Current'){
      socket.emit('Battery/Current',payload.toString())
    }
    if(topic=='Battery/Max_Cell_Voltage'){
      socket.emit('Battery/Max_Cell_Voltage',payload.toString())
    }
    if(topic=='Battery/Min_Cell_Voltage'){
      socket.emit('Battery/Min_Cell_Voltage',payload.toString())
    }
    if(topic=='Battery/Max_Cell_Temperature'){
      socket.emit('Battery/Max_Cell_Temperature',payload.toString())
    }
    if(topic=='Battery/Min_Cell_Temperature'){
      socket.emit('Battery/Min_Cell_Temperature',payload.toString())
    }
    // Levitation Parameters
    if(topic=='Levitation/EMS_Current'){
      socket.emit('Levitation/EMS_Current',payload.toString())
    }
    if(topic=='Levitation/Gap1'){
      socket.emit('Levitation/Gap1',payload.toString())
    }
    if(topic=='Levitation/Gap2'){
      socket.emit('Levitation/Gap2',payload.toString())
    }
    // Time For Plotting Graph In Seconds
    if(topic=='Time'){
      socket.emit('Time',payload.toString())
    }
    // Power System
    if(topic=='PS/T1'){
      socket.emit('PS/T1',payload.toString())
    }
    if(topic=='PS/T2'){
      socket.emit('PS/T2',payload.toString())
    }
    if(topic=='PS/T3'){
      socket.emit('PS/T3',payload.toString())
    }
    if(topic=='PS/T4'){
      socket.emit('PS/T4',payload.toString())
    }
    if(topic=='PS/T5'){
      socket.emit('PS/T5',payload.toString())
    }
    if(topic=='PS/T6'){
      socket.emit('PS/T6',payload.toString())
    }
    if(topic=='PS/T7'){
      socket.emit('PS/T7',payload.toString())
    }
    if(topic=='PS/T8'){
      socket.emit('PS/T8',payload.toString())
    }
    if(topic=='PS/Avg_Cell_Temperature'){
      socket.emit('PS/Avg_Cell_Temperature',payload.toString())
    }
    if(topic=='CV1'){
      socket.emit('CV1',payload.toString())
    }
    if(topic=='CV2'){
      socket.emit('CV2',payload.toString())
    }
    if(topic=='CV3'){
      socket.emit('CV3',payload.toString())
    }
    if(topic=='CV4'){
      socket.emit('CV4',payload.toString())
    }
    if(topic=='CV5'){
      socket.emit('CV5',payload.toString())
    }
    if(topic=='CV6'){
      socket.emit('CV6',payload.toString())
    }
    if(topic=='CV7'){
      socket.emit('CV7',payload.toString())
    }
    if(topic=='CV8'){
      socket.emit('CV8',payload.toString())
    }
    if(topic=='CV9'){
      socket.emit('CV9',payload.toString())
    }
    if(topic=='CV10'){
      socket.emit('CV10',payload.toString())
    }
    if(topic=='CV11'){
      socket.emit('CV11',payload.toString())
    }
    if(topic=='CV12'){
      socket.emit('CV12',payload.toString())
    }
    if(topic=='CV13'){
      socket.emit('CV13',payload.toString())
    }
    if(topic=='CV14'){
      socket.emit('CV14',payload.toString())
    }
    if(topic=='CV15'){
      socket.emit('CV15',payload.toString())
    }
    if(topic=='CV16'){
      socket.emit('CV16',payload.toString())
    }
    if(topic=='CV17'){
      socket.emit('CV17',payload.toString())
    }
    if(topic=='CV18'){
      socket.emit('CV18',payload.toString())
    }
    if(topic=='CV19'){
      socket.emit('CV19',payload.toString())
    }
    if(topic=='CV20'){
      socket.emit('CV20',payload.toString())
    }
    if(topic=='CV21'){
      socket.emit('CV21',payload.toString())
    }
    if(topic=='CV22'){
      socket.emit('CV22',payload.toString())
    }
    if(topic=='CV23'){
      socket.emit('CV23',payload.toString())
    }
    if(topic=='CV24'){
      socket.emit('CV24',payload.toString())
    }
    if(topic=='CV25'){
      socket.emit('CV25',payload.toString())
    }
    if(topic=='CV26'){
      socket.emit('CV26',payload.toString())
    }
    if(topic=='CV27'){
      socket.emit('CV27',payload.toString())
    }
    if(topic=='CV28'){
      socket.emit('CV28',payload.toString())
    }
    if(topic=='CV29'){
      socket.emit('CV29',payload.toString())
    }
    if(topic=='CV30'){
      socket.emit('CV30',payload.toString())
    }
    if(topic=='CV31'){
      socket.emit('CV31',payload.toString())
    }
    if(topic=='CV32'){
      socket.emit('CV32',payload.toString())
    }
    if(topic=='CV33'){
      socket.emit('CV33',payload.toString())
    }
    if(topic=='CV34'){
      socket.emit('CV34',payload.toString())
    }
    if(topic=='CV35'){
      socket.emit('CV35',payload.toString())
    }
    if(topic=='CV36'){
      socket.emit('CV36',payload.toString())
    }
    if(topic=='CV37'){
      socket.emit('CV37',payload.toString())
    }
    if(topic=='CV38'){
      socket.emit('CV38',payload.toString())
    }
    if(topic=='CV39'){
      socket.emit('CV39',payload.toString())
    }
    if(topic=='CV40'){
      socket.emit('CV40',payload.toString())
    }
    if(topic=='CV41'){
      socket.emit('CV41',payload.toString())
    }
    if(topic=='CV42'){
      socket.emit('CV42',payload.toString())
    }
    if(topic=='CV43'){
      socket.emit('CV43',payload.toString())
    }
    if(topic=='CV44'){
      socket.emit('CV44',payload.toString())
    }
    if(topic=='CV45'){
      socket.emit('CV45',payload.toString())
    }
    if(topic=='CV46'){
      socket.emit('CV46',payload.toString())
    }
    if(topic=='CV47'){
      socket.emit('CV47',payload.toString())
    }
    if(topic=='CV48'){
      socket.emit('CV48',payload.toString())
    }
    if(topic=='CV49'){
      socket.emit('CV49',payload.toString())
    }
    if(topic=='CV50'){
      socket.emit('CV50',payload.toString())
    }
    if(topic=='CV51'){
      socket.emit('CV51',payload.toString())
    }
    if(topic=='CV52'){
      socket.emit('CV52',payload.toString())
    }
    if(topic=='CV53'){
      socket.emit('CV53',payload.toString())
    }
    if(topic=='CV54'){
      socket.emit('CV54',payload.toString())
    }
    if(topic=='CV55'){
      socket.emit('CV55',payload.toString())
    }
    if(topic=='CV56'){
      socket.emit('CV56',payload.toString())
    }
    if(topic=='CV57'){
      socket.emit('CV57',payload.toString())
    }
    if(topic=='CV58'){
      socket.emit('CV58',payload.toString())
    }
    if(topic=='CV59'){
      socket.emit('CV59',payload.toString())
    }
    if(topic=='CV60'){
      socket.emit('CV60',payload.toString())
    }

  })
  // client on publish
  // State Transitions
  socket.on('State_Transition/STA',(data)=>{
    client.publish('State_Transition/STA','1',(error)=>{
      if(error){
        socket.emit('State_Transition/STA',error)
      }
    })
  })
  socket.on('State_Transition/Primary_Pack',(data)=>{
    client.publish('State_Transition/Primary_Pack','1',(error)=>{
      if(error){
        socket.emit('State_Transition/Primary_Pack',error)
      }
    })
  })
  socket.on('State_Transition/Inverter',(data)=>{
    client.publish('State_Transition/Inverter','1',(error)=>{
      if(error){
        socket.emit('State_Transition/Inverter',error)
      }
    })
  })
  socket.on('State_Transition/Cooling_Systems',(data)=>{
    client.publish('State_Transition/Cooling_Systems','1',(error)=>{
      if(error){
        socket.emit('State_Transition/Cooling_Systems',error)
      }
    })
  })
  socket.on('State_Transition/Levitation',(data)=>{
    client.publish('State_Transition/Levitation','1',(error)=>{
      if(error){
        socket.emit('State_Transition/Levitation',error)
      }
    })
  })
  socket.on('State_Transition/Propulsion',(data)=>{
    client.publish('State_Transition/Propulsion','1',(error)=>{
      if(error){
        socket.emit('State_Transition/Propulsion',error)
      }
    })
  })
  socket.on('State_Transition/Brakes',(data)=>{
    client.publish('State_Transition/Brakes','1',(error)=>{
      if(error){
        socket.emit('State_Transition/Brakes',error)
      }
    })
  })
  socket.on('State_Transition/Crawl',(data)=>{
    client.publish('State_Transition/Crawl','1',(error)=>{
      if(error){
        socket.emit('State_Transition/Crawl',error)
      }
    })
  })
  // Demonstration
  socket.on('DSTesting',(data)=>{
    client.publish('DSTesting/CIM',data,(error)=>{
      if(error){
        socket.emit('Error','Error In Sending Command To Broker')
      }
    })
  })
  
})