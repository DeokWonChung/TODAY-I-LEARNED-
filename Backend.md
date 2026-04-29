# backend
## 서버의 구축
1. API키를 발급받아야 한다.
2. 환경변수를 관리한다. .env파일에 발급받은 API키를 환경변수로 선언한다.
3. 서버의 구현
   -  axios 라이브러리를 이용하여 서버에 데이터 요청을 보낸다.
   -  npm install axios dotenv
4. 데이터 연산 및 처리 주의사항
   - 데이터 포멧 확인 요: XML 파일의 json화 xm요(_type = json, 서버에서 XML을 JSON으로 파싱)
   - 트래픽의 제한: 필요시 캐싱하여 대량 연산에 대항
   - 인증 에러 해결
## 환경변수 용어 정리
- SERVICE_KEY: 일반 인증키
- API_URL: base url

## 코드 구조화 방안 FOR 가독성 및 재사용성
1. service layer 두기(Example_Of_Service.js)
   - 비즈니스 로직과 외부 API통신을 전담하는 Service Layer을 두는 것
   - API호출 로직과 라우터가 분리되어 코드 파악 용이
   - 
2. class 기반 wrapper 방식
   - API를 하나의 class로 지정하여 관리
   - 싱글톤패턴으로 관리하기 쉽고, 설정값 변경 용이
3. Utility (Helper)함수 방식
   - 구현이 가장 단순
