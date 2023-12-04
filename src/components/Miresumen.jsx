import axios from "axios";
import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import {
    VStack,
    Text,
    Grid,
    Button,
    GridItem,

  } from '@chakra-ui/react'

  function MiResumen(props) {
    const [resultados, setResultados]=React.useState({})
    const [datosRango, setDatosRango]=React.useState([])
    const [detalle, setDetalle]=React.useState(false)
   const handleVolver=()=>{
    setDetalle(false)
    setDatosRango([])
   }
    const handleClick=(array)=>{
    setDetalle(true)
    setDatosRango(array)
}
    React.useEffect(() =>  {
    
        const getResumen= async(numero) => {

            const datos=await axios.get(`http://localhost:3001/contar?numero=${numero}`)
        setResultados(datos.data)
          
          return datos.data}
    
 getResumen(10)
    
   
      },[]);
      const handleDownload=(array)=>{
        const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
        const fileName="download"
  
      if(datosRango.length){
      const ws = XLSX.utils.json_to_sheet(datosRango);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    }};

    return(
   <>
{resultados && !detalle &&
    <VStack>
  <Text> Resumen de datos </Text>
    <Grid
    w="80%"
    h="40%"
    templateRows={`repeat(10, 1fr)`}
    templateColumns='repeat(10, 1fr)'
    gap={1}>
      <GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Resumen de casos por Antigüedad </Text></GridItem>
     <GridItem  rowSpan={1} colSpan={7} bg='blue.700' >{`Menores a 30 días: ${resultados.menoresA30}`}</GridItem>
     <GridItem  rowSpan={1} colSpan={3} bg='blue.700' ><Button onClick={()=>handleClick(resultados.listam30)}>Ver detalle</Button></GridItem>
     <GridItem  rowSpan={1} colSpan={7} bg='blue.400' >{`Menores a 60 días: ${resultados.menoresA60}`}</GridItem>
     <GridItem  rowSpan={1} colSpan={3} bg='blue.400' ><Button  onClick={()=>handleClick(resultados.listam60)}> Ver Detalle</Button></GridItem>
     <GridItem  rowSpan={1} colSpan={7} bg='blue.700' >{`Menores a 90 días:  ${resultados.menoresA90}`}</GridItem>
     <GridItem  rowSpan={1} colSpan={3} bg='blue.700' ><Button onClick={()=>handleClick(resultados.listam90)} >Ver detalle</Button></GridItem>
     <GridItem  rowSpan={1} colSpan={7} bg='blue.400' >{`Mayores a 90 días:  ${resultados.mayoresA90}`}</GridItem>
     <GridItem  rowSpan={1} colSpan={3} bg='blue.400' ><Button onClick={()=>handleClick(resultados.listaM90)} >Ver detalle</Button></GridItem>
     </Grid> 
    </VStack>}

    {resultados && detalle &&
   <VStack>
   <Text> Datos del Rango </Text>
     <Grid
     w="80%"
     h="40%"
     templateRows={`repeat(${datosRango.length+2}, 1fr)`}
     templateColumns='repeat(10, 1fr)'
     gap={1}>
       <GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Detalle de casos  </Text><Button  color='black' onClick={()=>handleDownload()} >Bajar a Excel</Button></GridItem>
      <GridItem  rowSpan={1} colSpan={2} bg='blue.700' >Cliente: </GridItem>
      <GridItem  rowSpan={1} colSpan={2} bg='blue.700' >Direccion: </GridItem>
      <GridItem  rowSpan={1} colSpan={2} bg='blue.700' >Caso: </GridItem>
      <GridItem  rowSpan={1} colSpan={2} bg='blue.700' >Estado: </GridItem>
      <GridItem  rowSpan={1} colSpan={2} bg='blue.700' >Días: </GridItem>
      {datosRango.map((dato,index) =>  <><GridItem fontSize='md' rowSpan={1}  colSpan={2} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.cliente}</Text></GridItem> <GridItem rowSpan={1} colSpan={2} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.direccion}</Text></GridItem><GridItem rowSpan={1} colSpan={2} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.caso}</Text></GridItem><GridItem rowSpan={1} colSpan={2} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.desc_estado}</Text></GridItem><GridItem rowSpan={1} colSpan={2} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.dias}</Text></GridItem></>
    
    )}


      </Grid> 
      <Button onClick={handleVolver} colorScheme='blue'>Volver</Button>
     </VStack>}


    </>
  )}
  export default MiResumen