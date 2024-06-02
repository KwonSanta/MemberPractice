import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex gap={3}>
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/`)}
      >
        HOME
      </Box>
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/board/list`)}
      >
        게시판
      </Box>
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/board/write`)}
      >
        글쓰기
      </Box>
      <Spacer />
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/member/list`)}
      >
        회원리스트
      </Box>
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/member/info`)}
      >
        회원정보
      </Box>
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/member/login`)}
      >
        로그인
      </Box>
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/member/signup`)}
      >
        회원가입
      </Box>
      <Box
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
        onClick={() => navigate(`/member/logout`)}
      >
        로그아웃
      </Box>
    </Flex>
  );
}
