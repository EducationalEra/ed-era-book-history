Поява та поселення людей на території України
=============================================
Історія людства починається з появою першої людини. Археологічні
знахідки вказують на те, що перша людина – *Homo habilis (Людина
уміла)* – з’явилася близько 2 млн років тому в південно-східній Африці,
звідки розселилася по всій земній кулі. На територію сучасної України
вона потрапила через Балкани та Центральну Європу близько 1 млн років
тому.


Прадавню історію поділяють на періоди, пов’язані з найпоширенішим на той
час матеріалом. І історію України зачепили усі без винятку періоди.

<div class="centered-table-wrapper">
<table class="centered-table">
<tr>
    <td><b>Залізний вік</b></td>
    <td><b>Бронзовий вік</b></td>
    <td><b>Енеоліт</b></td>
    <td><b>Кам'яний вік</b></td>
</tr>
<tr>
    <td>I тис. до н. е.</td>
    <td>II-I тис. до н. е.</td>
    <td>IV-III тис. до н. е.</td>
    <td>6 тис. – 2 млн років тому</td>    
</tr>
</table>
</div>

<div class="centered-table-wrapper">
<table class="centered-table">
 <tr>
    <th colspan="5">Кам'яний вік</th>
  </tr>
  <tr>
    <th rowspan="2">неоліт</th>
    <th rowspan="2">мезоліт</th>
    <th colspan="3">палеліт</th>
  </tr>
    <th>пізній</th>
    <th>середній</th>
    <th>ранній</th>
   <tr>
        <td>6-8 тис.</td>
        <td>10-6 тис.</td>
        <td>35-11 тис.</td>
        <td>150-35 тис.</td>
        <td>2 млн.–150 тис.</td>
   </tr>
</table>
</div>



<quiz name="History" correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question text="Людство зародилося">
<answer>у центрі Африки</answer>
<answer>у Північній Америці</answer>
<answer correct>на півдні Африки</answer>
<answer>у південно-східній Азії</answer>
</question>
<question text="Наукова назва перших людиноподібних мавп">
<answer correct>Homo habilis </answer>
<answer>Homo erectus</answer>
<answer>Homo sapiens</answer>
<answer>Homo heidelbergensis</answer>
</question>
</quiz>

<body class="" style="padding-right: 0px;">
<div class="remodal-bg">
  <a href="#modal">Click</a>
  <br><br>

  <h1>Remodal</h1>
  <p>
    Flat, responsive, lightweight, fast, easy customizable modal window plugin
    with declarative state notation and hash tracking.
  </p>
  <p>
    Minified version size: ~4kb
  </p>
  <br>
</div>





<!-- You can define the global options -->
<script>
  // window.remodalGlobals = {
  //   namespace: "remodal",
  //   defaults: {
  //     hashTracking: true,
  //     closeOnConfirm: true,
  //     closeOnCancel: true,
  //     closeOnEscape: true,
  //     closeOnAnyClick: true
  //   }
  // };
</script>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="../libs/jquery/dist/jquery.min.js"><\/script>')</script>
<script src="../src/jquery.remodal.js"></script>

<!-- Events -->
<script>
  $(document).on("open", ".remodal", function () {
    console.log("open");
  });

  $(document).on("opened", ".remodal", function () {
    console.log("opened");
  });

  $(document).on("close", ".remodal", function (e) {
    console.log('close' + (e.reason ? ", reason: " + e.reason : ''));
  });

  $(document).on("closed", ".remodal", function (e) {
    console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
  });

  $(document).on("confirm", ".remodal", function () {
    console.log("confirm");
  });

  $(document).on("cancel", ".remodal", function () {
    console.log("cancel");
  });

//  You can open or close it like this:
//  $(function () {
//    var inst = $.remodal.lookup[$("[data-remodal-id=modal]"").data("remodal")];
//    inst.open();
//    inst.close();
//  });

  //  Or init in this way:
  var inst = $("[data-remodal-id=modal2]").remodal();
  //  inst.open();
</script><div class="remodal-overlay" style="display: none;"></div><div class="remodal-wrapper"><div data-remodal-id="modal2" class="remodal" style="visibility: visible;">
  <h1>Another one window</h1>
  <p>
    Hello!
  </p>
  <br>
  <a class="remodal-confirm" href="#">Hello!</a>
<a href="#" class="remodal-close"></a></div></div>


<div class="remodal-wrapper" style="display: none;"><div class="remodal" data-remodal-id="modal" style="visibility: visible;">
  <h1>Remodal</h1>
  <p>
    Flat, responsive, lightweight, fast, easy customizable modal window plugin
    with declarative state notation and hash tracking.
  </p>
  <p>
    Minified version size: ~4kb
  </p>
  <br>
  <a class="remodal-cancel" href="#">Cancel</a>
  <a class="remodal-confirm" href="#">OK</a>
<a href="#" class="remodal-close"></a></div></div></body>