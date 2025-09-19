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

<img src="https://private-user-images.githubusercontent.com/39899731/491393555-f8c2ab3b-b013-4032-b00a-5e449a823b4e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgyNTcxMTksIm5iZiI6MTc1ODI1NjgxOSwicGF0aCI6Ii8zOTg5OTczMS80OTEzOTM1NTUtZjhjMmFiM2ItYjAxMy00MDMyLWIwMGEtNWU0NDlhODIzYjRlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTE5VDA0NDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmNDM5NmRjNzExYTUwYTRlNGFmOTJmYmY0ZTY5ZDg3NzZjOTA4ODM2ZDY4OGQzMzJlZGVmOWI5MTg2YzU0YTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Xptq9GoXU5aAeC95gP0R_Vq3-aPu4oec-HU07leV6aM" alt="example">

### cursor AI
1. `F1`키를 눌러 명령어 창에 다음 명령어 실행 `> View: Open MCP Settings`
2. `New MCP Server` 버튼을 눌러 `mcp.json`에 위 endpoint 추가
3. Prompt 입력 시 `agent` 모드 설정 후 사용

<img src="https://private-user-images.githubusercontent.com/39899731/491394108-0feadb71-bc8c-449d-92bd-2a3d8c4acdb3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgyNTcxMTksIm5iZiI6MTc1ODI1NjgxOSwicGF0aCI6Ii8zOTg5OTczMS80OTEzOTQxMDgtMGZlYWRiNzEtYmM4Yy00NDlkLTkyYmQtMmEzZDhjNGFjZGIzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTE5VDA0NDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJkYzYxMDhmMWQ3YzYxMThiOWJmMjUwMDc4YzMyMThlNjAxODQyNzAyOTViM2UwY2U1MTI0NjMxNDMzNTZjZjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.wkD_VHodfi4JwXOCkKqN9Yn5TcQh9pJAE2X_O7OueGI" alt="">

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


