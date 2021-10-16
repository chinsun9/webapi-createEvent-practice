# webapi-createEvent-practice

> 스페이스바를 누르면 아래 방향키(↓)를 누르도록 해보자 (단축키 alias)

## 기능

- 스크롤 오버라이드 ; 방향키, 페이지 업다운 키를 눌렀을 때 100vh(한화면)만큼 스크롤
- 단축키 alias ; 스페이스바를 누르면 ArrowDown 키를 누른 것처럼 동작하도록 키보드 이벤트 생성

## 메모

- `document.createEvent()` 대신 `new Event()`를 사용

## 참고

- https://stackoverflow.com/questions/596481/is-it-possible-to-simulate-key-press-events-programmatically
- https://developer.mozilla.org/ko/docs/Web/API/Document/createEvent
- https://developer.mozilla.org/ko/docs/Web/API/EventTarget/dispatchEvent
- https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
- https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
