import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function MemberSignUp() {
  const navigate = useNavigate();

  function handleSubmitClick() {
    axios
      .post(`/api/member/signup`)
      .then((res) => {})
      .catch(() => {})
      .finally();
  }

  return (
    <Box>
      <Box>
        <Heading>회원가입 페이지</Heading>
      </Box>
      <Center>
        {/*이메일(중복확인)*/}
        <Box></Box>
        {/*암호*/}
        <Box></Box>
        {/*암호확인*/}
        <Box></Box>
        {/*닉네임(중복확인)*/}
        <Box></Box>
        {/*버튼*/}
        <Box>
          <Button onClick={() => navigate(`/`)}>취소</Button>
          <Button onClick={handleSubmitClick}>등록</Button>
        </Box>
      </Center>
    </Box>
  );
}
