# 📝 YS's Todo List

> 작성일: 2026-02-13 

> 작성자: 김연수 

> **학습용 CRUD 할 일 관리 애플리케이션** > JavaScript의 기초인 DOM 조작과 이벤트 위임(Event Delegation)을 익히기 위해 제작하였습니다.

---

## 🚀 주요 기능 (Key Features)

* **할 일 추가 / 삭제**
* **완료 / 미완료 토글**
* **중요도 표시**
* **남은 할 일 카운트**

---

## 🛠 기술 스택 (Tech Stack)

* **Language**: HTML5, CSS3, JavaScript (ES6+)
* **Tools**: VS Code, Git, GitHub

---

## 🎨 화면 구성 (Wireframe)

![YS Todo List Wireframe](wireframe.png)

---

## 💡 주요 학습 포인트

1. **이벤트 위임(Event Delegation)**
* 개별 `li` 요소마다 이벤트 리스너를 달지 않고, 부모 요소인 `ul`에서 모든 클릭 이벤트를 관리하여 메모리 효율을 높였습니다.


2. **함수 분리 및 모듈화**
* 추가, 삭제, 토글 기능을 각각의 독립된 함수로 분리하여 유지보수가 쉬운 구조를 설계했습니다.


3. **이벤트 버블링 제어**
* 별표(중요도) 클릭 시 완료 토글이 동시에 일어나는 문제를 `e.stopPropagation()`으로 해결했습니다.



---

## 📂 폴더 구조 (Project Structure)

```text
ToDoList/
|--- todolist.html        # 메인 구조
|
|--- css/
|    |--- todolist.css    # 스타일링 및 완료 애니메이션
|
|--- js/
|    |--- todolist.js     # 핵심 비즈니스 로직
|
|--- docs/
|    |--- Project_Plan.md # 프로젝트 기획서
|    |--- wireframe.png   # 와이어프레임 이미지
|
|--- README.md

```
