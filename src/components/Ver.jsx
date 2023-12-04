import React from 'react'
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  VStack,
  Text,
  Grid,
  GridItem
} from '@chakra-ui/react'

function Ver() {
  const getData= async(cliente) => {

    const datos=await axios.get(`http://localhost:3001/getdatos?cliente=${cliente}`)
  return datos.data}
  const getDataRst= async(cliente, suministro) => {

    const datos=await axios.get(`http://localhost:3001/getdatosRst?cliente=${cliente}&suministro=${suministro}`)
  return datos.data}
  const getDataSap= async(cliente) => {

    const datos=await axios.get(`http://localhost:3001/getdatosSap?cliente=${cliente}`)
  return datos.data}
  const getDataBaja= async(cliente) => {

    const datos=await axios.get(`http://localhost:3001/getdatosbaja?cliente=${cliente}`)
  return datos.data}
  const [detalleRst, setDetalleRst] = React.useState(false);
  const [todosRst,setTodosRst]= React.useState([]);
  const [cantidadRst, setCantidadRst] = React.useState(0);
  const [cliente, setCliente] = React.useState('');
  const[datosCliente, SetDatosCliente]=React.useState({})
  const[datosClienteRst, SetDatosClienteRst]=React.useState({})
  const[datosClienteSap, SetDatosClienteSap]=React.useState({})
  const[datosClienteBaja, SetDatosClienteBaja]=React.useState({})
  const [encontrado, setEncontrado] = React.useState(false);
  const [encontradoBaja, setEncontradoBaja] = React.useState(false);
  const [encontradoRst, setEncontradoRst] = React.useState(false);
  const [encontradoSap, setEncontradoSap] = React.useState(false);
  const handleclick=()=>{
    setEncontrado(false)
    setTodosRst([])
    setCantidadRst(0)
    SetDatosCliente({})
    SetDatosClienteRst({})
    setEncontradoRst(false)
    SetDatosClienteSap({})
    setEncontradoSap(false)
    SetDatosClienteBaja({})
    setEncontradoBaja(false)

  }
  const handleVerTodos=()=>{
    setDetalleRst(true)
  }
  const handleVolver=()=>{
    setDetalleRst(false)
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    const estosDatos=await getData(cliente)
    if(estosDatos.length===0){
      alert(`el cliente no está en la base de Pedidos de Demolición`);
      return
    }
    setEncontrado(true)
    SetDatosCliente(estosDatos[0])
    const estosDatosBaja=await getDataBaja(cliente)
    if (estosDatosBaja.length>0){
      setEncontradoBaja(true)
      SetDatosClienteBaja(estosDatosBaja[0])
    }
    console.log(estosDatosBaja)
    const estosDatosRst=await getDataRst(cliente,estosDatos[0].numerosuministro)
    if (estosDatosRst.length>0){
      var imax=0
      console.log(estosDatosRst.FechaIngresoCliente)
   for (let i=1;i<estosDatosRst.length;i++){
    if (Date.parse(estosDatosRst[i].FechaIngresoCliente)>Date.parse(estosDatosRst[imax].FechaIngresoCliente)){imax=i}
   }
      setEncontradoRst(true)
      setCantidadRst(estosDatosRst.length)
      console.log(estosDatosRst.length)
      SetDatosClienteRst(estosDatosRst[imax])
      setTodosRst(estosDatosRst)
    }
    const estosDatosSap=await getDataSap(cliente)
    if (estosDatosSap.length>0){
      setEncontradoSap(true)
      SetDatosClienteSap(estosDatosSap[0])
      console.log(estosDatosSap[0])
    }
  };
    return (
      <>
{!encontrado && <Box m="10" p="8" maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
<form onSubmit={handleSubmit}>
  <FormControl padding="10">
  <FormLabel>Número de cliente</FormLabel>
  <Input size="lg" type='text' onChange={event => setCliente(event.currentTarget.value)}/>
  <FormHelperText>Ingrese el número de cliente.</FormHelperText>
</FormControl>
<Button colorScheme='blue' type="submit">Enviar</Button>
</form>
</Box>}
{!detalleRst && encontrado && <VStack>
  <Text> Datos en del cliente {datosCliente.cliente} </Text>
    <Grid
    w="80%"
    h="40%"
    templateRows={`repeat(10, 1fr)`}
    templateColumns='repeat(10, 1fr)'
    gap={1}
>
  <>
  <GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Datos en Sales Force</Text></GridItem>
  <GridItem  rowSpan={1} colSpan={3} bg='blue.700' >{`Suministro: ${datosCliente.numerosuministro}`}</GridItem>
  <GridItem rowSpan={1} colSpan={2} bg='blue.700' >{`Caso: ${datosCliente.caso}`}</GridItem>
  <GridItem rowSpan={1} colSpan={5} bg='blue.700' >{`Dirección: ${datosCliente.direccion}`}</GridItem>
  <GridItem rowSpan={1} colSpan={3} bg='blue.400' >{`Estado: ${datosCliente.desc_estado}`}</GridItem>
  <GridItem rowSpan={1} colSpan={4} bg='blue.400' >{`Fecha Apertura: ${datosCliente.fechaapertura}`}</GridItem>
  <GridItem rowSpan={1} colSpan={3} bg='blue.400' >{`Fecha de Cierre: ${datosCliente.fechacierre}`}</GridItem>
  <GridItem rowSpan={1} colSpan={10} bg='blue.700' >{`Observaciones: ${datosCliente.observaciones}`}</GridItem>
  </>
  {encontradoBaja?
  <>
  <GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text color='black' p="8px" fontSize='xl'>Datos Baja</Text></GridItem>
  <GridItem rowSpan={1} colSpan={3} bg='blue.400' >{`Estado: ${datosClienteBaja.desc_estado}`}</GridItem>
  <GridItem rowSpan={1} colSpan={4} bg='blue.400' >{`Fecha Apertura: ${datosClienteBaja.fechaapertura}`}</GridItem>
  <GridItem rowSpan={1} colSpan={3} bg='blue.400' >{`Fecha de Cierre: ${datosClienteBaja.fechacierre}`}</GridItem>
  <GridItem rowSpan={1} colSpan={10} bg='blue.700' >{`Observaciones: ${datosClienteBaja.observaciones}`}</GridItem>
  </>
  :<GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text color='black' p="8px" fontSize='xl'>No hay datos de Baja</Text></GridItem>}

  {encontradoRst?
  <>
  <GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text color='black' p="8px" fontSize='xl'>Datos RST</Text></GridItem>
  <GridItem rowSpan={1} colSpan={10} bg='blue.700' ><Text p="4px" fontSize='sm'>{`Servicio: ${datosClienteRst.Servicio}`}</Text></GridItem>
    <GridItem rowSpan={1} colSpan={1} bg='blue.400' ><Text p="4px" fontSize='sm'>{`Estado: ${datosClienteRst.Estado}`}</Text></GridItem>
    <GridItem rowSpan={1} colSpan={3} bg='blue.400' ><Text p="4px" fontSize='sm'>{`Ubicación : ${datosClienteRst.Ubicacion}`}</Text></GridItem>
  <GridItem rowSpan={1} colSpan={2} bg='blue.400' ><Text p="4px" fontSize='sm'>{`Fecha ingreso Cliente: ${datosClienteRst.FechaIngresoCliente}`}</Text></GridItem>
    <GridItem rowSpan={1} colSpan={2} bg='blue.400' ><Text p="4px" fontSize='sm'>{`Fecha Ingreso Proveedor : ${datosClienteRst.FechaIngresoProveedor}`}</Text></GridItem>
    <GridItem rowSpan={1} colSpan={2} bg='blue.400' ><Text p="4px" fontSize='sm'>{`Doc Origen : ${datosClienteRst.NroDocOrigenSolicitud}`}</Text></GridItem>
  <GridItem rowSpan={1} colSpan={cantidadRst>1?8:10} bg='blue.700' ><Text p="4px" fontSize='sm'>{`OBS: ${datosClienteRst.ObservacionesDeLaUltimaDerivacion}`}</Text></GridItem>
  {cantidadRst>1 &&<GridItem  rowSpan={1} colSpan={2} bg='blue.700' ><Button onClick={()=>handleVerTodos()} >Ver todos PIT RST</Button></GridItem>}
  </>
  
  :<GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text color='black' p="8px" fontSize='xl'>No hay datos RST</Text></GridItem>}

{encontradoSap?
  <>
  <GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text color='black' p="8px" fontSize='xl'>Datos SAP</Text></GridItem>
  <GridItem rowSpan={1} colSpan={10} bg='blue.700' ><Text p="4px" fontSize='sm'>{`Status: ${datosClienteSap.StatusUsuario}`}</Text></GridItem>
    <GridItem rowSpan={1} colSpan={5} bg='blue.400' ><Text p="4px" fontSize='sm'>{`Fecha Modificación: ${datosClienteSap.Femodif}`}</Text></GridItem>
  <GridItem rowSpan={1} colSpan={5} bg='blue.400' ><Text p="4px" fontSize='sm'>{`Costo Total: ${datosClienteSap.CosteReal}`}</Text></GridItem>
  <GridItem rowSpan={1} colSpan={10} bg='blue.700' ><Text p="4px" fontSize='sm'>{`OBS: ${datosClienteSap.Observacionesdedirecci}`}</Text></GridItem>
  </>
  
  :<GridItem rowSpan={1} colSpan={10} bg='blue.100' ><Text color='black' p="8px" fontSize='xl'>No hay datos en SAP</Text></GridItem>}

</Grid>


<Button onClick={handleclick} colorScheme='blue' type="submit">Buscar otro Cliente</Button>

    </VStack>}
    {detalleRst &&
   <VStack>
   <Text> Todos los PIT en RST del Cliente </Text>
     <Grid
     w="80%"
     h="40%"
     templateRows={`repeat(${todosRst.length+2}, 1fr)`}
     templateColumns='repeat(12, 1fr)'
     gap={1}>
       <GridItem rowSpan={1} colSpan={12} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Detalle de casos  </Text></GridItem>
      <GridItem  rowSpan={1} colSpan={1} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Fecha Ingreso Cliente:</Text> </GridItem>
      <GridItem  rowSpan={1} colSpan={1} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Fecha ingreso Proveedor:</Text> </GridItem>
      <GridItem  rowSpan={1} colSpan={1} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Doc Origen:</Text> </GridItem>
      <GridItem  rowSpan={1} colSpan={1} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Servicio:</Text> </GridItem>
      <GridItem  rowSpan={1} colSpan={1} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>Estado:</Text> </GridItem>
      <GridItem  rowSpan={1} colSpan={7} bg='blue.100' ><Text  color='black' p="8px" fontSize='xl'>OBS:</Text> </GridItem>
   
      {todosRst.map((dato,index) =>  <><GridItem fontSize='md' rowSpan={1}  colSpan={1} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.FechaIngresoCliente}</Text></GridItem> <GridItem rowSpan={1} colSpan={1} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.FechaIngresoProveedor}</Text></GridItem><GridItem rowSpan={1} colSpan={1} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.NroDocOrigenSolicitud}</Text></GridItem>
      <GridItem rowSpan={1} colSpan={1} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.Servicio}</Text></GridItem>
      <GridItem rowSpan={1} colSpan={1} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.Estado}</Text></GridItem>
      <GridItem rowSpan={1} colSpan={7} bg={index%2===0?'blue.700':'blue.400'}><Text p="2px" fontSize='l'>{dato.ObservacionesDeLaUltimaDerivacion}</Text></GridItem></>
    
    )}


      </Grid> 
      <Button onClick={handleVolver} colorScheme='blue'>Volver</Button>
     </VStack>}
  </>
  
    );
  }
  export default Ver