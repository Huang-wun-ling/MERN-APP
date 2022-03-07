import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div class="container py-4">
        <div
          class="p-5 mb-4 bg-light rounded-3 body1 card"
          style={{ color: "white" }}
        >
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">學習方向</h1>
            <p class="col-md-8 fs-4">
              此網站使用 React.js 作為前端框架，以及
              Node.js、MongoDB作為後端伺服器。
              此項目稱呼為MERN項目，是最流行的創作網站之一。
            </p>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>使用 "student" </h2>
              <p>
                您可以通過註冊成為一名學生，搜尋相關課程並報名課程。本網站為練習使用，請勿提供任何個人信息，例如信用卡號碼。
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>使用 "Instructor" </h2>
              <p>
                您可以通過註冊成為一名講師，然後開始制定在線課程。本網站為練習使用，請勿提供任何個人信息，例如信用卡號碼。
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <footer class="pt-3 mt-4 text-muted border-top">
          &copy; 2022 Phil Huang
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
