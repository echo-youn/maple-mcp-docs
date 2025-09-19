---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Maplestory MCP"
  text: "by NEXON OPEN API"
  tagline: AI로 쉽게 연결하는 메이플스토리 OPEN API
---

## MCP Server Endpoint

```json
{
  "mcpServers": {
    "maple-mcp": {
      "url": "https://oci-alb.echo-youn.com/maple-mcp/mcp"
    }
  }
}
```

## 연결 방법

### Postman
1. MCP 타입으로 변경
2. `HTTP` 선택 및 url 입력 후 `연결`

<img src="/postman-example.png" alt="example">

### cursor AI
1. `F1`키를 눌러 명령어 창에 다음 명령어 실행 `> View: Open MCP Settings`
2. `New MCP Server` 버튼을 눌러 `mcp.json`에 위 endpoint 추가
3. Prompt 입력 시 `agent` 모드 설정 후 사용

<img src="/agent-example.png" alt="">

### visual studio code
1. `F1`키를 눌러 명령어 창에 다음 명령어 실행 `> MCP: AddServer...`
2. `HTTP` 선택
3. 위의 `url`입력 및 나머지 설정


### chatGPT
1. `설정 - 커넥터`로 이동
2. 하단에 `고급 설정 - 개발자 모드` 활성화
3. `커넥터 찾아보기 - 만들기` 이동
4. `MCP 서버 URL`에 위 URL 입력
5. `인증 없음` 선택 (추후에 인증 기능 추가 가능)
6. `만들기`

<script client type="text/javascript" src="https://openapi.nexon.com/js/analytics.js?app_id=237485" async></script>
