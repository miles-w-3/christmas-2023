import { Route, HashRouter as Router, Routes } from "react-router-dom"
import CluePage from "./CluePage"
import hennis from './hennis.png'
import { Text, Center } from "@chakra-ui/react"

export function HennisHunt() {
  return (
    <Router>
      <Routes>
        <Route path='/clue/:clueId' element={<CluePage/>} />
        <Route path='/*' element={
          <>
            <Text>Welcome to hennis hunt</Text>
            <Center
              alignContent='center'>
              <img src={hennis} />
            </Center>
          </>
        }/>
      </Routes>
    </Router>
  )
}