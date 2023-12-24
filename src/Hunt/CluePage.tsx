import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ClueInfo from "./ClueInfo";
import ReactAudioPlayer from "react-audio-player";
import { useEffect, useState } from "react";

export default function CluePage() {
  const { clueId } = useParams();
  const [clueURLs, setClueURLs] = useState<string[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const setupClue = () => {
      if (clueId) {
        const lookup = ClueInfo[clueId];
        if (lookup) {
          setClueURLs(lookup);
          return;
        }
      }
      navigate('/');
    }
    setupClue();

  }, [clueId, navigate]);





  return (
    <Flex
      flexDirection="column"
      width="100"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }}>

            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              alignItems='center'
            >
              <div>
                {clueURLs?.map((clueURL) => <ReactAudioPlayer src={clueURL} controls={true} />)}
              </div>
            </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}