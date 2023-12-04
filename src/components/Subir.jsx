import React from "react";
import Papa from "papaparse";
import axios from "axios";
import {
    Button,
    Text,
    HStack,
    Input,

  } from '@chakra-ui/react'
function Subir() {
    const [sap, setSap] = React.useState([]);
    const [fechaRST, setFechaRST] = React.useState({});
    const [sf, setSf] = React.useState([]);
    const [rst, setRst] = React.useState([]);
    const [rstP, setRstP] = React.useState([]);
    const [tabla, setTabla] = React.useState([]);
    const inputRef1 = React.useRef(null);
    const inputRef2 = React.useRef(null);
    const inputRef3 = React.useRef(null);
    const inputRef4 = React.useRef(null);
    const inputRef5 = React.useRef(null);
    const handleSapUpload = (e) => {
        const files=e.target.files
        if (files){
            console.log(files[0]);
   
            }
            Papa.parse(files[0], { header: true,     complete: (result) => {
              setSf(result.data) 
              console.log(result.data)
            }})
 
          }

          const handleSapUpload2 = (e) => {
            var myArray
            const files=e.target.files
            if (files){
       
                }
                Papa.parse(files[0], { delimiter:"|",header: false, skipEmptyLines:true,    complete: (result) => {
                  result.data.shift()
                  result.data.shift()
                  result.data.shift()
                  result.data.unshift(["nada", "Orden", "Cl", "ClM", "Cent", "Textobreve", "FeEntrada", "Aviso", "StatusSistema", "StatusUsuario", "Modifpor", "Femodif", "ElementoPEP", "Solicitud", "PstoTbjo", "AplicgeneraOrden", "RolCreador", "NombredelRol", "MColoc", "MarcaMedC", "ModMedCo", "NroMedRe", "MarcMedR", "ModMedRe", "MarMo2", "Observacionesdedirecci", "AdvertenciaAlLector", "ClaseServ", "Acometida", "Tensi" ,"Potencia", "TipoObra", "Toma", "Conex", "UbicPrec1", "UbicPrec2", "UbicPrec3", "Cliente", "NombredelCliente", "Calle", "Numero", "Piso", "Dpto", "Telefono", "Entrecalle1", "YCalle2", "Localidad", "Partido", "FecReal", "LecReacR", "NroNotif", "UsuarioM", "FechaCont", "FechaBat", "HoraBatch", "MvoNORE", "DescripcionMotivo", "CostePlanificado", "CosteReal", "CosteMateriales", "CosteServicios"])
                myArray=result.data
     
                 var collection = myArray.slice(); 
                 var keys = collection.shift();
                
                collection = collection.map(function (e) {
                    var obj = {};
                
                    keys.forEach(function (key, i) {
                      obj[key] = e[i];
                    });
                
                    return obj;
                });
         setSap(collection) 

      }})
     
              }

              const handleSapUpload3 = (e) => {
                var myArray
                const files=e.target.files
                if (files){
           
                    }
                    Papa.parse(files[0], { header: false, skipEmptyLines:true,    complete: (result) => {
                      result.data.shift()
                      result.data.unshift(["Calle", "Cliente", "CostoTotal", "CostoTotalReal", "Estado", "EstadodeSolicitud", "FechaIngresoCliente", "FechaIngresoProveedor", "FechaVencimientoProveedorACV", "FechaVencPedido", "FechadeCierre","FechadeRealizaciondelTrabajo", "FechadeRespuesta", "FechadelaUltimaDerivacion", "Localidad", "MotivoOrigen", "NroCliente", "NroDocOrigenSolicitud", "NroPIT", "NroMensajeNroDocOrigen", "NrodeAvisoOrden", "ObservacionesDeLaUltimaDerivacion", "OrigenPedido", "Partido", "ReqObraCliente", "Servicio", "Ubicacion", "Zona"])
                    
                    for(let i=1; i<result.data.length;i++){
                    var myTemp=  result.data[i][9].split("/")
           
                    if (myTemp[0]<10){myTemp[0]="0"+myTemp[0]}
                    if (myTemp[1]<10){myTemp[1]="0"+myTemp[1]}
                    result.data[i][9]=myTemp[2]+"-"+myTemp[1]+"-" +myTemp[0]
                 }
                   var myArray=result.data
                     var collection = myArray.slice(); 
                     var filteredCollection
                     var keys = collection.shift();
                    
                    collection = collection.map(function (e) {
                        var obj = {};
                    
                        keys.forEach(function (key, i) {
                          obj[key] = e[i];
                        });
                    
                        return obj;
                    });
                    if(fechaRST.max){
                   filteredCollection=collection.filter(campo=> Date.parse(campo.FechaVencPedido)>Date.parse(fechaRST.max))}
                      else{filteredCollection=collection}
                      console.log(filteredCollection)
             setRst(filteredCollection) 
          }})
         
                  }
                  const handleSapUpload4 = (e) => {
                    const files=e.target.files
                    if (files){
                        console.log(files[0]);
               
                        }
                        Papa.parse(files[0], { header: true,     complete: (result) => {
                          setTabla(result.data) 
                          console.log(result.data)
                        }})
             
                      }
                      const handleSapUpload5 = (e) => {
                        var myArray
                        const files=e.target.files
                        if (files){
                   
                            }
                            Papa.parse(files[0], { header: false, skipEmptyLines:true,    complete: (result) => {
                              result.data.shift()
                              result.data.unshift(["Calle", "Cliente", "CostoTotal", "CostoTotalReal", "Estado", "EstadodeSolicitud", "FechaIngresoCliente", "FechaIngresoProveedor", "FechaVencimientoProveedorACV", "FechaVencPedido", "FechadeCierre","FechadeRealizaciondelTrabajo", "FechadeRespuesta", "FechadelaUltimaDerivacion", "Localidad", "MotivoOrigen", "NroCliente", "NroDocOrigenSolicitud", "NroPIT", "NroMensajeNroDocOrigen", "NrodeAvisoOrden", "ObservacionesDeLaUltimaDerivacion", "OrigenPedido", "Partido", "ReqObraCliente", "Servicio", "Ubicacion", "Zona"])
                            
                            for(let i=1; i<result.data.length;i++){
                            var myTemp=  result.data[i][9].split("/")
                   
                            if (myTemp[0]<10){myTemp[0]="0"+myTemp[0]}
                            if (myTemp[1]<10){myTemp[1]="0"+myTemp[1]}
                            result.data[i][9]=myTemp[2]+"-"+myTemp[1]+"-" +myTemp[0]
                         }
                           var myArray=result.data
                             var collection = myArray.slice(); 
                             var filteredCollection
                             var keys = collection.shift();
                            
                            collection = collection.map(function (e) {
                                var obj = {};
                            
                                keys.forEach(function (key, i) {
                                  obj[key] = e[i];
                                });
                            
                                return obj;
                            });

                     setRstP(collection) 
                  }})
                 
                          }
    
    const handleReset1 = (e) => {
        inputRef1.current.value = null;
        setSf([])
      }

      const handleReset2 = (e) => {
        inputRef2.current.value = null;
        setSap([])
      }

      const handleReset3 = (e) => {
        inputRef3.current.value = null;
        setRst([])
      }
      const handleReset5 = (e) => {
        inputRef5.current.value = null;
        setRstP([])
      }
      const handleReset4 = (e) => {
        inputRef4.current.value = null;
        setSf([])
      }
    const handleOK1 = async() => {


        try{
    await axios.post(`http://localhost:3001/datos/`, sf)
    }
    catch(error){console.log(error)}}

    const handleOK2 = async() => {
      try{
        await axios.post(`http://localhost:3001/sap/`, sap)
        }
        catch(error){console.log(error)}}
     
    const handleOK3 = async(e) => { 
      try{
        await axios.post(`http://localhost:3001/rst/`, rst)
        }
        catch(error){console.log(error)}
        const datos=await axios.get(`http://localhost:3001/fecharst`)
        setFechaRST(datos.data)
      }
      const handleOK5 = async(e) => { 
        try{
          await axios.post(`http://localhost:3001/rst/`, rstP)
          }
          catch(error){console.log(error)}

        }

        const handleOK4 = async() => {


          try{
      await axios.post(`http://localhost:3001/estado/`, tabla)
      }
      catch(error){console.log(error)}}

      React.useEffect(() =>  {
    
        const getMaxFechaIngresoCliente= async() => {

            const datos=await axios.get(`http://localhost:3001/fecharst`)
        setFechaRST(datos.data)
        console.log(datos.data)
          
          return datos.data}
    
 getMaxFechaIngresoCliente()

    
   
      },[]);

    return (
      <>
    <Text fontSize='xl' p="20px">Suba la interfaz de Sales Force</Text> 
    <HStack spacing='24px' my="30px">
   <Button colorScheme='red' onClick={handleReset1}>Reset</Button> 
      <Button colorScheme='green' onClick={handleOK1}>OK</Button>
      <Input ref={inputRef1}  placeholder='Outline' type='file' accept=".csv"  onChange={handleSapUpload} />
    </HStack>
    <Text fontSize='xl' p="20px">Suba la interfaz de SAP </Text> 
   <HStack spacing='24px' my="30px">
   <Button colorScheme='red' onClick={handleReset2}>Reset</Button> 
      <Button colorScheme='green' onClick={handleOK2}>OK</Button>
      <Input ref={inputRef2}  placeholder='Outline' type='file' accept=".txt"  onChange={handleSapUpload2} />
    </HStack>
    <Text fontSize='xl' p="20px">Suba la interfaz de RST cerrados. Ultima subida {fechaRST.max}  </Text> 
   <HStack spacing='24px' my="30px">
   <Button colorScheme='red' onClick={handleReset3}>Reset</Button> 
      <Button colorScheme='green' onClick={handleOK3}>OK</Button>
      <Input ref={inputRef3}  placeholder='Outline' type='file' accept=".csv, .xlsx, .xls"  onChange={handleSapUpload3} />
    </HStack>
    <Text fontSize='xl' p="20px">Suba la interfaz de RST pendiente</Text> 
   <HStack spacing='24px' my="30px">
   <Button colorScheme='red' onClick={handleReset5}>Reset</Button> 
      <Button colorScheme='green' onClick={handleOK5}>OK</Button>
      <Input ref={inputRef5}  placeholder='Outline' type='file' accept=".csv, .xlsx, .xls"  onChange={handleSapUpload5} />
    </HStack>
    <Text fontSize='xl' p="20px">Suba la tabla de estados</Text> 
    <HStack spacing='24px' my="30px">
   <Button colorScheme='red' onClick={handleReset4}>Reset</Button> 
      <Button colorScheme='green' onClick={handleOK4}>OK</Button>
      <Input ref={inputRef4}  placeholder='Outline' type='file' accept=".csv"  onChange={handleSapUpload4} />
    </HStack>
  
  </>
    );
  }
  export default Subir