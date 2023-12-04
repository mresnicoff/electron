import axios from "axios";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import React from "react";
import {
    VStack,
    Text,
    Grid,
    Button,
    GridItem,
    HStack

  } from '@chakra-ui/react'

  function Cerrar(props) {
    const [resultados, setResultados]=React.useState([])
 
    const handleDownload=(array)=>{
      const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
      const fileName="download"

    if(resultados.length){
    const ws = XLSX.utils.json_to_sheet(resultados);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }};
    React.useEffect(() =>  {
    
        const getResumen= async(numero) => {

            const datos=await axios.get(`http://localhost:3001/filtro1`)
            console.log(datos.data)
        setResultados(datos.data)
          
          return datos.data}
    
 getResumen(10)
    
   
      },[]);

    return(
   <>



   <VStack>
   <HStack><Text> Cerrar en SF </Text></HStack>
     <Grid
     w="80%"
     h="40%"
     templateRows={`repeat(${resultados.length+2}, 1fr)`}
     templateColumns='repeat(10, 1fr)'
     gap={1}>
       <GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Clientes abiertos en SF -Pedido de Demolición- con instalación removida  </Text><Button  color='black' onClick={()=>handleDownload()} >Bajar a Excel</Button></GridItem>
      <GridItem  rowSpan={1} colSpan={2} bg='blue.700' >Cliente: </GridItem>
      <GridItem  rowSpan={1} colSpan={5} bg='blue.700' >Direccion: </GridItem>
      <GridItem  rowSpan={1} colSpan={1} bg='blue.700' >Caso: </GridItem>
      <GridItem  rowSpan={1} colSpan={2} bg='blue.700' >Estado: </GridItem>

      {resultados.map((dato,index) =>  <><GridItem fontSize='md' rowSpan={1}  colSpan={2} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.cliente}</Text></GridItem> <GridItem rowSpan={1} colSpan={5} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.direccion}</Text></GridItem><GridItem rowSpan={1} colSpan={1} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.caso}</Text></GridItem><GridItem rowSpan={1} colSpan={2} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.desc_estado}</Text></GridItem></>
    
    )}


      </Grid> 
     </VStack>


    </>
  )}
  export default Cerrar