# React 입문주차 개인과제

## 필수 요구사항

- [x] 제목과 내용을 입력하고, 추가하기 버튼을 클릭하면 Working 에 새로운 Todo가 추가되고 제목 input과 내용 input은 빈값으로 바뀌도록 구성
- [x] Todo의 isDone 상태에 따라서 완료, 취소 조건부 렌더링
- [x] Working 목록(isDone 상태 false)은 위쪽 Done 목록(isDone 상태 true)면 아래쪽에 위치
- [x] 최대 넓이는 1200px 최소 넓이는 800px로 제한, 전체화면의 가운데로 정렬
- [x] 컴포넌트 구조 자유롭게 구현, 컴포넌트 분리, 분리한 컴포넌트 README에 작성

## 컴포넌트 분리

```bash
├── components
│   ├── Layout.jsx        # 사이트 헤더와 푸터
│   ├── TodoForm.jsx      # TodoList에 제목과 내용을 입력할 form
│   └── TodoList.jsx      # TodoList Working, Done 목록 출력하는 section
└── App.jsx
```
