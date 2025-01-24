**belum jalan**

- kalo mau deleteAll() sama backspace() setelah ngeklik fungsi operator gajalan

ikut github
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- feather icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <!-- font poppins -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
    <script src="./main.js"></script>

    <title>Calculator App</title>
  </head>
  <body>
    <h1>Standard Calculator</h1>

    <div class="container">
      <p class="answer-text" id="answer">
        <span class="blinking-cursor">|</span>
      </p>
      <ul>
        <li id="btnDeleteAll">AC</li>
        <li id="btnPercent">%</li>
        <li id="btnBackspace">
          <i data-feather="delete"></i>
        </li>
        <li id="btnDivision">/</li>
        <li data-number>7</li>
        <li data-number>8</li>
        <li data-number>9</li>
        <li id="btnMultiple">x</li>
        <li data-number>4</li>
        <li id="btnFive">5</li>
        <li data-number>6</li>
        <li id="btnSubstraction">-</li>
        <li data-number>1</li>
        <li data-number>2</li>
        <li data-number>3</li>
        <li id="btnPlus">+</li>
        <li data-number>00</li>
        <li data-number>0</li>
        <li data-number>.</li>
        <li id="btnEqual">=</li>
      </ul>
    </div>
    <script>
      feather.replace();
    </script>
  </body>
</html>
`