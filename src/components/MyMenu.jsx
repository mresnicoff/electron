import { NavLink, useNavigate } from "react-router-dom";
import {
    Menu,
    Button,
    MenuButton,
    MenuList,
    useColorMode,
    MenuItem,

  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

function MyMenu(props) {
  const navigate=useNavigate()
const navToResumen=()=>{
  props.setResumenVisible(true)
  navigate('/resumen')}


return(
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem><NavLink to="/subir">Subir</NavLink></MenuItem>
    <MenuItem><NavLink to="/ver">Ver</NavLink></MenuItem>
    <MenuItem><NavLink to="/cerrar">Cerrar en Sales Force</NavLink></MenuItem>
    <MenuItem onClick={navToResumen}>Resumen</MenuItem>
  </MenuList>
</Menu>)}
export default MyMenu